


var a8 = "#fEffect/ItemEff.img/1070069/effect/walk1/0#" //彩虹小云0-7
var a88 = "#fEffect/ItemEff.img/1070069/effect/walk1/4#" //彩虹小云0-7
var a888 = "#fEffect/ItemEff.img/1070069/effect/walk1/6#" //彩虹小云0-7

let itemList = Array(
	1004808,
	1053063,
	1073158,
	1082695,
	1102940,
	1152196,

	1004809,
	1053064,
	1073159,
	1082696,
	1102941,
	1152197,

	1004810,
	1053065,
	1073160,
	1082697,
	1102942,
	1152198,

	1004811,
	1053066,
	1073161,
	1082698,
	1102943,
	1152199,

	1004812,
	1053067,
	1073162,
	1082699,
	1102944,
	1152200


);

let boxId = 2633915;//箱子ID

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