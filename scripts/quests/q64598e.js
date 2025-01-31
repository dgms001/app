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

npc.sayNextENoEsc("#face0#怎麼樣？", 9400924);
npc.sayNextENoEsc("#b嗯……", true);
npc.sayNextENoEsc("#face1#米蘭達！這真是太帥了，這個完全表現出了木頭原本的味道呢？你的實力好像越來越出色了。", 9400920);
npc.sayNextENoEsc("#face1#呼。\r\n(似乎在看我。) ", 9400924);
npc.sayNextENoEsc("#b很……很帥氣！", true);
npc.sayNextENoEsc("#face0#以後如果有了新商品，你們再來看看吧。", 9400924);
npc.sayNextENoEsc("#b謝謝，那就下次見吧！", true);
npc.sayNextENoEsc("#face1##h0#，現在回家吧。", 9400920);
npc.completeQuest();
player.startNavigation(871000000, 0, "goHome", 0);
