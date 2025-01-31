/**
 * @type {ScriptEvent}
 */
let event = player.getEvent();
if (event != null && event.getVariable("EventName") == 'boss_giant') {
    if (map.getId() == 863010410 || map.getId() == 863010310) {
        if (event.getVariable("Clear_" + map.getId()) != null) {
            player.changeGiantBossMapState("open", 2);
            player.changeGiantBossMapState("clear", 2);
        }
    }
}
player.showScreenAutoLetterBox("Map/Effect.img/giantBoss/enter/" + map.getId() / 10 % 100, 0);
