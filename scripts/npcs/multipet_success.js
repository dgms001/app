/**
 * ? (NPC 9102100)
 * Victoria Road: Pet-Walking Road (Map 100000202)
 *
 * Advances the Pet Instructor Test (Quest 4646) by giving the hidden item.
 *
 *
 */

if (!player.isQuestStarted(4646)) {
    npc.say("#b(I couldn't find anything.)");
} else if (player.isQuestActive(4646)) {
    let selection = npc.askYesNo("#b(I can see something covered in grass. Should I pull it out?)");
    if (selection == 0) {
        npc.sayNext("#b(I didn't touch this hidden item covered in grass)");
    } else {
        if (player.gainItem(4031921, 1))
            npc.sayNext("I found the item that Pet Trainer Bartos hid... this note.");
        else //TODO: GMS-like line
            npc.say("Please check whether your ETC. inventory is full.");
    }
} else {
    npc.sayNext("#b(What's this... eww... a pet's poop was in there!)");
}