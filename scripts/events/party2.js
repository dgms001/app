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
 * Logic for starting and exiting Ludi party quest using
 * timers and party member triggers.
 *
 * @author Jackson
 */

let EXIT_MAP = 922010000;

let STAGE_1 = 922010100;
let STAGE_2 = 922010400;
let STAGE_2_1 = 922010401;
let STAGE_2_2 = 922010402;
let STAGE_2_3 = 922010403;
let STAGE_2_4 = 922010404;
let STAGE_2_5 = 922010405;

let STAGE_3 = 922010600;
let STAGE_4 = 922010700;

let STAGE_5 = 922010800;
let STAGE_FINAL = 922010900;
let STAGE_BONUS = 922011000;

let party;
let members;
let endTime;
var STAGE_3_COMBO = Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");

function init(attachment) {
        party = attachment;
        party.loseItem(4001022);
        party.loseItem(4001023);
        members = party.getLocalMembers();

        //reset maps
        event.getMap(STAGE_1).reset();
        event.getMap(STAGE_2).reset();
        event.getMap(STAGE_2_1).reset();
        event.getMap(STAGE_2_2).reset();
        event.getMap(STAGE_2_3).reset();
        event.getMap(STAGE_2_4).reset();
        event.getMap(STAGE_2_5).reset();
        event.getMap(STAGE_3).reset();
        event.getMap(STAGE_4).reset();
        event.getMap(STAGE_4).overridePortal("next00", "ludi_s4Clear");
        event.getMap(STAGE_5).reset();
        event.getMap(STAGE_5).overridePortal("next00", "ludi_s5Clear");
        let finalMap = event.getMap(STAGE_FINAL);
        finalMap.reset();
        finalMap.spawnMob(9300012, 1081, 184);

        event.getMap(STAGE_BONUS).reset();

        for (var b = 0; b < STAGE_3_COMBO.length; b++) { //pt001
                for (var y = 0; y < 3; y++) { //stage number
                        event.setVariable("pt" + STAGE_3_COMBO[b] + "" + y + "", "0");
                }
        }
        for (var b = 0; b < STAGE_3_COMBO.length; b++) { //pt001	
                var found = false;
                while (!found) {
                        for (var x = 0; x < 3; x++) {
                                if (!found) {
                                        var founded = false;
                                        for (var z = 0; z < 3; z++) { //check if any other stages have this value set already.
                                                if (event.getVariable("pt" + STAGE_3_COMBO[b] + "" + (z) + "") == null) {
                                                        event.setVariable("pt" + STAGE_3_COMBO[b] + "" + (z) + "", "0");
                                                } else if (event.getVariable("pt" + STAGE_3_COMBO[b] + "" + (z) + "").equals("1")) {
                                                        founded = true;
                                                        break;
                                                }
                                        }
                                        if (!founded && java.lang.Math.random() < 0.33) {
                                                event.setVariable("pt" + STAGE_3_COMBO[b] + "" + (x) + "", "1");
                                                found = true;
                                                break;
                                        }
                                }
                        }
                }
        }

        party.changeMap(STAGE_1, "st00");
        event.getMap(STAGE_1).showTimer(30 * 60);
        event.getMap(STAGE_1).showAchieveRate(0);
        event.startTimer("kick", 30 * 60 * 1000);
        endTime = new Date().getTime() + 30 * 60 * 1000;
        event.setVariable("achieverate", 0);
        event.setVariable("members", members);

        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(event);
                members[i].addPQLog("party2");
        }
}

function removePlayer(playerId, changeMap) {
        if (party.getLeader() == playerId) {
                //boot the entire party (changeMap parameter only applies to member
                //whose player ID matches playerId parameter, so those who are not the
                //leader are always booted)
                for (let i = 0; i < members.length; i++) {
                        //dissociate event before changing map so playerChangedMap is not
                        //called and this method is not called again by the player
                        members[i].setEvent(null);
                        if (changeMap || members[i].getId() != playerId)
                                members[i].changeMap(EXIT_MAP, 0);
                }
                event.destroyEvent();
        } else {
                for (let i = 0; i < members.length; i++) {
                        if (members[i].getId() == playerId) {
                                //dissociate event before changing map so playerChangedMap is
                                //not called and this method is not called again by the player
                                members[i].setEvent(null);
                                if (changeMap)
                                        members[i].changeMap(EXIT_MAP, 0);
                                //collapse the members array so we don't accidentally warp
                                //this member again if the leader leaves later.
                                members.splice(i, 1);
                                break;
                        }
                }
        }
}

function mobDied(mob) {
        switch (mob.getDataId()) {
                case 9300012:
                        event.setVariable("bossclear", true);
                        break;
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
                case STAGE_1:
                case STAGE_2:
                case STAGE_2_1:
                case STAGE_2_2:
                case STAGE_2_3:
                case STAGE_2_4:
                case STAGE_2_5:
                case STAGE_3:
                case STAGE_4:
                case STAGE_5:
                case STAGE_FINAL:
                        let aRate = event.getVariable("achieverate");
                        player.setAchieveRate(aRate);
                        player.showTimer((endTime - new Date().getTime()) / 1000);
                        break;
                case STAGE_BONUS:
                        player.setAchieveRate(100);
                        player.showTimer(60);
                        break;
                default:
                        //player died and respawned or clicked Nella to leave PQ
                        //changeMap is false so player doesn't get re-warped to exit map
                        removePlayer(player.getId(), false);
                        break;
        }
}

function partyMemberDischarged(party, player) {
        removePlayer(player.getId(), true);
}

function timerExpired(key) {
        switch (key) {
                case "kick":
                        removePlayer(party.getLeader(), true);
                        break;
                case "clear":
                        for (let i = 0; i < members.length; i++) {
                                //dissociate event before changing map so playerChangedMap is not
                                //called and this method is not called again by the player
                                members[i].setEvent(null);
                                members[i].changeMap(922011100, 0);
                        }
                        event.destroyEvent();
                        break;
        }
}

function deinit() {
        for (let i = 0; i < members.length; i++)
                members[i].setEvent(null);

}