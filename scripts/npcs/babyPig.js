/**
 *
 *
 */

if (map.getId() == 900020100) {
    npc.say("#b(請在靠近我一點...)");
} else {
    if (player.canGainItem(4032449, 1) && !player.hasItem(4032449, 1)) {
        player.gainItem(4032449, 1);
    }
}