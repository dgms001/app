/**
 * Ancient Icy Stone (NPC 2030014)
 * Hidden Street: Ice Valley (Map 921100100)
 *
 * Gives item that teaches Ice Demon skill.
 *
 *
 */

if (player.hasItem(4031450, 1)) {
    if (player.gainItem(2280011, 1)) {
        player.loseItem(4031450, 1);
        npc.sayNext("As you collect the ice, your hammer breaks.");
    } else {
        npc.sayNext("You have no inventory space.");
    }
} else {
    npc.sayNext("You have nothing to pick the ice with.");
}