makeMob();
player.useItemEffect(2023745);//+傷害25% +EXP 220%
player.useItemEffect(2023825);//BOSS+100%
player.useItemEffect(2023830);//全能力100
player.useItemEffect(2023828);//EXP20%

function mobDied(mob) {

	mob.dropItem(4032053);
	mob.dropItem(4032053);
	mob.dropItem(4032053);
	mob.dropItem(4032053);
	mob.dropItem(4032053);
	mob.dropItem(4032053);
	mob.dropItem(4032053);
	mob.dropItem(4032053);
	var DROPS = Math.floor(Math.random() * 10000);//道具掉落
	var DROPS0 = Math.floor(Math.random() * 10000);
	if (DROPS <= 5000) {
	}
}


function makeMob() {
	let position = player.getPosition();
	let mob = map.makeMob(9601297);
	//mob.setForcedMobStat(275);
	map.spawnMob(mob, position.getX(), position.getY());
	mob.changeBaseHp(9000000000000);
	player.loseItem(2434325, 1);
	/*var mobs = mobList[level];
	for (var i = 0; i < mobs.length; i++) {
		var mob = map1.makeMob(mobs[i][0]);
		//mob.setForcedMobStat(10,1);
		mob.changeBaseHp(mobs[i][1]*(level*0.2+1));
		map1.spawnMob(mob, X+mobs[i][2], Y+mobs[i][3]);
		
	}*/

}