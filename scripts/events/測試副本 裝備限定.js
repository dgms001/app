

let player;
let map;
let start;
let endTime;
let everyTime = 10*60* 1000;//功能時效 大於副本時間+進場時間等等...
let MAP_ID = 100010000 ;//套用地圖
let LOG = "測試副本";
let party;
let members;
let itemss1 = 4032055;//入場道具
let itemss2 = 1;//消耗數量
let kill = 0;
let exp = 1;
let DEATH_COUNT = 10;

function init(attachment) {
	party = attachment;
	party.changeMap(MAP_ID, 0);//
	//party.loseItem(itemss1,itemss2);//進場觸發消耗
	members = party.getLocalMembers();
	map = event.getMap(MAP_ID);
	start=new Date().getTime();
	//event.setVariable("state", "1");
	//event.setVariable("leader", "true");
	event.setVariable("mobCount","0");
	
	/*這是一隻怪物----------------------------------------------*/
	dummy = map.makeMob(9390002);
	dummy.setForcedMobStat(300,100);		//傷害歸1
	dummy.changeBaseHp(100*1010000000000);	//防止持續傷過度傷害
	map.spawnMob(dummy, 718, 305);
    event.setVariable("stage1_dummy", dummy);
	/*結束---------------------------------------------*/
	
	event.startTimer("kick", everyTime);//時效結束
	//event.startTimer("ss", 10*1000);//測試腳本運行中
	event.setVariable("members", members);
		for (let i = 0; i < members.length; i++) {
				members[i].setEvent(event);
				members[i].showTimer(everyTime/1000);
				//members[i].showSystemMessage("通知｜你的隊長開啟了 "+LOG+"");
				//members[i].showSystemMessage("通知｜警告轉移傳送地圖皆會造成全隊狀態失效");
				//members[i].showSystemMessage("測試"+members.length+"");
				members[i].setDeathCount(DEATH_COUNT);
				//判斷傷害初始化
				event.setVariable(members[i].getName()+"傷害",0);
		}
}



function mobDied(mob) {

	if(mob.getDataId() == 1210102){
		mob.dropItem(4021032);​
	}
	if(mob.getDataId() == 9400206){
		var DROPS = Math.floor(Math.random() * 100000);//道具掉落
		
		var DROPSitem = Array(4021032,4021032);
		var item0000 = Math.floor(Math.random() * DROPSitem.length);
		if( DROPS <= 500 ){
			mob.dropItem(DROPSitem[item0000]);​
		}
		
	}
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
	case 1210102:
		//player.dropMessage(1,"玩家："+player.getName()+" 對菇菇傷害");
		break;
	default:
		break;
}

	var mobIds = [9390002]//設定的怪物場上只同代碼只能1隻 因為腳本擊殺後 只有killMonster(怪物代碼) 整場的同代馬都會死亡
	if(mobIds.indexOf(mob.getDataId()) != -1){
		
		/*定義裝備欄位 是否為指定裝備*/
		eq = 0;//裝備正確數量定義
		
		eqlv = 0;//設定強化+?以上 判斷
		equip1 = player.getInventorySlot(-1, -2);//1012164 臉
		equip2 = player.getInventorySlot(-1, -4);//1032205 耳環
		equip3 = player.getInventorySlot(-1, -12);//1113132 戒指
		equip4 = player.getInventorySlot(-1, -13);
		equip5 = player.getInventorySlot(-1, -15);//1112956 戒指
		equip6 = player.getInventorySlot(-1, -16);//1113083 戒指
		equip7 = player.getInventorySlot(-1, -17);//1122296 項鍊
		equip8 = player.getInventorySlot(-1, -36);
		if(equip1 != null){
			if(equip1.getDataId()==1012164){
				str = equip1.getTitle();
				if (str != "") {
					equip1 = str.substring(0, 3);//獲取抬頭 強化+
					str = str.substring(3, 4);// 加多少
					if (equip1 == "強化+") {
						if (str >= eqlv){
							eq++;	
						}
					}
				}
			}
		}
		if(equip2 != null){
			if(equip2.getDataId()==1032205){
				str = equip2.getTitle();
				if (str != "") {
					equip2 = str.substring(0, 3);//獲取抬頭 強化+
					str = str.substring(3, 4);// 獲取加多少
					if (equip2 == "強化+") {
						if (str >= eqlv){		//>=n n以上
							eq++;	
						}
					}
				}
			}
		}
		if(equip3 != null){
			if(equip3.getDataId()==1113132 || equip3.getDataId()==1112956 || equip3.getDataId()==1113083){
				str = equip3.getTitle();
				if (str != "") {
					equip3 = str.substring(0, 3);//獲取抬頭 強化+
					str = str.substring(3, 4);// 獲取加多少
					if (equip3 == "強化+") {
						if (str >= eqlv){		//>=n n以上
							eq++;	
						}
					}
				}
			}
		}
		if(equip4 != null){
			if(equip4.getDataId()==1113132 || equip4.getDataId()==1112956 || equip4.getDataId()==1113083){
				str = equip4.getTitle();
				if (str != "") {
					equip4 = str.substring(0, 3);//獲取抬頭 強化+
					str = str.substring(3, 4);// 獲取加多少
					if (equip4 == "強化+") {
						if (str >= eqlv){		//>=n n以上
							eq++;	
						}
					}
				}
			}
		}
		if(equip5 != null){
			if(equip5.getDataId()==1113132 || equip5.getDataId()==1112956 || equip5.getDataId()==1113083){
				str = equip5.getTitle();
				if (str != "") {
					equip5 = str.substring(0, 3);//獲取抬頭 強化+
					str = str.substring(3, 4);// 獲取加多少
					if (equip5 == "強化+") {
						if (str >= eqlv){		//>=n n以上
							eq++;	
						}
					}
				}
			}
		}
		if(equip6 != null){
			if(equip6.getDataId()==1113132 || equip6.getDataId()==1112956 || equip6.getDataId()==1113083){
				str = equip6.getTitle();
				if (str != "") {
					equip6 = str.substring(0, 3);//獲取抬頭 強化+
					str = str.substring(3, 4);// 獲取加多少
					if (equip6 == "強化+") {
						if (str >= eqlv){		//>=n n以上
							eq++;	
						}
					}
				}
			}
		}
		if(equip7 != null){
			if(equip7.getDataId()==1122296){
				str = equip7.getTitle();
				if (str != "") {
					equip7 = str.substring(0, 3);//獲取抬頭 強化+
					str = str.substring(3, 4);// 獲取加多少
					if (equip7 == "強化+") {
						if (str >= eqlv){		//>=n n以上
							eq++;	
						}
					}
				}
			}
		}
		if(equip8 != null){
			if(equip8.getDataId()==1122296){
				str = equip8.getTitle();
				if (str != "") {
					equip8 = str.substring(0, 3);//獲取抬頭 強化+
					str = str.substring(3, 4);// 獲取加多少
					if (equip8 == "強化+") {
						if (str >= eqlv){		//>=n n以上
							eq++;	
						}
					}
				}
			}
		}
		/*結束 - 每次攻擊都會判定*/
		
		let dummy = event.getVariable("stage1_dummy");
		dummy.hurt((1000000+(1010000000000*eq)), false);//對怪物造成的傷害
			if(!dummy.isAlive()){//
				event.getMap(MAP_ID).killMonster(mob.getDataId());
				
				itemmob = map.makeMob(9400206);//腳本擊殺 無法獲得道具 生成一隻怪物拿來噴獎勵
				pos = player.getPosition();
				map.spawnMob(itemmob,  pos.getX(),  pos.getY());
				event.getMap(MAP_ID).blowWeatherEffectNotice("獎勵果實出現了", 266, 3000);
			}
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
						//members[i].showSystemMessage("輔助功能狀態消失");
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
				members[i].showSystemMessage("你們總共擊殺了 "+mobCount+" 隻怪物");
				members[i].showSystemMessage("統計｜此功能讓你們額外獲得的: "+kill+" 個");
				//members[i].gainItem(4310071,(Math.floor(mobCount/500)));
				//members[i].showSystemMessage("kick");
		}
		
		if (members.length <= 0) {
			event.destroyEvent();
		}
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
		for (let i = 0; i < members.length; i++) {
				members[i].showSystemMessage("kick");
		}
		kick();
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
				members[i].showSystemMessage(""+LOG+" 輔助功能消失");
				members[i].setDeathCount(-1);
		}
		//mobCount = event.getVariable("mobCount");
}
