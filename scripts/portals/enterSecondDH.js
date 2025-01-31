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
 * quest00
 * Victoria Road: The Forest East of Henesys (Map 100030000)
 *
 * Warps players into Utah's pig farm for Camila's Gem (Quest 2073).
 *
 * @author Jackson (content from Vana r3171)
 */

if (player.isQuestActive(20871) || player.isQuestActive(20872) || player.isQuestActive(20873) || player.isQuestActive(20874) || player.isQuestActive(20875)) {
        portal.playPortalSE();
        player.changeMap(913001000, 0);
} else {
        player.showSystemMessage("请先完成训练!");
        portal.abortWarp();
}

