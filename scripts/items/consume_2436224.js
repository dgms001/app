//封測獎勵
if (player.getFreeSlots(2) < 3 || player.getFreeSlots(5) < 5 || player.getFreeSlots(3) < 5) {
	npc.say("#fs18##b#e消耗欄位及其他欄位及特殊欄位不足。");
} else {
	player.gainItem(5062010, 30),//萌獸方塊
		player.gainItem(5062017, 30),//紅色方塊
		player.gainItem(5062020, 30),//覺醒星火*5
		player.gainItem(5062500, 30),//白金槌子
		player.gainItem(5060048, 30),//黃金蘋果
		player.gainItem(4032053, 500),//黃金楓葉
		player.gainItem(4009411, 5),
		player.loseItem(npc.getItemId(), 1);
	player.addEventValue("封測玩家-封測獎勵", 1, 1000);

}