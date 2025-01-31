if (map.getId() == 993177210) {
    player.runScript("拳王爭霸賽開始")
}

if (map.getId() == 993030200) {
    if (1 == npc.askYesNo("是否要離開？")) {
        player.changeMap(993111300)
    }
}
