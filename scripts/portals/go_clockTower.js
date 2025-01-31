/*     
 *  
 *  功能：[拉克蘭]噩夢時間塔
 *  

 */

if (player.isQuestStarted(34319) || player.isQuestCompleted(34319)) {
    portal.playPortalSE();
    player.changeMap(450003500, 1);
} else {
    portal.abortWarp();
    player.runScript("QuestLKLCLOSE");
} 
