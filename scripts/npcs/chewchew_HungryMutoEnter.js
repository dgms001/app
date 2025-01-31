/*
 *  功能：[啾啾岛]饥饿穆托副本入场
 */
const logName = "HungryMuto"
const dayLimit = 1
const minPlayers = 1
const maxPlayers = 6

export default function () {
    if (player.getMapId() == 450002024) {
        // 退场地图
        let text = "#b#e<饥饿的穆托>#n#k\r\n #b"
        if (player.getIntQuestRecordEx(34222, "clear")) {
            text += "#L0# 领取<饥饿的穆托>奖励。#l\r\n#b#L2# 不领取奖励直接离开。#l"
        } else {
            text += "#b#L1# 离开这里。#l"
        }
        let sel = npc.askMenu(text)
        if (sel == 0) {
            if (player.getPQLog(logName) >= dayLimit) {
                npc.say("今日奖励次数已用尽")
                return
            }
            player.updateQuestRecordEx(34222, "clear", "0")
            player.addPQLog(logName)
            player.gainItem(1712002, 5)
            npc.say("感谢您的帮助！请收下这些奖励！\r\n#b#e通关评价： #n#k#r#eS#n#k級\r\n#i1712002##b#e#t1712002:##n#k #e5个#n\r\n#b#e")
        }
        player.changeMap(450002023)
    } else {
        while (true) {
            let sel = npc.askMenu("#e#b<饥饿的穆托>#k#n\r\n你能帮助#b穆托#k，击退#r古拉#k吗？\r\n#r*游戏时间10分钟，无法中途退出。#k\r\n#b#L0# <饥饿的穆托>入场。#l\r\n#L1# 听取说明。#l\r\n#L2# 确认今天剩余的挑战次数。#l#k\r\n\r\n#e#k*完成1次后，可以立即完成。\r\n#k*今日最高奖励记录。\r\n#b#i1712002:##z1712002:#：0个#n")
            if (sel == 0) {
                if (party == null || player.getId() != party.getLeader()) {
                    npc.say("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍，并且等级在200级以上。\r\n那么请让你的组队长和我对话吧!");
                } else if (party.numberOfMembersInChannel() < minPlayers || party.numberOfMembersInChannel() > maxPlayers) {
                    npc.say("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍");
                } else if (party.getMembersCount(map.getId(), 200, 300) < minPlayers) {
                    npc.say("你队员的等级要在" + 200 + "~" + 300 + "范围!请确认!");
                } else if (party.getMembersCount(map.getId(), 1, 300) < party.getMembersCount()) {
                    npc.say("好像有队员在其他地方，请把队员都召集到这里！", true);
                } else if (!player.isGm() && !party.isAllMembersAllowedPQ(logName, dayLimit)) {
                    npc.say("你队员#r#e" + party.getNotAllowedMember(logName, dayLimit) + "#n#k次数已经达到上限了。");
                } else if (npc.makeEvent("hungry_muto_hard", false, party) == null) {
                    npc.say("未知原因，无法入场。")
                }
                return;
            } else if (sel == 1) {
                npc.say("懒得写了。")
            } else if (sel == 2) {
                npc.say(`今日剩余入场次数：#r${dayLimit - player.getPQLog(logName)}#k次`)
            } else {
                return;
            }
        }
    }
}
