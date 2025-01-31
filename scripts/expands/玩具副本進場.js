var itemList = Array(
	//鞭
	1302013, 1302061, 1302049, 1302080,
	1302088, 1302160, 1302161, 1302162,
	//雨傘
	1302016, 1302017, 1302025, 1302026, 1302027, 1302028,
	1302029, 1302058, 1302180,
	//泳圈
	1302358, 1322021, 1322022, 1322023, 1322024, 1322025,
	1322026,
	//槌子
	1402257, 1402258, 1302021,
	//滑雪板雙
	1432015, 1432016, 1432017, 1432018,
	//滑雪板
	1442011, 1442012, 1442013, 1442014, 1442015, 1442016,
	1442017, 1442026, 1442027, 1442028, 1442029, 1442030,
	1442046, 1442054, 1442055, 1442056, 1442057,
	//花
	1442050, 1442121, 1442122, 1442123,
	//蛋糕火柴
	1302084, 1302085, 1302129,
	//香菇
	1382016, 1382015,
	1442039, 1442068, 1442106, 1442025,
	//復古
	1302357, 1402270,
	//球棒8+9
	1402009, 1402010,
	//畫筆
	1312013, 1312014,
	//仙女棒
	1472081, 1472098,
	1302087, 1302022, 1302024, 1302031, 1302063, 1302102, 1382261,
	1302105, 1302132, 1302150, 1312012, 1322003, 1322012, 1322013, 1322027, 1322031, 1322033, 1322034, 1322051, 1322070, 1322102, 1322225, 1322269, 1332020, 1332021, 1332029, 1332030, 1332032, 1332048, 1332053, 1332101, 1372017, 1372033, 1372221, 1382038, 1402013, 1402014, 1402029, 1402038, 1402044, 1402110, 1402178, 1402230, 1422036, 1422068, 1422160, 1402037,
	//屍體
	1442277,


);


let minPlayers = 3;
let maxPlayers = 6;
let minLevel = [200];
let maxLevel = [300];
let maxenter = [1];

let BossName = "玩具副本";
let PQLog = ["玩具副本"];
let event = ["玩具副本"];
let onlyOne = true;
let warn = true;
let checkLimit = 1000000;
let item = 4031434;	//入場道具
let itemcount = 1;		//消耗數量


var XC01 = "#fUI/NameTag.img/medal/175/w#";// - BURNING(左)
var XC02 = "#fUI/NameTag.img/medal/175/c#";// - BURNING(中)
var XC03 = "#fUI/NameTag.img/medal/175/e#";// - BURNING(右)


var text = "";
text += "\t\t\t     #fs32##b#e#fc0xFFF0F90A#【" + BossName + "】\r\n";
text += "" + XC01;
for (var i = 0; i <= 240; i++) {
	text += XC02;
};
text += XC03 + "\r\n"
text += "#n#fs16##fc0xFF02FC9B#";
text += "人數限制:[" + minPlayers + "-" + maxPlayers + "]  次數限制:[" + player.getEventValue(PQLog) + "/" + maxenter + "] 入場等級:[" + minLevel + "-" + maxLevel + "]\r\n";
text += "#b";
text += "入場消耗: [#i4031434#*1]\r\n";
text += "全員獎勵: 玩具道具(下方可瀏覽)\r\n";
text += "";
text += "破壞 地圖中的方塊 即可通關";
text += "\r\n";
text += "#fs17##e\t     ";
for (var i = 0; i < PQLog.length; i++) {
	text += "       #g#fs20##e#L" + i + "#進入" + PQLog[i] + "#l";
}

text += "\r\n\r\n#fs16##fc0xFFF0F90A#";
text += "#L1#瀏覽玩具#l";
text += "\r\n";

let sel = npc.askMenuA("" + text, true);

if (sel == 0) {
	if (party == null || player.getId() != party.getLeader()) {
		npc.sayNextS("#fs18##e#b\t  請玩家先創建隊伍\r\n\t #fs14#此副本接受#r[" + minPlayers + "-" + maxPlayers + "]#b人的隊伍\r\n\t  並且等級在#r[" + minLevel[sel] + "-" + maxLevel[sel] + "]#b之間\r\n\t   讓你的隊長和我對話吧!", true);
	} else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
		npc.sayNextS("#fs17##e#b你需要有一個#r" + minPlayers + "-" + maxPlayers + "#b人的隊伍.!", true);
	} else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < party.getMembersCount(map.getId(), 1, 300)) {
		npc.sayNextS("#fs17##e#b你隊員的等級要在#r[" + minLevel[sel] + "-" + maxLevel[sel] + "]#b之間!", true);
	} else if (party.numberOfMembersInChannel() < party.getMembersCount()) {
		npc.sayNextS("#fs17##e#b好像你有隊員在其他地方,請把隊員都召集到這裡!");
	} else if (party.getNotHasItemMember(item, itemcount)) {
		npc.sayNext("#fs14##b隊伍中有人#v" + item + "#不足.", true);
	} else if (!party.isAllMembersAllowedPQ(PQLog[sel], maxenter[sel])) {
		npc.sayNextS("#fs17##e#b你隊員#r[" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]) + "]#b次數已經達到上限了。", true);
	} else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
		npc.sayNextS("#fs17##e#b已經有隊伍在進行了,請更換其他頻道嘗試。", true);
	}
	if (warn) {
		//進場通知
		// npc.broadcastPlayerNotice(49,"【"+BossName+"】 " + player.getName() + " 帶領成員進入！！");

	}
}


if (sel == 1) {
	txt = "#b玩具:#k\r\n";
	// txt += " 未新增";
	for (var i = 0; i < itemList.length; i++) {
		txt += "#v" + itemList[i] + "#";
	}

	npc.sayS(txt, true);
}