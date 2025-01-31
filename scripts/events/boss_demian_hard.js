
/**
 * Boss: Demian
 * @author dgms
 */

let EXIT_MAP = 105300303;

let PHASE_1_DIR = 350160160;
let PHASE_1 = 350160100;

let PHASE_2_DIR = 350160120;
let PHASE_2 = 350160140;

let DEATH_COUNT = 5;
let BOSS_LOG = "boss_demian_hard";
let party;
let members;
let endTime;
let start;
let totalTime = 0;
let bossHp = 1200000000000 + 5250000000000;
var bossid = "戴米安[困難]";
let killPlayer = 0;
var bossname = "戴米安[困難]";
var tupoTotal = 0;
let map;
let end;
let fightTime = 30 * 60 * 1000;//每一輪時間
//first_DemianHard1
//first_DemianHard2

function init(attachment) {
        party = attachment;
        party.changeMap(PHASE_1_DIR, 0);
        members = party.getLocalMembers();

        let map_1 = event.getMap(PHASE_1);
        let map_2 = event.getMap(PHASE_2);
        map = event.getMap(PHASE_2);


        map_1.showTimer(30 * 60);
        map_1.clearMobs();
        map_1.resetMobsSpawns();
        map_2.clearMobs();
        map_2.resetMobsSpawns();
        start = new Date().getTime();
        map_1.reset();
        map_2.reset();


        event.startTimer("kick", 30 * 60 * 1000);
        endTime = new Date().getTime() + 30 * 60 * 1000;
        map_2.setIndividualDrop(true);
        event.setVariable("members", members);
        for (let i = 0; i < members.length; i++) {
                if (members[i].getLevel() < 250) {
                        members[i].changeMap(EXIT_MAP);
                        members[i].showSystemMessage("等級不足退場");
                }
                if (members[i].getEventValue(BOSS_LOG) > 0) {
                        members[i].changeMap(EXIT_MAP);
                        members[i].showSystemMessage("該賬號已經進入過了,請明天再來");
                }
                members[i].setEvent(event);

                members[i].setDeathCount(DEATH_COUNT);
                members[i].modifyMoonlightValue(-100);
                //判斷傷害初始化
                event.setVariable(members[i].getName() + "傷害", 0);
        }
}

function mobHit(player, mob, damage) {//移植 mobid 改 boss
        var mobIds = [8880100, 8880101]
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
                        //player.dropMessage(1,"玩家："+player.getName()+" 進行了最後一擊:  傷害為"+Math.floor((playerAllDamage+damage))/101000000+" E");
                }

        }
}
function mobDied(mob) {
        switch (mob.getDataId()) {
                case 8880100://1階段 戴米安
                        event.setVariable("boss1", true);
                        event.startTimer("To_Stage_2", 4000);
                        break;
                case 8880101://2階段 戴米安
                        /*
                                var itemList = [
                                        //1卷軸
                                        Array(1, 2048819, 25000, 30000),
                                        Array(1, 2048820, 25000, 30000),
                                        Array(1, 2612074, 25000, 30000),
                                        Array(1, 2612075, 25000, 30000),
                                        Array(1, 2613062, 25000, 30000),
                                        Array(1, 2613063, 25000, 30000),
                                        Array(1, 2615041, 25000, 30000),
                                        Array(1, 2615042, 25000, 30000),
                                        Array(1, 2616072, 25000, 30000),
                                        Array(1, 2616073, 25000, 30000),
                                        //2專屬
                                        Array(2, 1022278, 1500),
        
                                        //3武防
                                        Array(3, 1582017, 3000),
                                        Array(3, 1232109, 3000),
                                        Array(3, 1402251, 3000),
                                        Array(3, 1302333, 3000),
                                        Array(3, 1312199, 3000),
                                        Array(3, 1322250, 3000),
                                        Array(3, 1412177, 3000),
                                        Array(3, 1422184, 3000),
                                        Array(3, 1432214, 3000),
                                        Array(3, 1442268, 3000),
                                        Array(3, 1542108, 3000),
                                        Array(3, 1213017, 3000),
                                        Array(3, 1212115, 3000),
                                        Array(3, 1372222, 3000),
                                        Array(3, 1382259, 3000),
                                        Array(3, 1552110, 3000),
                                        Array(3, 1252093, 3000),
                                        Array(3, 1262017, 3000),
                                        Array(3, 1282016, 3000),
                                        Array(3, 1522138, 3000),
                                        Array(3, 1592019, 3000),
                                        Array(3, 1452252, 3000),
                                        Array(3, 1462239, 3000),
                                        Array(3, 1214017, 3000),
                                        Array(3, 1242116, 3000),
                                        Array(3, 1332274, 3000),
                                        Array(3, 1342101, 3000),
                                        Array(3, 1362135, 3000),
                                        Array(3, 1472261, 3000),
                                        Array(3, 1292017, 3000),
                                        Array(3, 1272016, 3000),
                                        Array(3, 1222109, 3000),
                                        Array(3, 1482216, 3000),
                                        Array(3, 1492231, 3000),
                                        Array(3, 1532144, 3000),
                                        Array(3, 1403017, 3000),
        
                                        //4家具
                                        //Array(4,2672137,300),
                                        Array(4, 2671028, 300),
                                        Array(4, 2671029, 300),
                                        Array(4, 2671030, 300),
                                        Array(4, 2671031, 300),
                                        Array(4, 2671032, 300),
                                        Array(4, 2671033, 300),
                                        Array(4, 2671034, 300),
                                        Array(4, 2671062, 300),
        
                                ];
                                for (var a = 0; a < 2; a++) {
                                for (var i = 0; i < itemList.length; i++) {
                                        var DROPS1 = Math.floor(Math.random() * 100000);//
                                        var DROPS2 = Math.floor(Math.random() * 100000);//
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
                        }
                                for (let i = 0; i < members.length; i++) {
                                        //members[i].gainItem(2436243,1);
                                }*/
                        reward();
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
                                mm = Math.floor(parseFloat(totalTime) / 60);
                                ss = Math.floor(parseFloat(totalTime) % 60);
                                //event.broadcastPlayerNotice(2, "[" + bossid + "] 玩家 " + player.getName() + "統領隊伍的通關時間  " + mm + " 分 " + ss + " 秒 ");
                        } else {
                                var sql = "insert into dgms_bossinfo(bossName, playersName, `time`) values('" + bossid + "','" + player.getName() + "','" + totalTime + "')";
                                player.customSqlInsert(sql);
                                mm = Math.floor(parseFloat(totalTime) / 60);
                                ss = Math.floor(parseFloat(totalTime) % 60);
                                //event.broadcastPlayerNotice(2, "[" + bossid + "] 玩家 " + player.getName() + "統領隊伍的通關時間  " + mm + " 分 " + ss + " 秒 ");
                        }
                } else if (i == 1) { //第二名

                } else if (i == 2) { //第三名

                }
                if (killPlayer == player.getId()) { //擊殺者獎勵
                        killId = i;

                }
                //player.runScript("戴米安獎勵[困難]");
                //event.broadcastPlayerNotice(7, "[傷害排名] 排名:" + (i + 1) + "  玩家：" + player.getName() + "  傷害 ：" + damList[i][0] + "  傷害占比 : " + parseFloat(damList[i][0] / datotal) * 100 + " %");
						player.addPQLog(BOSS_LOG);
        player.addEventValue(BOSS_LOG);
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
                        player.openUI(1115);
                case PHASE_1_DIR:
                case PHASE_2_DIR:
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

function timerExpired(key) {
        switch (key) {
                case "kick":
                        kick();
                        break;
                case "To_Stage_2":
                        party.changeMap(PHASE_2_DIR, 0);
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