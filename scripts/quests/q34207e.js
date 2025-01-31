/*     
 *  
 *  功能：[啾啾島]尋找五色東山的美味&amp;lt;1&gt;
 *  

 */

npc.say("#b#ho#！#k\r\n你已經集齊材料啦？用這些材料應該可以做出麵包？的味道！！", 3003160);
if (player.isQuestStarted(34207)) {
    player.loseItem(4034943, 40);
    npc.completeQuest();
    player.gainExp(310000000);
}