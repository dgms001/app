exports = {};
let event = player.getEvent();
if (event != null && event.getVariable("boss1") && event.getVariable("boss2") == null) {
    event.setVariable("boss2", false);

    let boss = map.makeMob(8880607);
    boss.changeBaseHp(400000000000000);
    map.spawnMob(boss, 0, 304);

    let bossDummy = map.makeMob(8880608);
    bossDummy.changeBaseHp(400000000000000);
    map.spawnMob(bossDummy, 0, 304);

    let trueDummy = map.makeMob(8880602);
    trueDummy.setDummyBossGroups(boss);
    trueDummy.changeBaseHp(400000000000000);
    map.spawnMob(trueDummy, 0, 304);
    map.startFieldEvent()
}