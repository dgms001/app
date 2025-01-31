


var a8 = "#fEffect/ItemEff.img/1070069/effect/walk1/0#" //彩虹小云0-7
var a88 = "#fEffect/ItemEff.img/1070069/effect/walk1/4#" //彩虹小云0-7
var a888 = "#fEffect/ItemEff.img/1070069/effect/walk1/6#" //彩虹小云0-7

let itemList = Array(
	1582017,
	1232109,
	1402251,
	1302333,
	1312199,
	1322250,
	1412177,
	1422184,
	1432214,
	1442268,
	1542108,
	1213017,

	1212115,
	1372222,
	1382259,
	1552110,
	1252093,
	1262017,
	1282016,

	1522138,
	1592019,
	1452252,
	1462239,
	1214017,

	1242116,
	1332274,
	1342101,
	1362135,
	1472261,
	1292017,
	1272016,

	1222109,
	1482216,
	1492231,
	1532144,
	1403017


);

let boxId = 2633912;//箱子ID

let mapA = map.getId();
if (mapA >= 993001010 && mapA <= 993001500) {//限制控制之神地圖
} else {
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