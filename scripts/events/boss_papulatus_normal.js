/*
 * NeroMS MapleStory server emulator written in Java
 * Copyright (C) 2017-2018  Jackson
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
 * Boss: Papulatus
 * @author Jackson
 */

let party;

let MAP_ID = 220080200;
let EXIT_MAP = 220080000;
let mobId = 8500011; //增加
let bossHp = 40000000000; //增加
var bossid = "拉圖斯[普通]";

let killPlayer = 0;
let fightTime = 30 * 60 * 1000; //每一輪時間
let map;
let endTime;
let start;
let end;
let totalTime = 0;
let BOSS_LOG = "boss_papulatus_normal";
var bossname = "拉圖斯[普通]";
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

    let partycount = party.getMembersCount(map.getId(), 1, 300);
    if (partycount == 2) {
        partycount = 1;
    } else if (partycount == 3) {
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
    //mob.setForcedMobStat(150, 1);
    map.spawnMob(mob, 0, 179);
    mob.changeBaseHp(bossHp);
    event.startTimer("makeMob", 30 * 1000);
    event.startTimer("kick", fightTime);
    map.showTimer(fightTime / 1000);
    map.setIndividualDrop(true);
    for (let i = 0; i < members.length; i++) {
        if (members[i].getLevel() < 200) {
            members[i].changeMap(EXIT_MAP);
            members[i].showSystemMessage("等級不足退場");
        }
        if (members[i].getEventValue(BOSS_LOG) > 0) {
            members[i].changeMap(EXIT_MAP);
            members[i].showSystemMessage("該賬號已經進入過了,請明天再來");
        }
        members[i].setEvent(event);
        
        members[i].setDeathCount(DEATH_COUNT);
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
            Array(2, 1022277, 15000),

            //3武防
            // Array(3,1012478,500),

            //4家具
            // Array(4,2671019,300),
            Array(4, 2671119, 300),
            Array(4, 2671120, 300),
            Array(4, 2671121, 300),
            Array(4, 2671122, 300),
            Array(4, 2671123, 300),
            Array(4, 2671124, 300),
            Array(4, 2671125, 300),
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
            //let partycount=party.getMembersCount(map.getId(), 1, 300);
            /*
                        if (player.getEventValue("拉圖斯普通全員獎勵") >= 1) { }
                        else {
                            player.addEventValue("拉圖斯普通全員獎勵", 1, 1);
                            player.gainItem(4032053, 20); //1-6名獎勵
                            player.gainItem(4001713, 10);
                            player.gainItem(4000539, 4);
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
            // player.dropMessage(1, "玩家：" + player.getName() + " 進行了最後一擊:  傷害為" + Math.floor((playerAllDamage + damage)) / 102000000 + " E");
        }

    }
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
    //TODO: is it true that even when a non-leader clicks Nella, the entire
    //party is booted? and that GMS forces party out when only two members
    //remain alive and online?
    switch (destination.getId()) {
        case MAP_ID:
            //player.startQuest(7200, 0, "21/10/19");//Quest Name:Unknown
            player.startQuest(7201, 0, "1"); //Quest Name:Unknown
            player.showSystemMessage("未知的裂痕開啟，被吸進裡面。");
            player.showTimer((endTime - new Date().getTime()) / 1000);
            player.showDeathCount();
            break;
        default:
            //player died and respawned or clicked Nella to leave PQ
            //changeMap is false so player doesn't get re-warped to exit map
            removePlayer(player.getId(), false);
            break;
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

function timerExpired(key) {
    switch (key) {
        case "Event_Action":
            let map_1 = event.getMap(MAP_ID);
            map_1.startFieldEvent();
            break;
        case "kick":
            kick();
            break;
    }
}

function deinit() {
    let map_1 = event.getMap(MAP_ID);
    map_1.endFieldEvent();
    for (let i = 0; i < members.length; i++) {
        members[i].setEvent(null);
        members[i].setDeathCount(-1);
    }
}
