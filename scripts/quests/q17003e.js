// 
// Quest ID:17003
// [凱梅爾茲交易所]成為富翁的方法

npc.sayNext("你好，歡迎來到充滿黃金和機遇的商業城市--凱梅爾茲。在這裡，人人都能成為富人。");
npc.sayNext("方法很簡單。只要在我給你的合同中簽名,就能開始貿易了。");
if (npc.askYesNo("來自冒險島的勇士也有興趣知道成為有錢人的方法啊?")) {
    npc.sayNextNoEsc("果然,你還是做了明智的選擇。 #h0#,你不會後悔的。稍等... 我把合同放哪了呢... ");
    npc.completeQuest();
} else {
    npc.sayNext("唉.. 機會之門時刻為你敞開,如果你改變心意的話,可以隨時再來找我。");
    npc.startQuest();
}