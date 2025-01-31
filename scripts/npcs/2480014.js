var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var d1 = "#fUI/UIWindow2.img/Arbeit/309#" //領取
var d2 = "#fUI/UIWindow2.img/Arbeit/306#" //傳送墮落副本
var d3 = "#fUI/UIWindow2.img/Arbeit/307#" //傳送逃脫副本
var d4 = "#fUI/UIWindow2.img/Arbeit/308#" //傳送海盜副本
var d5 = "#fUI/UIWindow2.img/Arbeit/335#" //一條龍廣播335
var txt = "Welcome to the special trip              " + a38 + "\r\n";

txt += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n";
txt += "#b完成以下目標3個（一條龍）可以獲得額外獎勵\r\n";
txt += "#L2#第一次同行:[#r" + player.getEventValue("廢棄通關") + "/#g1#b] \r\n";
txt += "#L3#遺棄之塔:  [#r" + player.getEventValue("玩具通關") + "/#g1#b] \r\n";
txt += "#L4#龍騎士:    [#r" + player.getEventValue("龍騎士通關") + "/#g1#b] #l\r\n\r\n";

txt += "#b全部完成：獎勵#r[#r#v4001715#*1][#v2633918#*10][#v5062500##v5062009#*20#b]\r\n通過傳送門時(#r楓幣1000萬/有些關卡沒有#b)每日限制一次";
txt += "\r\n";
//txt += "\t\t#b#L2#第一次同行#l  #L3#遺棄之塔#l  #L4#龍騎士#l\r\n\r\n";
txt += "\t\t#r#L1#額外獎勵#l #L5#召集隊友#l #L6#累計獎勵#l\r\n\r\n";

var sel = npc.askMenuS(txt, true);
if (sel == 1) {
    if (player.getEventValue("廢棄通關") == 0) {
        npc.say("當前未完成第一次同行,請先完成");
    } else if (player.getEventValue("龍騎士通關") == 0) {
        npc.say("當前未完成龍騎士,請先完成");
    } else if (player.getEventValue("玩具通關") == 0) {
        npc.say("當前未完成遺棄之塔,請先完成");
    } else if (player.getEventValue("一條龍") == 0) {
        player.gainItem(4001715, 1);
        player.gainItem(2633918, 10);
        player.gainItem(5062500, 20);
        player.gainItem(5062009, 20);

        player.addEventValue("一條龍", 1, 1);
        player.addEventValue("一條龍總次數", 1, 3000);
        npc.broadcastPlayerNotice(37, "玩家 " + player.getName() + " 完成組隊一條龍獲得大量獎勵");
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
