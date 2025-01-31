/**
 * Holy Stone (NPC 2030006)
 * Hidden Street: Holy Ground at the Snowfield (Map 211040401)
 *
 * <insert description here>
 *
 *
 */

//TODO: make wrong answers
let ret = npc.askYesNo("#b(一箇神祕的能量包圍著這塊石頭。老年人明確地告訴我去碰它…我真的應該碰這東西嗎？)#k");
if (ret == 1) {
    if (player.isQuestStarted(1431) || player.isQuestStarted(1432) || player.isQuestStarted(1433) || player.isQuestStarted(1435) || player.isQuestStarted(1436) || player.isQuestStarted(1437) || player.isQuestStarted(1439) || player.isQuestStarted(1440) || player.isQuestStarted(1442) || player.isQuestStarted(1443) || player.isQuestStarted(1445) || player.isQuestStarted(1446) || player.isQuestStarted(1447) || player.isQuestStarted(1448)) {
        player.changeMap(910540000, 0);
    } else {
        npc.sayNext("你想3轉的時候再來吧。");
    }
} else {
    npc.say("準備好了再來吧。");
}
