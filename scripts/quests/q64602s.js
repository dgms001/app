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

if (player.gainItem(2672018, 1)) {
        npc.completeQuest();
        npc.sayNextENoEsc("#face0#[#i2672018:##t2672018#]\r\n這是搬家禮物。", 9400924);

        npc.sayNextENoEsc("#b哇！這是你親自做的嗎？真是太帥了，怎麼能養得這麼漂亮呢？連葉子都在閃閃發光呢！", true);
        npc.sayNextENoEsc("#face0#……這是我買來的。", 9400924);
        npc.sayNextENoEsc("#b啊……謝謝你，米蘭達，我會好好養的。", true);

        player.destroyTempNpc(9400924);
} else {
        npc.sayNextENoEsc("#face0#你的背包消耗欄不足啊，快清理下吧。", 9400924);
}
