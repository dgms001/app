/*  This is mada by dgms    
 *  This source is made by Funms Team
 *  功能：等級送禮
 *  @Author dgms 
*/
var status = 0;
var bossid = "推文總次數";
var giftLevel = Array(5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100);
var giftContent = Array(
    //10
    Array(
        Array(4032053, 1000, 0),//風景
        Array(5060048, 20, 0),//蘋果
        Array(2472000, 20, 0),//白錘
        Array(2633918, 20, 0),//歐皇
    ),
    //15
    Array(
        Array(4032053, 1000, 0),//風景
        Array(5060048, 20, 0),//蘋果
        Array(2472000, 20, 0),//白錘
        Array(2633918, 20, 0),//歐皇
    ),

    //20
    Array(
        Array(4032053, 1000, 0),//風景
        Array(5060048, 20, 0),//蘋果
        Array(2472000, 20, 0),//白錘
        Array(2633918, 20, 0),//歐皇
    ),
    //25
    Array(
        Array(4032053, 1000, 0),//風景
        Array(5060048, 20, 0),//蘋果
        Array(2472000, 20, 0),//白錘
        Array(2633918, 20, 0),//歐皇
    ),

    //30
    Array(
        Array(4032053, 1000, 0),//風景
        Array(5060048, 20, 0),//蘋果
        Array(2472000, 20, 0),//白錘
        Array(2633918, 20, 0),//歐皇

    ),

    //35
    Array(
        Array(4032053, 1000, 0),//風景
        Array(5060048, 20, 0),//蘋果
        Array(2472000, 20, 0),//白錘
        Array(2633918, 20, 0),//歐皇
    ),

    //40
    Array(
        Array(4032053, 1000, 0),//風景
        Array(5060048, 20, 0),//蘋果
        Array(2472000, 20, 0),//白錘
        Array(2633918, 20, 0),//歐皇
    ),
    //45
    Array(
        Array(4032053, 1000, 0),//風景
        Array(5060048, 20, 0),//蘋果
        Array(2472000, 20, 0),//白錘
        Array(2633918, 20, 0),//歐皇
    ),
    //50
    Array(
        Array(4032053, 1000, 0),//風景
        Array(5060048, 20, 0),//蘋果
        Array(2472000, 20, 0),//白錘
        Array(2633918, 20, 0),//歐皇
    ),
    //55
    Array(
        Array(4032053, 1000, 0),//風景
        Array(5060048, 20, 0),//蘋果
        Array(2472000, 20, 0),//白錘
        Array(2633918, 20, 0),//歐皇
    ),
    //60
    Array(
        Array(4032053, 1000, 0),//風景
        Array(5060048, 20, 0),//蘋果
        Array(2472000, 20, 0),//白錘
        Array(2633918, 20, 0),//歐皇
    ),
    //65
    Array(
        Array(4032053, 1000, 0),//風景
        Array(5060048, 20, 0),//蘋果
        Array(2472000, 20, 0),//白錘
        Array(2633918, 20, 0),//歐皇
    ),
    //70
    Array(
        Array(4032053, 1000, 0),//風景
        Array(5060048, 20, 0),//蘋果
        Array(2472000, 20, 0),//白錘
        Array(2633918, 20, 0),//歐皇
    ),
    //75
    Array(
        Array(4032053, 1000, 0),//風景
        Array(5060048, 20, 0),//蘋果
        Array(2472000, 20, 0),//白錘
        Array(2633918, 20, 0),//歐皇
    ),
    //80
    Array(
        Array(4032053, 1000, 0),//風景
        Array(5060048, 20, 0),//蘋果
        Array(2472000, 20, 0),//白錘
        Array(2633918, 20, 0),//歐皇
    ),
    //85
    Array(
        Array(4032053, 1000, 0),//風景
        Array(5060048, 20, 0),//蘋果
        Array(2472000, 20, 0),//白錘
        Array(2633918, 20, 0),//歐皇
    ),
    //90
    Array(
        Array(4032053, 1000, 0),//風景
        Array(5060048, 20, 0),//蘋果
        Array(2472000, 20, 0),//白錘
        Array(2633918, 20, 0),//歐皇
    ),
    //95
    Array(
        Array(4032053, 1000, 0),//風景
        Array(5060048, 20, 0),//蘋果
        Array(2472000, 20, 0),//白錘
        Array(2633918, 20, 0),//歐皇
    ),
    //100
    Array(
        Array(4032053, 1000, 0),//風景
        Array(5060048, 20, 0),//蘋果
        Array(2472000, 20, 0),//白錘
        Array(2633918, 20, 0),//歐皇
    ),

);
var GC2 = "#fEffect/CharacterEff/1022223/2/0#"; //藍色星星
var GC3 = "#fEffect/CharacterEff/1112924/0/0#"; //"+z+"//小選項用
var lq1 = "#fUI/UIWindow2.img/crossHunterUI/reward/button/normal/0#"
var lq2 = "#fUI/UIWindow2.img/crossHunterUI/reward/button/disabled/0#"

var GC2 = "#fEffect/CharacterEff/1022223/2/0#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1112924/0/0#"; //"+z+"//小選項用
var GC1 = "";
//var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
var XD0 = "#fEffect/CharacterEff/1051366/0/0#";
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#"; //最上面的

var p9 = "#fMap/MapHelper.img/weather/knitsWithWarmWinter/8#";
var zx50 = "#fMap/MapHelper.img/weather/lovelypartybear/7#";
var qq1 = "#fUI/EventShop/adventureShop/GradeBuyer/0#"
var qq2 = "#fUI/EventShop/adventureShop/GradeBuyer/1#"
var qq3 = "#fUI/EventShop/adventureShop/GradeBuyer/2#"
var qq4 = "#fUI/EventShop/adventureShop/GradeBuyer/3#"
var qq5 = "#fUI/EventShop/adventureShop/GradeBuyer/4#"
var qq6 = "#fUI/EventShop/adventureShop/GradeBuyer/5#"
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var giftId = -1;
var giftToken = Array();
var gifts = null;
var txt = "";
txt = "Welcome to the special trip              " + a38 + "\r\n";
txt += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n";
txt += "#fs11##b";
for (var i = 0; i < giftLevel.length; i++) {
    var tips = "";
    if (player.getPQLog(bossid) >= giftLevel[i]) {
        if (player.getPQLog(bossid + (i + 1)) == 0) {
            tips = "" + lq1;
        } else {
            tips = "" + lq2;
        }
    } else {
        tips = "#r(當前場次:" + player.getPQLog(bossid) + ")#b";
    }
    txt += "#b#L" + i + "#領取總次數#r#e" + giftLevel[i] + "#n#b一條龍獎勵 " + tips + "#l#k\r\n";
}
let giftId = npc.askMenuS(txt, true);
var txt = "#r#e" + giftLevel[giftId] + "#n#b次禮包內容：\r\n";
gifts = giftContent[giftId];
for (var i = 0; i < gifts.length; i++) {
    var itemId = gifts[i][0];
    var getItemQuantity = gifts[i][1];
    var skillid = gifts[i][3]
    if (skillid > 100) {
        txt += "#v" + itemId + "##b#s" + skillid + "#\r\n";
    } else {
        txt += "#v" + itemId + "##b#z" + itemId + "##k #rx " + getItemQuantity + "#k\r\n";
    }
}
txt += "\r\n#d是否現在就領取該禮包？#k";
let sel = npc.askYesNo(txt);
if (sel == 1) {
    if (player.getFreeSlots(1) < 8 || player.getFreeSlots(2) < 8 || player.getFreeSlots(3) < 8 || player.getFreeSlots(4) < 8 || player.getFreeSlots(5) < 8) {
        npc.say("您的背包空間不足,請保證每個欄位至少8格的空間,以避免領取失敗");
    } else {
        var job = player.getJob();
        if (player.getPQLog(bossid + (giftId + 1)) == 0) {
            player.addPQLog(bossid + (giftId + 1), 1, 3000);
            for (var i = 0; i < gifts.length; i++) {
                var itemId = gifts[i][0];
                var getItemQuantity = gifts[i][1];
                if (gifts[i][3] >= 0) {
                    player.setSkillLevel(gifts[i][3], 1, 1, false);
                } else {
                    player.gainItem(itemId, getItemQuantity);
                }
            }
            npc.say("恭喜您,領取成功！快打開包裹看看吧！");
        } else {
            npc.say("您已經領過了該禮包或者場次未達到要求,無法領取。");
        }
        player.runScript("一條龍累計獎勵");
    }
}