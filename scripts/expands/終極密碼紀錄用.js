txt = "";
txt += "#fs14##b";
txt += "";

txt += "#L1#紀錄終極密碼#l\r\n";
txt += "#L2#廣播終極密碼#l\r\n";

txt += "";

let selection = npc.askMenu(txt, 9062453);
i = selection;
if (i == 1) {
	selection = npc.askNumber("請輸入你要的終極密碼", 1, 1, 5000000);
	a = selection;
	if (player.getEventValue("終極密碼總紀錄") >= 1) {
		npc.say("#fs14##b請去廣播出來,紀錄會跟著廣播清除!");
	} else if (a) {
		player.addEventValue("終極密碼紀錄", a, 1000);
		player.addEventValue("終極密碼總紀錄", 1, 1000);
		npc.broadcastPlayerNotice(50, "玩家" + player.getName() + "紀錄終極密碼了!");
	}
} else if (i == 2) {
	aa = player.getEventValue("終極密碼紀錄");
	if (player.getEventValue("終極密碼總紀錄") >= 1) {
		player.addEventValue("終極密碼總紀錄", -1, 1000);
		player.addEventValue("終極密碼紀錄", -aa, 1000);
		npc.broadcastPlayerNotice(50, "玩家" + player.getName() + "終極密碼為" + aa + "");
	}

}














