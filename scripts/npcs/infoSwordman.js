/* global npc, player, map */


npc.sayNext("戰士是具備強大攻擊力和體力的職業，戰場的最前線是其發揮價值的地方。基本攻擊非常強大，透過不斷學習各種高階技能，可以發揮出更加強大的力量。");
let mapIndex = npc.askYesNo("你要體驗一下戰士職業嗎？");
if (mapIndex == 1) {
    player.changeMap(1020100, 0);
}

