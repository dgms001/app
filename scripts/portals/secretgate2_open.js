/**
 *
 *
 */

let event = portal.getEvent("guild_quest");
if (event != null) {
    let stat = map.getReactorStateId("secretgate2");
    if (stat > 0) {
        portal.playPortalSE();
        player.changeMap(990000631, 1);
    } else {
        player.showSystemMessage("這個門是關閉的。");
        portal.abortWarp();
    }
} else {
    player.dropAlertNotice("發生錯誤！");
    player.changeMap(990001100, 0);
} 