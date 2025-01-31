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
 * Lenario: Manager of Guild Union (NPC 2010009)
 * Orbis: Guild Head Quarters<Hall of Fame> (Map 200000301)
 *
 * Creates, expands, and destroys alliances.
 *
 * @author dgms (content from Vana r3171)
 */

 let selection = npc.askMenu("您好！我叫#b蕾那麗#k。\r\n#b"
 + "#L0#請您告訴我公會聯盟是什麼？#l\r\n"
 + "#L1#要成立公會聯盟的話應該怎麼做？#l\r\n"
 + "#L2##r我想成立公會聯盟。#l\r\n"
 + "#L3#我想增加公會聯盟的公會數量。#l\r\n"
 + "#L4#我想解散公會聯盟。#l");

switch (selection) {
 case 0:
         npc.sayNext("多個公會結合在一起成立的組織被稱為公會聯盟。我負責管理公會聯盟的有關事務。");
         break;
 case 1:
         npc.sayNext("想要成立公會聯盟的話，必須有2名公會長組成組隊。其中隊長會成為公會聯盟的盟主。");
         npc.sayNext("另外還有一個！如果已經加入其他公會聯盟的話，就無法建立新的公會聯盟！");
         break;
 case 2:
         if (party == null) {
                 npc.sayNext("如果你想創建公會聯盟，那麼請由2名公會長組成組隊。");
         } else if (player.getId() != party.getLeader()) {
                 npc.sayNext("如果你們想創建公會聯盟，那麼請讓組隊長與我交談！");
         } /*else if (party.getMembersCount() != 1) {
                 npc.sayNext("必須要有2名公會長組成組隊。");
         } *//*else if (party.getMembersCount(200000301, 0, 275) != 2) {
                 npc.sayNext("請召集所有隊員到這裡。");
         } */else {
                 let members = party.getLocalMembers();
                 let error = "";
                 for (let i = 0; i < members.length; i++) {
                         if (members[i].getGuildId() == 0) {
                                 error = "隊伍成員中好像有人沒有公會喲，沒有公會是不能組成一個公會聯盟的!";
                         } else if (members[i].getAllianceId() != 0) {
                                 error = "隊伍成員中好像有人已經有公會聯盟了!";
                         } else if (members[i].getGuildRank() != 1) {
                                 error = "隊伍成員中好像有人不是公會族長，必須要是公會族長才能組成一個公會聯盟!";
                         }
                 }
                 if (error.length != 0) {
                         npc.sayNext(error);
                 } else {
                         selection = npc.askYesNo("好的,你對公會聯盟感興趣嗎?");
                         if (selection == 1) {
                                 let allianceName = npc.askText("請輸入想要創建公會聯盟的名稱。(英文最多12字，中文最多6字)", "", 4, 12);
                                 selection = npc.askAccept("你確定使用 #b" + allianceName + "#k 做為公會聯盟的名稱嗎？");
                                 if (selection == 1) {
                                         player.createAlliance(allianceName);
                                 }
                         }
                 }
         }
         break;
 case 3:
         if (player.getAllianceRank() != 1) {
                 npc.sayNext("只有公會聯盟盟主可以增加公會數量。");
         } else {
                 if (player.getAllianceCapacity() >= 5) {
                         npc.sayNext("你的聯盟最大公會數已滿,最多可以容納5個公會.");
                 } else {
                         npc.sayNext("當前公會聯盟的最大公會數：#r" + player.getAllianceCapacity() + "#k。 再增加一個需要花費#r100萬#k金幣。");
                         selection = npc.askYesNo("你想使用#r100萬#k金幣，增加公會聯盟的最大公會數嗎？");
                         if (selection == 1) {
                                 if (!player.hasMesos(1000000)) {
                                         npc.sayNext("你好像沒有足夠的金幣。");
                                 } else {
                                         player.increaseAllianceCapacity();
                                         player.loseMesos(1000000);
                                         npc.say("好了，公會聯盟容納數增加#r1#k。");
                                         //npc.say("好了，現在公會聯盟最多可以容納" + player.getAllianceCapacity() + "個公會。");
                                 }
                         } else if (selection == 0) {
                                 npc.sayNext("如果你想增加公會聯盟的最大公會數，那麼再來找我。");
                         }
                 }
         }
         break;
 case 4:
         if (player.getAllianceRank() != 1) {
                 npc.sayNext("只有公會聯盟盟主可以解散公會聯盟。");
         } else {
                 selection = npc.askAccept("你確定要解散你的公會聯盟？");
                 if (selection == 1) {
                         player.disbandAlliance();
                         npc.say("公會聯盟已經解散了!");
                 } else if (selection == 0) {
                         npc.sayNext("如果你想解散公會聯盟，那麼再來找我。");
                 }
         }
         break;
}