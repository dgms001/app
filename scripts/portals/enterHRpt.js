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
 *
 * @author Jackson 
 */
if (player.isQuestStarted(20881) || player.isQuestStarted(20882) || player.isQuestCompleted(20881) && !player.isQuestActive(20882)) {
        player.forfeitQuest(20882);
        if (portal.makeEvent("change_job", false, [player, 922030400]) != null) {
                portal.playPortalSE();
        } else {
                portal.abortWarp();
        }
} else {
        player.showSystemMessage("这里好像可以去某个地方，但我好像进不去");
        portal.abortWarp();
}