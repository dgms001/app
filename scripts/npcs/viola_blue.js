/**
 * a pile of blue flowers (NPC 1063001)
 * Hidden Street: The Deep Forest of Patience <Step 4> (Map 105040313)
 *
 * Completes John's Present (Quest 2053) and gives jewel ores as a reward if the
 * quest is completed and the player successfully reached the end.
 *
 *
 */

let itemId, quantity;
if (player.isQuestActive(2053)) {
    itemId = 4031026;
    quantity = 20;
} else {
    let rewards = [4020005, 4020006, 4020004, 4020001, 4020003, 4020000, 4020002];
    itemId = rewards[Math.floor(Math.random() * rewards.length)];
    quantity = 2;
}

if (player.gainItem(itemId, quantity))
    player.changeMap(105040300);
else //TODO: GMS-like line
    npc.say("Please check whether your ETC. inventory is full.");