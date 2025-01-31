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

npc.sayNextENoEsc("#face1#我還沒來得及自我介紹呢，我是這個村子的建筑家，我叫凱尼斯，很高興見到你！ ", 9400922);
npc.sayNextENoEsc("#b我也很高興見到你，請多多指教！", true);
npc.sayNextENoEsc("#face0#沒想到居然會有這麼有名的勇士來到我們村子，真讓人感到神奇又安心。", 9400922);
npc.sayNextENoEsc("#face0#我在定居這裡之前，也是楓之谷世界的冒險家。雖然已經是很久之前的事情了……", 9400922);
npc.sayNextENoEsc("#face0#以前的事情之後再說，你怎麼會搬到這裡來？這個房屋已經空了很久了，沒想到會有人搬來呢。", 9400922);
npc.sayNextENoEsc("#face3#哈哈，我們村子還是挺有名的吧？是吧？哈哈哈", 9400922);


npc.sayNextENoEsc("#b是啊，是的……", true);
npc.sayNextENoEsc("#face0#這個房屋看起來有點窄啊，你住得還習慣嗎？", 9400922);
npc.sayNextENoEsc("#face1#如果需要我的幫助，你可以隨時來找我。別看我這樣，這村子裡的房屋大部分都是我建的呢！ ", 9400922);

npc.sayNextENoEsc("#b真的嗎？", true);
npc.sayNextENoEsc("#face1#當然是真的了，呵呵", 9400922);
npc.sayNextENoEsc("#b謝謝！", true);
npc.sayNextENoEsc("#face0#那就下次再見吧。", 9400922);
npc.completeQuest();
player.destroyTempNpc(9400922);