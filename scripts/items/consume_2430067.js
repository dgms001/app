




var text = "#e#fs18##v2430067##r後續直播禮包獎勵如下:\r\n#n";
text += "#fs13##b";
text += "#v4009411##z4009411#*3\r\n";
text += "#v4032053##z4032053#*1000\r\n";
text += "#v5062500##z5062500#*30\r\n";
text += "#v5064400##z5064400#*5\r\n";
text += "#v4009411##z4009411#*5\r\n\r\n";
text += "#e#d#fs16##L0#點我領取#l";
let sel = npc.askMenu("" + text, true);
if (sel >= 0) {
	if (player.getFreeSlots(2) < 3 || player.getFreeSlots(5) < 5 || player.getFreeSlots(3) < 5) {
		npc.say("#fs18##b#e消耗欄位及其他欄位及特殊欄位不足。");
	} else {
		player.gainItem(4009411, 3),//
			player.gainItem(4032053, 1000),//
			player.gainItem(5062500, 30),//
			player.gainItem(5064400, 5),//
			player.gainItem(4009411, 5),//
			player.loseItem(2430067, 1);

	}
}


