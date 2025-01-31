try {
    if (map.getEventMobCount() <= 0) {
        player.changeMap(map.getId() + 1000, 0);
        player.runScript("森林副本" + ((map.getId() - 321110000) / 1000 + 1) + "關獎勵")
        portal.abortWarp();
    } else {
        player.showSystemMessage("地圖上還剩餘：" + map.getEventMobCount() + "怪物,請清理之後進入下一關卡.");
        portal.abortWarp();

    }
} catch (e) {
    player.showSystemMessage("怪物還沒清理完成！");
    portal.abortWarp();
}

