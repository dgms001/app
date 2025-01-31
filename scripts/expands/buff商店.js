var status = -1
    var txt;
/*------------------------------------------------------------*/
//var GC1 = "#fEffect/CharacterEff/1050312/0/0#"; //最上面的亮粉
//var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1082700/1/0#"; //"+z+"//小選項用
var items = Array(
        Array(5072000, 100000, 1, ""),
        Array(2023741, 3000000, 1, ""),
		Array(2023742, 7500000, 1, ""),
        Array(2022952, 500000, 1, ""),
        Array(2022953, 500000, 1, ""),
        Array(2022954, 500000, 1, ""),
        Array(2022959, 500000, 1, ""),
        Array(2022960, 1000000, 1, ""),
        Array(2022961, 2000000, 1, ""),
        Array(2022851, 500000, 1, ""),
        Array(2022852, 1000000, 1, ""),
        Array(2022853, 2000000, 1, ""),
		Array(2023819, 2000000, 1, ""),
        Array(2023346, 100000, 1, ""),
        Array(2023347, 200000, 1, ""),
        Array(2023348, 300000, 1, ""),
        Array(2023349, 400000, 1, ""),
        Array(2023350, 500000, 1, ""),
        Array(2022827, 100000, 1, ""),
        Array(2022828, 500000, 1, ""),
        Array(2022829, 1000000, 1, ""),
        Array(2022814, 100000, 1, ""),
        Array(2022815, 500000, 1, ""),
        Array(2022816, 1000000, 1, ""),
        Array(2023188, 500000, 1, ""),
        Array(2023355, 1000000, 1, "")
        /*Array(2023402, 1000000, 1, ""),
        Array(2023403, 1000000, 1, ""),
        Array(2023578, 1000000, 1, "")*/
		);
ifopen();
//txt = "" + GC1 + GC1 + GC1 + GC1 + "\r\n";
txt = "";
txt += "#e#fs21##e#r你好,這裡是buff商店\r\n#n";
//txt += "" + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + "";
txt += "#fs12##b";
for (var i = 1; i < items.length; i++) {
    txt += "#fs16##e#b#L" + i + "##b#e#v" + items[i][0] + "# #b#z" + items[i][0] + "##b #r" + items[i][1] / 10000 + "萬 #b楓幣#n\r\n";
}
let selection = npc.askMenuA(txt, true);
i = selection;
selection = npc.askNumber("購買道具為：#v" + items[i][0] + "# #z" + items[i][0] + "##k\r\n請輸入購買個數：", 1, 1, 99);

if (i) {
    GS = selection;
    QSS = GS * items[i][1];
    if (!player.hasMesos(QSS)) {
        npc.say("#fs16##b#e楓幣不足，無法購買");
    } else {
        player.loseMesos(QSS);
        player.gainItem(items[i][0], items[i][2] * GS);
        //player.addAccountEventValue(items[i][3],GS);
        npc.say("#fs16##b#e購買成功");
        player.runScript("buff商店");
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
function ifopen() {
    if (player.getFreeSlots(2) < 1) {
        npc.askMenuS("#fs14##b請先確保消耗欄有1個以上格子!");
    }
}
