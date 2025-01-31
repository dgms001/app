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

if (player.isQuestCompleted(24002) && !player.isQuestStarted(24093)) {
        portal.abortWarp();
        player.runScript("outEurel");
} else {
        if (player.isQuestCompleted(24045) || player.isQuestStarted(24045) || player.getJob() != 2300) {
                portal.playPortalSE();
                player.changeMap(101050100, 2);
        } else {
                portal.abortWarp();
                player.scriptProgressMessage("先看看村子的情况在出去吧！");
        }
}
