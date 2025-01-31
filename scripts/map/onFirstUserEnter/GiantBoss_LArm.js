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

let event = npc.getEvent("boss_beidler");
if (event != null) {
        let mapInfo = event.getVariable("MAP_INFO");
        if (!(map.getId() in mapInfo)) {
                mapInfo[map.getId()] = "1";
        }
        party.showGiantBossMap(mapInfo);
        if (event.getVariable("LArm_Kill")) {
                player.showPortalEffect("phase3", 2);
                player.showPortalEffect("clear", 2);
        }
        let idx = map.getId() / 10 % 100;
        player.showScreenDelayedEffect("Map/Effect.img/giantBoss/enter/" + idx, 0);
}
