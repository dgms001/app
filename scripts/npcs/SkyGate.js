/**
 *
 * Admits players into dragonRider party quest.
 *
 *
 */

if (map.getId() == 240080000) {
    player.runScript("sky_gate");
} else {
    player.runScript("sky_out");
}
