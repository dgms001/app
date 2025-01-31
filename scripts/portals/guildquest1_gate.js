/**
 *
 *
 */

let event = portal.getEvent("guild_quest");
if (event != null) {
    let open = event.getVariable("open");
    if (open) {
        portal.playPortalSE();
        player.changeMap(990000100, 0);
    } else {
        portal.abortWarp();
        player.showSystemMessage("傳送口是關閉的。");
    }
} else {
    player.dropAlertNotice("發生錯誤！");
    player.changeMap(102040200, 0);
}