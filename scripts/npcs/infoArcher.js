/* global npc, player, map */


npc.sayNext("弓箭手是敏捷性和力量兼備的職業。負責在戰場後方進行遠距離攻擊。擅長利用地形進行狩獵。");
let mapIndex = npc.askYesNo("你要體驗一下弓箭手職業嗎？");
if (mapIndex == 1) {
    player.changeMap(1020300, 0);
}

