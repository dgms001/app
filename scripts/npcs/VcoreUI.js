/* global npc, player */

/**
 * V核心大師
 * NpcId 1540945
 *
 */

if (player.isQuestCompleted(1465) || player.isGm()) {
    let response = npc.askMenu("你來這裡有什麼事嗎?#b\r\n#L0#我想強化V核心。#l\r\n#L1#領取每日#r核心寶石#b。#l\r\n#L2#增加#r神祕徽章#b裝備欄。#l" + (player.isGm() ? "\r\n#L3#設定#r核心碎片9999#b#l\r\n#L4#完成#r五轉#b#l" : ""));
    if (response == 0) {
        player.openUI(1131);
    } else if (response == 1) {
        if (player.getPQLog("FREE_VCORE") <= 0) {
            if (player.canGainItem(2435902, 10)) {
                player.addPQLog("FREE_VCORE");
                player.gainItem(2435902, 10);
                npc.say("已經領取#r10#k個核心寶石。");
            } else {
                npc.say("揹包消耗欄空間不足！請清理！");
            }
        } else {
            npc.say("你今天已經領取過核心寶石了。");
        }
    } else if (response == 2) {
        if (player.isQuestCompleted(34478)) {
            npc.say("你已經增加過#r神祕徽章#b裝備欄了！");
        } else {
            let anser = npc.askYesNo("增加#r神祕徽章#b裝備欄需要 #e25E#k金幣。確認是否要開啟");
            if (anser == 1) {
                if (player.hasMesos(2500000000)) {
                    player.loseMesos(2500000000);
                    player.completeQuest(34478, 0);
                    npc.say("#r神祕徽章#b裝備欄已增加！");
                } else {
                    npc.say("您的金幣不足！");
                }
            }
        }
    } else if (response == 3) {
        player.updateQuestRecordEx(1477, "count", "9999");
    } else if (response == 4) {
        player.completeQuest(1465, 0);
    }
} else {
    npc.say("我還無法為你提供服務！");
}