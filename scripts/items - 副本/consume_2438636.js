




var text = "#e#fs18##v2438636##r圓夢直播分享禮包獎勵如下:\r\n#n";
text += "#fs13##b";
text += "#v5062010##z5062010#*50個\r\n";
text += "#v5062020##z5062020#*50個\r\n";
text += "#v5062500##z5062500#*50個\r\n";
text += "#v2472000##z2472000#*30個\r\n";
text += "#v5060048##z5060048#*50個\r\n";
text += "#v4032053##z4032053#*1000個\r\n";
text += "#e#d#fs16##L0#點我領取#l";
let sel = npc.askMenu("" + text, true);
if (sel >= 0) {
	if (player.getFreeSlots(2) < 3 || player.getFreeSlots(5) < 5 || player.getFreeSlots(3) < 5) {
		npc.say("#fs18##b#e消耗欄位及其他欄位及特殊欄位不足。");
	} else {
		player.gainItem(5062010, 50),//萌獸方塊
			player.gainItem(5062020, 50),//紅色方塊
			player.gainItem(5062500, 50),//覺醒星火*5
			player.gainItem(2472000, 30),//白金槌子
			player.gainItem(5060048, 50),//黃金蘋果
			player.gainItem(4032053, 1000),//黃金楓葉
			player.loseItem(2438636, 1);

	}
}


