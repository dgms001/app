let ID = 2630021; //時
let Change1 = player.getAmountOfItem(ID);
let Change = player.getAmountOfItem(4034032);
let time = 1000 * 60 * 60 * Change1;
let mapA = map.getId();
if (mapA == 993001100) { //限制開啟地圖
    //player.showSystemMessage("在卡BUG頭蓋骨給你打出來 操!!");
} else if (player.getFreeSlots(4) < 1) {
    npc.say("#fs14##b請先確保其他背包欄1空出個以上格子!");
} else if (Change != 0) {
    npc.say("#fs14##b你身上已經有加倍卡了,請到期後在使用!");
} else {
    let newItem = player.makeItemWithId(4034032);
    newItem.setExpiration(new Date().getTime() + time);
    player.gainItem(newItem);
    player.loseItem(ID);
    npc.say("獲得了" + Change1 + "小時加倍卡權限");
}
