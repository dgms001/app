/**
 * Pison: Tour Guide (NPC 1081001)
 * Florina Road: Florina Beach (Map 110000000)
 *
 * Teleports player from Florina Beach back to Lith Harbor.
 *
 *
 */

let [returnMap, spawnPoint] = npc.getRememberedMap("FLORINA");
npc.askMenu("So you want to leave #b#m110000000##k? If you want, I can take you back to #b#m" + returnMap + "##k.\r\n#b"
    + "#L0# #b I would like to go back now.");

let selection = npc.askYesNo("Are you sure you want to return to #b#m" + returnMap + "##k? Alright, we'll have to get going fast. Do you want to head back to #m" + returnMap + "# now?");
if (selection == 1) {
    player.changeMap(returnMap, spawnPoint);
    npc.resetRememberedMap("FLORINA");
} else if (selection == 0) {
    npc.sayNext("You must have some business to take care of here. It's not a bad idea to take some rest at #m" + returnMap + "#. Look at me; I love it here so much that I wound up living here. Hahaha! Anyway, talk to me when you feel like going back.");
}