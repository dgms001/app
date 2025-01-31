/**
 *
 *
 */

let debug = true;
let event = reactor.getEvent("guild_quest");
if (event != null) {
    let combo = event.getVariable("combo");
    combo += reactor.getName() + "|";
    event.setVariable("combo", combo);
    if (debug) {
        map.broadcastEventNotice("Debug:Hit Combo:" + combo);
    }

}


