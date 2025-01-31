/*  This is mada by dgms    
 *  This source is made by Funms Team
 *  功能：等級送禮
 *  @Author dgms 
*/
var status = 0;
var bossid = "一條龍總次數";
var giftLevel = Array(10, 50, 100, 150, 200, 250, 300);
var giftContent = Array(
    //10
    Array(
        Array(2633918, 5, 0),//歐皇
        Array(4001714, 10, 0),//金幣
        Array(2432206, 5, 0),//X卷
        Array(2450175, 2, 0),//經驗2倍
        Array(2022709, 2, 0),//掉寶
        Array(5062017, 10, 0),//閃耀方塊
        Array(5062020, 10, 0),//閃炫方塊

    ),
    //50
    Array(
        Array(2633918, 20, 1),//歐皇
        Array(4001714, 50, 1),//金幣
        Array(2432206, 10, 1),//X卷
        Array(2450175, 2, 1),//經驗2倍
        Array(2022709, 2, 1),//掉寶
        Array(2630512, 1, 1),//ARC自選
        Array(5062017, 20, 1),//閃耀方塊
        Array(5062020, 20, 1),//閃炫方塊
    ),

    //100
    Array(
        Array(2633918, 30, 2),//歐皇
        Array(4001714, 100, 2),//金幣
        Array(2435824, 10, 2),//V卷
        Array(2450175, 2, 2),//經驗2倍
        Array(2022709, 2, 2),//掉寶
        Array(2630512, 2, 2),//ARC自選
        Array(5062017, 20, 2),//閃耀方塊
        Array(5062020, 20, 2),//閃炫方塊
    ),
    //150
    Array(
        Array(2633918, 40, 3),//歐皇
        Array(4001714, 150, 3),//金幣
        Array(2435824, 10, 3),//V卷
        Array(2450175, 3, 3),//經驗2倍
        Array(2022709, 3, 3),//掉寶
        Array(2630512, 3, 3),//ARC自選
        Array(5062017, 30, 3),//閃耀方塊
        Array(5062020, 30, 3),//閃炫方塊
        Array(0, 0, 0, 80000582, 5, 1),//技能
    ),

    //200
    Array(
        Array(2633918, 50, 4),//歐皇
        Array(4001714, 200, 4),//金幣
        Array(2436527, 5, 4),//B卷
        Array(2450175, 3, 4),//經驗2倍
        Array(2022709, 3, 4),//掉寶
        Array(2630512, 5, 4),//ARC自選
        Array(5062017, 30, 4),//閃耀方塊
        Array(5062020, 30, 4),//閃炫方塊
        Array(0, 0, 0, 80000582, 5, 2),//技能

    ),

    //250
    Array(
        Array(2633918, 50, 5),//歐皇
        Array(4001714, 200, 5),//金幣
        Array(2436527, 10, 5),//B卷
        Array(2450175, 4, 5),//經驗2倍
        Array(2022709, 4, 5),//掉寶
        Array(2630512, 5, 5),//ARC自選
        Array(5062017, 30, 5),//閃耀方塊
        Array(5062020, 30, 5),//閃炫方塊
        Array(0, 0, 0, 80000582, 5, 3),//技能
    ),

    //300
    Array(
        Array(2633918, 50, 6),//歐皇
        Array(4001714, 200, 6),//金幣
        Array(2436527, 15, 6),//B卷
        Array(2450175, 4, 6),//經驗2倍
        Array(2022709, 4, 6),//掉寶
        Array(2630512, 5, 6),//ARC自選
        Array(5062017, 30, 6),//閃耀方塊
        Array(5062020, 30, 6),//閃炫方塊
        Array(0, 0, 0, 80000582, 5, 4),//技能
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
txt += "#fs11##b總次數數200次領取的技能等級為1級,250次為2級,最高4級\r\n";
for (var i = 0; i < giftLevel.length; i++) {
    var tips = "";
    if (player.getPQLog(bossid) >= giftLevel[i]) {
        if (player.getEventValue(bossid + (i + 1)) == 0) {
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
        if (player.getEventValue(bossid + (giftId + 1)) == 0 && player.getPQLog(bossid) >= giftLevel[giftId]) {
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
        player.runScript("一條龍累計獎勵");
    }
}