/**
 *
 *
 */
if (player.isQuestCompleted(17632)) {
    portal.playPortalSE();
    player.changeMap(865020500, 3);
} else {
    portal.abortWarp();
    player.showSystemMessage("無法進去。");
}