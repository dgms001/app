




var text = "#e#fs18##v2430068##r直播分享禮包獎勵如下:\r\n#n";
text += "#fs13##b";
text += "#v5062009##z5062009#*30\r\n";
text += "#v5062010##z5062010#*30\r\n";
text += "#v4009454##z4009454#*2000\r\n";
text += "#v2472000##z2472000#*10\r\n";
text += "#v4032053##z4032053#*300\r\n";
text += "#e#d#fs16##L0#點我領取#l\r\n";
let sel = npc.askMenu("" + text, true);
if (sel >= 0) {
	if (player.getFreeSlots(2) < 3 || player.getFreeSlots(5) < 5 || player.getFreeSlots(3) < 5) {
		npc.say("#fs18##b#e消耗欄位及其他欄位及特殊欄位不足。");
	} else {
		player.gainItem(5062009, 30),//
			player.gainItem(5062010, 30),//
			player.gainItem(4009454, 2000),//
			player.gainItem(2472000, 10),//
			player.gainItem(4032053, 300),//
			player.loseItem(2430068, 1);
		player.addEventValue("直播分享獎勵", 1, 999);
		npc.broadcastNotice("帳號ID:" + player.getAccountId() + "領取直播分享獎勵");
	}
}


