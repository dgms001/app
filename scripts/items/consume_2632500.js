var status = -1
var txt;
/*------------------------------------------------------------*/
//var GC1 = "#fEffect/CharacterEff/1050312/0/0#"; //最上面的亮粉
//var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1082700/1/0#"; //"+z+"//小選項用
var items = Array(
	Array(2028300, 1),
	Array(2028301, 1),
	Array(2028302, 1),
	Array(2028303, 1),
	//下面是雜項
	Array(4001785, 1),
	Array(4001785, 1),
	Array(4001785, 1),
	Array(4001785, 1),
	Array(4001785, 1),
	Array(4001785, 1),
	Array(4001785, 2),
	Array(4001785, 2),
	Array(4001785, 2)


);

let mapA = map.getId();
if (mapA >= 993001010 && mapA <= 993001500) {//限制控制之神地圖
} else {
	txt = "#r隨機抽取一個拼圖箱\r\n\r\n";
	for (var i = 0; i < 5; i++) {
		txt += "#b#v" + items[i] + ":##z" + items[i] + ":#\r\n#l";
	}

	txt += "#r#b#L0#點我抽獎#l";

	let selection = npc.askMenu(txt, 9062453);

	if (selection == 0) {
		GS = selection;
		var GV = getMinAndMax(0, 12);
		player.gainItem(items[GV][0], items[GV][1]);
		player.loseItem(2632500, 1);
		npc.say("#fs16##b#e抽到了#v" + items[GV][0] + ":# * " + items[GV][1] + "");
	}
}
function getMinAndMax(minVal, maxVal) { //隨機 最大值 最小值
	return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}
