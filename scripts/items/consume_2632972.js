if (player.gainVCore(10000031)) {
        player.loseItem(npc.getItemId(), npc.getSlot(), 1);
} else {
        player.dropAlertNotice("V核心數量已經達到最大值!");
} 