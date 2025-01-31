const data = [
    _d(863010100, 6, 863010300, 2),
    _d(863010100, 7, 863010400, 2),
    _d(863010100, 8, 863010200, 1),
    _d(863010100, 9, 863010220, 1),

    _d(863010300, 1, 863010310, 1, true),
    _d(863010300, 2, 863010100, 6),

    _d(863010310, 1, 863010300, 1),
    _d(863010310, 2, 863010320, 2, true),

    _d(863010420, 1, 863010410, 2),
    _d(863010420, 2, 863010500, 5, true),
    _d(863010420, 3, 863010430, 1, true),

    _d(863010430, 1, 863010420, 3),
    _d(863010430, 3, 863010500, 6),

    _d(863010330, 1, 863010320, 3),
    _d(863010330, 3, 863010500, 4),

    _d(863010500, 1, 863010320, 1),
    _d(863010500, 2, 863010240, 3),
    _d(863010500, 3, 863010600, 0),
    _d(863010500, 4, 863010330, 2),
    _d(863010500, 5, 863010420, 2),
    _d(863010500, 6, 863010430, 3),

    _d(863010240, 1, 863010210, 2),
    _d(863010240, 2, 863010230, 2),
    _d(863010240, 3, 863010500, 2, true),

    _d(863010210, 1, 863010200, 2),
    _d(863010210, 2, 863010240, 2, true),

    _d(863010200, 1, 863010100, 8),
    _d(863010200, 2, 863010210, 1, true),

    _d(863010200, 1, 863010100, 8),
    _d(863010200, 2, 863010210, 1, true),

    _d(863010400, 1, 863010410, 1, true),
    _d(863010400, 2, 863010100, 7),

    _d(863010410, 1, 863010400, 1),
    _d(863010410, 2, 863010420, 1, true),

    _d(863010320, 1, 863010500, 1, true),
    _d(863010320, 2, 863010310, 2),
    _d(863010320, 3, 863010330, 1, true),

    _d(863010230, 1, 863010220, 2),
    _d(863010230, 2, 863010240, 1, true),

    _d(863010220, 1, 863010100, 9),
    _d(863010220, 2, 863010230, 1, true),

    _d(863010600, 2, 863010500, 3),
]
let event = player.getEvent()
if (event != null && event.getVariable("EventName") == 'boss_giant') {
    let sourceMapId = map.getId();
    let sourcePortalId = portal.getId();
    let targetMapId = -1, targetPortalId = 0;
    for (let d of data) {
        if (d.sourceMapId == sourceMapId && d.sourcePortalId == sourcePortalId) {
            if (!d.checkKill || event.getVariable("Clear_" + sourceMapId)) {
                targetMapId = d.targetMapId
                targetPortalId = d.targetPortalId
            }
            break
        }
    }
    if (player.isGm()) {
        player.dropMessage(7, `[GiantBossPortal] Source: ${sourceMapId}_${sourcePortalId} Target: ${targetMapId}_${targetPortalId}`);
    }
    if (targetMapId > 0) {
        player.changeMap(targetMapId, targetPortalId);//OK
    } else {
        portal.abortWarp();
        player.scriptProgressMessage("傳送口未啟用. 請先消滅所有怪物.");
    }
}

function _d(sourceMapId, sourcePortalId, targetMapId, targetPortalId, checkKill) {
    return {
        sourceMapId: sourceMapId,
        sourcePortalId: sourcePortalId,
        targetMapId: targetMapId,
        targetPortalId: targetPortalId,
        checkKill: checkKill,
    }
}
