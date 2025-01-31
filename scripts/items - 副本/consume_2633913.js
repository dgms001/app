


var a8 = "#fEffect/ItemEff.img/1070069/effect/walk1/0#" //彩虹小云0-7
var a88 = "#fEffect/ItemEff.img/1070069/effect/walk1/4#" //彩虹小云0-7
var a888 = "#fEffect/ItemEff.img/1070069/effect/walk1/6#" //彩虹小云0-7

let itemList = Array(
	1004422,
	1004423,
	1004424,
	1004425,
	1004426,
	1073030,
	1073032,
	1073033,
	1073034,
	1073035,
	1082636,
	1082637,
	1082638,
	1082639,
	1082640,
	1102775,
	1102794,
	1102795,
	1102796,
	1102797,
	1152174,
	1152176,
	1152177,
	1152178,
	1152179


);

let boxId = 2633913;//箱子ID

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