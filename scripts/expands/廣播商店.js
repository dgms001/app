var status = -1
var txt;
/*------------------------------------------------------------*/
//var GC1 = "#fEffect/CharacterEff/1050312/0/0#"; //最上面的亮粉
//var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1082700/1/0#"; //"+z+"//小選項用
var items = Array(
    Array(5072000, 5000, 1, "楓點商店-喇叭專區[高效能喇叭]"),
    Array(5072000, 5000, 1, "楓點商店-喇叭專區[高效能喇叭]"),
    Array(5076000, 5000, 1, "楓點商店-喇叭專區[道具喇叭]"),
    Array(5073000, 5000, 1, "楓點商店-喇叭專區[愛心喇叭]"),
    //Array(5074000, 10, 1, "楓點商店-喇叭專區[骷髏喇叭]"),
    //Array(5079001, 10, 1, "楓點商店-喇叭專區[蛋糕喇叭]"),
    //Array(5079002, 10, 1, "楓點商店-喇叭專區[派餅喇叭]"),
    //Array(5390010, 10, 1, "楓點商店-喇叭專區[幽靈喇叭]")
);

//txt = "" + GC1 + GC1 + GC1 + GC1 + "\r\n";
txt = "\r\n";
txt += "#e#fs21##e#r你好,這裡是廣播商店\r\n\r\n#n";
//txt += "" + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + "";
txt += "#fs12##b";
for (var i = 1; i < items.length; i++) {
    txt += "#fs21##e#b#L" + i + "##b#e#v" + items[i][0] + "# #b#z" + items[i][0] + "##b #r" + items[i][1] + " #b楓點#n\r\n";
}
let selection = npc.askMenuA(txt, 9062453);
i = selection;
selection = npc.askNumber("購買道具為：#v" + items[i][0] + "# #z" + items[i][0] + "##k\r\n請輸入購買個數：", 1, 1, 999);

if (i) {
    GS = selection;
    QSS = GS * items[i][1];
    if (player.getCashShopCurrency(2) < QSS) {
        npc.say("#fs16##b#e楓葉點數不足，無法購買");
    } else {
        player.modifyCashShopCurrency(2, -QSS);
        player.gainItem(items[i][0], items[i][2] * GS);
        //player.addAccountEventValue(items[i][3],GS);
        npc.say("#fs16##b#e購買成功");
    }
}