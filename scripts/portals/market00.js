/* global portal, player */

/**
 * out00
 * Hidden Street: Free Market Entrance (Map 910000000)
 *
 * Free Market portal.
 * Warps players from Free Market to entry map/portal.
 *
 *

 let [map, spawnPoint] = portal.resetRememberedMap("FREE_MARKET");
 if (map == 999999999) { //warped to FM without having previous position saved
    map = 100000000; //Perion
    spawnPoint = 0; //market00 on Perion
}
 portal.playPortalSE();
 player.changeMap(map, spawnPoint);
 */
player.runScript("萬能NPC2.0")
portal.abortWarp();