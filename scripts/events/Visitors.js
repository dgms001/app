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
 * Boss: Zakum
 * @author dgms
 */

let EXIT_MAP = 861000000;

let FIELD_1=861000001;
let FIELD_2=861000050;
let FIELD_3=861000100;
let FIELD_4=861000200;
let FIELD_5=861000300;
let FIELD_6=861000400;
let FIELD_7=861000500;
var MKILL_COUNT = 100;
let map,map_1,map_2,map_3,map_4,map_5,map_6,map_7;

var TIME_OUT = 60 * 1000 * 5;
let BOSS_LOG = "Zakum_Normal";
let party;
let members;
let endTime;
let DEATH_COUNT = 5;

function init(attachment) {
        party = attachment;
        members = party.getLocalMembers();
        party.changeMap(FIELD_2, 0);
		event.setVariable("state", "1");
		event.setVariable("leader", "true");
		for (var i = 1; i <= 5; i++) {
			event.setVariable("S" + i, "0");
			event.setVariable("stage" + i, "0");
		}
		event.setVariable("Done", "0");
		event.setVariable("total", MKILL_COUNT + "");
		event.setVariable("killed", "0");
		map_1 = event.getMap(FIELD_1);
		map_2 = event.getMap(FIELD_2);
		map_3 = event.getMap(FIELD_3);
		map_4 = event.getMap(FIELD_4);
		map_5 = event.getMap(FIELD_5);
		map_6 = event.getMap(FIELD_6);
		map_7 = event.getMap(FIELD_7);
        map_2.reset();
		map_3.reset();
		map_4.reset();
		map = map_3;
		var boss = map_5.makeMob(9390110);
        boss.setForcedMobStat(210, 2);
        map_5.spawnMob(boss, 671,31);
		
		var boss = map_7.makeMob(9390111);
        boss.changeBaseHp(9999999999);
        boss.setForcedMobStat(210, 2);
        map_7.spawnMob(boss, 539,31);
		
		var rand = Math.random() * 1000;
		if (rand < 200) {
			//機率出現特殊怪物
			var boss = map_1.makeMob(9390113);
			boss.changeBaseHp(9999999999);
			boss.setForcedMobStat(210, 2);
			map_1.spawnMob(boss, -295, 38);
		}
		event.setVariable("stage", "0");
		event.setVariable("allexp", "0");
		event.getMap(FIELD_2).showTimer(5 * 60);
        event.startTimer("kick", TIME_OUT);
        endTime = new Date().getTime() + TIME_OUT;
		event.setVariable("endTime", endTime);
        event.setVariable("members", members);

        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(event);
                members[i].addPQLog(BOSS_LOG);
                members[i].setDeathCount(DEATH_COUNT);
        }
}

function removePlayer(playerId, changeMap) {
        for (let i = 0; i < members.length; i++) {
                if (members[i].getId() == playerId) {
                        //dissociate event before changing map so playerChangedMap is
                        //not called and this method is not called again by the player
                        members[i].setEvent(null);
                        if (changeMap) {
                                members[i].changeMap(EXIT_MAP, "st00");
                        }
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

function mobDied(mob) {
	var killed = parseInt(event.getVariable("killed")) + 1;
    var total = parseInt(event.getVariable("total"));
    var stage = parseInt(event.getVariable("stage"));
	var stage_ = parseInt(event.getVariable("stage")+stage);
	
    if (event != null && stage != "done" && FIELD_1 !=map.getId()  ) {
        if (killed >= total || (map.getId() == FIELD_5 &&killed >=1 ) || (map.getId() == FIELD_7 &&killed >=1) ) {
            //評分
            var ss = parseInt((event.getVariable("endTime") - new Date().getTime()) / 1000/ 60);//毫秒
            //var exp = parseInt(event.getAverlevel() * 30000 / (5 - ss));
			var exp = parseInt(250 * 30000 / (5 - ss));
            var allexp = parseInt(event.getVariable("allexp")) + exp;
            event.setVariable("allexp", allexp + "");
            var rank = ss == 4 ? "S" : ss == 3 ? "A" : ss == 2 ? "B" : "C";
            //eim.updateOneQuestInfo(17204, "S" + stage, ss == 4 ? "s" : ss == 3 ? "a" : ss == 2 ? "b" : "c");
            //eim.updateOneQuestInfo(17204, "step", (stage + 1) + "");
            //eim.updateOneQuestInfo(17204, "stg", stage + "");
            //eim.updateOneQuestInfo(17205, "S" + stage, exp);
			
			if(stage_!="S" && stage_ !="A" && stage_!="B" && stage_!="C"){
				event.setVariable("stage" + stage, rank);
				map.screenEffect("Visitor/Rank" + rank);
				map.screenEffect("Dojang/clear");
				event.setVariable("killed", "" + killed);
			}
           
           
			for (let i = 0; i < members.length; i++) {
				members[i].showSystemMessage("關卡任務完成,請盡快進入下一關！");
				members[i].addPQLog("外星人通關");
			}
        }else{
			for (let i = 0; i < members.length; i++) {
				members[i].showSystemMessage("擊殺進度:"+killed+"/"+total);
			}
			event.setVariable("killed", "" + killed);
		}
       
       
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
                case 861000001:
				case 861000050:
				case 861000100:
				case 861000200:
				case 861000300:
				case 861000400:
				case 861000500:
						map = event.getMap(destination.getId());
						if(event.getVariable("timeadd")=="true"){
							  endTime = new Date().getTime() + TIME_OUT;
							  event.setVariable("endTime",endTime);
							  event.stopTimer("kick");
							  event.startTimer("kick", TIME_OUT);
							  event.setVariable("timeadd","false")
						}
                        player.showTimer((event.getVariable("endTime") - new Date().getTime()) / 1000);
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
        event.getMap(FIELD_1).endFieldEvent();
        event.getMap(FIELD_2).endFieldEvent();
        event.getMap(FIELD_3).endFieldEvent();
        event.getMap(FIELD_4).endFieldEvent();
        event.getMap(FIELD_5).endFieldEvent();
        event.getMap(FIELD_6).endFieldEvent();
        event.getMap(FIELD_7).endFieldEvent();
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(null);
                members[i].setDeathCount(-1);
        }
}