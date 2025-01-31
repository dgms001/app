

let EXIT_MAP = 101000000;


let DEATH_COUNT = 5;

// let BOSS_LOG = "風雨森林";
let BOSS_LOG = "玩具副本";
let party;
let count;
let members;
let endTime;
var maps = 327090410;

let itemss1 = 4031434;//入場道具
let itemss2 = 1;

var map_1;

function init(attachment) {
	party = attachment;
	members = party.getLocalMembers();

	party.loseItem(itemss1, itemss2);
	map_1 = event.getMap(maps);
	spawnMobs();
	party.changeMap(maps, "st00");
	map_1.showTimer(30 * 60);

	event.startTimer("kick", 30 * 60 * 1000);
	endTime = new Date().getTime() + 30 * 60 * 1000;

	event.setVariable("members", members);
	event.startTimer("summon_obtacle", 4000);
	for (let i = 0; i < members.length; i++) {
		if (members[i].getEventValue(BOSS_LOG) >= 10000) {
			members[i].showSystemMessage("副本進入帳號次數已滿,強制離場.");
			members[i].changeMap(101000000);
		} else {
			members[i].setEvent(event);
			members[i].addEventValue(BOSS_LOG, 1, 1);
			members[i].addEventValue(BOSS_LOG + "總次數", 1, 999);
			// members[i].addPQLog(BOSS_LOG);
			members[i].setDeathCount(DEATH_COUNT);
		}

	}

}

function makeMob(mobid, hp, x, y, map, pw) {
	var boss = map.makeMob(mobid);
	boss.setForcedMobStat(250, pw);
	boss.changeBaseHp(hp);
	map.spawnMob(boss, x, y);
}

function spawnMobs() {

	map_1.reset();
	makeMob(9410861, 3000000, 1674, -98, map_1, 1);
	makeMob(8220024, 101000000000000, 2100, 100, map_1, 1);
	makeMob(8220023, 101000000000000, 1900, 100, map_1, 1);
	// makeMob(8220024,1010000000000,1700, 100,map_1,1);
	// makeMob(8220024,1010000000000,1300, 100,map_1,1);		
	// makeMob(8220023,1010000000000,1100, 100,map_1,1);

	// makeMob(8220022,1010000000000,1300, 100,map_1,10);
	// makeMob(8220025,1010000000000,1900, 100,map_1,10);
	// makeMob(8220026,1010000000000,1800, 100,map_1,10);			


}

function mobDied(mob) {
	// if (map_1.getEventMobCount() <= 1) {
	// }
	switch (mob.getDataId()) {
		case 9410861:
			map_1.reset();
			for (let i = 0; i < members.length; i++) {
				members[i].showSystemMessage("恭喜通關獲得獎勵！！在10秒後自動離場。");
				members[i].showProgressMessageFont("恭喜通關獲得獎勵！！在10秒後自動離場。", 0, 30, 16, 10);//MSG,字體,大小,顏色,時間?
				members[i].runScript("玩具道具隨機");
				members[i].showTimer(8);
			}
			event.stopTimer("kick");
			event.startTimer("kick", 8 * 1000);
			break;
		case 8220022:
		case 8220023:
		case 8220024:
		case 8220025:
		case 8220026:
			makeMob(mob.getDataId(), 101000000000000, 1700, 100, map_1, 1);
			break;
	}
}

function mobHit(player, mob, damage) {
	/*
		switch (mob.getDataId()) {//小怪
			case 9400050:
				count = 500;
				break;
			case 9001058:
				count = 400;
				break;
			case 9833564:
				count = 300;
				// player.dropMessage(1,"玩家："+player.getName()+" 對菇菇傷害");
				break;
			case 8220022:
			case 8220023:
			case 8220024:
			case 8220025:
			case 8220026:
				count = 100;
				break;
			default:
				// count = 1;//在幾下後 才會死亡
				
				break;
		}
		if (damage != 0 && count != null){
			if(event.getVariable("mob"+mob.getEntityId()) == null) {	//getEntityId怪物的獨立id  
				event.setVariable("mob"+mob.getEntityId(),"0");			//沒資料寫0
				event.setVariable("moblife"+mob.getEntityId(),"0");		//防死亡
				mob.changeBaseHp​(10);//防止死亡
			} else if(event.getVariable("moblife"+mob.getEntityId()) == 1) {//過圖重新定義
				event.setVariable("mob"+mob.getEntityId(),"0");			//
				event.setVariable("moblife"+mob.getEntityId(),"0");		//
				mob.changeBaseHp​(10);//防止死亡
				
			} else if(event.getVariable("mob"+mob.getEntityId()) >= count) {
				event.setVariable("moblife"+mob.getEntityId(),"1");		//1 = 可以去死了
				// player.showSystemMessage("可以去死了");
				
				
			} else{
				mhp = parseInt(event.getVariable("mob"+mob.getEntityId()));
				event.setVariable("mob"+mob.getEntityId(), mhp+1);
			}
			
			if(event.getVariable("mob"+mob.getEntityId()) != count && event.getVariable("moblife"+mob.getEntityId()) == 0){   
				mob.changeBaseHp​(10);//防止死亡
			}
		}*/
	/*var mobIds = [9390002]//設定的怪物場上只同代碼只能1隻 因為腳本擊殺後 只有killMonster(怪物代碼) 整場的同代馬都會死亡
	if(mobIds.indexOf(mob.getDataId()) != -1){
		
	}*/

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
	//TODO: is it true that even when a non-leader clicks Nella, the entire
	//party is booted? and that GMS forces party out when only two members
	//remain alive and online?
	switch (destination.getId()) {
		case maps:
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
	map_1.reset();
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
	}
}

function deinit() {
	for (let i = 0; i < members.length; i++) {
		members[i].setEvent(null);
		members[i].setDeathCount(-1);
	}
}