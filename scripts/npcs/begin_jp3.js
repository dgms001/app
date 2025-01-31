/**
 * Heena (NPC 2101)
 * Maple Road: Lower level of the Training Camp (Map 2)
 *
 * Teleports players from inside the Mushroom Town Training Camp to the exit.
 *
 *
 */

let result = npc.askYesNo("Are you done with your training? If you wish, I will send you out from this training camp.");
if (result == 1) {
    npc.sayNext("Then, I will send you out from here. Good job.");
    player.changeMap(3);
} else {
    npc.say("Haven't you finish the training program yet? If you want to leave this place, please do not hesitate to tell me.");
}