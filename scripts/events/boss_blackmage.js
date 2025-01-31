/*
 * NeroMS MapleStory server emulator written in Java
 * Copyright (C) 2017-2018  Jackson
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
 * Boss: BlackMage
 * 
 * @author Jackson
 */

let EXIT_MAP = 450012500;

let PHASE_1_DIR = 450013000;
let PHASE_1 = 450013100;

let PHASE_2_DIR = 450013200;
let PHASE_2 = 450013300;

let PHASE_3_DIR = 450013400;
let PHASE_3 = 450013500;

let PHASE_4_DIR = 450013600;
let PHASE_4 = 450013700;

let PHASE_Final = 450013750;

let DEATH_COUNT = 12;

let BOSS_LOG = "boss_blackmage";
let party;
let members;
let endTime;

let start;
//let totalTime=0;
let bossHp = 100000000000000 + 100000000000000 + 100000000000000 + 100000000000000;//1+2+3 階段123 要和map裡面一致 如果有4個階段 3=3+4 不然血量計算會bug
var bossid = "黑魔法師[普通]";
let killPlayer = 0;
function init(attachment) {
	party = attachment;

	let map_1 = event.getMap(PHASE_1);
	let map_2 = event.getMap(PHASE_2);

	let map_3 = event.getMap(PHASE_3);
	let map_4 = event.getMap(PHASE_4);
	let map_final = event.getMap(PHASE_Final);
	map_1.showTimer(30 * 60);
	map_1.reset();
	map_2.reset();
	map_3.reset();
	map_4.reset();
	map_final.reset();

	party.changeMap(PHASE_1_DIR, 0);
	members = party.getLocalMembers();

	event.startTimer("kick", 30 * 60 * 1000);
	endTime = new Date().getTime() + 30 * 60 * 1000;
	start = new Date().getTime();
	map_final.setIndividualDrop(true);
	event.setVariable("members", members);
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
		members[i].modifyMoonlightValue(-100);
	}
}

function mobDied(mob) {
	switch (mob.getDataId()) {
		case 8880505://1阶段 创造&破坏骑士
			event.getMap(PHASE_1).endBMEvent();
			event.setVariable("boss1", true);
			event.startTimer("To_Stage_2", 4000);
			break;
		case 8880502:
			event.getMap(PHASE_2).endBMEvent();
			event.setVariable("boss2", true);
			event.startTimer("To_Stage_3", 4000);
			break;
		case 8880503:
			event.getMap(PHASE_3).endBMEvent();
			event.setVariable("boss3", true);
			event.startTimer("To_Stage_4", 4000);
			break;
		case 8880504:
			event.getMap(PHASE_4).endBMEvent();
			event.setVariable("boss4", true);
			event.startTimer("To_Stage_5", 4000);
			break;
		case 8880518:
			/*
			var itemList = [
				//1卷軸
				Array(1, 2048825, 30000, 30000),
				Array(1, 2048826, 30000, 30000),
				Array(1, 2612080, 30000, 30000),
				Array(1, 2612081, 30000, 30000),
				Array(1, 2613068, 30000, 30000),
				Array(1, 2613069, 30000, 30000),
				Array(1, 2615051, 30000, 30000),
				Array(1, 2615052, 30000, 30000),
				Array(1, 2616216, 30000, 30000),
				Array(1, 2616217, 30000, 30000),

				Array(1, 2048830, 2500, 0),
				Array(1, 2048831, 2500, 0),
				Array(1, 2612082, 2500, 0),
				Array(1, 2612083, 2500, 0),
				Array(1, 2613070, 2500, 0),
				Array(1, 2613071, 2500, 0),
				Array(1, 2615054, 2500, 0),
				Array(1, 2615055, 2500, 0),
				Array(1, 2616218, 2500, 0),
				Array(1, 2616219, 2500, 0),
				//2專屬
				Array(2, 1182285, 5000),

				//3武防
				Array(3, 1004808, 10000),
				Array(3, 1004809, 10000),
				Array(3, 1004810, 10000),
				Array(3, 1004811, 10000),
				Array(3, 1004812, 10000),
				Array(3, 1073158, 10000),
				Array(3, 1073159, 10000),
				Array(3, 1073160, 10000),
				Array(3, 1073161, 10000),
				Array(3, 1073162, 10000),
				Array(3, 1082695, 10000),
				Array(3, 1082696, 10000),
				Array(3, 1082697, 10000),
				Array(3, 1082698, 10000),
				Array(3, 1082699, 10000),
				Array(3, 1102940, 10000),
				Array(3, 1102941, 10000),
				Array(3, 1102942, 10000),
				Array(3, 1102943, 10000),
				Array(3, 1102944, 10000),
				Array(3, 1152197, 10000),
				Array(3, 1152198, 10000),
				Array(3, 1152199, 10000),
				Array(3, 1152200, 10000),
				Array(3, 1152196, 10000),
				Array(3, 1212120, 10000),
				Array(3, 1213018, 10000),
				Array(3, 1214018, 10000),
				Array(3, 1222113, 10000),
				Array(3, 1232113, 10000),
				Array(3, 1242121, 10000),
				Array(3, 1242122, 10000),
				Array(3, 1252098, 10000),
				Array(3, 1262039, 10000),
				Array(3, 1272017, 10000),
				Array(3, 1282017, 10000),
				Array(3, 1292018, 10000),
				Array(3, 1292018, 10000),
				Array(3, 1312203, 10000),
				Array(3, 1322255, 10000),
				Array(3, 1332279, 10000),
				Array(3, 1362140, 10000),
				Array(3, 1372228, 10000),
				Array(3, 1382265, 10000),
				Array(3, 1402259, 10000),
				Array(3, 1403018, 10000),
				Array(3, 1403018, 10000),
				Array(3, 1422189, 10000),
				Array(3, 1432218, 10000),
				Array(3, 1442274, 10000),
				Array(3, 1452257, 10000),
				Array(3, 1462243, 10000),
				Array(3, 1462243, 10000),
				Array(3, 1482221, 10000),
				Array(3, 1492235, 10000),
				Array(3, 1522143, 10000),
				Array(3, 1532150, 10000),
				Array(3, 1542117, 10000),
				Array(3, 1552119, 10000),
				Array(3, 1582023, 10000),
				Array(3, 1592020, 10000),
				Array(3, 1342104, 10000),

				//4家具
				// Array(4,2672069,300),
				Array(4, 2671014, 300),
				Array(4, 2671015, 300),
				Array(4, 2671016, 300),
				Array(4, 2671017, 300),
				Array(4, 2671018, 300),
				Array(4, 2671019, 300),
				Array(4, 2671020, 300),
				Array(4, 2671056, 300),

			];

			for (var i = 0; i < itemList.length; i++) {
				var DROPS1 = Math.floor(Math.random() * 100000);//
				var DROPS2 = Math.floor(Math.random() * 100000);//
				if (itemList[i][0] == 1) {
					if (itemList[i][2] >= DROPS1) {
						mob.dropItem(itemList[i][1]);

						if (itemList[i][3] > DROPS2) {
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
			}*/
			event.getMap(PHASE_Final).endFieldEvent();
			//event.setVariable("boss5", true);
			reward();//死亡加入
	}
}
function mobHit(player, mob, damage) {
	switch (mob.getDataId()) {
		case 8880500:
		case 8880501:
			var mobIds = [8880505, 8880500, 8880502, 8880503, 8880504, 8880518]
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
}

function reward() {
	//通關
	endTime = new Date().getTime();
	totalTime = (endTime - start) / 1000;
	//停止倒計時踢出
	event.stopTimer("kick");
	//30秒後踢出
	event.startTimer("kick", 8 * 1000);
	map_final = event.getMap(PHASE_Final);
	map_final.showTimer(8);
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
				//player.gainItem(4009004, 1);
				var sql = "insert into dgms_bossinfo(bossName, playersName, `time`) values('" + bossid + "','" + player.getName() + "','" + totalTime + "')";
				player.customSqlInsert(sql);
				mm = Math.floor(parseFloat(totalTime) / 60);
				ss = Math.floor(parseFloat(totalTime) % 60);
				event.broadcastPlayerNotice(2, "[" + bossid + "] 玩家 " + player.getName() + "統領隊伍的通關時間  " + mm + " 分 " + ss + " 秒 ");
			} else {
				var sql = "insert into dgms_bossinfo(bossName, playersName, `time`) values('" + bossid + "','" + player.getName() + "','" + totalTime + "')";
				player.customSqlInsert(sql);
				mm = Math.floor(parseFloat(totalTime) / 60);
				ss = Math.floor(parseFloat(totalTime) % 60);
				event.broadcastPlayerNotice(2, "[" + bossid + "] 玩家 " + player.getName() + "統領隊伍的通關時間  " + mm + " 分 " + ss + " 秒 ");
			}
			//player.showSystemMessage("【" + bossid + "】 通關時間 : " + mm + " 分 " + ss + " 秒 ");
		} else if (i == 1) { //第二名

		} else if (i == 2) { //第三名

		}
		if (killPlayer == player.getId()) { //擊殺者獎勵
			killId = i;

		}
		//player.runScript("黑魔法師困難獎勵");
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
		case PHASE_3:
		case PHASE_4:
		case PHASE_1_DIR:
		case PHASE_2_DIR:
		case PHASE_3_DIR:
		case PHASE_4_DIR:
		case PHASE_Final:
			player.showTimer((endTime - new Date().getTime()) / 1000);
			player.showDeathCount();
			break;
		default:
			player.setActionBar(-1);
			player.cancelSkillEffect(80002623);
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

function warpToMap(map, portal) {
	for (let i = 0; i < members.length; i++) {
		members[i].changeMap(map, portal);
	}
}


function timerExpired(key) {
	switch (key) {
		case "kick":
			kick();
			break;
		case "To_Stage_2":
			warpToMap(PHASE_2_DIR, 0);
			break;
		case "To_Stage_3":
			warpToMap(PHASE_3_DIR, 0);
			break;
		case "To_Stage_4":
			warpToMap(PHASE_4_DIR, 0);
			break;
		case "To_Stage_5":
			warpToMap(PHASE_Final, 0);
			break;
	}
}

function deinit() {
	event.getMap(PHASE_1).endBMEvent();
	event.getMap(PHASE_2).endBMEvent();
	event.getMap(PHASE_3).endBMEvent();
	event.getMap(PHASE_4).endBMEvent();
	for (let i = 0; i < members.length; i++) {
		members[i].setEvent(null);
		members[i].setDeathCount(-1);
	}
}