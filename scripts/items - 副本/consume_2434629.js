//4是其他欄 3是裝飾欄


var text = "";


if (player.getEventValue("圓夢贊助5000選擇") < 1) {
	text += "#e#fs18##v2434629##r#z2434629#獎勵如下:\r\n\r\n#n";
	text += "#fs14##d[下方三擇一][下方三擇一][下方三擇一]\r\n#b";
	text += "#L5##v2433575##z2433575#*25#r[領取]#l\r\n#b";
	text += "#L6##v5064400##z5064400#*25#r[領取]#l\r\n#b";
	text += "#L7#改屬#v1052723##z1052723##r[領取]#l\r\n\r\n";
	text += "#b領取完畢後,在打開一次箱子!\r\n";
} else {
	text += "#e#fs18##v2434629##r#z2434629#獎勵如下:\r\n#n";
	text += "#fs14##b";
	text += "#v5062026##z5062026#*50\r\n";
	text += "#v2433575##z2433575#*25\r\n";
	text += "#v2438838##z2438838#*2\r\n";
	text += "#v4036396##z4036396#*1000\r\n\r\n";
	text += "#fs16##r";
	text += "#L1#點我領取#l";
}

text += "\r\n";



let sel = npc.askMenuS("" + text, true);

if (sel == 1) {
	if (player.getFreeSlots(2) < 10 || player.getFreeSlots(3) < 10 || player.getFreeSlots(4) < 10 || player.getFreeSlots(5) < 10) {
		npc.say("#fs14##b請先確保欄位都空10格以上!");
	} else {
		player.gainItem(5062026, 50);
		player.gainItem(2433575, 25);
		player.gainItem(2438838, 2);
		player.gainItem(4036396, 1000);
		player.loseItem(2434629, 1);
		player.addEventValue("圓夢贊助5000領取", 1, 1000);
		player.addEventValue("圓夢贊助5000選擇", -1, 1000);
		npc.say("#fs14##b獲得好多東西~");
	}



} else if (sel == 5) {
	player.gainItem(2433575, 25);
	player.addEventValue("圓夢贊助5000選擇", 1, 1000);
	npc.say("#fs14##b獲得#v2433575#*25");
} else if (sel == 6) {
	player.gainItem(5064400, 25);
	player.addEventValue("圓夢贊助5000選擇", 1, 1000);
	npc.say("#fs14##b獲得#v5064400#*25");
} else if (sel == 7) {
	var toDrop = player.makeItemWithId(1052723);
	toDrop.setStr(400); //裝備力量
	toDrop.setDex(400); //裝備敏捷
	toDrop.setInt(400); //裝備智力
	toDrop.setLuk(400); //裝備運氣
	toDrop.setPad(400); //物理攻擊
	toDrop.setMad(400); //魔法攻擊 
	toDrop.setMaxHp(5000);
	toDrop.setMaxMp(5000);
	toDrop.setTitle("" + player.getName() + "");
	player.gainItem(toDrop)
	player.addEventValue("圓夢贊助5000選擇", 1, 1000);
	npc.say("#fs14##b獲得強力改屬滅龍");
}






