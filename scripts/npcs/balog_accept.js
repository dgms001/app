/*
let minPlayers = 1;
let maxPlayers = 6;
let minLevel = [90];
let maxLevel = [300];
let maxenter = [2];
let BossName = ["巨大蝙蝠魔"];
let PQLog = ["巨大蝙蝠魔"];
let event = ["BossBalrog_NORMAL"];
let onlyOne = true;
let startmap = 105100100;


if (map.getId() == startmap) {
        let text = "";
//if (player.hasItem(4031179,1)) {
        for (var i = 0; i < BossName.length; i++) {
            text += "\r\n#b#L" + i + "#"+BossName[i]+"#r#l";
        }
        let sel = npc.askMenu("#e#r請選擇進入模式：#n\r\n" + "#b完成記錄將在晚12點初始化"+ text);
        	
                 if (party == null || player.getId() != party.getLeader()) {
                npc.sayNextE("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.並且等級在" + minLevel[sel] + "~" + maxLevel[sel] + "范圍,\r\n那麼請讓你的組隊長和我對話吧!", true);
        } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
                npc.sayNextE("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.!", true);
        } else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
                npc.sayNextE("你隊員的等級要在" + minLevel[sel] + "~" + maxLevel[sel] + "范圍!請確認!", true);
        } /*else if (party.getMembersCount(map.getId(), 1, 300) < party.getMembersCount()) {
                npc.sayNextE("好像有隊員在其他地方，請把隊員都召集到這裡！", true);
        } else if (!party.isAllMembersAllowedPQ(PQLog[sel], maxenter[sel])) {
                npc.sayNextE("你隊員#r#e" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]) + "#n#k次數已經達到上限了。", true);
        } else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
                npc.sayNextE("已經有隊伍在進行了,請更換其他頻道嘗試。", true);
        }
//} else {
 //       npc.sayNext("沒有#z4031179#是無法進入時間塔的本源！");
//}

} 

       
        	
        	
        	
                