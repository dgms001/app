exports = {};
/**
 * 艾尔达光谱
 */

let text = "#b#e<艾尔达光谱>#n#k\r\n";
text += "你知道在艾尔达里也是有#r原色#k的吗？\r\n";
text += "这是我在用自己开发的#艾尔达凝集器#k提取周围的艾尔达时发现的。但是，我现在受伤了，需要你的帮助……\r\n";
text += "#b#L0# 进入<艾尔达光谱>。#l\r\n";
text += "#L1# 听一下妮娜的说明。#l\r\n";
text += "#L2# 查看今日剩余可完成次数。#l#k\r\n\r\n";
text += "#e*完成2次后，可以立即完成。\r\n";
text += "*今日最高奖励记录:   #i1712001##b#e#t1712001:##n #e0";
let selection = npc.askMenu(text);
switch (selection) {
    case 0:
        if (party == null) {
            npc.say("请组队后再来。");
        } else {
            npc.makeEvent("content_ErdaSpectrum", false, party);
        }
        break;
}