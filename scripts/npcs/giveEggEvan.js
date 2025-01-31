/**
 *
 *
 */

if (player.isQuestStarted(22007) && !player.hasItem(4032451, 1)) {
    if (player.gainItem(4032451, 1)) {
        npc.sayNext("#b(你得到了一箇雞蛋。把它拿給尤塔。)#k");
    } else {
        npc.sayNext("揹包已滿，請整理下其他欄。");
    }
} else {
    npc.sayNext("#b這是一箇裝有雞蛋的桶.#k");
}
