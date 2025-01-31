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
var minLevel = [200,200];
var maxLevel = [300,300];
//次數限制
var maxenter = [1,1];
let bossname = "凡雷恩";
let PQLog = ["凡雷恩[普通]","凡雷恩[困難]"];
let event = ["boss_vonleon","boss_vonleon_hard"];
let onlyOne = true;
let warn = false; 

var XC01 = "#fUI/NameTag.img/medal/914/w#";// - BURNING(左)
var XC02 = "#fUI/NameTag.img/medal/914/c#";// - BURNING(中)
var XC03 = "#fUI/NameTag.img/medal/914/e#";// - BURNING(右)


var text = "";
	text = "\t\t\t#v3994016##v3994000##v3994006##v3994006##v3994010#  #v3994025##v3994000##v3994012##v3994001#\r\n";
	
		text += "#e#r請選擇進入模式：#b完成記錄將在晚0點初始化\r\n\r\n";
for (var i = 0; i < PQLog.length; i++) {
        text += "#b\t\t\t\t  #L" + i + "##b" + PQLog[i] + "[#r" + player.getPQLog(event[i]) + "/#r" + maxenter[i] + "#b]#l\r\n\r\n";
		
}
text += "";
text +="\t\t\t\t  #L6#使用#v2633609#重置BOSS#l";
//let selection = npc.askMenu(txt);
let sel = npc.askMenuA("" + text, true);
			      if (sel == 6) {
					  var xuanze = npc.askYesNo("#fs16##e#b重置普通點擊[#r是#b],重置困難點擊[#r否#b]");
					   var bossevent = Array("boss_vonleon","boss_vonleon_hard");
					   if (!player.hasItem(2633609, 1)) {
						   npc.say("你重置物品不足");
					   }else if(xuanze == 1){
						   player.loseItem(2633609, 1)
                player.addPQLog(bossevent[0], -1, 1);
                player.addEventValue(bossevent[0], -1, 1);
            player.addEventValue("每日BOSS重置", 1, 1);
            npc.broadcastPlayerNotice(7, "[副本系統]  玩家 ★★★ " + player.getName() + " ★★★ 重置普通" + bossname + "副本"); 
						  npc.say("重置普通難度成功");
					  }else{
						  player.loseItem(2633609, 1)
                player.addPQLog(bossevent[1], -1, 1);
                player.addEventValue(bossevent[1], -1, 1);
            player.addEventValue("每日BOSS重置", 1, 1);
            npc.broadcastPlayerNotice(7, "[副本系統]  玩家 ★★★ " + player.getName() + " ★★★ 重置困難" + bossname + "副本"); 
						 npc.say("重置困難難度成功");
					  }
} else if (party == null || player.getId() != party.getLeader()) {
	npc.askMenuA("\r\n\r\n\r\n\r\n#b請玩家先創建隊伍,限制人數#r[" + minPlayers + "-" + maxPlayers + "]#b人隊伍,並且等級在#r[" + minLevel[sel] + "-" + maxLevel[sel] + "]#b之間,讓你的隊長和我對話吧!", true);
} else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
	npc.askMenuA("\r\n\r\n\r\n\r\n#b你需要有一個#r" + minPlayers + "-" + maxPlayers + "#b人的隊伍.!", true);
} else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < party.getMembersCount(map.getId(), 1, 300)) {
	npc.askMenuA("\r\n\r\n\r\n\r\n#b你隊員的等級要在#r[" + minLevel[sel] + "-" + maxLevel[sel] + "]#b之間!", true);
} else if (party.numberOfMembersInChannel() < party.getMembersCount()) {
	npc.say("\r\n\r\n\r\n\r\n#b好像你有隊員在其他地方,請把隊員都召集到這裡!");
} else if (!party.isAllMembersAllowedPQ(event[sel], maxenter[sel])) {
	npc.askMenuA("\r\n\r\n\r\n\r\n#b你隊員#r[" + party.getNotAllowedMember(event[sel], maxenter[sel]) + "]#b次數已經達到上限了。", true);
} else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
	npc.askMenuA("\r\n\r\n\r\n\r\n#b已經有隊伍在進行了,請更換其他頻道嘗試。", true);
} else {
	if (warn) {
		npc.broadcastPlayerNotice(8, "[BOSS提示] : " + player.getName() + " 隊伍人數：" + party.getMembersCount() + " 進入了 [" + BossName + "]副本。");
	}
}
