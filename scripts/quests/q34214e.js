/*     
 *  
 *  功能：[啾啾島]尋找天宇鯨山的美味&amp;lt;2&gt;
 *  

 */

npc.sayNext("哇啊啊~ 完成…啦~~轉轉轉！", 3003164);
npc.sayNext("旅行者~ #b三明治#k終於完成了！你快看~~", 3003160);
npc.sayNext("好了~那現在我們一起用餐吧？", 3003160);
if (player.isQuestStarted(34214)) {
    player.loseItem(4034956, 30);
    player.loseItem(4034957, 30);
    npc.completeQuest();
    player.gainExp(315000000);
}