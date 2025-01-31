
let EXIT_MAP = 101000000;


let DEATH_COUNT = 5;

// let BOSS_LOG = "風雨森林";
let BOSS_LOG = "家具副本";
let party;
let count;
let start;
let members;
let endTime;
// var maps = 993162053;
var maps = 993165502;
var XL = [-818, 1100];//
var Y = [-100, 321];//

let itemss1 = 4310315;//入場道具
let itemss2 = 1;
/*
最左  最右 		3236
	
高	低 			709	
*/


var map_1;

function init(attachment) {
        party = attachment;
        members = party.getLocalMembers();

        party.loseItem(itemss1, itemss2);
        start = new Date().getTime();
        map_1 = event.getMap(maps);
        map_1.clearMobs();
        party.changeMap(maps, "st00");
        map_1.showTimer(30 * 60);

        event.startTimer("kick", 30 * 60 * 1000);
        // spawnMobs();
        event.setVariable("spawnMobs", 0);
        event.startTimer("spawnMobs", 2000);
        event.startTimer("spawnMobBOSS", 2000);
        endTime = new Date().getTime() + 30 * 60 * 1000;

        event.setVariable("members", members);
        event.startTimer("summon_obtacle", 4000);
        for (let i = 0; i < members.length; i++) {
                if (members[i].getEventValue(BOSS_LOG) >= 10) {
                        members[i].showSystemMessage("副本進入帳號次數已滿,強制離場.");
                        members[i].changeMap(101000000);
                }
                members[i].setEvent(event);
                //members[i].addEventValue(BOSS_LOG,1,1);
                //members[i].addEventValue(BOSS_LOG+"總次數",1,999);
                // members[i].addPQLog(BOSS_LOG);
                members[i].setDeathCount(DEATH_COUNT);

        }
}

function makeMob(mobid, hp, x, y, map, pw) {
        var boss = map.makeMob(mobid);
        boss.setForcedMobStat(260, pw);
        boss.changeBaseHp(hp);
        map.spawnMob(boss, x, y);
}

function spawnMobs() {
        if (map_1.getEventMobCount() < 30) {
                if (event.getVariable("spawnMobs") == 0) {
                        end = new Date().getTime();
                        let moblevel = (end - start + 60000) / 60000;//算法为1
                        for (var i = 0; i < (30 - map_1.getEventMobCount()); i++) {
                                MOBX = XL[0] + Math.floor(Math.random() * XL[1]);
                                MOBY = Y[0] + Math.floor(Math.random() * Y[1]);
                                mobids = [9300881, 9300882, 9300883, 9300886, 9300887, 9300599, 9300684, 9300685, 9300686, 9300687, 9300688, 9300689, 9300690, 9300702, 9300703, 9300705, 9300706, 9300752, 9300753, 9300754, 9300756, 9300757];//9410037
                                sendMOB = Math.floor(Math.random() * mobids.length);
                                // var mob = map.makeMob(9450025);
                                // //mob.setForcedMobStat(230);
                                //mob.changeBaseHp(1010000000*(moblevel-1)*3);//时间*2HP
                                MOBMAXHP = 90 + (moblevel * 10);
                                makeMob(mobids[sendMOB], MOBMAXHP, MOBX, MOBY, map_1, 50);
                        }
                }
        }
}

function mobDied(mob) {
        // player.dropMessage(1,"玩家："+player.getName()+" 擊殺");
        // if (map_1.getEventMobCount() <= 1) {
        // }
        switch (mob.getDataId()) {
                case 9410513:

                        event.setVariable("spawnMobs", 1);
                        map_1.reset();
                        for (let i = 0; i < members.length; i++) {
                                members[i].showSystemMessage("恭喜通關獲得獎勵！！在10秒後自動離場。");
                                members[i].showProgressMessageFont("恭喜通關獲得獎勵！！在10秒後自動離場。", 0, 30, 16, 10);//MSG,字體,大小,顏色,時間?
                                members[i].runScript("家具道具隨機");
                                members[i].showTimer(8);
                        }
                        event.stopTimer("kick");
                        event.startTimer("kick", 8 * 1000);
                        break;
        }
}

function mobHit(player, mob, damage) {

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
                map_1.reset();
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
                case maps:
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
        map_1.reset();
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

                case "spawnMobBOSS":
                        makeMob(9410513, 200000000000000, -327, -100, map_1, 500);
                        break;
                case "spawnMobs":
                        spawnMobs();
                        event.startTimer("spawnMobs", 3500);
                        break;
        }
}

function deinit() {
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(null);
                members[i].setDeathCount(-1);
        }
}