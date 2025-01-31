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
 * Boss: Papulatus
 * @author Jackson
 */

let EXIT_MAP = 220080000;

let FIELD_1 = 220080100;

let DEATH_COUNT = 5;

let BOSS_LOG = "Papulatus";
let party;
let members;
let endTime;

function init(attachment) {
        party = attachment;
        members = party.getLocalMembers();
        let map_1 = event.getMap(FIELD_1);
        map_1.reset();
        map_1.setNoSpawn(true);
        map_1.clearMobs();
        map_1.setReactorState("boss", 0, 0);
        map_1.setReactorState("crack1", 1, 0);
        map_1.setReactorState("crack2", 1, 0);
        map_1.setReactorState("crack3", 1, 0);
        map_1.setReactorState("crack4", 1, 0);
        map_1.setReactorState("crack5", 1, 0);
        map_1.setReactorState("crack6", 1, 0);
        map_1.showTimer(30 * 60);
        event.startTimer("kick", 30 * 60 * 1000);
        endTime = new Date().getTime() + 30 * 60 * 1000;
        event.setVariable("members", members);
        //event.setVariable("summonmob", 0);
        //event.startTimer("summon_obtacle", 4000);
        //event.startTimer("summon_mob", 1000);
        //event.startTimer("Summon_Escort1", 60000);
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(event);
                members[i].addPQLog(BOSS_LOG, 1, 3);
                members[i].setDeathCount(DEATH_COUNT);
        }
        party.changeMap(FIELD_1, "st00");
}

function mobDied(mob) {
        let map_1 = event.getMap(FIELD_1);
        switch (mob.getDataId()) {
                case 8500003:
                case 8500004:
                        let a = parseInt(Math.random() * 6)
                        mob.dropItem(2437659 + a);
                        break;
                case 8500007:
                        mob.dropItem(2437606);
                        break;
                case 8500008:
                        mob.dropItem(2437607);
                        break;
                case 8500000:
                        event.stopTimer("Event_Action");
                        map_1.startFieldEvent();
                        break;
                case 8500002:
                        map_1.endFieldEvent();
                        break;
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
                case FIELD_1:
                        //player.startQuest(7200, 0, "21/10/19");//Quest Name:Unknown
                        player.startQuest(7201, 0, "1");//Quest Name:Unknown
                        player.showSystemMessage("未知的裂痕開啟，被吸進裡面。");
                        player.showTimer((endTime - new Date().getTime()) / 1000);
                        player.showDeathCount();
                        break;
                default:
                        //player died and respawned or clicked Nella to leave PQ
                        //changeMap is false so player doesn't get re-warped to exit map
                        removePlayer(player.getId(), false);
                        break;
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
                case "Event_Action":
                        let map_1 = event.getMap(FIELD_1);
                        map_1.startFieldEvent();
                        break;
                case "kick":
                        kick();
                        break;
        }
}

function deinit() {
        let map_1 = event.getMap(FIELD_1);
        map_1.endFieldEvent();
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(null);
                members[i].setDeathCount(-1);
        }
}