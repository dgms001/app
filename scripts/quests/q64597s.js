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


npc.sayNextENoEsc("#face1##h0#！我想了一下，這裡應該要有個桌子才行。要是有一些能夠裝飾在墻上的裝飾品就更好了！ ", 9400921);
npc.sayNextENoEsc("#b那樣應該會很棒呢！在哪裡能找到桌子和裝飾品呢？", true);
player.teleportToPos(5, player.getId(), new java.awt.Point(18, 114));
npc.sayNextENoEsc("#face0#裝飾品在廣場上的米蘭達的跳蚤市場就能買到。", 9400921);
npc.sayNextENoEsc("#face0#家具得去其他村子的工坊買，但是現在沒多少時間了，就拜托一下艾丹吧。", 9400921);
npc.sayNextENoEsc("#face1#我去找艾丹，你和艾米一起去米蘭達的跳蚤市場買裝飾品吧？", 9400921);
npc.sayNextENoEsc("#b我知道了！", true);
npc.startQuest();



