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


npc.sayNextENoEsc("#face1#怎麼樣？是不是很舒服？", 9400921);
npc.sayNextENoEsc("#b好像是……", true);
npc.sayNextENoEsc("#face2#哈哈，既然躺下了，那就順便休息一下吧？我想起來可以給你個小禮物！請等一下。", 9400921);
if (player.gainItem(2672015, 1)) {
        player.updateQuestRecordEx(500767, "2", "1");
        player.updateWorldShareRecord(500767, player.getQuestRecordEx(500767));
        npc.completeQuest();
        player.startQuest(64594, 0);

        npc.sayNextENoEsc("#face1# [#i2672015:##t2672015#]\r\n啦啦~！這是為了紀念我們成為鄰居而送你的禮物。這是可以代替破舊的椅子，讓你舒舒服服地坐著的蓬松~沙發。", 9400921);
        player.setLayerOn(900, "0", 0, -80, 12, "Effect/DirectionWz2.img/effect/myHomeTuto/3", 4);
        npc.sayNextENoEsc("#face1#打開背包，雙擊#t2672015:#即可前往#b[家具保管箱]#k。", 9400921);
        npc.sayNextENoEsc("#face1#然後點擊我的小屋菜單的#b#i3801391##t3801391##k按鍵，查看沙發，點擊[放置]按鍵後就能放在任意位置。但是，不能和已經放置的床重疊放置。你要不要試試？", 9400921);
        player.setLayerOff(1000, "0");
        npc.sayNextENoEsc("#face2#如果#h0#能喜歡就好了！", 9400921);
} else {
        npc.sayNextENoEsc("#face2#你的背包消耗欄不夠放啦，先去整理下吧！", 9400921);
}
