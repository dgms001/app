/* global portal, player */

/**
 *
 *
 */

let event = portal.getEvent("party2");
if (event != null) {
    let pt = event.getVariable(portal.getName());
    let ptStage = parseInt(portal.getName().substring(2, 3));
    let ptIdx = parseInt(portal.getName().substring(2, 4));
    if ("1".equals(pt)) {
        player.teleportToPortalId(ptStage + 2);
        map.portalEffect("an" + portal.getName().substring(2, 4));
    } else {
        player.showSystemMessage("不正確的組合!");
        player.teleportToPortalId(13);
    }
}
portal.abortWarp();