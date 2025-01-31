/* global npc, player */


let selection = npc.askYesNo("你想要從這裡出去嗎? 出去後需要重新再坐船，請確定?");
if (selection == 1) {
    let toMap;
    switch (map.getId()) {
        case 200000112:
        case 200000122:
        case 200000132:
        case 200000152:
            toMap = 200000100;
            break;
        case 104020111:
            toMap = 104020110;
            break;
        case 220000111:
            toMap = 220000100;
            break;
        case 240000111:
            toMap = 240000100;
            break;
        case 260000110:
            toMap = 260000100;
            break;
    }
    player.changeMap(toMap);
} else if (selection == 0) {
    npc.sayNext("那麼請稍等下，船馬上要出發了！");
}