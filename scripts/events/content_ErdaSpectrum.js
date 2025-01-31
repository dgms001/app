exports = {};
/**
 * 艾爾達光譜
 */

let EXIT_MAP = 450001550;


let FIELD_1 = 450001400;
let FIELD_2_1 = 450001450;
let FIELD_2_2 = 450001500;


let BOSS_LOG = "ErdaSpectrum";
let party;
let members;

/**
 * stage1 config
 */
/**
 * 副本時間
 */
let STAGE1_TIME = 20 * 60000;
/**
 * 轉移次數
 */
let CONVEY_COUNT = 10;

/**
 * stage2_1 config
 */
/**
 * 副本時間
 */
let STAGE2_1_TIME = 2 * 60000;
/**
 * 每隔多少秒增加壹次召喚數量
 */
let INC_SEC = 30;
/**
 * 每隔多少秒召喚壹次
 */
let SPAWN_INTERVAL = 5;

/**
 * stage2_2 config
 */
/**
 * 副本時間
 */
let STAGE2_2_TIME = 3 * 60000;

let MAP1;
let MAP2;

let startTime = new Date().getTime();
let level = 255;


function init(attachment) {
    party = attachment;
    members = party.getLocalMembers();
    MAP1 = event.makeMap(FIELD_1);
    event.setVariable("stage", -1);
    let totalLevel = 0;
    for (let i = 0; i < members.length; i++) {
        members[i].setEvent(event);
        members[i].addPQLog(BOSS_LOG);
        totalLevel += members[i].getLevel();
    }
    level = Math.floor(totalLevel / members.length);
    party.changeMap(MAP1);
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
    removePlayer(player.getId(), false);
}

function playerChangedMap(player, destination) {
    switch (destination.getId()) {
        case FIELD_1:
            if (event.getVariable("stage") < 1) {
                event.startTimer("endQuest1", STAGE1_TIME + 2000);
                event.startTimer("startQuest1", 2000);
                event.setVariable("stage", 1);
            }
            break;
        case FIELD_2_1:
            if (event.getVariable("stage") < 2) {
                event.stopTimer("endQuest1");
                event.startTimer("endQuest2_1", STAGE2_1_TIME + 2000);
                event.startTimer("startQuest2_1", 2000);
                event.setVariable("stage", 2);
            }
            break;
        case FIELD_2_2:
            if (event.getVariable("stage") < 2) {
                event.stopTimer("endQuest1");
                event.startTimer("endQuest2_2", STAGE2_2_TIME + 2000);
                event.startTimer("startQuest2_2", 2000);
                event.setVariable("stage", 2);
            }
            break;
        default:
            removePlayer(player.getId(), false);
            break;
    }
}

function partyMemberDischarged(party, player) {
    removePlayer(player.getId(), true);
}

function kick() {
    for (let i = 0; i < members.length; i++) {
        members[i].setEvent(null);
        members[i].changeMap(EXIT_MAP);
    }
    event.destroyEvent();
}

function timerExpired(key) {
    switch (key) {
        case "startQuest1":
            MAP1.startErdaSpectrumQuest(1, level, STAGE1_TIME, CONVEY_COUNT);
            break;
        case "startQuest2_1":
            MAP2.startErdaSpectrumQuest(2, level, STAGE2_1_TIME, INC_SEC, SPAWN_INTERVAL);
            break;
        case "startQuest2_2":
            MAP2.startErdaSpectrumQuest(2, level, STAGE2_2_TIME);
            break;
        case "endQuest1": //Server will invoke this when stage1 is end.
            if (event.getVariable("nextStageInfo") != null) { //if not fail, nextStageInfo is not null
                if (event.getVariable("nextStageInfo")["nextMap"] != null && !isNaN(event.getVariable("nextStageInfo")["nextMap"])) {
                    let nMapId = parseInt(event.getVariable("nextStageInfo")["nextMap"]);
                    if (nMapId == FIELD_2_1) {
                        MAP2 = event.makeMap(FIELD_2_1);
                    } else if (nMapId == FIELD_2_2) {
                        MAP2 = event.makeMap(FIELD_2_2);
                    } else {
                        throw "nextMap ERROR MAP ID!" + nMapId;
                    }
                } else {
                    throw "nextMap ERROR VALUE!";
                }
                for (const m of members) {
                    m.changeMap(MAP2);
                }
            } else {
                MAP1.endErdaSpectrumQuest(1, false);
                kick();
            }
            break;
        case "endQuest2_1": //Server will invoke this when stage2_1 is end.
            MAP2.endErdaSpectrumQuest(2, true); //save score. use character.getIntQuestRecordEx(238, "score") to get it.
            for (let i = 0; i < members.length; i++) {
                members[i].setEvent(null);
                members[i].changeMap(EXIT_MAP);
                members[i].gainItem(4000000, 1);
            }
            event.destroyEvent();
            break;
        case "endQuest2_2": //Server will invoke this when stage2_2 is end.
            MAP2.endErdaSpectrumQuest(2, false);
            for (let i = 0; i < members.length; i++) {
                members[i].setEvent(null);
                members[i].changeMap(EXIT_MAP);
                members[i].gainItem(4000000, 2);
            }
            event.destroyEvent();
            break;
    }
}

function deinit() {
    for (let i = 0; i < members.length; i++) {
        members[i].setEvent(null);
    }
    MAP1.endErdaSpectrumQuest(1, false);
    MAP2 && MAP2.endErdaSpectrumQuest(2, false);
    event.destroyMap(MAP1);
    event.destroyMap(MAP2);
}
