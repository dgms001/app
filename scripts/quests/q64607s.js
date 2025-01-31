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

if (map.getId() > 871100000 && map.getId() < 871100010) {
        npc.sayNextENoEsc("#b這真的是我的房子……", true);
        npc.sayNextENoEsc("#b今後我就能隨心所欲地裝飾這個房屋了嗎？", true);
        npc.sayNextENoEsc("#b太棒了！真是太帥了！", true);
        npc.sayNextENoEsc("#b但是……應該從哪裡開始呢？……", true);
        npc.sayNextENoEsc("#b之前都是因為有艾爾賓和艾米的幫助，我才能輕松地享受裝修的樂趣……", true);
        npc.sayNextENoEsc("#b他們……以後還會幫助我嗎？", true);
        npc.sayNextENoEsc("#b請艾爾賓和艾米來當我的管家吧！", true);
        npc.completeQuest();
} else {
        npc.sayNextENoEsc("#b似乎已經完成建造了，回家看看吧。\r\n(※該任務只能在我的小屋內進行。)", true);
}



