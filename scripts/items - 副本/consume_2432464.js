modifyQuestPoint(42003, getMinAndMax(300, 500));
player.loseItem(2432464, 1)
function getQuestPoint(questId) {
    return player.getIntQuestRecordEx(questId, "point");
}

function modifyQuestPoint(questId, num) {
    player.updateQuestRecordEx(questId, "point", String(getQuestPoint(questId) + num));
    player.showSystemMessage((num < 0 ? "消耗了 " : "增加了 ") + Math.abs(num) + " 起源點數，剩餘起源點數：" + getQuestPoint(questId));
}
function getMinAndMax(minVal, maxVal) {//隨機 最大值 最小值
    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}