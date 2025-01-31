//4是其他欄 3是裝飾欄
var nowca = java.util.Calendar.getInstance();//取時間
var nowday = nowca.get(java.util.Calendar.DATE);//獲取日
var NowFormat = parseInt(endmonthDate());//獲取該月日(字符)轉換成(數值int)

var needitem = 2434747;
var item = Array(
	Array(5062026, 150),
	Array(5062026, 150),
	Array(4036396, 2000),
	Array(2433575, 50),
	Array(4009411, 20)

);


var text = "";

// if(player.getEventValue("圓夢贊助6000每月限制1包")<1){

if (player.getEventValue("圓夢贊助6000選擇") < 1) {
	text += "#e#fs18##v" + needitem + "##r#z" + needitem + "#獎勵如下:\r\n\r\n#n";
	text += "#fs14##d[下方三擇一][下方三擇一][下方三擇一]\r\n#b";
	text += "#L5##v1113196##z1113196##r[領取]#l\r\n#b";
	text += "#L6##v1012632##z1012632##r[領取]#l\r\n#b";
	text += "#L7##v1022278##z1022278##r[領取]#l\r\n\r\n#b";

	text += "#b領取完畢後,在打開一次箱子!\r\n";
} else {
	text += "#e#fs18##v" + needitem + "##r#z" + needitem + "#獎勵如下:\r\n#n";
	text += "#fs14##b";
	for (let i = 1; i < item.length; i++) {
		text += "#v" + item[i][0] + "##z" + item[i][0] + "#*" + item[i][1] + "\r\n";
	}

	text += "#fs16##r";
	text += "#L1#點我領取#l";
}

text += "\r\n";



let sel = npc.askMenuS("" + text, true);

if (sel == 1) {
	if (player.getFreeSlots(2) < 10 || player.getFreeSlots(3) < 10 || player.getFreeSlots(4) < 10 || player.getFreeSlots(5) < 10) {
		npc.say("#fs14##b請先確保欄位都空10格以上!");
	} else {
		for (let i = 1; i < item.length; i++) {
			player.gainItem(item[i][0], item[i][1]);
		}
		player.loseItem(needitem, 1);
		npc.broadcastNotice("玩家開啟6000T禮包");
		player.addEventValue("圓夢贊助6000領取", 1, 1000);
		player.addEventValue("圓夢贊助6000選擇", -1, 1000);
		player.addEventValue("圓夢贊助6000每月限制1包", 1, ((NowFormat + 1) - nowday));
		npc.say("#fs14##b獲得好多東西~");
	}



} else if (sel == 5) {
	var toDrop = player.makeItemWithId(1113196);
	toDrop.setStr(150); //裝備力量
	toDrop.setDex(150); //裝備敏捷
	toDrop.setInt(150); //裝備智力
	toDrop.setLuk(150); //裝備運氣
	toDrop.setPad(150); //物理攻擊
	toDrop.setMad(150); //魔法攻擊 
	toDrop.setBossDamageR(10);
	toDrop.setIgnorePDR(10);
	toDrop.setDamR(10);
	player.gainItem(toDrop)
	player.addEventValue("圓夢贊助6000選擇", 1, 1000);
	npc.say("#fs14##b獲得強力改屬戒指");
} else if (sel == 6) {
	var toDrop = player.makeItemWithId(1012632);
	toDrop.setStr(150); //裝備力量
	toDrop.setDex(150); //裝備敏捷
	toDrop.setInt(150); //裝備智力
	toDrop.setLuk(150); //裝備運氣
	toDrop.setPad(150); //物理攻擊
	toDrop.setMad(150); //魔法攻擊 
	toDrop.setBossDamageR(10);
	toDrop.setIgnorePDR(10);
	toDrop.setDamR(10);
	player.gainItem(toDrop)
	player.addEventValue("圓夢贊助6000選擇", 1, 1000);
	npc.say("#fs14##b獲得強力改屬臉飾");
} else if (sel == 7) {
	var toDrop = player.makeItemWithId(1022278);
	toDrop.setStr(150); //裝備力量
	toDrop.setDex(150); //裝備敏捷
	toDrop.setInt(150); //裝備智力
	toDrop.setLuk(150); //裝備運氣
	toDrop.setPad(150); //物理攻擊
	toDrop.setMad(150); //魔法攻擊 
	toDrop.setBossDamageR(10);
	toDrop.setIgnorePDR(10);
	toDrop.setDamR(10);
	player.gainItem(toDrop)
	player.addEventValue("圓夢贊助6000選擇", 1, 1000);
	npc.say("#fs14##b獲得強力改屬眼飾");
}

/*}else{
	// npc.broadcastNotice("開啟禮包，發現疑似違規行為");
			player.loseItem(needitem,1);
	player.addEventValue("圓夢贊助6000違規紀錄", 1,1000);
	npc.say("#fs14##b圓夢贊助6000每月限制1包");
}*/







function endmonthDate() {
	let date = new Date();
	let month = date.getMonth() + 1;
	let strDate = 30;
	if (month == 2) {
		strDate = "28";
	}
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
		strDate = "31";
	}
	let currentdate = strDate;
	return currentdate;
}






