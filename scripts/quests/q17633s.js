// 
// Quest ID:17633
// [凱梅爾茲共和國] 迴歸


if (npc.askYesNo("現在要立刻回去嗎?")) {
    // Response is Yes
    npc.startQuest();
    npc.sayNextNoEsc("好了,我們快去向統帥報告吧。");
    player.changeMap(865000000, 0);
} else {
    npc.say("你好像還沒準備好。準備好了的話,就告訴我。");
}