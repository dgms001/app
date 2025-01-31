exports = {};
if (npc.getEvent("boss_kalos") != null) {
    event = npc.getEvent("boss_kalos");
    mobhp = 800000000000000;

} else {
    event = npc.getEvent("boss_kalos_hard");
    mobhp = 6400000000000000;
}
let event = player.getEvent();
if (event != null && event.getVariable("EventName") == "boss_kalos_chaos" && event.getVariable("boss1") == "Clear" && event.getVariable("boss3") == null) {
    event.setVariable("boss2", "Spawn");

    let boss = map.makeMob(8880803);
    boss.changeBaseHp(mobhp);
    map.spawnMob(boss, 0, 399);

    let bossDummy = map.makeMob(8880807);
    bossDummy.changeBaseHp(mobhp);
    map.spawnMob(bossDummy, 0, 399);

    let trueDummy = map.makeMob(8880802);
    trueDummy.setDummyBossGroups(boss);
    trueDummy.changeBaseHp(mobhp);
    map.spawnMob(trueDummy, 0, 399);

    map.startFieldEvent()
}