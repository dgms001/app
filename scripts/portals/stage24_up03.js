/**
 *
 *
 */

var event = portal.getEvent();
if (event != null) {
    if (!"1".equals(event.getVariable("stage24_up03"))) {
        player.runScript("stage24_guess");
    } else {
        player.teleportToPortalId(4);
    }
}
portal.abortWarp();