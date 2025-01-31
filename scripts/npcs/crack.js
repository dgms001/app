/**
 * Door of Dimension (NPC 1061009)
 * Hidden Street: The Forest of Evil II (Map 100040106),
 *   Dungeon: Sleepy Dungeon V (Map 105040305),
 *   Dungeon: Ant Tunnel Park (Map 105070001),
 *   Dungeon: The Cave of Evil Eye II (Map 105070200),
 *   Hidden Street: Monkey Swamp II (Map 107000402)
 *
 * Third job advancement challenge NPC.
 *
 *
 */

let map1 = null;
if (player.isQuestStarted(7501)) {
    switch (player.getJob()) {
        case 110:
        case 120:
        case 130:
            map1 = 108010300;
            break;
        case 210:
        case 220:
        case 230:
            map1 = 108010200;
            break;
        case 310:
        case 320:
            map1 = 108010100;
            break;
        case 410:
        case 420:
            map1 = 108010400;
            break;
        case 510:
        case 520:
            map1 = 108010500;
            break;
    }
}

if (map1 == null) {
    npc.sayNext("It seems that there is a door that will take you to another dimension, but you can't go in for some reason.");
} else {
    if (npc.makeEvent("cloneFight", true, [player, map1, map1 + 1]) == null)
        npc.sayNext("Somebody is already fighting the clone. Try again later.");
}