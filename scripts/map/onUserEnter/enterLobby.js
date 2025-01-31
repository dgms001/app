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


var tData = 600000;

//初始化朦朧石欄位
for (var i = 1; i <= 5; i++) {
        if (player.getQuestRecordEx(42000, "slot" + i) == null) {
                player.updateQuestRecordEx(42000, "slot" + i, "-1");
        }
}

//計算朦朧石增加時間
var addTime = 0;
for (var i = 1; i <= 5; i++) {
        var sData = player.getQuestRecordEx(42000, "slot" + i);
        if (sData != null && !"-1".equals(sData) && !"0".equals(sData)) {
                var type = parseInt(sData);
                if (type == 1) {
                        var typeTime = 3;
                } else if (type == 2) {
                        var typeTime = 6;
                } else if (type == 3) {
                        var typeTime = 9;
                } else if (type == 4) {
                        var typeTime = 14;
                } else if (type == 5) {
                        var typeTime = 17;
                } else {
                        var typeTime = 1;
                }
                addTime += typeTime;
        }
}
tData += addTime * 60 * 1000;
player.updateQuestRecordEx(42011, "time", String(tData));
player.updateQuestRecordEx(42011, "totalTime", String(tData));
player.showLobbyTimer(0, tData, tData, 42011);
player.clearMGGun();
player.setInGameDirectionMode(false, false, false, false);