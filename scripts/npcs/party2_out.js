/**
 *
 * Exit NPC
 *
 *
 */


if (map.getId() == 922010000) {
    player.loseItem(4001022);
    player.loseItem(4001023);
    player.changeMap(221023300, 0);
} else {
    let str = "你確放棄任務,從這裡出去重新開始嗎?";
    if (npc.askYesNo(str) == 1) {
        player.changeMap(922010000, "st00");
    }
}