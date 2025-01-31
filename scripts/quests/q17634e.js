// 
// Quest ID:17634
// [凱梅爾茲共和國] 向吉爾伯特報告


npc.sayNext("長時間在外面進行貿易,還是在家好啊。還有,剛剛的事,謝了。", 9390202);
npc.sayNextS("說什麼謝不謝的。那又沒什麼。實際上,你也展現了你那優秀的用兵方法。以後不要犯同樣的錯誤就行了。吃一塹長一智嘛。");
npc.sayNext("嗯!!沒錯!!以後我得小心了。", 9390202);
npc.sayNextS("更何況,如果說得到了不明身份的女人的幫助的話...");
npc.sayNext("嗯.. 如果接受了不認識的人的幫助,按我爸爸的性格,他應該是不會開心的。總之,今天你也辛苦了,好好休息吧。", 9390202);
let itemId = 1072966 + player.getJobCategory();
if (player.gainItem(itemId, 1)) {
    npc.sayNext("給,收下這個吧。是你幫助我的謝禮。", 9390202);
    npc.completeQuest();
    player.completeQuest(17721, 0);//Quest Name:第2章.奇怪的女人
    player.gainExp(5793937);
} else {
    npc.sayNextE("你的揹包滿了，清理下吧！", 9390201);
}
