

let mapA = map.getId();
if (mapA == 993001100) { //限制開啟地圖
	//player.showSystemMessage("在卡BUG頭蓋骨給你打出來 操!!");
} else {
	text = "\t\t\t\t#e#fs18#FB推文獎勵如下:\r\n\r\n#n";
	text += "#fs13##b";
	text += "#v2633918##z2633918#*10  #v4310122##z4310122#*5\r\n";

	text += "#v5062009##z5062009#*10  #v2472000##z2472000#*10\r\n";

	text += "#v5060048##z5060048#*10  #v5062500##z5062500#*10\r\n";
	if (player.getEventValue("第一次推文") == 0) {
		text += "第一次推文額外獲得:#v2630127#*3\r\n\r\n";
	}




	text += "\t\t  #d#L0#點我領取/推文總次數+1次#l";
}
let sel = npc.askMenu("" + text, true);
if (sel >= 0) {
	if (player.getEventValue("當天推文") > 50) {
		npc.broadcastNotice("帳號ID:" + player.getAccountId() + " 玩家" + player.getName() + "今天打算領第50推!?");
	} else if (player.getFreeSlots(2) < 3 || player.getFreeSlots(5) < 5 || player.getFreeSlots(3) < 5) {
		npc.say("#fs18##b#e消耗欄位及其他欄位及特殊欄位不足。");
	} else {
		if (player.getEventValue("第一次推文") == 0) {
			player.gainItem(2630127, 3);
			player.addEventValue("第一次推文", 1, 3000);
		}
		player.gainItem(2633918, 10);//歐皇
		player.gainItem(4310122, 5);//推文
		player.gainItem(5062020, 10);
		player.gainItem(2472000, 10);//白錘
		player.gainItem(5680503, 10);//蘋果
		player.gainItem(5062017, 10);//綠色
		player.loseItem(2430696, 1);
		npc.broadcastNotice("玩家: " + player.getName() + " 開啟臉書推文箱子");
		player.addEventValue("推文總次數", 1, 1000);
		player.addEventValue("當天推文", 1, 1);

	}
}


