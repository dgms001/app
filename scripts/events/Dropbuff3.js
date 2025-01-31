/*	副本賦予掉落模板
	地圖中擊殺怪物機率掉落指定道具
	轉換地圖失效
	附加功能
	全隊員進場消耗道具
	全隊員總擊殺-計數器
 */

let player;
let map;
let start;
let endTime;
let everyTime = 10 * 60 * 1000;//功能時效 大於副本時間+進場時間等等...
let MAP_ID = 103000000;//套用地圖
let LOG = "22:00活動";
let party;
let members;
let itemss1 = 4032055;//入場道具
let itemss2 = 1;//消耗數量
let kill = 0;
let kill1 = 0;
let kill2 = 0;
let kill3 = 0;
let exp = 1;

function init(attachment) {
	party = attachment;
	//party.changeMap(MAP_ID, 0);//
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
		members[i].showTimer(everyTime / 1000);
		// members[i].showSystemMessage("通知｜你的隊長開啟了 "+LOG+"");
		// members[i].showSystemMessage("通知｜警告轉移傳送地圖皆會造成全隊狀態失效");
		//members[i].showSystemMessage("測試"+members.length+"");
	}
}



function mobDied(mob) {
	var DROPS = Math.floor(Math.random() * 10000);//道具掉落
	var DROPS0 = Math.floor(Math.random() * 100000);
	var DROPS1 = Math.floor(Math.random() * 10000);
	var DROPS2 = Math.floor(Math.random() * 10000);
	let mobCount = parseInt(event.getVariable("mobCount"));
	var DROPSitem1 = Array(
		1003797,
		1003798,
		1003799,
		1003800,
		1003801);
	event.setVariable("mobCount", mobCount + 1);//分數
	if (DROPS <= 10000) {
		// mob.dropItem(DROPSitem1[Math.floor(Math.random() * DROPSitem1.length)]);​
		// mob.dropItem(DROPSitem1[Math.floor(Math.random() * DROPSitem1.length)]);​
		//mob.dropItem(4032053);​
		kill++;
	}
	if (DROPS1 <= 500) {
		mob.dropItem(4021032);
		kill1++;
	}
	if (DROPS2 <= 400) {
		mob.dropItem(4009454);
		kill2++;
	}
	if (DROPS0 <= 9) {
		mob.dropItem(4000850);
		// event.broadcastPlayerNotice(7,"恭喜有人掉落2200-2300小概率 蘇打珍珠");
		kill3++;
	}
	for (let i = 0; i < members.length; i++) {
	}
	/*if(mobCount == 0){
		for (let i = 0; i < members.length; i++) {
			//members[i].showSystemMessage("隊伍擊殺通知:開啟");
		}
	}else if(mobCount % 100 == 0){
		for (let i = 0; i < members.length; i++) {
			members[i].showSystemMessage("隊伍擊殺通知:"+mobCount+"殺");
		}
	}*/

}

function removePlayer(playerId, changeMap) {
	for (let i = 0; i < members.length; i++) {
		if (members[i].getId() == playerId) {
			//dissociate event before changing map so playerChangedMap is
			//not called and this method is not called again by the player
			//members[i].showSystemMessage("removePlayer");
			members[i].setEvent(null);
			//members[i].showSystemMessage("輔助功能狀態消失");
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
		kick();//玩家轉移地圖不是 MAP_ID 執行kick
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
	let mobCount = event.getVariable("mobCount");
	for (let i = 0; i < members.length; i++) {
		members[i].setEvent(null);
		//members[i].showSystemMessage("輔助功能:狀態時間到了");
		members[i].showSystemMessage("你們總共擊殺了 " + mobCount + " 隻怪物");
		members[i].showSystemMessage("統計｜金楓: " + kill + " 個");
		members[i].showSystemMessage("統計｜結晶: " + kill1 + " 個");
		members[i].showSystemMessage("統計｜草原: " + kill2 + " 個");
		members[i].showSystemMessage("統計｜蘇打珍珠: " + kill3 + " 個");
		//members[i].gainItem(4310071,(Math.floor(mobCount/500)));
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
		members[i].showSystemMessage("" + LOG + " 輔助功能消失");
		//members[i].setDeathCount(-1);
	}
	mobCount = event.getVariable("mobCount");
	mobCount611 = Math.floor(Math.random() * 5);
	// event.broadcastPlayerNotice((6+mobCount611),"【輔助功能】隊伍"+party.getLeader()+" 人數:"+members.length+" 人 造成 " + mobCount + " 殺");
}
