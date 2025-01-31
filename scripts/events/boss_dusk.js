/*
 * NeroMS MapleStory server emulator written in Java
 * Copyright (C) 2020-2021  Dgms
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
 * Boss: Dusk 虛空之眼
 * @author Dgms
 */

//let EXIT_MAP = 450009301;
let EXIT_MAP = 450009301;

let FIELD_1 = 450009400;

let DEATH_COUNT = 5;

//let BOSS_LOG = "Dusk";

let BOSS_LOG = "boss_dusk";
var bossname = "戴斯克[困難]";
var bossid = "戴斯克[困難]";
let party;
let members;
let endTime;
let start;

let killPlayer = 0;

let bossHp = 4002000000000000;

function init(attachment) {
	party = attachment;
	members = party.getLocalMembers();
	let map_1 = event.getMap(FIELD_1);

	map_1.reset();
	start = new Date().getTime();
	party.changeMap(FIELD_1, "st00");
	map_1.showTimer(30 * 60);

	event.startTimer("kick", 30 * 60 * 1000);
	endTime = new Date().getTime() + 30 * 60 * 1000;
	map_1.setIndividualDrop(true);
	event.setVariable("members", members);
	event.startTimer("summon_obtacle", 4000);

	for (let i = 0; i < members.length; i++) {
		if (members[i].getLevel() < 270) {
			members[i].changeMap(EXIT_MAP);
			members[i].showSystemMessage("等級不足退場");
		}
		if (members[i].getEventValue(BOSS_LOG) > 0) {
			members[i].changeMap(EXIT_MAP);
			members[i].showSystemMessage("該賬號已經進入過了,請明天再來");
		}
		members[i].setEvent(event);

		members[i].setDeathCount(DEATH_COUNT);
		//判斷傷害初始化
		event.setVariable(members[i].getName() + "傷害", 0);
	}
}

function mobHit(player, mob, damage) {//移植 mobid改boss
	var mobIds = [8644650]
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
		case 8644650:
			/*
			var itemList = [
				//1卷軸
				Array(1, 2048825, 8000, 30000),
				Array(1, 2048826, 8000, 30000),
				Array(1, 2612080, 8000, 30000),
				Array(1, 2612081, 8000, 30000),
				Array(1, 2613068, 8000, 30000),
				Array(1, 2613069, 8000, 30000),
				Array(1, 2615051, 8000, 30000),
				Array(1, 2615052, 8000, 30000),
				Array(1, 2616216, 8000, 30000),
				Array(1, 2616217, 8000, 30000),
				//2專屬
				Array(2, 1113306, 1000),

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
				// Array(4,2672069,300),
				Array(4, 2671049, 300),
				Array(4, 2671050, 300),
				Array(4, 2671051, 300),
				Array(4, 2671052, 300),
				Array(4, 2672174, 300),
				Array(4, 2672175, 300),
				Array(4, 2672176, 300),
				Array(4, 2671053, 300),
				Array(4, 2671054, 300),
				Array(4, 2671055, 300),
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
		}*/
			let map_1 = event.getMap(FIELD_1);
			map_1.clearMobs();
			event.setVariable("boss", true);
			map_1.setMapTaggedObjectSmoothVisible("die", false, 0, 0);
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
	event.startTimer("kick", 15 * 1000);
	//map_1 = event.getMap(FIELD_1);
	//map_1.showTimer(8);
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
				//player.gainItem(4009004, 2);
				var sql = "insert into dgms_bossinfo(bossName, playersName, `time`) values('" + bossid + "','" + player.getName() + "','" + totalTime + "')";
				player.customSqlInsert(sql);
				mm = Math.floor(parseFloat(totalTime) / 60);
				ss = Math.floor(parseFloat(totalTime) % 60);
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
		//player.runScript("戴斯克獎勵");
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
			event.stopTimer("summon_obtacle");
			kick();
			break;
		case "summon_obtacle":
			event.startTimer("summon_obtacle", 4000);
			let map_1 = event.getMap(FIELD_1);
			map_1.createObtacleAtom(0, 5, 65, 67, -900, -158);
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