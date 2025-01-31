var status = -1
var txt;
/*------------------------------------------------------------*/
//var GC1 = "#fEffect/CharacterEff/1050312/0/0#"; //最上面的亮粉
//var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1082700/1/0#"; //"+z+"//小選項用
var items = Array(
	1680639,	//水槍大作戰！拼圖1	
	1680640,	//水槍大作戰！拼圖2	
	1680641,	//水槍大作戰！拼圖3	
	1680642,	//水槍大作戰！拼圖4	
	1680643,	//水槍大作戰！拼圖5	
	1680644,	//水槍大作戰！拼圖6
	1680645,	//水槍大作戰！拼圖7	
	1680646,	//水槍大作戰！拼圖8
	1680647,	//水槍大作戰！拼圖9	
	1680648,	//水槍大作戰！拼圖10	
	1680649,	//水槍大作戰！拼圖11	
	1680650,	//水槍大作戰！拼圖12	
	1680603,	//吉可穆德之夏 拼圖1
	1680604,	//吉可穆德之夏 拼圖2
	1680605,	//吉可穆德之夏 拼圖3
	1680606,	//吉可穆德之夏 拼圖4
	1680607,	//吉可穆德之夏 拼圖5
	1680608,	//吉可穆德之夏 拼圖6
	1680609,	//吉可穆德之夏 拼圖7
	1680610,	//吉可穆德之夏 拼圖8
	1680611,	//吉可穆德之夏 拼圖9
	1680612,	//吉可穆德之夏 拼圖10
	1680613,	//吉可穆德之夏 拼圖11
	1680614	//吉可穆德之夏 拼圖12

);

let mapA = map.getId();
if (mapA >= 993001010 && mapA <= 993001500) {//限制控制之神地圖
} else {
	txt = "#r隨機抽取一個拼圖,抽到重複的直接丟棄即可\r\n\r\n";
	for (var i = 0; i < items.length; i++) {
		txt += "#b#v" + items[i] + ":##z" + items[i] + ":#\r\n#l";
	}

	txt += "#L0#點我抽取";

	let selection = npc.askMenu(txt, 9062453);

	if (selection == 0) {
		GS = selection;
		var GV = getMinAndMax(0, 23);
		player.gainItem(items[GV], 1);
		player.loseItem(2028178, 1);
		npc.say("#fs16##b#e抽到了#v" + items[GV] + ":#,請自己注意拼圖欄位是否溢出");
	}
}
function getMinAndMax(minVal, maxVal) { //隨機 最大值 最小值
	return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}
