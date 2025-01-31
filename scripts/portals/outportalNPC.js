/*  This is mada by Yanran    
 *
 *  功能：鲁塔比斯 - 奇怪的少女 监视
 *
 *  @Author Yanran
 */

portal.abortWarp();
if (player.isQuestStarted(30002)) {
        player.runScript("root_outportal");
} else {
        player.changeMap(105010200, 0);
}