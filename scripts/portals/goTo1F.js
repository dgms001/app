let i;
let on1 = player.getQuestRecordEx(42000, "slot1")
let on2 = player.getQuestRecordEx(42000, "slot2")
let on3 = player.getQuestRecordEx(42000, "slot3")
let on4 = player.getQuestRecordEx(42000, "slot4")
let on5 = player.getQuestRecordEx(42000, "slot5")
if (on1 >= 0 && on2 < 0 && on3 < 0 && on4 < 0 && on5 < 0) {
    i = 100;
} else if (on1 >= 0 && on2 >= 0 && on3 < 0 && on4 < 0 && on5 < 0) {
    i = 100;
} else if (on1 >= 0 && on2 >= 0 && on3 >= 0 && on4 < 0 && on5 < 0) {
    i = 100;
} else if (on1 >= 0 && on2 >= 0 && on3 >= 0 && on4 == 0 && on5 < 0) {
    i = 100;
} else if (on1 >= 0 && on2 >= 0 && on3 >= 0 && on4 >= 0 && on5 >= 0) {
    i = 100;
} else if (on1 < 0) {
    i = 100
}
if (player.getPQLog("aquaris_tower") > i) {
    portal.abortWarp();
    player.showSystemMessage("今天已經通關了" + i + "層,無法繼續！");
} else if (!player.hasItem(2432461, 1)) {
    portal.abortWarp();
    player.showSystemMessage("你沒有靈魂鏈接器，請通過阿麗莎的思念體獲取。");
} else {
    if (portal.makeEvent("aquaris_tower", false, player) == null) {
        portal.abortWarp();
        player.dropAlertNotice("發生未知錯誤，請聯系管理員。");
    }
}

function getQuestPoint(questId) {
    return player.getIntQuestRecordEx(questId, "point");
}

function gainQuestPoint(QuestId, Number) {
    player.updateQuestRecordEx(QuestId, "point", String(getQuestPoint(QuestId) + Number));
    if (Number < 0) {
        player.showSystemMessage("消耗了 " + Math.abs(Number) + " 起源點數，剩餘起源點數：" + getQuestPoint(QuestId));
    } else {
        player.showSystemMessage("增加了 " + Math.abs(Number) + " 起源點數，剩餘起源點數：" + getQuestPoint(QuestId));
    }
}
