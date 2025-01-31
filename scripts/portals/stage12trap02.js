/**
 *
 *
 */

var event = portal.getEvent();
if (event != null) {
    if (!"1".equals(event.getVariable("stage12_trap2"))) {
        player.teleportToPortalId(4);
    }
}
portal.abortWarp();