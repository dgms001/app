/**
 *
 *
 */

let event = portal.getEvent("guild_quest");
if (event != null) {
    let stat = map.getReactorStateId("ghostgate");
    if (stat > 0) {
        portal.playPortalSE();
        player.changeMap(990000900, 1);
    } else {
        player.showSystemMessage("神祕的力量阻止著你的前進。");
        portal.abortWarp();
    }
} else {
    player.dropAlertNotice("發生錯誤！");
    player.changeMap(990001100, 0);
} 