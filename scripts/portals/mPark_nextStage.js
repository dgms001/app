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

/* global portal, player */

/**
 *
 * @author Jackson
 */
let idx = parseInt(map.getId() % 1000 / 100);
let event = portal.getEvent();
if (event != null) {
        if (event.getVariable("Kill" + idx) != null) {
                let nextMap = event.getVariable("map" + (idx + 1));
                portal.playPortalSE();
                player.changeMap(nextMap);
        } else {
                portal.abortWarp();
                player.showSystemMessage("請先消滅所有怪物!!");
        }
} else {
        portal.abortWarp();
}

