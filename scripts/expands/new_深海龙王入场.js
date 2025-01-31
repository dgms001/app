let minPlayers = 1;
let maxPlayers = 6;
var minLevel = [10];
var maxLevel = [275];
let maxenter = [200];
var PQLog = ["深海龍王"];
let event = ["hhdmx"];
let onlyOne = true;
//開始的地圖
let checkLimit = 0;
let warn = true;
//開始的地圖
var startmap = 992000000;
var text = "";
for (var i = 0; i < PQLog.length; i++) {
	text += "\r\n#b#L" + i + "#挑戰" + PQLog[i] + "   " + player.getPQLog(PQLog[i]) + "/" + maxenter[i] + "#l";
}

let sel = npc.askMenu("#e<Boss - " + PQLog[0] + ">#n\r\n\r\n#b#h0# \n\#k你現在想和隊友一起挑戰這個BOSS副本嗎?\r\n" + text);
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
} if (player.getQuestRecordEx(9618) == 0) {
	player.updateQuestRecordEx(9618, "1");
} else {
	if (warn) {
		npc.broadcastPlayerNotice(8, "[BOSS提示] : " + player.getName() + " 隊伍人數：" + party.getMembersCount() + " 進入了 [" + PQLog[sel] + "]副本。");
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

