/**
 * ? (NPC 9102101)
 * Victoria Road: Pet-Walking Road (Map 100000202)
 *
 * Decoys for Pet Instructor Test (Quest 4646).
 * See NPC 9102100 for the real deal.
 *
 *
 */

let selection = npc.askYesNo("#b(I can see something covered in grass. Should I pull it out?)");
if (selection == 0) {
    npc.sayNext("#b(I didn't think much of it, so I didn't touch it.)");
} else {
    if (player.gainItem(4031922, 1))
        npc.sayNext("#b(Yuck... it's pet poop!)");
    else //TODO: GMS-like line
        npc.say("Please check whether your ETC. inventory is full.");
}