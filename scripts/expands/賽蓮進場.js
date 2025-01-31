// Created by Dgms
// [門]  |  [3004542]
// MapName:王宮主廳
// Need Quest 39921 2


// let sel = npc.askMenuE("要前去與受選的賽蓮一戰嗎？\r\n\r\n#L0##b前往與受選的賽蓮一戰。#r（等級在265級以上）#k#l\r\n#L2#不移動。#l", true);
// if (sel != 2) {
// if (party == null || player.getId() != party.getLeader()) {
// npc.sayE("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.並且等級在" + minLevel[sel] + "~" + maxLevel[sel] + "範圍,\r\n那麽請讓你的組隊長和我對話吧!", true);
// } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
// npc.sayE("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.!", true);
// } else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
// npc.sayE("你隊員的等級要在" + minLevel[sel] + "~" + maxLevel[sel] + "範圍!請確認!", true);
// } else if (party.getMembersCount(map.getId(), 1, 300) < party.getMembersCount()) {
// npc.sayE("好像有隊員在其他地方，請把隊員都召集到這裏！", true);
// } else if (!party.isAllMembersAllowedPQ(PQLog[sel], maxenter[sel])) {
// npc.sayE("你隊員#r#e" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]) + "#n#k次數已經達到上限了。", true);
// } else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
// npc.sayE("已經有隊伍在進行了,請更換其他頻道嘗試。", true);
// }
// /* Update Quest RecordEx | Id:39932 | Name: Unknown | Data: "Record=0" */
/*player.updateQuestRecordEx(39932, "Record=0");*/
// /* Update Quest RecordEx | Id:39932 | Name: Unknown | Data: "Record=0;lastDate=22/02/08" */
/*player.updateQuestRecordEx(39932, "Record=0;lastDate=22/02/08");*/
// }

let minPlayers = 1;
let maxPlayers = 6;
let minLevel = [270];
let maxLevel = [300];
let maxenter = [1];
let bossname = ["受選的賽蓮"];
let PQLog = ["受選的賽蓮"]; //Seren
let event = ["boss_seren"];
let onlyOne = true;
let startmap = 410000670;
//false不進行廣播 true進行進入副本廣播
let warn = true;

var XC01 = "#fUI/NameTag.img/274/w#"; // - 石靈名牌戒指(左)
var XC02 = "#fUI/NameTag.img/274/c#"; // - 石靈名牌戒指(中)
var XC03 = "#fUI/NameTag.img/274/e#"; // - 石靈名牌戒指(右)


var text = "";
	text = "\t\t\t#v3994016##v3994000##v3994006##v3994006##v3994010#  #v3994025##v3994000##v3994012##v3994001#\r\n";
	
		text += "#e#r請選擇進入模式：#b完成記錄將在晚0點初始化\r\n\r\n";
for (var i = 0; i < PQLog.length; i++) {
        text += "#b\t\t#L" + i + "##b" + PQLog[i] + "[#r" + player.getPQLog(event[i]) + "/#r" + maxenter[i] + "#b]#l";
		
}
text += "\t#L7#挑戰困難模式#l\r\n\r\n";
text += "\t\t\t  #L3#購買烈陽印記/日/次[10000個#v4032053#]#l\r\n\r\n";
text +="\t\t\t\t  #L6#使用#v2633609#重置BOSS#l";
//let selection = npc.askMenu(txt);
let sel = npc.askMenuA("" + text, true);
			      if (sel == 6) {
        var bossevent = Array("boss_seren");
        if (player.hasItem(2633609, 1)) {
            for (var i = 0; i < bossevent.length; i++) {
				player.loseItem(2633609, 1)
                player.addPQLog(bossevent[i], -1, 1);
                player.addEventValue(bossevent[i], -1, 1);
            }
            player.addEventValue("每日BOSS重置", 1, 1);
            npc.broadcastPlayerNotice(7, "[副本系統]  玩家 ★★★ " + player.getName() + " ★★★ 重置" + bossname + "副本");
            npc.say("重置成功");
        } else {
            npc.say("你重置物品不足");
        }
		} else if (sel == 7) {
    player.runScript("賽連困難");
} else if (sel == 3) {
    if (player.getEventValue("賽蓮核心每日購買次數") == 0 && player.hasItem(4032053, 10000)) {
        if (player.gainVCore(10000031)) {
            player.addEventValue("賽蓮核心每日購買次數", 1, 1);
            player.loseItem(4032053, 10000);
            //player.loseItem(0, npc.getSlot(), 1);
        } else {
            player.showSystemMessage("V核心數量已經達到最大值!");
        }
    } else {
        npc.say("#fs21##e#r\t今日已經購買過了\r\n\t或者你元寶不足!");
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
