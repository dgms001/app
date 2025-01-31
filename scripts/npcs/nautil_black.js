/**
 * Muirhat (NPC 1092007)
 * The Nautilus: Top Floor - Hallway (Map 120000100)
 *
 * Advances A Mysterious Presence On-board The Nautilus - Disciples of the Black
 * Magician (Quest 2175)
 *
 *
 */

if (!player.isQuestStarted(2175)) {
    npc.say("The Black Magician and his followers. Kyrin and the Crew of Nautilus. They'll be chasing one another until one of them doesn't exist, that's for sure.");
} else {
    npc.sayNext("Are you ready? Good, I'll send you to where the disciples of the Black Magician are. Look for the pigs around the area where I'll be sending you. You'll be able to find it by tracking them.");
    npc.sayNext("When they are weakened, they'll change back to their original state. If you find something suspicious, you must fight them until they are weak. I'll be here awaiting your findings.");
    player.changeMap(912000000);
}