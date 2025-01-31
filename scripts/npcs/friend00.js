/**
 * Mr. Goldstein: Buddy List Admin (NPC 1002003)
 * Victoria Road: Lith Harbor (Map 104000000)
 *
 * Increases the maximum amount of buddies a player could have.
 *
 *
 */

npc.sayNext("我希望我能掙到和昨天一樣多的錢…好吧，你好！你不想擴充套件你的好友列表嗎？你看起來像有很多朋友的人…你覺得呢？有了一些錢，我就能為你實現夢想。但是請記住，它一次只適用於一角色，因此它不會影響您帳戶上的任何其他角色。你想這樣做嗎？");
selection = npc.askYesNo("很好！其實沒那麼貴。#b50000#k金幣，我會在你的好友列表中再增加5個。一旦你增加了，它將永遠在你的好友名單上。所以如果你是其中一箇需要更多空間的人，那麼你也可以這樣做。你怎麼認為？你會花5萬金幣嗎？");
if (selection == 1) {
    if (player.hasMesos(50000) && player.getBuddyCapacity() < 50) {
        player.loseMesos(50000);
        player.gainBuddySlots(5);
        npc.say("好吧！你的好友列表現在有5個額外的容量。你自己去看看。如果你還需要更多的空間在你的好友名單上，你知道可以找誰的。當然，這不會是免費的…好吧，這麼久了…");
    } else {
        npc.sayNext("嘿。。。你確定你有B50000金幣嗎？如果是這樣，那麼檢查一下你的好友列表容量是否到最大值。即使你付錢了，你的好友列表中最多的是#b50 #k。.");
    }
} else {
    npc.sayNext("我懂了。。。我覺得你沒有我想的那麼多朋友。如果沒有，你現在就沒有5萬金幣？不管怎樣，如果你改變主意，回來我們談生意。當然，一旦你得到足夠的金幣…呵呵…");
}
