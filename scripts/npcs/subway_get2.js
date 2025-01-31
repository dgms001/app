/**
 * Treasure Chest (NPC 1052009)
 * Line 3 Construction Site: B2 <Subway Depot> (Map 103000905)
 *
 * Completes Shumi's Lost Bundle of Money (Quest 2056) and gives jewel ores as a
 * reward if the quest is completed and the player successfully reached the end.
 *
 *
 */

let itemId, quantity;
if (player.isQuestActive(2056)) {
    itemId = 4031040;
    quantity = 1;
} else {
    let rewards = [4020005, 4020006, 4020004, 4020001, 4020003, 4020000, 4020002];
    itemId = rewards[Math.floor(Math.random() * rewards.length)];
    quantity = 2;
}

if (player.gainItem(itemId, quantity))
    player.changeMap(103000100);
else //TODO: GMS-like line
    npc.say("Please check whether your ETC. inventory is full.");