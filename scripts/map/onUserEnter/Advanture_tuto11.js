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
if (!player.isQuestCompleted(32201)) {
        player.completeQuest(32201, 0);
}
if (!player.isQuestCompleted(32202)) {
        player.completeQuest(32202, 0);
}
player.spawnTempNpc(10300, -240, 245);
player.setInGameCurNodeEventEnd(true);
player.setStandAloneMode(true);
player.setInGameDirectionMode(true, true, false, false);
player.showScreenDelayedEffect("maplemap/enter/10000", 0);
npc.setDelay(1000);
player.setNpcSpecialAction(10300, "summon", 0, false);
player.showNpcEffectPlay(10300, "Effect/Direction12.img/effect/tuto/BalloonMsg1/1", 900, 0, -120, true, 0, false, 0);
npc.setDelay(1800);
player.setNpcForceMove(10300, 1, 1000, 100);
npc.setDelay(npc.setCameraMove(false, 200, 200, 200));
npc.setDelay(npc.setCameraMove(true, 0, 0, 0));
npc.sayNextSNoEsc("剛剛那女生是誰啊?為什麼看到我就逃走?");
npc.sayNextSNoEsc("我也先到那邊看看吧.");
player.destroyTempNpc(10300);
player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);
