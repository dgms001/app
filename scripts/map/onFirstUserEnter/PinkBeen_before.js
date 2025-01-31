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

let eventName;

switch (map.getId()) {
        case 270050100:
                eventName = "boss_pinkbeen";
                break;
        case 270051100:
                eventName = "boss_pinkbeen_chaos";
                break;
}
let event = npc.getEvent(eventName);
if (event != null && event.getVariable("npc") == null) {
        event.setVariable("npc", map.spawnTempNpc(2141000, -190, -42));
}