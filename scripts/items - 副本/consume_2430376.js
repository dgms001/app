
var text = "";

text += "#e#fs18##r5/1-5/14(1)獎勵如下:\r\n#n";
text += "#fs13##b";
text += "#v4009411##z4009411#*10\r\n";
text += "#v4032053##z4032053#*20000\r\n";

text += "#e#d#fs16##L0#點我領取#l";
let sel = npc.askMenu("" + text, true);
if (sel >= 0) {
	if (player.getFreeSlots(2) < 3 || player.getFreeSlots(5) < 5 || player.getFreeSlots(3) < 5) {
		npc.say("#fs18##b#e消耗欄位及其他欄位及特殊欄位不足。");
	} else {
		if (player.getEventValue("0501補償開通") < 1) {
			player.gainItem(4032053, 20000),//
				player.gainItem(4009411, 10),//
				player.loseItem(2430376, 1),//
				player.addEventValue("0501補償開通", 1, 999);
			npc.broadcastNotice("帳號ID:" + player.getAccountId() + "領取0501-0514補償獎勵!");
		} else {
			npc.broadcastNotice("帳號ID:" + player.getAccountId() + "已領取過0501-0514補償獎勵!");

		}
	}


}