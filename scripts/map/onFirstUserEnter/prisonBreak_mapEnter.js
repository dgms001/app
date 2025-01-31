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

let event = npc.getEvent("party_prison_break");
if (event != null) {
        switch (map.getId()) {
                case 921160100:
                        map.blowWeather(5120053, "噓！必須悄悄地避開障礙物，從塔裡出去。");
                        break;
                case 921160200:
                        map.blowWeather(5120053, "必須消滅所有警衛。否則他們會叫來其他警衛。");
                        break;
                case 921160300:
                        map.blowWeather(5120053, "為了防止有人接近監獄，他們建造了迷宮。請尋找通往空中監獄的門！");
                        break;
                case 921160400:
                        map.blowWeather(5120053, "必須消滅所有警衛。否則他們會叫來其他警衛。");
                        break;
                case 921160500:
                        map.blowWeather(5120053, "這是最後的障礙物。請通過障礙物，到空中監獄來。");
                        break;
                case 921160600:
                        map.blowWeather(5120053, "請消滅警衛，找到監獄鑰匙，打開監獄門。");
                        break;
                case 921160700:
                        map.blowWeather(5120053, "請消滅看守，讓我們重獲自由！！！！");
                        if (event.getVariable("npc") == null) {
                                event.setVariable("npc", map.spawnTempNpc(9020006, -1888, -181));
                                map.spawnMob(9300454, -555, -181);
                        }
                        break;
        }
}