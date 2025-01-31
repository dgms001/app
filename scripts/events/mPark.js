/*
 * NeroMS MapleStory server emulator written in Java
 * Copyright (C) 2017-2018  Jackson
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
 *
 * @author Jackson
 */

let EXIT_MAP = 951000000;

let party;
let startMapId;
let members;
let endTime;
let level;

function init(attachment) {
        [party, startMapId, level] = attachment;

        for (var i = 0; i < 6; i++) {//init map
                let field = event.makeMap(startMapId + (i * 100));
                event.setVariable("map" + i, field);
				field.reset();
        }

        party.changeMap(event.getVariable("map0"), 0);
        members = party.getLocalMembers();

		event.setVariable("mobCount", 0);
        event.setVariable("BASE_EXP", 55000);
        event.setVariable("BASE_LEVEL", level);
        event.setVariable("TOTAL_EXP", 0);


        event.startTimer("kick", 30 * 60 * 1000);
        endTime = new Date().getTime() + 30 * 60 * 1000;
        event.getVariable("map0").showTimer(30 * 60);
        event.setVariable("members", members);

        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(event);
                members[i].addPQLog("mPark");
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
function mobDied(mob) {
        let baseLevel = parseFloat(event.getVariable("BASE_LEVEL"));
        let totalEXP = parseFloat(event.getVariable("TOTAL_EXP"));
		let mobCount = parseInt(event.getVariable("mobCount"));
        let baseEXP = parseFloat(event.getVariable("BASE_EXP"));
        totalEXP = baseEXP * baseLevel * members.length + totalEXP;
        event.setVariable("mobCount", mobCount+1);
		event.setVariable("TOTAL_EXP", totalEXP);
        let idx = parseInt(mob.getMapId() % 1000 / 100);
        let nMap = event.getVariable("map" + idx);
        if (nMap != null) {
                nMap.blowWeatherEffectNotice("當前累計獲得 " + totalEXP + " 經驗!", 0xD1, 2000);
                switch (mob.getDataId()) {
                        default:
                                let mobsize = nMap.getEventMobCount();
                                if (mobsize <= 0) {
                                        event.setVariable("Kill" + idx, true);
                                        nMap.screenEffect("monsterPark/clear");
                                }
                                break;
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
        if (parseInt(destination.getId() / 10000) != parseInt(startMapId / 10000))
                //player died and respawned or clicked Nella to leave PQ
                //changeMap is false so player doesn't get re-warped to exit map
                removePlayer(player.getId(), false);
        else
                player.showTimer((endTime - new Date().getTime()) / 1000);
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
        for (var i = 0; i < 6; i++) {//init map
                let field = event.getVariable("map" + i);
                event.destroyMap(field);
        }
        for (let i = 0; i < members.length; i++)
                members[i].setEvent(null);

}