let mapId = map.getId();
let maxCount = 3;//最大圈數就可以領獎

//判斷是否是可以領獎的時間
if (getActiveStatus("雪原跑旗") == 2 || getActiveStatus("雪原跑旗") == 1) {
    if ((getFlagCount() + 1) >= maxCount) {
        //達到最大圈
        //記錄
        player.teleportToPos(3, portal.getId(), sh.newPoint(-2069, 817));
        player.runScript("雪原跑旗獎勵");
        portal.showHint("我是最棒的！完成了挑戰！", 250, 5);
    } else {
        if (mapId == 932200300) {
            player.teleportToPos(3, portal.getId(), sh.newPoint(-2410, 2557));
            portal.showHint("快跑快跑！第一名一定是我的！", 250, 5);
            map.blowWeather(5120000, "[雪原跑旗] " + player.getName() + " 完成第 " + (getFlagCount() + 1) + " 圈了！");
            updateFlagCount(getFlagCount() + 1)
        }
    }
} else {
    portal.showHint("活動時間已過！", 250, 5);
}
portal.abortWarp();


function getFlagCount() {
    var sql = "SELECT count FROM jili_flag WHERE name = '" + player.getName() + "'";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        return result.get("count");
    }
    return 0;
}

function updateFlagCount(count) {
    var sql = "UPDATE jili_flag SET count = '" + count + "'where name = '" + player.getName() + "'";
    player.customSqlUpdate(sql);
}


function getActiveStatus(name) {
    var sql = "SELECT status FROM jili_active_status WHERE activeName = '" + name + "'";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        var stage = result.get("status");
        return stage;
    }
    return 0;
}