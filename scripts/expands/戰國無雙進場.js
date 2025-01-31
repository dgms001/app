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
let maxPlayers = 2;
//等級限制
var minLevel = [200];
var maxLevel = [300];
//次數限制
var maxenter = [5];
let BossName = "戰國無雙";
let PQLog = ["戰國無雙"];
let event = ["戰國無雙"];
let onlyOne = true;
let warn = true;


var XC01 = "#fUI/NameTag.img/medal/175/w#";// - BURNING(左)
var XC02 = "#fUI/NameTag.img/medal/175/c#";// - BURNING(中)
var XC03 = "#fUI/NameTag.img/medal/175/e#";// - BURNING(右)


var text = "";
text += "\t\t\t        #fs24##b#e#fc0xFFCC13AB#【" + bossname + "】\r\n";
text += "" + XC01;
for (var i = 0; i <= 240; i++) {
	text += XC02;
};
text += XC03 + "\r\n\r\n#b#n#fs15#"
text += "\t\t\t\t\t     人數1-2人\r\n";
text += "";
//text += "\t\t\t     全員獎勵(帳號限定):#v4001779#*5\r\n";
//text += "#fs17##e#b困難難度血量:[#r210億#b] 專屬掉落物:[#v1113282##v2671058#]\r\n";

text += "\t\t\t\t\t   每日可進入5次\r\n";
text += "\r\n#fs17##e";
text += "#fs17##e\t\t\t  ";
for (var i = 0; i < PQLog.length; i++) {
	text += "#b #L" + i + "##fc0xFFF7E70D#" + PQLog[i] + " [#r" + player.getEventValue(PQLog[i]) + "#fc0xFFF7E70D#/#b" + maxenter[i] + "#fc0xFFF7E70D#]#l    \r\n";
}

text += "#e#fs20#\t\t\t #L10#強化圖騰#l #L11#兌換圖騰#l\r\n";
text += "\r\n";
//if (player.isGm()) {text += ""+npc.getEvent("戰國無雙")+"";}
let sel = npc.askMenuA("" + text, true);
if (sel == 10) {
	player.runScript("戰國圖騰強化");
} else if (sel == 11) {
	player.runScript("戰國無雙兌換");
} else {

	if (party == null || player.getId() != party.getLeader()) {
		npc.sayNextS("#fs18##e#b\t  請玩家先創建隊伍\r\n\t #fs14#此副本接受#r[" + minPlayers + "-" + maxPlayers + "]#b人的隊伍\r\n\t  並且等級在#r[" + minLevel[sel] + "-" + maxLevel[sel] + "]#b之間\r\n\t   讓你的隊長和我對話吧!", true);
	} else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
		npc.sayNextS("#fs17##e#b你需要有一個#r" + minPlayers + "-" + maxPlayers + "#b人的隊伍.!", true);
	} else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < party.getMembersCount(map.getId(), 1, 300)) {
		npc.sayNextS("#fs17##e#b你隊員的等級要在#r[" + minLevel[sel] + "-" + maxLevel[sel] + "]#b之間!", true);
	} else if (party.numberOfMembersInChannel() < party.getMembersCount()) {
		npc.sayNextS("#fs17##e#b好像你有隊員在其他地方,請把隊員都召集到這裡!");
	} else if (!party.isAllMembersAllowedPQ(event[sel], maxenter[sel])) {
		npc.sayNextS("#fs17##e#b你隊員#r[" + party.getNotAllowedMember(event[sel], maxenter[sel]) + "]#b次數已經達到上限了。", true);
	} else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
		npc.sayNextS("#fs17##e#b已經有隊伍在進行了,請更換其他頻道嘗試。", true);
	} else {

	}
}

