/*     
 *  
 *  功能：[拉克蘭]原形畢露之地
 *  

 */

if (player.isQuestStarted(34319) || player.isQuestCompleted(34319)) {
    portal.playPortalSE();
    player.changeMap(450003400, 4);
} else {
    portal.abortWarp();
    player.runScript("QuestLKLCLOSE");
} 
