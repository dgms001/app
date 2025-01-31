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
//等級限制
var minLevel = [125, 180];
var maxLevel = [300, 300];
//次數限制
var maxenter = [2, 1];
let BossName = ["梅格耐斯"];
let PQLog = ["梅格耐斯[普通]", "梅格耐斯[困難]"];
let event = ["boss_magnus", "boss_magnus_hard"];
let onlyOne = true;
let startmap = 401060000;
//如果需要破攻值則填寫破攻值
let checkLimit = 0;
 //false不進行廣播 true進行進入副本廣播
let warn = true; 


if (map.getId() == startmap) {
		var text = "";
		for (var i = 0; i < PQLog.length; i++) {
			text += "\r\n#b#L" + i + "#挑戰" + PQLog[i] + "   "+player.getPQLog(PQLog[i])+"/"+maxenter[i]+"#l";
		}
		let sel = npc.askMenuA("\t\t\t\t  #fs26##b【#r" + bossname + "#b】\r\n#fs18#\r\n" + text,true);
		if (party == null || player.getId() != party.getLeader()) {
				npc.sayNext("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.並且等級在" + minLevel[sel] + "~" + maxLevel[sel] + "範圍,\r\n那麼請讓你的組隊長和我對話吧!", true);
		}else if(checkLimitBreak()!=0){
			if(checkLimitBreak() ==1){
				npc.say("此副本需要檢查破功值,請佩戴好武器.");
			}else if(checkLimitBreak() ==2){
				npc.say("此副本需要破攻上限值為:"+checkLimit+"才能進入副本.");
			}
		}else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
				npc.sayNext("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.!", true);
		} else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
				npc.sayNext("你隊員的等級要在" + minLevel[sel] + "~" + maxLevel[sel] + "範圍!請確認!", true);
		}else if(party.numberOfMembersInChannel() < party.getMembersCount()){
				npc.say("好像你有隊員在其他地方,請把隊員都召集到這裡!");
		} else if (!party.isAllMembersAllowedPQ(PQLog[sel], maxenter[sel])) {
				npc.sayNext("你隊員#r#e" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]) + "#n#k次數已經達到上限了。", true);
		} else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
				npc.sayNext("已經有隊伍在進行了,請更換其他頻道嘗試。", true);
		}else{
			if(warn){
				npc.broadcastPlayerNotice(8,"[BOSS提示] : " + player.getName() + " 隊伍人數："+party.getMembersCount()+" 進入了 ["+BossName[sel]+"]副本。");
			}
		}
		
}


//返回 0 正常 1沒有佩戴武器 2破攻上限不夠
function checkLimitBreak(){
	var flag = 0;
	if(checkLimit!=0){
		var item = player.getInventorySlot(-1, -11);
		if(item==null){
			flag = 1;
		}else if(item.getLimitBreak()<checkLimit){
			flag = 2;
		}
	}
	return flag;
}

*/
