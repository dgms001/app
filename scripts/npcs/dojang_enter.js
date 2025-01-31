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
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var f2 = "#fUI/CashShop/CSBeauty/hairColor/Enable/2#"
var f3 = "#fUI/CashShop/CSBeauty/hairColor/Enable/3#"
var f4 = "#fUI/CashShop/CSBeauty/hairColor/Enable/4#"
var f5 = "#fUI/CashShop/CSBeauty/hairColor/Enable/5#"
let minPlayers = [1];
let maxPlayers = [1];
let minLevel = [200];
let maxLevel = [300];
let maxenter = [1];
let BossName = ["武陵道場"];
let PQLog = ["武陵道場"];
let event = ["PQ_Dojang"];
let onlyOne = true;
//如果需要破攻值則填寫破攻值
let checkLimit = 0;
//false不進行廣播 true進行進入副本廣播
let warn = true;
let startmap = 925020001;;
if (map.getId() == startmap) {
	let text = "";
	for (var i = 0; i < BossName.length; i++) {

		text += "#r\t#fs16##e#L" + i + "#進入" + BossName[i] + "#l #L66##b武陵商店#l  #L88##b滅龍製作#l  #L89##b滅龍強化#l\r\n\r\n";
		text += "#r\t\t\t\t  #L86##b使用#v2633609#重載副本#l";
	}
	let sel = npc.askMenuA("\r\n#fs21##r#e[武陵道場]#n\r\n#fs16##e#b每日次數[#r" + player.getEventValue(PQLog[i]) + "-" + maxenter + "#b]\r\n\r\n#b通關隨機獲取武陵點數\r\n#b\r\n" + text, true);
	if (sel == 66) {
		player.runScript("武陵商店");
				     } else if (sel == 86) {
            var bossevent = Array("武陵道場");
        if (player.hasItem(2633609, 1)) {
            for (var i = 0; i < bossevent.length; i++) {
				player.loseItem(2633609, 1)
                player.addPQLog(bossevent[i], -1, 1);
                player.addEventValue(bossevent[i], -1, 1);
            }
            player.addEventValue("每日BOSS重置", 1, 1);
            npc.broadcastPlayerNotice(7, "[副本系統]  玩家 ★★★ " + player.getName() + " ★★★ 重置" + BossName + "副本");
            npc.say("重置成功");
        } else {
            npc.say("你重置物品不足");
        }

	} else if (sel == 88) {
		player.runScript("滅龍");
			} else if (sel == 89) {
		player.runScript("滅龍強化");
	} else if (party == null || player.getId() != party.getLeader()) {
		npc.sayNextS("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.並且等級在" + minLevel[sel] + "~" + maxLevel[sel] + ",\r\n那麼請組隊後和我對話吧!", true);
	} else if (checkLimitBreak() != 0) {
		if (checkLimitBreak() == 1) {
			//npc.say("此副本需要檢查破功值,請佩戴好武器.");
			npc.say("請聯繫管理員A");
		} else if (checkLimitBreak() == 2) {
			//npc.say("此副本需要破攻上限值為:"+checkLimit+"才能進入副本.");
			npc.say("請聯繫管理員B");
		}
	} else if (party.numberOfMembersInChannel() > minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
		npc.sayNext("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.!", true);
	} else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
		npc.sayNext("你隊員的等級要在" + minLevel[sel] + "~" + maxLevel[sel] + "范圍!請確認!", true);
	} else if (party.numberOfMembersInChannel() < party.getMembersCount()) {
		npc.say("好像你有隊員在其他地方,請把隊員都召集到這裡!");
	} /*else if (!party.isAllMembersAllowedPQ(PQLog[sel], maxenter[sel])) {
                npc.sayNext("你隊員#r#e" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]) + "#n#k次數已經達到上限了。", true);
        } */else if (player.getEventValue("武陵道場") >= maxenter[sel]) {
		npc.sayNext("#r#e" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]) + "#n#k帳號次數已經達到上限了。", true);
	} else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
		npc.sayNext("已經有隊伍在進行了,請更換其他頻道嘗試。", true);
	} else {
		player.updateQuestRecordEx(114981, "PCAdvantage", "0");
		player.updateQuestRecordEx(38471, "Result", "complete");
		player.updateQuestRecordEx(38481, "Floor", "0");
		player.updateQuestRecordEx(38481, "Time", "0");
		player.updateQuestRecordEx(38491, "Floor", "0");
		player.updateQuestRecordEx(38491, "Time", "0");
		player.updateQuestRecordEx(38471, "Result", "start");
		player.updateQuestRecordEx(38471, "Floor", "0");
		player.updateQuestRecordEx(38471, "Time", "0");
		if (warn) {
			npc.broadcastPlayerNotice(1, "[武陵道場] :玩家 " + player.getName() + "  進入了 [" + BossName[sel] + "]副本。");
		}
	}
	//npc.broadcastPlayerNotice(49,"【"+BossName+"】 " + player.getName() + " 開始攻略了！！");
} else {
	let ret = npc.askYesNo("#e<Boss：武陵道場>#n\r\n\r\n你想要現在就離開這裡嗎？");
	if (ret == 1) {
		player.changeMap(startmap, 0);
	}
}

//返回 0 正常 1沒有佩戴武器 2破攻上限不夠
function checkLimitBreak() {
	var flag = 0;
	if (checkLimit != 0) {
		var item = player.getInventorySlot(-1, -11);
		if (item == null) {
			flag = 1;
		} else if (item.getLimitBreak() < checkLimit) {
			flag = 2;
		}
	}
	return flag;
}
