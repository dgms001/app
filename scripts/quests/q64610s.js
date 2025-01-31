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

npc.sayNextENoEsc("#face2##h0#！聽我說啊！不管怎樣，既然是管家，總不能什麼都不做吧？所以我思考了一下！ \r\n呵呵，你可不能現在就被感動哦~", 9400920);//需要判斷
npc.sayNextENoEsc("#face1#首先是家具選購！裝修家的時候最重要的就是家具和裝飾品，哥哥天天都是這麼念叨的。", 9400920);//需要判斷
npc.sayNextENoEsc("#face0#只要你告訴我你喜歡的家具風格，我就能親自去找來。不管是哪裡的東西！ \r\n啊，當然了，BOSS家具除外！你應該不會覺得我能抓住BOSS然後找到家具吧！？ 當然了，也不是不可能……你給我一年時間吧，我變強之後會再回來的，嘿嘿", 9400920);//需要判斷
player.setLayerOn(900, "0", 0, -80, 12, "Effect/DirectionWz2.img/effect/myHomeTuto/7", 4);
npc.sayNextENoEsc("#face1#還有……我正在為了#h0#而練習增益。這是秘密哦，我好像還挺有天分的！", 9400920);
npc.sayNextENoEsc("#face2#照這種速度成長下去，我可能在不久之後就會成為大魔法師了哦？呵呵，別忘了，每天只能領取一次哦！", 9400920);
player.setLayerOff(600, "0");
npc.sayNextENoEsc("#face1#我會一直在這裡，如果有什麼想知道的或者需要幫助，那就來找我吧！", 9400920);
npc.sayNextENoEsc("#face2#對了！我差點忘記了，這是凱尼斯，米蘭達，還有艾丹，以及我和艾爾賓哥哥一起準備的禮物！#h0#，歡迎你成為我們的鄰居！", 9400920);
npc.completeQuest();
if (!player.gainItem(2630702, 1)) {
        player.gainParcel(2630702, 1, "背包空間不足，以郵件發送");
}
player.updateQuestRecordEx(500767, "6", "1");
player.updateQuestRecordEx(500763, "end", "1");
player.updateWorldShareRecord(500763, player.getQuestRecordEx(500763));
player.updateWorldShareRecord(500767, player.getQuestRecordEx(500767));