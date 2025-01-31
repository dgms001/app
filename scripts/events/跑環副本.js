/* This is a piece of code

 * author dgms

 * global player

 * Contact QQ 381991414 DC dgms#6650

 * function boss event 模版

 */

let X = 50;
let X1 = -690;
let X2 = 780;
let Y = 90;
let HPS = 1010000000;//10E  


let mobList = Array(
	Array(
		Array(8644719, HPS * 10, 75, 0)
	),
	Array(
		Array(5220000, HPS * 10, 75, 0)
	),
	Array(
		Array(8644719, HPS * 10, 75, 0)
	),
	Array(
		Array(8644719, HPS * 10, 75, 0)
	),
	Array(
		Array(8644719, HPS * 10, 25, 0)
	),
	Array(
		Array(8644719, HPS * 10, 25, 0)
	),
	Array(
		Array(8644719, HPS * 10, 25, 0)
	),
	Array(
		Array(8644719, HPS * 10, 75, 0)
	),
	Array(
		Array(8644719, HPS * 10, 75, 0)
	),
	Array(
		Array(8644719, HPS * 10, 0, 0)
	),
	Array(//11波 1000E
		Array(8644719, HPS * 100, 75, 0)
	),
	Array(
		Array(8644719, HPS * 150, 75, 0)
	),
	Array(
		Array(8644719, HPS * 200, 75, 0)
	),
	Array(
		Array(8644719, HPS * 250, 75, 0)
	),
	Array(
		Array(8644719, HPS * 300, 25, 0)
	),
	Array(
		Array(8644719, HPS * 350, 25, 0)
	),
	Array(
		Array(8644719, HPS * 400, 25, 0)
	),
	Array(
		Array(8644719, HPS * 450, 75, 0)
	),
	Array(
		Array(8644719, HPS * 500, 75, 0)
	),
	Array(
		Array(8644719, HPS * 550, 0, 0)
	),
	Array(//21波 1兆
		Array(8644719, HPS * 1000, 75, 0)
	),
	Array(
		Array(8644719, HPS * 1000, 75, 0)
	),
	Array(
		Array(8644719, HPS * 1000, 75, 0)
	),
	Array(
		Array(8644719, HPS * 1000, 75, 0)
	),
	Array(
		Array(8644719, HPS * 1000, 25, 0)
	),
	Array(
		Array(8644719, HPS * 1000, 25, 0)
	),
	Array(
		Array(8644719, HPS * 1000, 25, 0)
	),
	Array(
		Array(8644719, HPS * 1000, 75, 0)
	),
	Array(
		Array(8644719, HPS * 1000, 75, 0)
	),
	Array(
		Array(8644719, HPS * 1000, 0, 0)
	)
);

let player;
let map;
let start;
let endTime;
let everyTime = 10 * 60 * 1000; //副本時間 也可以是每輪時間 默認是總時間
let REWARD_SCRIPT_NAME = "副本";
//let MAP_ID = 940301000 ;//深淵圖 離開後看不到其他人要換頻
let MAP_ID = 865030121;//0~1000 , 210
let BOSS_LOG = "跑環副本";
let level = 0;
let mustLevel = 1;
let totalTime = 0;
let party;
let members;
let DEATH_COUNT = 2
let random = Math.floor(Math.random() * mobList.length);

let itemss1 = 4032055;//入場道具
let itemss2 = 10;
function init(attachment) {
	party = attachment;
	party.changeMap(MAP_ID, 0);
	//party.loseItem(itemss1,itemss2)
	members = party.getLocalMembers();
	map = event.getMap(MAP_ID);

	start = new Date().getTime();
	event.setVariable("state", "1");
	event.setVariable("leader", "true");

	event.setVariable("mobCount", 0);//定義怪物數量
	//player = attachment;
	event.getMap(MAP_ID).clearMobs();
	event.getMap(MAP_ID).reset();
	//player.changeMap(MAP_ID, 0);

	startMobs();
	makeMob();
	//player.setEvent(event);
	//player.addPQLog(LOG);
	event.startTimer("kick", everyTime);
	event.startTimer("Timedcall", 1000);

	endTime = new Date().getTime() + everyTime;
	map.showTimer(everyTime / 1000);

	event.setVariable("members", members);
	for (let i = 0; i < members.length; i++) {
		/*if(members[i].getEventValue("TT") >= 1){
			members[i].showSystemMessage("TT");
			members[i].changeMap(199000000);
		}*/
		members[i].setEvent(event);
		//members[i].addPQLog(BOSS_LOG);
		members[i].addEventValue(BOSS_LOG, 1, 1);
		members[i].setDeathCount(DEATH_COUNT);
		//event.setVariable(members[i].getName()+"測試",0);
	}
	//player.showSystemMessage("0/"+start+"");
}

function mobDied(mob) {
	let mobCount = parseInt(event.getVariable("mobCount"));
	event.setVariable("mobCount", mobCount + 1);

	if (mob.getDataId() == 8644809) {			//(獲取怪物id == 指定) 則掉落
		var DROPS = Math.floor(Math.random() * 10000);

		var items = Array(4000000, 4000001, 4000014, 4000034, 4000048, 4000331, 4000300, 4000296, 4000297, 4000269, 4000268, 4000270, 4000002, 4000011, 4000622, 4000028, 4000242, 4000051, 4000595, 4000596, 4000597, 4000598, 4000601, 4000602, 4000156, 4000155, 4000167, 4000106, 4000073, 4000232, 4000233, 4000234, 4000238, 4000050, 4000060, 4000083, 4000106, 4000107, 4000277, 4000295, 4000328, 4000325, 4000236, 4000447, 4000068, 4000023, 4000334, 4000360, 4000115, 4000112, 4000069, 4000330);
		DROPSITEM = Math.floor(Math.random() * items.length);

		var items1 = Array(4000000, 4000001, 4000014, 4000034, 4000048, 4000331, 4000300, 4000296, 4000297, 4000269, 4000268, 4000270, 4000002, 4000011, 4000622, 4000028, 4000242, 4000051, 4000595, 4000596, 4000597, 4000598, 4000601, 4000602, 4000156, 4000155, 4000167, 4000106, 4000073, 4000232, 4000233, 4000234, 4000238, 4000050, 4000060, 4000083, 4000106, 4000107, 4000277, 4000295, 4000328, 4000325, 4000236, 4000447, 4000068, 4000023, 4000334, 4000360, 4000115, 4000112, 4000069, 4000330);
		DROPSITEM1 = Math.floor(Math.random() * items1.length);

		var items2 = Array(4000000, 4000001, 4000014, 4000034, 4000048, 4000331, 4000300, 4000296, 4000297, 4000269, 4000268, 4000270, 4000002, 4000011, 4000622, 4000028, 4000242, 4000051, 4000595, 4000596, 4000597, 4000598, 4000601, 4000602, 4000156, 4000155, 4000167, 4000106, 4000073, 4000232, 4000233, 4000234, 4000238, 4000050, 4000060, 4000083, 4000106, 4000107, 4000277, 4000295, 4000328, 4000325, 4000236, 4000447, 4000068, 4000023, 4000334, 4000360, 4000115, 4000112, 4000069, 4000330);
		DROPSITEM2 = Math.floor(Math.random() * items2.length);

		if (DROPS <= 10000) {
			mob.dropItem(items[DROPSITEM]);
		}
		if (DROPS <= 6666) {
			mob.dropItem(items1[DROPSITEM1]);
		}
		if (DROPS <= 3333) {
			mob.dropItem(items2[DROPSITEM2]);
		}



	}


	if (mob.getDataId() == 8644719) {//王掉落
		var DROPS0 = Math.floor(Math.random() * 10000);
		if (DROPS0 <= 3333) {
			mob.dropItem(2633238);
		}
	}

	if (event.getMap(MAP_ID).getEventMobCount() <= 0) {
		if (level >= mobList.length) { //當前關卡大於number 則通關
			event.stopTimer("kick");
			map.showTimer(8);
			event.startTimer("kick", 8 * 1000);
			for (let i = 0; i < members.length; i++) {
				members[i].showSystemMessage("恭喜您通過第 " + (level) + " 波，等待幾秒鐘為你轉移地圖！");
				//members[i].runScript("椅子副本獎勵");
			}
		} else /*if (level < mobList.length)*/ {
			random = Math.floor(Math.random() * mobList.length);
			if (level % mustLevel == 0) {
				startMobs();
				makeMob();
				for (let i = 0; i < members.length; i++) {//組隊
					members[i].showSystemMessage("第 " + (level - 1) + " 波已完成！！");
					//members[i].showSystemMessage("BOSS更為強大了");
				}
			}
		}
	}
}

/*function startMobs(){
	endTime=new Date().getTime();
	let moblevel=(endTime-start)/1000/60;//算法为1
	for (var i = 0; i < (moblevel*1-1)*10; i++) {//时间*10召唤数量
		var mob = map.makeMob(9400018);
		mob.changeBaseHp(30000000*(moblevel-1)*2);//时间*2HP
		map.spawnMob(mob, 319, 353);
	}
	//event.broadcastPlayerNotice(7, ""+moblevel+"");
}*/
function startMobs() {
	endTime = new Date().getTime();
	let moblevel = (endTime - start) / 60000;//算法为1

	if (level <= 10) {
		level1 = 1;
	} else {
		level1 = level;

	}

	for (var i = 0; i < 30; i++) {//10*招喚數量
		var mob = map.makeMob(8644809);
		var XY = Math.floor(Math.random() * (X2 - X1 + 1)) + X1;


		//mob.setForcedMobStat(200, 10);
		mob.changeBaseHp(HPS * (+1) * (level1 + 1));//HPS*(时间+1)
		//mob.changeBaseHp(HPS*(level+1));//时间*波數
		//mob.changeBaseHp(HPS);
		map.spawnMob(mob, XY, Y);
	}

	//event.broadcastPlayerNotice(7, ""+moblevel+"");
}

function startMobs2() {
	endTime = new Date().getTime();
	let moblevel = (endTime - start) / 60000;//算法为1
	var XY = Math.floor(Math.random() * (X2 - X1 + 1)) + X1;


	//for (var i = 0; i < (moblevel*1-1)*8; i++) {//时间*10召唤数量
	for (var i = 0; i < 12; i++) {//10*招喚數量

		var mob = map.makeMob(9450025);
		//mob.setForcedMobStat(280, 10);
		//mob.changeBaseHp(1010000000*(moblevel-1)*3);//时间*2HP
		mob.changeBaseHp(HPS * (moblevel * level));//时间*2HP
		map.spawnMob(mob, XY, Y);
	}

	//event.broadcastPlayerNotice(7, ""+moblevel+"");
}

function makeMob() {
	var mobs = mobList[level];
	let moblevel = (endTime - start) / 30000;//算法为0.5
	if (level <= 10) {
		level1 = 1;
	} else {
		level1 = level;

	}
	for (var i = 0; i < mobs.length; i++) {
		var XY = Math.floor(Math.random() * (X2 - X1 + 1)) + X1;

		var mob = map.makeMob(mobs[i][0]);
		//mob.setForcedMobStat(200, 10);
		mob.changeBaseHp((mobs[i][1]) * (level1 + 1));
		map.spawnMob(mob, XY, Y);
	}
	level++;
}

/*function removePlayer(playerId, changeMap) {//自行離場
	player.setEvent(null);
	player.showSystemMessage("已退出" + REWARD_SCRIPT_NAME + "");
	//player.changeMap(993189201);
	event.destroyEvent();
}*/
function removePlayer(playerId, changeMap) {
	for (let i = 0; i < members.length; i++) {
		if (members[i].getId() == playerId) {
			//dissociate event before changing map so playerChangedMap is
			//not called and this method is not called again by the player
			members[i].setEvent(null);
			if (changeMap)
				members[i].changeMap(101000000);
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
	//player.changeMap(101000000);
	removePlayer(player.getId(), false);
}

function playerDeath(player) {
	//player.changeMap(101000000);
	removePlayer(player.getId(), false);
}

function playerChangedMap(player, destination) {
	if (destination.getId() != MAP_ID) {
		removePlayer(player.getId(), false);
	}
}


/*function partyMemberDischarged(party, player) {//單人
	player.changeMap(993189201);
	removePlayer(player.getId(), true);
}*/
function partyMemberDischarged(party, player) {
	if (party.getLeader() == player.getId()) {
		kick();
	} else {
		removePlayer(player.getId(), true);
	}
}

function kick() {//時間到

	for (let i = 0; i < members.length; i++) {

		let mobCount2 = parseInt(event.getVariable("mobCount"));
		if (level >= mobList.length) {
			//members[i].showSystemMessage("合計完成了 " + mobCount2 + " 斬");
			//members[i].addEventValue("TT",1,1);
			//members[i].gainItem(2436711,1);
			members[i].changeMap(101000000);
		} else {
			//dissociate event before changing map so playerChangedMap is not
			//called and this method is not called again by the player
			members[i].setEvent(null);
			members[i].changeMap(101000000);
			//members[i].showSystemMessage("合計完成了 " + mobCount2 + " 斬");
			//members[i].showSystemMessage("但沒能成功斬殺所有大將");
		}
	}
	//event.broadcastPlayerNotice(7,"無雙 | 有人完成了"+mobCount2+"斬");
	event.destroyEvent();
}


function timerExpired(key) {
	switch (key) {
		case "kick":
			//player.changeMap(993189201);
			//removePlayer(player.getId(), true);
			kick();
			break;
		case "Timedcall":

			if (event.getMap(MAP_ID).getEventMobCount() < 10) {
				if (level >= mobList.length) {
				} else {
					startMobs();
				}
			}
			//event.stopTimer("Timedcall");
			event.startTimer("Timedcall", 10 * 1000);
			break;
		case "Timedcall2":
			if (event.getMap(MAP_ID).getEventMobCount() < 20) {
				startMobs2();
			}
			event.startTimer("Timedcall2", 15 * 1000);
			break;
	}
}

/*function deinit() {//單人
	player.setEvent(null);
}*/
function deinit() {//組隊
	event.getMap(MAP_ID).endFieldEvent();
	for (let i = 0; i < members.length; i++) {
		members[i].setEvent(null);
		//members[i].setDeathCount(-1);
	}
}
