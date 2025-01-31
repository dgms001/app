/**
 *
 *
 */

let event = portal.getEvent("guild_quest");
if (event != null) {
    portal.playPortalSE();
    player.changeMap(990000600, 1);
} else {
    player.dropAlertNotice("發生錯誤！");
    player.changeMap(990001100, 0);
} 