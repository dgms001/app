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



player.setInGameDirectionMode(true, false, true, false);
player.setStandAloneMode(true);
player.setInGameCurNodeEventEnd(true);
player.showBlindEffect(true);
npc.setDelay(100);

player.showBlindEffect(false);
npc.setDelay(1);

player.showBlindEffect(true);
player.setForcedInput(0);
player.setInGameCurNodeEventEnd(true);
player.scriptProgressMessage("某個下雨天");
player.setForcedInput(2);
npc.setDelay(2000);
player.showBlindEffect(false);
npc.setDelay(200);
player.showBlindEffect(true);
player.scriptProgressMessage("飛花園深處");
player.setInGameCurNodeEventEnd(true);
npc.setDelay(6000);
player.showBlindEffect(false);
player.setForcedInput(0);
player.setInGameDirectionMode(false, false, false, false);
