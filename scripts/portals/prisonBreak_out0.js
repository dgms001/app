let mapId = map.getId();
if (mapId == 921160700) {
    portal.showHint("到這裡已經回不了頭了，請擊敗BOSS！", 250, 5);
} else {
    player.runScript("逃脫出口");

}
portal.abortWarp();