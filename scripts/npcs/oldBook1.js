/**
 * Alcaster (NPC 2020005)
 * El Nath: El Nath Market (Map 211000100)
 *
 * Sells Holy Water, All-Cure Potion, The Magic Rock, and The Summoning Rock at
 * a discount if the player completed The Book of Ancient is Back (Quest 3034).
 *
 *
 */

let ITEMS = [2050003, 2050004, 4006000, 4006001];
let COSTS = [300, 400, 5000, 5000];

if (player.isQuestCompleted(3035)) {
    let selection = npc.askYesNo("Thank you for helping me find and destroy the Book of the Ancients. As thanks for your help, I would like to put my alchemy skills to use. However, my special items are not free.");
    if (selection == 1) {
        let str = "Very well then, what item would you like? Just tell me, and I can get it to you straightaway!";
        for (let i = 0; i < ITEMS.length; i++)
            str += "\r\n#L" + i + "# #b#t" + ITEMS[i] + "##k (" + COSTS[i] + " meso)";
        selection = npc.askMenu(str);
        let itemId = ITEMS[selection];
        let cost = COSTS[selection];
        selection = npc.askNumber("So, you want me to make #t" + itemId + "# for you? In that case, it'll come to " + cost + " meso each. How many do you want?", 1, 1, 100);
        if (player.hasMesos(selection * cost)) {
            player.loseMesos(selection * cost);
            player.gainItem(itemId, selection);
            npc.say("I have faith that you will put these to great use.");
        } else {
            npc.say("I'm sorry, but you do not have enough meso.")
        }
    }
} else {
    npc.say("I was once a legendary alchemist, but those days are behind me.");
}