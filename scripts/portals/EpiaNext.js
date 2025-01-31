/*  This is mada by Yanran    
 *
 *  功能：主题副本 - 狮子王之城 - 还有希望吗
 *
 *  @Author Yanran
 */
if ("1".equals(player.getQuestRecordEx(3178))) {
        portal.playPortalSE();
        player.changeMap(921140001, 2);
} else {
        portal.abortWarp();
        player.scriptProgressMessage("王妃必须在这里" + player.getQuestRecordEx(3178) + "。");
}