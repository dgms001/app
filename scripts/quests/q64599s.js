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

npc.startQuest();
if (!player.gainItem(2672016, 1)) {
        player.gainParcel(2672016, 1, "背包不足，以郵件發送！");
}
npc.sayNextENoEsc("#face2#啦啦！我從艾丹那裡拿到了桌子！還是免費的！", 9400921);

npc.sayNextENoEsc("#face0#嗯……雖然有點小~問題，但不是不能用。", 9400921);

npc.sayNextENoEsc("#face1#我們也從米蘭達的跳蚤市場買來了鐘！", 9400920);
npc.sayNextENoEsc("#face1#正好！那就把桌子和時鐘都放置一下吧？", 9400921);
npc.sayNextENoEsc("#face1#對了，墻上的家具和地上的家具是能夠重疊的。這樣就能把家裡布置得更好了吧？", 9400921);
