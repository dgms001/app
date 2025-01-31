exports = {};
if (npc.getEvent("boss_kalos") != null) {
    event = npc.getEvent("boss_kalos");
    mobhp = 500000000000000;

} else {
    event = npc.getEvent("boss_kalos_hard");
    mobhp = 4000000000000000;
}
let event = player.getEvent();
if (event != null && event.getVariable("EventName") == "boss_kalos_chaos" && event.getVariable("boss3") == null) {
    event.setVariable("boss1", "Spawn");

    let boss = map.makeMob(8880800);
    boss.changeBaseHp(mobhp);
    map.spawnMob(boss, 0, 398);

    let bossDummy = map.makeMob(8880801);
    bossDummy.changeBaseHp(mobhp);
    map.spawnMob(bossDummy, 0, 398);

    map.startFieldEvent()
}