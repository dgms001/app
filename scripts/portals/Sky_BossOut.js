/**
 *
 *
 */

let event = portal.getEvent("party_dragon_rider");
if (event != null) {
    let clear = event.getVariable("5stageclear");
    if (clear != null && clear) {
        player.runScript("skyquest");
    } else {
        player.scriptProgressMessage("請消滅御龍魔！");
    }
}
portal.abortWarp();

