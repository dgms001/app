let ret = npc.askYesNo("#e<Boss - 貝勒德>#n\r\n\r\n你想要現在就離開這裡嗎？", 9390120);
if (ret == 1) {
    player.changeMap(863010000);
}