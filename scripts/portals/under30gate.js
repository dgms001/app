/**
 *
 *
 */

let event = portal.getEvent("guild_quest");
if (event != null) {
    portal.playPortalSE();
    player.changeMap(990000640, 3);
} else {
    player.dropAlertNotice("發生錯誤！");
    player.changeMap(990001100, 0);
} 