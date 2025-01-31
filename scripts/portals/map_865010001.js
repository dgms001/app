//
// ID:[865010001]
// MapName:達尼爾拉戰船
// 達尼爾拉戰船

if (player.isQuestStarted(17678) || player.isQuestCompleted(17678) && !player.isQuestCompleted(17680)) {
    portal.playPortalSE();
    portal.makeEvent("berry_quest", false, [player, [865010011]]);
} else {
    portal.abortWarp();
}
