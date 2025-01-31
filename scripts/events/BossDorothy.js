


let DEATH_COUNT = 2;
let FIELD_1 = 992050000;
let EXIT_MAP = 992000000;
let BOSS_LOG = "桃樂絲";
let party;
let map_1;

function init(attachment) {
	 party = attachment;
        members = party.getLocalMembers();
        map_1 = event.getMap(FIELD_1);
		map_1.reset();
		 
		//event.startTimer("SapwnMonster", 2000);
		
		
        party.changeMap(FIELD_1, "st00");
        event.getMap(FIELD_1).showTimer(30 * 60);
	

        event.startTimer("kick", 30 * 60 * 1000);
        endTime = new Date().getTime() + 30 * 60 * 1000;
		
		var mob = map_1.makeMob(9309207);
		mob.changeBaseHp(3000000000000);//30E
        map_1.spawnMob(mob, 445, 184);

        event.setVariable("members", members);
		//event.startTimer("summon_obtacle", 4000);

        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(event);
                members[i].addPQLog(BOSS_LOG);
                members[i].setDeathCount(DEATH_COUNT);
        }
}

function SapwnMonster() {

}

function mobDied(mob) {
        switch (mob.getDataId()) {
                case 9309207:
					for (let i = 0; i < members.length; i++) {
							members[i].gainItem(2430892,1);
							members[i].addPQLog("英雄BOSS懸賞桃樂絲");
						}
					event.getMap(FIELD_1).clearMobs();
                    break;
        }
}

function removePlayer(playerId, changeMap) {
        for (let i = 0; i < members.length; i++) {
                if (members[i].getId() == playerId) {
                        //dissociate event before changing map so playerChangedMap is
                        //not called and this method is not called again by the player
                        members[i].setEvent(null);
                        if (changeMap) {
                                members[i].changeMap(EXIT_MAP, "st00");
                        }
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
                case FIELD_1:
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
	event.getMap(FIELD_1).endFieldEvent();
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(null);
                members[i].setDeathCount(-1);
        }
}


/*var reviveCount = 5;
var Task;

var TimeA = 2400000;
function init() {
	em.setProperty("leader", "true");
	em.setProperty("time", "false");
}

function setup(eim, leaderid) {
	var eim = em.newInstance("BossDorothy" + leaderid);
	eim.setProperty("state", "1");
	eim.setProperty("leader", "false");
	eim.setProperty("time", "true");
	var map = eim.createInstanceMap(992050000);//打怪地圖
	map.resetFully();
	map.killAllMonsters(true);
	var mob = em.getMonster(9309207);//桃樂絲
	var mob1 = em.getMonster(9309126); //火山怪
	var modified = em.newMonsterStats();
	modified.setOExp(mob.getMobExp() * 3);
	modified.setOHp(mob.getMobMaxHp() * 5000);
	modified.setOMp(mob.getMobMaxMp() * 150);
	mob.setOverrideStats(modified);
	eim.registerMonster(mob);
	eim.registerMonster(mob1);
	map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(124, 184));
	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(740, 184));
	eim.startEventTimer(TimeA); // 1 hr
	Task = em.schedule("timing", 1000 * 60, eim);
	em.schedule("spawn", 1000 * 30, eim);
	return eim;
}

function timing(eim) {
	if (eim.getProperty("time") == "true") {
		var map = eim.getMapInstance(0);
		var mob = em.getMonster(9309210);
		eim.registerMonster(mob);
		map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(381, 184));
		Task = em.schedule("timing", 1000 * 50, eim);
	}
}
function spawn(eim) {
	var map = eim.getMapInstance(0);
	var mob2 = em.getMonster(9309206); //拓拓
	var modified = em.newMonsterStats();
	modified.setOExp(mob2.getMobExp() * 2);
	modified.setOHp(mob2.getMobMaxHp() * 2000);
	modified.setOMp(mob2.getMobMaxMp() * 50);
	mob2.setOverrideStats(modified);
	eim.registerMonster(mob2);
	map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(740, 184));
}
function playerEntry(eim, player) {
	for (var i = 0; i < eim.getPlayerCount(); i++) {}
	if (i <= 1) {
		eim.setProperty("Name", "[ 困 難 ] 桃樂絲");
		eim.setProperty("PlayerName", eim.getPlayers().get(0).getName());
	}
	var map = eim.getMapInstance(0);
	player.setReviveCount(reviveCount);
	player.changeMap(map, map.getPortal(0));
	eim.schedule("summonFall", 5000);
	//player.openNpc(9310136,"jiance");
}

function changedMap(eim, player, mapid) {
	if (mapid != 992050000) {
		eim.unregisterPlayer(player);
		player.restReviveCount();
		eim.disposeIfPlayerBelow(100, 910000001);
		eim.setProperty("state", "0");
		em.setProperty("leader", "true");
		eim.setProperty("time", "false");
	}
}

function playerDisconnected(eim, player) {
	return 0;
}

function scheduledTimeout(eim) {
	eim.disposeIfPlayerBelow(100, 910000001);
	eim.setProperty("state", "0");
	em.setProperty("leader", "false");
	eim.setProperty("time", "false");
}

function playerExit(eim, player) {
	eim.unregisterPlayer(player);
	player.restReviveCount();
	if (eim.disposeIfPlayerBelow(100, 910000001)) {
		eim.setProperty("state", "0");
		em.setProperty("leader", "true");
		eim.setProperty("time", "false");
	}
}

function monsterValue(eim, mobId) {
	var map = eim.getMapInstance(0);
	if (mobId == 9309207) {
		if (eim.getProperty("state") == "5") {
			eim.setProperty("time", "false");
			var map = eim.getMapInstance(0);
			var mob = em.getMonster(8920106);
			mob.getStats().setChange(true);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(701, 184));
		} else {
			eim.setProperty("state", "5");
		}
	} else if (mobId == 9309206) {
		if (eim.getProperty("state") == "5") {
			eim.setProperty("time", "false");
			var map = eim.getMapInstance(0);
			var mob = em.getMonster(8920106);
			mob.getStats().setChange(true);
			map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(701, 184));
		} else {
			eim.setProperty("state", "5");
		}
	} else if (mobId == 8920106) {
		eim.setProperty("MiA", Math.floor((TimeA - eim.getTimeLeft()) / (60 * 1000)));
		eim.setProperty("MiX", Math.floor((TimeA - eim.getTimeLeft()) % (60 * 1000) / 1000));
		openNpc(eim, 1540008, "TimCareU");
	}
	return 1;
}
function openNpc(eim, npcid, mode) {
	for (var i = 0; i < eim.getPlayerCount(); i++) {
		eim.getPlayers().get(i).openNpc(npcid, mode);
	}
}
function allMonstersDead(eim) {}

function playerRevive(eim, player) {
	if (player.getReviveCount() > 0) {
		var map = player.getMap();
		//player.heal();
		player.eventRevive(map, map.getPortal(0));
		return true;
	}
	player.addHP(50);
	var map = eim.getMapFactoryMap(105200000);
	player.changeMap(map, map.getPortal(0));
	return true;
}

function summonFall(eim) {
	var state = parseInt(eim.getProperty("state"));
	var time = 4500;
	//eim.broadcastPlayerMsg(5, "生成落石1,state"+state);
	if (state > 0) {
		var map = eim.getMapInstance(0);
		//map.obtacleFall(2, 0x2a, 0x2c);
		//eim.broadcastPlayerMsg(5, "生成落石2");
		map.obtacleFall(4, 0x2a, 0x2c, 45, 500, 1300, 10, 173, 10, 20, 30, 70);
		eim.schedule("summonFall", time);
	}
}

function clearPQ(eim) {
	scheduledTimeout(eim);
}
function leftParty(eim, player) {
	scheduledTimeout(eim)
}
function disbandParty(eim) {
	scheduledTimeout(eim)
}
function playerDead(eim, player) {}
function cancelSchedule() {}
function pickUpItem(eim, player, itemID) {}*/
