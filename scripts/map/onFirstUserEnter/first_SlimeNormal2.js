exports = {};
let event = npc.getEvent("boss_slime");
if (event != null && event.getVariable("boss2") == null) {
    event.setVariable("boss2", "Spawn");

    let boss = map.makeMob(8880726);
    map.spawnMob(boss, -25, 316);

}