/* global npc, player, map */


npc.sayNext("飛俠是具備運氣及一定程度的敏捷性和力量的職業。擅長在戰場中突襲對手，或隱身等特殊技能。飛俠的機動力和迴避率非常高。透過多樣的技能，玩家能體驗到操控飛俠的樂趣。");
let mapIndex = npc.askYesNo("你要體驗一下飛俠職業嗎？");
if (mapIndex == 1) {
    player.changeMap(1020400, 0);
}

