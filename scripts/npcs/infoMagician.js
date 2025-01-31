/* global npc, player, map */


npc.sayNext("魔法師擁有華麗效果的屬性魔法，並且還擁有可在組隊狩獵時發揮重要作用的各種輔助魔法。此外，第2次轉職後，習得的屬性魔法可以給相反屬性的敵人造成致命傷害。");
let mapIndex = npc.askYesNo("你要體驗一下魔法師職業嗎？");
if (mapIndex == 1) {
    player.changeMap(1020200, 0);
}

