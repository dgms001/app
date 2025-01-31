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

npc.sayNextENoEsc("#face1#桌子怎麼樣？是不是很堅固？", 9400923);
npc.sayNextENoEsc("#b是的，太謝謝你了。", true);
npc.sayNextENoEsc("#face0#嗯嗯，這是我特！別！給你做的，你當然要感謝我了。", 9400923);
npc.sayNextENoEsc("#face0#如果弄壞了，就拿來找我。我會給你特！別！售後服務的。", 9400923);
npc.sayNextENoEsc("#b那正好，現在這個似乎有點歪……", true);
npc.sayNextENoEsc("#face2#哪裡？哪裡？明明就很平啊！", 9400923);
npc.completeQuest();
player.destroyTempNpc(9400923);