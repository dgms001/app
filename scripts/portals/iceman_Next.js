/**
 *
 *
 */

let event = portal.getEvent("iceman");
if (event != null) {
    if (player.getId() == party.getLeader()) {
        let stage = parseInt(map.getId() % 1000 / 100);
        if (event.getVariable("stage" + stage) != null && event.getVariable("stage" + stage)) {
            let members = event.getVariable("members");
            for (let i = 0; i < members.length; i++) {
                portal.playPortalSE();
                members[i].changeMap(map.getId() + 100);
            }
        } else {
            portal.abortWarp();
        }
    } else {
        player.showSystemMessage("請等待組隊長！");
        portal.abortWarp();
    }
} else {
    player.dropAlertNotice("發生錯誤！");
    portal.abortWarp();
} 