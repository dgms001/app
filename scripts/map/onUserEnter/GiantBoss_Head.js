/**
 * @type {ScriptEvent}
 */
let event = player.getEvent();
if (event != null && event.getVariable("EventName") == 'boss_giant') {
    if (event.getVariable("Killed_Head_P2") != null) {
        const p3Start = event.getVariable("P3_Start")
        const p3Duration = event.getVariable("P3_Duration")
        player.showGiantBossPhase3Clock(p3Duration, p3Start + p3Duration - Date.now());
        player.changeGiantBossMapState("phase2-1", 2);
        player.changeGiantBossMapState("phase2-2", 2);
        player.changeGiantBossMapState("phase3", 2);
    } else if (event.getVariable("Killed_Head_P1") != null) {
        player.changeGiantBossMapState("phase2-1", 2);
        player.changeGiantBossMapState("phase2-2", 2);
    }
}
player.showScreenAutoLetterBox("Map/Effect.img/giantBoss/enter/" + map.getId() / 10 % 100, 0);
