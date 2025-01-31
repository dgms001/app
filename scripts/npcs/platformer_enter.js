

/* global npc, player */


//進行次數重置檢測  QuestId:18838
//獲得的星星總數  QuestId:18869  starSum
let count = player.getQuestRecordEx(18838, "count");
if (count == null) {
    count = 99;
    player.updateQuestRecordEx(18838, "count", count);
    player.updateQuestRecordEx(18838, "stageT", "0");
    player.updateQuestRecordEx(18838, "stage", "0");
    player.updateQuestRecordEx(18869, "starSum", "0");
    player.updateQuestRecordEx(18870, "timeSum", "0");
}
let idx = player.getIntQuestRecordEx(500651, "1");
player.openUIWithOption(1112, idx);