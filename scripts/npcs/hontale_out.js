/**
 *
 *
 */

let returnMap = map.getId() == 240050400 ? 240050000 : 240040700;
let ret = npc.askYesNo("你確定想離開這裡,前往#r#m" + returnMap + "##k嗎?");
if (ret == 1) {
    player.changeMap(returnMap);
}
