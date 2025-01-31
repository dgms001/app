//4是其他欄 3是裝飾欄


var text = "";


if (player.getEventValue("圓夢贊助5000選擇") < 1) {
	text += "#e#r#fs18#圓夢新年5000斗內禮包獎勵如下:\r\n\r\n#n";
	text += "#fs15##b";
	text += "#r注意:#b[下方十二擇一/選後不能反悔/不予更換]\r\n#b";
	text += "#fs14##b";



	text += "#L13#[修改潛能]#v4310282##z4310282#*5#r[領取]#l\r\n#b";
	text += "#L5#[全屬性200]#v1122267##z1122267#*1#r[領取]#l\r\n#b";
	text += "#L6#[全屬性200]#v1132246##z1132246#*1#r[領取]#l\r\n#b";
	text += "#L7#[全屬性200]#v1032223##z1032223#*1#r[領取]#l#b\r\n";
	text += "#L8#[全屬性200]#v1113075##z1113075#*1#r[領取]#l#b\r\n";
	text += "#L9#[詳情查看DC]#s80000624##q80000624##r[領取]#l#b\r\n";
	text += "#L10#[詳情查看DC]#s80000253##q80000253##r[領取]#l#b\r\n";
	text += "#L11#[詳情查看DC]#s80010177##q80010177##r[領取]#l#b\r\n";
	text += "#L12#[詳情查看DC]#s80000616##q80000616##r[領取]#l#b\r\n";
	text += "#L15#[詳情查看DC]#s80000565##q80000565##r[領取]#l#b\r\n";
	text += "#L16#[詳情查看DC]#s80000568##q80000568##r[領取]#l#b\r\n";
	text += "#L14#[詳情查看DC]#s80000661##q80000661##r[領取]#l\r\n\r\n";
	text += "#r注意:#b領取完畢後,在打開一次箱子!\r\n";
} else {
	text += "#e#r#fs18#圓夢新年5000斗內禮包獎勵如下:\r\n#n";
	text += "#fs14##b";
	text += "#v4310282##z4310282#*2\r\n";//NA
	text += "#v4310237##z4310237#*1\r\n";//Nv
	text += "#v2437814##z2437814#*30\r\n";//命運
	text += "#v4310260##z4310260#*300\r\n";//創世結晶
	text += "#v5064400##z5064400#*30\r\n";//恢復
	text += "#v2633336##z2633336#*10\r\n";//AUT
	text += "#v2630512##z2630512#*10\r\n";//ARC
	text += "#v5062026##z5062026#*100\r\n";//結合
	text += "#v4032053##z4032053#*3000\r\n";//楓葉
	text += "#v4001715##z4001715#*5\r\n";//金幣
	text += "#v2644008##z2644008#*5\r\n";//追加
	text += "#v2023743##z2023743#*20\r\n";//領路
	text += "#v2023744##z2023744#*20\r\n";//領路
	text += "#v4009454##z4009454#*20000\r\n\r\n";
	text += "#fs16##r";
	text += "#L1#點我領取#l";
}

text += "\r\n";



let sel = npc.askMenuS("" + text, true);

if (sel == 1) {
	if (player.getFreeSlots(2) < 10 || player.getFreeSlots(3) < 10 || player.getFreeSlots(4) < 10 || player.getFreeSlots(5) < 10) {
		npc.say("#fs14##b請先確保欄位都空10格以上!");
	} else {
		player.gainItem(4310282, 2);
		player.gainItem(4310237, 1);
		player.gainItem(2437814, 30);
		player.gainItem(4310260, 300);
		player.gainItem(5064400, 30);
		player.gainItem(2633336, 10);
		player.gainItem(2630512, 10);
		player.gainItem(5062026, 100);
		player.gainItem(4032053, 3000);
		player.gainItem(4001715, 5);
		player.gainItem(2644008, 5);
		player.gainItem(2023743, 20);
		player.gainItem(2023744, 20);
		player.gainItem(4009454, 20000);
		player.loseItem(2632757, 1);
		player.addEventValue("圓夢贊助5000領取", 1, 1000);
		player.addEventValue("圓夢贊助5000選擇", -1, 1000);
		//npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "領取了新年斗內額外贊助5000T獎勵");
		npc.say("#fs14##b獲得好多東西~");
	}



} else if (sel == 5) {
	var toDrop = player.makeItemWithId(1122267);
	toDrop.setStr(200); //裝備力量
	toDrop.setDex(200); //裝備敏捷
	toDrop.setInt(200); //裝備智力
	toDrop.setLuk(200); //裝備運氣
	toDrop.setPad(200); //物理攻擊
	toDrop.setMad(200); //魔法攻擊 
	toDrop.setBossDamageR(10);
	toDrop.setIgnorePDR(10);
	toDrop.setDamR(10);
	player.gainItem(toDrop)
	player.addEventValue("圓夢贊助5000選擇", 1, 1000);
	npc.say("#fs14##b獲得改屬頂級培羅德烙印墜飾");
} else if (sel == 6) {
	var toDrop = player.makeItemWithId(1132246);
	toDrop.setStr(200); //裝備力量
	toDrop.setDex(200); //裝備敏捷
	toDrop.setInt(200); //裝備智力
	toDrop.setLuk(200); //裝備運氣
	toDrop.setPad(200); //物理攻擊
	toDrop.setMad(200); //魔法攻擊 
	toDrop.setBossDamageR(10);
	toDrop.setIgnorePDR(10);
	toDrop.setDamR(10);
	player.gainItem(toDrop)
	player.addEventValue("圓夢贊助5000選擇", 1, 1000);
	npc.say("#fs14##b獲得改屬頂級培羅德烙印腰帶");
} else if (sel == 7) {
	var toDrop = player.makeItemWithId(1032223);
	toDrop.setStr(200); //裝備力量
	toDrop.setDex(200); //裝備敏捷
	toDrop.setInt(200); //裝備智力
	toDrop.setLuk(200); //裝備運氣
	toDrop.setPad(200); //物理攻擊
	toDrop.setMad(200); //魔法攻擊 
	toDrop.setBossDamageR(10);
	toDrop.setIgnorePDR(10);
	toDrop.setDamR(10);
	player.gainItem(toDrop)
	player.addEventValue("圓夢贊助5000選擇", 1, 1000);
	npc.say("#fs14##b獲得改屬頂級培羅德耳環");
} else if (sel == 8) {
	var toDrop = player.makeItemWithId(1113075);
	toDrop.setStr(200); //裝備力量
	toDrop.setDex(200); //裝備敏捷
	toDrop.setInt(200); //裝備智力
	toDrop.setLuk(200); //裝備運氣
	toDrop.setPad(200); //物理攻擊
	toDrop.setMad(200); //魔法攻擊 
	toDrop.setBossDamageR(10);
	toDrop.setIgnorePDR(10);
	toDrop.setDamR(10);
	player.gainItem(toDrop)
	player.addEventValue("圓夢贊助5000選擇", 1, 1000);
	npc.say("#fs14##b獲得改屬頂級培羅德戒指");
} else if (sel == 9) {
	player.setSkillLevel(80000624, 1, 1, false);
	player.addEventValue("圓夢贊助5000選擇", 1, 1000);
	npc.say("#fs14##b獲得灼熱技能");
} else if (sel == 10) {
	player.setSkillLevel(80000253, 3, 3, false);
	player.addEventValue("圓夢贊助5000選擇", 1, 1000);
	player.addEventValue("OB力量", 1, 3000)
	npc.say("#fs14##b獲得歐庫力量技能");
} else if (sel == 11) {
	player.setSkillLevel(80010177, 4, 4, false);
	player.addEventValue("圓夢贊助5000選擇", 1, 1000);
	player.addEventValue("馬戲團技能1", 1, 300)
	npc.say("#fs14##b獲得慶典設計者技能");
} else if (sel == 13) {
	player.gainItem(4310282, 5);
	player.addEventValue("圓夢贊助5000選擇", 1, 1000);
	npc.say("#fs14##b獲得#v4310282#*5");
} else if (sel == 12) {
	player.setSkillLevel(80000616, 1, 1, false);
	player.addEventValue("圓夢贊助5000選擇", 1, 1000);
	player.addEventValue("小隊力量", 1, 3000)
	npc.say("#fs14##b獲得小隊力量技能");
} else if (sel == 14) {
	player.setSkillLevel(80000661, 1, 1, false);
	player.addEventValue("NOE力量轉移", 1, 3000)
	player.addEventValue("圓夢贊助5000選擇", 1, 1000);
	npc.say("#fs14##b獲得NEO力量8階技能");
} else if (sel == 15) {
	player.setSkillLevel(80000565, 2, 2, false);
	player.addEventValue("攻擊力", 1, 3000)
	player.addEventValue("圓夢贊助5000選擇", 1, 1000);
	npc.say("#fs14##b獲得挑戰：攻擊力/魔力技能");
} else if (sel == 16) {
	player.setSkillLevel(80000568, 4, 4, false);
	player.addEventValue("無視傷害", 1, 3000)
	player.addEventValue("圓夢贊助5000選擇", 1, 1000);
	npc.say("#fs14##b獲得挑戰：Boss怪物傷害技能");
}






