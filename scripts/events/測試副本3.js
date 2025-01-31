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
 */

let EXIT_MAP = 302050400;


let DEATH_COUNT = 5;

let BOSS_LOG = "風雨森林";
let party;
let members;
let endTime;
let map;
var maps = [
321110000,
321111000,
321112000,
321113000,
321114000,
321115000,
321116000
];

 
var map_1,map_2,map_3,map_4,map_5,map_6,map_7; 

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

        event.startTimer("kick", 30 * 60 * 1000);
        endTime = new Date().getTime() + 30 * 60 * 1000;

        event.setVariable("members", members);
        event.startTimer("summon_obtacle", 4000);
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(event);
                members[i].addPQLog(BOSS_LOG);
                members[i].setDeathCount(DEATH_COUNT);
        }
}

function makeMob(mobid,hp,x,y,map){
	var boss = map.makeMob(mobid);
	boss.changeBaseHp(hp);
	boss.setForcedMobStat(210, 2);
	map.spawnMob(boss, x, y);
}

function spawnMobs(){
	
    map_1.reset();
	makeMob(2700110,20000000000,380, -118,map_1);
	makeMob(9390912,20000000000,380, -118,map_1);
	makeMob(8230012,20000000000,280, -118,map_1);		
    makeMob(9390914,20000000000,180, -118,map_1);		
	
	map_2.reset();
	makeMob(2700111,20000000000,1180, 212,map_2);
	makeMob(9700013,50000000000,1019, 212,map_2); 
	makeMob(5220003,20000000000,916, 212,map_2);  
	makeMob(9700017,20000000000,816, 212,map_2);  
    
	map_3.reset();
	makeMob(2700112,20000000000,-217, 392,map_3);
	makeMob(9309059,20000000000,-117, 392,map_3);
	makeMob(9001026,20000000000,-17, 392,map_3);
	makeMob(9309061,20000000000,17, 392,map_3);  
	 
	map_4.reset();
	makeMob(2700113,20000000000,-306, -58,map_4);
	makeMob(9700034,20000000000,-206, -58,map_4);
	makeMob(9801023,3000000000000,58, 122,map_4);
	makeMob(8220025,20000000000,-406, -58,map_4);
	
	map_5.reset();
	makeMob(2700114,20000000000,758, 122,map_5);
	makeMob(3401011,20000000000,658, 122,map_5); 
	makeMob(8220023,20000000000,558, 122,map_5);  
	makeMob(8800400,1010000000000,858, 122,map_5);   
	  
	map_6.reset();
	makeMob(2700115,20000000000,48, -178,map_6);
	makeMob(2700103,1010000000000,-147, -178,map_6);
	makeMob(2700102,3000000000000,-43, -178,map_6);
	makeMob(2700102,5000000000000,309, -178,map_6);
	
	map_7.reset();	
	makeMob(9400575,2000000000000,-697, 332,map_7);
	makeMob(9450066,8000000000000,-617, 332,map_7); 
	
}

function mobDied(mob) {
	switch (mob.getDataId()) {
		case 9450066:
		for (let i = 0; i < members.length; i++) {
			 // members[i].runScript("zchaoFinish");
		}
		break;
	}
}

function mobHit(player, mob, damage) {
	switch (mob.getDataId()) {//boss
		// case 100004:
			// player.dropMessage(1,"玩家："+player.getName()+" 對菇菇傷害");
			// break;
		case 9390914:
		case 9390912:
		case 8230012:
		case 5220003:
		case 9700013:
		case 9001026:
		case 9801023:
		case 3401011:
		case 2700102:
		case 9450066:
			count = 200 * members.length * 1;
			break;
			
		default:
			count = 50 * members.length * 1;
			break;
	}
	if (event.getVariable("mob"+mob.getEntityId()) == null) {	//getEntityId怪物的獨立id  
		event.setVariable("mob"+mob.getEntityId(),"0");			//沒資料寫0
		event.setVariable("moblife"+mob.getEntityId(),"0");		//防死亡
		mob.changeBaseHp​(10);//防止死亡
	}
	
	if (event.getVariable("mob"+mob.getEntityId()) >= count) {
		event.setVariable("moblife"+mob.getEntityId(),"0");		//1 = 可以去死了
		event.setVariable("mob"+mob.getEntityId(),"0");
		// map.spawnMob​(mob.getDataId(), player.getPosition().getX(), player.getPosition().getY())
		for (let i = 0; i < members.length; i++) {
			 members[i].showSystemMessage("kill成功");
		}
		
	} else if(event.getVariable("mob"+mob.getEntityId()) != count && event.getVariable("moblife"+mob.getEntityId()) == 0){ 
		mhp = parseInt(event.getVariable("mob"+mob.getEntityId()));
		event.setVariable("mob"+mob.getEntityId(), mhp+1);
		mob.changeBaseHp​(10);//防止死亡
	}
	
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
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(null);
                members[i].setDeathCount(-1);
        }
}