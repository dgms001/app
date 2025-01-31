var status = -1;
var txt;
var diff;
var sel;
var time;
var aaa = "#fMap/MapHelper.img/weather/starPlanet2/5#";
var aa = "#fUI/UIWindow2.img/crossHunterUI/reward/button/disabled/0#";
var bb = "#fUI/UIWindow2.img/crossHunterUI/reward/button/normal/0#";
var a3 = "#fEffect/ItemEff/1070069/effect/walk1/2#"
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔

// 每個禮包所需的在線時間
var condition = new Array(60, 120, 180, 240, 360, 480, 600, 720, 780, 840);
var reward = new Array(// 禮包編號、道具id、數量
    //60
    Array(1, 4001714, 1), //定居金100萬
    Array(1, 5062010, 15), //黑色方塊
    Array(1, 5060048, 3), //黃金蘋果
    Array(1, 5537000, 3), //高等級萌獸卡牌包
    Array(1, 2022709, 1), //幸運禮物
    Array(1, 5062500, 10),//附加




    //120
    Array(2, 4001714, 2), //定居金100萬
    Array(2, 5062010, 20), //黑色方塊
    Array(2, 5060048, 3), //黃金蘋果
    Array(2, 5537000, 3), //高等級萌獸卡牌包
    Array(2, 5743003, 5), //萌獸方塊
    Array(2, 5062500, 15),//附加



    // 180
    Array(3, 4001714, 3), //定居金100萬
    Array(3, 5062010, 30), //黑色方塊
    Array(3, 5060048, 3), //黃金蘋果
    Array(3, 5743003, 10), //萌獸方塊
    Array(3, 5060032, 2), //潘朵拉箱子
    Array(3, 5062500, 20),//附加


    // 240
    Array(4, 4001714, 4), //定居金100萬
    Array(4, 5062503, 5), //白色附加
    Array(4, 5060048, 5), //黃金蘋果
    Array(4, 5537000, 5), //高等級萌獸卡牌包
    Array(4, 2022709, 1), //幸運禮物
    Array(4, 5062500, 25),//附加



    //360
    Array(5, 4001714, 5), //定居金100萬
    Array(5, 5062503, 8), //白色附加
    Array(5, 5060048, 5), //黃金蘋果
    Array(5, 5537000, 5), //高等級萌獸卡牌包
    Array(5, 5060032, 5), //潘朵拉箱子
    Array(5, 5062500, 30),//附加



    //480
    Array(6, 4001714, 6), //定居金100萬
    Array(6, 5062503, 10), //白色附加
    Array(6, 5060048, 8), //黃金蘋果
    Array(6, 5062026, 5), //結合方塊
    Array(6, 5743003, 10), //萌獸方塊
    Array(6, 5537000, 5), //高等級萌獸卡牌包
    Array(6, 2022709, 1), //幸運禮物
    Array(6, 5062500, 30),//附加




    //600
    Array(7, 4001714, 7), //定居金100萬
    Array(7, 5060048, 12), //黃金蘋果
    Array(7, 5062026, 8), //結合方塊
    Array(7, 5064502, 3), //覺醒星火
    Array(7, 2472000, 5), //白金槌子
    Array(7, 5743003, 10), //萌獸方塊
    Array(7, 5060032, 5), //潘朵拉箱子
    Array(7, 2635038, 2), //V卷
    Array(7, 5062500, 35),//附加



    //720
    Array(8, 4001714, 10), //定居金100萬
    Array(8, 5062026, 10), //結合
    Array(8, 2472000, 20), //白金槌子
    Array(8, 5064502, 5), //覺醒星火
    Array(8, 5060048, 15), //黃金蘋果
    Array(8, 5743003, 15), //萌獸方塊
    Array(8, 5060032, 8), //潘朵拉箱子
    Array(8, 5537000, 5), //高等級萌獸卡牌包
    Array(8, 2635038, 3), //V卷
    Array(8, 2022709, 1), //幸運禮物
    Array(8, 5062500, 35),//附加


    //780
    Array(9, 4001870, 1), //兩千萬定居
    Array(9, 5062026, 12), //結合
    Array(9, 2472000, 25), //白金槌子
    Array(9, 5064502, 8), //覺醒星火
    Array(9, 5060048, 18), //黃金蘋果
    Array(9, 5743003, 18), //萌獸方塊
    Array(9, 5060032, 8), //潘朵拉箱子
    Array(9, 5537000, 8), //高等級萌獸卡牌包
    Array(9, 2635038, 3), //V卷
    Array(9, 4009411, 10), //圓夢餘額幣
    Array(9, 5062500, 40),//附加


    //840
    Array(10, 4001871, 1), //三千萬定居
    Array(10, 5062026, 15), //結合
    Array(10, 2472000, 30), //白金槌子
    Array(10, 5064502, 10), //覺醒星火
    Array(10, 5060048, 20), //黃金蘋果
    Array(10, 5743003, 15), //萌獸方塊
    Array(10, 5060032, 10), //潘朵拉箱子
    Array(10, 5537000, 5), //高等級萌獸卡牌包
    Array(10, 2635038, 5), //V卷
    Array(10, 4009411, 10), //圓夢餘額幣
    Array(10, 5062500, 50),//附加

);

var time = player.getOnlineTime();
var curlevel = -1;
var GC2 = "#fEffect/CharacterEff/1022223/2/0#"; //紅心桃心
//var GC3 = "#fEffect/CharacterEff/1112902/0/1#"; //"+z+"//小選項用
var GC3 = "";
//var GC3 = "#fEffect/CharacterEff/1112924/0/0#";
var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
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

txt = "#fs21##b當前帳號在線時長為[#r" + time + "#b]分鐘\r\n";



//txt = "\t      #fs32##fc0xFFE508F3##e"+zx50+"在線獎勵"+zx50+"\r\n#n";
//txt += "" +p9+p9+p9+p9+p9+p9+p9+p9+p9+p9+p9+p9+p9+p9+p9+ "\r\n";
//txt += "#fc0xFFFFF300#";

//txt += "23:58-00:1分無法領取,請各位玩家注意\r\n";

for (var i = 1; i <= condition.length; i++) {
    if (player.getEventValue("在線禮包" + i) == 0) {
        txt += "#b#L" + i + "#領取在線時長#r" + condition[i - 1] + "#b分鐘";
        if (player.getEventValue("在線禮包" + i) > 0) {
            txt += "#g[已領取]#l";
            curlevel = curlevel == -1 ? i : curlevel;
        }
        txt += "#l\r\n";
    }
}
if (player.getEventValue("在線禮包1") == 0 && player.getEventValue("在線禮包2") == 0 && player.getEventValue("在線禮包3") == 0 && player.getEventValue("在線禮包4") == 0 && player.getEventValue("在線禮包5") == 0 && player.getEventValue("在線禮包6") == 0 && player.getEventValue("在線禮包1") == 0 && player.getEventValue("在線禮包7") == 0 && player.getEventValue("在線禮包8") == 0 && player.getEventValue("在線禮包9") == 0) {
    //txt += "#L999#一鍵領取[在線時間>720且未領取過獎勵即可使用]#l\r\n";
}
txt += "#k";
let selection = npc.askMenuA(txt);
// 23:50 ~ 23: 59 前一天不領取的時間  00:00 ~ 00:10 第二天不領取的時間
var date = new Date();
var hour = date.getHours();
var minute = date.getMinutes();
if (selection == 999) {
    if (time < 720)
        npc.askMenuA("在線時間不足720，無法一鍵領取。");
    else if (player.getEventValue("在線禮包一鍵領取") > 0)
        npc.askMenuA("已經領取過了");
    else if (player.getFreeSlots(5) < 4 || player.getFreeSlots(2) < 4 || player.getFreeSlots(4) < 4)
        npc.askMenuA("空間不足，請確保背包每個欄位有至少 4 格空間");
    for (var i = 0; i < reward.length; i++) {
        player.gainItem(reward[i][1], reward[i][2]);
        player.addEventValue("在線禮包" + i, 1, 1);
    }
    player.addEventValue("在線禮包一鍵領取", 1, 1);
    npc.askMenuA("一鍵領取成功");
}
if ((hour == 23 && (minute >= 58 && minute <= 59)) || (hour == 0 && (minute >= 0 && minute <= 1))) {
    npc.say("#d服務器當前時間： #r" + hour + " 時 " + minute + " 分 #k\r\n\r\n#e#d提示#n#k：#r23 ： 58 #b至#r 00 ： 1 #b時無法領取簽到獎勵。#k");
} else if (player.getEventValue("在線禮包" + selection) > 0) {
    npc.say("您已經領過簽到獎勵了");
} else {
    txt = "#e#fs21##r  " + condition[selection - 1] + " 分鐘在線時長獎勵 #fs16#\r\n\r\n";

    for (var i = 0; i < reward.length; i++) {
        if (reward[i][0] == selection) {
            if (reward[i][1] == -1) {
                txt += "\t\t\t#r點券:   " + reward[i][2] + "#k\r\n";
            } else {
                txt += "#b#i" + reward[i][1] + "# #z" + reward[i][1] + "#[ #r" + reward[i][2] + " #b]個\r\n";
            }

        }
    }
    let sel = npc.askYesNo(txt);
    if (sel == 1) {
        var rewardlist = Array();
        for (var i = 0; i < reward.length; i++) {
            if (reward[i][0] == selection) {
                if (reward[i][3] == null || reward[i][3] == '')
                    reward[i][3] = 0;
                rewardlist.push(new Array(reward[i][1], reward[i][2], reward[i][3]));
            }
        }
        if (time < condition[selection - 1]) {
            npc.say("在線時間不足，無法領取。");
            player.runScript("在線獎勵");

        } else if (player.getFreeSlots(5) < rewardlist.length || player.getFreeSlots(2) < rewardlist.length || player.getFreeSlots(4) < rewardlist.length) {
            npc.say("空間不足，請確保背包每個欄位有至少 " + rewardlist.length + " 格空間");

        } else {

            player.addEventValue("在線禮包" + selection, 1, 1);
            //player.checkAccountEventValue​("在線禮包" + selection, 1);
            for (var i = 0; i < rewardlist.length; i++) {
                if (rewardlist[i][0] == -1) {
                    //點券
                    player.modifyCashShopCurrency(1, rewardlist[i][1]);
                } else {
                    //無期限道具
                    player.gainItem(rewardlist[i][0], rewardlist[i][1]);
                }
            }
            //npc.broadcastNotice("『在線時間獎勵』" + " : " + "玩家 " + player.getName() + " 領取了在線獎勵。");
            npc.say("領取成功！");
            player.runScript("在線獎勵");

        }

    }
}
