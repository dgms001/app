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

let mapId;
let player, map;

function init(attachment) {
        player = attachment;
        let type = player.getMyHomeType();
        mapId = 871099999 + type;
        map = event.makeMap(mapId);
        event.setVariable("home", map);
        player.changeMap(map);
        player.setEvent(event);
}

function playerDisconnected(player) {
        event.destroyEvent();
}

function playerChangedMap(player, destination) {
        event.destroyEvent();
}

function timerExpired(key) {
        switch (key) {
        }
}

function deinit() {
        player.setEvent(null);
        event.destroyMap(map);
}