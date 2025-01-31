//
// Quest ID:17670
// [凱梅爾茲共和國] 不尋常的氣息


npc.sayNext("特來敏小姐。是這個結界嗎?");
npc.sayNext("應該就是這裡。從這兒能感覺到強烈的不好的氣息。", 9390205);
if (npc.askYesNo("嗯.. 原來如此。進去看看吧。#h0#,趕緊進去調查調查吧")) {
    npc.startQuest();
    npc.sayNextS("好吧。但是就我一箇人進去。你留在這裡。");
    npc.sayNext("嗯?你幹嘛要一箇人進去啊?");
    npc.sayNextS("誰知道里面有什麼。而且你一起進去的話我不放心克萊爾的安全。");
    npc.sayNext("嗯。好吧,知道了。但是如果發生什麼事的話,你不要逞強馬上出來。");
    npc.sayNextS("嗯,知道了。好了,那我進去嘍。");
    player.changeMap(865030400, 2);
} else {
    npc.say("怎麼了,很恐怖嗎?你先喘口氣再說。");
}