// 
// ID:[865030300]
// MapName:怪異森林獨徑
// 怪異森林獨徑


if (player.isQuestCompleted(17670) || player.isQuestStarted(17670)) {
    portal.playPortalSE();
    player.changeMap(865030400, 2);
} else {
    portal.abortWarp();
    player.showSystemMessage("我見到了可疑的結界,但是無法進去。");
}
