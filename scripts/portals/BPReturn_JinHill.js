/* global portal, player */

/**
 *
 *
 */

let [map, spawnPoint] = portal.resetRememberedMap("RETURN_MAP");
if (map == 999999999) { //warped to FM without having previous position saved
    map = 450011320;
    spawnPoint = 7;
}
portal.playPortalSE();
player.changeMap(map, spawnPoint);


