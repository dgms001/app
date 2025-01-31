exports = {};
/**
 * 艾爾達光譜
 */

let text = "#b#e<艾爾達光譜>#n#k\r\n";
text += "妳知道在艾爾達裡也是有#r原色#k的嗎？\r\n";
text += "這是我在用自己開發的#艾爾達凝集器#k提取周圍的艾爾達時發現的。但是，我現在受傷了，需要妳的幫助……\r\n";
text += "#b#L0# 進入<艾爾達光譜>。#l\r\n";
text += "#L1# 聽壹下妮娜的說明。#l\r\n";
text += "#L2# 查看今日剩余可完成次數。#l#k\r\n\r\n";
text += "#e*完成2次後，可以立即完成。\r\n";
text += "*今日最高獎勵記錄:   #i1712001##b#e#t1712001:##n #e0";
let selection = npc.askMenu(text);
switch (selection) {
    case 0:
        if (party == null) {
            npc.say("請組隊後再來。");
        } else {
            npc.makeEvent("content_ErdaSpectrum", false, party);
        }
        break;
}