/**
 *    副本：金幣副本 
 **/
let npcModel = 1106000;
let minPlayers = 1;
let maxPlayers = 6;
let minLevel = [120];
let maxLevel = [275];
let maxenter = [10];
let BossName = ["金幣副本"];
let PQLog = ["pqmesos"];
let event = ["bzmesos"];
let onlyOne = true;
let startmap = 910000000;
if (map.getId() == startmap) {
    let text = "";
    for (let i = 0; i < BossName.length; i++) {
        text += "\r\n#b#L" + i + "#申請進入移動到#r<搬磚副本：" + BossName[i] + " > #b剩餘次數<#r" + (maxenter[0] - player.getPQLog(PQLog[0])) + "#b>#b#l#k";
    }
    let sel = npc.askMenu("#e<搬磚副本:金幣副本>#n\r\n\r\n#b#h0# \n\#k歡迎來到搬磚中心，展現搬磚實力的時候到啦!\r\n每次成功通關可獲得:\r\n#r點券x1000 抵用x1000\r\n金幣*4000w\r\n#v4000000##v4000016#x50.#b\r\n" + text, npcModel);
    if (party == null || player.getId() != party.getLeader()) {
        npc.say("你需要有一箇#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.並且等級在" + minLevel[sel] + "~" + maxLevel[sel] + "範圍,\r\n那麼請讓你的組隊長和我對話吧!", npcModel);
    } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
        npc.say("你需要有一箇#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.!", npcModel);
    } else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
        npc.say("你隊員的等級要在" + minLevel[sel] + "~" + maxLevel[sel] + "範圍!請確認!", npcModel);
    } else if (!party.isAllMembersAllowedPQ(PQLog[sel], maxenter[sel])) {
        npc.say("你隊員#r#e" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]) + "#n#k次數已經達到上限了。", npcModel);
    } else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
        npc.say("已經有隊伍在進行了,請更換其他頻道嘗試。", npcModel);
    }
} else {
    let ret = npc.askYesNo("#e<組隊副本:金幣副本>#n\r\n\r\n你想要現在就離開這裡嗎？", npcModel);
    if (ret == 1) {
        player.changeMap(startmap);
    }
}