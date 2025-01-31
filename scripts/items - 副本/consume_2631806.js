

if (player.getEventValue("FB分享獎勵") < 1) {

	let mapA = map.getId();
	if (mapA == 993001100) { //限制開啟地圖
		//player.showSystemMessage("在卡BUG頭蓋骨給你打出來 操!!");
	} else {
		text = "\t\t\t\t#e#fs18#FB分享獎勵如下:\r\n\r\n#n";
		text += "#fs13##b";
		text += "#v2631528##z2631528#*1個  #v2434007##z2434007#*1個\r\n";
		text += "#v5060048##z5060048#*30個  #v2472000##z2472000#*20個\r\n";
		text += "#v2633918##z2633918#*30個  #v4032053##z4032053#*500個\r\n";

		text += "\t\t\t  #d#L0#點我領取#l";
	}
	let sel = npc.askMenu("" + text, true);
	if (sel >= 0) {
		if (player.getFreeSlots(2) < 3 || player.getFreeSlots(5) < 5 || player.getFreeSlots(3) < 5) {
			npc.say("#fs18##b#e消耗欄位及其他欄位及特殊欄位不足。");
		} else {
			player.gainItem(2631528, 1),//萌獸方塊
				player.gainItem(2434007, 1),//紅色方塊
				player.gainItem(5060048, 30),//覺醒星火*5
				player.gainItem(2472000, 20),//白金槌子
				player.gainItem(2633918, 30),//黃金蘋果
				player.gainItem(4032053, 500),//黃金楓葉

				player.addEventValue("FB分享獎勵", 1, 1);
			player.loseItem(2631806, 1);
		}
	}
} else {
	npc.say("#fs18##b#e你已經有領過該獎勵了");
}

