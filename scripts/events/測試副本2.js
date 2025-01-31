/*
npc.rememberMap("RETURN_MAP");//"RETURN_MAP"不可改
let [returnMap, spawnPoint] = npc.getRememberedMap("RETURN_MAP");
let onlyOne = true;

if (npc.makeEvent("測試副本2", onlyOne, [party,returnMap]) == null) {
	npc.sayNextS("#fs17##e#b已經有人在使用此副本了,請更換其他頻道嘗試。", true);
}


*/
let player;
let map;
let start;
let endTime;
let everyTime = 1*60* 1000;//功能時效 大於副本時間+進場時間等等...
// let MAP_ID = 910196340 ;//套用地圖
let MAP_ID;//套用地圖
let LOG = "測試副本";
let party;
let members;
let kill = 0;
let exp = 1;
let DEATH_COUNT = 10;

function init(attachment) {
	party = attachment[0];
	MAP_ID = attachment[1];
	
	//party.changeMap(MAP_ID, 0);//
	members = party.getLocalMembers();
	map = event.getMap(MAP_ID);
	map.clearMobs();
	
	map.reset();
	map.setNoSpawn​(true);
	// map.resetMobsSpawns();
	start=new Date().getTime();
	//event.setVariable("state", "1");
	//event.setVariable("leader", "true");
	event.setVariable("mobCount","0");//926010100
	event.setVariable("Life","30");//993000100
	
	// map.changeFiledObjectColor(6, 130, 130, 130, 0, true, 0);
	// event.startTimer("spawn", 1 * 1500);
	
	event.setVariable("wave","0");
	event.startTimer("wave", 2*1000);//每回合
	
// npc.say("");
	
	
	event.startTimer("kick", everyTime);//時效結束
	//event.startTimer("ss", 10*1000);//測試腳本運行
	
	event.setVariable("members", members);
		for (let i = 0; i < members.length; i++) {
				members[i].setEvent(event);
				members[i].showTimer(everyTime/1000);
				members[i].showSystemMessage("通知｜開啟了 "+LOG+"");
				members[i].showSystemMessage("通知｜警告轉移地圖副本失效");
				//members[i].showSystemMessage("測試"+members.length+"");
				members[i].setDeathCount(DEATH_COUNT);
				//判斷傷害初始化
				//event.setVariable(members[i].getName()+"存活",0);
		}
}


function spawnMobs(){
	let mob1 = map.makeMob(3300109);
	let mob2 = map.makeMob(3300109);
	let mob3 = map.makeMob(3300109);
	let mob4 = map.makeMob(3300109);
	
	mob1.changeBaseHp(1000);
	// mob2.setMoveAction(7);
	// mob2.setAppearType(0);
	map.spawnMob(mob1, 450, 165);
	event.setVariable("mob"+mob1.getEntityId(),"0");			//沒資料寫0
	event.setVariable("moblife"+mob1.getEntityId(),"0");		//防死亡
}

function mobDied(mob) {

		aaa = mob
		// map.blowWeatherEffectNotice("地圖廣", 234, 2000);
	
	map.setNoSpawn​(false);
		// map.spawnMob​(mob.getDataId(), player.getPosition().getX(), player.getPosition().getY())
		/*var DROPS = Math.floor(Math.random() * 1000);//道具掉落
		
		var DROPSitem = Array(4021032,4021032);
		var item0000 = Math.floor(Math.random() * DROPSitem.length);
		if( DROPS <= 500 ){
			mob.dropItem(DROPSitem[item0000]);​
		}*/
		
		// map.blowWeather(5120000, "好久沒看到有人來了，但是也沒看到有人可以回去。"+map.getPlayerCount()+"");
		
		
		/*var DROPS = Math.floor(Math.random() * 10000);//道具掉落
		var DROPS0 = Math.floor(Math.random() * 1000000);
		let mobCount = parseInt(event.getVariable("mobCount"));
		event.setVariable("mobCount",mobCount+1);//分數
		for (let i = 0; i < members.length; i++) {
			if( DROPS <= 1000 ){
			kill++;
			}
		}*/
		
		
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
//----------------------------------------------------------------------
function mobHit(player, mob, damage) {

switch (mob.getDataId()) {//小怪
	// case 100004:
		// player.dropMessage(1,"玩家："+player.getName()+" 對菇菇傷害");
		// break;
	default:
		count = 1;//在幾下後 才會死亡
		if(event.getVariable("mob"+mob.getEntityId()) == null) {	//getEntityId怪物的獨立id  
			event.setVariable("mob"+mob.getEntityId(),"0");			//沒資料寫0
			event.setVariable("moblife"+mob.getEntityId(),"0");		//防死亡
			mob.changeBaseHp​(10);//防止死亡
		} else if(event.getVariable("mob"+mob.getEntityId()) >= count) {
			event.setVariable("moblife"+mob.getEntityId(),"1");		//1 = 可以去死了
			// map.spawnMob​(mob.getDataId(), player.getPosition().getX(), player.getPosition().getY())
			for (let i = 0; i < members.length; i++) {
				members[i].showSystemMessage("");
			}
		} else {
			mhp = parseInt(event.getVariable("mob"+mob.getEntityId()));
			event.setVariable("mob"+mob.getEntityId(), mhp+1);
		}
		
		if(event.getVariable("mob"+mob.getEntityId()) != count && event.getVariable("moblife"+mob.getEntityId()) == 0){   
			mob.changeBaseHp​(10);//防止死亡
		}
		break;
}

	var mobIds = [9390002]//設定的怪物場上只同代碼只能1隻 因為腳本擊殺後 只有killMonster(怪物代碼) 整場的同代馬都會死亡
	if(mobIds.indexOf(mob.getDataId()) != -1){
		
	}
	
}

//--------------------------------------------------------------------------------------

function removePlayer(playerId, changeMap) {
		for (let i = 0; i < members.length; i++) {
				if (members[i].getId() == playerId) {
						//dissociate event before changing map so playerChangedMap is
						//not called and this method is not called again by the player
						//members[i].showSystemMessage("removePlayer");
						members[i].setEvent(null);
						if (changeMap)
						//members[i].changeMap(101000000);
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
		removePlayer(player.getId(), true);
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
			//members[i].showSystemMessage("輔助功能:狀態時間到了");
			// members[i].showSystemMessage("統計｜此功能讓你們額外獲得的: "+kill+" 個");
			members[i].showSystemMessage("kick");
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
		event.stopTimers();
		kick();
		break;
	case "spawn":
		spawnMobs();
		
		
		event.startTimer("spawn", 1 * 2000);
		break;
	case "wave":
			/*let moba = map.getMobById(3300109);
			if(moba != null){
				if (moba.checkNearby(new java.awt.Point(-727,155), 50)) {
					if(moba.getHp() >=2){
						moba.setHp(1);
						event.setVariable("moblife"+moba.getEntityId(),"1");
						for (let i = 0; i < members.length; i++) {
							members[i].showSystemMessage("生命 - 1");
						}
					}
				}
			}
			map.blowWeatherEffectNotice(""+map.getMobById(3300109)+"", 234, 1000);*/
			event.startTimer("wave", 1 * 500);
		break;
	/*case "mobCount":
		//player.changeMap(993189201);
		//removePlayer(player.getId(), true);
		kick();
		break;*/
	case "ss":
		ss();
		event.startTimer("ss", 10*1000);
		break;
	}
}

/*function deinit() {//單人
	player.setEvent(null);
}*/
function deinit() {//翻譯為 去初始化 組隊
        event.getMap(MAP_ID).endFieldEvent();
		for (let i = 0; i < members.length; i++) {
				members[i].setEvent(null);
				//members[i].showSystemMessage(""+LOG+" 消失");
				members[i].setDeathCount(-1);
		}
		//mobCount = event.getVariable("mobCount");
		
}
