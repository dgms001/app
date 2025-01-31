/**
 * @type {ScriptEvent}
 */
let event = player.getEvent();
if (event != null && event.getVariable("EventName") == 'boss_giant') {
    if (event.getVariable("Clear_" + map.getId())) {
        player.changeGiantBossMapState("phase3", 2);
        player.changeGiantBossMapState("clear", 2);
    }
}
player.showScreenAutoLetterBox("Map/Effect.img/giantBoss/enter/" + map.getId() / 10 % 100, 0);
