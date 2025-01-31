var status = -1
var txt;
/*------------------------------------------------------------*/
var GC1 = "#fEffect/CharacterEff/1050312/0/0#"; //最上面的亮粉
var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1082700/1/0#"; //"+z+"//小選項用
var items = Array(
    Array(2048761, 10000, 1, "楓點商店-限購專區[覺醒的輪迴星火]", 100),
    Array(2048761, 10000, 1, "楓點商店-限購專區[覺醒的輪迴星火]", 100),
    Array(2472000, 10000, 1, "楓點商店-限購專區[白金鎚子]", 100),
    Array(5062026, 10000, 1, "楓點商店-限購專區[結合方塊]", 100),
    Array(5062503, 10000, 1, "楓點商店-限購專區[白色附加方塊]", 100)
);

txt = "" + GC1 + GC1 + GC1 + GC1 + "\r\n";
txt += "\t\t\t\t\t#e#fs26##fc0xFF43EABE#【限購專區】\r\n#n";
txt += "" + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + "";
txt += "#fs16##b";

for (var i = 1; i < items.length; i++) {
    var AD = player.getEventValue(items[i][3]);
    var AS = items[i][4];
    var CC = AS - AD;
    txt += "#L" + i + "##b#e購買【#v" + items[i][0] + ":##b】 價格：#r[" + items[i][1] + "] #b楓葉點數 限購數量：#r[" + CC + "] #b個#n\r\n";
}
let selection = npc.askMenuA(txt, true);
i = selection;
selection = npc.askNumber("購買道具為：#v" + items[i][0] + "# #z" + items[i][0] + "##k\r\n請輸入購買個數：", 1, 1, 999);

if (i) {
    GS = selection;
    QSS = GS * items[i][1];
    AS = items[i][4] - player.getEventValue(items[i][3]);
    if (GS > AS) {
        npc.say("#fs16##b#e今日剩餘購買數量 #r" + AS + " #b個");
    } else if (player.getCashShopCurrency(2) < QSS) {
        npc.say("#fs16##b#e楓葉點數不足，無法購買");
    } else {
        player.modifyCashShopCurrency(2, -QSS);
        player.gainItem(items[i][0], items[i][2] * GS);
        player.addEventValue(items[i][3], GS, 1);
        npc.say("#fs16##b#e購買成功");
    }
}