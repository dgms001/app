// 
// Quest ID:17626
// [凱梅爾茲共和國] 擊退阿庫旁多（1)


npc.sayNext("哦? #h0#,你怎麼回來這裡?");
npc.sayNextS("我向統帥請求。我說想作為你的朋友幫助你們。");
npc.sayNext("我爸那個老頑固居然聽了你的話。你還真了不起。不管怎麼樣,那就拜託你了!");
if (npc.askAccept("好，我們來好好玩一場吧！你只要幫我消滅#b30只#o9390808##k#n。 剩下的就交給我了。")) {
    // Response is Yes
    npc.startQuest();
    npc.say("我們來打賭，看誰先結束吧？");
} else {
    // Response is No
    npc.say("你還沒準備好?準備好之後,告訴我。");
}