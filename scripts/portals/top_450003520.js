/*
*
*  功能：[拉克蘭]噩夢時間塔
*

*/

if (player.isQuestCompleted(34329)) {
    portal.playPortalSE();
    player.changeMap(450003530, 2);
} else {
    portal.abortWarp();
    player.runScript("QuestLKLCLOSE");
}  
