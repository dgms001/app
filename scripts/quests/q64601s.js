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

npc.sayNextENoEsc("#face3#啊！看來已經有人到了！", 9400920);


player.setInGameCurNodeEventEnd(true);
player.setInGameDirectionMode(true, false, false, false);


player.setLayerBlind(true, 255, 0, 0, 0, 500, 0);
npc.setDelay(500);
npc.startQuest();

player.spawnTempNpc(9400929, -260, 100, 0);//7A 4C 0F 00
player.setNpcSpecialAction(9400929, "summon", 1, false);

player.spawnTempNpc(9400928, -210, 100, 0);//7B 4C 0F 00
player.setNpcSpecialAction(9400928, "summon", 0, false);

player.spawnTempNpc(9400923, -160, 100, 0);//7C 4C 0F 00
player.setNpcSpecialAction(9400923, "summon", 0, false);


player.teleportToPos(3, player.getId(), new java.awt.Point(-110, 100));

player.spawnTempNpc(9400922, -60, 100, 1);//7D 4C 0F 00
player.setNpcSpecialAction(9400922, "summon", 0, false);

player.spawnTempNpc(9400924, -10, 100, 1);//7E 4C 0F 00
player.setNpcSpecialAction(9400924, "summon", 0, false);

player.spawnTempNpc(9400935, 40, 100, 1);//7F 4C 0F 00
player.setNpcSpecialAction(9400935, "summon", 0, false);

player.spawnTempNpc(9400936, 90, 100, 1);//80 4C 0F 00
player.setNpcSpecialAction(9400936, "summon", 0, false);

player.setLayerBlind(true, 255, 0, 0, 0, 0, 0);
npc.setDelay(1200);

player.setLayerBlind(true, 0, 0, 0, 0, 1000, 0);
npc.setDelay(1400);


npc.setDelay(300);
/*
player.showSpeechBalloon(true, 0, 0, "#fs15##b謝謝大家能來。", 2000, 0, 0);
npc.setDelay(2000);

player.showSpeechBalloon(true, 0, 0, "這間房子已經空了很久了，能有新人進來真是太好了。", 2000, 0, 0);
npc.setDelay(2000);

player.showSpeechBalloon(true, 0, 0, "是吧？村子裡似乎也煥發了活力呢！", 2000, 9400929, 5761);
npc.setDelay(2000);

player.showSpeechBalloon(true, 0, 0, "有點小啊。", 2000, 9400933, 5761);
npc.setDelay(2000);

player.showSpeechBalloon(true, 0, 0, "啊？這是我做的桌子！真是不錯啊！哈哈?", 2000, 9400932, 5761);
npc.setDelay(2000);

player.showSpeechBalloon(true, 0, 0, "勇士大人，我會經常來玩的！", 2000, 9400935, 5761);
npc.setDelay(2000);

player.showSpeechBalloon(true, 0, 0, "特魯迪~~你不和姐姐玩，只和勇士大人玩嗎？?", 2000, 9400928, 5761);
npc.setDelay(2000);
*/

player.setLayerBlind(true, 255, 0, 0, 0, 200, 0);
npc.setDelay(500);

player.destroyTempNpc(9400929);
player.destroyTempNpc(9400928);
player.destroyTempNpc(9400936);
npc.completeQuest();
player.setLayerBlind(true, 255, 0, 0, 0, 0, 0);
npc.setDelay(1200);

player.setLayerBlind(false, 0, 0, 0, 0, 1000, 0);
npc.setDelay(1400);
player.setInGameDirectionMode(false, true, false, false);
