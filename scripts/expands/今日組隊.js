var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var d1 = "#fUI/UIWindow2.img/Arbeit/309#" //領取
var d2 = "#fUI/UIWindow2.img/Arbeit/306#" //傳送墮落副本
var d3 = "#fUI/UIWindow2.img/Arbeit/307#" //傳送逃脫副本
var d4 = "#fUI/UIWindow2.img/Arbeit/308#" //傳送海盜副本
var d5 = "#fUI/UIWindow2.img/Arbeit/335#" //一條龍廣播335
var txt = "#fs21##e#r你好,這裡是每日組隊任務\r\n\r\n";


txt += "#fs21##e#b完成五次:龍騎士副本\r\n\r\n";
txt += "今日已完成:[#r" + player.getEventValue("龍騎士通關") + "/#b3#b] \r\n\r\n";
//txt += "#L3#遺棄之塔:  [#r" + player.getEventValue("玩具通關") + "/#g1#b] \r\n";
//txt += "#L4#龍騎士:    [#r" + player.getEventValue("龍騎士通關") + "/#g1#b] #l\r\n\r\n";

txt += "#b完成獲得#r#v5060048#*20 #v2635032#*5 #v4001715#*2\r\n\r\n";
txt += "\t\t\t #L4#進入任務#l  #L1#領取獎勵#l\r\n";


var sel = npc.askMenuA(txt, true);
if (sel == 1) {
    if (player.getEventValue("龍騎士通關") < 3) {
        npc.say("當前未完成龍騎士,請先完成");
        //} else if (player.getEventValue("龍騎士通關") == 0) {
        // npc.say("當前未完成龍騎士,請先完成");
        //} else if (player.getEventValue("玩具通關") == 0) {
        // npc.say("當前未完成遺棄之塔,請先完成");
    } else if (player.getEventValue("一條龍") == 0) {
        player.gainItem(5060048, 20);
        player.gainItem(2635032, 5);
        player.gainItem(4001715, 2);


        player.addEventValue("一條龍", 1, 1);
        player.addEventValue("一條龍總次數", 1, 3000);
        npc.broadcastPlayerNotice(1, "玩家 " + player.getName() + " 完成每日組隊任務獲得大量獎勵");
        npc.say("領取成功");
    } else {
        npc.say("今天已經領取過了,請明天繼續");
    }
} else if (sel == 2) {
    player.runScript("廢棄入場")
} else if (sel == 3) {
    player.runScript("玩具城入場")
} else if (sel == 4) {
    player.runScript("御龍魔入場")
} else if (sel == 5) {
    var timeStamp = java.lang.System.currentTimeMillis();
    var min = 120; //一分鐘 這裡自己改時間
    var time = parseInt(min - (((timeStamp - parseInt(player.getQuestRecordEx(100000007))) / 1000)));
    let mapA = map.getId();
    if (time > 0) {
        npc.say("兩分鐘內只可以召集一次");
    } else {
        player.updateQuestRecordEx(100000007, timeStamp);
        npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 在 [" + player.getChannel() + "] 分流,組隊中心發起一條龍召集");
        npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 在 [" + player.getChannel() + "] 分流,組隊中心發起一條龍召集");
        npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 在 [" + player.getChannel() + "] 分流,組隊中心發起一條龍召集");
    }
} else if (sel == 6) {
    player.runScript("一條龍累計獎勵")
}
function getMinAndMax(minVal, maxVal) {//隨機 最大值 最小值
    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}
