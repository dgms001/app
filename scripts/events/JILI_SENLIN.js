/**
 * Boss: Dusk 風雨森林
 *
 */

let EXIT_MAP = 302050400;


let DEATH_COUNT = 5;

let BOSS_LOG = "風雨森林";
let party;
let members;
let endTime;
var maps = [
    321110000,
    321111000,
    321112000,
    321113000,
    321114000,
    321115000,
    321116000
];


var map_1, map_2, map_3, map_4, map_5, map_6, map_7;

function init(attachment) {
    party = attachment;
    members = party.getLocalMembers();

    map_1 = event.getMap(maps[0]);
    map_2 = event.getMap(maps[1]);
    map_3 = event.getMap(maps[2]);
    map_4 = event.getMap(maps[3]);
    map_5 = event.getMap(maps[4]);
    map_6 = event.getMap(maps[5]);
    map_7 = event.getMap(maps[6]);
    spawnMobs();
    party.changeMap(maps[0], "st00");
    map_1.showTimer(30 * 60);

    event.startTimer("kick", 30 * 60 * 1000);
    endTime = new Date().getTime() + 30 * 60 * 1000;

    event.setVariable("members", members);
    event.startTimer("summon_obtacle", 4000);
    for (let i = 0; i < members.length; i++) {
        members[i].setEvent(event);
        members[i].addPQLog(BOSS_LOG);
        members[i].setDeathCount(DEATH_COUNT);
    }
}

function makeMob(mobid, hp, x, y, map) {
    var boss = map.makeMob(mobid);
    boss.changeBaseHp(hp);
    boss.setForcedMobStat(210, 2);
    map.spawnMob(boss, x, y);
}

function spawnMobs() {

    map_1.reset();
    makeMob(2700110, 200000000000, 380, -118, map_1);//鬧事者//63333333333333
    makeMob(9390912, 20000000000, 380, -118, map_1);
    makeMob(8230012, 20000000000, 280, -118, map_1);
    makeMob(9390914, 20000000000, 180, -118, map_1);

    map_2.reset();
    makeMob(2700111, 200000000000, 1180, 212, map_2);
    makeMob(9700013, 50000000000, 1019, 212, map_2);
    makeMob(5220003, 20000000000, 916, 212, map_2);
    makeMob(9700017, 20000000000, 816, 212, map_2);

    map_3.reset();
    makeMob(2700112, 200000000000, -217, 392, map_3);//鬧事者
    makeMob(9309059, 20000000000, -117, 392, map_3);
    makeMob(9001026, 20000000000, -17, 392, map_3);
    makeMob(9309061, 20000000000, 17, 392, map_3);

    map_4.reset();
    makeMob(2700113, 20000000000, -306, -58, map_4);
    makeMob(9700034, 20000000000, -206, -58, map_4);
    makeMob(9801023, 4000000000000, 858, 122, map_4);//大蜈蚣
    makeMob(9801023, 20000000000, -406, -58, map_4);//8220025

    map_5.reset();
    makeMob(2700114, 20000000000, 758, 122, map_5);
    makeMob(3401011, 20000000000, 658, 122, map_5);
    makeMob(9801023, 20000000000, 558, 122, map_5);  //
    makeMob(9801023, 6000000000000, 858, 122, map_5);   //蜘蛛女王

    map_6.reset();
    makeMob(2700115, 20000000000, 48, -178, map_6);
    makeMob(2700103, 1000000000000, -147, -178, map_6);
    makeMob(2700102, 12000000000000, -43, -178, map_6);//崔博士
    makeMob(2700102, 6000000000000, 309, -178, map_6);

    map_7.reset();
    makeMob(9800066, 1303333333333333, 177, 392, map_7);
    //makeMob(9402134,1303333333333333,-617, 332,map_7); //63333333333333


}

function mobDied(mob) {
    switch (mob.getDataId()) {
        case 9800066:
            for (let i = 0; i < members.length; i++) {
                members[i].runScript("森林副本7關獎勵");
            }
            break;
        //case 9402134:
        // for (let i = 0; i < members.length; i++) {
        //	 members[i].runScript("森林獎勵");
        //}
        //break;
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
        case maps[0]:
        case maps[1]:
        case maps[2]:
        case maps[3]:
        case maps[4]:
        case maps[5]:
        case maps[6]:
            player.showTimer((endTime - new Date().getTime()) / 1000);
            player.showDeathCount();
            break;
        default:
            //player died and respawned or clicked Nella to leave PQ
            //changeMap is false so player doesn't get re-warped to exit map
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
    }
}

function deinit() {
    for (let i = 0; i < members.length; i++) {
        members[i].setEvent(null);
        members[i].setDeathCount(-1);
    }
}