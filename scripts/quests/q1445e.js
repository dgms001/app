/**
 *
 *
 */

if (player.hasItem(4031059, 1) && player.canGainItem(1142109, 1)) {
    player.loseItem(4031059);
    player.gainItem(1142109, 1);
    player.setJob(511);
    player.gainSp(3);
    npc.completeQuest();
    npc.sayNext("恭喜!你現在是一名鬥士了!");
} else {
    npc.sayNext("請確認你裝備欄有一格空間。");
}