var status = -1
var txt;
/*------------------------------------------------------------*/
//var GC1 = "#fEffect/CharacterEff/1050312/0/0#"; //最上面的亮粉
//var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1082700/1/0#"; //"+z+"//小選項用
var items = Array(
    Array(1032261, 500, 1, "樂豆商店-轉蛋專區[內面耀光]"),
    //Array(1032261, 500, 1, "樂豆商店-轉蛋專區[內面耀光]"),
    //Array(1114402, 1000, 1, "樂豆商店-轉蛋專區[艾爾達斯的祝福戒指]"),
    Array(1114400, 15000, 1, "樂豆商店-轉蛋專區[燃燒之戒]"),
    Array(1113220, 10000, 1, "樂豆商店-轉蛋專區[幽暗戒指]"),
    //Array(1113211, 3000, 1, "樂豆商店-轉蛋專區[天上的氣息]"),
    //Array(1033000, 2000, 1, "樂豆商店-轉蛋專區[露希妲耳環]"),
    Array(2591008, 10000, 1, "樂豆商店-轉蛋專區[武公的靈魂寶珠]"),
    //Array(1202160, 500, 1, "樂豆商店-轉蛋專區[小筱精靈圖騰]"),
    //Array(1202253, 500, 1, "樂豆商店-轉蛋專區[超越的圖騰]"),
    //Array(1182158, 1000, 1, "樂豆商店-轉蛋專區[黑翼胸章]"),
    //Array(1182136, 500, 1, "樂豆商店-轉蛋專區[MX-131]"),
    Array(1672069, 10000, 1, "樂豆商店-轉蛋專區[女武神之心]"),
    Array(1662073, 1000, 1, "樂豆商店-轉蛋專區[戰鬥機器人(男)]"),
    Array(1662072, 1000, 1, "樂豆商店-轉蛋專區[戰鬥機器人(女)]")
);

//txt = "" + GC1 + GC1 + GC1 + GC1 + "\r\n";
txt = "\r\n";
txt += "\t\t\t#e#fs20##fc0xFFFF4EFF#【獎池商店】\r\n#n";
//txt += "" + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + "";
txt += "#fs12##b";
for (var i = 1; i < items.length; i++) {
    txt += "#L" + i + "##b#e#v" + items[i][0] + "# #k#z" + items[i][0] + "##b#r" + items[i][1] + "#b樂豆點#n\r\n";
}
let selection = npc.askMenu(txt, 9062453);
i = selection;
selection = npc.askNumber("購買道具為：#v" + items[i][0] + "# #z" + items[i][0] + "##k\r\n請輸入購買個數：", 1, 1, 999);

if (i) {
    GS = selection;
    QSS = GS * items[i][1];
    if (player.getCashShopCurrency(1) < QSS) {
        npc.say("#fs16##b#e樂豆點數不足，無法購買");
    } else {
        player.modifyCashShopCurrency(1, -QSS);
        player.gainItem(items[i][0], items[i][2] * GS);
        player.addEventValue("累積消耗樂豆點數", QSS, 999)
        //player.addAccountEventValue(items[i][3], GS);
        npc.say("#fs16##b#e購買成功");
    }
}