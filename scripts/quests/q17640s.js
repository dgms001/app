// 
// Quest ID:17640
// [凱梅爾茲共和國] 組織遠征隊（3）


npc.sayNext("啊,來啦。我拜託的東西呢?");
npc.sayNextS("嗯,可是我在雜貨店聽說可以送貨的呀。");
if (npc.askYesNo("嗯,可以那樣的啊。船員們和傭兵們都已經到齊了。好像可以出發了。如何?")) {
    npc.startQuest();
    npc.sayNextS("(這傢伙竟調轉話題。) 嗯,我也準備好了。");
    npc.sayNext("好的,那就在碼頭見吧。");
} else {
    npc.say("嗯?還沒準備好吶。準備好了就告訴我。");
}