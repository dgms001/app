/**
 * Bingo
 * @author Yukinoshita
 * @description Bingo
 */
let endTime;
let waitTime = 60000 * 3; //開始bingo活動後等待報名的時間
let endBingoTime = 30 * 60 * 1000; //活動開始後自動銷毀活動的時間
let minSize = 0; //最小報名人數

let WAIT_FIELD = 922290000;
let EVENT_FIELD = 922290100;
let OUT_FIELD = 922290200;

let info = {
    "numberAmount": 70, //報數總數量
    "boardCount": 2, //板子數量，1或2
    "boardX": 5, //板長
    "boardY": 5, //板寬
    "maxStage": 3, //幾輪
    "waitTime": 10000, //幾毫秒後開始下壹輪
    "numberInterval": 2000 //報數間隔
}

function init(attachment) {
    event.setVariable("Players", []);
    event.setVariable("Closed", false);
    event.setVariable("Reward", []);
    endTime = new Date().getTime() + waitTime;
    event.setVariable("endTime", endTime);
    event.startTimer("StartBingo", waitTime);
    event.startTimer("EndBingo", endBingoTime);

}



function timerExpired(key) {
    switch (key) {
        case "StartBingo": {
            event.getMap(EVENT_FIELD).prepareStartBingoEvent(JSON.stringify(info), event);
            let players = event.getVariable("Players");
            if (players.length > minSize) {
                for (let i = 0; i < players.length; i++) {
                    if (players[i] == null) continue;
                    players[i].changeMap(EVENT_FIELD);
                }
                event.setVariable("Closed", true);
            } else {
                event.getMap(WAIT_FIELD).blowWeather(5120014, "人數不足" + minSize + ",活動取消。");
                event.destroyEvent();
            }
            break;
        }
        case "EndBingo": {
            /*
            playercount = event.getVariable("Players");
            for (var i in playercount) {
                var players = playercount[i];
                if (players == null) continue;
                players.changeMap(OUT_FIELD);
            }
            event.destroyEvent();
            break;*/
            var maps = event.getMap(EVENT_FIELD);
            var mplayers = maps.getPlayers();
            for (var u in mplayers) {
                mplayers[u].changeMap(OUT_FIELD);
            }
            event.destroyEvent();
            break;
        }
    }
}

function playerChangedMap(player, destination) {
    switch (destination.getId()) {
        case WAIT_FIELD:
            player.showTimer((endTime - new Date().getTime()) / 1000);
            break;
        case EVENT_FIELD:
            break;
        default:
            removePlayer(player.getId());
            break;

    }
}

/**
 * Bingo活動結果
 * @typedef BingoResult
 * @type {Object}
 * @property {Object[]} rank 
 * @property {string} rank[].name 玩家名字
 * @property {number} rank[].id 玩家ID
 * @property {number} rank[].rank 排名
 * @description Bingo活動報數完畢後會調用此函數
 */


/**
 * Bingo活動結束
 * @param {String} resultJson
 * @description Bingo活動報數完畢後會調用此函數
 */
function endBingo(resultJson) {
    /**
     * @type {BingoResult}
     */
    let json = JSON.parse(resultJson)
    event.setGlobalVariable("BingoResult", json)
    event.stopTimer("EndBingo")
    event.startTimer("EndBingo", 10000)
}

function removePlayer(playerId) {
    let players = event.getVariable("Players");
    for (let i in players) {
        if (players[i].getId() == playerId) {
            players[i].setEvent(null);
            players[i].closeTimer();
            players.splice(i, 1);
            break;
        }
    }

}

function deinit() {
    let players = event.getVariable("Players");
    for (let i = 0; i < players.length; i++) {
        players[i].closeTimer();
        players[i].setEvent(null);
    }
}
