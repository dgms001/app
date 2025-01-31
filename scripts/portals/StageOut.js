/* global java */

/**
 *
 *
 */

let event = portal.getEvent();
if (event != null) {
    if (getEventValue("aquaris_tower", false) >= 200) {
        portal.abortWarp();
        player.showSystemMessage("今天已經突破了200層，無法再次進入了！");
    } else {
        var stage = parseInt(event.getVariable("stage"));
        var nextStage = stage + 1;
        var next_stage_map = event.getVariable("map" + (stage + 1));
        if (stage % 10 == 5) {
            event.setVariable("stage" + stage, "clear");
            event.setVariable("stage", String(nextStage));
            event.startTimer("kick", player.getIntQuestRecordEx(42011, "time"));
            portal.playPortalSE();
            player.changeMap(next_stage_map);
        } else {
            if (stage == 12 || stage == 17 || stage == 22 || stage == 23 || stage == 27 || stage == 41 || stage == 44) {
                event.setVariable("stage" + stage, "clear");
                player.screenEffect("quest/party/clear");
                map.blowWeatherEffectNotice("你現在可以前往下一層了。", 147, 15000);
            }
            if (stage == 13) {
                event.stopTimer("S13_SetObstacle");
            }
            if ("clear".equals(event.getVariable("stage" + stage))) {
                if (nextStage % 10 == 5) {
                    event.stopTimer("kick"); //停止計時器
                }
                modifyQuestPoint(42003, 10 * stage);//透過關卡 獲得 起源點數
                if (map.getId() == 992050000) {//完成了起源最後一階段
                    player.changeMap(992000000, 0);//傳送回大廳
                } else {
                    updateTime(stage);//更新起源計時器時間
                    event.setVariable("stage", String(nextStage));
                    //pi.updateTowerRank(stage, (totalTime - time) / 1000);
                    var myStage = Math.max(player.getIntQuestRecordEx(42001, "stage"), Math.min(stage, 50));//比較獲取透過的最高階段
                    player.updateQuestRecordEx(42001, "stage", String(myStage));//記錄透過的最高階段
                    setEventValue("aquaris_tower", 1);//增加起源突破層數記錄
                    portal.playPortalSE();
                    player.changeMap(next_stage_map);
                }
            } else {
                portal.abortWarp();
                player.showSystemMessage("你還沒有完成本層的通關目標！" + stage);
            }
        }

    }
} else {
    portal.abortWarp();
    player.showSystemMessage("錯誤，請反饋給管理員。");
}


function updateTime(stage) {
    var rData = player.getQuestRecordEx(42011, "time");
    var tData = player.getQuestRecordEx(42011, "totalTime");
    var startData = player.getQuestRecordEx(42011, "start");

    var remainTime = parseInt(rData);//剩餘時長
    var totalTime = parseInt(tData);//初始總時長
    var startTime = parseInt(startData);//階段開始的時間
    var diffTime = new Date().getTime() - startTime;//當前階段消耗的時間（毫秒）
    remainTime -= diffTime;//剩餘時間 計算
    var nStageTime = (totalTime - remainTime) / 1000;//從開始到當前階段所花費時間
    player.updateQuestRecordEx(42011, "time", String(remainTime));//更新剩餘時間
    player.updateTowerRank(stage, nStageTime);
}


function getQuestPoint(questId) {
    return player.getIntQuestRecordEx(questId, "point");
}

function modifyQuestPoint(questId, num) {
    player.updateQuestRecordEx(questId, "point", String(getQuestPoint(questId) + num));
    player.showSystemMessage((num < 0 ? "消耗了 " : "增加了 ") + Math.abs(num) + " 起源點數，剩餘起源點數：" + getQuestPoint(questId));
}


//flag = true 查總的不重置
//flag = false 查當天的
function getEventValue(event1, flag) {
    var charInfo = getCharInfo();
    if (flag) {
        var sql = "SELECT SUM(value) AS numbe FROM zz_xr_event WHERE accounts_id = " + parseInt(charInfo.accounts_id) + " and event = '" + event1 + "' and world =" + parseInt(charInfo.world) + " ";
    } else {
        var sql = "SELECT SUM(value) AS numbe FROM zz_xr_event WHERE accounts_id = " + parseInt(charInfo.accounts_id) + " and event = '" + event1 + "' and world =" + parseInt(charInfo.world) + " AND DATE_FORMAT(time, '%Y-%m-%d') = DATE_FORMAT(NOW(), '%Y-%m-%d') ";
    }
    var resultList = player.customSqlResult(sql);
    var count = 0;
    for (var i = 0; i < resultList.size(); i++) {
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        count = result.get("numbe");
        if (count == null) {
            count = 0;
        }
    }
    return parseInt(count);
}

function setEventValue(event1, value1) {
    var charInfo = getCharInfo();
    var sql = "INSERT INTO zz_xr_event(accounts_id, world, `event`,`value`,time) VALUES(" + charInfo.accounts_id + "," + charInfo.world + ",'" + event1 + "'," + value1 + ",now())";
    player.customSqlInsert(sql);
}

function getCharInfo() {
    var sql = "SELECT accountid accounts_id,world FROM characters WHERE id = " + player.getId() + "";
    var resultList = player.customSqlResult(sql);
    var charInfo = {};
    for (var i = 0; i < resultList.size(); i++) {
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        charInfo.accounts_id = result.get("accounts_id");
        charInfo.world = result.get("world");
    }
    return charInfo;
}