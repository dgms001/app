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

let DEATH_COUNT = 1;

let BOSS_LOG = "武陵道場";
let party;
let members;
let EXIT_MAP = 925020001;
let endTime;

function init(attachment) {
        party = attachment;
        party.changeMap(925070100, 0);
        for (var i = 0; i <= 100; i++) {
                var map = event.getMap(925070000 + (i * 100));
                map.reset();
        }
        members = party.getLocalMembers();
        var map_1 = event.getMap(925070100);
        map_1.showTimer(15 * 60 * 1000);



        event.startTimer("kick", 15 * 60 * 1000);
        endTime = new Date().getTime() + 15 * 60 * 1000;


        event.setVariable("members", members);
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(event);
                members[i].addPQLog(BOSS_LOG);
                members[i].addEventValue(BOSS_LOG, 1, 1);
                // members[i].setDeathCount(DEATH_COUNT); 
        }
}

function mobDied(mob) {
        var check = event.getVariable("Mob_" + mob.getDataId());
        if (check != null) {
                var map = event.getMap(event.getVariable("thisMap"));
                map.soundEffect("Dojang/clear");
                map.screenEffect("dojang/end/clear");

                var stage = parseInt(map.getId() % 10000 / 100);
                event.setVariable("Floor_" + stage, "1");
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
        var check = false;
        for (var i = 1; i <= 100; i++) {
                var checkID = 925070000 + (i * 100);
                if (checkID == destination.getId()) {
                        check = true;
                        break;
                }
        }
        if (check) {
                player.showTimer((endTime - new Date().getTime()) / 1000);
                //player.showDeathCount();
        } else {
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
                //members[i].setDeathCount(-1);
        }
}
