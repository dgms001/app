
/**
 * 副本: 無限火力
 * @dgms
 * qq:381991414
 */
var pointsId = 167210;
var winPoint = 1; //任務全部通過獎勵的段位點。
var p;
let mobList = Array(
    //mobid hp/ time*
    Array(9402280, 50000, 1), //茱麗伊特
    Array(9300515, 1, 2), //魚王
    Array(2600007, 1, 1), //鳥
    Array(2600022, 1, 1), //龍
    Array(2600316, 1, 2), //熊
    Array(2600715, 1, 1), //卡
    Array(2700301, 1, 1), //澳門王
    Array(8645039, 2, 1), //弱化的凱爾頓
    Array(9410142, 1, 1), //澳客
    Array(9410288, 3, 1), //澳幣
    Array(9833739, 1, 1), //騎士
    Array(9800084, 1, 1), //戰船
    Array(9800076, 1, 1), //貝魯加
    Array(9833906, 1, 1), //古代兵
    Array(9401007, 1, 1), //帥逼
    Array(9400748, 1, 1) //福克斯
);
let mobListA = Array(
    //mobid hp/ time*
    Array(8881000, 2, 3) //烏璐斯
);

let bossHpConfig = Array(
    //BOSS血量邏輯控制
    // 第幾層開始 初始血量 每層提高
    Array(1, 1, 1));

let rewardChance = 100; //每關獲得物品的幾率
let rewardRan = Array(
    //每關可能獲得的隨機獎勵
);

let mustLevel = 1; //多少階段一定獲得物品
let mustReward = Array(
    //隨機會獲得一個物品 通關mustLevel關後
);

let player;
let everyTime = 1 * 60 * 1000; //每一輪時間
let REWARD_SCRIPT_NAME = "無限火力獎勵";
let MAP_ID = 910310520;
let LOG = "無限火力";
let random = Math.floor(Math.random() * mobList.length);
let level = 1;
let map;
let bossHp = 25000000000000; //基礎血量 之後*層數
let DEATH_COUNT = 5;
function init(attachment) {
    event.setVariable("state", "1");
    event.setVariable("leader", "true");
    player = attachment;
    let PQLOG = player.getEventValue("火線火力");
    event.getMap(MAP_ID).clearMobs();
    player.changeMap(MAP_ID, 0);
    map = event.getMap(MAP_ID);
    makeMob();
    player.gainItem(4310260, PQLOG);
    player.setDeathCount(DEATH_COUNT);
    player.setEvent(event);
    player.addPQLog(LOG);
    event.startTimer("kick", everyTime * 3);
    map.showTimer(everyTime / 1000 * 3);
    endTime = new Date().getTime() + everyTime;
}
function mobDied(mob) {
    if (mobList[random].indexOf(mob.getDataId()) != -1 || mobListA[0].indexOf(mob.getDataId()) != -1) {
        //通關
        if (player.getEventValue("火線火力") == 9 || player.getEventValue("火線火力") == 19 || player.getEventValue("火線火力") == 29 || player.getEventValue("火線火力") == 39 || player.getEventValue("火線火力") == 49 || player.getEventValue("火線火力") == 59 || player.getEventValue("火線火力") == 69 || player.getEventValue("火線火力") == 79 || player.getEventValue("火線火力") == 89 || player.getEventValue("火線火力") == 99 || player.getEventValue("火線火力") == 109 || player.getEventValue("火線火力") == 119 || player.getEventValue("火線火力") == 129 || player.getEventValue("火線火力") == 139 || player.getEventValue("火線火力") == 149 || player.getEventValue("火線火力") == 159 || player.getEventValue("火線火力") == 169 || player.getEventValue("火線火力") == 179 || player.getEventValue("火線火力") == 189 || player.getEventValue("火線火力") == 199) {
            event.stopTimer("kick");
            event.startTimer("kick", everyTime * 3);
            map.showTimer(everyTime / 1000 * 3);
            endTime = new Date().getTime() + everyTime * 3;
        } else {
            random = Math.floor(Math.random() * mobList.length);
            event.stopTimer("kick");
            event.startTimer("kick", everyTime * mobList[random][2]);
            map.showTimer(everyTime / 1000 * mobList[random][2]);
            endTime = new Date().getTime() + everyTime * mobList[random][2];
        }
        //獎勵
        if (player.getEventValue("火線火力") % mustLevel == 0) {
            let ran = Math.floor(Math.random() * mustReward.length);
            //player.gainItem(4310260,+level);
            player.gainItem(4310260, 1);
            player.addEventValue("火線火力", 1, 300);
            setEventPoints(pointsId, player.getEventValue("火線火力"));
            player.scriptProgressMessage("恭喜您通過第 " + player.getEventValue("火線火力") + " 關!！ 獲得創世寶珠X1");
            makeMob();
        }
        level++;
    }
}

function makeMob() {
    //計算BOSS血量
    if (player.getEventValue("火線火力") == 10 || player.getEventValue("火線火力") == 20 || player.getEventValue("火線火力") == 30 || player.getEventValue("火線火力") == 40 || player.getEventValue("火線火力") == 50 || player.getEventValue("火線火力") == 60 || player.getEventValue("火線火力") == 70 || player.getEventValue("火線火力") == 80 || player.getEventValue("火線火力") == 90 || player.getEventValue("火線火力") == 100 || player.getEventValue("火線火力") == 110 || player.getEventValue("火線火力") == 120 || player.getEventValue("火線火力") == 130 || player.getEventValue("火線火力") == 140 || player.getEventValue("火線火力") == 150 || player.getEventValue("火線火力") == 160 || player.getEventValue("火線火力") == 170 || player.getEventValue("火線火力") == 180 || player.getEventValue("火線火力") == 190 || player.getEventValue("火線火力") == 200) {
        let mob = map.makeMob(8881000);
        mob.setMaxHp((bossHp / 2) * player.getEventValue("火線火力"));
        mob.changeBaseHp((bossHp / 2) * player.getEventValue("火線火力"));
        map.spawnMob(mob, 13, 147);
        return false;
    } else {
        let mobA = map.makeMob(mobList[random][0]);
        mobA.setMaxHp((bossHp / mobList[random][1]) * player.getEventValue("火線火力"));
        mobA.changeBaseHp((bossHp / mobList[random][1]) * player.getEventValue("火線火力"));
        map.spawnMob(mobA, 13, 147);
        return false;
    }

}

function removePlayer(playerId, changeMap) {
    if (player.getEventValue("火線火力") >= 0 && player.getEventValue("火線火力") <= 10) {
        player.resetEventValue("火線火力");
    } else if (player.getEventValue("火線火力") > 10 && player.getEventValue("火線火力") <= 20) {
        player.resetEventValue("火線火力");
        player.addEventValue("火線火力", 10, 300);
        player.showSystemMessage("層數自動保留為10層");
    } else if (player.getEventValue("火線火力") > 20 && player.getEventValue("火線火力") <= 30) {
        player.resetEventValue("火線火力");
        player.addEventValue("火線火力", 20, 300);
        player.showSystemMessage("層數自動保留為20層");
    } else if (player.getEventValue("火線火力") > 30 && player.getEventValue("火線火力") <= 40) {
        player.resetEventValue("火線火力");
        player.addEventValue("火線火力", 30, 300);
        player.showSystemMessage("層數自動保留為30層");
    } else if (player.getEventValue("火線火力") > 40 && player.getEventValue("火線火力") <= 50) {
        player.resetEventValue("火線火力");
        player.addEventValue("火線火力", 40, 300);
        player.showSystemMessage("層數自動保留為40層");
    } else if (player.getEventValue("火線火力") > 50 && player.getEventValue("火線火力") <= 60) {
        player.resetEventValue("火線火力");
        player.addEventValue("火線火力", 50, 300);
        player.showSystemMessage("層數自動保留為50層");
    } else if (player.getEventValue("火線火力") > 60 && player.getEventValue("火線火力") <= 70) {
        player.resetEventValue("火線火力");
        player.addEventValue("火線火力", 60, 300);
        player.showSystemMessage("層數自動保留為60層");
    } else if (player.getEventValue("火線火力") > 70 && player.getEventValue("火線火力") <= 80) {
        player.resetEventValue("火線火力");
        player.addEventValue("火線火力", 70, 300);
        player.showSystemMessage("層數自動保留為70層");
    } else if (player.getEventValue("火線火力") > 80 && player.getEventValue("火線火力") <= 90) {
        player.resetEventValue("火線火力");
        player.addEventValue("火線火力", 80, 300);
        player.showSystemMessage("層數自動保留為80層");
    } else if (player.getEventValue("火線火力") > 90 && player.getEventValue("火線火力") <= 100) {
        player.resetEventValue("火線火力");
        player.addEventValue("火線火力", 90, 300);
        player.showSystemMessage("層數自動保留為90層");
    } else if (player.getEventValue("火線火力") > 100 && player.getEventValue("火線火力") <= 110) {
        player.resetEventValue("火線火力");
        player.addEventValue("火線火力", 100, 300);
        player.showSystemMessage("層數自動保留為100層");
    } else if (player.getEventValue("火線火力") > 110 && player.getEventValue("火線火力") <= 120) {
        player.resetEventValue("火線火力");
        player.addEventValue("火線火力", 110, 300);
        player.showSystemMessage("層數自動保留為110層");
    } else if (player.getEventValue("火線火力") > 120 && player.getEventValue("火線火力") <= 130) {
        player.resetEventValue("火線火力");
        player.addEventValue("火線火力", 120, 300);
        player.showSystemMessage("層數自動保留為120層");
    } else if (player.getEventValue("火線火力") > 130 && player.getEventValue("火線火力") <= 140) {
        player.resetEventValue("火線火力");
        player.addEventValue("火線火力", 130, 300);
        player.showSystemMessage("層數自動保留為130層");
    } else if (player.getEventValue("火線火力") > 140 && player.getEventValue("火線火力") <= 150) {
        player.resetEventValue("火線火力");
        player.addEventValue("火線火力", 140, 300);
        player.showSystemMessage("層數自動保留為140層");
    } else if (player.getEventValue("火線火力") > 150 && player.getEventValue("火線火力") <= 160) {
        player.resetEventValue("火線火力");
        player.addEventValue("火線火力", 150, 300);
        player.showSystemMessage("層數自動保留為150層");
    } else if (player.getEventValue("火線火力") > 160 && player.getEventValue("火線火力") <= 170) {
        player.resetEventValue("火線火力");
        player.addEventValue("火線火力", 160, 300);
        player.showSystemMessage("層數自動保留為160層");
    } else if (player.getEventValue("火線火力") > 170 && player.getEventValue("火線火力") <= 180) {
        player.resetEventValue("火線火力");
        player.addEventValue("火線火力", 170, 300);
        player.showSystemMessage("層數自動保留為170層");
    } else if (player.getEventValue("火線火力") > 180 && player.getEventValue("火線火力") <= 190) {
        player.resetEventValue("火線火力");
        player.addEventValue("火線火力", 180, 300);
        player.showSystemMessage("層數自動保留為180層");
    } else if (player.getEventValue("火線火力") > 190 && player.getEventValue("火線火力") <= 200) {
        player.resetEventValue("火線火力");
        player.addEventValue("火線火力", 190, 300);
        player.showSystemMessage("層數自動保留為190層");
    } else if (player.getEventValue("火線火力") > 200 && player.getEventValue("火線火力") <= 210) {
        player.resetEventValue("火線火力");
        player.addEventValue("火線火力", 200, 300);
        player.showSystemMessage("層數自動保留為200層");
    }
    player.showSystemMessage("已完成，系統將您傳送至墮落都市");
    player.setEvent(null);
    event.destroyEvent();
}

function playerDisconnected(player) {
    player.changeMap(103000000);
    removePlayer(player.getId(), false);
}

function playerChangedMap(player, destination) {

    if (destination.getId() != MAP_ID) {
        removePlayer(player.getId());
    } else {
        player.showTimer((endTime - new Date().getTime()) / 1000);
        player.showDeathCount();
    }
}

function partyMemberDischarged(party, player) {
    player.changeMap(103000000);
    removePlayer(player.getId(), true);
}

function timerExpired(key) {
    switch (key) {
        case "kick":
            player.changeMap(103000000);
            removePlayer(player.getId(), true);
            break;
    }
}

function deinit() {
    event.getMap(MAP_ID).endFieldEvent();
    player.setEvent(null);
}
function getEventPoints(eventid) {
    var sql = " SELECT * FROM eventTimes where eventid = ? and cid = ? ";
    var json = {}
    var resultList = player.customSqlResult(sql, eventid, player.getId());
    var endDate = null;
    for (var i = 0; i < resultList.size(); i++) {
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        json.times = result.get("times");
        json.points = result.get("points");
    }
    return json;
}

function setEventPoints(eventid, points) {
    var json = getEventPoints(eventid);
    if (json.points == null) {
        var sql = "INSERT INTO eventTimes(eventid,cid,cName,points,times,date) VALUES(" + eventid + "," + player.getId() + ",'" + player.getName() + "'," + points + ",0,now())"; // 載入數據
        player.customSqlUpdate(sql);
    } else {
        //var sql = "update eventTimes set points = points+" + parseInt(points) + " where eventid = ? and cid = ? ";
        var sql = "update eventTimes set points = " + parseInt(points) + " where eventid = ? and cid = ? ";
        player.customSqlUpdate(sql, eventid, player.getId());
    }
}
