let minPlayers = 1;
let maxPlayers = 1;
let minLevel = [50];
let maxLevel = [300];
let maxenter = [2];
let PQLog = ["艾利杰2"];
let event = ["eliza2"];
let onlyOne = true;

//如果需要破攻值則填寫破攻值
let checkLimit = 0;
//false不進行廣播 true進行進入副本廣播
let warn = true;


//開始的地圖
var startmap = 200010300;
if (map.getId() == startmap || true) {
	var text = "";
	for (var i = 0; i < PQLog.length; i++) {
		text += "\r\n#b#L" + i + "#挑戰" + PQLog[i] + "   " + player.getPQLog(PQLog[i]) + "/" + maxenter[i] + "#l";
	}

	let sel = npc.askMenu("#e<Boss - " + PQLog[0] + ">#n\r\n\r\n#b#h0# \n\#k你為了復興海盜而來？擊殺艾利杰獲得#v4000735#!!!\r\n" + text);

	if (sel == 0) {
		if (party == null || player.getId() != party.getLeader()) {
			npc.sayNext("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.並且等級在" + minLevel[sel] + "~" + maxLevel[sel] + "范圍,\r\n那麼請讓你的組隊長和我對話吧!", true);
		} else if (checkLimitBreak() != 0) {
			if (checkLimitBreak() == 1) {
				npc.say("此副本需要檢查破功值,請佩戴好武器.");
			} else if (checkLimitBreak() == 2) {
				npc.say("此副本需要破攻上限值為:" + checkLimit + "才能進入副本.");
			}
		} else if (player.getCashShopCurrency(1) < 20000) {
			npc.say("請準備2萬點券。");
		} else if (!player.hasItem(4002003, 2)) {
			npc.say("請準備2張綠水靈郵票！");
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
				npc.broadcastPlayerNotice(8, "[BOSS提示] : " + player.getName() + " 隊伍人數：" + party.getMembersCount() + " 進入了 [" + BossName + "]副本。");
			}
			player.loseItem(4002003, 2);
			player.modifyCashShopCurrency(1, -20000);
		}

	}

} else {
	let ret = npc.askYesNo("#e<Boss：艾利杰>#n\r\n\r\n你想要現在就離開這裡嗎？", true);
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

