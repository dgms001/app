var status = -1
var txt;
/*------------------------------------------------------------*/
//var GC1 = "#fEffect/CharacterEff/1050312/0/0#"; //最上面的亮粉
//var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1082700/1/0#"; //"+z+"//小選項用
var items = Array(
    Array(5072000, 100000, 1, ""),
	Array(5072000, 100000, 1, ""),
    Array(5073000, 100000, 1, ""),
	Array(5074000, 100000, 1, ""),
    Array(5076000, 100000, 1, ""),
	Array(5079001, 100000, 1, ""),
	Array(5390000, 2000000, 1, ""),
	Array(5390002, 2000000, 1, ""),
	Array(5390025, 2000000, 1, ""),
    Array(5390039, 2000000, 1, ""),
    Array(5390036, 5000000, 1, "")
   
);

//txt = "" + GC1 + GC1 + GC1 + GC1 + "\r\n";
txt = "\r\n";
txt += "\t\t\t#e#fs20##fc0xFFFF4EFF#【喇叭商店】\r\n#n";
//txt += "" + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + "";
txt += "#fs12##b";
for (var i = 1; i < items.length; i++) {
	txt += "#L" + i + "##b#e#v" + items[i][0] + "# #k#z" + items[i][0] + "##b #r" + items[i][1] + " #b楓幣#n\r\n";
}
let selection = npc.askMenuS(txt,true);
i = selection;
selection = npc.askNumber("購買道具為：#v" + items[i][0] + "# #z" + items[i][0] + "##k\r\n請輸入購買個數：", 1, 1, 999);

if (i) {
    GS = selection;
    QSS = GS * items[i][1];
    if(!player.hasMesos(QSS)){
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