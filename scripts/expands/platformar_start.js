

/**
 *
 *
 */
let count = player.getQuestRecordEx(18838, "count");
player.updateQuestRecordEx(18838, "count", count - 1);
if (npc.makeEvent("platformar", false, player) == null) {
    npc.sayNextS("#face0#發生未知錯誤！");
}

