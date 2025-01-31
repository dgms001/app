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

if (!"o".equals(player.getKeyValue("MyHome_Clock")) && !"o".equals(player.getKeyValue("MyHome_Desk"))) {

        npc.sayNextENoEsc("#face0#你忘記了放置的方法嗎？", 9400921);
        npc.sayNextENoEsc("#face0#首先雙擊背包裡的桌子和時鐘，前往[家具保管箱]。", 9400921);
        npc.sayNextENoEsc("#face0#然後點擊我的小屋菜單的#i3801391#按鍵，打開[家具保管箱]，雙擊想要放置的家具。", 9400921);
        npc.sayNextENoEsc("#face1#點擊想要放置家具的位置後，再點擊[完成放置]按鍵即可！你要再試一次嗎？", 9400921);
} else if (!"o".equals(player.getKeyValue("MyHome_Clock"))) {
        npc.sayNextENoEsc("#face2#時鐘的位置真的很好，桌子也可以用相同的方式放置。", 9400921);
        npc.sayNextENoEsc("#face1#對了，時鐘和墻上的家具都能和地面上的家具重疊設置哦，這樣就能把家裡布置得更好了吧？", 9400921);
} else if (!"o".equals(player.getKeyValue("MyHome_Desk"))) {
        npc.sayNextENoEsc("#face2#桌子的位置真的很好，時鐘也可以用相同的方式放置。", 9400921);
        npc.sayNextENoEsc("#face1#對了，時鐘和墻上的家具都能和地面上的家具重疊設置哦，這樣就能把家裡布置得更好了吧？", 9400921);
} else {
        npc.sayNextENoEsc("#face2#你已經放置好了嗎？", 9400921);
        npc.sayNextENoEsc("#face1#哇！終于像個人住的房屋了！ 啊，這是當然了，原先也是一樣的。", 9400921);
        npc.sayNextENoEsc("#b不不，現在終于像個家了！這都多虧了艾爾賓和艾米呢！ 謝謝。", true);
        npc.sayNextENoEsc("#face0#難道！你的謝謝就只是嘴上說說？應該還有更好的方式吧~~比如說金幣？", 9400920);
        npc.sayNextENoEsc("#b…", true);
        npc.sayNextENoEsc("#face3#…", 9400921);
        npc.sayNextENoEsc("#face2#我開玩笑的，可能有2%是出于真心吧。", 9400920);
        npc.sayNextENoEsc("#face0#現在去邀請居民們吧？", 9400921);
        npc.completeQuest();
        player.updateQuestRecordEx(500767, "4", "1");
        player.updateWorldShareRecord(500767, player.getQuestRecordEx(500767));
        player.startQuest(64600, 0);
        let sel = npc.askMenuENoEsc("#face1#如果可以，#h0#親自去廣場邀請居民們吧，怎麼樣？\r\n#b#L0#好的！#l\r\n#L1#現在還有點尷尬啊。#l", 9400921);
        switch (sel) {
                case 0:
                        npc.sayNextENoEsc("#face1#好的，那就快去吧！我和艾米會準備一些簡單的食物。", 9400921);
                        break;
                case 1:
                        npc.sayNextENoEsc("#face1#去認識認識就不尷尬啦！那你就先去，我和艾米會準備一些簡單的食物。", 9400921);
                        break;
        }
        player.startNavigation(871200000, 0, "out00", 0);
}
