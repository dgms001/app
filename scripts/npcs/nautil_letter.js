/**
 * Trash Can (NPC 1092018)
 * The Nautilus: Top Floor - Hallway (Map 120000100)
 *
 * Gives player Crumpled Letter for The Half-Written Letter (Quest 2162).
 *
 *
 */

npc.sayNext("A half-written letter... maybe it's important! Should I take a look?");
if (player.hasItem(4031839, 1)) {
    npc.say("I've already picked one up. I don't think I'll need to pick up another one.");
} else {
    if (player.gainItem(4031839, 1))
        npc.say("I can barely make this out... but it reads Kyrin.");
    else //TODO: GMS-like line
        npc.say("Please check whether your ETC. inventory is full.");
}