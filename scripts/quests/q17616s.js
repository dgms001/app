//
// Quest ID:17616
// [凱梅爾茲共和國] 失竊的貿易品


npc.sayNext("大事不好了。這可怎麼辦呢。");
npc.sayNextS("你有什麼事情嗎?");
npc.sayNext("你還沒走啊?別提了。我把這次的交易物品寄放在交易所,結果物品都神不知鬼不覺地消失了!");
npc.sayNextS("神不知鬼不覺地消失了,你是指被偷了?");
npc.sayNext("嗯,沒錯!是被偷了。但說 '我'是小偷,這太荒唐了...");
npc.sayNextS("我只是說被偷了,什麼時候說你是小偷了?你什麼意思啊?你是有雙胞胎兄弟,還是剛剛出現的是幽靈?");
npc.sayNext("我沒有雙胞胎兄弟。你說得沒錯!幽靈!他們說有個跟我長得一樣的傢伙出現,拿走了交易品。但是我發誓,絕對不是我!但是居然說我拿走了。是幽靈。現在該怎麼辦?誰會相信我說的話呢。我肯定會被炒魷魚的。");
if (npc.askYesNoS("#b(他到底在說什麼啊,我怎麼一點都不懂。等下... 說不定這是個機會。說不定能趁這次機會進入達尼爾拉商團。再調查一下?)#k")) {// Response is Yes
    npc.startQuest();
    npc.sayNextS("#b(先去交易所,瞭解下事情的詳細經過吧。)#k");
} else {
    // Response is No
    npc.sayS("(現在還不知道。先等等看再說吧。)");
}