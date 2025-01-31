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

npc.sayNextENoEsc("#b那個……你好！", true);
npc.sayNextENoEsc("#face0#你好！米蘭達", 9400920);
npc.sayNextENoEsc("#face0#…", 9400924);
npc.sayNextENoEsc("#b現在跳蚤市場還沒開嗎？", true);
npc.sayNextENoEsc("#face0#正如你所見，我正在思考新的商品。", 9400924);
npc.sayNextENoEsc("#face0#嗯~~這下可麻煩了，為了慶祝#h0#搬來，我們正打算辦搬家聚會呢，可是墻上實在太空了呢！", 9400920);

npc.sayNextENoEsc("#face1#如果能將米蘭達的特別~作品裝飾在墻上，肯定會很棒的，所以我們才來到了這裡呢！", 9400920);
npc.sayNextENoEsc("#face1#…", 9400924);
npc.completeQuest();
player.startQuest(64598, 0);
player.updateQuestRecordEx(1068, "count", "60");
player.updateQuestRecordEx(1069, "max", "60");
player.updateQuestRecordEx(1068, "type", "2");
if (!player.gainItem(2671002, 1)) {
        player.gainParcel(2671002, 1, "背包不足，以郵件發送！");
}

npc.sayNextENoEsc("#face0#好吧，不過現在沒多少商品可供挑選。直接送你個木鐘好了！", 9400924);

