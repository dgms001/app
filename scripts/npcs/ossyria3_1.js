/**
 * Orbis Magic Spot (NPC 2012014)
 * Orbis: Orbis Tower <20th Floor> (Map 200080200)
 *
 * Warps to the El Nath Magic Spot.
 *
 *
 */

if (player.hasItem(4001019, 1)) {
    let selected = npc.askYesNo("You can use #b#t4001019##k to activate #b#p2012014##k. Will you teleport to where #b#p2012015##k is?");
    if (selected == 1) {
        player.loseItem(4001019, 1);
        player.changeMap(200082100);
    }
} else {
    npc.say("There's a #b#p2012014##k that'll enable you to teleport to where #b#p2012015##k is, but you can't activate it without the scroll.");
}