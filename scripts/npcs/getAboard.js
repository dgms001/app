/* global npc, player */

/**
 * Platform Usher: Station Info (NPC 2012006)
 * Orbis: Orbis Ticketing Booth (Map 200000100)
 *
 * Teleports player from Orbis Tickering Booth to the proper platforms for the
 * rides to each destination.
 *
 */

let selection = npc.askMenu("在森嶼海巷碼頭，有很多升降場。根據目的地的不同，必須找到對應的升降場才行。你想到哪個升降場去，乘坐去哪裡的船呢？\r\n"
    + "#b#L0#乘坐開往金銀島的船的升降場#l\r\n"
    + "#b#L1#乘坐開往玩具城的船的升降場#l#k\r\n"
    + "#b#L2#乘坐開往神木村的船的升降場#l\r\n"
    + "#b#L3#乘坐開往武陵的船的升降場#l\r\n"
    + "#b#L4#乘坐開往阿里安特的船的升降場#l#k\r\n"
    + "#b#L5#乘坐開往聖地的船的升降場#l#k\r\n"
    + "#b#L6#乘坐開往埃德爾斯坦的船的升降場#l");

let str = "如果走錯了地方，你可以透過傳送口回到我這裡來，所以請你放心。";
let map;
switch (selection) {
    case 0:
        map = 200000111;
        str += "你想移動到#b乘坐開往金銀島的船的升降場#k去嗎？";
        break;
    case 1:
        map = 200000121;
        str += "你想移動到#b乘坐開往玩具城的船的升降場#k去嗎？";
        break;
    case 2:
        map = 200000131;
        str += "你想移動到#b乘坐開往神木村的船的升降場#k去嗎？";
        break;
    case 3:
        map = 200000141;
        str += "你想移動到#b乘坐開往武陵的船的升降場#k去嗎？";
        break;
    case 4:
        map = 200000151;
        str += "你想移動到#b乘坐開往阿里安特的船的升降場#k去嗎？";
        break;
    case 5:
        map = 200000161;
        str += "你想移動到#b乘坐開往聖地的船的升降場#k去嗎？";
        break;
    case 6:
        map = 200000170;
        str += "你想移動到#b乘坐開往埃德爾斯坦的船的升降場#k去嗎？";
        break;
        break;
}

selection = npc.askYesNo(str);
if (selection == 1) {
    player.changeMap(map, "west00");
} else if (selection == 0) {
    str = "請重新確認你要去的目的地，然後透過我移動到升降場。";
    if (map == 200000111 || map == 200000121 || map == 200000131 || map == 200000141 || map == 200000151) {
        str += "船的航班是固定的，必須看好時間！";
    }
    npc.sayNext(str);
}