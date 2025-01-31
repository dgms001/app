/* global portal, player */

/**
 *
 *
 */

let event = portal.getEvent("party2");
if (event != null) {
    let complete = event.getVariable("4stageclear");
    if (complete != null && complete) {
        portal.playPortalSE();
        player.changeMap(922010800, 0);
    } else {
        portal.block();
    }
}
