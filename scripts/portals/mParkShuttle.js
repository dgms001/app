let ret = npc.askYesNo("你要回到營地嗎?");
if (ret == 1) {
        player.changeMap(300000000, 0);
}