if (player.getJob() == 10112 && player.getPQLog("神之子任務完成") == 0) {
	player.completeQuest(40900, 0);
	player.completeQuest(40901, 0);
	player.completeQuest(40902, 0);
	player.completeQuest(40903, 0);
	player.completeQuest(40904, 0);
	player.completeQuest(40905, 0);
	player.completeQuest(40910, 0);
	player.completeQuest(40911, 0);
	player.completeQuest(40912, 0);
	player.completeQuest(40913, 0);
	player.completeQuest(40914, 0);
	player.completeQuest(40920, 0);
	player.completeQuest(40921, 0);
	player.completeQuest(40922, 0);
	player.completeQuest(40923, 0);
	player.completeQuest(40924, 0);
	player.completeQuest(40930, 0);
	player.completeQuest(40931, 0);
	player.completeQuest(40932, 0);
	player.completeQuest(40933, 0);
	player.completeQuest(40934, 0);
	player.completeQuest(40940, 0);
	player.completeQuest(40941, 0);
	player.completeQuest(40942, 0);
	player.completeQuest(40943, 0);
	player.completeQuest(40944, 0);
	player.completeQuest(40950, 0);
	player.completeQuest(40951, 0);
	player.completeQuest(40952, 0);
	player.completeQuest(40953, 0);
	player.completeQuest(40954, 0);
	player.completeQuest(40960, 0);
	player.completeQuest(40961, 0);
	player.completeQuest(40962, 0);
	player.completeQuest(40963, 0);
	player.completeQuest(40964, 0);
	player.completeQuest(40970, 0);
	player.completeQuest(40971, 0);
	player.completeQuest(40972, 0);
	player.completeQuest(40973, 0);
	player.completeQuest(40974, 0);
	player.completeQuest(40980, 0);
	player.completeQuest(6616, 0);
	player.completeQuest(14110, 0);
	player.completeQuest(14111, 0);
	player.completeQuest(14112, 0);
	player.completeQuest(14113, 0);
	player.completeQuest(14114, 0);
	player.completeQuest(14115, 0);
	player.completeQuest(14116, 0);
	player.completeQuest(14117, 0);
	player.completeQuest(15970, 0);
	player.completeQuest(16519, 0);
	player.completeQuest(32019, 0);
	player.completeQuest(40905, 0);
	player.addPQLog("神之子任務完成", 1, 3000)
	npc.askMenuA("\r\n\r\n\r\n\r\n\t\t\t#fs21##e#b#b你的職業#r[神之子]#b任務全部完成!");

} else if (player.getJob() == 15500 || player.getJob() == 15510 || player.getJob() == 15511 || player.getJob() == 15512) {
	player.setSkillLevel(155101006, 1, 1, false);
	npc.askMenuA("\r\n\r\n\r\n\r\n\t\t\t#fs21##e#b#b你的職業#r[亞克]#b技能補學完成!\r\n\r\n\r\n如有缺失請聯繫GM");

} else if (player.getJob() == 2500 || player.getJob() == 2510 || player.getJob() == 2511 || player.getJob() == 2512) {
	player.completeQuest(38077, 0);
	player.changeMap(103000000);
	npc.askMenuA("當前職業需要點頭上的燈泡跑一下劇情才有超級能進化");

} else if (player.getJob() == 6510 || player.getJob() == 6511 || player.getJob() == 6512 || player.getJob() == 6000) {
	player.setSkillLevel(60001005, 1, 1, false);
	player.setSkillLevel(60011220, 1, 1, false);
	player.setSkillLevel(60010217, 1, 1, false);
	npc.askMenuA("\r\n\r\n\r\n\r\n\t\t\t#fs21##e#b#b你的職業#r[天使破壞者]#b技能補學完成!\r\n\r\n\r\n如有缺失請聯繫GM");

} else if (player.getJob() == 6400 || player.getJob() == 6410 || player.getJob() == 6411 || player.getJob() == 6412) {
	player.setSkillLevel(60021005, 1, 1, false);

	npc.askMenuA("\r\n\r\n\r\n\r\n\t\t\t#fs21##e#b#b你的職業#r[卡蒂娜]#b技能補學完成!\r\n\r\n\r\n如有缺失請聯繫GM");


} else if (player.getJob() == 17500 || player.getJob() == 17510 || player.getJob() == 17511 || player.getJob() == 17512) {
	player.setSkillLevel(170001000, 1, 1, false);
	player.setSkillLevel(170000001, 10, 10, false);
	player.setSkillLevel(170001005, 1, 1, false);
	player.setSkillLevel(175000006, 20, 20, false);
	player.setSkillLevel(175001003, 10, 10, false);
	npc.askMenuA("\r\n\r\n\r\n\r\n\t\t\t#fs21##e#b#b你的職業#r[墨玄]#b技能補學完成!\r\n\r\n\r\n如有缺失請聯繫GM");

} else if (player.getJob() == 2700 || player.getJob() == 2710 || player.getJob() == 2711 || player.getJob() == 2712) {
	player.runScript("夜光技能選擇");

} else if (player.getJob() == 16400 || player.getJob() == 16410 || player.getJob() == 16411 || player.getJob() == 16412) {
	player.setSkillLevel(164001004, 1, 1, false);
	player.setSkillLevel(160001005, 1, 1, false);
	player.setSkillLevel(160000076, 10, 10, false);
	npc.askMenuA("\r\n\r\n\r\n\r\n\t\t\t#fs21##e#b#b你的職業#r[虎影]#b技能補學完成!\r\n\r\n\r\n如有缺失請聯繫GM");

} else if (player.getJob() == 15200 || player.getJob() == 15210 || player.getJob() == 15211 || player.getJob() == 15212) {
	player.setSkillLevel(150001016, 1, 1, false);
	player.setSkillLevel(150000079, 1, 1, false);
	npc.askMenuA("\r\n\r\n\r\n\r\n\t\t\t#fs21##e#b#b你的職業#r[伊利恩]#b技能補學完成!\r\n\r\n\r\n如有缺失請聯繫GM");

} else if (player.getJob() == 4100 || player.getJob() == 4110 || player.getJob() == 4111 || player.getJob() == 4112) {
	player.setSkillLevel(40011291, 5, 5, false);
	player.setSkillLevel(40011292, 5, 5, false);
	npc.askMenuA("\r\n\r\n\r\n\r\n\t\t\t#fs21##e#b#b你的職業#r[劍豪]#b技能補學完成!\r\n\r\n\r\n如有缺失請聯繫GM");

} else if (player.getJob() == 3700 || player.getJob() == 3710 || player.getJob() == 3711 || player.getJob() == 3712) {
	player.setSkillLevel(37000010, 1, 1, false);
	npc.askMenuA("\r\n\r\n\r\n\r\n\t\t\t#fs21##e#b#b你的職業#r[爆拳槍神]#b技能補學完成!\r\n\r\n\r\n如有缺失請聯繫GM");

} else if (player.getJob() == 1100 || player.getJob() == 1110 || player.getJob() == 1111 || player.getJob() == 1112) {
	player.setSkillLevel(10001245, 1, 1, false);
	player.setSkillLevel(10000202, 6, 6, false);
	player.setSkillLevel(11121000, 30, 30, false);
	npc.askMenuA("\r\n\r\n\r\n\r\n\t\t\t#fs21##e#b#b你的職業#r[聖魂劍士]#b技能補學完成!\r\n\r\n\r\n如有缺失請聯繫GM");

} else if (player.getJob() == 1200 || player.getJob() == 1210 || player.getJob() == 1211 || player.getJob() == 1212) {
	player.setSkillLevel(10001245, 1, 1, false);
	player.setSkillLevel(10000202, 6, 6, false);
	player.setSkillLevel(12121000, 30, 30, false);
	npc.askMenuA("\r\n\r\n\r\n\r\n\t\t\t#fs21##e#b#b你的職業#r[烈焰巫師]#b技能補學完成!\r\n\r\n\r\n如有缺失請聯繫GM");

} else if (player.getJob() == 1300 || player.getJob() == 1310 || player.getJob() == 1311 || player.getJob() == 1312) {
	player.setSkillLevel(10001245, 1, 0, false);
	player.setSkillLevel(10000202, 6, 6, false);
	player.setSkillLevel(13121000, 30, 30, false);
	npc.askMenuA("\r\n\r\n\r\n\r\n\t\t\t#fs21##e#b#b你的職業#r[破風使者]#b技能補學完成!\r\n\r\n\r\n如有缺失請聯繫GM");

} else if (player.getJob() == 1400 || player.getJob() == 1410 || player.getJob() == 1411 || player.getJob() == 1412) {
	player.setSkillLevel(10001245, 1, 1, false);
	player.setSkillLevel(10000202, 6, 6, false);
	player.setSkillLevel(14121000, 30, 30, false);
	npc.askMenuA("\r\n\r\n\r\n\r\n\t\t\t#fs21##e#b#b你的職業#r[暗夜行者]#b技能補學完成!\r\n\r\n\r\n如有缺失請聯繫GM");

} else if (player.getJob() == 1500 || player.getJob() == 1510 || player.getJob() == 1511 || player.getJob() == 1512) {
	player.setSkillLevel(10001245, 1, 1, false);
	player.setSkillLevel(10000202, 6, 6, false);
	player.setSkillLevel(15121000, 30, 30, false);
	npc.askMenuA("\r\n\r\n\r\n\r\n\t\t\t#fs21##e#b#b你的職業#r[閃雷悍將]#b技能補學完成!\r\n\r\n\r\n如有缺失請聯繫GM");

} else if (player.getJob() == 15100 || player.getJob() == 15110 || player.getJob() == 15111 || player.getJob() == 15112) {
	player.setSkillLevel(150020079, 1, 1, false);
	player.setSkillLevel(151000005, 20, 20, false);
	player.setSkillLevel(151001004, 20, 20, false);
	player.setSkillLevel(150021000, 20, 20, false);
	player.setSkillLevel(150021005, 20, 20, false);
	player.setSkillLevel(150020006, 20, 20, false);
	npc.askMenuA("\r\n\r\n\r\n\r\n\t\t\t#fs21##e#b#b你的職業#r[阿戴爾]#b技能補學完成!\r\n\r\n\r\n如有缺失請聯繫GM");

} else if (player.getJob() == 5100 || player.getJob() == 5110 || player.getJob() == 5111 || player.getJob() == 5112) {
	player.setSkillLevel(50001245, 1, 1, false);
	player.setSkillLevel(51121005, 30, 30, false);
	npc.askMenuA("\r\n\r\n\r\n\r\n\t\t\t#fs21##e#b#b你的職業#r[米哈逸]#b技能補學完成!\r\n\r\n\r\n如有缺失請聯繫GM");

} else if (player.getJob() == 6100 || player.getJob() == 6110 || player.getJob() == 6111 || player.getJob() == 6112) {
	player.setSkillLevel(60001005, 1, 1, false);
	npc.askMenuA("\r\n\r\n\r\n\r\n\t\t\t#fs21##e#b#b你的職業#r[凱薩]#b技能補學完成!\r\n\r\n\r\n如有缺失請聯繫GM");

} else if (player.getJob() == 16200 || player.getJob() == 16210 || player.getJob() == 16211 || player.getJob() == 16212) {
	player.setSkillLevel(160011075, 1, 1, false);
	player.setSkillLevel(160010000, 1, 1, false);
	player.setSkillLevel(160011074, 1, 1, false);
	player.setSkillLevel(160010001, 2, 2, false);
	npc.askMenuA("\r\n\r\n\r\n\r\n\t\t\t#fs21##e#b#b你的職業#r[菈菈]#b技能補學完成!\r\n\r\n\r\n如有缺失請聯繫GM");

} else if (player.getJob() == 10112 && player.getPQLog("神之子任務完成") == 1) {
	SkillLV = (player.getLevel() - 200) / 13;
	if (SkillLV >= 5) {
		SkillLV = 5;
	}
	player.setSkillLevel(100000279, SkillLV | 0, 5, false);
	npc.askMenuA("\r\n\r\n\r\n\r\n\t\t\t#fs21##e#b#b你的職業#r[神之子]#b技能補學完成!\r\n\r\n\r\n如有缺失請聯繫GM\r\n#r時之意志#k需要200等後每13等補學一次+,直到技能滿等");
} else {
	npc.askMenuA("當前職業無需補學,如有技能缺失請聯繫GM");
}	