/**
 * Peter (NPC 9101001)
 * Maple Road: Entrance - Mushroom Town Training Camp (Map 3)
 *
 * Teleports players from the Training Camp exit to the road to
 * Mushroom Town.
 *
 *
 */

npc.sayNext("You have finished all your trainings. Good job. You seem to be ready to start with the journey right away! Good , I will let you on to the next place.");
npc.sayNext("But remember, once you get out of here, you will enter a village full with monsters. Well them, good bye!");
player.changeMap(40000);