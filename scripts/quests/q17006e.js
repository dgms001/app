//
// Quest ID:17006
// [凱梅爾茲交易所]第二次航行


// Inventory Operation with 1 operations.
if (player.gainItem(4310100, 1)) {
    npc.completeQuest();
    npc.sayNextNoEsc("你剛剛透過貿易獲得了1個凱梅爾茲金幣。 ");
    npc.sayNoEsc("貿易結束之後,請不要忘記來我這領取貿易獎勵。 ");
} else {
    npc.sayNext("揹包空間不足，無法獲得金幣，請清理揹包其他欄！");
}
