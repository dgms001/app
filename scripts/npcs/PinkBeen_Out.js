/**
 *
 *
 */

let returnMap = map.getId() == 270050100 ? 270050300 : 270051300;
let ret = npc.askYesNo("#e<Boss：品克繽>#n\r\n\r\n你想要離開這裡了嗎？");
if (ret == 1) {
    player.changeMap(returnMap);
}
