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

let minPlayers = 1;
let maxPlayers = 6;
/*
let minLevel = [200, 200];
let maxLevel = [300, 300];
let maxenter = [30, 10];*/

let minLevel = [200];
let maxLevel = [300];
let maxenter = [2];
let BossName = ["路西德"];
let PQLog = ["Lucid"];
let event = ["boss_lucid"];
let onlyOne = true;
let startmap = 450004000;
let useTicket = 0;

if (map.getId() == startmap) {
        let text = "";
        for (let i = 0; i < BossName.length; i++) {
                text += "\r\n#b#L" + i + "#挑戰" + BossName[i] + "#r<剩余次數 "+(maxenter[i]-player.getPQLog(PQLog[i]))+">#l#k";
        }
        let sel = npc.askMenuE("#e<Boss：路西德>#n\r\n再往前就是世界樹的頂端了，是否做好向著路西德發起挑戰的準備了呢？#b" + text, true);
        if (party == null || player.getId() != party.getLeader()) {
                npc.sayNextE("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.並且等級在" + minLevel[sel] + "~" + maxLevel[sel] + "范圍,\r\n那麼請讓你的組隊長和我對話吧!", true);
        } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
                npc.sayNextE("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.!", true);
        } else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
                npc.sayNextE("你隊員的等級要在" + minLevel[sel] + "~" + maxLevel[sel] + "范圍!請確認!", true);
        } else if (!party.isAllMembersAllowedPQ(PQLog[sel], maxenter[sel])) {
                npc.sayNextE("你隊員#r#e" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]) + "#n#k次數已經達到上限了。", true);
        } else if (useTicket != 0 && party.getMembersCount(map.getId(), 1, 300) < 1 && !player.hasItem(useTicket,1)) {
			npc.say("你單人參加卻#k沒有#i" + useTicket + "##t" + useTicket + "#,請確認!");
		} else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
                npc.sayNextE("已經有隊伍在進行了,請更換其他頻道嘗試。", true);
        }
}