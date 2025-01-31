exports = {};
/**
 * 艾尔达光谱 Exit
 */

self.setNpcId(3003145);
let text = "#b#e<艾尔达光谱>#n#k\r\n";
text += "要现在离开这里吗?";
if (npc.askYesNo(text) == 1) {
    player.changeMap(450001550);
}
