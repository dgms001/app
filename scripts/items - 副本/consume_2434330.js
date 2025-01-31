let position = player.getPosition();
let mob = map.makeMob(9305655);
//mob.setForcedMobStat(100);
map.spawnMob(mob, position.getX(), position.getY());
mob.changeBaseHp(900000000000000);
player.loseItem(2434330, 1);