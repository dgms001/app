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

npc.sayNextENoEsc("#b艾爾賓！艾米！你們聽到凱尼斯的話了嗎？", true);
npc.sayNextENoEsc("#b難道……他能幫我建個更大的房屋嗎？", true);
npc.sayNextENoEsc("#face3##h0#……你的眼睛怎麼突然開始放光了……？", 9400920);
npc.sayNextENoEsc("#face1#雖然我沒聽到詳細的內容，不過如果你想要更大的房屋，那在這個村子裡能夠幫你的人就只有凱尼斯了。", 9400921);
npc.sayNextENoEsc("#face1#凱尼斯的家一直對居民們敞開，你要是好奇，就去找他吧？", 9400920);
npc.sayNextENoEsc("#b你能和我一起去嗎？", true);


npc.sayNextENoEsc("#face2#當然了！", 9400921);
npc.sayNextENoEsc("#face2#當然了~只要你給我小費，呵呵", 9400920);
npc.sayNextENoEsc("#face1#我開玩笑的，#h0#，快走吧？", 9400920);
npc.startQuest();
player.startNavigation(871200000, 0, "out00", 0);