/*     
 *  
 *  功能：[拉克蘭]噩夢時間塔
 *  

 */

if (player.isQuestCompleted(34328)) {
    portal.playPortalSE();
    player.changeMap(450003520, 1);
} else {
    portal.abortWarp();
    player.runScript("QuestLKLCLOSE");
}  
