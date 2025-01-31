//4是其他欄 3是裝飾欄


var text = "";


if (player.getEventValue("圓夢贊助1000選擇") < 1) {
	text += "#e#fs18##v2434630##r#z2434630#獎勵如下:\r\n\r\n#n";
	text += "#fs14##d[下方三擇一][下方三擇一][下方三擇一]\r\n#b";
	text += "#L5##v2433575##z2433575#*10#r[領取]#l\r\n#b";
	text += "#L6##v5064400##z5064400#*10#r[領取]#l\r\n#b";
	text += "#L7##v2433575##z2433575#*5+#v5064400##z5064400#*5#r[領取]#l\r\n\r\n";
	text += "#b領取完畢後,在打開一次箱子!\r\n";
} else {
	text += "#e#fs18##v2434630##r#z2434630#獎勵如下:\r\n#n";
	text += "#fs14##b";
	text += "#v5060048##z5060048#*50\r\n";
	text += "#v5060025##z5060025#*50\r\n";
	text += "#v5060028##z5060028#*50\r\n";
	text += "#v5062010##z5062010#*50\r\n";
	text += "#v5062020##z5062020#*50\r\n";
	text += "#v5062500##z5062500#*30\r\n";
	text += "#v4032053##z4032053#*1000\r\n";
	text += "#v2630649##z2630649#*10\r\n";
	text += "#v4036396##z4036396#*750\r\n\r\n";
	text += "#fs16##r";
	text += "#L1#點我領取#l";
}

text += "\r\n";



let sel = npc.askMenuS("" + text, true);

if (sel == 1) {
	if (player.getFreeSlots(2) < 10 || player.getFreeSlots(3) < 10 || player.getFreeSlots(4) < 10 || player.getFreeSlots(5) < 10) {
		npc.say("#fs14##b請先確保欄位都空10格以上!");
	} else {
		player.gainItem(5060048, 50);
		player.gainItem(5060025, 50);
		player.gainItem(5060028, 50);
		player.gainItem(5062010, 50);
		player.gainItem(5062020, 50);
		player.gainItem(5062500, 30);
		player.gainItem(4032053, 1000);
		player.gainItem(2630649, 10);
		player.gainItem(4036396, 750);
		player.loseItem(2434630, 1);
		npc.broadcastNotice("玩家開啟1000T禮包");
		player.addEventValue("圓夢贊助1000領取", 1, 1000);
		player.addEventValue("圓夢贊助1000選擇", -1, 1000);
		npc.say("#fs14##b獲得好多東西~");
	}



} else if (sel == 5) {
	player.gainItem(2433575, 10);
	player.addEventValue("圓夢贊助1000選擇", 1, 1000);
	npc.say("#fs14##b獲得#v2433575#*10");
} else if (sel == 6) {
	player.gainItem(5064400, 10);
	player.addEventValue("圓夢贊助1000選擇", 1, 1000);
	npc.say("#fs14##b獲得#v5064400#*10");
} else if (sel == 7) {
	player.gainItem(2433575, 5);
	player.gainItem(5064400, 5);
	player.addEventValue("圓夢贊助1000選擇", 1, 1000);
	npc.say("#fs14##b獲得#v2433575#*5,#v5064400#*5");
}








