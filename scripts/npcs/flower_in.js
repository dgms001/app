/**
 * Mysterious Statue (NPC 1061006)
 * Dungeon: Sleepywood (Map 105040300)
 *
 * Starts jump quests John's Pink Flower Basket (Quest 2052),
 * John's Present (Quest 2053), and John's Last Present (Quest 2054).
 *
 *
 */

let level = player.getLevel();
if (level < 15) {
    npc.say("You must be a higher level to enter the mysterious place.");
} else {
    let selection = npc.askYesNo("Once I lay my hand on the statue, a strange light covers me and it feels like I am being sucked into somewhere else. Is it okay to be moved to somewhere else randomly just like that?");
    if (selection == 0) {
        npc.say("Alright, see you next time.");
    } else {
        let quest1 = player.isQuestStarted(2052);
        let quest2 = player.isQuestStarted(2053);
        let quest3 = player.isQuestStarted(2054);
        if (quest1 || !quest2 && !quest3 && level < 30)
            player.changeMap(105040310);
        else if (quest2 || !quest1 && !quest3 && level >= 30 && level < 60)
            player.changeMap(105040312);
        else if (quest3 || !quest1 && !quest2 && level >= 60)
            player.changeMap(105040314);
    }
}