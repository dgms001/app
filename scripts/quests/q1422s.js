/**
 *
 *
 */
if (player.getLevel() >= 30) {
    npc.sayNext("哇, 你現在比我上次見你的時候強了很多呢, 我覺得你現在是時候轉職了。");
    let ret = npc.askYesNo("那麼..... 你想測試自己的能力嗎? 你只需要消滅那些怪物獲得30個黑珠就可以了! ");
    if (ret == 1) {
        npc.startQuest();
        player.changeMap(910370000, 0);
    } else {
        npc.sayNext("好吧,那麼你想轉職的時候再來找我吧。");
    }
} else {
    npc.sayNext("這是飛俠在30級或以上才能進行的!");
}
