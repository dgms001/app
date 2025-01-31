/**
 * Maple Leaf Marble (NPC 2012023)
 * Orbis: Top of the Hill (Map 200000300)
 *
 * Related to Maple marble (Quest 6230).
 *
 *
 */

if (player.isQuestActive(6230) && player.hasItem(4031476, 1)) {
    player.loseItem(4031476, 1);
    if (!player.gainItem(4031456, 1))
        npc.say("Maple Marble can't be earned as there's no blank on Others window. Make a blank and try again.");
    else
        npc.say("Maple leaves were absorbed into sparkling glass marble.");
}