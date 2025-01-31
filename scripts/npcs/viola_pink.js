/**
 * a pile of pink flowers (NPC 1063000)
 * Hidden Street: The Deep Forest of Patience <Step 2> (Map 105040311)
 *
 * Completes John's Pink Flower Basket (Quest 2052) and gives mineral ores
 * as a reward if the quest is completed and the player successfully reached the
 * end.
 *
 *
 */

let itemId, quantity;
if (player.isQuestActive(2052)) {
    itemId = 4031025;
    quantity = 20;
} else {
    let rewards = [4010003, 4010000, 4010002, 4010005, 4010004, 4010001];
    itemId = rewards[Math.floor(Math.random() * rewards.length)];
    quantity = 2;
}

if (player.gainItem(itemId, quantity))
    player.changeMap(105040300);
else //TODO: GMS-like line
    npc.say("Please check whether your ETC. inventory is full.");