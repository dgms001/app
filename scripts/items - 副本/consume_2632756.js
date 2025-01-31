//4是其他欄 3是裝飾欄


var text = "";


if (player.getEventValue("圓夢贊助3000選擇") < 1) {
	text += "#e#r#fs18#圓夢新年3000斗內禮包獎勵如下:\r\n\r\n#n";
	text += "#fs15##b";
	text += "#r注意:#b[下方七擇一/選後不能反悔/不予更換]\r\n#b";
	text += "#L5##v3994020##z3994020#*1#r[領取]#l\r\n#b";
	text += "#L6##v4310282##z4310282#*1#r[領取]#l\r\n#b";
	text += "#L10##v4310225##z4310225#*1#r[領取]#l\r\n#b";
	text += "#L11##v4310086##z4310086#*1#r[領取]#l\r\n#b";
	text += "#L7##v4310237##z4310237#*2#r[領取]#l#b\r\n";
	text += "#L8##v2630383##z2630383#*1#r[領取]#l#b\r\n";
	text += "#L9##v2439641##z2439641#*10#r[領取]#l\r\n\r\n";
	text += "#r注意:#b領取完畢後,在打開一次箱子!\r\n";
} else {
	text += "#e#r#fs18#圓夢新年3000斗內禮包獎勵如下:\r\n#n";
	text += "#fs14##b";
	text += "#v4310282##z4310282#*1\r\n";
	text += "#v2437814##z2437814#*20\r\n";
	text += "#v4310260##z4310260#*50\r\n";
	text += "#v5064400##z5064400#*20\r\n";
	text += "#v2633336##z2633336#*5\r\n";
	text += "#v2630512##z2630512#*5\r\n";
	text += "#v5062026##z5062026#*50\r\n";
	text += "#v4032053##z4032053#*2000\r\n";
	text += "#v4001715##z4001715#*5\r\n";
	text += "#v2644008##z2644008#*2\r\n";
	text += "#v2023743##z2023743#*20\r\n";
	text += "#v2023744##z2023744#*20\r\n";
	text += "#v4009454##z4009454#*10000\r\n\r\n";
	text += "#fs16##r";
	text += "#L1#點我領取#l";
}

text += "\r\n";



let sel = npc.askMenuS("" + text, true);

if (sel == 1) {
	if (player.getFreeSlots(2) < 10 || player.getFreeSlots(3) < 10 || player.getFreeSlots(4) < 10 || player.getFreeSlots(5) < 10) {
		npc.say("#fs14##b請先確保欄位都空10格以上!");
	} else {
		player.gainItem(2437814, 20);
		player.gainItem(4310282, 1);
		player.gainItem(4310260, 50);
		player.gainItem(5064400, 20);
		player.gainItem(2633336, 5);
		player.gainItem(2630512, 5);
		player.gainItem(5062026, 50);
		player.gainItem(4032053, 2000);
		player.gainItem(4001715, 5);
		player.gainItem(2644008, 2);
		player.gainItem(2023743, 20);
		player.gainItem(2023744, 20);
		player.gainItem(4009454, 10000);
		player.loseItem(2632756, 1);
		player.addEventValue("圓夢贊助3000領取", 1, 1000);
		player.addEventValue("圓夢贊助3000選擇", -1, 1000);
		//npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "領取了新年斗內額外贊助3000T獎勵");
		npc.say("#fs14##b獲得好多東西~");
	}
} else if (sel == 5) {
	player.gainItem(3994020, 1);
	player.addEventValue("圓夢贊助3000選擇", 1, 1000);
	npc.say("#fs14##b獲得#v3994020#*1");
} else if (sel == 6) {
	player.gainItem(4310282, 1);
	player.addEventValue("圓夢贊助3000選擇", 1, 1000);
	npc.say("#fs14##b獲得#v4310282#*1");
} else if (sel == 7) {
	player.gainItem(4310237, 2);
	player.addEventValue("圓夢贊助3000選擇", 1, 1000);
	npc.say("#fs14##b獲得#v4310237#*2");
} else if (sel == 8) {
	player.gainItem(2630383, 1);
	player.addEventValue("圓夢贊助3000選擇", 1, 1000);
	npc.say("#fs14##b獲得#v2630383#*1");
} else if (sel == 9) {
	player.gainItem(2439641, 10);
	player.addEventValue("圓夢贊助30000選擇", 1, 1000);
	npc.say("#fs14##b獲得#v2439641#*10");
} else if (sel == 10) {
	player.gainItem(4310225, 1);
	player.addEventValue("圓夢贊助3000選擇", 1, 1000);
	npc.say("#fs14##b獲得#v4310225#*1");
} else if (sel == 11) {
	player.gainItem(4310086, 1);
	player.addEventValue("圓夢贊助3000選擇", 1, 1000);
	npc.say("#fs14##b獲得#v4310086#*1");
}






