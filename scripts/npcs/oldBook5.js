/**
 * Spiruna (NPC 2032001)
 * Orbis: Old Man's House (Map 200050001)
 *
 * Refines Dark Crystal Ore at a discount if the player completed The Book of
 * Ancient is Back (Quest 3034).
 *
 *
 */

let COST = 500000;

if (player.isQuestCompleted(3034)) {
    let selection = npc.askYesNo("You've been so much of a help to me... If you have any #t4004004#, I can refine it for you for only #b" + COST + " meso#k each.");
    if (selection == 1) {
        selection = npc.askNumber("Okay, so how many do you want me to make?", 1, 1, 100);
        if (player.hasMesos(selection * COST)) {
            if (player.hasItem(4004004, 10)) {
                player.loseItem(matID, selection * 10);
                player.loseMesos(selection * COST);
                player.gainItem(4005004, selection);
                npc.say("Use it wisely.");
            } else {
                npc.say("I need that ore to refine the Crystal. No exceptions..");
            }
        } else {
            npc.say("I'm sorry, but I am NOT doing this for free.");
        }
    }
} else {
    npc.say("Go away, I'm trying to meditate.");
}