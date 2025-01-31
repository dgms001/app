/* This is a piece of code

 * author dgms

 * global player

 * Contact QQ 381991414 DC dgms#6650

 * function boss event 模版

 */
let mobList = Array(

	//第1階段，蘑菇王
	Array(
		Array(9451080, 55000000000000, 1951, 440),
		Array(9451080, 55000000000000, 2484, 440),
		Array(9451080, 55000000000000, 3017, 440),
		Array(9451080, 55000000000000, 2750, 215),
		Array(9451080, 55000000000000, 2218, 215),
		Array(9451080, 55000000000000, 2750, -25),
		Array(9451080, 55000000000000, 2218, -25),

		Array(9601301, 15000000000000, 1851, 440),
		Array(9601301, 15000000000000, 2051, 440),
		Array(9601301, 15000000000000, 2251, 440),
		Array(9601301, 15000000000000, 2451, 440),
		Array(9601301, 15000000000000, 2651, 440),
		Array(9601301, 15000000000000, 2851, 440),
		Array(9601301, 15000000000000, 3051, 440),

		Array(9601301, 15000000000000, 1851, 215),
		Array(9601301, 15000000000000, 2051, 215),
		Array(9601301, 15000000000000, 2251, 215),
		Array(9601301, 15000000000000, 2451, 215),
		Array(9601301, 15000000000000, 2651, 215),
		Array(9601301, 15000000000000, 2851, 215),
		Array(9601301, 15000000000000, 3051, 215),

		Array(9601301, 15000000000000, 1851, -25),
		Array(9601301, 15000000000000, 2051, -25),
		Array(9601301, 15000000000000, 2251, -25),
		Array(9601301, 15000000000000, 2451, -25),
		Array(9601301, 15000000000000, 2651, -25),
		Array(9601301, 15000000000000, 2851, -25),
		Array(9601301, 15000000000000, 3051, -25)

	),

	//第2階段，蝙蝠怪
	Array(
		//怪物ID 血量 X坐標 Y坐標
		Array(9451060, 65000000000000, 1951, 440),
		Array(9451060, 65000000000000, 2484, 440),
		Array(9451060, 65000000000000, 3017, 440),
		Array(9451060, 65000000000000, 2750, 215),
		Array(9451060, 65000000000000, 2218, 215),
		Array(9451060, 65000000000000, 2750, -25),
		Array(9451060, 65000000000000, 2218, -25),

		Array(9601301, 25000000000000, 1851, 440),
		Array(9601301, 25000000000000, 2051, 440),
		Array(9601301, 25000000000000, 2251, 440),
		Array(9601301, 25000000000000, 2451, 440),
		Array(9601301, 25000000000000, 2651, 440),
		Array(9601301, 25000000000000, 2851, 440),
		Array(9601301, 25000000000000, 3051, 440),

		Array(9601301, 25000000000000, 1851, 215),
		Array(9601301, 25000000000000, 2051, 215),
		Array(9601301, 25000000000000, 2251, 215),
		Array(9601301, 25000000000000, 2451, 215),
		Array(9601301, 25000000000000, 2651, 215),
		Array(9601301, 25000000000000, 2851, 215),
		Array(9601301, 25000000000000, 3051, 215),

		Array(9601301, 25000000000000, 1851, -25),
		Array(9601301, 25000000000000, 2051, -25),
		Array(9601301, 25000000000000, 2251, -25),
		Array(9601301, 25000000000000, 2451, -25),
		Array(9601301, 25000000000000, 2651, -25),
		Array(9601301, 25000000000000, 2851, -25),
		Array(9601301, 25000000000000, 3051, -25)
	),
	//第3階段，查烏
	Array(
		//怪物ID 血量 X坐標 Y坐標
		Array(9451040, 85000000000000, 1951, 440),
		Array(9451040, 85000000000000, 2484, 440),
		Array(9451040, 85000000000000, 3017, 440),
		Array(9451040, 85000000000000, 2750, 215),
		Array(9451040, 85000000000000, 2218, 215),
		Array(9451060, 85000000000000, 2750, -25),
		Array(9451060, 85000000000000, 2218, -25),

		Array(9601301, 35000000000000, 1851, 440),
		Array(9601301, 35000000000000, 2051, 440),
		Array(9601301, 35000000000000, 2251, 440),
		Array(9601301, 35000000000000, 2451, 440),
		Array(9601301, 35000000000000, 2651, 440),
		Array(9601301, 35000000000000, 2851, 440),
		Array(9601301, 35000000000000, 3051, 440),

		Array(9601301, 35000000000000, 1851, 215),
		Array(9601301, 35000000000000, 2051, 215),
		Array(9601301, 35000000000000, 2251, 215),
		Array(9601301, 35000000000000, 2451, 215),
		Array(9601301, 35000000000000, 2651, 215),
		Array(9601301, 35000000000000, 2851, 215),
		Array(9601301, 35000000000000, 3051, 215),

		Array(9601301, 35000000000000, 1851, -25),
		Array(9601301, 35000000000000, 2051, -25),
		Array(9601301, 35000000000000, 2251, -25),
		Array(9601301, 35000000000000, 2451, -25),
		Array(9601301, 35000000000000, 2651, -25),
		Array(9601301, 35000000000000, 2851, -25),
		Array(9601301, 35000000000000, 3051, -25)
	),
	//第4階段，薛西斯
	Array(
		//怪物ID 血量 X坐標 Y坐標
		Array(9402196, 119990000, 2750, 440)
	),
	//第5階段，阿麗莎
	/*Array(
		//怪物ID 血量 X坐標 Y坐標
		Array(9833433, 4000, 319, 353)
		),
	//第6階段
	Array(
		//怪物ID 血量 X坐標 Y坐標
		Array(9833434, 10000, 319, 353)
		),

	//第7階段
	Array(
		//怪物ID 血量 X坐標 Y坐標
		Array(9833437, 1000000, 319, 353)
		),

	//第8階段
	Array(
		//怪物ID 血量 X坐標 Y坐標
		Array(9833439, 1000000, 319, 353)
		),

	//第9階段
	Array(
		//怪物ID 血量 X坐標 Y坐標
		Array(9833380, 229000, 319, 353)
		)*/
);
let player;
let map;
let start;
let endTime;
let everyTime = 10 * 60 * 1000; //副本時間 也可以是每輪時間 默認是總時間
let REWARD_SCRIPT_NAME = "副本";
//let MAP_ID = 940301000 ;//深淵圖 離開後看不到其他人要換頻
let MAP_ID = 993029200;
let BOSS_LOG = "椅子副本困難";
let level = 0;
let mustLevel = 1;
let totalTime = 0;
let party;
let members;
let DEATH_COUNT = 2
let random = Math.floor(Math.random() * mobList.length);

let itemss1 = 4032055;//入場道具
let itemss2 = 1;
function init(attachment) {
	party = attachment;
	party.changeMap(MAP_ID, 0);
	party.loseItem(itemss1, itemss2)
	members = party.getLocalMembers();


	start = new Date().getTime();
	event.setVariable("state", "1");
	event.setVariable("leader", "true");
	//player = attachment;
	event.getMap(MAP_ID).clearMobs();
	event.getMap(MAP_ID).reset();
	//player.changeMap(MAP_ID, 0);
	map = event.getMap(MAP_ID);
	makeMob();
	//player.setEvent(event);
	//player.addPQLog(LOG);
	event.startTimer("kick", everyTime);
	event.startTimer("Timedcall", 1 * 60 * 1000);
	endTime = new Date().getTime() + everyTime;
	map.showTimer(everyTime / 1000);

	event.setVariable("members", members);
	for (let i = 0; i < members.length; i++) {
		if (members[i].getEventValue("椅子副本困難") >= 1) {
			members[i].showSystemMessage("今日困難副本進入次數已滿,強制離場.");
			members[i].changeMap(199000000);
		}
		members[i].setEvent(event);
		members[i].addPQLog(BOSS_LOG);
		members[i].addEventValue(BOSS_LOG, 1, 1);
		members[i].setDeathCount(DEATH_COUNT);
		//members[i].showSystemMessage("你進入了困難副本");
	}
	//player.showSystemMessage("0/"+start+"");
}
function mobDied(mob) {
	if (level >= mobList.length) { //當前關卡大於number 則通關
		if (event.getMap(MAP_ID).getEventMobCount() <= 0) {
			for (let i = 0; i < members.length; i++) {
				members[i].showSystemMessage("恭喜玩家獲得領取椅子副本困難全員獎勵!!");
				members[i].addEventValue("椅子副本困難全員獎勵", 1, 1);
				members[i].gainItem(2436711, 1);
				members[i].changeMap(101000000);
				//event.broadcastPlayerNotice(7, "【測試" + REWARD_SCRIPT_NAME + "】 ： 玩家 " + members[i].getName() + " 在『" + REWARD_SCRIPT_NAME + "』獲得【0】");
				//members[i].removePlayer(player.getId(), true);
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
	cc = endTime - start;
	cc1 = ((cc / 60000 + 1000) / 100) * 5;
	cc2 = (1010000000 * ((cc / 60000 + 1000) / 10) * 10) / 101000000;
	//player.showSystemMessage("1/"+start+"");
	//player.showSystemMessage("2/"+endTime+"");
	for (let i = 0; i < members.length; i++) {
		members[i].showSystemMessage("出現一群小巴洛谷來干擾了");
		//members[i].showSystemMessage("3/"+cc+"");	
		//members[i].showSystemMessage("招喚總數量="+cc1+"");
		//members[i].showSystemMessage("血量/"+cc2+"e");
	}

	let moblevel = (endTime - start) / 60000 + 1000;//算法为1
	//for (var i = 0; i < (moblevel*1-1)*8; i++) {//时间*10召唤数量
	for (var i = 0; i < (moblevel / 100) * 2; i++) {//10*招喚數量
		var mob = map.makeMob(9402010);
		//mob.setForcedMobStat(275, 50);
		//mob.changeBaseHp(1010000000*(moblevel-1)*3);//时间*2HP
		mob.changeBaseHp(1010000000 * (moblevel / 10) * 100);//时间*2HP
		map.spawnMob(mob, 1318, 150);
	} for (var i = 0; i < (moblevel / 100) * 2; i++) {//时间*10召唤数量
		var mob = map.makeMob(9402010);
		//mob.setForcedMobStat(275, 50);
		mob.changeBaseHp(900000000 * (moblevel / 10) * 100);//时间*2HP
		map.spawnMob(mob, 1118, -20);
	} for (var i = 0; i < (moblevel / 100) * 1; i++) {//时间*10召唤数量
		var mob = map.makeMob(9402010);
		//mob.setForcedMobStat(275, 50);
		mob.changeBaseHp(900000000 * (moblevel / 10) * 100);//时间*2HP
		map.spawnMob(mob, 1618, -20);
	}

	//event.broadcastPlayerNotice(7, ""+moblevel+"");
}

function makeMob() {
	var mobs = mobList[level];
	for (var i = 0; i < mobs.length; i++) {
		var mob = map.makeMob(mobs[i][0]);
		//mob.setForcedMobStat(275, 50)
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
	player.changeMap(101000000);
	removePlayer(player.getId(), false);
}

function playerDeath(player) {
	player.changeMap(101000000);
	removePlayer(player.getId(), false);
}

function playerChangedMap(player, destination) {
	if (destination.getId() != MAP_ID) {
		removePlayer(player.getId(), false);
	} event.destroyEvent();
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
		members[i].changeMap(101000000);
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
			event.startTimer("Timedcall", 1 * 60 * 1000);
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
