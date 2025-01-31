/*
 * NeroMS MapleStory server emulator written in Java
 * Copyright (C) 2017-2018  dgms
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

/**次元入侵
 * Boss: Hontale
 * @author dgms
 */
let DEATH_COUNT = 3;

let EXIT_MAP = 103000000;
let FIELD_1 = 940021000;
var mobList = Array(9833382, 9833380, 9833380, 9833382);//隨機一個，每個30只。  一共120只。武陵武功，美杜莎，美杜莎1，美杜莎2，都納斯，歐碧拉
var BossId = 9401065;
var BossId_1 = 9401065;//美杜莎
var BossId_2 = 9401065;//美杜莎9601591
var BossId_3 = 9401065;//美杜莎9601591
var Pos = Array(
	Array(2139, -451),
	Array(3495, -452),
	Array(2053, 29),
	Array(3365, 29)

);//怪物產生的坐標點。

let BOSS_LOG = "次元入侵進場判斷";
let party;
let members;
let endTime;
let map_1;



let itemss = 4001832;	//入場道具
let itemss2 = 5000;		//消耗數量

function init(attachment) {
	party = attachment;

	map_1 = event.getMap(FIELD_1);
	map_1.reset();

	party.changeMap(FIELD_1, 0);
	//party.loseItem(itemss,itemss2)
	members = party.getLocalMembers();
	event.setVariable("state", "0");

	event.startTimer("reSummonMob", 1000 * 10);
	map_1.showTimer(8);
	map_1.reset();
	event.setVariable("members", members);
	event.setVariable("state", "1");//階段1	
	for (let i = 0; i < members.length; i++) {
		members[i].setEvent(event);
		members[i].addPQLog(BOSS_LOG);
		members[i].setDeathCount(DEATH_COUNT);
	}
}

function reSummonMob() {//祭壇
	/* map_1.screenEffect("Visitor/Stage1");
	 map_1.screenEffect("Dojang/start");*/
	event.stopTimer("kick");
	event.startTimer("kick", 1000 * 60);
	map_1.showTimer(60 * 1);
	endTime = new Date().getTime() + 1 * 60 * 1000;

	event.setVariable("state", (parseInt(event.getVariable("state")) + 1));//階段1
	var HP1;
	var stat1;
	if (event.getVariable("state") == 2) {
		HP1 = 1;
		stat1 = 1;
	} else if (event.getVariable("state") == 5) {
		HP1 = 1.33;
		stat1 = 2;
	} else if (event.getVariable("state") == 8) {
		HP1 = 1.66;
		stat1 = 3;
	} else if (event.getVariable("state") == 11) {
		HP1 = 2;
		stat1 = 4;
	} else if (event.getVariable("state") == 14) {
		HP1 = 2.33;
		stat1 = 5;
	} else if (event.getVariable("state") == 17) {
		HP1 = 2.66;
		stat1 = 6;
	} else if (event.getVariable("state") == 20) {
		HP1 = 3;
		stat1 = 7;
	} else if (event.getVariable("state") == 23) {
		HP1 = 3.33;
		stat1 = 8;
	} else if (event.getVariable("state") == 26) {
		HP1 = 3.66;
		stat1 = 9;
	} else if (event.getVariable("state") == 29) {
		HP1 = 4;
		stat1 = 10;
	}
	var boss = map_1.makeMob(2510200);
	boss.changeBaseHp(1030000000000 * HP1);//祭壇
	boss.setForcedMobStat(250, 1 * stat1);
	map_1.spawnMob(boss, 2745, 28);
	for (let i = 0; i < members.length; i++) {
		members[i].showSystemMessage("STATS:" + event.getVariable("state") + ",召喚祭壇");

	}
}

function SpawnWave() {//小怪
	event.setVariable("state", (parseInt(event.getVariable("state")) + 1));//階段1
	////java.lang.System.out.println("----SpawnWave");
	event.stopTimer("kick");
	event.startTimer("kick", 1000 * 60 * 5);
	map_1.showTimer(60 * 5);
	endTime = new Date().getTime() + 5 * 60 * 1000;

	var HP2;
	var stat2;
	if (event.getVariable("state") == 3) {
		HP2 = 1;
		stat2 = 1;
	} else if (event.getVariable("state") == 6) {
		HP2 = 1.33;
		stat2 = 2;
	} else if (event.getVariable("state") == 9) {
		HP2 = 1.66;
		stat2 = 3;
	} else if (event.getVariable("state") == 12) {
		HP2 = 2;
		stat2 = 4;
	} else if (event.getVariable("state") == 15) {
		HP2 = 2.33;
		stat2 = 5;
	} else if (event.getVariable("state") == 18) {
		HP2 = 2.66;
		stat2 = 6;
	} else if (event.getVariable("state") == 21) {
		HP2 = 3;
		stat2 = 7;
	} else if (event.getVariable("state") == 24) {
		HP2 = 3.33;
		stat2 = 8;
	} else if (event.getVariable("state") == 27) {
		HP2 = 3.66;
		stat2 = 9;
	} else if (event.getVariable("state") == 30) {
		HP2 = 4;
		stat2 = 10;
	}
	for (var i = 0; i < 50; i++) {
		var boss = map_1.makeMob(mobList[Math.floor(Math.random() * mobList.length)]);
		boss.changeBaseHp(150000000000 * HP2);//小怪
		boss.setForcedMobStat(250, 1 * stat2);
		map_1.spawnMob(boss, Pos[Math.floor(Math.random() * Pos.length)][0], Pos[Math.floor(Math.random() * Pos.length)][1]);
	}
	for (let i = 0; i < members.length; i++) {
		members[i].showSystemMessage("STATS:" + event.getVariable("state") + ",召喚梅杜莎軍團");
	}

}

function SpwanBoss() {//BOSS
	event.stopTimer("kick");
	event.startTimer("kick", 1000 * 60 * 5);
	map_1.showTimer(60 * 5);
	endTime = new Date().getTime() + 5 * 60 * 1000;
	event.setVariable("state", (parseInt(event.getVariable("state")) + 1));//階段1
	var HP3;
	var stat3;
	if (event.getVariable("state") == 4) {
		HP3 = 1;
		stat3 = 15;
	} else if (event.getVariable("state") == 7) {
		HP3 = 1.33;
		stat3 = 20;
	} else if (event.getVariable("state") == 10) {
		HP3 = 1.66;
		stat3 = 25;
	} else if (event.getVariable("state") == 13) {
		HP3 = 2;
		stat3 = 30;
	} else if (event.getVariable("state") == 16) {
		HP3 = 2.33;
		stat3 = 35;
	} else if (event.getVariable("state") == 19) {
		HP3 = 2.66;
		stat3 = 40;
	} else if (event.getVariable("state") == 22) {
		HP3 = 3;
		stat3 = 45;
	} else if (event.getVariable("state") == 25) {
		HP3 = 3.33;
		stat3 = 50;
	} else if (event.getVariable("state") == 28) {
		HP3 = 3.66;
		stat3 = 55;
	} else if (event.getVariable("state") == 31) {
		HP3 = 4;
		stat3 = 60;
	}
	var boss1 = map_1.makeMob(BossId);
	boss1.changeBaseHp(15000000000000 * HP3);
	boss1.setForcedMobStat(275, 1 * stat3);
	map_1.spawnMob(boss1, 3356, 29);
	var boss2 = map_1.makeMob(BossId_1);
	boss2.changeBaseHp(15000000000000 * HP3);
	boss2.setForcedMobStat(275, 1 * stat3);
	map_1.spawnMob(boss2, 2845, 29);
	var boss3 = map_1.makeMob(BossId_2);
	boss3.changeBaseHp(15000000000000 * HP3);
	boss3.setForcedMobStat(275, 1 * stat3);
	map_1.spawnMob(boss3, 2269, 29);
	var boss4 = map_1.makeMob(BossId_3);
	boss4.changeBaseHp(15000000000000 * HP3);
	boss4.setForcedMobStat(275, 1 * stat3);
	map_1.spawnMob(boss4, 1760, 29);
	for (let i = 0; i < members.length; i++) {
		members[i].showSystemMessage("STATS:" + event.getVariable("state") + ",召喚地獄三頭犬");
	}
}


function mobDied(mob) {
	if (map_1.getEventMobCount() == 0) {
		switch (parseInt(event.getVariable("state"))) {
			case 4://創造祭壇
			case 7:
			case 10:
			case 13:
			case 16:
			case 19:
			case 22:
			case 25:
			case 28:
				for (let i = 0; i < members.length; i++) {
					members[i].runScript("InvasionReward");
				}
				map_1.showTimer(8);//打死BOSS後讀秒  
				event.startTimer("reSummonMob", 1000 * 10);
				break;


			case 2://創造小怪
			case 5:
			case 8:
			case 11:
			case 14:
			case 17:
			case 20:
			case 23:
			case 26:
			case 29:
				////java.lang.System.out.println("----"+event.getVariable("state")+"--------"+ map_1.getEventMobCount());
				SpawnWave();
				break;

			case 3://創造BOSS
			case 6:
			case 9:
			case 12:
			case 15:
			case 18:
			case 21:
			case 24:
			case 27:
			case 30:
				SpwanBoss();
				break;




			case 31://任務完成部分
				for (let i = 0; i < members.length; i++) {
					members[i].runScript("InvasionFinish");
				}
				break;
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
		case FIELD_1:
			//map_1.showTimer((endTime - new Date().getTime()) / 1000);
			//event.setVariable("state", "0");
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
		case "reSummonMob":
			reSummonMob();
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