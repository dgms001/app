/**
 *
 *
 */
let MAX_RESET = 1;
let QUEST = [[1110100, "綠蘑菇"],
    [1110101, "黑木妖"],
    [1110130, "絕望的綠蘑菇"],
    [1120100, "三眼章魚"],
    [1130100, "斧木妖"],
    [1140100, "古木妖"],
    [1140130, "開心的古木妖"],
    [1150000, "巡邏機器人"],
    [1150001, "奇怪的里程錶"],
    [1150002, "蟒蛇"],
    [1210100, "豬豬"],
    [1210101, "漂漂豬"],
    [1210102, "花蘑菇"],
    [1210103, "藍水靈"],
    [1210104, "藍漂漂豬"],
    [1210111, "奇怪的豬豬"],
    [9309001, "綠水靈"],
    [9309002, "猴子"],
    [9309003, "火野豬"],
    [9309004, "黑鱷魚"],
    [9309005, "鱷魚"],
    [9309008, "烏龜"],
    [9309012, "野狼"],
    [9309013, "白狼"],
    [9309014, "沙漠蛇先生"],
    [9309015, "壁虎"],
    [9309016, "丁滿"],
    [9309017, "禿鷲先生"],
    [9309018, "沙漠土撥鼠"],
    [9309019, "沙漠毒蠍"],
    [9309020, "猿公"],
    [9309021, "棕熊"],
    [9309022, "柔道貓熊"],
    [9309023, "橡木甲蟲"],
    [9309024, "金屬甲蟲"],
    [9309025, "哈維"],
    [9309026, "血腥哈維"],
    [9309027, "小蜥蜴"],
    [9309028, "泥人妖"],
    [9309032, "火獨眼獸"],
    [9309033, "怪貓"],
    [2600408, "蟒蛇"],
    [2600409, "安全第一"],
    [2600410, "駝熊石人寶寶"],
    [2600411, "噬食巨石怪"],
    [2600412, "大石臉"],
    [2600413, "拉奇"],
    [2600414, "大蜘蛛"],
    [9309003, "火野豬"],
    [9309004, "黑鱷魚"],
    [9309005, "鱷魚"]];

var event = npc.getEvent();
if (event != null) {
    let sQuest = event.getVariable("stage49_Quest");
    if (event.getVariable("stage49_Tip") == null) {
        sQuest = randItems(QUEST);
        event.setVariable("stage49_Start", false);
        event.setVariable("stage49_Reset", MAX_RESET);
        event.setVariable("stage49_Wrong", 0);
        event.setVariable("stage49_Quest", sQuest);
        event.setVariable("stage49_Tip", true);
    }
    if ("clear".equals(event.getVariable("stage49"))) {
        npc.sayNextNoEsc("你已經透過了我的考驗！可以進入下一箇階段了！");
    } else {
        var nIdx = parseInt(event.getVariable("stage49_Value"));
        let reset = parseInt(event.getVariable("stage49_Reset"));
        //開始 問問題
        let toCheck = event.getVariable("stage49_Start") == true;
        if (toCheck) {
            var str = "怎麼樣？你似乎知道右邊怪物的名字？#b\r\n";
            if (player.isGm()) {
                str += "Gm提示：" + sQuest[0][1];
            }
            str += "\r\n";
            str += "#L0#不知道啊......請告訴我答案。" + (reset > 0 ? ("（剩餘機會：" + reset + " 次）") : "（沒有剩餘機會了）") + "#l\r\n";
            str += "#L1#恩，知道了，答案是......#l\r\n";
            str += "#L2#我要再想想。#l\r\n";
            str += "#L3#呀~咦！嗶哩哩嗶哩哩，你這麼猜中這個的！#l\r\n";
            let sel = npc.askMenu(str);
            switch (sel) {
                case 0:
                    if (reset > 0) {
                        npc.sayNext("恩......看你可憐就告訴你一次吧？恩。反正後面的估計你也猜不中。");
                        reset -= 1;
                        toCheck = false;
                        event.setVariable("stage49_Start", false);
                        event.setVariable("stage49_Reset", reset);
                        let last = sQuest.shift();
                        npc.sayNextNoEsc("唉，你怎麼這麼笨呢！這隻怪物叫做：" + last[1]);
                    } else {
                        npc.sayNextNoEsc("你已經沒有機會再使用該功能了。");
                    }
                    break;
                case 1:
                    let ans = npc.askText("吼吼.....那麼答案是什麼呢？記住，就連中間的空格也不能夠錯哦。", "", 1, 15);
                    if (player.isGm()) {
                        npc.sayNext("輸入的答案：" + ans);
                    }
                    if (ans.equals(sQuest[0][1])) {
                        sQuest.shift();
                        event.setVariable("stage49_Start", false);
                        toCheck = false;
                        event.setVariable("stage49_Value", String(nIdx + 1));
                        if (nIdx >= 4) {
                            event.setVariable("stage49", "clear");
                            player.screenEffect("quest/party/clear");
                            map.blowWeatherEffectNotice("哇！真是太棒了！終於見到桃樂絲了。請到下一層將桃樂絲消滅吧。", 147, 15000);
                            npc.sayNextNoEsc("真沒想到居然還有人能透過這裡......哼，好吧。我知道你很聰明。希望你也具有和你的知識相符的力量......");
                        } else {
                            let str = "";
                            switch (nIdx) {
                                case 0:
                                    str = "回答正確！你憑藉自己的實力來到這裡，接下來的題可能會更難，做好準備了。";
                                    break;
                                case 1:
                                    str = "哇~挺厲害的嘛？你再答對三道題就可以了。當然，這是在你沒有出錯的前提下。";
                                    break;
                                case 2:
                                    str = "你比我想象得厲害多了。居然連這個也能答對。接下來我可要選點有難度的了。";
                                    break;
                                case 3:
                                    str = "這個......居然也答對了。看來我真要緊張起來了。";
                                    break;
                            }
                            npc.sayNextNoEsc(str);
                        }
                        nIdx += 1;
                    } else {
                        var wrong = parseInt(event.getVariable("stage49_Wrong")) + 1;
                        event.setVariable("stage49_Wrong", wrong);
                        npc.sayNextNoEsc("唉~為什麼要不懂裝懂呢？真可憐。既然答錯了就要按照處罰規定減少你的剩餘時間了，怎麼樣？");
                        //執行扣時間
                        let remaine = reduceTime(5 * 60 * 1000);
                        event.startTimer("kick", remaine);
                    }
                    break;
                case 2:
                    npc.sayNext("你要記住時間已經不多了哦~！儘快告訴我你的答案。");
                    break;
                case 3:
                    npc.sayNext("呀~咦！嗶哩哩嗶哩哩，這是什麼鬼？？");
                    break;

            }
        }
        if (!toCheck) {
            askQuest(sQuest, nIdx);
        }
    }
}


function reduceTime(reduce) {
    var rData = player.getQuestRecordEx(42011, "time");
    var tData = player.getQuestRecordEx(42011, "totalTime");
    var startData = player.getQuestRecordEx(42011, "start");

    var remainTime = parseInt(rData);//剩餘時長
    var totalTime = parseInt(tData);//初始總時長
    var startTime = parseInt(startData);//階段開始的時間
    var nStageTime = (totalTime - remainTime) / 1000;//從開始到當前階段所花費時間

    var diffTime = new Date().getTime() - startTime;//當前階段消耗的時間（毫秒）
    remainTime -= diffTime;//剩餘時間 計算
    remainTime -= reduce;
    player.updateQuestRecordEx(42011, "time", String(remainTime));//更新剩餘時間
    player.updateQuestRecordEx(42011, "start", String(new Date().getTime()));
    player.showLobbyTimer(2, remainTime, totalTime, 42011);
    return Math.max(remainTime, 0);
}


function askQuest(sQuest, idx) {
    let str = "";
    switch (idx) {
        case 0:
            str = "在起源之塔到處亂闖的孩子，原來是你啊。讓我來確認一下你有沒有向我挑戰的資格。如果你能答對#e#r5個問題#k#n，我就給你挑戰的機會。";
            break;
        case 1:
            str = "第二道題！這次也要發揮你的實力哦。";
            break;
        case 2:
            str = "第三個問題我會考你什麼呢？猜猜看吧！";
            break;
        case 3:
            str = "第四個問題一定要深思熟慮呀。";
            break;
        case 4:
            str = "來吧~令人期待的第五個也是最後一箇問題！我也該不自覺地緊張起來吧？（低聲私語道）如果連這個也答對的話，就麻煩了......";
            break;
    }
    npc.sayNextNoEsc(str);
    map.clearMobs();
    //處理召喚怪物
    map.spawnMob(sQuest[0][0], 550, 184);
    map.changeFiledObjectColor(6, 1, 1, 1, 0, false, 0);
    event.setVariable("stage49_Start", true);
    npc.sayNextNoEsc("我在右側製造了一箇怪物的幻影。你只需要根據影子，猜出怪物的名字就行。做好回答的準備之後，就重新和我對話。");
}


function randItems(arr) {
    //新建一箇陣列,將傳入的陣列複製過來,用於運算,而不要直接操作傳入的陣列;
    var return_array = [];
    for (var index in arr) {
        return_array.push(arr[index]);
    }

    return_array.sort(function () {
        return 0.5 - Math.random();
    });
    return return_array;
}
