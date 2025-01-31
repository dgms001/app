/**
 *
 *
 */
if (!player.hasItem(4032449, 1)) {
    portal.abortWarp();
    player.scriptProgressMessage("要把小豬帶回去！");
} else {
    portal.playPortalSE();
    player.changeMap(100030300, 2);
}

