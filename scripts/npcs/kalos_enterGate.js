exports = {}

let minPlayers = 1;
let maxPlayers = 6;
let minLevel = [270];
let maxLevel = [300];
let maxenter = [1];
let PQLog = ["Kalos_Chaos"];
let event = ["boss_kalos_chaos"];
let onlyOne = false;


let sel = npc.askMenuN("要前往和監視者卡洛斯進行戰鬥嗎？\r\n\r\n#L0#前往和監視者卡洛斯進行戰鬥而。#r(等級270以上)#k#l\r\n\r\n#L2#不移動。#l", 0, 130)
if (sel == 0) {
    if (party == null || player.getId() != party.getLeader()) {
        npc.sayE("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.并且等级在" + minLevel[sel] + "~" + maxLevel[sel] + "范围,\r\n那么请让你的组队长和我对话吧!", true);
    } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
        npc.sayE("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.!", true);
    } else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
        npc.sayE("你队员的等级要在" + minLevel[sel] + "~" + maxLevel[sel] + "范围!请确认!", true);
    } else if (party.getMembersCount(map.getId(), 1, 300) < party.getMembersCount()) {
        npc.sayE("好像有队员在其他地方，请把队员都召集到这里！", true);
    } else if (!player.isGm() && !party.isAllMembersAllowedPQ(PQLog[sel], maxenter[sel])) {
        npc.sayE("你队员#r#e" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]) + "#n#k次数已经达到上限了。", true);
    } else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
        npc.sayE("已经有队伍在进行了,请更换其他频道尝试。", true);
    }
}