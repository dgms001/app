/*  This is mada by dgms    
 *  This source is made by Funms Team
 *  功能：等級送禮
 *  @Author dgms 
*/
var status = 0;
var bossid = "推文總次數";
var giftLevel = Array(5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100);
var giftContent = Array(
    //5
    Array(
        Array(4032053, 1000, 0),//風景
        Array(5060048, 20, 0),//蘋果
        Array(2472000, 20, 0),//白錘
        Array(2633918, 20, 0),//歐皇
        Array(4009411, 2, 0),//餘額幣




    ),
    //10
    Array(
        Array(4032053, 1000, 1),//風景
        Array(5060048, 20, 1),//蘋果
        Array(2472000, 20, 1),//白錘
        Array(2633918, 20, 1),//歐皇
        Array(4009411, 5, 1),//餘額幣
    ),

    //15
    Array(
        Array(4032053, 1000, 2),//風景
        Array(5060048, 20, 2),//蘋果
        Array(2472000, 20, 2),//白錘
        Array(2633918, 20, 2),//歐皇
        Array(4009411, 5, 2),//餘額幣
    ),
    //20
    Array(
        Array(4032053, 1000, 3),//風景
        Array(5060048, 20, 3),//蘋果
        Array(2472000, 20, 3),//白錘
        Array(2633918, 20, 3),//歐皇
        Array(4009411, 8, 3),//餘額幣
    ),

    //25
    Array(
        Array(4032053, 1000, 4),//風景
        Array(5060048, 20, 4),//蘋果
        Array(2472000, 20, 4),//白錘
        Array(2633918, 20, 4),//歐皇
        Array(4009411, 8, 4),//餘額幣

    ),

    //30
    Array(
        Array(4032053, 1000, 5),//風景
        Array(5060048, 20, 5),//蘋果
        Array(2472000, 20, 5),//白錘
        Array(2633918, 20, 5),//歐皇
        Array(4009411, 10, 5),//餘額幣
    ),

    //35
    Array(
        Array(4032053, 1000, 6),//風景
        Array(5060048, 20, 6),//蘋果
        Array(2472000, 20, 6),//白錘
        Array(2633918, 20, 6),//歐皇
        Array(4009411, 10, 6),//餘額幣
    ),
    //40
    Array(
        Array(4032053, 1000, 7),//風景
        Array(5060048, 20, 7),//蘋果
        Array(2472000, 20, 7),//白錘
        Array(2633918, 20, 7),//歐皇
        Array(4009411, 15, 7),//餘額幣
    ),
    //45
    Array(
        Array(4032053, 1000, 8),//風景
        Array(5060048, 20, 8),//蘋果
        Array(2472000, 20, 8),//白錘
        Array(2633918, 20, 8),//歐皇
        Array(4009411, 15, 8),//餘額幣
    ),
    //50
    Array(
        Array(4032053, 1000, 9),//風景
        Array(5060048, 20, 9),//蘋果
        Array(2472000, 20, 9),//白錘
        Array(2633918, 20, 9),//歐皇
        Array(4009411, 20, 9),//餘額幣
    ),
    //55
    Array(
        Array(4032053, 1000, 10),//風景
        Array(5060048, 20, 10),//蘋果
        Array(2472000, 20, 10),//白錘
        Array(2633918, 20, 10),//歐皇
        Array(4009411, 20, 10),//餘額幣
    ),
    //60
    Array(
        Array(4032053, 1000, 11),//風景
        Array(5060048, 20, 11),//蘋果
        Array(2472000, 20, 11),//白錘
        Array(2633918, 20, 11),//歐皇
        Array(4009411, 25, 11),//餘額幣
    ),
    //65
    Array(
        Array(4032053, 1000, 12),//風景
        Array(5060048, 20, 12),//蘋果
        Array(2472000, 20, 12),//白錘
        Array(2633918, 20, 12),//歐皇
        Array(4009411, 25, 12),//餘額幣
    ),
    //70
    Array(
        Array(4032053, 1000, 13),//風景
        Array(5060048, 20, 13),//蘋果
        Array(2472000, 20, 13),//白錘
        Array(2633918, 20, 13),//歐皇
        Array(4009411, 30, 13),//餘額幣
    ),
    //75
    Array(
        Array(4032053, 1000, 14),//風景
        Array(5060048, 20, 14),//蘋果
        Array(2472000, 20, 14),//白錘
        Array(2633918, 20, 14),//歐皇
        Array(4009411, 30, 14),//餘額幣
    ),
    //80
    Array(
        Array(4032053, 1000, 15),//風景
        Array(5060048, 20, 15),//蘋果
        Array(2472000, 20, 15),//白錘
        Array(2633918, 20, 15),//歐皇
        Array(4009411, 35, 15),//餘額幣
    ),
    //85
    Array(
        Array(4032053, 1000, 16),//風景
        Array(5060048, 20, 16),//蘋果
        Array(2472000, 20, 16),//白錘
        Array(2633918, 20, 16),//歐皇
        Array(4009411, 35, 16),//餘額幣
    ),
    //90
    Array(
        Array(4032053, 1000, 17),//風景
        Array(5060048, 20, 17),//蘋果
        Array(2472000, 20, 17),//白錘
        Array(2633918, 20, 17),//歐皇
        Array(4009411, 40, 17),//餘額幣
    ),
    //95
    Array(
        Array(4032053, 1000, 18),//風景
        Array(5060048, 20, 18),//蘋果
        Array(2472000, 20, 18),//白錘
        Array(2633918, 20, 18),//歐皇
        Array(4009411, 40, 18),//餘額幣
    ),
    //100
    Array(
        Array(4032053, 1000, 19),//風景
        Array(5060048, 20, 19),//蘋果
        Array(2472000, 20, 19),//白錘
        Array(2633918, 20, 19),//歐皇
        Array(4009411, 45, 19),//餘額幣
    )


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
txt += "#b當前總推文次數:#r" + player.getEventValue(bossid) + "#b次\r\n";
for (var i = 0; i < giftLevel.length; i++) {
    var tips = "";
    if (player.getEventValue(bossid) >= giftLevel[i]) {
        if (player.getEventValue(bossid + (i + 1)) == 0) {
            tips = "" + lq1;
        } else {
            tips = "" + lq2;
        }
    } else {
        tips = "";
    }
    txt += "#b#L" + i + "#領取總次數#r#e" + giftLevel[i] + "#n#b推文累計獎勵 " + tips + "#l#k\r\n";
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
        if (player.getEventValue(bossid + (giftId + 1)) == 0 && player.getEventValue(bossid) >= giftLevel[giftId]) {

            player.addEventValue(bossid + (giftId + 1), 1, 3000);
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
        player.runScript("累計推文獎勵");
    }
}