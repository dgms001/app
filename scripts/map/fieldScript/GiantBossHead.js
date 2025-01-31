
const FIELD_RARM = 863010330
const FIELD_LARM = 863010430
const FIELD_HIP = 863010240
const fields = [FIELD_HIP, FIELD_LARM, FIELD_RARM]

/**
 * @type {ScriptEvent}
 */
let event = player.getEvent();
if (event != null && event.getVariable("EventName") == 'boss_giant') {
    let coreNum = 3;
    for (let field of fields) {
        if (event.getVariable("Clear_" + field)) {
            coreNum--
        }
    }
    event.setVariable("CoreNum", coreNum);
    event.startTimer("SpawnHead1", 0)
}
