/* This is a piece of code

 * author dgms

 * global player

 * Contact QQ 381991414 DC dgms#6650

 * function boss event 模版

 */

let X = 95;
let X1 = -100;
let X2 = 1300;
let Y = 352;
let HPS = 10100000000;//100E  

let mobList = Array(
	Array(
		Array(9400294, HPS * 10, 75, 0)
	),
	Array(
		Array(9400294, HPS * 20, 75, 0)
	),
	Array(
		Array(9400294, HPS * 30, 75, 0)
	),
	Array(
		Array(9400294, HPS * 40, 75, 0)
	),
	Array(
		Array(9400294, HPS * 50, 25, 0)
	),
	Array(
		Array(9400294, HPS * 60, 25, 0)
	),
	Array(
		Array(9400294, HPS * 70, 25, 0)
	),
	Array(
		Array(9400294, HPS * 80, 75, 0)
	),
	Array(
		Array(9400294, HPS * 90, 75, 0)
	),
	Array(
		Array(9400294, HPS * 100, 0, 0)
	)
);

let player;
let map;
let start;
let endTime;
let everyTime = 10 * 60 * 1000; //副本時間 也可以是每輪時間 默認是總時間
let REWARD_SCRIPT_NAME = "副本";
//let MAP_ID = 940301000 ;//深淵圖 離開後看不到其他人要換頻
let MAP_ID = 865020012;//0~1000 , 210
let BOSS_LOG = "改版圖騰副本";
let level = 0;
let mustLevel = 1;
let totalTime = 0;
let party;
let members;
let DEATH_COUNT = 5
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
	event.getMap(MAP_ID).clearMobs();
	event.getMap(MAP_ID).reset();

	startMobs();
	makeMob();
	event.startTimer("kick", everyTime);

	endTime = new Date().getTime() + everyTime;
	map.showTimer(everyTime / 1000);

	event.setVariable("members", members);
	for (let i = 0; i < members.length; i++) {
		if (members[i].getEventValue("改版圖騰副本") >= 3) {
			//members[i].showSystemMessage("TT");
			members[i].changeMap(101000000);
		}
		members[i].setEvent(event);
		members[i].addEventValue(BOSS_LOG, 1, 1);
		members[i].setDeathCount(DEATH_COUNT);
	}
}

function mobDied(mob) {
	let mobCount = parseInt(event.getVariable("mobCount"));
	event.setVariable("mobCount", mobCount + 1);


	if (mob.getDataId() == 8850100 || mob.getDataId() == 8850101 || mob.getDataId() == 8850102 || mob.getDataId() == 8850103 || mob.getDataId() == 8850104) {
		DROPS = Math.floor(Math.random() * 100000);
		if (DROPS < 15000) {
			for (let i = 0; i < members.length; i++) {
				members[i].runScript("改版圖騰強化");
			}
		}
		if (DROPS < 5000) {
			for (let i = 0; i < members.length; i++) {
				members[i].runScript("改版圖騰強化2");
			}
		}
		if (DROPS < 2500) {
			for (let i = 0; i < members.length; i++) {
				members[i].runScript("改版圖騰強化3");
			}
		}

	}
	if (mob.getDataId() == 9400294) {
		DROPS0 = Math.floor(Math.random() * 100000);
		if (DROPS0 < 75000) {
			for (let i = 0; i < members.length; i++) {
				members[i].runScript("改版圖騰強化");
			}
		}
		if (DROPS0 < 50000) {
			for (let i = 0; i < members.length; i++) {
				members[i].runScript("改版圖騰強化2");
			}
		}
		if (DROPS0 < 25000) {
			for (let i = 0; i < members.length; i++) {
				members[i].runScript("改版圖騰強化3");
			}
		}

	}

	if (event.getMap(MAP_ID).getEventMobCount() <= 0) {
		if (level >= mobList.length) { //當前關卡大於number 則通關
			event.stopTimer("kick");
			map.showTimer(8);
			event.startTimer("kick", 8 * 1000);
			for (let i = 0; i < members.length; i++) {
				members[i].showSystemMessage("恭喜您通過第 " + (level) + " 關，等待幾秒鐘為你轉移地圖！");
			}
		} else {
			random = Math.floor(Math.random() * mobList.length);
			if (level % mustLevel == 0) {
				startMobs();
				makeMob();
				for (let i = 0; i < members.length; i++) {//組隊
					members[i].showSystemMessage("恭喜您通過第 " + (level - 1) + " 關！！");
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
	gg = level + 1;
	let mons = Array(8850100, 8850101, 8850102, 8850103, 8850104
	);

	for (var i = 0; i < 50; i++) {//10*招喚數量
		var mobb = Math.floor(Math.random() * 5);
		var mob = map.makeMob(mons[mobb]);
		var XY = Math.floor(Math.random() * (X2 - X1 + 1)) + X1;
		//mob.setForcedMobStat(250, 10);
		mob.changeBaseHp(HPS * gg);//时间*2HP
		map.spawnMob(mob, XY, Y);
	}

	//event.broadcastPlayerNotice(7, ""+moblevel+"");
}

/*function startMobs2(){
	endTime=new Date().getTime();
	let moblevel=(endTime-start)/60000;//算法为1
	var XY = Math.floor(Math.random() * 300);
	//for (var i = 0; i < (moblevel*1-1)*8; i++) {//时间*10召唤数量
	for (var i = 0; i < 12; i++) {//10*招喚數量
		var mob = map.makeMob(9450025);
		//mob.setForcedMobStat(280,10);
		//mob.changeBaseHp(1010000000*(moblevel-1)*3);//时间*2HP
		mob.changeBaseHp(HPS*(moblevel*level));//时间*2HP
		map.spawnMob(mob, X-550+XY+(i*70), Y);
	}
	
	//event.broadcastPlayerNotice(7, ""+moblevel+"");
}*/

function makeMob() {
	var mobs = mobList[level];
	for (var i = 0; i < mobs.length; i++) {
		var mob = map.makeMob(mobs[i][0]);
		//mob.setForcedMobStat(285, 10);
		mob.changeBaseHp((mobs[i][1]) * (level + 1));
		map.spawnMob(mob, X + mobs[i][2], Y + mobs[i][3]);
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
			startMobs();
			//event.stopTimer("Timedcall");
			//event.startTimer("Timedcall",8 * 1000);
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
