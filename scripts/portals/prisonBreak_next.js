let mapId = map.getId();
switch (mapId) {
    case 921160100:
        party.changeMap(921160200);
        break;
    case 921160200:
        if (map.getEventMobCount() < 1) {
            party.changeMap(921160300);
        } else {
            portal.showHint("請擊敗所有怪物", 250, 5);
        }
        break;
    case 921160400:
        if (map.getEventMobCount() < 1) {
            party.changeMap(921160500);
        } else {
            portal.showHint("請擊敗所有怪物", 250, 5);
        }
        break;
    case 921160500:
        party.changeMap(921160600);
        break;
    case 921160600:
        if (player.hasItem(4001528, 20)) {
            party.loseItem(4001528);
            party.changeMap(921160700);
            portal.showHint("終於逃出來了", 250, 5);
        } else {
            portal.showHint("請擊殺怪物獲取20把監獄鑰匙", 250, 5);
        }
        break;
}
portal.abortWarp();