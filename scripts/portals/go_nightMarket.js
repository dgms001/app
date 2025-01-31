/*     
 *  
 *  功能：[拉克蘭]
 *  

 */

if (player.isQuestStarted(34310) || player.isQuestCompleted(34310)) {
    portal.playPortalSE();
    player.changeMap(450003300, 2);
} else {
    portal.abortWarp();
    player.runScript("QuestLKLCLOSE");
} 
