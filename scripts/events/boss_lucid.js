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

/**
 * Boss: Lucid 路西德
 * @author dgms
 */

let EXIT_MAP = 450004000;
let PHASE_1_DIR = 450004100;
let PHASE_1 = 450004150;
let PHASE_2_DIR = 450004200;
let PHASE_2 = 450004250;
let PHASE_3 = 450004300;
let DEATH_COUNT = 5;
let BOSS_LOG = "boss_lucid";
let party;
let members;
let endTime;
let start;
let totalTime = 0;

let bossHp = 12000000000000 + 12000000000000 + 6000000000000;
var bossid = "露希妲[普通]";
let killPlayer = 0;
var tupoTotal = 0;
var bossname = "露希妲[普通]";
let map;
let end;
let fightTime = 30 * 60 * 1000;//每一輪時間

function init(attachment) {
	party = attachment;

	let map_1 = event.getMap(PHASE_1);
	let map_2 = event.getMap(PHASE_2);
	let map_3 = event.getMap(PHASE_3);
	map = event.getMap(PHASE_3);
	map_1.reset();
	map_2.reset();
	map_3.reset();

	party.changeMap(PHASE_1_DIR, 0);
	members = party.getLocalMembers();

	map_1.showTimer(30 * 60);

	event.startTimer("kick", 30 * 60 * 1000);
	endTime = new Date().getTime() + 30 * 60 * 1000;
	start = new Date().getTime();
	map_3.setIndividualDrop(true);
	event.setVariable("members", members);
	for (let i = 0; i < members.length; i++) {
		if (members[i].getLevel() < 230) {
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

//記錄傷害
function mobHit(player, mob, damage) {
	var mobIds = [8880140, 8880191, 8880167]
	if (mobIds.indexOf(mob.getDataId()) != -1) {
		//記錄傷害
		//player.dropMessage(1,"你打的是三個階段中的其中一個BOSS，記錄本次傷害！"+damage);
		var playerAllDamage = parseFloat(event.getVariable(player.getName() + "傷害"));
		event.setVariable(player.getName() + "傷害", (playerAllDamage + damage))
		//player.dropMessage(1,""+player.getName()+" - 目前傷害為:"+Math.floor((playerAllDamage+damage)/101000000)+"E");
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
		case 8880140://1階段 路西德
			event.setVariable("boss1", true);
			event.stopTimer("ButterflyPhase1");
			event.startTimer("To_Stage_2", 4000);
			break;
		case 8880191://2階段 路西德
			event.setVariable("boss2", true);
			event.startTimer("To_Stage_3", 4000);
			event.stopTimer("ButterflyPhase2");

			break;
		case 8880167:
			/*
			var itemList = [
				//1卷軸
				Array(1, 2048819, 25000, 30000),
				Array(1, 2048820, 25000, 30000),
				Array(1, 2612074, 25000, 30000),
				Array(1, 2612075, 25000, 30000),
				Array(1, 2613062, 25000, 30000),
				Array(1, 2613063, 25000, 30000),
				Array(1, 2615041, 25000, 30000),
				Array(1, 2615042, 25000, 30000),
				Array(1, 2616072, 25000, 30000),
				Array(1, 2616073, 25000, 30000),
				//2專屬
				Array(2, 1132308, 600),

				//3武防 航海
				Array(3, 1582017, 1000),
				Array(3, 1232109, 1000),
				Array(3, 1402251, 1000),
				Array(3, 1302333, 1000),
				Array(3, 1312199, 1000),
				Array(3, 1322250, 1000),
				Array(3, 1412177, 1000),
				Array(3, 1422184, 1000),
				Array(3, 1432214, 1000),
				Array(3, 1442268, 1000),
				Array(3, 1542108, 1000),
				Array(3, 1213017, 1000),
				Array(3, 1212115, 1000),
				Array(3, 1372222, 1000),
				Array(3, 1382259, 1000),
				Array(3, 1552110, 1000),
				Array(3, 1252093, 1000),
				Array(3, 1262017, 1000),
				Array(3, 1282016, 1000),
				Array(3, 1522138, 1000),
				Array(3, 1592019, 1000),
				Array(3, 1452252, 1000),
				Array(3, 1462239, 1000),
				Array(3, 1214017, 1000),
				Array(3, 1242116, 1000),
				Array(3, 1332274, 1000),
				Array(3, 1342101, 1000),
				Array(3, 1362135, 1000),
				Array(3, 1472261, 1000),
				Array(3, 1292017, 1000),
				Array(3, 1272016, 1000),
				Array(3, 1222109, 1000),
				Array(3, 1482216, 1000),
				Array(3, 1492231, 1000),
				Array(3, 1532144, 1000),
				Array(3, 1403017, 1000),
				Array(3, 1004422, 1000),
				Array(3, 1004423, 1000),
				Array(3, 1004424, 1000),
				Array(3, 1004425, 1000),
				Array(3, 1004426, 1000),
				Array(3, 1073030, 1000),
				Array(3, 1073032, 1000),
				Array(3, 1073033, 1000),
				Array(3, 1073034, 1000),
				Array(3, 1073035, 1000),
				Array(3, 1082636, 1000),
				Array(3, 1082637, 1000),
				Array(3, 1082638, 1000),
				Array(3, 1082639, 1000),
				Array(3, 1082640, 1000),
				Array(3, 1102775, 1000),
				Array(3, 1102794, 1000),
				Array(3, 1102795, 1000),
				Array(3, 1102796, 1000),
				Array(3, 1102797, 1000),
				Array(3, 1152174, 1000),
				Array(3, 1152176, 1000),
				Array(3, 1152177, 1000),
				Array(3, 1152178, 1000),
				Array(3, 1152179, 1000),

				//神秘
				Array(3, 1212120, 150),
				Array(3, 1222113, 150),
				Array(3, 1232113, 150),
				Array(3, 1242121, 150),
				Array(3, 1242122, 150),
				Array(3, 1252098, 150),
				Array(3, 1262039, 150),
				Array(3, 1302343, 150),
				Array(3, 1312203, 150),
				Array(3, 1322255, 150),
				Array(3, 1332279, 150),
				Array(3, 1342104, 150),
				Array(3, 1362140, 150),
				Array(3, 1372228, 150),
				Array(3, 1382265, 150),
				Array(3, 1402259, 150),
				Array(3, 1412181, 150),
				Array(3, 1422189, 150),
				Array(3, 1432218, 150),
				Array(3, 1442274, 150),
				Array(3, 1452257, 150),
				Array(3, 1462243, 150),
				Array(3, 1472265, 150),
				Array(3, 1482221, 150),
				Array(3, 1492235, 150),
				Array(3, 1522143, 150),
				Array(3, 1532150, 150),
				Array(3, 1542117, 150),
				Array(3, 1552119, 150),
				Array(3, 1582023, 150),
				Array(3, 1272017, 150),
				Array(3, 1282017, 150),
				Array(3, 1592020, 150),

				//4家具
				// Array(4,2672069,300),
				Array(4, 2671091, 300),
				Array(4, 2671092, 300),
				Array(4, 2671093, 300),
				Array(4, 2671094, 300),
				Array(4, 2671095, 300),
				Array(4, 2671096, 300),
				Array(4, 2671097, 300),
				Array(4, 2672079, 300),

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
			}
			event.setVariable("boss3", true);
			event.stopTimer("ButterflyPhase3");
			event.startTimer("kick", 8 * 1000);
*/
			reward();

			break;
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

function reward() {
	//通關
	endTime = new Date().getTime();
	totalTime = (endTime - start) / 1000;
	//停止倒計時踢出
	event.stopTimer("kick");
	//30秒後踢出
	event.startTimer("kick", 8 * 1000);
	map.showTimer(8);
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
			if (party.getMembersCount() > 1) {
				//player.gainItem(4009004, 2);
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

		} else if (i == 1) {

			//第二名

		} else if (i == 2) {
			//第三名

		}

		if (killPlayer == player.getId()) {
			//擊殺者獎勵
			killId = i;

		}
		//player.runScript("露希妲獎勵[普通]");

		//event.broadcastPlayerNotice(7, "[傷害排名] 排名:"+(i+1)+"  玩家："+player.getName()+"  傷害 ："+damList[i][0]+"  傷害占比 : "+parseFloat(damList[i][0]/datotal)*100+" %"   );
				player.addPQLog(BOSS_LOG);
        player.addEventValue(BOSS_LOG);
	}

	var player = damList[killId][1];
	//+bossLOG
	//event.broadcastPlayerNotice(7, "[擊殺獎勵]通關時間: "+totalTime+" 秒 擊殺 玩家："+damList[killId][1].getName()+"  傷害 ："+damList[killId][0]+"  傷害占比 : "+parseFloat(damList[killId][0]/datotal)*100+" %"   );
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
		case PHASE_1_DIR:
		case PHASE_2_DIR:
		case PHASE_1:
		case PHASE_2:
		case PHASE_3:
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
		case "To_Stage_2":
			party.changeMap(PHASE_2_DIR, 0);
			break;
		case "To_Stage_3":
			event.startTimer("kick", 5 * 60 * 1000);
			endTime = new Date().getTime() + 5 * 60 * 1000;
			party.changeMap(PHASE_3, 0);
			break;
		case "ButterflyPhase1":
			event.getMap(PHASE_1).onLucidButterfly();
			event.startTimer("ButterflyPhase1", 3500);
			break;
		case "ButterflyPhase2":
			event.getMap(PHASE_2).onLucidButterfly();
			event.getMap(PHASE_2).brokenLucidSteps();
			event.startTimer("ButterflyPhase2", 3500);
			break;
		case "ButterflyPhase3":
			event.getMap(PHASE_3).onLucidButterfly();
			event.getMap(PHASE_3).brokenLucidSteps();
			event.startTimer("ButterflyPhase3", 3500);
	}
}

function deinit() {
	event.getMap(PHASE_1).endFieldEvent();
	event.getMap(PHASE_2).endFieldEvent();
	event.getMap(PHASE_3).endFieldEvent();
	for (let i = 0; i < members.length; i++) {
		members[i].setEvent(null);
		members[i].setDeathCount(-1);
	}
}