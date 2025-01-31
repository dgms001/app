


var GC1 = "#fEffect/CharacterEff/1050312/0/0#";//最上面的亮粉
var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#";//紅心桃心
var GC3 = "#fEffect/CharacterEff/1082700/1/0#";//"+z+"//小選項用
var XD0 = "#fEffect/CharacterEff/1051366/0/0#"
var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#"; //最上面的
var a8 = "#fEffect/ItemEff.img/1070069/effect/walk1/0#" //彩虹小云0-7
var a88 = "#fEffect/ItemEff.img/1070069/effect/walk1/4#" //彩虹小云0-7
var a888 = "#fEffect/ItemEff.img/1070069/effect/walk1/6#" //彩虹小云0-7
let itemList = Array(

	2613048,
	2613049,
	2612055,
	2612056,
	2616059,
	2616060,
	2615029,
	2615030,
	2048815,
	2048816

);

let boxId = 2635034;//箱子ID

let mapA = map.getId();
if (mapA >= 993001010 && mapA <= 993001500) {//限制控制之神地圖

} else {
	text = ""
	//text += "" + a8 + "  " + a888 + "" + a888 + "" + a888 + " " + a88 + "";
	text += "#fs21##e#b請選擇你需要兌換的物品,可批量兌換\r\n";
	for (var i = 0; i < itemList.length; i++) {
		text += "#b#L" + i + "##v" + itemList[i] + "##r#z" + itemList[i] + "##l\r\n";
		if (i == 0 || i == 2 || i == 4 || i == 6 || i == 8 || i == 10 || i == 12 || i == 14 || i == 16 || i == 18 || i == 20 || i == 22 || i == 24 || i == 26 || i == 28 || i == 30 || i == 32 || i == 34) {
			text += "";
		} else if (i) {
			//text +="\r\n";
		}
	}
}
let selected = npc.askMenuA(text, true);

text = "#fs21##e#b#b選擇道具為:\r\n#v" + itemList[selected] + "##r【#z" + itemList[selected] + "#】";
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

/*
if(player.canGainItem(itemList[selected],1)){
		if(player.hasItem(boxId,1)){
		var itemid = itemList[selected];
			player.gainItem(itemid,1);
			player.loseItem(boxId,1);
			npc.say("#fs16##b#e兌換成功"+YN+"");
		}else{
			npc.say("#fs16##b#e沒有#v"+boxId+"#");
		}
	}else{
		npc.say("#fs16##b#e請清理背包!");
	}*/