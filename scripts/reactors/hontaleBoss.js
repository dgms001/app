/**
 *
 *
 */

let event = reactor.getEvent("boss_hontale");
if (event != null && event.getVariable("HonTale") == null) {
    event.setVariable("HonTale", true);
    map.changeBGM("Bgm14/HonTale");
    map.broadcastEventNotice("一聲巨響，黑龍閃亮登場。");
    map.spawnMob(8810026, 71, 260);

}

