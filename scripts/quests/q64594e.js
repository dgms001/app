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

if (!"o".equals(player.getKeyValue("MyHome_Sofa"))) {
        npc.sayNextENoEsc("#face1#你還沒能把沙發放好啊。沒關系，一開始肯定不容易。我再跟你說明一遍吧。", 9400921);
        player.setLayerOn(900, "0", 0, -80, 12, "Effect/DirectionWz2.img/effect/myHomeTuto/3", 4);
        npc.sayNextENoEsc("#face1#打開背包，雙擊#t2672015:#即可前往#b[家具保管箱]#k。", 9400921);
        npc.sayNextENoEsc("#face1#然後點擊我的小屋菜單的#b#i3801391##t3801391##k按鍵，查看沙發，點擊[放置]按鍵後就能放在任意位置。但是，不能和已經放置的床重疊放置。", 9400921);
        player.setLayerOff(1000, "0");
        npc.sayNextENoEsc("#face2#你要不要再試一次？", 9400921);
} else {

        npc.sayNextENoEsc("#face1#呵呵，果然……我就說我的眼光不會錯的嘛？", 9400921);
        npc.sayNextENoEsc("#face2#放上和簡單的灰調原木床相配的布藝沙發，就能裝修出將簡潔之美發揮到極致的風格！怎麼樣？家裡是不是變得更加優雅了？", 9400921);
        npc.sayNextENoEsc("#b比剛才看起來更像是家了呢，謝謝你，艾爾賓！", true);
        npc.sayNextENoEsc("#face0#那麼……你以後就住在這裡了嗎？", 9400921);
        npc.sayNextENoEsc("#b也許……吧？", true);
        npc.sayNextENoEsc("#face1#好極了！旁邊一直沒有鄰居，我還覺得有點寂寞呢。能有像#h0#這樣帥氣的人搬來住真是太好了。", 9400921);
        npc.completeQuest();

        let sel = npc.askMenuENoEsc("#face2#如果你有時間，要不要和我一起去廣場？我可以給你介紹一下其他鄰居！\r\n#L0##b好的。#l\r\n#L1#今天很忙。#l", 9400921);
        if (sel == 1) {
                npc.sayNextENoEsc("#face2#好極了，那你就跟我來吧！", 9400921);

        } else {
                npc.sayNextENoEsc("#face0#就一會兒，認識下新伙伴，走啦！我帶你過去！", 9400921);
        }
        player.startNavigation(871200000, 0, "out00", 0);
        player.startQuest(64595, 0);

}

