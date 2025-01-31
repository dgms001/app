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
 * Logic for starting and exiting Henesys party quest (AKA moonrabbit) using
 * timers and party member triggers.
 *
 * @author dgms
 */
let PLAY_MAP = 910010000, EXIT_MAP = 910010300, PIG_TOWN_EXIT_MAP = 910010400;
let map;
let party;
let members;
let endTime;
function init(attachment) {
    map = event.getMap(PLAY_MAP);
    map.setNoSpawn(true);
    map.clearMobs();
	//map.reset();
    map.resetReactors();
    map.overrideReactor("moonflower1", "moonflower");
    map.overrideReactor("moonflower2", "moonflower");
    map.overrideReactor("moonflower3", "moonflower");
    map.overrideReactor("moonflower4", "moonflower");
    map.overrideReactor("moonflower5", "moonflower");
    map.overrideReactor("moonflower6", "moonflower");
    let boss = map.makeMob(9500006);
    var bossHp = 1000000;
    bossHp += boss.getHp();
    map.spawnMob(boss, -130, 213);
    party = attachment;
    party.loseItem(4001095);
    party.loseItem(4001096);
    party.loseItem(4001097);
    party.loseItem(4001098);
    party.loseItem(4001099);
    party.loseItem(4001100);
    party.loseItem(4001101);
    party.loseItem(4001453);
    party.changeMap(PLAY_MAP);
    members = party.getLocalMembers();
    map.showTimer(15 * 60);
    event.startTimer("kick", 15 * 60 * 1000);
    endTime = new Date().getTime() + 15 * 60 * 1000;
    event.setVariable("members", members);
    event.setVariable("flowers", 0);
    event.setVariable("cakes", 0);
    event.startTimer("UUI", 60000);
    for (let i = 0; i < members.length; i++)
        members[i].setEvent(event);
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
            if (changeMap || members[i].getId() == playerId)
                members[i].changeMap(EXIT_MAP);
        }
        event.destroyEvent();
    } else {
        for (let i = 0; i < members.length; i++) {
            if (members[i].getId() == playerId) {
                //dissociate event before changing map so playerChangedMap is
                //not called and this method is not called again by the player
                members[i].setEvent(null);
                if (changeMap)
                    members[i].changeMap(EXIT_MAP);
                //collapse the members array so we don't accidentally warp
                //this member again if the leader leaves later.
                members.splice(i, 1);
                break;
            }
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
    if (destination.getId() == EXIT_MAP || destination.getId() == PIG_TOWN_EXIT_MAP)
        //player died and respawned or clicked Growlie to leave PQ
        //changeMap is false so player doesn't get re-warped to exit map
        removePlayer(player.getId(), false);
    else
        player.showTimer((endTime - new Date().getTime()) / 1000);
}

function partyMemberDischarged(party, player) {
    removePlayer(player.getId(), true);
}

function timerExpired(key) {
    switch (key) {
    case "kick":
        removePlayer(party.getLeader(), true);
        break;
    case "UUI":
        event.startTimer("UUI", 120000);
        let map = event.getMap(PLAY_MAP);
        let knightHP = 650000000000000000; //65000000000000
        let knight1 = map.makeMob(8150000);
        knight1.changeBaseHp(knightHP);
        map.spawnMob(knight1, -858, -560);
		
		let mapA = event.getMap(PLAY_MAP);
        let knightHPA = 650000000000000000; //65000000000000
        let knight1A = map.makeMob(8150000);
        knight1A.changeBaseHp(knightHPA);
        mapA.spawnMob(knight1A, 548, -608);
		event.getMap(PLAY_MAP).blowWeatherEffectNotice("中秋不死惡魔來咯，請把他引誘開。", 295, 3000);
        break;
    case "riceCakeDrop": {
            let cakes = parseInt(event.getVariable("cakes")) + 1;
            let moonBunnyMob = event.getVariable("moonBunnyMob");
            moonBunnyMob.dropItem(4001101);
            event.setVariable("cakes", cakes);
            event.startTimer("riceCakeDrop", 30000);
            break;
        }

    }
}
function mobDied(mob) {
	switch (mob.getDataId()) {
		case 9300061:
		removePlayer(party.getLeader(), true);
			break;
	}			
}
function friendlyMobHurt(mob) {
    if (mob.getHp() != 0) {
        event.stopTimer("riceCakeDrop");
        event.startTimer("riceCakeDrop", event.getVariable("moonBunnyMob").getDropAfter(true));
    } else {
        //Moon Bunny is dead. Kick everyone out.
        removePlayer(party.getLeader(), true);
    }
}

function deinit() {
    event.getMap(PLAY_MAP).endFieldEvent();
    for (let i = 0; i < members.length; i++)
        members[i].setEvent(null);
    map.setNoSpawn(false);
    map.revertReactor("moonflower");
    map.revertReactor("moonflower");
    map.revertReactor("moonflower");
    map.revertReactor("moonflower");
    map.revertReactor("moonflower");
    map.revertReactor("moonflower");
    event.destroyEvent();
}
