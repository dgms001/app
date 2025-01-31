/**
 *
 *
 */
if (player.isQuestStarted(17618)) {
    portal.playPortalSE();
    portal.makeEvent("berry_quest", false, [player, [865020001]]);
} else if (player.isQuestStarted(17654)) {
    portal.playPortalSE();
    portal.makeEvent("berry_quest", false, [player, [865020071]]);
} else {
    if (!"1".equals(player.getQuestEntryData(17929))) {
        player.setQuestData(17929, "1"); //Quest Name:[任務]發現凱梅爾茲運河
    }
    portal.playPortalSE();
    player.changeMap(865020000, 2);
}