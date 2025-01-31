/* This is a piece of code

 * author dgms

 * global player

 * Contact QQ 381991414 DC dgms#6650

 * function boss event 模版

 */
let mobList = Array(

	Array(
		//怪物ID 血量 X坐標 Y坐標
		Array(9500317, 500000, 167, 270)
	),


);
let player;
let map;
let start;
let endTime;
let everyTime = 10 * 60 * 1000; //副本時間 也可以是每輪時間 默認是總時間
let REWARD_SCRIPT_NAME = "副本";
let MAP_ID = 807051100;
let BOSS_LOG = "聖誕BOSS";
let level = 0;
let mustLevel = 1;
let totalTime = 0;
let party;
let members;
let DEATH_COUNT = 1
let random = Math.floor(Math.random() * mobList.length);

let itemss1 = 4032055;//入場道具
let itemss2 = 1;
function init(attachment) {
	party = attachment;
	party.changeMap(MAP_ID, 0);
	//party.loseItem(itemss1,itemss2)
	members = party.getLocalMembers();
	map = event.getMap(MAP_ID);

	start = new Date().getTime();
	event.setVariable("state", "1");
	event.setVariable("leader", "true");
	//player = attachment;
	event.getMap(MAP_ID).clearMobs();
	event.getMap(MAP_ID).reset();
	//player.changeMap(MAP_ID, 0);

	makeMob();
	//player.setEvent(event);
	//player.addPQLog(LOG);
	event.startTimer("kick", everyTime);
	event.startTimer("Timedcall", 1 * 5 * 1000);
	endTime = new Date().getTime() + everyTime;
	map.showTimer(everyTime / 1000);

	event.setVariable("members", members);
	for (let i = 0; i < members.length; i++) {
		if (members[i].getEventValue(BOSS_LOG) >= 100) {
			members[i].showSystemMessage("聖誕BOSS進入次數已滿,強制離場.");
			members[i].changeMap(199000000);
		}
		members[i].setEvent(event);
		members[i].addPQLog(BOSS_LOG);
		members[i].addEventValue(BOSS_LOG, 1, 1);
		members[i].setDeathCount(DEATH_COUNT);
		//members[i].showSystemMessage("你進入了簡易副本");
	}
	//player.showSystemMessage("0/"+start+"");
}
function mobDied(mob) {
	if (mob.getMapId() == MAP_ID) {
		var DROPS = Math.floor(Math.random() * 10000);//道具掉落
		var DROPS0 = Math.floor(Math.random() * 100000);
		var DROPS1 = Math.floor(Math.random() * 100000);
		if (DROPS <= 6000) {
			mob.dropItem(4032053);
			mob.dropItem(4032053);
			mob.dropItem(4032053);
		}
		if (DROPS <= 3000) {
			mob.dropItem(4032053);
		}
		if (DROPS0 <= 3000) {
			DROPS5 = Array(4000539, 4000540, 4000541, 4000539, 4000540, 4000541, 4000539, 4000540, 4000541, 4000850, 4000539, 4000540, 4000540
			);
			var item0000 = Math.floor(Math.random() * DROPS5.length);
			mob.dropItem(DROPS5[item0000]);
		}
		if (DROPS1 <= 1000) {
			DROPS6 = Array(4000541, 4000850
			);
			var item0001 = Math.floor(Math.random() * DROPS6.length);
			//var item0002 = Math.floor(Math.random() * DROPS5.length);
			mob.dropItem(DROPS6[item0001]);
			//mob.dropItem(DROPS5[item0002]);​
		}
		if (DROPS0 <= 375) {
			SkillX = Array(2633825, 2634096, 2634095, 2634094, 2634060, 2633827, 2633825, 2633736, 2633735, 2633482, 2633310, 2633309, 2633272, 2633264, 2633075, 2633065, 2633061, 2633051, 2633035, 2632971, 2632913, 2632887, 2632885, 2632842, 2632834, 2632827, 2632821, 2632820, 2632764, 2632749, 2632735, 2632713, 2632445, 2632370, 2632361, 2632352,
			);
			var Skill1 = Math.floor(Math.random() * SkillX.length);
			mob.dropItem(SkillX[Skill1]);
		}

	}
	if (level >= mobList.length) { //當前關卡大於number 則通關
		if (event.getMap(MAP_ID).getEventMobCount() <= 0) {
			for (let i = 0; i < members.length; i++) {
				if (members[i].getEventValue("聖誕Boss全員獎勵") >= 1) {
					members[i].changeMap(103000000);
				}
				else {
					members[i].addEventValue("聖誕Boss全員獎勵", 1, 1);
					members[i].showSystemMessage("圓夢谷祝你聖誕快樂!!");
					members[i].gainItem(4310011, 20);
					members[i].changeMap(103000000);
					//event.broadcastPlayerNotice(7, "【測試" + REWARD_SCRIPT_NAME + "】 ： 玩家 " + members[i].getName() + " 在『" + REWARD_SCRIPT_NAME + "』獲得【0】");
					//members[i].removePlayer(player.getId(), true);
				}
			}
			//removePlayer(player.getId(), true));
			//player.gainItem(4000000,1)
			//event.broadcastPlayerNotice(7, "【" + REWARD_SCRIPT_NAME + "】 ： 玩家" + player.getName() + "在『" + REWARD_SCRIPT_NAME + "』獲得【英雄秘密箱子】");
		}
	}
	if (level < mobList.length) {
		if (event.getMap(MAP_ID).getEventMobCount() <= 0) {//通關
			random = Math.floor(Math.random() * mobList.length);
			//以下是開啓每輪時間 開啓後每一輪的時間為 everyTime 否則總時間為 everyTime
			/*
			event.stopTimer("kick");
			event.startTimer("kick", everyTime);
			 */
			if (level % mustLevel == 0) {
				makeMob();
				//player.scriptProgressMessage("恭喜您通過第 " + (level) + " 關!！");
				//player.showSystemMessage("恭喜您通過第 " + (level) + " 關!！");//單人
				for (let i = 0; i < members.length; i++) {//組隊
					members[i].showSystemMessage("恭喜您通過第 " + (level) + " 關!！");
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
	for (let i = 0; i < members.length; i++) {
		//members[i].showSystemMessage("是雪人");
	}

	let moblevel = (endTime - start) / 60000 + 1000;//算法为1
	//for (var i = 0; i < (moblevel*1-1)*8; i++) {//时间*10召唤数量
	for (var i = 0; i < ((moblevel / 100) * 1 / 2) + 1; i++) {//10*招喚數量
		var mob = map.makeMob(9400712);
		//mob.setForcedMobStat(230, 10);
		//mob.changeBaseHp(1030000000*(moblevel-1)*3);//时间*2HP
		mob.changeBaseHp(2000000000 * (moblevel / 100) * 10);//时间*2HP
		map.spawnMob(mob, 167, 270);
	}

	//event.broadcastPlayerNotice(7, ""+moblevel+"");
}

function makeMob() {
	var mobs = mobList[level];
	for (var i = 0; i < mobs.length; i++) {
		var mob = map.makeMob(mobs[i][0]);
		//mob.setForcedMobStat(230, 10)
		mob.changeBaseHp(mobs[i][1]);
		map.spawnMob(mob, mobs[i][2], mobs[i][3]);

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
				members[i].changeMap(103000000);
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
	player.changeMap(103000000);
	removePlayer(player.getId(), false);
}

function playerDeath(player) {
	player.changeMap(103000000);
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
		//dissociate event before changing map so playerChangedMap is not
		//called and this method is not called again by the player
		members[i].setEvent(null);
		members[i].changeMap(103000000);
	}
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
			event.startTimer("Timedcall", 1 * 25 * 1000);
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
