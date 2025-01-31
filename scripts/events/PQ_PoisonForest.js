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
 * Logic for starting and exiting Kerning City party quest (AKA party1) using
 * timers and party member triggers.
 *
 * @author dgms
 */

let EXIT_MAP = 802000000;

let party;
let members;
let endTime;

function init(attachment) {
        party = attachment;
		for (var i = 4001814; i <= 4001817; i++) {
                                    party.loseItem(i);
                                }
        event.getMap(933021000).reset();
        event.getMap(933022000).reset();
		event.getMap(933023000).reset();
        event.getMap(933024000).reset();
		event.getMap(933025000).reset();
        event.getMap(933026000).reset();
		event.getMap(933027000).reset();
        event.getMap(933028000).reset();

        party.changeMap(933021000, "st00");
        members = party.getLocalMembers();

        event.getMap(933021000).showTimer(20 * 60);

        event.startTimer("kick", 20 * 60 * 1000);
        endTime = new Date().getTime() + 20 * 60 * 1000;
event.setVariable("933021000", false);
event.setVariable("933022000", false);
event.setVariable("933023000", false);
event.setVariable("933024000", false);
event.setVariable("933025000", false);
event.setVariable("933026000", false);
event.setVariable("number", "0");
event.setVariable("number1", "0");
event.setVariable("933027000", false);
event.setVariable("933028000", false);
        event.setVariable("members", members);

        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(event);
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
	if (event.getMap(933023000).getEventMobCount() <= 0) {
		event.setVariable(933023000, true);
                event.getMap(933023000).screenEffect("quest/party/clear");
	} else if (event.getMap(933028000).getEventMobCount() <= 0){
		event.setVariable(933028000, true);
                event.getMap(933028000).screenEffect("quest/party/clear");
				event.getMap(933028000).blowWeatherEffectNotice("消滅了劇毒石頭人，可以從右邊的傳送口退出！", 32, 10000);
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
                case 933021000:
                case 933022000:
					case 933023000:
					case 933024000:
					case 933025000:
					case 933026000:
					case 933027000:
					case 933028000:
                        player.showTimer((endTime - new Date().getTime()) / 1000);
                        break;
                default:
                        //player died and respawned or clicked Nella to leave PQ
                        //changeMap is false so player doesn't get re-warped to exit map
                        removePlayer(player.getId(), false);

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