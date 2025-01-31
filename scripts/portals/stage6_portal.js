/* global portal, player */

/**
 *
 *
 */

let event = portal.getEvent("party2");
if (event != null) {
    let aRate = parseInt(3 / 6 * 100);
    event.setVariable("achieverate", aRate);
    portal.playPortalSE();
    party.changeMap(922010700, 0);
} else {
    portal.block();
}
