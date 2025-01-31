let event = npc.getEvent("boss_slime_chaos");
if (event != null && event.getVariable("boss1") == null) {
    event.setVariable("boss1", "Spawn");

    let boss = map.makeMob(8880700);
    boss.changeBaseHp(10000000000000000);
    map.spawnMob(boss, 4736,321);
    boss.setZoneDataType(1);
    let magma = map.makeMob(8880702);
    //magma.setReduceDamageR(100); //防止意外杀死
    map.spawnMob(magma, 4736,321);
    map.startFieldEvent();
}