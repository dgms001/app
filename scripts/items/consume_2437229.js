if (map.getId() == 209000001 || map.getId() == 209000002) {
	let position = player.getPosition();
	let mob = map.makeMob(9400709);
	//mob.setForcedMobStat(275,10);
	map.spawnMob(mob, position.getX(), position.getY());
	mob.changeBaseHp(324000 * 2);
	player.loseItem(2437229, 1);
} else {
	npc.sayS("你不在指定地圖上");
}