/**
 *
 *
 */

let event = portal.getEvent("guild_quest");
if (event != null) {
    let clear = event.getVariable("state_s2");
    if ("clear".equals(clear)) {
        portal.playPortalSE();
        player.changeMap(990000500, 0);
    } else {
        portal.abortWarp();
        player.showSystemMessage("神祕的力量阻止著你的前進。");
    }
} else {
    player.dropAlertNotice("發生錯誤！");
    player.changeMap(102040200, 0);
} 