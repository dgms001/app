/*
 * Boss: BlackMage
 * 入场
 */


let minPlayers = 1
let maxPlayers = 6
let minLevel = [255]
let maxLevel = [300]
let maxenter = [1]
let BossName = ["黑魔法師[困難]"]
let PQLog = ["黑魔法師[困難]"]
let event = ["boss_blackmage_extreme"]
let practiceMode = [false]
let onlyOne = false
let startMap = 450012500

if (player.getChannel() <= 5) {
    npc.askMenuA("\r\n\r\n\r\n\r\n\t\t\t\t\t#fs21##e#r6分流-10分流可進入困難模式");
} else {
    var text = "";
    text = "\t\t\t#v3994016##v3994000##v3994006##v3994006##v3994010#  #v3994025##v3994000##v3994012##v3994001#\r\n";

    text += "#e#r請選擇進入模式：#b完成記錄將在晚0點初始化\r\n\r\n";
    for (var i = 0; i < PQLog.length; i++) {
        text += "#b\t\t\t\t  #L" + i + "##b" + PQLog[i] + "[#r" + player.getPQLog(PQLog[i]) + "/#r" + maxenter[i] + "#b]#l\r\n\r\n";
    }
    text += "\t\t\t\t  #L6#使用#v2633609#重置BOSS#l";
	    let sel = npc.askMenuA("" + text, true);
    if (sel == 6) {
        var bossevent = Array("boss_blackmage_extreme");
        if (player.hasItem(2633609, 1)) {
            for (var i = 0; i < bossevent.length; i++) {
                player.loseItem(2633609, 1)
                player.addPQLog(PQLog[i], -1, 1);
                player.addEventValue(PQLog[i], -1, 1);
            }
            player.addEventValue("每日BOSS重置", 1, 1);
            npc.broadcastPlayerNotice(7, "[副本系統]  玩家 ★★★ " + player.getName() + " ★★★ 重置" + BossName + "副本");
            npc.say("重置成功");
        } else {
            npc.say("你重置物品不足");
        }
    //let selection = npc.askMenu(txt);
    let sel = npc.askMenuN(text, 0, 130)
    } else if (party == null || player.getId() !== party.getLeader()) {
        npc.sayN("\r\n\r\n\r\n\r\n你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.並且等級在" + minLevel[sel] + "~" + maxLevel[sel] + "範圍,\r\n那麼請讓你的組隊長和我對話吧!", 0, 130)
    } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
        npc.sayN("\r\n\r\n\r\n\r\n你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.!", 0, 130)
    } else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < party.getMembersCount()) {
        npc.sayN("\r\n\r\n\r\n\r\n你隊員的等級要在" + minLevel[sel] + "~" + maxLevel[sel] + "範圍!請確認!", 0, 130)
    } else if (party.getMembersCount(map.getId(), 1, 300) < party.getMembersCount()) {
        npc.sayN("\r\n\r\n\r\n\r\n好像有隊員在其他地方，請把隊員都召集到這裏！", 0, 130)
    } else if (!player.isGm() && !party.isAllMembersAllowedPQ(PQLog[sel], maxenter[sel])) {
        npc.sayN("\r\n\r\n\r\n\r\n你隊員#r#e" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]).getName() + "#n#k次數已經達到上限了。", 0, 130)
    } else if (!practiceMode[sel] || npc.askYesNo("你已選擇進入練習模式，練習模式下#b#e無法獲得經驗值和獎勵#n#k，不受首領怪物種類影響，#b#e一天只能使用" + maxenter[sel] + "次。#n#k\r\n\r\n練習模式下死亡後復活時，即使使用增益冷藏器也不會消耗。", 9010000, true)) {
        if (npc.makeEvent(event[sel], onlyOne, [party, practiceMode[sel]]) == null) {
            npc.sayN("發生未知錯誤，無法創建副本。", 0, 130)
        }
    }
	}