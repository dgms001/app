/* global npc, player, map */

let ret = npc.askYesNo("怎麼？這就想出去了？還有很多有趣的事情呢？");
if (ret == 1) {
    npc.sayNext("真沒耐心。如果你非要走的話，我也不會攔你。再見。");
    player.changeMap(951000000);
} else {
    npc.sayNext("呵呵，好吧，你繼續玩吧。");
}