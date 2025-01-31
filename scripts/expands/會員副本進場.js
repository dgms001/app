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
let maxPlayers = 1;
//等級限制
var minLevel = [200, 200, 200];
var maxLevel = [300, 300, 300];
//次數限制
var maxenter = [500];
let BossName = "會員副本";
let PQLog = ["會員副本初級", "會員副本中級", "會員副本高級"];
let event = ["會員副本初級", "會員副本中級", "會員副本高級"];
let onlyOne = true;
let warn = true;

//player.runScript("會員副本進場");
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
text += "\t\t\t\t\t     人數1-1人\r\n";
text += "會員副本次數剩餘: " + player.getEventValue("會員副本次數") + " ";
text += "\r\n#fs17##e";
//text += "#fs17##e\t\t\t  ";
for (var i = 0; i < PQLog.length; i++) {
	text += "#b #L" + i + "#\t\t#fc0xFFF7E70D#" + PQLog[i] + " [#r" + player.getPQLog(PQLog[i]) + "#fc0xFFF7E70D#/#b" + maxenter[i] + "#fc0xFFF7E70D#]#l    \r\n";
}

text += "\r\n";
//if (player.isGm()) {text += ""+npc.getEvent("戰國無雙")+"";}
let sel = npc.askMenuA("" + text, true);
if (player.getEventValue("會員副本次數") == 0) {
	npc.say("你沒有次數");
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
}