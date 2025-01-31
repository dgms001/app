/**
 *
 *
 */
switch (map.getId()) {
    case 211040401:
        portal.playPortalSE();
        player.changeMap(211040300, "in00");
        break;
    case 910400200:
        if ("dummySleepy".equals(portal.getName()) && player.isQuestStarted(32243)) {
            player.changeMap(105000000, 8);
        } else {
            player.showSystemMessage("做完任務再離開吧！");
            portal.abortWarp();
        }
        break;
    default:
        player.dropMessage(1, "Portal:" + portal.getName());
        portal.abortWarp();
}
