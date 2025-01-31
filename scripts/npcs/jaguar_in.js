/* global npc, player, map */


let mapIndex = npc.askYesNo("你想傳送到美洲豹棲息地麼?");
if (mapIndex == 1) {
    player.changeMap(931000500);
}

