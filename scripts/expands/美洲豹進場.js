
//隊伍人數
let minPlayers = 1;
let maxPlayers = 1;
//隊伍等級
var minLevel = [100];
var maxLevel = [300];
//總次數
var maxenter = [999];
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
text += "\t\t\t          #b" + BossName + "\r\n";
//text += ""+XC01;
for (var i = 0; i <= 240; i++) {
	//text += XC02;
};
//text += XC03 + "\r\n"
text += "#b";
text += "人數限制:[#r" + minPlayers + "-" + maxPlayers + "#b]  \r\n次數限制:[#r" + player.getEventValue(event) + "/" + maxenter + "#b]  \r\n入場等級:[#r" + minLevel + "-" + maxLevel + "#b] \r\n";


//text = "#L0#" + ee + " 進入次元入侵（狀態：#e" + "開啟" + "#n）。#l\r\n";
//text += "\t\t\t\t  #fs20##r#L0##e" + ee + " 進入次元入侵。#l\r\n";
text += "";

text += "#r#L0#進入稀有" + BossName + "的棲息地#l  ";
text += "  #b#L1#進入美洲豹棲息地#l\r\n";

text += "\r\n";
let sel = npc.askMenuS("" + text, true);
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
