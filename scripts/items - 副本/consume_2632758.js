//4是其他欄 3是裝飾欄


var text = "";


if (player.getEventValue("圓夢贊助10000選擇") < 1) {
	text += "#e#r#fs18#圓夢新年10000斗內禮包獎勵如下:\r\n\r\n#n";
	text += "#fs15##b";
	text += "#r注意:#b[下方八擇一/選後不能反悔/不予更換]\r\n#b";
	text += "#fs14##b";
	text += "#L5#[修改潛能]#v4310282##z4310282#*10#r[領取]#l\r\n#b";
	text += "#L6#[詳情查看DC]#s80000545##q80000545##r[領取]#l\r\n#b";
	text += "#L8#[詳情查看DC]#s80000186##q80000186##r[領取]#l#b\r\n";
	text += "#L9#[詳情查看DC]#s80000582##q80000582##r[領取]#l#b\r\n";
	text += "#L10#[詳情查看DC]#s80012257##q80012257##r[領取]#l#b\r\n";
	text += "#L7#[詳情查看DC]#s80000566##q80000566##r[領取]#l\r\n#b";
	text += "#L11#[詳情查看DC]#s80000570##q80000570##r[領取]#l#b\r\n";
	text += "#L12#[詳情查看DC]#s80000567##q80000567##r[領取]#l#b\r\n\r\n";
	text += "#r注意:#b領取完畢後,在打開一次箱子!\r\n";
} else {
	text += "#e#r#fs18#圓夢新年10000斗內禮包獎勵如下:\r\n#n";
	text += "#fs14##b";
	text += "#v4310282##z4310282#*5\r\n";//NA
	text += "#v4310237##z4310237#*2\r\n";//Nv
	text += "#v4310225##z4310225#*1\r\n";//Nv
	text += "#v2437814##z2437814#*50\r\n";//命運
	text += "#v4310260##z4310260#*300\r\n";//創世結晶
	text += "#v5064400##z5064400#*50\r\n";//恢復
	text += "#v2633336##z2633336#*15\r\n";//AUT
	text += "#v2630512##z2630512#*15\r\n";//ARC
	text += "#v5062026##z5062026#*200\r\n";//結合
	text += "#v4032053##z4032053#*5000\r\n";//楓葉
	text += "#v4001715##z4001715#*10\r\n";//金幣
	text += "#v2644008##z2644008#*10\r\n";//追加
	text += "#v2023743##z2023743#*50\r\n";//領路
	text += "#v2023744##z2023744#*50\r\n";//領路
	text += "#v4009454##z4009454#*30000\r\n\r\n";
	text += "#fs16##r";
	text += "#L1#點我領取#l";
}

text += "\r\n";



let sel = npc.askMenuS("" + text, true);

if (sel == 1) {
	if (player.getFreeSlots(2) < 10 || player.getFreeSlots(3) < 10 || player.getFreeSlots(4) < 10 || player.getFreeSlots(5) < 10) {
		npc.say("#fs14##b請先確保欄位都空10格以上!");
	} else {
		player.gainItem(4310282, 5);//nc
		player.gainItem(4310237, 2);//nv
		player.gainItem(4310225, 1);//nb
		player.gainItem(2437814, 50);//命運
		player.gainItem(4310260, 300);//創世結晶
		player.gainItem(5064400, 50);//恢復
		player.gainItem(2633336, 15);//AUT
		player.gainItem(2630512, 15);//ARC
		player.gainItem(5062026, 200);//結合
		player.gainItem(4032053, 5000);//楓葉
		player.gainItem(4001715, 10);//金幣
		player.gainItem(2644008, 10);//追加
		player.gainItem(2023743, 50);//領路
		player.gainItem(2023744, 50);//領路
		player.gainItem(4009454, 30000);//任務道具
		player.loseItem(2632758, 1);
		player.addEventValue("圓夢贊助10000領取", 1, 1000);
		player.addEventValue("圓夢贊助10000選擇", -1, 1000);
		//npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "領取了新年斗內額外贊助10000T獎勵");
		npc.say("#fs14##b獲得好多東西~");
	}



} else if (sel == 5) {
	player.gainItem(4310282, 10);
	player.addEventValue("圓夢贊助10000選擇", 1, 1000);
	npc.say("#fs14##b獲得#v4310282#*10");
} else if (sel == 6) {
	player.setSkillLevel(80000545, 1, 1, false);
	player.addEventValue("圓夢贊助10000選擇", 1, 1000);
	player.addEventValue("燃燒技能-2", 1, 3000);
	npc.say("#fs14##b獲得灼熱技能");
} else if (sel == 7) {
	player.setSkillLevel(80000566, 4, 4, false);
	player.addEventValue("圓夢贊助10000選擇", 1, 1000);
	player.addEventValue("爆擊機率", 1, 3000);
	npc.say("#fs14##b獲得挑戰：爆擊機率技能");
} else if (sel == 8) {
	player.setSkillLevel(80000186, 1, 1, false);
	player.setSkillLevel(80000187, 1, 1, false);
	player.addEventValue("reboot技能", 1, 3000);
	player.addEventValue("圓夢贊助10000選擇", 1, 1000);
	npc.say("#fs14##b獲得RB技能");
} else if (sel == 9) {
	player.setSkillLevel(80000582, 5, 5, false);
	player.addEventValue("冒險XX技能", 1, 3000)
	player.addEventValue("圓夢贊助10000選擇", 1, 1000);
	npc.say("#fs14##b獲得冒險屬性技能");
} else if (sel == 10) {
	player.setSkillLevel(80012257, 4, 4, false);
	player.addEventValue("馬戲團技能2", 1, 3000)
	player.addEventValue("圓夢贊助10000選擇", 1, 1000);
	npc.say("#fs14##b獲得慶典設計者技能");
} else if (sel == 11) {
	player.setSkillLevel(80000570, 4, 4, false);
	player.addEventValue("持續技能", 1, 3000)
	player.addEventValue("圓夢贊助10000選擇", 1, 1000);
	npc.say("#fs14##b獲得挑戰：加持持續時間技能");
} else if (sel == 12) {
	player.setSkillLevel(80000567, 4, 4, false);
	player.addEventValue("暴擊傷害", 1, 3000)
	player.addEventValue("圓夢贊助10000選擇", 1, 1000);
	npc.say("#fs14##b獲得挑戰：爆擊傷害技能");
}






