/*
 * AuroMS MapleStory server emulator written in Java
 * Copyright (C) 2018 dgms
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/* global npc, player, map */

let taxiMaps = [100000000, 104000000, 102000000, 101000000, 103000000, 120000000, 105000000];

/* let taxiMaps = [100000000,
	200000301,
    910001000,
	209000000,
	990000000,
	931000500,
    104000000,
    101000000,
    102000000,
    103000000,
    120000000,
    105000000,
    200000000,
    211000000,
    450006130,
    230000000,
    224000000,
    220000000,
    701000000,
    250000000,
    702000000,
    260000000,
    600000000,
    240000000,
    261000000,
    221000000,
    251000000,
    300000000,
    270000000,
    702100000,
    100000000,
    130000000,
	809000201,
	802000101,
    310000000]; */

npc.sayNext("你好~!\r\n你想快速又安全地移動到其他村莊嗎?\r\n那麼就請使用令客戶百分百滿意的#b#p9000089##k吧。");

let prompt = "請選擇您的目的地：#b";
for (let i = 0; i < taxiMaps.length; i++) {
    if (taxiMaps[i] != map.getId()) {
        prompt += "\r\n#L" + i + "##m" + taxiMaps[i] + "##l";
    }
}
let mapIndex = npc.askMenu(prompt);
let selection = npc.askYesNo("看樣子，你好像已經沒有什麼事情需要在這裡做了。確定要移動到#b#m" + taxiMaps[mapIndex] + "##k村莊嗎?");
if (selection == 1) {
    player.changeMap(taxiMaps[mapIndex]);
} else if (selection == 0) {
    npc.say("如果你想移動到其他村莊，請隨時使用我們的#p9000089#~");
}