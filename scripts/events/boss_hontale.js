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
 * Boss: Hontale
 * @author dgms
 */

let EXIT_MAP = 240050400;
let FIELD_1 = 240060000;
let FIELD_2 = 240060100;
let FIELD_3 = 240060200;

let BOSS_LOG = "boss_hontale";
let party;
let members;
let endTime;

function init(attachment) {
        party = attachment;

        let map_1 = event.getMap(FIELD_1);
        let map_2 = event.getMap(FIELD_2);
        let map_3 = event.getMap(FIELD_3);

        map_1.reset();
        map_2.reset();
        map_3.reset();

        party.changeMap(FIELD_1, 0);
        members = party.getLocalMembers();

        map_1.showTimer(30 * 60);

        event.startTimer("kick", 30 * 60 * 1000);
        endTime = new Date().getTime() + 30 * 60 * 1000;
        map_3.setIndividualDrop(true);
        event.setVariable("members", members);

        for (let i = 0; i < members.length; i++) {

                if (members[i].getLevel() < 200) {
                        members[i].changeMap(EXIT_MAP);
                        members[i].showSystemMessage("等級不足退場");
                }
                if (members[i].getEventValue(BOSS_LOG) > 0) {
                        members[i].changeMap(EXIT_MAP);
                        members[i].showSystemMessage("該賬號已經進入過了,請明天再來");
                }
                members[i].setEvent(event);
                members[i].addPQLog(BOSS_LOG);
                members[i].addEventValue(BOSS_LOG);
        }
}

function mobDied(mob) {
        switch (mob.getDataId()) {
                case 8810000:
                        event.setVariable("boss1", true);
                        break;
                case 8810001:
                        event.setVariable("boss2", true);
                        break;
                case 8810018:
                        event.broadcastNoticeWithoutPrefix("經過無數次的挑戰，終於擊破了暗黑龍王的遠征隊！你們才是龍之林的真正英雄~");
                        let map_3 = event.getMap(FIELD_3);
                        map_3.clearMobs();
                        event.startTimer("kick", 8 * 1000);
                        map_3.showTimer(8);
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
                case FIELD_2:
                case FIELD_3:
                        player.showTimer((endTime - new Date().getTime()) / 1000);
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
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(null);
                members[i].setDeathCount(-1);
        }
}