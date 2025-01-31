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
let minPlayers = 1;
let maxPlayers = 6;
var minLevel = [150, 150];
var maxLevel = [300, 300];
let maxenter = [2];
let BossName = "西格諾斯";
let PQLog = ["西格諾斯[普通難度]"];
let event = ["boss_shinas"];
let onlyOne = true;
let startmap = 271040000;
var XC01 = "#fUI/NameTag.img/274/w#";// - 石靈名牌戒指(左)
var XC02 = "#fUI/NameTag.img/274/c#";// - 石靈名牌戒指(中)
var XC03 = "#fUI/NameTag.img/274/e#";// - 石靈名牌戒指(右)

if (map.getId() == startmap) {
		var text = "";
		text += "\t\t\t    #fs24##b#e#fc0xFFCC13AB#【Boss - " + bossname + "】\r\n#fs17#";
		text += ""+XC01;
		for (var i = 0; i <= 200; i++) {
				text += XC02;
			};
		text += XC03 + "\r\n"
		
		text += "#fs17##e#b普通難度BOSS血量:[#r3.15億#b] 專屬物品:[#v2630367##v3010512#]\r\n";
		text += "";
		text += "#fs17##e#b困難難度BOSS血量:[#r1400億#b] 專屬物品:[#v2630370##v3991066#]\r\n";
		text += "";
		text += "";
		text += "";
		for (var i = 0; i < PQLog.length; i++) {
			text += "#b#L" + i + "##fc0xFFF7E70D#" + PQLog[i] + " [#r"+player.getPQLog(PQLog[i])+"#fc0xFFF7E70D#/#b"+maxenter[i]+"#fc0xFFF7E70D#]#l";
		}
		text += "\r\n";
		let sel = npc.askMenuA("" + text,true);
		if (party == null || player.getId() != party.getLeader()) {
				npc.sayNext("#fs18##e#b\t  請玩家先創建隊伍\r\n\t #fs14#此副本接受#r[" + minPlayers + "-" + maxPlayers + "]#b人的隊伍\r\n\t  並且等級在#r[" + minLevel[sel] + "-" + maxLevel[sel] + "]#b之間\r\n\t   讓你的隊長和我對話吧!", true);
		} else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
				npc.sayNext("#fs17##e#b你需要有一個#r" + minPlayers + "-" + maxPlayers + "#b人的隊伍.!", true);
		} else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
				npc.sayNext("#fs17##e#b你隊員的等級要在#r[" + minLevel[sel] + "-" + maxLevel[sel] + "]#b之間!", true);
		}else if(party.numberOfMembersInChannel() < party.getMembersCount()){
				npc.say("#fs17##e#b好像你有隊員在其他地方,請把隊員都召集到這裡!");
		} else if (!party.isAllMembersAllowedPQ(PQLog[sel], maxenter[sel])) {
				npc.sayNext("#fs17##e#b你隊員#r[" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]) + "]#b次數已經達到上限了。", true);
		} else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
				npc.sayNext("#fs17##e#b已經有隊伍在進行了,請更換其他頻道嘗試。", true);
		}else{
			if(warn){
				npc.broadcastPlayerNotice(8,"[BOSS提示] : " + player.getName() + " 隊伍人數："+party.getMembersCount()+" 進入了 ["+BossName[sel]+"]副本。");
			}
		}
		
}
*/