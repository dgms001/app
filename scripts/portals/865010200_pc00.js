// 
// ID:[865010200]
// MapName:貝里
// 貝里

if (player.isQuestActive(17613)) {
    portal.makeEvent("berry_quest", false, [player, [865090001]]);
}
portal.abortWarp();
