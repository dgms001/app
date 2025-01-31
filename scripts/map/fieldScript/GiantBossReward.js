/**
 * @type {ScriptEvent}
 */
let event = player.getEvent();
if (event != null && event.getVariable("EventName") == 'boss_giant') {
    let coreNum = event.getVariable("CoreNum")
    if (coreNum < 0 || coreNum > 3) {
        throw new Error("Invalid Core num")
    }
    let mobId = 9601459 + coreNum
    map.spawnMob(mobId, 95, 74)
    player.scriptProgressMessage("擊退難度：" + (coreNum + 1));
}
