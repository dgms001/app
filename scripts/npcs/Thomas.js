/**
 * Thomas Swift: Amoria Ambassador (NPC 9201022)
 * Victoria Road: Henesys (Map 100000000),
 *   Amoria: Amoria (Map 680000000)
 *
 * Teleports players from Henesys to Amoria, and back.
 *
 *
 */

if (map.getId() == 100000000) {
    let selection = npc.askYesNo("I can take you to Amoria Village. Are you ready to go?");
    if (selection == 1) {
        npc.sayNext("I hope you had a great time! See you around!");
        player.changeMap(680000000);
    } else if (selection == 0) {
        npc.say("Ok, feel free to hang around until you're ready to go!");
    }
} else if (map.getId() == 680000000) {
    let selection = npc.askYesNo("I can take you back to your original location. Are you ready to go?");
    if (selection == 1) {
        npc.sayNext("I hope you had a great time! See you around!");
        player.changeMap(100000000);
    } else if (selection == 0) {
        npc.sayNext("Ok, feel free to hang around until you're ready to go!");
    }
}