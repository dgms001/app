var status = -1
var txt;
/*------------------------------------------------------------*/
var GC1 = "#fEffect/CharacterEff/1050312/0/0#"; //最上面的亮粉
var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1082700/1/0#"; //"+z+"//小選項用
var items = Array(
    Array(1202283, 100, 1, "樂豆商店-圖騰專區[真昴圖騰]"),
    Array(1202283, 100, 1, "樂豆商店-圖騰專區[真昴圖騰]"),
    Array(1202284, 100, 1, "樂豆商店-圖騰專區[真安茲圖騰]"),
    Array(1202285, 100, 1, "樂豆商店-圖騰專區[真和真圖騰]"),
    Array(1202282, 100, 1, "樂豆商店-圖騰專區[真譚雅圖騰]")
);

txt = "" + GC1 + GC1 + GC1 + GC1 + "\r\n";
txt += "\t\t\t\t\t#e#fs26##fc0xFF43EABE#【圖騰專區】\r\n#n";
txt += "" + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + "";
txt += "#fs16##b";
for (var i = 1; i < items.length; i++) {
    txt += "#L" + i + "##b#e購買【#v" + items[i][0] + "# #g#z" + items[i][0] + "##b】 價格：#r[" + items[i][1] + "] #b樂豆點數#n\r\n";
}
let selection = npc.askMenuA(txt, true);
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