
/**
 * 副本: 計算傷害 擊殺
 * @dgms
 * qq:381991414
 */
let MAP_ID = 270051100;
let EXIT_MAP = 270051300;
let mobId = 8820212; //增加
let bossHp = 30500000000; //增加
var bossid = "皮卡啾[困難]";

let killPlayer = 0;
let fightTime = 30 * 60 * 1000; //每一輪時間
let map;
let endTime;
let start;
let end;
let totalTime = 0;
let BOSS_LOG = "boss_pinkbeen_chaos";
var bossname = "皮卡啾[困難]";
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
    //mob.setForcedMobStat(150, 1);
    map.spawnMob(mob, 5, -42);
    mob.changeBaseHp(bossHp);
    event.startTimer("makeMob", 30 * 1000);
    event.startTimer("kick", fightTime);
    map.showTimer(fightTime / 1000);
    map.setIndividualDrop(true);
    for (let i = 0; i < members.length; i++) {
        if (members[i].getLevel() < 220) {
            members[i].changeMap(EXIT_MAP);
            members[i].showSystemMessage("等級不足退場");
        }
        if (members[i].getEventValue(BOSS_LOG) > 0) {
            members[i].changeMap(EXIT_MAP);
            members[i].showSystemMessage("該賬號已經進入過了,請明天再來");
        }
        members[i].setEvent(event);

        members[i].setDeathCount(DEATH_COUNT);
        //判斷傷害初始化
        event.setVariable(members[i].getName() + "傷害", 0);
    }
}

function mobDied(mob) {
    if (mobId == mob.getDataId()) {
        /*
        var itemList = [
            //1卷軸
            Array(1, 2048812, 50000, 30000),
            Array(1, 2048813, 50000, 30000),
            Array(1, 2612019, 50000, 30000),
            Array(1, 2612020, 50000, 30000),
            Array(1, 2613012, 50000, 30000),
            Array(1, 2613013, 50000, 30000),
            Array(1, 2615005, 50000, 30000),
            Array(1, 2615006, 50000, 30000),
            Array(1, 2616000, 50000, 30000),
            Array(1, 2616001, 50000, 30000),
            //2專屬
            //Array(2,1132272,15000),

            //3武防
            // Array(3,1012478,500),

            //4家具
            //Array(4,2672075,300),
            Array(4, 2672005, 300),
            Array(4, 2672006, 300),
            Array(4, 2672007, 300),
            Array(4, 2672008, 300),
            Array(4, 2672009, 300),
            Array(4, 2672010, 300),
            Array(4, 2672011, 300),
            Array(4, 2672086, 300),
        ];
        for (var a = 0; a < 2; a++) {
            for (var i = 0; i < itemList.length; i++) {
                var DROPS1 = Math.floor(Math.random() * 100000); //
                var DROPS2 = Math.floor(Math.random() * 100000); //
                if (itemList[i][0] == 1) {
                    if (itemList[i][2] >= DROPS1) {
                        mob.dropItem(itemList[i][1]);

                        if (itemList[i][3] >= DROPS2) {
                            mob.dropItem(itemList[i][1]);
                        }
                    }

                } else if (itemList[i][0] == 2) {
                    if (itemList[i][2] >= DROPS1) {
                        event.broadcastPlayerNotice(7, "隊長 " + members[0].getName() + "  : 擊殺 " + bossid + " 時，掉落了專屬裝備！");
                        mob.dropItem(itemList[i][1]);
                    }

                } else if (itemList[i][0] == 3) {
                    if (itemList[i][2] >= DROPS1) {

                        mob.dropItem(itemList[i][1]);
                    }
                } else if (itemList[i][0] == 4) {
                    if (itemList[i][2] >= DROPS1) {

                        event.broadcastPlayerNotice(7, "隊長 " + members[0].getName() + "  : 擊殺 " + bossid + " 時，掉落了專屬家具！");
                        mob.dropItem(itemList[i][1]);
                    }
                }
            }
        }*/
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
            /*
            if (player.getEventValue("皮卡啾困難全員獎勵") >= 1) { }
            else {
                player.addEventValue("皮卡啾困難全員獎勵", 1, 1);
                player.gainItem(4032053, 50);
                player.gainItem(4001713, 30);
                player.gainItem(4000539, 6);
                player.addEventValue("BOSS里程", 2, 3000);
                player.addEventValue("總BOSS里程", 2, 3000);
            }*/

            //event.broadcastPlayerNotice(7, "[傷害排名] 排名:" + (i + 1) + "  玩家：" + player.getName() + "  傷害 ：" + damList[i][0] + "  傷害占比 : " + parseFloat(damList[i][0] / datotal) * 100 + " %");
					player.addPQLog(BOSS_LOG);
        player.addEventValue(BOSS_LOG);
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
            //player.dropMessage(1, "玩家：" + player.getName() + " 進行了最後一擊:  傷害為" + Math.floor((playerAllDamage + damage)) / 102000000 + " E");
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
