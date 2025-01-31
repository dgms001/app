/*  This is mada by Jackson    
 *
 *  功能：NPC 进入 仲夏夜森林 掉入水中
 *
 *  @Author Yanran
 */

if (player.isQuestStarted(32102)) {
        //portal.abortWarp();
        player.runScript("Diving");
} else {
        portal.playPortalSE();
        player.changeMap(101070000, 0);
}

