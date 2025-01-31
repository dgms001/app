let minPlayers = 1;
let maxPlayers = 6;
let minLevel = [150];
let maxLevel = [300];
let maxenter = [2];
let PQLog = ["調和精靈副本"];
let event = ["boss_aerkna"];
let onlyOne = true;


let checkLimit = 1000000;
let warn = true;

//開始的地圖
var startmap = 450005100;
if (map.getId() == startmap || true) {
	var text = "";
	for (var i = 0; i < PQLog.length; i++) {
		text += "\r\n#b#L" + i + "#挑戰" + PQLog[i] + "   " + player.getPQLog(PQLog[i]) + "/" + maxenter[i] + "#l";
	}

	let sel = npc.askMenu("#e<BOSS任務：調和精靈副本>#n\r\n\r\n歡迎來到調和精靈副本！這裡可以獲得#b神秘徽章 & 生命力材料！#n\r\n\r\n#b" + text + "\r\n\r\n");//#L2#搜集生命力獲得神秘徽章第4.5.6槽。#l\r\n

	if (sel == 0) {
		if (party == null || player.getId() != party.getLeader()) {
			npc.sayNext("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.並且等級在" + minLevel[sel] + "~" + maxLevel[sel] + "范圍,\r\n那麼請讓你的組隊長和我對話吧!", true);
		} else if (checkLimitBreak() != 0) {
			if (checkLimitBreak() == 1) {
				npc.say("此副本需要檢查破功值,請佩戴好武器.");
			} else if (checkLimitBreak() == 2) {
				npc.say("此副本需要破攻上限值為:" + checkLimit + "才能進入副本.");
			}
		} else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
			npc.sayNext("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.!", true);
		} else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
			npc.sayNext("你隊員的等級要在" + minLevel[sel] + "~" + maxLevel[sel] + "范圍!請確認!", true);
		} else if (party.numberOfMembersInChannel() < party.getMembersCount()) {
			npc.say("好像你有隊員在其他地方,請把隊員都召集到這裡!");
		} else if (!party.isAllMembersAllowedPQ(PQLog[sel], maxenter[sel])) {
			npc.sayNext("你隊員#r#e" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]) + "#n#k次數已經達到上限了。", true);
		} else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
			npc.sayNext("已經有隊伍在進行了,請更換其他頻道嘗試。", true);
		} else {
			if (warn) {
				npc.broadcastPlayerNotice(8, "[BOSS提示] : " + player.getName() + " 隊伍人數：" + party.getMembersCount() + " 進入了 [" + PQLog[sel] + "]副本。");
			}
		}

	} else if (sel == 2) {
		if (player.hasItem(4036101, 300) & player.hasItem(4036098, 300) & player.hasItem(4036102, 300)) {
			player.loseItem(4036101, 300);
			player.loseItem(4036098, 300);
			player.loseItem(4036102, 300);
			player.completeQuest(34478, 0);//
			npc.say("神秘徽章第4.5.6槽已經為你打開!");
		} else {
			npc.say("請你搜集足夠的個生命力:\r\n#r需要#t4036101#：\t\t " + player.getAmountOfItem(4036101) + " / 300 個\r\n需要#t4036098#：\t\t#r " + player.getAmountOfItem(4036098) + " / 300 個\r\n需要#t4036102#：\t\t#r " + player.getAmountOfItem(4036102) + " / 300 個");
		}
	}

} else {
	let ret = npc.askYesNo("#e<Boss：調和精靈副本>#n\r\n\r\n你想要現在就離開這裡嗎？", true);
	if (ret == 1) {
		player.changeMap(startmap);
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

