/**
 * a pile of white flowers (NPC 1063002)
 * Hidden Street: The Deep Forest of Patience <Step 7> (Map 105040316)
 *
 * Completes John's Last Present (Quest 2054) and gives rare jewel or mineral
 * ores as a reward if the quest is completed and the player successfully
 * reached the end.
 *
 *
 */

let itemId, quantity;
if (player.isQuestActive(2054)) {
    itemId = 4031028;
    quantity = 30;
} else {
    let rewards = [4020007, 4020008, 4010006];
    itemId = rewards[Math.floor(Math.random() * rewards.length)];
    quantity = 2;
}

if (player.gainItem(itemId, quantity))
    player.changeMap(105040300);
else //TODO: GMS-like line
    npc.say("Please check whether your ETC. inventory is full.");