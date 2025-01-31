
/* global npc, player, map */

npc.sayNext("現在將會把你送到之前的地圖。");
let [mapId, spawnPoint] = npc.resetRememberedMap("RETURN_MAP");
if (mapId == 999999999) {
    mapId = 100000000;
    spawnPoint = 0;
}
player.changeMap(mapId, spawnPoint);