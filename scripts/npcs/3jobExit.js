/**
 * Sparkling Crystal (NPC 1061010)
 * Warps player out of the other dimension.
 *
 *
 */

let selection = npc.askYesNo("(你可以透過雪原聖地的神聖的石頭再次進來, 你確定要出去嗎?)");
if (selection == 1) {
    player.changeMap(211040401);
}