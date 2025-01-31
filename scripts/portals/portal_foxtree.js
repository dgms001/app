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

if (player.isQuestStarted(38004)) {
        player.startQuest(38996, 0);
        player.setCustomData(38004, "clear");
        player.completeQuest(38004, 0);
}
if (player.isQuestStarted(38011)) {
        player.startQuest(38012, 0);
        player.setCustomData(38011, "clear");
        player.completeQuest(38011, 0);
}
if (player.isQuestStarted(38020)) {
        player.setCustomData(38020, "clear");
        player.completeQuest(38021, 0);
        player.completeQuest(38022, 0);
}
portal.playPortalSE();
player.changeMap(410000002, 0);
