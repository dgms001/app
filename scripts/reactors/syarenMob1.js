/**
 *
 *
 */

let event = reactor.getEvent("guild_quest");
if (event != null) {
    map.changeBGM("Bgm10/Eregos");
    map.broadcastEventNotice("恐怖的黑暗力量出現了。");

    let boss = map.makeMob(9300028);
    boss.setForcedMobStat(230, 2);//改變等級  基礎倍率
    boss.changeBaseHp(500000000000);
    map.spawnMob(boss, 351, 101);

    let mob = map.makeMob(9300031);
    mob.setForcedMobStat(230, 2);//改變等級  基礎倍率
    mob.changeBaseHp(100000000000);
    map.spawnMob(mob, 130, 90);


    mob = map.makeMob(9300032);
    mob.setForcedMobStat(230, 2);//改變等級  基礎倍率
    mob.changeBaseHp(100000000000);
    map.spawnMob(mob, 540, 90);


    mob = map.makeMob(9300029);
    mob.setForcedMobStat(230, 2);//改變等級  基礎倍率
    mob.changeBaseHp(100000000000);
    map.spawnMob(mob, 130, 90);


    mob = map.makeMob(9300029);
    mob.setForcedMobStat(230, 2);//改變等級  基礎倍率
    mob.changeBaseHp(100000000000);
    map.spawnMob(mob, 540, 90);
}


