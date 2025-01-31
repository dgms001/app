var boxId = 2435770;
QSS = player.getAmountOfItem("" + boxId + "");
var sl = (QSS * getMinAndMax(100, 150))
player.updateQuestRecordEx(1477, "count", player.getIntQuestRecordEx(1477, "count") + sl);
player.loseItem(boxId);
map.blowWeatherEffectNotice("當前獲得" + (sl) + "V核心碎片!", 150, 5000);
function getMinAndMax(minVal, maxVal) { //隨機 最大值 最小值
    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}