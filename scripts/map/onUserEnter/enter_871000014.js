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
player.setInGameDirectionMode(true, false, false, false);


player.spawnTempNpc(9400928, -200, 250, 1);//92 4C 0F 00
player.setNpcSpecialAction(9400928, "summon", 0, false);

player.spawnTempNpc(9400929, -300, 250, 1);//93 4C 0F 00
player.setNpcSpecialAction(9400929, "summon", 0, false);

player.setLayerBlind(true, 255, 0, 0, 0, 0, 0);
npc.setCameraScaleAbsMove(0, 0, 1000, 2000, -150, 80);



player.showTextEffect("#fs20#建筑家凱尼斯家", 2000, 6);
npc.setDelay(1000);
npc.setCameraRelMove(0, 3000, 350, 0);
npc.setDelay(600);
player.setLayerBlind(false, 0, 0, 0, 0, 1000, 0);
npc.setDelay(1000);
npc.sayNextENoEsc("#b哇……", true);
player.setLayerBlind(true, 255, 0, 0, 0, 500, 0);
npc.setDelay(500);
npc.setCameraAbsMove(0, 0, 250, 300);
npc.setCameraRelMove(0, 3000, -350, 0);

player.setLayerBlind(false, 0, 0, 0, 0, 1000, 0);
npc.setDelay(1000);
player.setForcedMove(2, 180);
npc.setDelay(1000);
player.setForcedFlip(-1);
npc.sayNextENoEsc("#b太厲害了！這是什麼？扎昆……桌子？！", true);
player.setNpcForceMove(9400928, 1, 20, 100);
npc.sayNextENoEsc("#face0#哇！你怎麼知道的？！", 9400920);
npc.sayNextENoEsc("#b這一看就是扎昆的手啊？", true);
player.setNpcForceMove(9400929, 1, 80, 100);
npc.sayNextENoEsc("#face0#這樣啊……我們沒見過扎昆，所以不知道呢。", 9400921);

npc.sayNextENoEsc("#face1#據說這是凱尼斯在當冒險家的時候，抓住扎昆後得到的東西。", 9400921);

npc.sayNextENoEsc("#face0#沒錯，我聽那個故事大概有50遍了吧。", 9400920);
npc.sayNextENoEsc("#b抓住扎昆做成了桌子？", true);
npc.sayNextENoEsc("#face1#雖然我也不是親眼所見，但是據說如果消滅楓之谷世界的BOSS怪物，就能得到特殊的家具。", 9400921);


player.spawnTempNpc(9400931, 270, 260, 1);//99 4C 0F 00
player.setNpcSpecialAction(9400931, "summon", 0, false);
npc.sayNextENoEsc("#face0#至今我聽說過的，有#t2672045:#、#t2672046:#、#t2672013:#？還有嗎，艾米？", 9400921);
npc.sayNextENoEsc("#face0#好像還有#t2672052:#！", 9400920);

player.setNpcForceMove(9400931, -1, 170, 100);
npc.setCameraRelMove(0, 3000, 100, 0);
npc.sayNextENoEsc("#face1#除此之外好像還有很多。只不過我們沒見過罷了，如果是你，應該能得到很多吧。", 9400922);

player.setForcedFlip(1);
npc.sayNextENoEsc("#b凱尼斯！", true);

npc.sayNextENoEsc("#face1#你來的還真快啊，呵呵", 9400922);
npc.sayNextENoEsc("#b那個……", true);
npc.sayNextENoEsc("#face0#你覺得之前的家有點小吧？那個房屋其實也是我建的。那是我學習建筑後建的第二個房屋，第一個是這間房屋。", 9400922);
npc.sayNextENoEsc("#face0#雖然我很喜歡那個房屋，但是我知道它又小又舊，住起來有點不方便。", 9400922);
npc.sayNextENoEsc("#face0#請稍等一下。", 9400922);

npc.setDelay(300);
player.setNpcSpecialAction(9400931, "special", 3000, false);
npc.setDelay(3000);
npc.sayNextENoEsc("#face0#來，看看，這個怎麼樣？", 9400922);

player.setLayerBlind(true, 150, 0, 0, 0, 300, 0);
// player.setLayerOn(900, "0", 0, -80, 12, "Effect/DirectionWz2.img/effect/myHome/1", 4);
npc.sayNextENoEsc("#b把這個房屋給我……？", true);

npc.sayNextENoEsc("#face1#太帥氣了！看看這蘑菇屋頂的曲線！", 9400921);

npc.sayNextENoEsc("#face1#呵呵，你啊，如果能答應我幾件事，我就把這個房屋的圖紙給你，怎麼樣？", 9400922);

player.setLayerOff(300, "0");
player.setLayerBlind(false, 150, 0, 0, 0, 300, 0);
npc.sayNextENoEsc("#b什麼事……？", true);

npc.sayNextENoEsc("#face0#沒多難的。", 9400922);

npc.sayNextENoEsc("#face0#第一，這房屋完全是為了你而創造的空間，所以它是給你的。", 9400922);
npc.sayNextENoEsc("#b當然了！", true);
npc.sayNextENoEsc("#face0#第二，在辛苦的狩獵和戰鬥後，回到家好好休息，家是恢復活力的空間。", 9400922);
npc.sayNextENoEsc("#b這也是當然的！", true);

npc.sayNextENoEsc("#face0#最後，你要和我們凱蘭西亞的居民們一直好好相處下去。", 9400922);
npc.sayNextENoEsc("#b當然，這都是理所當然的事情，不用這麼強調也行啊？", true);

npc.askMenuENoEsc("#face1#呵呵，忙起來了之後，很容易就會忘記理所當然的事情哦。\r\n#b#L0#我答應你，凱尼斯。#l", 9400922);

npc.sayNextENoEsc("#face0#謝謝你能答應我，那以後就好好相處吧！", 9400922);
if (!player.gainItem(2630598, 1)) {
        player.gainParcel(2630598, 1, "背包空間不足，以包裹發送");
}
player.updateQuestRecordEx(64605, "chk=1;give=1");
npc.sayNextENoEsc("#face1#[#i2630598:##t2630598#]\r\n來，拿著吧！這就是你的建筑圖紙。", 9400922);

npc.sayNextENoEsc("#face1#雙擊背包消耗欄的圖紙，就能激活你的建筑列表。", 9400922);
player.updateQuestRecordEx(64605, "dir", "1");

// player.setLayerOn(900, "1", 0, -80, 12, "Effect/DirectionWz2.img/effect/myHomeTuto/5", 4);
npc.sayNextENoEsc("#face0#前往我的小屋，點擊我的小屋菜單的#i3801390#按鍵，選擇射手村2層房屋後，選擇你喜歡的屋頂、外墻和窗戶，然後就能進行建造了。", 9400922);
npc.sayNextENoEsc("#face0#如果有什麼問題，你可以隨時來找我。等你建成了美麗的新家，記得邀請我去參觀啊，哈哈哈", 9400922);
player.setLayerOff(300, "1");
npc.sayNextENoEsc("#b謝謝你，凱尼斯！", true);

npc.sayNextENoEsc("#face2#要是家變大了，就能有更多可以裝飾的地方了吧？真是讓人激動呢！", 9400921);
npc.sayNextENoEsc("#face2#什麼啊，真是羨慕呢~！別傻站著了，趕快去我的小屋，開始建造吧。我要第一個參觀你的新家！", 9400920);

player.completeQuest(64605, 0);
player.updateQuestRecordEx(500767, "1", "1");
player.updateWorldShareRecord(500767, player.getQuestRecordEx(500767));
npc.setCameraReturnToUser(0, 0);
player.setInGameDirectionMode(false, true, false, false);
player.destroyTempNpc(9400928);
player.destroyTempNpc(9400929);
player.destroyTempNpc(9400931);
player.changeMap(871000001, 0);
