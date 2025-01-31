var status = -1
var txt;
/*------------------------------------------------------------*/
var GC1 = "#fEffect/CharacterEff/1050312/0/0#"; //最上面的亮粉
var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1082700/1/0#"; //"+z+"//小選項用
var itemid = 4310128;
var currentItemQuantity = player.getAmountOfItem(itemid);
var amount = currentItemQuantity;
var items = Array(
    Array(5062017, 1, 20, "閃耀方塊"),
    Array(5062500, 1, 10, "附加方塊"),
    Array(5062020, 1, 5, "閃炫方塊"),
    Array(5062503, 1, 5, "白色附加方塊"),
    Array(5062026, 1, 5, "結合方塊"),
    Array(5062019, 1, 5, "閃耀鏡射方塊"),
    Array(2023222, 1, 1, "補給BUFF掉落率1.5倍")
);

txt = "" + GC1 + GC1 + GC1 + GC1 + "\r\n";
txt += "\t\t\t\t\t#e#fs26##fc0xFF43EABE#【Happy Day 商店】\r\n#n";
txt += "" + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + "";
txt += "#fs16##b";
for (var i = 1; i < items.length; i++) {
    txt += "#L" + i + "##b#e購買【#v" + items[i][0] + "# #g#z" + items[i][0] + "# x" + items[i][2] + "#b】 價格：#v" + itemid + "# #r[" + items[i][1] + "] #b個#n\r\n";
}
let selection = npc.askMenuA(txt, true);
i = selection;
selection = npc.askNumber("購買道具為：#v" + items[i][0] + "# #z" + items[i][0] + "# " + items[i][2] + " 個#k\r\n請輸入購買個數：", 1, 1, amount);

if (i) {
    GS = selection;
    QSS = GS * items[i][1];
    if (currentItemQuantity < QSS) {
        npc.say("#fs16##b#e #v" + itemid + "# #z" + itemid + "#不足，無法購買");
    } else {
        player.loseItem(itemid, QSS);
        player.gainItem(items[i][0], items[i][2] * GS);
        //player.addAccountEventValue(items[i][3], GS);
        npc.say("#fs16##b#e購買成功");
    }
}