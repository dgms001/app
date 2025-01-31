//
// ID:[865030101]
// MapName:暗殺者據點入口
// 暗殺者據點入口

if (player.isQuestStarted(17666)) {
    portal.playPortalSE();
    portal.makeEvent("berry_quest", false, [player, [865030121]]);
} else if (player.isQuestStarted(17664) || !player.isQuestCompleted(17666) && player.isQuestCompleted(17664)) {
    portal.makeEvent("berry_quest", false, [player, [865030111]]);
} else if (player.isQuestCompleted(17667)) {
    portal.playPortalSE();
    player.changeMap(865030111);
} else {
    player.showSystemMessage("貌似不幹掉守衛們將無法進入。");
    portal.abortWarp();
}
