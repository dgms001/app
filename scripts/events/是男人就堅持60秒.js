let EXIT_MAP = 992000000;
let PHASE_1 = 993062200;

let DEATH_COUNT = 0;

let BOSS_LOG = "是男人就堅持60秒";
let party;
let members;
let endTime;
var map;
let map_1;

function init(attachment) {
    party = attachment;
    party.changeMap(PHASE_1, 0);
    members = party.getLocalMembers();
    map_1 = event.getMap(PHASE_1);
    map_1.showTimer(1 * 60);
    map_1.clearMobs();
    event.setVariable("stage", "0")
    endTime = new Date().getTime() + 1 * 60 * 1000;
    event.startTimer("kick", 1 * 60 * 1000);
    event.startTimer("UUI", 1 * 1000);
    event.startTimer("baoshi", 1 * 1000);

    event.setVariable("members", members);
    for (let i = 0; i < members.length; i++) {
        if (members[i].getEventValue("是男人就堅持60秒") >= 10) {
            members[i].showSystemMessage("當日次數已用完");
            members[i].changeMap(992000000);
        }
        members[i].setHp(1);
        members[i].setMp(1);
        //這裡是去除所有技能buff
        members[i].cancelSkillEffect(4001003);
        members[i].cancelSkillEffect(4210015);
        members[i].cancelSkillEffect(4330001);
        members[i].cancelSkillEffect(14001003);
        members[i].cancelSkillEffect(400001023);
        members[i].addEventValue(BOSS_LOG, 1, 1);
        members[i].setDeathCount(DEATH_COUNT);
        members[i].setEvent(event);
    }
}
function sendMsg(msg) {
    for (let i = 0; i < members.length; i++) {
        var shijian = (60 + (endTime - new Date().getTime())) / 1000;
        if (members[i].getHp() <= 0) {
            event.stopTimers();
            event.stopTimer("kick");
            event.stopTimer("UUI");
            event.stopTimer("baoshi");
            members[i].changeMap(992000000);
        }
        members[i].addEventValue("是男人就堅持60秒秒數", 1, 1);
        //members[i].scriptProgressMessage(msg);
        members[i].showSystemMessage(msg);
        members[i].setHp(1);
        members[i].setMp(1);
    }
}

function baoshi() {
    sendMsg("當前副本剩餘時間:" + (60 + (endTime - new Date().getTime())) / 1000 + "秒");
}
function stageClear(stage) {
    event.setVariable("stage" + stage, "clear");
}

function removePlayer(playerId, changeMap) {
    for (let i = 0; i < members.length; i++) {
        if (i == 0) { }
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
        case PHASE_1:
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
    event.stopTimer("check");
    event.stopTimer("baoshi");
    for (let i = 0; i < members.length; i++) {
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
        case "baoshi":
            event.startTimer("baoshi", 1000);
            baoshi();
            break;
        case "check":
            check();
            break;
        case "UUI":
            event.startTimer("UUI", 3000);
            let map_1 = event.getMap(PHASE_1);
            //map_1.createObtacleAtom(0, 5, 65, 67, -430, 500);
            map_1.createObtacleAtom(0, 3, 0x30, 0x33, -430, 500);
            map_1.createObtacleAtom(0, 5, 1, 8, -430, 500);
            map_1.createObtacleAtom(0, 8, 40, 41, -430, 500);
            map_1.createObtacleAtom(0, 5, 65, 67, -430, 500);
            //map_1.createObtacleAtom(0, 5, 65, 67, -430, 500);
            map_1.createObtacleAtom(0, 3, 0x30, 0x33, -430, 500);
            map_1.createObtacleAtom(0, 5, 1, 8, -430, 500);
            map_1.createObtacleAtom(0, 8, 40, 41, -430, 500);
    }
}
function deinit() {
    event.getMap(PHASE_1).endFieldEvent();
    for (let i = 0; i < members.length; i++) {
        members[i].setEvent(null);
        members[i].setDeathCount(-1);
    }
}
