/*
 * NeroMS MapleStory server emulator written in Java
 * Copyright (C) 2017-2018  dgms
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* global npc, player */

npc.askMenuE("歡迎來到怪物公園！\r\n我是站在那邊的休菲凱曼的妹妹，我叫做#b#p" + npc.getNpcId() + "##k，\r\n請多多指教！");

/**
 * V核心大師
 * NpcId 1540945
 * @author dgms 
 */

/* if (player.isQuestCompleted(1465) || player.isGm()) {
    let response = npc.askMenu("你來這裡有什麼事嗎?#b\r\n#L0#我想強化V核心。#l\r\n#L1#領取每日#r核心寶石#b。#l\r\n#L2#增加#r神秘徽章#b裝備欄。#l" + (player.isGm() ? "\r\n#L3#設置#r核心碎片9999#b#l\r\n#L4#完成#r五轉#b#l" : ""));
    if (response == 0) {
        npc.openUI(1131);
    } else if (response == 1) {
        if (player.getPQLog("FREE_VCORE") <= 0) {
            if (player.canGainItem(2435902, 10)) {
                player.addPQLog("FREE_VCORE");
                player.gainItem(2435902, 10);
                npc.say("已經領取#r10#k個核心寶石。");
            } else {
                npc.say("背包消耗欄空間不足！請清理！");
            }
        } else {
            npc.say("你今天已經領取過核心寶石了。");
        }
    } else if (response == 2) {
        if (player.isQuestCompleted(34478)) {
            npc.say("你已經增加過#r神秘徽章#b裝備欄了！");
        } else {
            let anser = npc.askYesNo("增加#r神秘徽章#b裝備欄需要 #e25E#k金幣。確認是否要開啟");
            if (anser == 1) {
                if (player.hasMesos(2500000000)) {
                    player.loseMesos(2500000000);
                    player.completeQuest(34478,0);
                    npc.say("#r神秘徽章#b裝備欄已增加！");
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
} */
