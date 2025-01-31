// 
// ID:[865030111]
// MapName:暗殺者據點內部
// 暗殺者據點內部

if (player.isQuestStarted(17668)) {
    portal.playPortalSE();
    player.changeMap(865030101, 2);
} else {
    player.showSystemMessage("出去之前仍有任務未完成。");
    portal.abortWarp();

}

