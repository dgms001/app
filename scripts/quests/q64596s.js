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
player.closeUI(0);
player.closeUI(1);
player.closeUI(2);
player.closeUI(3);
player.closeUI(6);

player.closeUI(0x28);
player.closeUI(0xCA);
player.closeUI(0xDC);



player.setInGameCurNodeEventEnd(true);
player.setInGameDirectionMode(true, false, false, true);

npc.setCameraScaleAbsMove(0, 0, 1000, 2000, -80, 120);
player.teleportToPos(3, player.getId(), new java.awt.Point(0, 100));

player.setLayerBlind(true, 255, 0, 0, 0, 0, 0);
npc.setDelay(1200);
player.setLayerBlind(false, 0, 0, 0, 0, 1000, 0);
npc.setDelay(1400);
player.soundEffect("Sound/PL_Sound.img/myHome/knock1");
npc.setDelay(1000);

npc.sayNextENoEsc("#face0#你沒聽到什麼聲音嗎？", 9400921);
player.soundEffect("Sound/PL_Sound.img/myHome/knock1");
npc.setDelay(1000);
npc.sayNextENoEsc("#face0#…", 9400920);
player.soundEffect("Sound/PL_Sound.img/myHome/knock2");
npc.setDelay(1000);

npc.sayNextENoEsc("#face1#看來有誰找來了吧！", 9400921);
npc.sayNextENoEsc("#b應該沒什麼人要來啊……？", true);

player.spawnTempNpc(9400935, -250, 100, 0);
player.setNpcSpecialAction(9400935, "summon", 0, false);

npc.setDelay(1000);

npc.sayNextENoEsc("#face0#勇者大人！", 9400926);

player.setNpcForceMove(9400935, 1, 150, 100);
npc.setDelay(3000);
npc.sayNextENoEsc("#face0#[50個#i2010058:##t2010058#]\r\n這是給你的禮物……！", 9400926);
npc.sayNextENoEsc("#face1#歡迎你來到我們村子！", 9400926);
if (!"1".equals(player.getQuestRecordEx(64696, "give"))) {
        if (!player.gainItem(2010058, 50)) {
                player.gainParcel(2010058, 50, "背包不足，以郵件發送！");
        }
        player.updateQuestRecordEx(64696, "give", "1");
}
npc.sayNextENoEsc("#face1#你~~媽媽允許你這麼做了嗎？", 9400920);
npc.sayNextENoEsc("#face0#當然了！", 9400926);
npc.sayNextENoEsc("#face2#哇，#h0#真是太幸運了~ 特魯迪家的奶油面包真的很好吃。充滿了柔軟奶油的蓬松面包，吃下一口後，在嘴裡融化開來……可以說是讓人感覺到幸福就在身邊的味道吧！", 9400921);
npc.sayNextENoEsc("#b……啊……那我分你一點吧？", true);
npc.sayNextENoEsc("#face1#啊，不用了！這是給#h0#的喬遷禮物嘛。", 9400921);
npc.sayNextENoEsc("#b謝謝你，特魯迪！我會好好吃的！", true);

player.setNpcForceFlip(9400935, -1);
player.setNpcForceMove(9400935, -1, 100, 100);
npc.sayNextENoEsc("#face1#啊啊啊~~", 9400926);

player.destroyTempNpc(9400935);
npc.setCameraScale(0, 0, 2000, 1000);
npc.setCameraReturnToUser(0, 0);

player.setInGameDirectionMode(false, true, false, false);

npc.sayNextENoEsc("#face1#特魯迪看來很喜歡#h0#呢！", 9400921);
npc.sayNextENoEsc("#b我沒什麼能夠回禮的呢……", true);
npc.sayNextENoEsc("#face0#嗯~要不要辦搬家聚會呢？", 9400921);
npc.sayNextENoEsc("#face0#搬家聚會？", 9400920);
npc.sayNextENoEsc("#b搬家聚會？", true);
npc.sayNextENoEsc("#face1#邀請村民們來，用好吃的招待他們！再叫上#h0#的好友！", 9400921);
npc.sayNextENoEsc("#b好主意！", true);
npc.sayNextENoEsc("#face1#哇，肯定很有趣！", 9400920);
npc.sayNextENoEsc("#face1#好的！那就開始準備搬家聚會吧？", 9400921);
npc.completeQuest();

