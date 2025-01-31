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


/*
let mapIndex = npc.askYesNo("你想傳送到美洲豹棲息地麼?");
if (mapIndex == 1) {
	player.changeMap(931000500);
}
*/


//隊伍人數
let minPlayers = 1;
let maxPlayers = 6;
//隊伍等級
var minLevel = [150];
var maxLevel = [300];
//總次數
var maxenter = [200];
let BossName = "美洲豹";
let PQLog = ["美洲豹"];
let event = ["美洲豹"];
let onlyOne = true;
let warn = true;
let itemss1 = 4032055;//入場道具
let itemss2 = 0;//數量


var XC01 = "#fUI/NameTag.img/medal/175/w#";// - BURNING(左)
var XC02 = "#fUI/NameTag.img/medal/175/c#";// - BURNING(中)
var XC03 = "#fUI/NameTag.img/medal/175/e#";// - BURNING(右)

var text = "";
text += "\t\t\t        #fs24##b#e#fc0xFFF0F90A#【" + BossName + "】\r\n";
text += "" + XC01;
for (var i = 0; i <= 240; i++) {
	text += XC02;
};
text += XC03 + "\r\n"
text += "#n#fs16##fc0xFF02FC9B#";
text += "人數限制:[" + minPlayers + "-" + maxPlayers + "]  次數限制:[" + player.getEventValue(event) + "/" + maxenter + "]  入場等級:[" + minLevel + "-" + maxLevel + "] \r\n";
text += "#r稀有豹Hp : 1萬\r\n";

text += "";
//text = "#L0#" + ee + " 進入次元入侵（狀態：#e" + "開啟" + "#n）。#l\r\n";
//text += "\t\t\t\t  #fs20##r#L0##e" + ee + " 進入次元入侵。#l\r\n";
text += "";

text += "\t\t\t #fs20##r#L0##e進入 稀有" + BossName + " 棲息地#l\r\n\r\n\r\n";
text += "#n#fs16##fc0xFF02FC9B##n你想傳送到美洲豹棲息地嗎？\r\n";
text += "\t\t     #fs20##r#L1##e進入 美洲豹 棲息地#l\r\n";

text += "\r\n";
let sel = npc.askMenuA("" + text, true);
if (sel == 0) {
	if (party == null || player.getId() != party.getLeader()) {
		npc.sayNext("#fs14##b你需要有一個#r" + minPlayers + "~" + maxPlayers + "#b人的隊伍.並且等級在" + minLevel[sel] + "~" + maxLevel[sel] + ",\r\n那麼請讓你的組隊長和我對話吧!", true);
	} else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
		npc.sayNext("#fs14##b你需要有一個#r" + minPlayers + "~" + maxPlayers + "#b人的隊伍.!", true);
	} else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
		npc.sayNext("#fs14##b你隊員的等級要在" + minLevel[sel] + "~" + maxLevel[sel] + "內!", true);
	} else if (party.getMembersCount(map.getId(), 1, 300) < party.getMembersCount()) {
		npc.sayNext("#fs14##b好像有隊員在其他地方，請把隊員都召集到這裡！", true);
	} else if (player.getEventValue(event[sel]) >= maxenter[sel]) {
		npc.sayNext("#fs14##b次數已經達到上限了。", true);
	} else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
		npc.sayNext("#fs14##b已經有隊伍在進行了,請更換其他頻道嘗試。", true);
	}
	//npc.broadcastPlayerNotice(49,"【"+BossName+"】 " + player.getName() + " 帶領成員進入！！");


} else {
	player.changeMap(931000500);
}


