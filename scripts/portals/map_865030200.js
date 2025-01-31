// 
// ID:[865030200]
// MapName:怪異森林岔路
// 怪異森林岔路

if (player.isQuestStarted(17662) || player.isQuestCompleted(17662) && !player.isQuestCompleted(17668)) {
    portal.playPortalSE();
    portal.makeEvent("berry_quest", false, [player, [865030101]]);
} else {
    portal.playPortalSE();
    player.changeMap(865030201, 2);
}