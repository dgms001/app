


var a8 = "#fEffect/ItemEff.img/1070069/effect/walk1/0#" //彩虹小云0-7
var a88 = "#fEffect/ItemEff.img/1070069/effect/walk1/4#" //彩虹小云0-7
var a888 = "#fEffect/ItemEff.img/1070069/effect/walk1/6#" //彩虹小云0-7

let itemList = Array(
	1232057,
	1312153,
	1322203,
	1302275,
	1402196,
	1412135,
	1422140,
	1432167,
	1442223,
	1582016,
	1542063,
	1213016,

	1212063,
	1262016,
	1372177,
	1382208,
	1252015,
	1552063,
	1282015,

	1452205,
	1462193,
	1522094,
	1592018,
	1214016,

	1242060,
	1332225,
	1342082,
	1362090,
	1472214,
	1292016,
	1272015,
	1342101,

	1222058,
	1242061,
	1482168,
	1492179,
	1532098,
	1403016


);

let boxId = 2631528;//箱子ID

let mapA = map.getId();
if (mapA >= 993001010 && mapA <= 993001500) {//限制控制之神地圖
} else {
	let text = ""
	text += "請選擇你需要兌換道具:\r\n";

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