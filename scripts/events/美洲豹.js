/* This is a piece of code

 * author dgms

 * global player

 * Contact QQ 381991414 DC dgms#6650

 * function boss event 模版

 */

let X = -148;
let Y = 0;
let HPS = 10000;// 

let player;
let map;
let start;
let endTime;
let everyTime = 10 * 60 * 1000; //副本時間 也可以是每輪時間 默認是總時間
let MAP_ID = 931000501;//0~1000 , 210
let BOSS_LOG = "美洲豹";
let level = 0;
let mustLevel = 1;
let totalTime = 0;
let party;
let members;
let DEATH_COUNT = 5

function init(attachment) {
	party = attachment;
	party.changeMap(MAP_ID, 0);
	//party.loseItem(itemss1,itemss2)
	members = party.getLocalMembers();
	map = event.getMap(MAP_ID);
	start = new Date().getTime();
	event.getMap(MAP_ID).setNoSpawn(true);
	event.getMap(MAP_ID).clearMobs();

	startMobs();
	event.startTimer("kick", everyTime);

	endTime = new Date().getTime() + everyTime;
	map.showTimer(everyTime / 1000);

	event.setVariable("members", members);
	for (let i = 0; i < members.length; i++) {
		if (members[i].getEventValue(BOSS_LOG) >= 200) {
			members[i].showSystemMessage("今日進場次數已滿");
			members[i].changeMap(101000000);
		}
		members[i].setEvent(event);
		members[i].addEventValue(BOSS_LOG, 1, 1);
		//members[i].setDeathCount(DEATH_COUNT);
	}
}

function mobDied(mob) {

}


function startMobs() {
	endTime = new Date().getTime();

	let moblevel = (endTime - start) / 60000;//算法为1
	gg = level + 1;
	let mons = Array(9304005, 9304005, 9304006, 9304007, 9304008);
	for (var i = 0; i < 1; i++) {//10*招喚數量
		var mobb = Math.floor(Math.random() * mons.length);
		var mob = map.makeMob(mons[mobb]);
		//mob.setForcedMobStat(100);
		mob.changeBaseHp(HPS * gg);//时间*2HP
		map.spawnMob(mob, X, Y);
	}

	//event.broadcastPlayerNotice(7, ""+moblevel+"");
}


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
		event.getMap(MAP_ID).reset();
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
			//event.stopTimer("Timedcall");
			//event.startTimer("Timedcall",8 * 1000);
			break;
	}
}

function deinit() {//組隊
	event.getMap(MAP_ID).endFieldEvent();
	for (let i = 0; i < members.length; i++) {
		members[i].setEvent(null);
		members[i].setDeathCount(-1);
	}
}
