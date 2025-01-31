/**
 * Boss: Will Hard
 * @author NautMS
 */

let EXIT_MAP = 450007240

let PHASE_1_DIR = 450008100
let PHASE_1 = 450008150

let PHASE_2_DIR = 450008200
let PHASE_2 = 450008250

let PHASE_3_DIR = 450008300
let PHASE_3 = 450008350

let DEATH_COUNT = 5

let BOSS_LOG = "boss_will_hard";
let party
let members
let endTime
let practiceMode = false

let start;
let totalTime = 0;
let bossHp = 200200000000000 + 300000000000000 + 60000000000000;
var bossid = "威爾[困難]";
let killPlayer = 0;
function init(attachment) {
    party = attachment
    event.setPracticeMode(practiceMode)

    event.makeMap(PHASE_1_DIR)
    event.makeMap(PHASE_2_DIR)
    event.makeMap(PHASE_3_DIR)
    let map_1 = event.getMap(PHASE_1)
    let map_2 = event.getMap(PHASE_2)
    let map_3 = event.getMap(PHASE_3)

    map_1.reset()
    map_2.reset()
    map_3.reset()

    members = party.getLocalMembers()
    event.startTimer("kick", 30 * 60 * 1000)
    endTime = new Date().getTime() + 30 * 60 * 1000
    start = new Date().getTime();
    event.setVariable("members", members)
    map_3.setIndividualDrop(true);
    for (let i = 0; i < members.length; i++) {
        if (members[i].getLevel() < 270) {
            members[i].changeMap(EXIT_MAP);
            members[i].showSystemMessage("等級不足退場");
        }
        if (members[i].getEventValue(BOSS_LOG) > 0) {
            members[i].changeMap(EXIT_MAP);
            members[i].showSystemMessage("該賬號已經進入過了,請明天再來");
        }
        members[i].setEvent(event)
        members[i].setDeathCount(DEATH_COUNT)
        members[i].changeMap(PHASE_1_DIR, 5)
        event.setVariable(members[i].getName() + "傷害", 0);
    }
}

function rand(a, b) {
    return ~~(Math.random() * (b - a)) + a
}

function mobDied(mob) {
    switch (mob.getDataId()) {
        case 8880300:
            event.getMap(PHASE_1).showTimer(4)
            event.setVariable("boss1", true)
            event.startTimer("To_Stage_2", 4000)
            break
        case 8880301:
            event.getMap(PHASE_2).showTimer(4)
            event.setVariable("boss2", true)
            event.startTimer("To_Stage_3", 4000)
            break
        case 8880302:
            event.setVariable("boss3", true)
            event.getMap(PHASE_3).showTimer(5 * 60)
            /*
            var itemList = [
                //1卷軸
                Array(1, 2612089, 8000, 30000),
                Array(1, 2612090, 8000, 30000),
                Array(1, 2613076, 8000, 30000),
                Array(1, 2613077, 8000, 30000),
                Array(1, 2615060, 8000, 30000),
                Array(1, 2615061, 8000, 30000),
                Array(1, 2616224, 8000, 30000),
                Array(1, 2616225, 8000, 30000),
                Array(1, 2048848, 8000, 30000),
                Array(1, 2048849 8000, 30000),
                //2專屬
                Array(2, 1162080, 1500),
                Array(2, 1162081, 1500),
                Array(2, 1162082, 1500),
                Array(2, 1162083, 1500),

                Array(2, 2438412, 1500), //核心
                Array(2, 2438412, 1500), //核心
                Array(2, 2438412, 1500), //核心
                Array(2, 2438412, 1500), //核心
                Array(2, 2438412, 1500), //核心

                //3武防
                Array(3, 1004808, 500),
                Array(3, 1004809, 500),
                Array(3, 1004810, 500),
                Array(3, 1004811, 500),
                Array(3, 1004812, 500),
                Array(3, 1073158, 500),
                Array(3, 1073159, 500),
                Array(3, 1073160, 500),
                Array(3, 1073161, 500),
                Array(3, 1073162, 500),
                Array(3, 1082695, 500),
                Array(3, 1082696, 500),
                Array(3, 1082697, 500),
                Array(3, 1082698, 500),
                Array(3, 1082699, 500),
                Array(3, 1102940, 500),
                Array(3, 1102941, 500),
                Array(3, 1102942, 500),
                Array(3, 1102943, 500),
                Array(3, 1102944, 500),
                Array(3, 1152197, 500),
                Array(3, 1152198, 500),
                Array(3, 1152199, 500),
                Array(3, 1152200, 500),
                Array(3, 1152196, 500),
                Array(3, 1212120, 500),
                Array(3, 1213018, 500),
                Array(3, 1214018, 500),
                Array(3, 1222113, 500),
                Array(3, 1232113, 500),
                Array(3, 1242121, 500),
                Array(3, 1242122, 500),
                Array(3, 1252098, 500),
                Array(3, 1262039, 500),
                Array(3, 1272017, 500),
                Array(3, 1282017, 500),
                Array(3, 1292018, 500),
                Array(3, 1292018, 500),
                Array(3, 1312203, 500),
                Array(3, 1322255, 500),
                Array(3, 1332279, 500),
                Array(3, 1362140, 500),
                Array(3, 1372228, 500),
                Array(3, 1382265, 500),
                Array(3, 1402259, 500),
                Array(3, 1403018, 500),
                Array(3, 1403018, 500),
                Array(3, 1422189, 500),
                Array(3, 1432218, 500),
                Array(3, 1442274, 500),
                Array(3, 1452257, 500),
                Array(3, 1462243, 500),
                Array(3, 1462243, 500),
                Array(3, 1482221, 500),
                Array(3, 1492235, 500),
                Array(3, 1522143, 500),
                Array(3, 1532150, 500),
                Array(3, 1542117, 500),
                Array(3, 1552119, 500),
                Array(3, 1582023, 500),
                Array(3, 1592020, 500),
                Array(3, 1342104, 500),

                //4家具
                //Array(4,2672136,200),
                Array(4, 2672083, 300),
                Array(4, 2672084, 300),
                Array(4, 2672085, 300),
                Array(4, 2672168, 300),
                Array(4, 2672169, 300),
                Array(4, 2672170, 300),
                Array(4, 2672086, 300),
                Array(4, 2672087, 300),
                Array(4, 2672088, 300),
                Array(4, 2672089, 300),
                Array(4, 2672094, 300),
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
    map_3 = event.getMap(PHASE_3);
    map_3.showTimer(8);
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
            /*player.gainItem(4032053, 50);
            player.gainItem(4001713, 15);
            player.gainItem(2630512, 1);
            player.gainItem(2633634, 3);
            player.gainItem(4000850, 2);*/
        } else if (i == 1) { //第二名
            /*player.gainItem(4032053, 40);
            player.gainItem(4001713, 12);
            player.gainItem(2630512, 1);
            player.gainItem(2633634, 2);
            player.gainItem(4000850, 1);*/
        } else if (i == 2) { //第三名
            /*player.gainItem(4032053, 30);
            player.gainItem(4001713, 10);
            player.gainItem(2630512, 1);
            player.gainItem(2633634, 1);
            player.gainItem(4000850, 1);*/
        }
        if (killPlayer == player.getId()) { //擊殺者獎勵
            killId = i;

        }
        //player.runScript("威爾獎勵[困難]");
        /*player.gainItem(4032053, 100);
        player.gainItem(4001713, 25);
        player.gainItem(2630512, 2);
        player.gainItem(2633634, 2);
        player.gainItem(4000850, 2);*/
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
            members[i].setEvent(null)
            if (changeMap)
                members[i].changeMap(EXIT_MAP, "st00")
            members.splice(i, 1)
            break
        }
    }
    if (members.length <= 0) {
        event.destroyEvent()
    }
}

function playerDisconnected(player) {
    removePlayer(player.getId(), false)
}

function playerChangedMap(player, destination) {
    switch (destination.getId()) {
        case PHASE_1_DIR:
        case PHASE_2_DIR:
        case PHASE_3_DIR:
            break
        case PHASE_1:
        case PHASE_2:
        case PHASE_3:
            player.showTimer((endTime - new Date().getTime()) / 1000)
            player.showDeathCount()
            break
        default:
            removePlayer(player.getId(), false)
    }
}

function partyMemberDischarged(party, player) {
    if (party.getLeader() == player.getId()) {
        kick()
    } else {
        removePlayer(player.getId(), true)
    }
}

function kick() {
    for (let i = 0; i < members.length; i++) {
        members[i].setEvent(null)
        members[i].changeMap(EXIT_MAP)
    }
    event.destroyEvent()
}

function warpToMap(map, portal) {
    for (let i = 0; i < members.length; i++) {
        members[i].changeMap(map, portal)
    }
}

function timerExpired(key) {
    switch (key) {
        case "kick":
            kick()
            break
        case "To_Stage_2":
            warpToMap(PHASE_2_DIR, 0)
            break
        case "To_Stage_3":
            warpToMap(PHASE_3_DIR, 0)
            break
    }
}

function deinit() {
    for (let i = 0; i < members.length; i++) {
        members[i].setEvent(null)
        members[i].setDeathCount(-1)
    }
}