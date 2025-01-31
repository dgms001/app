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
let target;
switch (map.getId()) {
        case 100000201:
                target = 450000100;
                break;
        case 400000001:
                target = 450000110;
                break;
        case 105300000:
                if (player.isQuestActive(1464)) {
                        player.showSystemMessage("需要找到另外一个传送口！");
                } else {
                        target = 450000120;
                }
                break;
        case 105300301:
                if (player.isQuestActive(1464)) {
                        target = 450000120;
                }
                break;
}
if (player.isQuestActive(1461)) {
        portal.playPortalSE();
        player.changeMap(target, 0);
} else {
        portal.abortWarp();
}
