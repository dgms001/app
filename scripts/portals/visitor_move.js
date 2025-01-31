var mapid = map.getId();
switch (mapid) {
    case 861000050:
        player.changeMap(861000100);
        portal.showHint("擊殺滿65只怪物我就能前往下一關了！", 250, 5);
        break;
    case 861000100:
        if (player.hasItem(4001008, 1)) {
            party.loseItem(4001008);
            party.changeMap(861000200);
            portal.showHint("擊殺滿65只怪物我就能前往下一關了！", 250, 5);
        } else {
            portal.showHint("擊殺滿65只怪物,獲取通行證才能進入下一關", 250, 5);
        }
        break;
    case 861000200:

        if (player.hasItem(4001008, 1)) {
            party.loseItem(4001008);
            party.changeMap(861000300);
            portal.showHint("擊殺BOSS我就能前往下一關了！", 250, 5);
        } else {
            portal.showHint("擊殺滿65只怪物,獲取通行證才能進入下一關", 250, 5);
        }
        break;
    case 861000300:
        if (player.hasItem(4001008, 1)) {
            party.loseItem(4001008);
            party.changeMap(861000400);
            portal.showHint("擊殺滿65只怪物我就能前往下一關了！", 250, 5);
        } else {
            portal.showHint("擊殺BOSS獲取通行證才能進入下一關", 250, 5);
        }
        break;
    case 861000400:

        if (player.hasItem(4001008, 1)) {
            party.loseItem(4001008);
            party.changeMap(861000500);
            portal.showHint("擊殺BOSS我就能前往下一關了！", 250, 5);
        } else {
            portal.showHint("擊殺滿65只怪物,獲取通行證才能進入下一關", 250, 5);
        }
        break;
    case 861000500:
        if (player.hasItem(4001008, 1)) {
            party.loseItem(4001008);
            party.changeMap(861000001);
            portal.showHint("通關啦！", 250, 5);
        }
        break;
}

portal.abortWarp();
