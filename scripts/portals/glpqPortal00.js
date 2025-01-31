if (Math.floor(((player.getJob() % 1000) / 100) * 100 - (player.getJob() % 100)) == 100) {
    player.changeMap(610030510, 0);
} else if (player.hasItem(4032012, 1)) {
    player.loseItem(4032012, 1);
    player.changeMap(610030510, 0);
} else {
    player.showSystemMessage("這個門是隻有戰士職業才可以進入的，如果你有緋紅之心的話，我可以破例讓你進入。");
    //showSystemMessage( "Your job: " + (((pi.getPlayer().getJob() % 1000) / 100) * 100 - (pi.getPlayer().getJob() % 100)));
}
 
