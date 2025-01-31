/* This is a piece of code

 * author dgms

 * global player

 * Contact QQ 381991414 DC dgms#6650

 * function boss event 模版

 */

let X = 95;
let Y = 184;
let HPS = 101000000;//1兆  

let mobList = Array(
	Array(
		Array(9450014, HPS, 75, 0)
	),
	Array(
		Array(9450014, HPS, 75, 0)
	),
	Array(
		Array(9450014, HPS, 75, 0)
	),
	Array(
		Array(9450014, HPS, 75, 0)
	),
	Array(
		Array(9450014, HPS, 75, 0)
	)
);

let player;
let map;
let start;
let endTime;
let everyTime = 10 * 60 * 1000; //副本時間 也可以是每輪時間 默認是總時間
let REWARD_SCRIPT_NAME = "副本";
let MAP_ID = 865020011;//865020011
let BOSS_LOG = "會員副本初級";
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

	event.setVariable("mobCount", 0);
	//player = attachment;
	event.getMap(MAP_ID).clearMobs();
	event.getMap(MAP_ID).reset();
	//player.changeMap(MAP_ID, 0);

	//startMobs();
	makeMob();
	//player.setEvent(event);
	//player.addPQLog(LOG);
	event.startTimer("kick", everyTime);
	//event.startTimer("Timedcall" ,1000 );

	endTime = new Date().getTime() + everyTime;
	map.showTimer(everyTime / 1000);

	event.setVariable("members", members);
	for (let i = 0; i < members.length; i++) {
			/*if(members[i].getEventValue("TT") >= 1){
				members[i].showSystemMessage("TT");
				members[i].changeMap(199000000);
			}*/if (members[i].getEventValue("會員副本次數") >= 10) {
			
			members[i].setEvent(event);
			members[i].addPQLog(BOSS_LOG);
			members[i].addEventValue(BOSS_LOG, 1, 1);
			members[i].setDeathCount(DEATH_COUNT);
			//event.setVariable(members[i].getName()+"測試",0);
		} else {
			members[i].changeMap(101000000);
			members[i].showSystemMessage("你並沒有次數");
		}

	}
	//player.showSystemMessage("0/"+start+"");
}

function mobDied(mob) {
	let mobCount = parseInt(event.getVariable("mobCount"));
	event.setVariable("mobCount", mobCount + 1);

	if (mob.getDataId() == 9421514) {			//(獲取怪物id == 指定) 則掉落
		var DROPS = Math.floor(Math.random() * 10000);
		if (DROPS <= 1000) {
			mob.dropItem(4310075);
		}
	}
	if (mob.getDataId() == 9450014 || mob.getDataId() == 9450020 || mob.getDataId() == 9450038) {
		DROPS0 = Math.floor(Math.random() * 10000);			//道具掉落
		DROPS1 = Math.floor(Math.random() * 10000);			//道具掉落
		DROPS2 = Math.floor(Math.random() * 10000);			//道具掉落
		//drItem1 = 1202089;
		//drItem1 += Math.floor(Math.random() * 3);
		if (DROPS0 <= 1000) {
			mob.dropItem(1202089);
		} if (DROPS1 <= 1000) {
			mob.dropItem(1202090);
		} if (DROPS2 <= 1000) {
			mob.dropItem(1202091);
		}
	}

	if (event.getMap(MAP_ID).getEventMobCount() <= 0) {
		if (level >= mobList.length) { //當前關卡大於number 則通關
			event.stopTimer("kick");
			map.showTimer(8);
			event.startTimer("kick", 8 * 1000);
			for (let i = 0; i < members.length; i++) {
				members[i].showSystemMessage("恭喜您通過第 " + (level) + " 關，等待幾秒鐘為你轉移地圖！");
				//members[i].runScript("椅子副本獎勵");
			}
		} else /*if (level < mobList.length)*/ {
			random = Math.floor(Math.random() * mobList.length);
			if (level % mustLevel == 0) {
				//startMobs();
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
	var XY = Math.floor(Math.random() * 300);
	let moblevel = (endTime - start) / 60000;//算法为1
	//for (var i = 0; i < (moblevel*1-1)*8; i++) {//时间*10召唤数量
	for (var i = 0; i < 99; i++) {//10*招喚數量
		var mob = map.makeMob(9421514);

		//mob.setForcedMobStat(270, 10);
		//mob.changeBaseHp(1010000000*(moblevel-1)*3);//时间*2HP
		//mob.changeBaseHp(HPS*(level+1));//
		mob.changeBaseHp(HPS);//时间*2HP
		map.spawnMob(mob, X - 550 + XY + (i * 4), Y);
	}

	//event.broadcastPlayerNotice(7, ""+moblevel+"");
}


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
	}
}

/*function deinit() {//單人
	player.setEvent(null);
}*/
function deinit() {//組隊
	for (let i = 0; i < members.length; i++) {
		members[i].setEvent(null);
		//members[i].setDeathCount(-1);
	}
}
