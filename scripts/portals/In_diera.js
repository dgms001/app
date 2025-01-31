// 
// ID:[865000000]
// MapName:桑凱梅爾茲
// 桑凱梅爾茲

if (player.isQuestStarted(17648) || player.isQuestCompleted(17648) && !player.isQuestCompleted(17650) && !player.isQuestStarted(17650)) {
    player.runScript("q17650_SC");
    portal.abortWarp();
} else {
    portal.playPortalSE();
    player.changeMap(865000002, 1);
}
