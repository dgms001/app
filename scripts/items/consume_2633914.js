


var a8 = "#fEffect/ItemEff.img/1070069/effect/walk1/0#" //彩虹小云0-7
var a88 = "#fEffect/ItemEff.img/1070069/effect/walk1/4#" //彩虹小云0-7
var a888 = "#fEffect/ItemEff.img/1070069/effect/walk1/6#" //彩虹小云0-7

let itemList = Array(
	1212120,
	1222113,
	1232113,
	1242121,
	1242122,
	1252098,
	1262039,
	1302343,
	1312203,
	1322255,
	1332279,
	1342104,
	1362140,
	1372228,
	1382265,
	1402259,
	1412181,
	1422189,
	1432218,
	1442274,
	1452257,
	1462243,
	1472265,
	1482221,
	1492235,
	1522143,
	1532150,
	1542117,
	1552119,
	1582023,
	1272017,
	1282017,
	1592020,
	1213018,
	1292018,
	1214018,
	1403018


);
let mapA = map.getId();
if (mapA >= 993001010 && mapA <= 993001500) {//限制控制之神地圖
} else {
	let boxId = 2633914;//箱子ID


	let text = ""
	text += "#b請選擇你需要兌換的物品,可批量兌換\r\n";

	for (var i = 0; i < itemList.length; i++) {
		text += "#b#L" + i + "##v" + itemList[i] + "##r#z" + itemList[i] + "##l\r\n";

	}
	let selected = npc.askMenuS(text, true);

	text = "#fs17##e#b選擇道具為:\r\n#v" + itemList[selected] + "##r【#z" + itemList[selected] + "#】";
	QSS = player.getAmountOfItem("" + boxId + "");
	let YN = npc.askNumber("" + text + "\r\n#b請輸入兌換數量：", 1, 1, QSS);
	i = selected;

	if (QSS >= YN) {
		player.gainItem(itemList[selected], YN);
		player.loseItem(boxId, YN);
		npc.say("#fs17##e#b兌換成功!");

	} else {
		npc.say("#fs17##e#b持有數量不足!");
	}
}