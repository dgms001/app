exports = {};
if (npc.getEvent("boss_kalos") != null) {
    event = npc.getEvent("boss_kalos");

} else {
    event = npc.getEvent("boss_kalos_hard");
}
let event = player.getEvent();
if (event != null && event.getVariable("EventName") == "boss_kalos_chaos" && event.getVariable("boss2") == "Clear" && event.getVariable("boss3") == null) {
    event.setVariable("boss3", "Spawn");
    map.spawnMob(8880808, -116, 399);
}