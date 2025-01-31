//平獎勵
if (player.getFreeSlots(5) < 1 || player.getFreeSlots(3) < 2) {
	npc.say("#fs18##b#e消其他欄位及特殊欄位不足。");
} else {
	player.gainItem(5060048, 8),//黃金蘋果
		player.gainItem(4032053, 90),//黃金楓葉
		player.gainItem(4021032, 15),//魔力結晶
		player.gainItem(5060028, 2),//潘朵拉
		player.gainItem(5062026, 4),//結合
		player.loseItem(npc.getItemId(), 1);
	npc.broadcastWeatherEffectNotice(2, "【PVP戰場】恭喜玩家 [" + player.getName() + "] 領取了平者組獎勵", 10000); //35[特效 1-???] 10000[1秒]

}