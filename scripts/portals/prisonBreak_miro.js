let mapId = map.getId();
let maps = Array(921160300, 921160310, 921160320, 921160330, 921160340, 921160350, 921160350, 921160350)
let index = Math.floor(Math.random() * maps.length);
switch (mapId) {
    case 921160350:
        if (map.getEventMobCount() < 1) {
            party.changeMap(921160400);
            portal.showHint("終於走出來了", 250, 5);
        } else {
            portal.showHint("請擊敗所有怪物", 250, 5);
        }
        break;
    default:
        player.changeMap(maps[index]);
        if (maps[index] == 921160350) {
            portal.showHint("我看到了希望", 250, 5);
        } else {
            portal.showHint("再找找出去的路吧", 250, 5);
        }
        break;
}
portal.abortWarp();