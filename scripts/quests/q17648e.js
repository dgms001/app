//
// Quest ID:17648
// [凱梅爾茲共和國] 重返桑凱梅爾茲


npc.sayNext("啊..那個..", 9390202);
npc.sayNext("我就在此告辭了。", 9390204);
player.setNpcViewOrHide(9390255, false, false);
npc.sayNext("我還打算問個名字什麼的呢..", 9390202);
npc.sayNextS("嗯? 怎麼了?問到名字你打算幹嘛?");
npc.sayNext("啊,沒,沒什麼。就那個...趕緊去報告吧。", 9390202);
npc.sayNextS("真是個奇怪的傢伙。嗯?村裡怎麼這麼亂糟糟的呢?");
npc.sayNext("就是啊。有什麼事嗎。那有我們商團的船員。去問問他有什麼事。", 9390202);
npc.sayNextS("請問村裡在搞什麼活動嗎?");
npc.sayNext("哎喲,萊文大人你來了呀。你來得正是時候!", 9390217);
npc.sayNext("有什麼事麼?為什麼這麼亂糟糟的。", 9390202);
npc.sayNext("其實海本王國又派人來了！", 9390217);
npc.sayNext("海本王國？那些傲慢的傢伙又打算來說什麼可笑的話？", 9390202);
npc.sayNextS("你說海本王國。你在說什麼啊?");
npc.sayNext("啊..#h0#你還不知道啊。你等一小會兒再跟我說話。我整理一下思緒再跟你說明。", 9390202);
npc.sayNext("啊對了,這是在普賽依船上發現的東西。就當作是謝謝你幫助我送你了。", 9390202);
let itemId = 1102717 + player.getJobCategory();
if (player.gainItem(itemId, 1)) {
    npc.completeQuest();
    player.completeQuest(17731, 0);//Quest Name:第2章.海上的重大沖突
    player.startQuest(17740, 0);//Quest Name:第1章.不速之客
    player.gainExp(5953667);
} else {
    npc.sayNext("你的揹包滿了，清理下吧！", 9390201);
}
