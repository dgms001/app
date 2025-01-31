/*  This is mada by Yanran    
 *
 *  功能：NPC 进入 洋葱种植园
 *
 *  @Author Yanran
 */

portal.abortWarp();
portal.playPortalSE();
//if (player.isQuestStarted(32121) || player.isQuestCompleted(32121)){ 
if (player.isQuestCompleted(32121)) {
//if (player.isQuestCompleted(32120)) {
        player.changeMap(101073000, 3);//32135
        player.startQuest(32135, 1500000, "0");
} else {
        player.scriptProgressMessage("现在还不能进去。");
}
