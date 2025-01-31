/*
 * AuroMS MapleStory server emulator written in Java
 * Copyright (C) 2018 Kent
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
/*let mapNames = Array("天空森林修煉場", "海賊團秘密基地", "異界的戰場", "偏僻森林危險區域", "禁忌的時間");
let maps = Array(953040000, 953060000, 953070000, 953080000, 953050000);
let minLevel = Array(150, 160, 170, 180, 190);
let maxLevel = Array(160, 170, 180, 190, 200);
let minPlayers = 1;
let maxPlayers = 6;
let maxenter = 50;
let selStr = "完成關卡獲得獎勵，證明自己的實力吧！\r\n#b";
for (let  i = 0; i < mapNames.length; i++) {
        selStr += "#L" + i + "#" + mapNames[i] + " ( " + minLevel[i] + " - " + maxLevel[i] + " )#l\r\n";
}

let sel = npc.askMenu(selStr, 9071004);
if (party == null || player.getId() != party.getLeader()) {
        npc.sayNext("\r\n錯誤：你必須要有一個隊伍！", 9071004);
} else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 275) > maxPlayers) {
        npc.sayNext("\r\n錯誤：你必須要有一個隊伍！", 9071004);
} else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
        npc.sayNext("\r\n錯誤：你的等級不在規定的範圍之內！", 9071004);
//} else if (party.getMembersCount(map.getId(), 1, 275) < party.getMembersCount()) {
       // npc.sayNext("\r\n錯誤：請將你的隊友集合起來！", 9071004);
} else if (!party.isAllMembersAllowedPQ("mPark", maxenter)) {
        npc.sayNext("\r\n錯誤：隊伍有人的挑戰次數已達上限！", 9071004);
} else if (npc.makeEvent("mPark", false, [party, maps[sel], minLevel[sel]]) == null) {
        npc.sayNext("\r\n錯誤：請將訊息截圖保存並與遊戲管理員聯繫！", 9071004);
}
