/*
 * NeroMS MapleStory server emulator written in Java
 * Copyright (C) 2017-2022  Dgms
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Boss: Seran
 *
 * @author Dgms
 */

//let EXIT_MAP = 410000670;
let EXIT_MAP = 102000000;

let PHASE_1_DIR = 410006000;
let PHASE_1 = 410006020;

let PHASE_2_DIR = 410006040;
let PHASE_2 = 410006060;

let PHASE_Final = 410006080;

let DEATH_COUNT = 5;
let bossid = "卡洛斯[普通]";
// let BOSS_LOG = "Seren";//boss_kalos
let BOSS_LOG = "boss_kalos_easy";
let party;
let members;
let endTime;
let totalTime = 0;

let killPlayer = 0;
let bossHp = 1075333333333333 + 1000000000000000 + 750000000000000;

function init(attachment) {
    party = attachment;

    let map_1 = event.getMap(PHASE_1);
    let map_2 = event.getMap(PHASE_2);

    let map_final = event.getMap(PHASE_Final);
    map_1.showTimer(30 * 60);
    map_1.reset();
    map_2.reset();
    map_final.reset();
    start = new Date().getTime();
    party.changeMap(PHASE_1_DIR, 0);
    members = party.getLocalMembers();
    let time = 10 * 60 * 1000;
    event.startTimer("kick", time);
    event.startTimer("MapOne", 5000);
    event.startTimer("MapTwo", 5000);
    endTime = new Date().getTime() + time;
    event.setVariable("members", members);
    for (let i = 0; i < members.length; i++) {
        if (members[i].getLevel() < 280) {
            members[i].changeMap(199000000);
            members[i].showSystemMessage("等級不足退場");
        }
        members[i].setEvent(event);
        members[i].addPQLog(BOSS_LOG);
        members[i].setDeathCount(DEATH_COUNT);
        //members[i].modifyMoonlightValue(-100);
    }
}

function mobHit(player, mob, damage) {
    switch (mob.getDataId()) {
        default:
            break;
    }
    var mobIds = [8880820, 8880800, 8880803, 8880808]
    if (mobIds.indexOf(mob.getDataId()) != -1) {
        //記錄傷害
        //player.dropMessage(1,"記錄本次傷害！"+damage);
        var playerAllDamage = parseFloat(event.getVariable(player.getName() + "傷害"));
        event.setVariable(player.getName() + "傷害", (playerAllDamage + damage))
        //player.dropMessage(1,"玩家："+player.getName()+" 目前傷害為:"+Math.floor((playerAllDamage+damage))+"");
        //最後一擊處理
        var datotal = 0;
        //做傷害排名
        for (let i = 0; i < members.length; i++) {
            //獲取傷害
            var da = parseFloat(event.getVariable(members[i].getName() + "傷害"));
            datotal += da;

        }
        if (datotal >= bossHp) {
            //擊殺
            killPlayer = player.getId();
            //player.dropMessage(1,"玩家："+player.getName()+" 進行了最後一擊: 傷害為"+Math.floor((playerAllDamage+damage))/102000000+" E");
        }

    }
}

function mobDied(mob) {
    switch (mob.getDataId()) {
        case 8880820: //1阶段
            event.setVariable("boss1", "Clear");
            event.startTimer("To_Stage_2", 4000);
            for (let i = 0; i < members.length; i++) {
                members[i].showTextEffect("#r#fnNanum Gothic ExtraBold##fs26#卡洛斯永不為奴。", 100, 2500, 4, 0, 0, 1, 4, 0, 0, 0, "", 0);
            }
            break;
        case 8880800:
            warpToMap(PHASE_2, 0);
            let map = event.getMap(PHASE_2);
            map.reset();
            let knightHP = 750000000000000; //65000000000000
            let knight1 = map.makeMob(8880803);
            knight1.changeBaseHp(knightHP);
            //knight1.isBoss();
            //knight1.setMoveAction(4);
            //knight1.setAppearType(-2);
            map.spawnMob(knight1, 464, 398);
            for (let i = 0; i < members.length; i++) {
                members[i].showTextEffect("#r#fnNanum Gothic ExtraBold##fs26#爆發吧!!!力量。", 100, 2500, 4, 0, 0, 1, 4, 0, 0, 0, "", 0);
            }
            break;
        case 8880803:
            event.setVariable("boss2", "Clear");
            event.startTimer("To_Stage_Final", 4000);
            for (let i = 0; i < members.length; i++) {
                members[i].showTextEffect("#r#fnNanum Gothic ExtraBold##fs26#失敗...失敗了嗎?", 100, 2500, 4, 0, 0, 1, 4, 0, 0, 0, "", 0);
            }
            break;
        case 8880808: //第三階段寶箱
            //event.startTimer("kick", 10*1000);
            var itemList = [
                //1卷軸
                Array(1, 2048825, 30000, 30000),
                Array(1, 2048826, 30000, 30000),
                Array(1, 2612080, 30000, 30000),
                Array(1, 2612081, 30000, 30000),
                Array(1, 2613068, 30000, 30000),
                Array(1, 2613069, 30000, 30000),
                Array(1, 2615051, 30000, 30000),
                Array(1, 2615052, 30000, 30000),
                Array(1, 2616216, 30000, 30000),
                Array(1, 2616217, 30000, 30000),
                Array(1, 2634472, 30000, 30000),

                Array(1, 2048830, 500, 0),
                Array(1, 2048831, 500, 0),
                Array(1, 2612082, 500, 0),
                Array(1, 2612083, 500, 0),
                Array(1, 2613070, 500, 0),
                Array(1, 2613071, 500, 0),
                Array(1, 2615054, 500, 0),
                Array(1, 2615055, 500, 0),
                Array(1, 2616218, 500, 0),
                Array(1, 2616219, 500, 0),
                Array(1, 2634472, 500, 0),
                //2專屬 創世武器
                Array(2, 1592022, 500),
                Array(2, 1582044, 500),
                Array(2, 1572010, 500),
                Array(2, 1562010, 500),
                Array(2, 1552130, 500),
                Array(2, 1542128, 500),
                Array(2, 1532157, 500),
                Array(2, 1522152, 500),
                Array(2, 1492245, 500),
                Array(2, 1482232, 500),
                Array(2, 1472275, 500),
                Array(2, 1462252, 500),
                Array(2, 1452266, 500),
                Array(2, 1442285, 500),
                Array(2, 1432227, 500),
                Array(2, 1422197, 500),
                Array(2, 1412189, 500),
                Array(2, 1403022, 500),
                Array(2, 1402268, 500),
                Array(2, 1382274, 500),
                Array(2, 1372237, 500),
                Array(2, 1362149, 500),
                Array(2, 1332289, 500),
                Array(2, 1322264, 500),
                Array(2, 1312213, 500),
                Array(2, 1302355, 500),
                Array(2, 1292022, 500),
                Array(2, 1282040, 500),
                Array(2, 1272040, 500),
                Array(2, 1262051, 500),
                Array(2, 1252106, 500),
                Array(2, 1242141, 500),
                Array(2, 1242139, 500),
                Array(2, 1232122, 500),
                Array(2, 1222122, 500),
                Array(2, 1213022, 500),
                Array(2, 1212129, 500),
                Array(2, 1214022, 500),
                //3武防

                //4家具
                // Array(4,2672069,300),
                Array(4, 2672033, 300),
                Array(4, 2672034, 300),
                Array(4, 2672035, 300),
                Array(4, 2672036, 300),
                Array(4, 2672037, 300),
                Array(4, 2672038, 300),
                Array(4, 2672039, 300),
                Array(4, 2672078, 300),
            ];
            for (var i = 0; i < itemList.length; i++) {
                var DROPS1 = Math.floor(Math.random() * 100000); //
                var DROPS2 = Math.floor(Math.random() * 100000); //
                if (itemList[i][0] == 1) {
                    if (itemList[i][2] >= DROPS1) {
                        mob.dropItem(itemList[i][1]);

                        if (itemList[i][3] > DROPS2) {
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

            reward();
        default:
            break;
    }
}

function reward() {

    //通關
    endTime = new Date().getTime();
    totalTime = (endTime - start) / 1000;
    //停止倒計時踢出
    event.stopTimer("kick");
    //30秒後踢出
    event.startTimer("kick", 60 * 1000);
    map_final = event.getMap(PHASE_Final);
    map_final.showTimer(60);
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
                mm = Math.floor(parseFloat(totalTime) / 60);
                ss = Math.floor(parseFloat(totalTime) % 60);
                event.broadcastPlayerNotice(2, "[" + bossid + "] 玩家 " + player.getName() + "統領隊伍的通關時間  " + mm + " 分 " + ss + " 秒 ");
            } else {
                var sql = "insert into dgms_bossinfo(bossName, playersName, `time`) values('" + bossid + "','" + player.getName() + "','" + totalTime + "')";
                player.customSqlInsert(sql);
                mm = Math.floor(parseFloat(totalTime) / 60);
                ss = Math.floor(parseFloat(totalTime) % 60);
                event.broadcastPlayerNotice(2, "[" + bossid + "] 玩家 " + player.getName() + "統領隊伍的通關時間  " + mm + " 分 " + ss + " 秒 ");
            }
            // player.showSystemMessage("【" + bossid + "】 通關時間 : " + mm + " 分 " + ss + " 秒 ");
        } else if (i == 1) { //第二名
        } else if (i == 2) { //第三名
        }
        if (killPlayer == player.getId()) { //擊殺者獎勵
            killId = i;

        }
        player.runScript("卡洛斯普通獎勵");
        //event.broadcastPlayerNotice(7, "[傷害排名] 排名:" + (i + 1) + "  玩家：" + player.getName() + "  傷害 ：" + damList[i][0] + "  傷害占比 : " + parseFloat(damList[i][0] / datotal) * 100 + " %");
    }
    var player = damList[killId][1];
    //event.broadcastPlayerNotice(7, "[擊殺獎勵]通關時間: " + totalTime + " 秒 擊殺 玩家：" + damList[killId][1].getName() + "  傷害 ：" + damList[killId][0] + "  傷害占比 : " + parseFloat(damList[killId][0] / datotal) * 100 + " %");
}

function removePlayer(playerId, changeMap) {
    for (let i = 0; i < members.length; i++) {
        if (members[i].getId() == playerId) {
            //dissociate event before changing map so playerChangedMap is
            //not called and this method is not called again by the player
            members[i].setEvent(null);
            if (changeMap)
                members[i].changeMap(EXIT_MAP, "st00");
            //collapse the members array so we don't accidentally warp
            //this member again if the leader leaves later.
            members.splice(i, 1);
            break;
        }
    }
    if (members.length <= 0) {
        event.destroyEvent();
    }
}

function playerDisconnected(player) {
    //changeMap is false since all PQ maps force return the player to the exit
    //map on his next login anyway, and we don't want to deal with sending
    //change map packets to a disconnected client
    removePlayer(player.getId(), false);
}

function playerChangedMap(player, destination) {
    switch (destination.getId()) {
        case PHASE_1:
        case PHASE_2:
        case PHASE_1_DIR:
        case PHASE_2_DIR:
        case PHASE_Final:
            player.showTimer((endTime - new Date().getTime()) / 1000);
            player.showDeathCount();
            break;
        default:
            removePlayer(player.getId(), false);
    }
}

function partyMemberDischarged(party, player) {
    if (party.getLeader() == player.getId()) {
        kick();
    } else {
        removePlayer(player.getId(), true);
    }
}

function kick() {
    for (let i = 0; i < members.length; i++) {
        //dissociate event before changing map so playerChangedMap is not
        //called and this method is not called again by the player
        members[i].setEvent(null);
        members[i].changeMap(EXIT_MAP);
    }
    event.destroyEvent();
}

function warpToMap(map, portal) {
    for (let i = 0; i < members.length; i++) {
        members[i].changeMap(map, portal);
    }
}

function timerExpired(key) {
    switch (key) {
        case "kick":
            kick();
            break;
        case "To_Stage_2":
            warpToMap(PHASE_2_DIR, 0);
            break;
        case "To_Stage_Final":
            warpToMap(PHASE_Final, 0);
            break;
        case "Start_Gauge_Refers":
            event.getMap(PHASE_2).startFieldEvent();
            break;
        case "MapOne":
            event.startTimer("MapOne", 5000);
            let map_1 = event.getMap(PHASE_1);
            map_1.createObtacleAtom(10, 15, 84, 84, -330, 500);
            break;
        case "MapTwo":
            event.startTimer("MapTwo", 5000);
            let map_2 = event.getMap(PHASE_2);
            map_2.createObtacleAtom(10, 15, 83, 83, -330, 500);
            break;
    }
}

function deinit() {
    event.getMap(PHASE_1).endFieldEvent();
    event.getMap(PHASE_2).endFieldEvent();
    for (let i = 0; i < members.length; i++) {
        members[i].setEvent(null);
        members[i].setDeathCount(-1);
    }
}
