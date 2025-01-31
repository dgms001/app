//4是其他欄 3是裝飾欄
var nowca = java.util.Calendar.getInstance();//取時間
var nowday = nowca.get(java.util.Calendar.DATE);//獲取日
var NowFormat = parseInt(endmonthDate());//獲取該月日(字符)轉換成(數值int)


var needitem = 2632759;
var item = Array(
	Array(2644029, 3),//20星力
	Array(2644029, 8),//20星力
	Array(2633634, 400),//漆黑碎片
	Array(4036396, 1000),//會員
	Array(2433575, 100),//榮耀
	Array(4009411, 30)//雪花

);


var text = "";

// if(player.getEventValue("圓夢贊助3000每月限制1包")<10){	
if (player.getEventValue("圓夢贊助9000選擇2") < 1) {
	text += "#e#fs18##v" + needitem + "##r#z" + needitem + "#獎勵如下:\r\n\r\n#n";
	text += "#fs14##d[下方四擇一][下方四擇一][下方四擇一]\r\n#b";
	text += "#L5##v1114402##z1114402##r[領取]#l\r\n#b";
	text += "#L6##v1122430##z1122430##r[領取]#l\r\n#b";
	text += "#L7##v1113306##z1113306##r[領取]#l\r\n#b";
	text += "#L8##v1032316##z1032316##r[領取]#l\r\n\r\n#b";
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
	if (player.getFreeSlots(1) < 10 || player.getFreeSlots(2) < 10 || player.getFreeSlots(3) < 10 || player.getFreeSlots(4) < 10 || player.getFreeSlots(5) < 10) {
		npc.say("#fs14##b請先確保欄位都空10格以上!");
	} else {
		for (let i = 1; i < item.length; i++) {
			player.gainItem(item[i][0], item[i][1]);
		}
		player.loseItem(needitem, 1);
		npc.broadcastNotice("玩家開啟9000T禮包");
		player.addEventValue("圓夢贊助9000領取2", 1, 1000);
		player.addEventValue("圓夢贊助9000選擇2", -1, 1000);
		player.addEventValue("圓夢贊助9000每月限制1包", 1, ((NowFormat + 1) - nowday));
		npc.say("#fs14##b獲得好多東西~");
	}



} else if (sel == 5) {
	var toDrop = player.makeItemWithId(1114402);
	toDrop.setStr(300); //裝備力量
	toDrop.setDex(300); //裝備敏捷
	toDrop.setInt(300); //裝備智力
	toDrop.setLuk(300); //裝備運氣
	toDrop.setPad(300); //物理攻擊
	toDrop.setMad(300); //魔法攻擊 
	player.gainItem(toDrop)
	player.addEventValue("圓夢贊助9000選擇2", 1, 1000);
	npc.say("#fs14##b獲得強力改屬時裝戒指");
} else if (sel == 6) {
	var toDrop = player.makeItemWithId(1122430);
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
	player.addEventValue("圓夢贊助9000選擇2", 1, 1000);
	npc.say("#fs14##b獲得強力改屬項鍊");
} else if (sel == 7) {
	var toDrop = player.makeItemWithId(1113306);
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
	player.addEventValue("圓夢贊助9000選擇2", 1, 1000);
	npc.say("#fs14##b獲得強力改屬戒指");
} else if (sel == 8) {
	var toDrop = player.makeItemWithId(1032316);
	toDrop.setStr(200); //裝備力量
	toDrop.setDex(200); //裝備敏捷
	toDrop.setInt(200); //裝備智力
	toDrop.setLuk(200); //裝備運氣
	toDrop.setPad(200); //物理攻擊
	toDrop.setMad(200); //魔法攻擊 
	toDrop.setBossDamageR(25);
	toDrop.setIgnorePDR(25);
	toDrop.setDamR(25);
	player.gainItem(toDrop)
	player.addEventValue("圓夢贊助9000選擇2", 1, 1000);
	npc.say("#fs14##b獲得強力改屬耳環");
}
/*}else{
	// npc.broadcastNotice("開啟禮包，發現疑似違規行為");
			player.loseItem(needitem,1);
	player.addEventValue("圓夢贊助3000違規紀錄", 1,1000);
	npc.say("#fs14##b圓夢贊助3000每月限制1包");
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