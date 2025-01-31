/* global npc, player, map */

let ret = npc.askYesNo("你現在是想離開這裡嗎?");
if (ret == 1) {
    player.changeMap(211042300, 0);
}