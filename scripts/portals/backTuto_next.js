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
let check = false;
switch (map.getId()) {
        case 958000000:
                check = true;
                break;
        case 958000100:
                if (player.getPQLog("Welcome1") > 0) {
                        check = true;
                } else {
                        player.dropAlertNotice("领取了奖励再出发到下个阶段吧！");
                }
                break;
        case 958000200:
                if (player.getPQLog("Welcome2") > 0) {
                        check = true;
                } else {
                        player.dropAlertNotice("领取了奖励再出发到下个阶段吧！");
                }
                break;
        case 958000300:
                if (player.getPQLog("Welcome3") > 0) {
                        check = true;
                } else {
                        player.dropAlertNotice("领取了奖励再出发到下个阶段吧！");
                }
                break;
}

if (check) {
        portal.playPortalSE();
        player.changeMap(map.getId() + 100, "out00");
} else {
        portal.abortWarp();
}


