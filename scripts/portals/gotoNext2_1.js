/*  This is mada by Yanran    
 *
 *  功能：主题副本 - 狮子王之城 - 鲁丹对话
 *
 *  @Author Yanran
 */
if (player.isQuestCompleted(3140)) {
        portal.playPortalSE();
        player.changeMap(211060500, 1);
} else {
        portal.abortWarp();
        player.runScript("LionLuDan");
}