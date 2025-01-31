
/**
 * 副本: 計算傷害 擊殺
 * @dgms
 * qq:381991414
 */
let MAP_ID = 921170042;
let EXIT_MAP = 103000000;
let mobId = 9451040;//增加
let bossHp = 3000000000000;//增加
var bossid = "椅子副本";

let killPlayer = 0;
let fightTime = 30 * 60 * 1000;//每一輪時間
let map;
let endTime;
let start;
let end;
let totalTime = 0;
let BOSS_LOG = "ChairPq";
var bossname = "椅子副本";
let DEATH_COUNT = 5;
var tupoTotal = 0;
let members;
function init(attachment) {

    party = attachment;
    start = new Date().getTime();
    event.getMap(MAP_ID).clearMobs();
    party.changeMap(MAP_ID, 0);
    members = party.getLocalMembers();
    map = event.getMap(MAP_ID);
    //召喚BOSS
    //計算血量：突破值總數X 基礎倍數
    bossHp = (tupoTotal + 1) * bossHp;
    let mob = map.makeMob(mobId);
    //mob.setForcedMobStat(250, 10);
    map.spawnMob(mob, -73, 4);
    mob.changeBaseHp(bossHp);
    event.startTimer(makeMob, 5 * 1000);
    event.startTimer("kick", fightTime);
    map.showTimer(fightTime / 1000);
    for (let i = 0; i < members.length; i++) {
        members[i].setEvent(event);
        members[i].addPQLog(BOSS_LOG);
        members[i].setDeathCount(DEATH_COUNT);
        //判斷傷害初始化
        event.setVariable(members[i].getName() + "傷害", 0);
    }
}



function mobDied(mob) {
    if (mobId == mob.getDataId()) {
        //通關
        endTime = new Date().getTime();
        totalTime = (endTime - start) / 1000;
        //停止倒計時踢出
        event.stopTimer("kick");
        //30秒後踢出
        event.startTimer("kick", 8 * 1000);
        map.showTimer(8);
        var damList = [];
        var datotal = 0;
        //做傷害排名
        for (let i = 0; i < members.length; i++) {
            //冒泡排序

            //獲取傷害
            var da = parseFloat(event.getVariable(members[i].getName() + "傷害"));
            datotal += da;
            var arr = new Array(da, members[i]);
            damList.push(arr);
        }
        //拿到數組進行排序
        var temp;
        for (var i = 0; i < damList.length; i++) {
            //j是數組的最後一個角標
            for (var j = damList.length - 1; j > i; j--) {

                if (damList[j][0] > damList[j - 1][0]) {
                    //從後往前進行比較，小數往前，一輪之後最小數就在最前面了
                    temp = damList[j - 1];
                    damList[j - 1] = damList[j];
                    damList[j] = temp;
                }
            }
        }

        //damList此時為從大到小排序
        //event.broadcastPlayerNotice(7, "[傷害排名] 總傷害 " + parseFloat(datotal) + " ");
        var killId = 0;
        for (var i = 0; i < damList.length; i++) {

            var player = damList[i][1];
            //排名獎勵
            if (i == 0) { //第一名
                if (party.getMembersCount() > 1) {
                    player.addPQLog("BOSS里程", 1, 3000);
                    var sql = "insert into dgms_bossinfo(bossName, playersName, `time`) values('" + bossid + "','" + player.getName() + "','" + totalTime + "')";
                    player.customSqlInsert(sql);
                } else {
                    var sql = "insert into dgms_bossinfo(bossName, playersName, `time`) values('" + bossid + "','" + player.getName() + "','" + totalTime + "')";
                    player.customSqlInsert(sql);
                }
            } else if (i == 1) { //第二名

            } else if (i == 2) { //第三名

            }
            if (killPlayer == player.getId()) { //擊殺者獎勵

                killId = i;

            }

            /*if(player.getEventValue("凡雷恩普通全員獎勵")>=2){
            } else {
            player.addEventValue("凡雷恩普通全員獎勵",1,1);
            player.gainItem(4032053, 15); //1-6名獎勵
            player.gainItem(4001713, 10);
            player.gainItem(4000539, 2); 
            }*/

            //event.broadcastPlayerNotice(7, "[傷害排名] 排名:" + (i + 1) + "  玩家：" + player.getName() + "  傷害 ：" + damList[i][0] + "  傷害占比 : " + parseFloat(damList[i][0] / datotal) * 100 + " %");
        }
        var player = damList[killId][1];
        //event.broadcastPlayerNotice(7, "[擊殺獎勵]通關時間: " + totalTime + " 秒 擊殺 玩家：" + damList[killId][1].getName() + "  傷害 ：" + damList[killId][0] + "  傷害占比 : " + parseFloat(damList[killId][0] / datotal) * 100 + " %");
    }
}

//記錄傷害
function mobHit(player, mob, damage) {
    if (mobId == mob.getDataId()) {
        //記錄傷害
        var playerAllDamage = parseFloat(event.getVariable(player.getName() + "傷害"));
        event.setVariable(player.getName() + "傷害", (playerAllDamage + damage))

        //player.dropMessage(1, "玩家：" + player.getName() + " 目前傷害為:" + Math.floor((playerAllDamage + damage)) + "");

        //最後一擊處理
        var datotal = 0;
        //做傷害排名
        for (let i = 0; i < members.length; i++) {
            //冒泡排序

            //獲取傷害
            var da = parseFloat(event.getVariable(members[i].getName() + "傷害"));
            datotal += da;

        }
        if (datotal >= bossHp) {
            //擊殺
            killPlayer = player.getId();
            //player.dropMessage(1, "玩家：" + player.getName() + " 進行了最後一擊:  傷害為" + Math.floor((playerAllDamage + damage)) / 103000000 + " E");
        }

    }
}

function removePlayer(playerId, changeMap) {
    for (let i = 0; i < members.length; i++) {
        if (members[i].getId() == playerId) {
            members[i].setEvent(null);
            if (changeMap)
                members[i].changeMap(EXIT_MAP, "st00");
            members.splice(i, 1);
            break;
        }
    }
    if (members.length <= 0) {
        event.destroyEvent();
    }
}

function playerDisconnected(player) {
    removePlayer(player.getId());
}

function playerChangedMap(player, destination) {
    if (destination.getId() != MAP_ID) {
        removePlayer(player.getId());
    }
}

function partyMemberDischarged(party, player) {
    removePlayer(player.getId());
}

function timerExpired(key) {
    switch (key) {
        case "kick":
            for (let i = 0; i < members.length; i++) {
                members[i].setEvent(null);
                members[i].changeMap(EXIT_MAP);
            }
            event.destroyEvent();
            break;

    }
}


function deinit() {
    event.getMap(MAP_ID).endFieldEvent();
    for (let i = 0; i < members.length; i++) {
        members[i].setEvent(null);
        members[i].setDeathCount(-1);
    }
}
