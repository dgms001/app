/*     
 *  
 *  功能：[啾啾島]尋找天宇鯨山之味&amp;lt;1&gt;
 *  

 */

npc.sayNext("嗚…哇... 你這麼快就把羽毛拿回來啦。", 3003164);
npc.sayNextS("好了~ 嗶嘟，現在可以了吧？快點完成你的蛋餅吧~", false);
npc.sayNext("哼，你怎麼會任務我的任務只有一項呢？在你眼裡我就那麼傻呀？！", 3003164);
npc.sayNextS("噢！嗶嘟你！", false);
npc.sayNext("啊，呵呵呵，我不管…我還需要更多~ 哼，再去蒐集吧…哼", 3003164);
if (player.isQuestStarted(34213)) {
    player.loseItem(4034954, 20);
    player.loseItem(4034955, 20);
    npc.completeQuest();
    player.gainExp(310000000);
}