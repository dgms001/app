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

if (!"o".equals(player.getKeyValue("MyHome_Bed"))) {
        npc.sayNextENoEsc("#face1#你還沒能搬運家具啊。沒關系，一開始肯定不容易。我再跟你說明一遍吧。", 9400921);
        //player.setLayerOn(900, "0", 0, -80, 12, "Effect/DirectionWz2.img/effect/myHomeTuto/2", 4);
        npc.sayNextENoEsc("#face1#首先點擊我的小屋菜單的#i3801392##t3801392#，即可進入能夠搬動家具的放置模式。", 9400921);
        npc.sayNextENoEsc("#face1#然後點擊床，再點擊一次你想要放的地方就可以了。", 9400921);
        player.setLayerOff(1000, "0");
        npc.sayNextENoEsc("#face2#你要不要再試一次？", 9400921);
} else {
        npc.sayNextENoEsc("#face0#果然！只是挪動了下位置，房間看起來就寬敞多了！", 9400921);
        npc.sayNextENoEsc("#face2#靠近床後點擊就能躺下了。\r\n你就當我不在，舒舒服服地躺一下吧！", 9400921);
        npc.completeQuest();
        player.startQuest(64593, 0);
}
