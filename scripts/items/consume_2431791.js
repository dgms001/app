for (var i = 0; i < 5; i++) {
    player.gainItem(4032053, 100);
    player.gainItem(4001713, 25);
    player.gainItem(2630512, 1);
    player.gainItem(2633634, 1);
    player.gainItem(4000850, 1);
    player.gainItem(2633336, 1); //真實符文
    player.gainItem(4034622, 4);
    player.addEventValue("BOSS里程", 1, 3000);
    player.addEventValue("總BOSS里程", 1, 3000);
}
player.loseItem(2431791);
