/**
 *
 *
 */
if (player.hasItem(4001086, 1)) {
    let ret = npc.askYesNo("石板上的文字發出了奇異的光芒，石板後的一扇小門開啟了。想要使用祕密通道嗎？");
    if (ret == 1) {
        player.changeMap(709000700);
    } else {
        npc.say("如果想移動，請再與我對話。");
    }
} else {
    npc.say("#b(一座石碑，上面寫著看不懂的文字……。)");
}