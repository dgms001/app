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
 * 
 * @author dgms
 */

let player, map;

function init(attachment) {
    let destination;
    [player, destination] = attachment;

    //create a new instance of the map so we don't have to deal with multiple
    //players in the channel trying to complete the same challenge.
    map = event.makeMap(destination);
    player.changeMap(map);
    map.showTimer(10 * 60);
    event.startTimer("kick", 30 * 60 * 1000);
    player.setEvent(event);
}

function playerDisconnected(player) {
    event.destroyEvent();
}

function playerChangedMap(player, destination) {
    event.destroyEvent();
}

function deinit() {
    player.setEvent(null);
    event.destroyMap(map);
}

function timerExpired(key) {
    switch (key) {
        case "kick":
            player.changeMap(4000031, "st00");
            event.destroyEvent();
            break;
    }
}
