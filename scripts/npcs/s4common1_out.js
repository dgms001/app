/**
 * Tylus (NPC 2022004)
 * Hidden Street: Protecting Tylus : Complete (Map 921100301)
 *
 * Related to Protecting Tylus (Quest 6192).
 *
 *
 */

let changeMap = true;
if (player.isQuestStarted(6192)) {
    npc.sayNext("Thank you for guarding me. I could do my mission thanks to you. Talk to me when you're out.");
    if (player.hasItem(4031495, 0)) {
        if (!player.gainItem(4031495, 1)) {
            npc.say("You're not given items as there's no blank in Others box. Make a blank and talk to me again.");
            changeMap = false;
        }
    }
}

if (changeMap)
    player.changeMap(211000001);