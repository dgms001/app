var status = -1
var txt;
/*------------------------------------------------------------*/
//var GC1 = "#fEffect/CharacterEff/1050312/0/0#"; //最上面的亮粉
//var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1082700/1/0#"; //"+z+"//小選項用
var items = Array(
    Array(1942004, 10000, 1, ""),
    Array(1942004, 10000, 1, ""),
    Array(1952004, 10000, 1, ""),
    Array(1962004, 10000, 1, ""),
    Array(1972004, 10000, 1, ""),
    Array(1353603, 100000, 1, ""),
    Array(1353503, 100000, 1, ""),
    Array(1353303, 100000, 1, ""),
    Array(1342008, 100000, 1, ""),
    Array(1352922, 100000, 1, ""),
    Array(1352823, 100000, 1, ""),
    Array(1352202, 100000, 1, ""),
    Array(1352212, 100000, 1, ""),
    Array(1352222, 100000, 1, ""),
    Array(1352232, 100000, 1, ""),
    Array(1352242, 100000, 1, ""),
    Array(1352252, 100000, 1, ""),
    Array(1352262, 100000, 1, ""),
    Array(1352272, 100000, 1, ""),
    Array(1352292, 100000, 1, ""),
    Array(1352282, 100000, 1, ""),
    Array(1352902, 100000, 1, ""),
    Array(1352912, 100000, 1, ""),
    Array(1352972, 100000, 1, ""),
    Array(1352932, 100000, 1, ""),
    Array(1352003, 100000, 1, ""),
    Array(1352103, 100000, 1, ""),
    Array(1352403, 100000, 1, ""),
    Array(1099004, 100000, 1, ""),
    Array(1352962, 100000, 1, ""),
    Array(1352952, 100000, 1, ""),
    Array(1352703, 100000, 1, ""),
    Array(1353403, 100000, 1, ""),
    Array(1353004, 100000, 1, ""),
    Array(1098003, 100000, 1, ""),
    Array(1352503, 100000, 1, ""),
    Array(1352604, 100000, 1, ""),
    Array(1353103, 100000, 1, ""),
    Array(1352803, 100000, 1, ""),
    Array(1552009, 100000, 1, ""),
    Array(1353203, 100000, 1, ""),
    Array(1352943, 100000, 1, ""),
    Array(1352813, 100000, 1, "")


















);

//txt = "" + GC1 + GC1 + GC1 + GC1 + "\r\n";
txt = "\r\n";
txt += "#fs21##e#r你好,這裡是副手商店\r\n\r\n#b";//
//txt += "" + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + "";
// txt += "#fs12##k價格為 #r10萬楓幣#k\r\n";
txt += "#fs12##b";
for (var i = 1; i < items.length; i++) {
    txt += "#fs16##b#e#L" + i + "##fs16##b#e#v" + items[i][0] + "##b#z" + items[i][0] + "##b #r" + items[i][1] + " #b楓幣#n\r\n";
}
let selection = npc.askMenuA(txt, true);
i = selection;
selection = npc.askNumber("#r警#g告：#b請注意揹包空位夠不夠，請注意(有些物品是1個物品佔1個格子哦)!\r\n#r警#g告：#b如果空位不夠，購買的物品將消失，不給與任何賠償!\r\n\r\n購買道具為：#v" + items[i][0] + "# #z" + items[i][0] + "##k\r\n請輸入購買個數：", 1, 1, 999);

if (i) {
    GS = selection;
    QSS = GS * items[i][1];
    //if (getMeso() < QSS) {

    if (!player.hasMesos(QSS)) {
        npc.say("#fs16##b#e楓幣不足，無法購買");
    } else {
        player.loseMesos(QSS);
        player.gainItem(items[i][0], items[i][2] * GS);
        //player.addAccountEventValue(items[i][3],GS);
        npc.say("#fs16##b#e購買成功");
    }
}

function getMeso() {
    var sql = "select money from characters where name = ? ";
    var result = player.customSqlResult(sql, player.getName());
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("money");
        }
    } else {
        return 0;
    }
}