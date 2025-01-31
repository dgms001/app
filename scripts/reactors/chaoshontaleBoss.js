/**
 *
 *
 */

let event = reactor.getEvent("boss_hontale_chaos");
if (event != null && event.getVariable("HonTale") == null) {
    event.setVariable("HonTale", true);
    map.changeBGM("Bgm14/HonTale");
    map.broadcastEventNotice("進階暗黑龍王出現了,大家注意躲避。");
    map.spawnMob(8810130, 71, 260);

}

