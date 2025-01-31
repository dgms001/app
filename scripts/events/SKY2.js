/*	副本賦予掉落模板
	地圖中擊殺怪物機率掉落指定道具
	轉換地圖失效
	附加功能
	全隊員進場消耗道具
	全隊員總擊殺-計數器
	members[i]正常生效
 */

let player;
let map;
let start;
let endTime;
let everyTime = 21 * 60 * 1000;//功能時效 大於副本時間+進場時間等等...
let MAP_ID = 940513000;//套用地圖
let BOSS_LOG = "掉落狀態";
let party;
let members;
let em = event.getVariable("百鬼2");
let itemss1 = 4032055;//入場道具
let itemss2 = 1;//消耗數量
let kill = 0;

function init(attachment) {
	party = attachment;
	party.changeMap(MAP_ID, 0);//
	//party.loseItem(itemss1,itemss2);//進場觸發消耗
	members = party.getLocalMembers();
	map = event.getMap(MAP_ID);
	start = new Date().getTime();
	//event.setVariable("state", "1");
	//event.setVariable("leader", "true");
	event.setVariable("mobCount", "0");
	event.startTimer("kick", everyTime);//時效結束
	//event.startTimer("ss", 10*1000);//測試腳本運行中

	event.setVariable("members", members);
	for (let i = 0; i < members.length; i++) {
		members[i].setEvent(event);
	}
}



function mobDied(mob) {
	if (mob.getMapId() == MAP_ID) {
		var DROPS = Math.floor(Math.random() * 10000);//道具掉落
		var DROPS0 = Math.floor(Math.random() * 20000);
		let mobCount = parseInt(event.getVariable("mobCount"));
		event.setVariable("mobCount", mobCount + 1);//分數
		if (DROPS <= 2000) {
			mob.dropItem(4032053);
		}
		if (DROPS <= 300) {
			for (let i = 0; i < members.length; i++) {
				members[i].runScript("mp");
			}
		}
		/*if( DROPS <= 100 ){
			mob.dropItem(4032053);
			for (let i = 0; i < members.length; i++) {
			//members[i].useItemEffect(2022430);
			//members[i].useItemEffect(2023895);​
			//members[i].useItemEffect(2023745);//+傷害25% +EXP 220%
			members[i].useItemEffect(2023825);//BOSS+100%
			members[i].useItemEffect(2023830);//全能力100
			//members[i].useItemEffect(2023828);//EXP20%
			members[i].useSkillEffect​(91001025,60,2000);//RD 30%
			members[i].useSkillEffect​(91001022,60,2000);//B 30%
			members[i].useSkillEffect​(91001024,60,2000);//D 30%
			members[i].useSkillEffect​(91001023,60,2000);//XD 30%
			/
		}*/
		if (mobCount == 0) {
			for (let i = 0; i < members.length; i++) {
				members[i].showSystemMessage("【百鬼夜行】隊伍百殺通知:運行開始");
			}
		} else if (mobCount % 100 == 0) {
			for (let i = 0; i < members.length; i++) {
				members[i].showSystemMessage("【百鬼夜行】隊伍百殺通知:" + kill + "殺");
			}
		}
		if (DROPS0 <= 50) {
			mob.dropItem(4310071);
			event.broadcastPlayerNotice(7, "OX幣掉落,快去搶奪");
		}

		kill++;
	}
}

function playerPickupItem(player, map, itemId) {
	if (itemId == 4310071) {
		player.scriptProgressMessage("你撿到了OX幣");
		event.broadcastPlayerNotice(7, "" + player.getName() + " 撿到了1個OX幣");
	}
}

function removePlayer(playerId, changeMap) {
	mobCount = event.getVariable("mobCount");
	for (let i = 0; i < members.length; i++) {
		if (members[i].getId() == playerId) {
			//dissociate event before changing map so playerChangedMap is
			//not called and this method is not called again by the player
			//members[i].showSystemMessage("removePlayer");
			members[i].setEvent(null);
			members[i].showSystemMessage("百鬼狀態消失");
			members[i].showSystemMessage("【百鬼夜行】隊伍成員擊殺了 " + mobCount + " 隻怪物");
			members[i].showSystemMessage("【百鬼夜行】統計｜" + Math.floor(mobCount / 500) + " 個OX幣");
			members[i].gainItem(4310071, (mobCount / 500));
			if (changeMap)
				//members[i].changeMap(103000000);
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
	//player.changeMap(103000000);
	removePlayer(player.getId(), false);
}

function playerDeath(player) {
	//player.changeMap(103000000);
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
		members[i].setEvent(null);
		//members[i].showSystemMessage("輔助功能:狀態時間到了");;
		//members[i].showSystemMessage("kick");
	}
	event.destroyEvent();
}

function ss() {//測試運行
	for (let i = 0; i < members.length; i++) {
		members[i].showSystemMessage("輔助功能運行中");
	}
}

function timerExpired(key) {
	switch (key) {
		case "kick":
			//player.changeMap(993189201);
			//removePlayer(player.getId(), true);
			kick();
			break;
		case "mobCount":
			//player.changeMap(993189201);
			//removePlayer(player.getId(), true);
			kick();
			break;
		case "ss":
			ss();
			event.startTimer("ss", 10 * 1000);
			break;
	}
}

/*function deinit() {//單人
	player.setEvent(null);
}*/
function deinit() {//翻譯為 去初始化 組隊
	for (let i = 0; i < members.length; i++) {
		members[i].setEvent(null);
		//members[i].showSystemMessage("百鬼狀態消失");
		//members[i].setDeathCount(-1);
	}
}
