//
// Quest ID:17654
// [凱梅爾茲共和國] 從某處傳來的慘叫聲


if (npc.askYesNoS("現在也不是馬上談論女皇大人的和平條約的時候..應該沒有要做的事情。該藉此機會逛逛桑凱梅爾茲。", true)) {
    npc.sayNextENoEsc("呃啊啊啊!!", 9390207);
    npc.sayNextENoEsc("嗯? 那是什麼??怎麼會有慘叫聲..好像是東邊發出來的聲音..", true);
    npc.sayNextENoEsc("到村子東邊#b#m865020000##k去看看。", true);
    npc.startQuest();
    npc.makeEvent("berry_quest", false, [player, [865020071]]);
} else {
    npc.saySNoEsc("目前還有點事情要處理。", true);
}