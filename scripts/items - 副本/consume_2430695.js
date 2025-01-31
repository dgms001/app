

let mapA = map.getId();
if (mapA == 993001100) { //限制開啟地圖
	//player.showSystemMessage("在卡BUG頭蓋骨給你打出來 操!!");
} else {
	text = "\t\t\t\t#e#fs18#168推文獎勵如下:\r\n\r\n\r\n#n";
	text += "#fs13##b";
	text += "#v2633918##z2633918#*10  #v4310122##z4310122#*5\r\n";

	text += "#v5062009##z5062009#*10  #v2472000##z2472000#*10\r\n";

	text += "#v5060048##z5060048#*10  #v5062500##z5062500#*10\r\n\r\n";
	text += "";
	text += "";
	text += "\t\t\t  #d#L0#點我領取#l";
}
let sel = npc.askMenu("" + text, true);
if (sel >= 0) {
	if (player.getFreeSlots(2) < 3 || player.getFreeSlots(5) < 5 || player.getFreeSlots(3) < 5) {
		npc.say("#fs18##b#e消耗欄位及其他欄位及特殊欄位不足。");
	} else {
		player.gainItem(2633918, 10),//歐皇
			player.gainItem(4310122, 5),//推文
			player.gainItem(5062009, 10),
			player.gainItem(2472000, 10),//白錘
			player.gainItem(5680503, 10),//蘋果
			player.gainItem(5062500, 10),//綠色
			player.loseItem(2430695, 1);
		npc.broadcastNotice("帳號ID: " + player.getName() + " 開啟168論壇推文箱子");
		player.addEventValue("168推文次數", 1, 1000);

	}
}


