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


var hayato = player.getJob() == 4100;
var warp = false;
var target = 0;
var p = 0;

switch (map.getId()) {
        case 807040000:
                if (hayato) {
                        warp = player.isQuestStarted(57104) || player.isQuestCompleted(57104);
                } else {
                        warp = player.isQuestStarted(57402);
                }
                target = 807040100;
                break;
        case 807040100:
                if (hayato) {
                        warp = player.isQuestCompleted(57104);
                } else {
                        warp = player.isQuestCompleted(57402);
                }
                target = 807000000;
                p = 2;
                break;
}
if (!warp) {
        portal.abortWarp();
        if (hayato) {
                player.showSystemMessage("与山中幸盛对话吧。");
        } else {
                player.showSystemMessage("与直江兼续对话吧。");
        }
} else {
        portal.playPortalSE();
        player.changeMap(target, p);
}