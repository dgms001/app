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

let EXIT_MAP = 240080000;

let STAGE_1 = 240080100;
let STAGE_2 = 240080200;
let STAGE_3 = 240080300;
let STAGE_4 = 240080400;
let STAGE_5 = 240080500;

//revivemap
//240080040  240080050

let party;
let members;
let endTime;

function init(attachment) {
        party = attachment;
        party.loseItem(4001022);
        party.loseItem(4001023);
        members = party.getLocalMembers();

        //reset maps
        event.getMap(STAGE_1).reset();
        event.getMap(STAGE_2).reset();
        ;
        event.getMap(STAGE_3).reset();
        event.getMap(STAGE_4).reset();
        event.getMap(STAGE_5).reset();


        party.changeMap(STAGE_1, 0);
        event.getMap(STAGE_1).showTimer(30 * 60);
        event.getMap(STAGE_1).showAchieveRate(0);
        event.startTimer("kick", 30 * 60 * 1000);
        endTime = new Date().getTime() + 30 * 60 * 1000;
        event.setVariable("members", members);

        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(event);
                members[i].addPQLog("dragon_rider");
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
        let nMap = event.getMap(mob.getMapId());
        let stage = parseInt((nMap.getId() - 240080000) / 100);
        switch (mob.getDataId()) {
                case 8300006:
                case 8300007:
                default:
                        let mobsize = nMap.getEventMobCount();
                        let clear = event.getVariable(stage + "stageclear");
                        if (mobsize <= 0 && (clear == null || !clear)) {
                                event.setVariable(stage + "stageclear", true);
                                nMap.screenEffect("quest/party/clear");
                                nMap.soundEffect("Party1/Clear");
                        }
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
                case STAGE_3:
                case STAGE_4:
                case STAGE_5:
                        let stage = parseInt((destination.getId() - 240080000) / 100) - 1;
                        let aRate = parseInt((stage / 5) * 100);
                        player.setAchieveRate(aRate);
                        player.showTimer((endTime - new Date().getTime()) / 1000);
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
        }
}

function deinit() {
        for (let i = 0; i < members.length; i++)
                members[i].setEvent(null);

}