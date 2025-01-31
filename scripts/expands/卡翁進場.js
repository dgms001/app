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
//等級限制
var minLevel = [220];
var maxLevel = [300];
//次數限制
var maxenter = [1];
let BossName = "卡翁";
let PQLog = ["卡翁[普通]"];
let event = ["boss_caoong"];
let onlyOne = true;
let warn = true;

var XC01 = "#fUI/NameTag.img/medal/914/w#";// - BURNING(左)
var XC02 = "#fUI/NameTag.img/medal/914/c#";// - BURNING(中)
var XC03 = "#fUI/NameTag.img/medal/914/e#";// - BURNING(右)


var text = "";
text += "\t\t\t     #fs24##b#e#fc0xFFCC13AB#【Boss - " + bossname + "】\r\n#fs17#";
text += "" + XC01;
for (var i = 0; i <= 200; i++) {
	text += XC02;
};
text += XC03 + "\r\n"

text += "#fs17##e#b \t\t\t  單一難度血量:[#r84億#b]\r\n";
text += "\t\t\t 全員獎勵(帳號限定):[#v4032053##v4001713##v4000539#]\r\n";
//text += "\t\t\t   專屬掉落:[#v4009380#]\r\n";
//text += "#fs17##e#b普通難度BOSS血量:[#r352億#b] 專屬物品:[#v1122150##v2671037#]\r\n";
text += "\t\t\t  掉落獎勵:[#v2048812##v4009380#]\r\n\r\n";
text += "";
text += "";
for (var i = 0; i < PQLog.length; i++) {
	text += "#b \t\t\t #L" + i + "##fc0xFFF7E70D#" + PQLog[i] + " [#r" + player.getPQLog(event[i]) + "#fc0xFFF7E70D#/#b" + maxenter[i] + "#fc0xFFF7E70D#]#l";
}
text += "\r\n";
let sel = npc.askMenuA("" + text, true);
if (party == null || player.getId() != party.getLeader()) {
	npc.sayNext("#fs18##e#b\t  請玩家先創建隊伍\r\n\t #fs14#此副本接受#r[" + minPlayers + "-" + maxPlayers + "]#b人的隊伍\r\n\t  並且等級在#r[" + minLevel[sel] + "-" + maxLevel[sel] + "]#b之間\r\n\t   讓你的隊長和我對話吧!", true);
} else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
	npc.sayNext("#fs17##e#b你需要有一個#r" + minPlayers + "-" + maxPlayers + "#b人的隊伍.!", true);
} else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < party.getMembersCount(map.getId(), 1, 300)) {
	npc.sayNext("#fs17##e#b你隊員的等級要在#r[" + minLevel[sel] + "-" + maxLevel[sel] + "]#b之間!", true);
} else if (party.numberOfMembersInChannel() < party.getMembersCount()) {
	npc.say("#fs17##e#b好像你有隊員在其他地方,請把隊員都召集到這裡!");
} else if (!party.isAllMembersAllowedPQ(event[sel], maxenter[sel])) {
	npc.sayNext("#fs17##e#b你隊員#r[" + party.getNotAllowedMember(event[sel], maxenter[sel]) + "]#b次數已經達到上限了。", true);
} else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
	npc.sayNext("#fs17##e#b已經有隊伍在進行了,請更換其他頻道嘗試。", true);
} else {
	if (warn) {
		npc.broadcastPlayerNotice(8, "[BOSS提示] : " + player.getName() + " 隊伍人數：" + party.getMembersCount() + " 進入了 [" + BossName + "]副本。");
	}
}