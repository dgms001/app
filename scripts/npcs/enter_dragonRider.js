/**
 *
 * Admits players into dragonRider party quest.
 *
 *
 */

let minPlayers = 1;
let maxPlayers = 6;
let minLevel = 130;
let maxLevel = 275;
let maxenter = 5;
let PQLog = "dragon_rider";

let sel = npc.askMenu("#e<組隊任務：御龍魔>#n\r\n\r\n年輕人，你能不能幫我做件事？麻煩你去消滅攪亂神木村平靜生活的御龍魔吧。\r\n#b#L0# 1. 我要進入天渡。（130以上/2名以上）#l\r\n#L1# 2. 我要尋找一起組隊的同伴。#l\r\n#L2# 3. 我想聽介紹。#l\r\n#L3# 4. 我想知道今天的剩餘挑戰次數。#l\r\n#L4# 5. 我想學習#r[飛翔]#b技能\r\n#L6# 6. 我想學習#r[影虎飛翔]#b技能");
switch (sel) {
    case 0:
        npc.sayNext("如果你要挑戰一下，我將會把你送到天渡……");
        let skillId = (player.getBeginner() * 10000) + 1026;
        if (player.getSkillLevel(skillId) > 0) {
            npc.rememberMap("RETURN_MAP");
            player.changeMap(240080000, 0);
        } else {
            npc.say("對不起,沒有學習了[飛翔]技能是無法飛翔藍天的！");
        }
        break;
    case 1:
        npc.say("請向周圍的朋友們請求組隊。使用尋找組隊(快捷鍵O)功能，可以在任何時間任何地點尋找組隊。敬請參考。");
        break;
    case 2:
        npc.say("#e<組隊任務：御龍魔>#n\r\n\r\n前往#b<天空之門 >#k，搞清楚#r御龍魔#k的真實身份吧。使用#b飛翔#k技能在天空中飛翔，消滅飛龍並進行追蹤，就可以找到御龍魔。\r\n - #e等級#n：130級以上 \r\n - #e規定時間#n：30分鐘\r\n - #e參加人員#n：3～6名\r\n - #e參加條件#n：學習飛翔技能");
        break;
    case 3:
        let pqtry = maxenter - player.getPQLog(PQLog);
        npc.say("今天剩餘挑戰次數是#r" + pqtry + "次#k.");
        break;
    case 4:
        let ret = npc.askYesNo("學習[飛翔]技能必須付出一定的金幣喲!大約需要:#r2000000#k,那麼你想現在就學習麼?");
        if (ret == 1) {
            let skillId = (player.getBeginner() * 10000) + 1026;
            if (player.getSkillLevel(skillId) <= 0) {
                if (player.hasMesos(2000000)) {
                    player.loseMesos(2000000);
                    player.setSkillLevel(skillId, 1, 1, false);
                    npc.say("恭喜,你學習了[飛翔]技能!");
                } else {
                    npc.say("您似乎沒有那麼多的金幣喲！在去努力攢錢吧！");
                }
            } else {
                npc.say("你已經獲得了[飛翔]技能了!不需要重新再學習了。");
            }
        }
        break;
    case 6:
        if (player.getJob() != 16400 && player.getJob() != 16410 && player.getJob() != 16411 && player.getJob() != 16412) {
            player.dropAlertNotice("抱歉 2轉才能學並且必須是《影虎》職業");
        } else if (player.getSkillLevel(160001026) > 0) {
            player.dropAlertNotice("抱歉 你已經學過這個技能了");
        } else {
            player.setSkillLevel(160001026, 1, 1, false);
            npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
        }
        break;
}


