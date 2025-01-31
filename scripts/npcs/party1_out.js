/**
 * Nella (NPC 9020002)
 * Hidden Street: 1st Accompaniment <1st Stage> (Map 103000800),
 *   Hidden Street: 1st Accompaniment <2nd Stage> (Map 103000801),
 *   Hidden Street: 1st Accompaniment <3rd Stage> (Map 103000802),
 *   Hidden Street: 1st Accompaniment <4th stage> (Map 103000803),
 *   Hidden Street: 1st Accompaniment <Last Stage> (Map 103000804),
 *   Hidden Street: 1st Accompaniment <Bonus> (Map 103000805),
 *   Hidden Street: 1st Accompaniment <Exit> (Map 103000890)
 *
 * Exit NPC to forfeit the Kerning City party quest.
 *
 *
 */

//TODO: GMS-like conversation
if (map.getId() == 910340000) {
    npc.sayNext("那麼下次再見.");
    player.changeMap(103000000, "mid00"); //TODO: shouldn't this be a random portal in Kerning?
    player.loseItem(4001007);
    player.loseItem(4001008);
} else {
    let str;
    if (map.getId() == 910340500)
        str = "你準備好離開這個地圖了嗎？?";
    else
        str = "一旦你離開地圖，你必須重新啟動整個任務如果你想再試一次。你還想離開這裡嗎？";
    if (npc.askYesNo(str) == 1)
        player.changeMap(910340000, "st00");
}