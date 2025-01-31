/**
 * El Nath Magic Spot (NPC 2012015)
 * Orbis: Orbis Tower <1st Floor> (Map 200082100)
 *
 * Warps to the Orbis Magic Spot.
 *
 *
 */

if (player.hasItem(4001019, 1)) {
    let selected = npc.askYesNo("You can use #b#t4001019##k to activate #b#p2012015##k. Will you teleport to where #b#p2012014##k is?");
    if (selected == 1) {
        player.loseItem(4001019, 1);
        player.changeMap(200080200);
    }
} else {
    npc.say("There's a #b#p2012015##k that'll enable you to teleport to where #b#p2012014##k is, but you can't activate it without the scroll.");
}