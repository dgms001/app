/*
 * Boss: GiantBoss
 *
 * @author NautMS
 */

const LOG_NAME = "boss_beidler"
const DEATH_COUNT = 5
/**
 * 时间 30分钟
 */
const TIME = 30 * 60 * 1000
const TIME_P3 = 60 * 1000
const TIME_REWARD = 5 * 60 * 1000

const EXIT_MAP = 863000100
const FIELD_1 = 863010100
const FIELD_2 = 863010500
const FIELD_3 = 863010420
const FIELD_4 = 863010410
const FIELD_5 = 863010400
const FIELD_6 = 863010320
const FIELD_7 = 863010310
const FIELD_8 = 863010300
const FIELD_9 = 863010230
const FIELD_10 = 863010220
const FIELD_11 = 863010210
const FIELD_12 = 863010200
const FIELD_RARM = 863010330
const FIELD_LARM = 863010430
const FIELD_HIP = 863010240
const FIELD_HEAD = 863010600
const FIELD_REWARD = 863010700

const MAP_ID_LIST = [FIELD_1, FIELD_2, FIELD_3, FIELD_4, FIELD_5, FIELD_6, FIELD_7, FIELD_8, FIELD_9, FIELD_10, FIELD_11, FIELD_12, FIELD_LARM, FIELD_RARM, FIELD_HIP, FIELD_HEAD, FIELD_REWARD]

const BOSS_HEAD_P1 = 9390600
const BOSS_HEAD_P2 = 9390601
const BOSS_HEAD_P3 = 9390602
const BOSS_RIGHT_ARM = 9390610
const BOSS_LEFT_ARM = 9390611
const BOSS_HIP = 9390612

/**
 * @type {ScriptPlayer[]}
 */
let members = []
let party;
let endTime;
let limitEnd;

let start;
let totalTime = 0;
let bossHp = 1000000000000 + 1500000000000 + 100000000000;
var bossid = "培羅德[普通]";
let killPlayer = 0;

/**
 * Map instances.
 * @type {Record<number, ScriptField>}
 */
const maps = {}

const GiantBossMapInfo = {
        clearType: 0,
        863010100: 1
}

const BossStat = {
        1: {
                level: 170,
                pdr: 80,
                mdr: 80,
        },
        2: {
                level: 190,
                pdr: 180,
                mdr: 180,
        },
        3: {
                level: 210,
                pdr: 250,
                mdr: 250,
        },
}
const BossHP = {
        1: 1000000000000,
        2: 1500000000000,
        3: 100000000000
}

/**
 * @param party {ScriptParty}
 */
function init(party) {
        members = party.getLocalMembers()

        for (let mapId of MAP_ID_LIST) {
                maps[mapId] = event.makeMap(mapId)
                maps[mapId].reset()
        }
        maps[FIELD_RARM].spawnMob(BOSS_RIGHT_ARM, 5, 68)
        maps[FIELD_LARM].spawnMob(BOSS_LEFT_ARM, 85, 68)
        maps[FIELD_HIP].spawnMob(BOSS_HIP, -4, 87)

        event.setVariable("EventName", "boss_giant")
        start = new Date().getTime();
        event.setVariable("StartTime", Date.now())
        event.startTimer("kick", TIME)
        endTime = Date.now() + TIME
        maps[FIELD_HEAD].setIndividualDrop(true);

        for (let member of members) {
                if (member.getLevel() < 250) {
                        member.changeMap(199000000);
                        member.showSystemMessage("等級不足退場");
                }
                if (member.getEventValue(LOG_NAME) > 2) {
                        member.changeMap(EXIT_MAP);
                        member.showSystemMessage("該賬號已經進入過了,請明天再來");
                }
                member.setEvent(event)
                member.addPQLog(LOG_NAME)
                member.addEventValue(LOG_NAME);
                member.setDeathCount(DEATH_COUNT)
                member.changeMap(FIELD_1)
                event.setVariable(member.getName() + "傷害", 0);

        }
}

/**
 * Triggered when mob died
 * @param mob {ScriptMob}
 */
//記錄傷害
function mobHit(player, mob, damage) {
        var mobIds = [9390600, 9390601, 9390602];//記錄傷害的怪物ID
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


function reward() {
        //通關
        endTime = new Date().getTime();
        totalTime = (endTime - start) / 1000;
        //停止倒計時踢出
        event.stopTimer("kick");
        //30秒後踢出
        event.startTimer("kick", 15 * 1000);

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
        //event.broadcastPlayerNotice(7, "[傷害排名] 總傷害 "+parseFloat(datotal)+" "   );
        var killId = 0;
        for (var i = 0; i < damList.length; i++) {
                var player = damList[i][1];
                //排名獎勵
                if (i == 0) {
                        //第一名
                        var sql = "insert into dgms_bossinfo(bossName, playersName, `time`) values('" + bossid + "','" + player.getName() + "','" + totalTime + "')";
                        player.customSqlInsert(sql);

                } else if (i == 1) {
                        //第二名

                } else if (i == 2) {
                        //第三名

                }

                if (killPlayer == player.getId()) {
                        //擊殺者獎勵
                        killId = i;

                }


                //event.broadcastPlayerNotice(7, "[傷害排名] 排名:"+(i+1)+"  玩家："+player.getName()+"  傷害 ："+damList[i][0]+"  傷害占比 : "+parseFloat(damList[i][0]/datotal)*100+" %"   );
        }

        //擊殺者部分
        //擊殺獎勵
        var player = damList[killId][1];
        //+bossLOG
        //event.broadcastPlayerNotice(7, "[擊殺獎勵]通關時間: "+totalTime+" 秒 擊殺 玩家："+damList[killId][1].getName()+"  傷害 ："+damList[killId][0]+"  傷害占比 : "+parseFloat(damList[killId][0]/datotal)*100+" %"   );
}
function mobDied(mob) {
        let map = maps[mob.getMapId()]
        switch (mob.getDataId()) {
                case BOSS_HEAD_P1: {
                        map.changeGiantBossMapState("phase2-1", 1)
                        map.changeGiantBossMapState("phase2-2", 1)
                        event.setVariable("Killed_Head_P1", true)
                        event.startTimer("SpawnHead2", 0)
                        break
                }
                case BOSS_HEAD_P2: {
                        map.changeGiantBossMapState("phase3", 1)
                        event.setVariable("Killed_Head_P2", true)
                        event.startTimer("SpawnHead3", 0)

                        break
                }
                case BOSS_HEAD_P3: {
                        event.setVariable("Clear", true)
                        event.stopTimer("clock_p3")
                        event.stopTimer("SpawnStone")
                        map.killMobByDataId(9390622)
                        map.killMobByDataId(9390623)
                        event.startTimer("clear", 3000)
                        GiantBossMapInfo[mob.getMapId()] = 2
                        map.showScreenAutoLetterBox("aswan/clearF", 0, -1)
                        map.soundEffect('Party1/Clear')
                        map.fieldSetVariable('863010600', '2')
                        map.fieldSetVariable('clearType', '4')
                        reward();
                        break
                }
                case BOSS_RIGHT_ARM:
                case BOSS_LEFT_ARM:
                case BOSS_HIP: {
                        map.changeGiantBossMapState("phase3", 1)
                        map.changeGiantBossMapState("clear", 1)
                        map.showScreenAutoLetterBox("aswan/clearF", 0, -1)
                        map.soundEffect('Party1/Clear')
                        event.setVariable("Clear_" + mob.getMapId(), true)
                        GiantBossMapInfo[mob.getMapId()] = 2
                        members.forEach(p => p.showGiantBossMiniMap(objToString(GiantBossMapInfo)))
                        break
                }
                default: {
                        let mobSize = map.getEventMobCount()
                        if (mobSize <= 0) {
                                event.setVariable("Clear_" + mob.getMapId(), true)
                                GiantBossMapInfo[mob.getMapId()] = 2
                                members.forEach(p => p.showGiantBossMiniMap(objToString(GiantBossMapInfo)))
                                map.showScreenAutoLetterBox("aswan/clearF", 0, -1)
                                map.soundEffect('Party1/Clear')
                                if (mob.getMapId() == FIELD_4 || mob.getMapId() == FIELD_7) {
                                        map.changeGiantBossMapState("open", 1)
                                        map.changeGiantBossMapState("clear", 1)
                                }
                        }
                        break
                }
        }
}

function removePlayer(playerId, changeMap) {
        for (let i = 0; i < members.length; i++) {
                if (members[i].getId() === playerId) {
                        members[i].setEvent(null)
                        if (changeMap) {
                                members[i].changeMap(EXIT_MAP)
                        }
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

/**
 * Triggered when each player change map.
 *
 * @param player {ScriptPlayer}
 * @param map {ScriptField}
 */
function playerChangedMap(player, map) {
        if (!maps[map.getId()]) {
                removePlayer(player.getId(), false)
                return
        }
        if (!GiantBossMapInfo[map.getId()]) {
                GiantBossMapInfo[map.getId()] = 1
        }
        members.forEach(p => p.showGiantBossMiniMap(objToString(GiantBossMapInfo)))
        player.showTimer((endTime - Date.now()) / 1000)
        player.showDeathCount()
}

function partyMemberDischarged(party, player) {
        removePlayer(player.getId(), true)
}

function kick() {
        for (let i = 0; i < members.length; i++) {
                //dissociate event before changing map so playerChangedMap is not
                //called and this method is not called again by the player
                members[i].setEvent(null)
                members[i].changeMap(EXIT_MAP)
        }
        event.destroyEvent()
}

function timerExpired(key) {
        switch (key) {
                case "kick":
                        kick()
                        break
                case "clock_p3":
                        if (!event.getVariable("Clear")) {
                                kick()
                        }
                        break
                case "clear":
                        event.stopTimer("kick")
                        event.startTimer("kick", TIME_REWARD)
                        endTime = Date.now() + TIME_REWARD
                        members.forEach(p => p.changeMap(FIELD_REWARD))
                        break
                case "SpawnHead1":
                        spawnHead(BOSS_HEAD_P1)
                        break
                case "SpawnHead2":
                        spawnHead(BOSS_HEAD_P2)
                        break
                case "SpawnHead3":
                        spawnHead(BOSS_HEAD_P3)
                        event.setVariable("P3_Start", Date.now())
                        event.setVariable("P3_Duration", TIME_P3)
                        event.startTimer("clock_p3", TIME_P3)
                        maps[FIELD_HEAD].showGiantBossPhase3Clock(TIME_P3, TIME_P3)
                        break
                case "SpawnStone":
                        spawnStone()
                        break
        }
}

function spawnHead(headId) {
        let coreNum = event.getVariable("CoreNum")
        members.forEach(p => p.dropMessage(5, "[GiantBoss] SpawnHead. CoreNum: " + coreNum))
        let map = maps[FIELD_HEAD]
        let boss = map.makeMob(headId)
        if (coreNum > 0) {
                boss.setForcedMobStat(BossStat[coreNum].level)
                boss.getForcedMobStat().setPDRate(BossStat[coreNum].pdr)
                boss.getForcedMobStat().setMDRate(BossStat[coreNum].mdr)
                let totalHp = BossHP[coreNum];
                //let hp = headId == BOSS_HEAD_P3 ? totalHp : totalHp;
                let hp = 1050000000000;
                boss.changeBaseHp(hp)
        }
        map.spawnMob(boss, 5, 61)
        event.startTimer("SpawnStone", 1000)
}

function spawnStone() {
        let map = maps[FIELD_HEAD]
        map.spawnMob(9390622, -650, 62)
        let mob2 = map.makeMob(9390623)
        mob2.setMoveType(-1)
        map.spawnMob(mob2, 650, 62)
        event.startTimer("SpawnStone", 10000)
}

function deinit() {
        for (let member of members) {
                member.setEvent(null)
                member.setDeathCount(-1)
        }
        for (let k in maps) {
                event.destroyMap(maps[k])
                delete maps[k]
        }
}

function objToString(obj) {
        let s = ''
        for (let k in obj) {
                if (s.length) {
                        s += ';'
                }
                s += `${k}=${obj[k]}`
        }
        return s
}
