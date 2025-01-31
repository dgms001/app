/*     
 *
 *  功能：[消亡旅途]火焰地帶的巨大懸崖
 *

 */

if (player.isQuestCompleted(34108)) {
    portal.playPortalSE();
    player.changeMap(450001107, 0);
} else {
    portal.abortWarp();
}
