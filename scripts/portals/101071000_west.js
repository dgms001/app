/*  This is mada by yanran    
 *  
 *  功能：艾利涅西侧任务判断
 *  
 *  @Author yanran
 */
portal.playPortalSE();
if (player.isQuestCompleted(32104)) {
        player.changeMap(101070010, 1);
} else {
        player.changeMap(101070000, 0);
}
