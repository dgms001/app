exports = {};
let event = npc.getEvent("boss_slime_chaos");
if (event != null && event.getVariable("boss2") == null) {
    event.setVariable("boss2", "Spawn");
    let boss = map.makeMob(8880725);
    map.spawnMob(boss, -25, 316);
}