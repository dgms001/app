// 
// Quest ID:17660
// [凱梅爾茲共和國] ]消失的克萊爾


npc.sayNextS("出什麼事了?克萊爾去哪兒了?");
npc.sayNext("你去抓狼的時候有些奇怪的傢伙們來過。不分青紅皁白地撲過來,我就一味地抵擋,然後就發現特來敏小姐不見了!");
npc.sayNext("是逃去哪兒了嗎?還是被抓走了呢?我真是個笨蛋!!怎麼都沒想到保護特來敏小姐!!");
npc.sayNextS("別自責了,萊文。她不會有事的。");
if (npc.askYesNo("趕緊去找找她吧!")) {
    npc.startQuest();
    //player.setNpcSpecialAction(OBJECT_1, "summon", 0, false);
    //player.setNpcSpecialAction(OBJECT_2, "summon", 0, false);
    npc.sayNextNoEsc("現在擔心你們自己的小命才是更明智的。", 9390227);
    npc.sayNextNoEsc("誰呀!");
    npc.sayNextNoEsc("那個你們沒必要知道。反正你們馬上就要從這世界上消失了。", 9390227);
    npc.sayNextSNoEsc("你們這些傢伙是暗殺海本王國使節團的傢伙們啊!!");
    npc.sayNextNoEsc("呼,醒悟吧!", 9390227);
    for (let i = 0; i < 6; i++) {
        map.spawnMob(9390833, 360, 89);
    }
    for (let i = 0; i < 6; i++) {
        map.spawnMob(9390834, 310, 89);
    }
} else {
    npc.say("在幹嘛呢?這可不是開玩笑的");

}
