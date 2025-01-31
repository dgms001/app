/**
 * Shane (NPC 1032003)
 * Victoria Road: Ellinia (Map 101000000)
 *
 * Starts jump quests Sabitrama and the Diet Medicine (Quest 2050) and
 * Sabitrama's Anti-Aging Medicine (Quest 2051).
 *
 *
 */

let level = player.getLevel();
if (level < 25) {
    npc.say("You must be a higher level to enter the Forest of Patience.");
} else {
    let selection = npc.askYesNo("Hi, i'm Shane. I can let you into the Forest of Patience for a small fee. Would you like to enter for #b5000#k mesos?");
    if (selection == 0) {
        npc.say("Alright, see you next time.");
    } else {
        if (!player.hasMesos(5000)) {
            npc.say("Sorry but it doesn't look like you have enough mesos!");
        } else {
            let quest1 = player.isQuestStarted(2050);
            let quest2 = player.isQuestStarted(2051);
            if (quest1 || !quest2 && level < 50)
                player.changeMap(101000100);
            else if (quest2 || !quest1 && level >= 50)
                player.changeMap(101000102);
            player.loseMesos(5000);
        }
    }
}