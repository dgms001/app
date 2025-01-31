/*     
 *
 *  功能：[消亡旅途]安息洞穴 - 選擇岔路
 *

 */

if (player.isQuestStarted(34119)) {
    if (party == null) {
        portal.playPortalSE();
        portal.makeEvent("QuestEvent_01", false, [player, 450001340]);
    } else {
        portal.abortWarp();
        player.showProgressMessageFont("組隊狀態下無法入場。", 3, 20, 20, 0);
    }
} else {
    portal.playPortalSE();
    player.changeMap(450001230, 1);
}