/*
 * NeroMS MapleStory server emulator written in Java
 * Copyright (C) 2017-2018  dgms
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Boss: Dusk 風雨森林
 * @author dgms
 
 功能紀錄
 7張圖配合地圖傳點(怪物=0才可通過)
 event
 7張圖創 改hp怪物各3隻  
 小怪透過map_1.reset()生成的原地圖怪物
 帳號次數
 */

let EXIT_MAP = 101000000;


let DEATH_COUNT = 5;

// let BOSS_LOG = "風雨森林";
let BOSS_LOG = "風雨森林";
let party;
let count;
let members;
let endTime;
var maps = [
	321110000,
	321111000,
	321112000,
	321113000,
	321114000,
	321115000,
	321116000
];


var map_1, map_2, map_3, map_4, map_5, map_6, map_7;

function init(attachment) {
	party = attachment;
	members = party.getLocalMembers();

	map_1 = event.getMap(maps[0]);
	map_2 = event.getMap(maps[1]);
	map_3 = event.getMap(maps[2]);
	map_4 = event.getMap(maps[3]);
	map_5 = event.getMap(maps[4]);
	map_6 = event.getMap(maps[5]);
	map_7 = event.getMap(maps[6]);
	spawnMobs();
	party.changeMap(maps[0], "st00");
	map_1.showTimer(30 * 60);

	event.startTimer("kick", 15 * 60 * 1000);//10 * 60 * 1000
	endTime = new Date().getTime() + 15 * 60 * 1000;
	map_1.setIndividualDrop(true);
	map_2.setIndividualDrop(true);
	map_3.setIndividualDrop(true);
	map_4.setIndividualDrop(true);
	map_5.setIndividualDrop(true);
	map_6.setIndividualDrop(true);
	map_7.setIndividualDrop(true);

	event.setVariable("members", members);
	event.startTimer("summon_obtacle", 4000);
	for (let i = 0; i < members.length; i++) {
		if (members[i].getEventValue(BOSS_LOG) > 0) {
			members[i].showSystemMessage("副本進入帳號次數已滿,強制離場.");
			members[i].changeMap(101000000);
		}
		members[i].setEvent(event);
		members[i].addEventValue(BOSS_LOG, 1, 1);
		members[i].addPQLog(BOSS_LOG);
		members[i].setDeathCount(DEATH_COUNT);

	}
}

function makeMob(mobid, hp, x, y, map) {
	var boss = map.makeMob(mobid);
	boss.changeBaseHp(hp * 1.5);
	boss.setForcedMobStat(250, 18);
	map.spawnMob(boss, x, y);
}

function spawnMobs() {

	map_1.reset();
	makeMob(9801023, 20000000000, 180, -118, map_1);


	map_2.reset();
	makeMob(9801023, 20000000000, 816, 212, map_2);


	map_3.reset();
	makeMob(9801023, 20000000000, 17, 392, map_3);


	map_4.reset();
	makeMob(9801023, 20000000000, -406, -58, map_4);


	map_5.reset();
	makeMob(9801023, 20000000000, 858, 122, map_5);


	map_6.reset();
	makeMob(9801023, 20000000000, 24, 272, map_6);


	map_7.reset();

	makeMob(9801023, 50000000000, -617, 332, map_7);

}

function mobDied(mob) {
	if (map_7.getEventMobCount() <= 0) {				//第七張圖怪物<=0  結束
		for (let i = 0; i < members.length; i++) {
			members[i].showSystemMessage("恭喜通關獲得獎勵！！在10秒後自動離場");
			members[i].runScript("機器人隨機");
			members[i].showTimer(8);
		}
		event.stopTimer("kick");
		event.startTimer("kick", 8 * 1000);

	}
	/*switch (mob.getDataId()) {
		case 9400050:
			
			break;
	}*/
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
		case maps[0]:
		case maps[1]:
		case maps[2]:
		case maps[3]:
		case maps[4]:
		case maps[5]:
		case maps[6]:
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
	event.getMap(321110000).endFieldEvent();
	event.getMap(321111000).endFieldEvent();
	event.getMap(321112000).endFieldEvent();
	event.getMap(321113000).endFieldEvent();
	event.getMap(321114000).endFieldEvent();
	event.getMap(321115000).endFieldEvent();
	event.getMap(321116000).endFieldEvent();
	for (let i = 0; i < members.length; i++) {
		members[i].setEvent(null);
		members[i].setDeathCount(-1);
	}
}