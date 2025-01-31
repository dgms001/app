/**
 * Exit button for instance: Spirit Savior
 * @description Exit button
 * @author Yukinoshita
 */

let text = "#b#e<灵魂拯救者>#n#k\r\n";
text += "要现在离开这里吗?";
if (npc.askYesNo(text, 3003381)) {
    player.changeMap(921172400);
}
