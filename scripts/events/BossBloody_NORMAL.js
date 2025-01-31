
/**
 * 副本: 計算傷害 擊殺
 * @dgms
 * qq:381991414
 */
let MAP_ID = 105200311;
let EXIT_MAP = 105200000;
let mobId = 8920100; //增加
let mobIdS = 8920102; //增加
let bossHp = 70000000000; //增加
var bossid = "血腥女王[普通]";

let killPlayer = 0;
let fightTime = 30 * 60 * 1000; //每一輪時間
let map;
let endTime;
let start;
let end;
let totalTime = 0;
let BOSS_LOG = "BossBloody_NORMAL";
var bossname = "血腥女王[普通]";
let DEATH_COUNT = 5;
var tupoTotal = 0;
let members;
function init(attachment) {

    party = attachment;
    start = new Date().getTime();
    event.getMap(MAP_ID).clearMobs();
    event.getMap(MAP_ID).resetReactors(); //嘗試加寫 重製反應堆
    party.changeMap(MAP_ID, 0);
    members = party.getLocalMembers();
    map = event.getMap(MAP_ID);
    //召喚BOSS
    //計算血量：突破值總數X 基礎倍數
    let partycount = party.getMembersCount(map.getId(), 1, 300);
    if (partycount == 3) {
        partycount = 1;
    } else if (partycount == 4) {
        partycount = 1;
    } else if (partycount == 5) {
        partycount = 1;
    } else if (partycount == 6) {
        partycount = 1;
    } else {
        partycount = 1;
    }
    bossHp = (tupoTotal + 1) * bossHp * partycount;
    let mob = map.makeMob(mobId);
    //mob.setForcedMobStat(200, 1);
    map.spawnMob(mob, 37, 134);
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
    if (mobId >= mob.getDataId()) {
        /*
        var itemList = [
            //1卷軸
            Array(1, 2048815, 40000, 20000),
            Array(1, 2048816, 40000, 20000),
            Array(1, 2612055, 40000, 20000),
            Array(1, 2612056, 40000, 20000),
            Array(1, 2613048, 40000, 20000),
            Array(1, 2613049, 40000, 20000),
            Array(1, 2615029, 40000, 20000),
            Array(1, 2615030, 40000, 20000),
            Array(1, 2616059, 40000, 20000),
            Array(1, 2616060, 40000, 20000),
            //2專屬

            //3武防
            Array(3, 1003797, 6000),
            Array(3, 1003798, 6000),
            Array(3, 1003799, 6000),
            Array(3, 1003800, 6000),
            Array(3, 1003801, 6000),
            Array(3, 1042254, 6000),
            Array(3, 1042255, 6000),
            Array(3, 1042256, 6000),
            Array(3, 1042257, 6000),
            Array(3, 1042258, 6000),
            Array(3, 1062165, 6000),
            Array(3, 1062166, 6000),
            Array(3, 1062167, 6000),
            Array(3, 1062168, 6000),
            Array(3, 1062169, 6000),

            //4家具
            // Array(4,2672053,300),
            Array(4, 2672146, 300),
            Array(4, 2672147, 300),
            Array(4, 2672148, 300),
            Array(4, 2672149, 300),
            Array(4, 2672150, 300),
            Array(4, 2672151, 300),
            Array(4, 2672152, 300),
            Array(4, 2672188, 300),
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

            }/*
            if (player.getEventValue("血腥皇后普通全員獎勵") >= 1) { }
            else {
                player.addEventValue("血腥皇后普通全員獎勵", 1, 1);
                player.gainItem(4032053, 50);
                player.gainItem(4001713, 30);
                player.gainItem(4000540, 4);
                player.gainItem(2630512, 2);
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
