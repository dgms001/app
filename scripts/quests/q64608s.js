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

/**
 * 
 * @author dgms
 */

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

/**
 * 
 * @author dgms
 */

npc.sayNextENoEsc("#b阿爾文！", true);
npc.sayNextENoEsc("#face2##h0#~你是來表示感謝的吧？呼，我能幫助你我很開心。", 9400921);
npc.sayNextENoEsc("#b沒錯，謝謝你讓我來到了這裡。", true);
let sel = npc.askMenuENoEsc("#b所以說……我覺得如果以後裝修房屋的事情也能和阿爾文一起完成，那就太好了。\r\n#b#L0# 請你成為我的管理人。#l\r\n#L1#今後我們一起好好相處吧。#l\r\n#r(※只能雇傭1名管理人，雇傭後可以通過管理人菜單進行變更。)#l", true);
if (sel == 0) {
        npc.sayNextENoEsc("#face1#管理人？管理人？嗯……聽起來倒是很有趣，你會給我報酬的吧？ ", 9400921);
        npc.sayNextENoEsc("#face2#這樣啊，好的！那我就答應你吧，#h0#。", 9400921);
        npc.sayNextENoEsc("#face1#對了，這是給#h0#的禮物！因為你說想要用高級的家裝飾，我就準備了這個。它還有很厲害的功能，你可別被嚇到了哦！ ", 9400921);
        if (!player.gainItem(2671001, 1)) {
                player.gainParcel(2671001, 1, "背包空間不足，以郵件發送");
        }
        player.completeQuest(64609, 0);
        player.updateQuestRecordEx(64610, "hide", "1");
        player.updateQuestRecordEx(500773, "askR", "1");
        player.updateQuestRecordEx(500773, "manager", "1");
        player.updateQuestRecordEx(500773, "managerHide", "0");
        player.updateQuestRecordEx(500773, "bonusTalk", "0");
/*
        player.updateQuestRecordEx(500773, "s1", "10");
        player.updateQuestRecordEx(500773, "s2", "15");
        player.updateQuestRecordEx(500773, "s3", "10");
        player.updateQuestRecordEx(500773, "s4", "9");
        player.updateQuestRecordEx(500773, "s5", "10");
        
        player.updateQuestRecordEx(500773, "a1", "15");
        player.updateQuestRecordEx(500773, "a2", "0");
        player.updateQuestRecordEx(500773, "a3", "13");
        player.updateQuestRecordEx(500773, "a4", "11");
        player.updateQuestRecordEx(500773, "a5", "10");

        player.updateQuestRecordEx(500773, "b1", "10");
        player.updateQuestRecordEx(500773, "b2", "15");
        player.updateQuestRecordEx(500773, "b3", "10");
        player.updateQuestRecordEx(500773, "b4", "9");
        player.updateQuestRecordEx(500773, "b5", "10");
        player.updateWorldShareRecord(500773, player.getQuestRecordEx(500773));*/
        npc.completeQuest();
} else {
        npc.sayNextENoEsc("#face2##h0#嗯！肯定會好好相處的啦。", 9400921);
}

