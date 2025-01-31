let mapA = map.getId();
if (mapA != 993013000) { //新手地圖提示
    if (!player.hasItem(2432628, 1)) { //補發拍賣盒子
        player.gainItem(2432628, 1);
    }
}