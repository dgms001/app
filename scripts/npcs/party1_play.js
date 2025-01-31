/**
 * Cloto (NPC 9020001)
 * Hidden Street: 1st Accompaniment <1st Stage> (Map 103000800),
 *   Hidden Street: 1st Accompaniment <2nd Stage> (Map 103000801),
 *   Hidden Street: 1st Accompaniment <3rd Stage> (Map 103000802),
 *   Hidden Street: 1st Accompaniment <4th stage> (Map 103000803),
 *   Hidden Street: 1st Accompaniment <Last Stage> (Map 103000804)
 *
 * Lets the party continue on through each stage in the Kerning City party
 * quest.
 *
 *
 */

let stage = parseInt((map.getId() - 910340000) / 100);
let event = npc.getEvent("party1");

//TODO: GMS-like conversation
function clear(stage, exp) {
    event.setVariable(stage + "stageclear", true);
    map.screenEffect("quest/party/clear");
    map.soundEffect("Party1/Clear");
    map.portalEffect("gate");
    let members = event.getVariable("members");
    for (let i = 0; i < members.length; i++)
        if (members[i].getHp() > 0)
            members[i].gainExp(exp);
}

function failStage() {
    map.screenEffect("quest/party/wrong_kor");
    map.soundEffect("Party1/Failed");
}

function rectangleStages(stage) {
    let debug = false; //see which positions are occupied
    let stages = ["第二", "第三", "第4"];
    let objs = ["繩子", "平臺", "木桶"];
    let verbs = ["爬", "站", "站"];
    let donts = ["處於繩子的位置太低", "站得離邊緣太近", "站得離邊緣太近"];
    let combos = [
        [//stage 2
            [0, 1, 1, 1],
            [1, 0, 1, 1],
            [1, 1, 0, 1],
            [1, 1, 1, 0]
        ],
        [//stage 3
            [0, 0, 1, 1, 1],
            [0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1],
            [0, 1, 1, 1, 0],
            [1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1],
            [1, 1, 0, 1, 0],
            [1, 1, 1, 0, 0]
        ]
    ];
    let objsets = [
        [0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];

    let index = stage - 2;

    if (player.getId() == party.getLeader()) {
        let preamble = event.getVariable("leader" + stages[index] + "preamble");
        if (preamble == null || !preamble) {
            npc.sayNext("歡迎來到" + stages[index] + "階段. 在這個階段你會看到一些" + objs[index] + ".你們需要找到正確的" + objs[index] + "組合，才能進入到下一階段#k. 你們需要有#b3個隊員來尋找正確的" + objs[index] + "並" + verbs[index] + "在上面.#k\r\n如果你" + donts[index] + "將得不到正確答案; 請靠近" + objs[index] + "中間. 當然只允許3名隊員在" + objs[index] + "上. 當他們已經" + verbs[index] + "在上面, 隊長需要#b雙擊我來檢查是否是正確答案#k.好的，現在開始" + verbs[index] + "上去，來尋找正確的" + objs[index] + "組合吧!");
            event.setVariable("leader" + stages[index] + "preamble", true);
            let sequenceNum = Math.floor(Math.random() * combos[index].length);
            event.setVariable("stage" + stages[index] + "combo", sequenceNum);
        } else {
            // Check for stage completed
            let complete = event.getVariable(stage + "stageclear");
            if (complete != null && complete) {
                npc.sayNext("恭喜你完成當前階段，傳送口已經開啟,快點進入下一箇階段吧!");
            } else { // Check for people on ropes and their positions
                let totplayers = 0;
                for (let j = 0; j < objsets[index].length; j++) {
                    let count = map.getNumPlayersItemsInArea(j);
                    if (count >= 1) {
                        objsets[index][j]++;
                        totplayers += count;
                    }
                }

                // Compare to correct positions
                // Don't even bother if there aren't three players.
                if (totplayers == 3 || debug) {
                    let combo = combos[index][event.getVariable("stage" + stages[index] + "combo")];
                    let testcombo = true;
                    for (let i = 0; i < objsets[index].length && testcombo; i++)
                        if (combo[i] != objsets[index][i])
                            testcombo = false;
                    if (debug) {
                        let str = "包含的物件:";
                        for (let i = 0; i < objsets[index].length; i++)
                            str += "\r\n" + (i + 1) + ". " + objsets[index][i];
                        str += "\r\n正確的組合: ";
                        for (let i = 0; i < combo.length; i++)
                            str += "\r\n" + (i + 1) + ". " + combo[i];
                        if (testcombo) {
                            str += "\r\n結果: #g透過#k";
                            npc.say(str);
                        } else {
                            str += "\r\n結果: #r錯誤#k";
                            str += "\r\n#b是否強制完成當前階段?#k";
                            debug = npc.askYesNo(str);
                        }
                    }
                    if (testcombo || debug) {
                        clear(stage, Math.pow(2, stage) * 50);
                    } else {
                        failStage();
                    }
                } else {
                    npc.sayNext("3個隊友還沒有找到" + objs[index] + "嗎. 請考慮所有不同的組合.只允許有3名隊友" + verbs[index] + "在" + objs[index] + ", 如果你" + donts[index] + "將得不到正確的答案, 所以請記住這一點。繼續加油!");
                }
            }
        }
    } else {
        let complete = event.getVariable(stage + "stageclear");
        if (complete != null && complete)
            npc.sayNext("恭喜你完成當前階段，傳送口已經開啟,快點進入下一箇階段吧!");
        else
            npc.sayNext("請讓組隊長跟我交談.");
    }
}

function getPrize() {

    //TODO 獎勵


    let scrolls = [
        2040502, 1, 2040505, 1, // Overall DEX and DEF
        2040802, 1, // Gloves for DEX 
        2040002, 1, 2040402, 1, 2040602, 1	// Helmet, Topwear and Bottomwear for DEF
    ];
    let potions = [
        2000001, 80, 2000002, 80, 2000003, 80, // Orange, White, Blue Potions
        2000006, 50, 2000004, 5, // Mana Elixir, Elixir
        2022000, 15, 2022003, 15				// Pure Water, Unagi
    ];
    let equips = [
        1032004, 1, 1032005, 1, 1032009, 1, // Level 20-25 Earrings
        1032006, 1, 1032007, 1, 1032010, 1, // Level 30 Earrings
        1032002, 1, // Level 35 Earring
        1002026, 1, 1002089, 1, 1002090, 1	// Bamboo Hats
    ];
    let etc = [
        4010000, 15, 4010001, 15, 4010002, 15, 4010003, 15, // Mineral Ores
        4010004, 8, 4010005, 8, 4010006, 8, // Mineral Ores
        4020000, 8, 4020001, 8, 4020002, 8, 4020003, 8, // Jewel Ores
        4020004, 8, 4020005, 8, 4020006, 8, // Jewel Ores
        4020007, 3, 4020008, 3, 4003000, 30					// Diamond and Black Crystal Ores and Screws
    ];

    let rewards;
    let itemSetSel = Math.random();
    if (itemSetSel < 0.3) //30% chance
        rewards = scrolls;
    else if (itemSetSel < 0.6) //30% chance
        rewards = equips;
    else if (itemSetSel < 0.9) //30% chance
        rewards = potions;
    else //10% chance
        rewards = etc;

    let index = Math.floor(Math.random() * (rewards.length / 2)) * 2;
    if (party == null || player.getId() != party.getLeader()) {
        npc.say("想領取獎勵？那麼請讓你的隊長和我對話吧!\r\n(請確保每個隊員的包裹能放得下獎勵)");
    } else {
        var members = party.getLocalMembers();
        for (let dd = 0; dd < members.length; dd++) {
            members[dd].runScript("廢棄組隊通關獎勵")
            members[dd].changeMap(910340000, "sp");
            //getTaskCount(members[dd], 1, 1);
            //getTaskCount(members[dd], 1, 2);
            //getTaskCount(members[dd], 1, 3);
            //getTaskCount(members[dd], 1, 4);
        }
    }
}

//獲取成就次數
function getTaskCount(member, count, taskId) {
    //member.showSystemMessage("【成就係統】:成就編號:" + taskId + " 完成次數+1")
    member.customSqlUpdate("UPDATE jili_task_character SET taskCount = taskCount + " + parseInt(count) + " where taskId = '" + taskId + "' and characterId = '" + member.getId() + "'");
}

switch (stage) {
    case 1:
        let questions = [
            "第一個問題：請收集60張 #v4001007# ？#b\r\n（打倒怪物，獲取相應數量的證書。）",
            "第一個問題：請收集70張 #v4001007# ？#b\r\n（打倒怪物，獲取相應數量的證書。）",
            "第一個問題：請收集80張 #v4001007# ？#b\r\n（打倒怪物，獲取相應數量的證書。）",
            "第一個問題：請收集90張 #v4001007# ？#b\r\n（打倒怪物，獲取相應數量的證書。）",
            "第一個問題：請收集100張 #v4001007# ？#b\r\n（打倒怪物，獲取相應數量的證書。）",
            "第一個問題：請收集100張 #v4001007# ？#b\r\n（打倒怪物，獲取相應數量的證書。）",
            //"第一個問題：4轉最低等級是多少？#b\r\n（打倒怪物，獲取相應數量的證書。）",
            //"第一個問題：中國有幾個省級行政區域？#b\r\n（打倒怪物，獲取相應數量的證書。）",
            //"第一個問題：3年前冒險島3轉最低等級是多少？#b\r\n（打倒怪物，獲取相應數量的證書。）",
            //"第一個問題：5月份一共有多少天？#b\r\n（打倒怪物，獲取相應數量的證書。）",
            //"第一個問題：2008北京奧運會中國總共拿了多少枚金牌？#b\r\n（打倒怪物，獲取相應數量的證書。）"
        ];
        let answers = [60, 70, 80, 90, 100, 100];
        //let answers = [60, 100, 34, 70, 31, 59];
        if (player.getId() == party.getLeader()) {
            let preamble = event.getVariable("leader1stpreamble");
            if (preamble == null || !preamble) {
                event.setVariable("leader1stpreamble", true);
                npc.sayNext("你好，歡迎來到第一個階段，在這裡你可能會看到很多凶狠的鱷魚，跟我對話，我會給你們每一箇人出一道題目，你們再打倒凶狠的鱷魚獲取#r相應數目#k的證書卡交給我，就行了。之後我會給你們一張通行證，你們把通行證全部交給組隊長，組隊長再和我講話，就可以順利通關了，那麼祝你一切順利！");
            } else {
                let complete = event.getVariable(stage + "stageclear");
                if (complete != null && complete) {
                    npc.sayNext("現在可以到下一箇關卡了，如果不快點的話，門可能就關閉了。");
                } else {
                    // Check how many passes they have compared to number of party members
                    let numPasses = event.getVariable("members").length - 1;
                    if (!player.hasItem(4001008, numPasses)) {
                        npc.sayNext("你們還需要" + numPasses + "通行證才可以過關。");
                    } else {
                        clear(stage, 100);
                        if (numPasses > 0) {
                            player.loseItem(4001008, numPasses);
                        }
                        npc.sayNext("你們成功收集了 " + numPasses + "通行證。 已經成功完成了第一階段。好了，我將開啟通往下一箇關卡的結界，時間不多了，你們趕快到那裡進行第二階段的挑戰吧。");
                    }
                }
            }
        } else {
            let pVar = "member1stpreamble" + player.getId();
            let qIndexVar = "member1st" + player.getId();
            let preamble = event.getVariable(pVar);
            if (preamble == null || !preamble) {
                let qIndex = event.getVariable(qIndexVar);
                if (qIndex == null) {
                    // Select a random question to ask the player.
                    qIndex = Math.floor(Math.random() * questions.length);
                    event.setVariable(qIndexVar, qIndex);
                }
                npc.sayNext("你好，歡迎來到第一個階段，在這裡你可能會看到很多凶狠的鱷魚，跟我對話，我會給你們每一箇人出一道題目，你們再打倒凶狠的鱷魚獲取相應數目的證書卡交給我，就行了。之後我會給你們一張通行證，你們把通行證全部交給組隊長，組隊長再和我講話，就可以順利通關了，那麼祝你一切順利！");
                npc.sayNext("你需要回答的問題是:" + questions[qIndex]);
                event.setVariable(pVar, true);
            } else {
                let complete = event.getVariable(stage + "stageclear");
                if (complete != null && complete) {
                    npc.sayNext("傳送口已經開啟,快點進入下一箇階段吧...");
                } else {
                    let dVar = "member1stdone" + player.getId();
                    complete = event.getVariable(dVar);
                    // don't let one player get more than one pass for his question
                    if (complete == null || !complete) {
                        // Reply to player correct/incorrect response to the question they have been asked
                        let numcoupons = answers[event.getVariable(qIndexVar)];
                        if (!player.hasItem(4001007, numcoupons + 1) && player.hasItem(4001007, numcoupons)) {
                            player.loseItem(4001007, numcoupons);
                            //there should already be at least one empty slot in the ETC inventory by now
                            player.gainItem(4001008, 1);
                            npc.sayNext("回答正確,請收好通行證,並把它交給隊長!");
                            event.setVariable(dVar, true);
                        } else {
                            npc.sayNext("你給我的通行證和問題的答案不符合,請在想想。 你需要回答的問題是 : #b" + questions[event.getVariable(qIndexVar)] + "#k");
                        }
                    } else {
                        npc.sayNext("恭喜你回答正確了答案，請把你的通行證交給隊長吧.");
                    }
                }
            }
        }
        break;
    case 2:
    case 3:
        rectangleStages(stage);
        break;
    case 4:
        if (player.getId() == party.getLeader()) {
            let preamble = event.getVariable("leader1stpreamble");
            if (preamble == null || !preamble) {
                event.setVariable("leader1stpreamble", true);
                npc.sayNext("你好，歡迎來到第四個階段，在這裡你可能會看到很多凶狠的火獨眼獸，消滅所有火獨眼獸，獲取通行證，然後交給我，就可以順利通關了，那麼祝你一切順利！");
            } else {
                let complete = event.getVariable(stage + "stageclear");
                if (complete != null && complete) {
                    npc.sayNext("現在可以到下一箇關卡了，如果不快點的話，門可能就關閉了。");
                } else {
                    if (player.hasItem(4001008, 19)) {
                        clear(stage, 100);
                        player.loseItem(4001008, 19);
                        npc.sayNext("你們成功收集了19張通行證。 已經成功完成了第四階段。好了，我將開啟通往下一箇關卡的結界，時間不多了，你們趕快到那裡進行第五階段的挑戰吧。");
                    } else {
                        npc.sayNext("快點消滅所有的怪物並收集通行證！");
                    }
                }
            }
        } else {
            let pVar = "member1stpreamble" + player.getId();
            let preamble = event.getVariable(pVar);
            if (preamble == null || !preamble) {
                npc.sayNext("你好，歡迎來到第四個階段，在這裡你可能會看到很多凶狠的火獨眼獸，消滅所有火獨眼獸，獲取通行證，你們把通行證全部交給組隊長，組隊長再和我講話，就可以順利通關了，那麼祝你一切順利！");
                event.setVariable(pVar, true);
            } else {
                let complete = event.getVariable(stage + "stageclear");
                if (complete != null && complete) {
                    npc.sayNext("傳送口已經開啟,快點進入下一箇階段吧...");
                } else {
                    npc.sayNext("快點消滅所有的怪物並收集通行證，然後交給組隊長！");
                }
            }
        }
        break;
    case 5:
        let complete = event.getVariable(stage + "stageclear");
        if (complete == null || !complete) {
            if (player.getId() == party.getLeader()) {
                if (player.hasItem(4001008, 1)) {
                    player.loseItem(4001008, 1);
                    clear(stage, 1500);
                    npc.sayNext("恭喜,你們成功的透過第5階段。再次跟我對話可以領取獎勵。");
                } else {
                    npc.sayNext("歡迎來到第5階段,你們需要收集一張#v4001008#才可以通關。");
                }
            } else {
                npc.sayNext("歡迎來到第5階段,你們需要收集一張#v4001008#才可以通關。");
            }
        } else {
            npc.sayNext("恭喜你們已經完成了所有階段的任務。我會給你們獎勵,你們準備好接受獎勵了嗎？");
            getPrize();
        }
        break;
}