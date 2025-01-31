/**
 *
 *
 */
if (player.isQuestCompleted(17631) && !player.isQuestCompleted(17632)) {
    portal.playPortalSE();
    player.changeMap(865020061);
} else if (player.isQuestCompleted(17632)) {
    portal.playPortalSE();
    player.changeMap(865020400, 4);
} else {
    portal.abortWarp();
    player.showSystemMessage("我見到了可疑的結界,但是無法進去。");
}