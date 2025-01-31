/**
 * next00 [custom]
 * Hidden Street: 1st Accompaniment <1st Stage> (Map 103000800),
 *   Hidden Street: 1st Accompaniment <2nd Stage> (Map 103000801),
 *   Hidden Street: 1st Accompaniment <3rd Stage> (Map 103000802),
 *   Hidden Street: 1st Accompaniment <4th stage> (Map 103000803),
 *
 * Kerning PQ portals.
 * Overridden from script-less portals so entry may be blocked when a stage is
 * not cleared.
 *
 *
 */

let stage = parseInt((map.getId() - 910340000) / 100);
let clear = portal.getEvent("party1").getVariable(stage + "stageclear");
if (clear != null && clear) {
    portal.playPortalSE();
    player.changeMap(map.getId() + 100, "st00");
} else {
    portal.block();
}