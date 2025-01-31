/*
 * Boss: Seren - Normal
 * Reward mob summon
 */

let event = player.getEvent();
if (event != null && event.getVariable("boss2") && event.getVariable("boss3") == null) {
    event.setVariable("boss3", false);
    let boss = map.makeMob(8880644);
    map.spawnMob(boss, 0, 274);
}