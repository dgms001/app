/*     
 *  
 *  功能：[啾啾島]彌補缺失的那2%的味道 打呲溜樹
 *  

 */

if (player.isQuestStarted(34215)) {
    if (party == null) {
        portal.playPortalSE();
        portal.makeEvent("QuestEvent_02", false, [player, 450002250]);
    } else {
        portal.abortWarp();
        player.showProgressMessageFont("組隊狀態下無法入場。", 3, 20, 20, 0);
    }
}
