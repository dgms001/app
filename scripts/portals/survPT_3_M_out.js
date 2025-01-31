let mapId = map.getId();

if (mapId == 993000714) {
    if (player.hasItem(4009340, 1)) {
        player.changeMap(350110600, 1);
        player.loseItem(4009340, 1);
        portal.showHint("因異世界傳送力量太強大,冰雪仗碎片無法承受而毀壞。冰雪杖剩餘的魔力已經依附在你身上。", 250, 5);
    } else {
        portal.showHint("沒有 冰雪杖 , 無法透過異世界之門,在地圖裡面找到雪怪，他會給你通關道具的！", 250, 5);
    }
}
portal.abortWarp();