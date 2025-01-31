let minPlayers = 4;
let maxPlayers = 6;
let minLevel = [140];
let maxLevel = [275];
let maxenter = [2];
let BossName = [];//"森林副本"
let event = ["JILI_SENLIN"];
let onlyOne = true;
let startmap = 100030301;

if (map.getId() == startmap) {
    let text = "";
    for (let i = 0; i < BossName.length; i++) {
        text += "\r\n#b#L" + i + "#申請進入#r<Boss：" + BossName[i] + ">#b#l#k";
    }
    let sel = npc.askMenu("#e<森林副本>#n\r\n暫未開啟 \r\n" + text, 2500001);
    // let sel = npc.askMenu("#e<森林副本>#n\r\n偉大的勇士啊。做好迎戰黑魔法師的邪惡軍團長的準備了嗎? \r\n" + text, 2500001);
    if (party == null || player.getId() != party.getLeader()) {
        npc.sayNext("你需要有一箇#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.並且等級在" + minLevel[sel] + "~" + maxLevel[sel] + "範圍,\r\n那麼請讓你的組隊長和我對話吧!", 2500001);
    } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
        npc.sayNext("你需要有一箇#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.!", 2500001);
    } else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
        npc.sayNext("你隊員的等級要在" + minLevel[sel] + "~" + maxLevel[sel] + "範圍!請確認!", 2500001);
    } else if (party.getMembersCount(map.getId(), 1, 300) < party.getMembersCount()) {
        npc.sayNext("好像有隊員在其他地方，請把隊員都召集到這裡！", 2500001);
    } else if (!party.isAllMembersAllowedPQ(event[sel], maxenter[sel])) {
        npc.sayNext("你隊員#r#e" + party.getNotAllowedMember(event[sel], maxenter[sel]) + "#n#k次數已經達到上限了。", 2500001);
    } else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
        npc.sayNext("已經有隊伍在進行了,請更換其他頻道嘗試。", 2500001);
    }
} else {
    let ret = npc.askYesNo("#e<森林副本>#n\r\n\r\n你想要現在就離開這裡嗎？", 2500001);
    if (ret == 1) {
        player.changeMap(302050400);
    }
}
