//勝獎勵
if (player.getFreeSlots(2) < 1 || player.getFreeSlots(5) < 1 || player.getFreeSlots(3) < 2) {
	npc.say("#fs18##b#e消耗欄位及其他欄位及特殊欄位不足。");
} else {
	player.gainItem(2430704, 1),//AP成長箱
		player.gainItem(5060048, 10),//黃金蘋果
		player.gainItem(4032053, 100),//黃金楓葉
		player.gainItem(4021032, 20),//魔力結晶
		player.gainItem(5060028, 2),//潘朵拉
		player.gainItem(5062026, 6),//結合
		player.loseItem(npc.getItemId(), 1);
	npc.broadcastWeatherEffectNotice(1, "【PVP戰場】恭喜玩家 [" + player.getName() + "] 領取了勝者組獎勵", 10000); //35[特效 1-???] 10000[1秒]

}