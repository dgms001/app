/**
 * Bush (NPC 1094002),
 *   Bush (NPC 1094003),
 *   Bush (NPC 1094004),
 *   Bush (NPC 1094005),
 *   Bush (NPC 1094006)
 * Victoria Road: Nautilus Harbor (Map 120000000)
 *
 * Advances Help Me Find My Glasses (Quest 2186).
 *
 *
 */

if (player.isQuestStarted(2186)) {
    let item;
    switch (Math.floor(Math.random() * 2)) {
        case 0:
            if (player.hasItem(4031853, 0))
                item = 4031853;
            else
                item = 4031855;
            break;
        case 1:
            item = 4031854;
            break;
    }

    if (player.gainItem(item, 1))
        if (item == 4031853)
            npc.sayNext("I found Abel's glasses.");
        else
            npc.say("I found a pair of glasses, but it doesn't seem to be Abel's. Abel's pair is horn-rimmed...");
    else //TODO: GMS-like line
        npc.say("Please check whether your ETC. inventory is full.");
}