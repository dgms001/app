var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔

let itemList = Array(
	1713000,
	1713001,
	1713002


);

let boxId = 2633336;//箱子ID



//text = ""+GC1+GC1+GC1+GC1+"\r\n";
var GC2 = "#fEffect/CharacterEff/1022223/2/0#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1112924/0/0#"; //"+z+"//小選項用
var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
var XD0 = "#fEffect/CharacterEff/1051366/0/0#";
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#"; //最上面的
let mapA = map.getId();
if (mapA == 993001100) { //限制開啟地圖
	//player.showSystemMessage("在卡BUG頭蓋骨給你打出來 操!!");
} else {
	text = "#fs21##e#b請選擇需要兌換的道具\r\n";


	for (var i = 0; i < itemList.length; i++) {
		text += "#L" + i + "##v" + itemList[i] + "##z" + itemList[i] + "##r * 1 #b個#l\r\n";
	}
}
let selected = npc.askMenuA(text, true);

text = "#fs21##e#b兌換道具為:\r\n#v" + itemList[selected] + "##k【#z" + itemList[selected] + "#】#r * 1 #b個";
let YN = npc.askNumber("" + text + "\r\n#r請輸入兌換數量：", 1, 1, 999);
i = selected;
QSS = player.getAmountOfItem("" + boxId + "");
ASS = player.getFreeSlots(1);
count = YN * 1;
if (YN > QSS) {
	npc.say("#fs17##e#b持有數量不足!");
} else if (count >= player.getFreeSlots(1)) {
	npc.say("#fs17##e#b裝備欄位不足");
} else {
	player.gainItem(itemList[selected], YN * 1);
	player.loseItem(boxId, YN);
	npc.say("#fs17##e#b兌換成功!");
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