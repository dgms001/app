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
player.setInGameCurNodeEventEnd(true);
player.setInGameDirectionMode(true, true, false, false);
player.setStandAloneMode(true);
player.showReservedEffect("Effect/Direction3.img/goLith/Scene" + player.getGender());
npc.setDelay(4500);
player.setInGameDirectionMode(false, false, false, false);
player.setStandAloneMode(false);
player.startQuest(17901, 0);