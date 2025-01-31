var status = -1
var txt;
/*------------------------------------------------------------*/
var GC1 = "#fEffect/CharacterEff/1050312/0/0#"; //最上面的亮粉
var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#"; //紅心桃心

var GC3 = "#fEffect/CharacterEff/1082700/1/0#"; //"+z+"//小選項用
var items = Array(
    Array(2450175, 5, 1, "楓點商店-實用雜物專區[寵物強化箱]"),
    Array(2450175, 3, 1, "楓點商店-實用雜物專區[神奇剪刀]"),
    Array(2023128, 2, 1, "終極經驗藥水"),
    Array(5121059, 3, 1, "MVP加被(黃金)"),
    Array(2022709, 10, 1, "掉寶盒子"),
    Array(5060048, 1, 2, "白金槌子"),
    Array(2472000, 1, 1, "白金槌子"),
    Array(5062021, 1, 1, "閃炫方塊"),
    Array(2644006, 80, 1, "附加方塊"),
	Array(2644007, 120, 1, "附加方塊"),
    Array(5062026, 1, 1, "附加方塊"), 
    Array(5062503, 1, 1, "附加方塊"), 
    Array(2644029, 150, 1, "20星力"),



);
var itemsl = 4310252;
//txt = "" + GC1 + GC1 + GC1 + GC1 + "\r\n";
//txt = "\r\n";
txt = "#b#fs21##e你好！這裡是推文硬幣商店\r\n\r\n#b";//

//txt += "\t\t\t#e#fs20##fc0xFFFF4EFF#【推文幣商店】\r\n#n";
//txt += "" + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + "";
txt += "#fs11##b";
for (var i = 1; i < items.length; i++) {
    txt += "#L" + i + "##fs16##b#e#v" + items[i][0] + "# #z" + items[i][0] + "##b  價格:#b#v4310252##r" + items[i][1] + "#b個   兌換#r" + items[i][2] + "#b個#n\r\n";
}
let selection = npc.askMenuA(txt, true);
i = selection;
selection = npc.askNumber("#r警#g告：#b請注意揹包空位夠不夠，請注意(有些物品是1個物品佔1個格子哦)!\r\n#r警#g告：#b如果空位不夠，購買的物品將消失，不給與任何賠償!\r\n\r\n購買道具為：#v" + items[i][0] + "# #z" + items[i][0] + "##k\r\n請輸入購買個數：", 1, 1, 999);

if (i) {
    GS = selection;
    QSS = GS * items[i][1];
    if (!player.hasItem(itemsl, QSS)) {
        npc.say("#fs18##b#e你並沒有足夠的#v" + itemsl + "##r#z" + itemsl + "#");

    } else {
        //player.modifyCashShopCurrency(2, -QSS);
        //player.gainItem(4000000,1);
        player.gainItem(items[i][0], items[i][2] * GS);
        player.loseItem(itemsl, QSS);
        //player.addAccountEventValue(items[i][3], GS);
        npc.say("#fs16##b#e購買成功");
    }
}