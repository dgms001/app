let mapA = map.getId();
if (mapA == 993001100) { //限制開啟地圖
    //player.showSystemMessage("在卡BUG頭蓋骨給你打出來 操!!");
} else if (player.getFreeSlots(4) > 1) {
    player.gainItem(4310260, 666);
    player.loseItem(2432756, 1);
    npc.say("獲得666個#z4310260#")
} else {
    npc.say("其他欄背包空間不足");
}