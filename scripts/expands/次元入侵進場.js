


let minPlayers = 1;
let maxPlayers = 6;
//等級限制
var minLevel = [200];
var maxLevel = [300]
//次數限制
var maxenter = [1];
let BossName = ["次元入侵"];
let PQLog = ["次元入侵"];
let event = ["次元入侵"];
let onlyOne = true;

//如果需要破攻值則填寫破攻值
let checkLimit = 0;
 //false不進行廣播 true進行進入副本廣播
let warn = true; 

var XC01 = "#fUI/NameTag.img/274/w#";// - 石靈名牌戒指(左)
var XC02 = "#fUI/NameTag.img/274/c#";// - 石靈名牌戒指(中)
var XC03 = "#fUI/NameTag.img/274/e#";// - 石靈名牌戒指(右)


var text = "";
       text = "#b#fs16##e每日次數:[#r" + player.getEventValue("" + event + "") + "-" + maxenter + "#b]\r\n";
	   text += "#b怪物每輪掉落#r4#b個#v4033733#[用於兌換圖騰]\r\n";
text += "#b通關獲得#r5#b個#v4033734#[用於圖騰強化]\r\n";
for (var i = 0; i < PQLog.length; i++) {
        text += "#b\t\t\t\t  #L" + i + "##b" + PQLog[i] + "[#r" + player.getEventValue(event[i]) + "/#r" + maxenter[i] + "#b]#l\r\n\r\n";
		
}
text += "";
text +="\t #L6#使用#v2633609#重置副本#l   #L2#圖騰兌換#l   #L3#圖騰強化#l";
//let selection = npc.askMenu(txt);
let sel = npc.askMenuA("" + text, true);
			      if (sel == 6) {
        var bossevent = Array("次元入侵");
        if (player.hasItem(2633609, 1)) {
            for (var i = 0; i < bossevent.length; i++) {
				player.loseItem(2633609, 1)
                player.addPQLog(bossevent[i], -1, 1);
                player.addEventValue(bossevent[i], -1, 1);
            }
            player.addEventValue("每日BOSS重置", 1, 1);
            npc.broadcastPlayerNotice(7, "[次元入侵]  玩家 ★★★ " + player.getName() + " ★★★ 重置" + BossName + "副本");
            npc.say("重置成功");
        } else {
            npc.say("你重置物品不足");
        }
} else if (sel == 2) {
    player.runScript("圖騰兌換");
	} else if (sel == 3) {
    player.runScript("圖騰強化");
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
		npc.broadcastPlayerNotice(1, "[次元入侵] : " + player.getName() + " 隊伍人數：" + party.getMembersCount() + " 進入了 [" + BossName + "]副本。");
	}
}
