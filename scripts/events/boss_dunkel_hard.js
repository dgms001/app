/**
 * 副本: 計算傷害 擊殺
 * @dgms
 * qq:381991414
 */
let MAP_ID = 450012250;
let EXIT_MAP = 450012200;
let mobId = 8645066;//增加
let bossHp = 3000000000000000;//增加
var bossid = "頓凱爾[困難]";

let killPlayer = 0;
let fightTime = 30 * 60 * 1000;//每一輪時間
let map;
let endTime;
let start;
let end;
let totalTime = 0;
let BOSS_LOG = "boss_dunkel_hard";
var bossname = "頓凱爾[困難]";
let DEATH_COUNT = 5;
var tupoTotal = 0;
let members;
function init(attachment) {

	party = attachment;
	start = new Date().getTime();
	event.getMap(MAP_ID).clearMobs();
	party.changeMap(MAP_ID, 0);
	members = party.getLocalMembers();
	map = event.getMap(MAP_ID);
	//召喚BOSS
	//計算血量：突破值總數X 基礎倍數
	let partycount = party.getMembersCount(map.getId(), 1, 300);
	if (partycount == 3) {
		partycount = 1;
	} else if (partycount == 4) {
		partycount = 1;
	} else if (partycount == 5) {
		partycount = 1;
	} else if (partycount == 6) {
		partycount = 1;
	} else {
		partycount = 1;
	}
	bossHp = (tupoTotal + 1) * bossHp * partycount;
	let mob = map.makeMob(mobId);
	mob.changeBaseHp(bossHp);
	//mob.setForcedMobStat(250, 1);
	map.spawnMob(mob, 664, 28);
	event.startTimer("makeMob", 30 * 1000);
	event.startTimer("kick", fightTime);
	map.showTimer(fightTime / 1000);
	event.setVariable("members", members);
	event.startTimer("summon_obtacle", 4000);
	event.setVariable("summonmob", 0);
	event.startTimer("summon_mob", 1000);
	event.startTimer("Summon_Escort1", 20000);
	event.startTimer("Summon_Escort2", 30000);
	event.startTimer("Summon_Escort3", 40000);
	event.startTimer("Summon_Escort4", 50000);
	event.startTimer("Summon_Escort5", 60000);
	map.setIndividualDrop(true);
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
		members[i].addPQLog(BOSS_LOG);
		members[i].addEventValue(BOSS_LOG);
		members[i].setDeathCount(DEATH_COUNT);
		//判斷傷害初始化
		event.setVariable(members[i].getName() + "傷害", 0);
	}
}


function mobDied(mob) {
	if (mobId == mob.getDataId()) {
		/*
		var itemList = [
			//1卷軸
			Array(1, 2048825, 15000, 30000),
			Array(1, 2048826, 15000, 30000),
			Array(1, 2612080, 15000, 30000),
			Array(1, 2612081, 15000, 30000),
			Array(1, 2613068, 15000, 30000),
			Array(1, 2613069, 15000, 30000),
			Array(1, 2615051, 15000, 30000),
			Array(1, 2615052, 15000, 30000),
			Array(1, 2616216, 15000, 30000),
			Array(1, 2616217, 15000, 30000),
			//2專屬
			Array(2, 1032316, 2000),

			//3武防
			Array(3, 1004808, 700),
			Array(3, 1004809, 700),
			Array(3, 1004810, 700),
			Array(3, 1004811, 700),
			Array(3, 1004812, 700),
			Array(3, 1073158, 700),
			Array(3, 1073159, 700),
			Array(3, 1073160, 700),
			Array(3, 1073161, 700),
			Array(3, 1073162, 700),
			Array(3, 1082695, 700),
			Array(3, 1082696, 700),
			Array(3, 1082697, 700),
			Array(3, 1082698, 700),
			Array(3, 1082699, 700),
			Array(3, 1102940, 700),
			Array(3, 1102941, 700),
			Array(3, 1102942, 700),
			Array(3, 1102943, 700),
			Array(3, 1102944, 700),
			Array(3, 1152197, 700),
			Array(3, 1152198, 700),
			Array(3, 1152199, 700),
			Array(3, 1152200, 700),
			Array(3, 1152196, 700),
			Array(3, 1212120, 700),
			Array(3, 1213018, 700),
			Array(3, 1214018, 700),
			Array(3, 1222113, 700),
			Array(3, 1232113, 700),
			Array(3, 1242121, 700),
			Array(3, 1242122, 700),
			Array(3, 1252098, 700),
			Array(3, 1262039, 700),
			Array(3, 1272017, 700),
			Array(3, 1282017, 700),
			Array(3, 1292018, 700),
			Array(3, 1292018, 700),
			Array(3, 1312203, 700),
			Array(3, 1322255, 700),
			Array(3, 1332279, 700),
			Array(3, 1362140, 700),
			Array(3, 1372228, 700),
			Array(3, 1382265, 700),
			Array(3, 1402259, 700),
			Array(3, 1403018, 700),
			Array(3, 1403018, 700),
			Array(3, 1422189, 700),
			Array(3, 1432218, 700),
			Array(3, 1442274, 700),
			Array(3, 1452257, 700),
			Array(3, 1462243, 700),
			Array(3, 1462243, 700),
			Array(3, 1482221, 700),
			Array(3, 1492235, 700),
			Array(3, 1522143, 700),
			Array(3, 1532150, 700),
			Array(3, 1542117, 700),
			Array(3, 1552119, 700),
			Array(3, 1582023, 700),
			Array(3, 1592020, 700),
			Array(3, 1342104, 700),

			//4家具
			// Array(4,2672069,300),
			Array(4, 2671042, 300),
			Array(4, 2671043, 300),
			Array(4, 2671044, 300),
			Array(4, 2671045, 300),
			Array(4, 2671046, 300),
			Array(4, 2671047, 300),
			Array(4, 2671048, 300),
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
					//event.broadcastPlayerNotice(2, "[" + bossid + "] 玩家 " + player.getName() + "統領隊伍的通關時間  " + mm + " 分 " + ss + " 秒 ");
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

			//player.runScript("頓凱爾獎勵[困難]");


			//event.broadcastPlayerNotice(7, "[傷害排名] 排名:" + (i + 1) + "  玩家：" + player.getName() + "  傷害 ：" + damList[i][0] + "  傷害占比 : " + parseFloat(damList[i][0] / datotal) * 100 + " %");
		}
		var player = damList[killId][1];
		//event.broadcastPlayerNotice(7, "[擊殺獎勵]通關時間: " + totalTime + " 秒 擊殺 玩家：" + damList[killId][1].getName() + "  傷害 ：" + damList[killId][0] + "  傷害占比 : " + parseFloat(damList[killId][0] / datotal) * 100 + " %");
	}
}

//記錄傷害
function mobHit(player, mob, damage) {
	if (mobId == mob.getDataId()) {
		//記錄傷害
		var playerAllDamage = parseFloat(event.getVariable(player.getName() + "傷害"));
		event.setVariable(player.getName() + "傷害", (playerAllDamage + damage))

		//player.dropMessage(1, "玩家：" + player.getName() + " 目前傷害為:" + Math.floor((playerAllDamage + damage)) + "");

		//最後一擊處理
		var datotal = 0;
		//做傷害排名
		for (let i = 0; i < members.length; i++) {
			//冒泡排序

			//獲取傷害
			var da = parseFloat(event.getVariable(members[i].getName() + "傷害"));
			datotal += da;

		}
		if (datotal >= bossHp) {
			//擊殺
			killPlayer = player.getId();
			//player.dropMessage(1, "玩家：" + player.getName() + " 進行了最後一擊:  傷害為" + Math.floor((playerAllDamage + damage)) / 101000000 + " E");
		}

	}
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
	removePlayer(player.getId());
}

function playerChangedMap(player, destination) {
	if (destination.getId() != MAP_ID) {
		removePlayer(player.getId());
	}
}

function partyMemberDischarged(party, player) {
	removePlayer(player.getId());
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
			event.stopTimer("summon_mob");
			event.stopTimer("Summon_Escort1");
			event.stopTimer("Summon_Escort2");
			event.stopTimer("Summon_Escort3");
			event.stopTimer("Summon_Escort4");
			event.stopTimer("Summon_Escort5");
			kick();
			break;
		case "summon_obtacle":
			event.startTimer("summon_obtacle", 4000);
			let map_1 = event.getMap(MAP_ID);
			map_1.createObtacleAtom(0, 5, 72, 74, -560, 28);
			break;
		case "summon_mob":
			let mobCount = event.getVariable("summonmob");
			if (mobCount < 10) {
				mobCount += 1;
				event.setVariable("summonmob", mobCount);
				event.getMap(MAP_ID).spawnMob(8645003, -642, 28);
			}
			event.startTimer("summon_mob", 5000);
			break;
		case "Summon_Escort1":
			let escort1 = event.getMap(MAP_ID).makeMob(8645004);
			escort1.changeBaseHp(4800000000000);
			event.getMap(MAP_ID).spawnMob(escort1, 664, 28);
			event.startTimer("Summon_Escort2", 60000);
			break;
		case "Summon_Escort2":
			let escort2 = event.getMap(MAP_ID).makeMob(8645005);
			escort2.changeBaseHp(4800000000000);
			event.getMap(MAP_ID).spawnMob(escort2, 664, 28);
			event.startTimer("Summon_Escort3", 60000);
			break;
		case "Summon_Escort3":
			let escort3 = event.getMap(MAP_ID).makeMob(8645006);
			escort3.changeBaseHp(4800000000000);
			event.getMap(MAP_ID).spawnMob(escort3, 664, 28);
			event.startTimer("Summon_Escort4", 60000);
			break;
		case "Summon_Escort4":
			let escort4 = event.getMap(MAP_ID).makeMob(8645007);
			escort4.changeBaseHp(4800000000000);
			event.getMap(MAP_ID).spawnMob(escort4, 664, 28);
			event.startTimer("Summon_Escort5", 60000);
			break;
		case "Summon_Escort5":
			let escort5 = event.getMap(MAP_ID).makeMob(8645008);
			escort5.changeBaseHp(4800000000000);
			event.getMap(MAP_ID).spawnMob(escort5, 664, 28);
			break;
	}
}


function deinit() {
	event.getMap(MAP_ID).endFieldEvent();
	for (let i = 0; i < members.length; i++) {
		members[i].setEvent(null);
		members[i].setDeathCount(-1);
	}
}
