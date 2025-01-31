/* global portal, player */

/**
 *
 *
 */

let event = portal.getEvent("party2");
if (event != null) {
    let complete = event.getVariable("1stageclear");
    if (complete != null && complete) {
        portal.playPortalSE();
        player.changeMap(922010400, 0);
    } else {
        portal.block();
    }
}
