var tz15 = "#fEffect/CharacterEff/1112949/0/0#"; //花樣音符

var itemList = Array(
        Array(1113100, 1200, 1),
        Array(1113102, 1200, 1),
        Array(1113104, 1200, 1),
        Array(1113105, 1200, 1),
        Array(1113117, 1200, 1),
        Array(1113113, 1200, 1),
        Array(1113116, 1200, 1),
        Array(1113115, 1200, 1),
        Array(1113114, 1200, 1),
        Array(1113109, 1200, 1),
        Array(1113112, 1200, 1),
        Array(1113110, 1200, 1),
        Array(1113111, 1200, 1),
        Array(1113122, 1200, 1),
        Array(1113127, 1200, 1),
Array(1113100, 1200, 1),
Array(1113101, 1200, 1),
Array(1113102, 1200, 1),
Array(1113103, 1200, 1),
Array(1113120, 1200, 1),
Array(1113121, 1200, 1),
Array(1113122, 1200, 1),
Array(1113126, 1200, 1),
Array(1113127, 1200, 1),
Array(1113128, 1200, 1),
Array(1113105, 1200, 1),
Array(1113106, 1200, 1),
Array(1113107, 1200, 1),
Array(1113117, 1200, 1),
Array(1113118, 1200, 1),
Array(1113119, 1200, 1),

        Array(1113098, 100, 1)
        
    
		);

var tt = "#fEffect/ItemEff/1112811/0/0#"; //音符
    var chance = Math.floor(Math.random() * 1200);
    var finalitem = Array();
    for (var i = 0; i < itemList.length; i++) {
        if (itemList[i][1] >= chance) {
            finalitem.push(itemList[i]);
        }
    }
    if (player.getFreeSlots(1) < 1) {
        player.showSystemMessage("裝備欄請準備一個空格!");
    } else {
        if (finalitem.length != 0) {
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            var SUIJI = getMinAndMax(1, 4);
            let newItem = player.makeItemWithId(itemId);
            newItem.setLevel(SUIJI);
            player.gainItem(newItem);
            player.loseItem(2028297, 1);
            npc.broadcastGachaponMsgEx("[塔戒抽取] : 恭喜玩家 " + player.getName() + " 獲得Lv" + SUIJI + "," + newItem + "", newItem);
        } else {
            player.loseItem(2028297, 1);
            player.showSystemMessage("#r今天的運氣可真差，什麼都沒有拿到。");
        }
    }
function getFreeSlots(size) {
    if (player.getFreeSlots(1) < size || player.getFreeSlots(2) < size || player.getFreeSlots(3) < size || player.getFreeSlots(4) < size || player.getFreeSlots(5) < size) {
        return true;
    }
    return false;
}
function getMinAndMax(minVal, maxVal) { //隨機 最大值 最小值
    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}
