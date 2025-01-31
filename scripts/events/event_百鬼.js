//OX問答 by dgms qq:381991414


//let X = 256;
//let Y = -626;
let X = -705;
let Y = -30;
let HPS = 7000000000000;//5兆//25兆250000000000000

let mobList = Array(
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	),
	Array(
		Array(9400034, HPS, X, Y),
	)
);

let level = 0;
let mustLevel = 1;
let start;
let endTime;
let time = 0.1 * 60 * 1000; //廣播後 給玩家幾秒的準備時間
let gametime;
let members;
//let player;
let DEATH_COUNT = 2;//死亡次數
let MAP_ID = 800023000;
let map = event.getMap(800023000);
let map1 = event.getMap(800023000);
let map2 = event.getMap(103000000);
/*let number = 30;//最多答題數
let killNumber = 15;//可以答錯多少次
let nowNumber = 0;
let nowAsk;*/



function init(attachment) {
	player = attachment;
	endTime = new Date().getTime() + time;
	event.setVariable("endTime", new Date().getTime() + time);
	map.clearMobs();
	map1.clearMobs();
	//map2.clearMobs();
	//event.broadcastPlayerNotice(7,"百鬼夜行 1S進場測試運行中");
	//event.broadcastPlayerNotice(7,"百鬼夜行 1S進場");
	//event.broadcastPlayerNotice(7,"百鬼夜行 5分鐘報名");
	members = [];
	event.setVariable("canJoin", "1");
	event.startTimer("canJoin", time);
	event.setVariable("members", members);
	event.setVariable("mobCount", 0);
	members.push(player);
	player.setEvent(event);
	player.changeMap(map, 0);
	map.showTimer(time / 1000);
	// FIELDMAP = event.getMap(map1);
	//map.blowWeather(5120199,"開始報名參賽");
	/*for (let i = 0; i < players.length; i++) {
			//players[i].setEvent(event);
			//players[i].addPQLog(BOSS_LOG);
			//players[i].addEventValue(BOSS_LOG,1,1);
			//players[i].setDeathCount(DEATH_COUNT); 
	}*/
}

function mobDied(mob) {
	//map1 = event.getMap(940511800);

	/*if (level >= mobList.length) {
		event.startTimer("kick", 10*1000);
		} else {
		//if (level % mustLevel == 0) {
		makeMob();
		level++;
		//}
		}*/
	//map1 = event.getMap(940511800);
	if (mob.getMapId() == MAP_ID) {
		bossX = map1.getPlayerCount();
		mobCount = parseInt(event.getVariable("mobCount"));
		event.setVariable("mobCount", mobCount + 1);

		for (var i = 0; i < members.length; i++) {
			try {
				members[i].showSystemMessage("【百鬼夜行】已擊殺" + level + "隻");
				mobCount2 = parseInt(event.getVariable("mobCount"));
				if (mobCount2 == 0) {
				} else if (mobCount2 % 2 == 0) {
					members[i].gainItem(4310071, 1);
				}
				members[i].showSystemMessage("【百鬼夜行】此次產生的王血量為:" + ((HPS * ((level * 0.7) + 1)) / 1030000000000) + "兆");
				members[i].showSystemMessage("【百鬼夜行】OX掉落率顯示:" + ((100 * (level) * ((members.length + 1) * 0.05) / 100)) + "%");
				members[i].runScript("mp");
			} catch (e) {
			}
		}

		//event.broadcastPlayerNotice(7,""+player.getName()+" 殺殺殺");
		var DROPS = Math.floor(Math.random() * 10000);//道具掉落
		var DROPS0 = Math.floor(Math.random() * 10000);
		if (DROPS <= 100 * (level) * ((members.length + 1) * 0.05)) {
			mob.dropItem(4310071);
			//event.broadcastPlayerNotice(7,"【百鬼夜行】OX幣已掉落");
		}

		if (level >= mobList.length) {
			event.broadcastPlayerNotice(7, "已達最高數量 10秒後離開");
			event.startTimer("kick", 8 * 1000);
		} else {
			makeMob();
		}
	}
}

function playerPickupItem(player, map, itemId) {
	if (itemId == 4310071) {
		//player.scriptProgressMessage("你撿到了OX幣");
		event.broadcastPlayerNotice(7, "" + player.getName() + " 撿到了1個OX幣");
	}
}

function removePlayer(playerId, changeMap) {
	for (let i = 0; i < members.length; i++) {
		if (members[i].getId() == playerId) {
			//dissociate event before changing map so playerChangedMap is
			//not called and this method is not called again by the player
			members[i].setEvent(null);
			members[i].showSystemMessage("雖然不知道什麼原因,但你被移除狀態了");
			if (changeMap)
				//players[i].changeMap(180000010);
				//collapse the members array so we don't accidentally warp
				//this member again if the leader leaves later.

				members[i].showSystemMessage("splice - 開場觸發此通知 聯繫管理員");
			members.splice(i, 1);
			break;
		}
	} if (members.length <= 0) {
		event.destroyEvent();
	}
	//event.destroyEvent();
}

function playerDisconnected(player) {
	removePlayer(player.getId(), false);
}

function playerChangedMap(player, destination) {
	if (destination.getId() != MAP_ID) {//需在指定地圖 不在則銷毀件
		removePlayer(player.getId(), false);//true
	} else {
	}
}

function partyMemberDischarged(party, player) {
	//removePlayer(player.getId(), false);
}

function timerExpired(key) {
	switch (key) {

		case "canJoin":
			event.setVariable("canJoin", "0");//關閉入場
			map.showTimer(8);
			map1.clearMobs();
			map1.setNoSpawn(true);
			map.blowWeather(5120000, "【百鬼夜行】停止報名，5秒後傳送！");
			event.startTimer("start", 5 * 1000);
			break;

		case "start":
			for (var i = 0; i < members.length; i++) {
				try {
					//members[i].changeMap(map1);
					members[i].setDeathCount(DEATH_COUNT);
					//members[i].showSystemMessage("【百鬼夜行】10進場為每擊殺1隻王加0.5%掉落 1人僅加0.1%..注意");
				} catch (e) {

				}
			}
			event.broadcastPlayerNotice(7, "【百鬼夜行】開始5分");
			gametime = 15 * 60 * 1000; //
			map1.showTimer(gametime / 1000);
			endTime = new Date().getTime() + gametime;
			event.startTimer("kick", gametime);
			event.setVariable("endTime", new Date().getTime() + gametime);
			event.startTimer("Timedcall2", 1 * 1000);//第一次叫怪在1秒後
			break;

		case "kick":


			for (var i = 0; i < members.length; i++) {
				try {
					members[i].showSystemMessage("【百鬼夜行】造成 " + mobCount2 + " 殺");
					members[i].changeMap(103000000);
					//members[i].showSystemMessage("條件kick");
				} catch (e) {
				}
				//members[i].gainItem(4310071,(mobCount2/100));
				//members[i].changeMap(180000010);
			}

			event.broadcastPlayerNotice(7, "【百鬼夜行】造成 " + mobCount2 + " 殺");
			map1.clearMobs();
			map1.reset();
			map1.showTimer(30);
			event.startTimer("end", 30 * 1000);
			break;
		case "end":

			event.destroyEvent();
			break;
		case "Timedcall":
			if (map1.getEventMobCount() < 80) {
				startMobs();
				//broadcastPlayerNotice(9, "更多怪物湧現");
			} if (map1.getEventMobCount() < 50) {
				startMobs();
			}
			event.startTimer("Timedcall", 5 * 1000);
			break;
		case "Timedcall2":
			makeMob();
			break;
	}
}

function deinit() {
	event.getMap(MAP_ID).endFieldEvent();
	for (let i = 0; i < members.length; i++) {
		members[i].setEvent(null);
		members[i].setDeathCount(-1);
		members[i].showSystemMessage("初始化");
	}
	//removePlayer(player.getId(), true);
	//removePlayer(player.getId(), false);
}



/*-------------------怪物召喚------------------------*/


let mobs0 = Array(9400023, 9400021, 9400031, 9400032, 9400033, 9391008, 9400022, 9400580,
	9400023, 9400021, 9400031, 9400032, 9400033, 9391008, 9400022, 9400580,
	9400023, 9400021, 9400031, 9400032, 9400033, 9391008, 9400022, 9400580
);//9410483
let XYS = [
	[-772, -820], [-82, -820], [143, -820], [265, -820], [701, -820],
	[-510, -560], [-350, -560], [200, -820], [300, -460], [775, -340],
	[-772, -220], [-450, -220], [200, -220], [300, -220], [400, -220], [575, -220], [675, -220], [775, -220],
	[-772, 140], [-450, 140], [200, 140], [300, 140], [400, 140], [575, 140], [675, 140], [775, 140]
];

function makeMob() {//影響level
	let pos = XYS[Math.floor(Math.random() * XYS.length)]; //pos[0], pos[1]
	let posX = Math.floor(Math.random() * 1200); //pos[0], pos[1]
	var mobs = mobList[level];
	for (var i = 0; i < mobs.length; i++) {
		var mob = map1.makeMob(mobs[i][0]);
		//mob.setForcedMobStat(315, 1);
		mob.changeBaseHp((mobs[i][1] * ((level * 0.7) + 1)));
		//map1.spawnMob(mob, pos[0]+(i*10), pos[1]);
		map1.spawnMob(mob, (X + posX), Y);

	}
	event.broadcastPlayerNotice(12, "正在屠殺怪物...");
	if (level < mobList.length) {
		level++;
	}
}
function startMobs() {
	let pos = XYS[Math.floor(Math.random() * XYS.length)]; //pos[0], pos[1]
	endTime = new Date().getTime();
	let mobsss = Math.floor(Math.random() * mobs0.length);
	var XY = Math.floor(Math.random() * 400);
	let moblevel = (endTime - start) / 60000;//算法为1
	//for (var i = 0; i < (moblevel*1-1)*8; i++) {//时间*10召唤数量
	for (var i = 0; i < 10; i++) {//10*招喚數量
		var mob = map1.makeMob(mobs0[mobsss]);

		//mob.setForcedMobStat(10, 1);
		//mob.changeBaseHp(1030000000*(moblevel-1)*3);//时间*2HP
		mob.changeBaseHp(500000000 * (level * (level * 1.5) * 3));//时间*2HP
		map1.spawnMob(mob, pos[0] + (i * 10), pos[1]);
	}

	event.broadcastPlayerNotice(7, "" + moblevel + "");
}
