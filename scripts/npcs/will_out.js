/* global npc, player, map */

let ret = npc.askYesNo("你想要現在就離開這裡嗎？");
if (ret == 1) {
    player.changeMap(450007240);
}