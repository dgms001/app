/*
 * Auroms MapleStory server emulator written in Java
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

/* global player, npc, party */

/**
 * NPC 2010007
 * Map 200000301
 *
 * Creates, expands, and destroys guilds.
 *
 * @author dgms 
 */

 if (player.getGuildId() == 0) {
        npc.sayNext("你是因為對公會感興趣，才會來找我的嗎？");

        let selection = npc.askMenu("我能幫你什麼嗎？\r\n#b" +
                "#L0#請告訴我公會是什麼！#l\r\n" +
                "#L1#怎麼才能創建公會呢？#l\r\n" +
                "#L3#我想了解有關公會系統的詳細說明#l\r\n" +
                "#L2##r我想創建公會#l");

        switch (selection) {
                case 0:
                        npc.sayNext("公會……你可以把它理解成一個小的組織。是擁有相同理想的人為了同一個目的而聚集在一起成立的組織。 但是公會是經過公會總部的正式登記，是經過認可的組織。");
                        break;
                case 1:
                        npc.sayNext("要想創建公會，至少必須達到100級。");
                        npc.sayNext("要想創建公會，你需要創建組隊。");
                        npc.sayNext("創建公會還需要5000000楓幣的費用！");
                        /*npc.sayNext("創建公會，帶6個人來~你不能沒有6個人就組成一個...哦，當然，6個人不能是其他公會的成員！如果有人已經加入了其他公會，那就不行了！！");*/
                        break;
                case 2:
                        selection = npc.askYesNo("哦！你是來創建公會的嗎……要想創建公會，需要500萬楓幣。我相信你一定已經準備好了。好的，你想創建公會嗎？");
                        if (selection == 1) {
                                if (party == null) {
                                        npc.sayNext("如果你真的很想成立一個公會的話，請創建一個組隊。");
                                } else if (player.getId() != party.getLeader()) {
                                        npc.sayNext("如果你想創建一個公會，請讓隊長和我交談。");
                                } else if (player.getLevel() < 100) {
                                        npc.sayNext("嗯...我認為你沒有資格創建公會，請繼續修煉後再來吧！");
                                /* } else if (party.getMembersCount(200000301, 0, 275) < party.getMembersCount()) {
                                        npc.sayNext("好像你在你的隊伍裡沒有足夠的隊員，或者你的一些隊員不在這裡。我需要所有6個隊員在這裡來創建你的公會。如果你的組隊無法協調這個簡單的任務，你就應該為組建公會而三思。"); */
                                } else {
                                        let members = party.getLocalMembers();
                                        let eligible = true;
                                        for (let i = 0; i < members.length && eligible; i++)
                                                if (members[i].getGuildId() != 0)
                                                        eligible = false;
                                        if (!eligible) {
                                                npc.sayNext("隊伍中好像有人已經是另一個公會的成員了。要創建一個公會，你所有的隊員都必須脫離他們的當前的公會。請確定後再回來吧。");
                                        } else if (!player.hasMesos(5000000)) {
                                                //TODO: GMS-like line
                                                npc.say("請再核對一下。你必須支付服務費來創建一個公會。");
                                        } else {
                                                npc.sayNext("輸入您公會的名稱，您的公會將被創建。");
                                                let retryName = player.createGuild(npc.askGuildName());
                                                while (retryName != null)
                                                        retryName = player.createGuild(retryName);
                                                if (player.getGuildId() != 0) {
                                                        player.loseMesos(5000000);
                                                }
                                        }
                                }
                        }
                        break;
                case 3:
                        npc.sayNext("你想了解更多有關公會的內容？如果是那樣的話，公會負責人蕾雅會為你介紹的。");
                        break;
        }
} else {
        let selection = npc.askMenu("我能幫你什麼嗎？\r\n#b"
                + "#L0#我想增加公會人數#l\r\n"
                + "#L1#我想解散公會#l");

        if (player.getGuildRank() != 1) {
                npc.say("你不是公會的公會長！！這是只有公會的公會長才可以決定的工作。");
        } else {
                switch (selection) {
                        case 0:
                        {
                                let capacity = player.getGuildCapacity();
                                if (capacity >= 200) {
                                        npc.sayNext("公會人數已經達到最大容量了，不能再增加了！");
                                } else {
                                        npc.sayNext("你是想增加公會人數嗎？嗯，看來你的公會成長了不少。你也知道，要想增加公會人數，必須在公會本部重新登記。當然，使用楓幣作為手續費。此外，公會成員最多可以增加到200個。");
                                        let fee = 500000;
                                        if (capacity >= 35)
                                                fee *= 10;
                                        else if (capacity >= 30)
                                                fee *= 9;
                                        else if (capacity >= 25)
                                                fee *= 7;
                                        else if (capacity >= 20)
                                                fee *= 5;
                                        else if (capacity >= 15)
                                                fee *= 3;
                                        //
                                        selection = npc.askYesNo("當前的公會最大人數是#b" + capacity + "人#k，增加#b5人#k所需的手續費是#b" + fee + "楓幣#k。怎麼樣？你想增加公會人數嗎？");
                                        if (selection == 1) {
                                                if (player.hasMesos(fee)) {
                                                        player.increaseGuildCapacity(5);
                                                        player.loseMesos(fee);
                                                } else {
                                                        npc.say("您的楓幣不足，增加人數需要" + fee + "楓幣！");
                                                }
                                        }
                                }
                                break;
                        }
                        case 1:
                                if (player.getAllianceId() != 0) {
                                        npc.say("在你解散公會之前，你需要先退出公會聯盟！");
                                } else if (npc.askYesNo("你真的要解散公會嗎？哎呀……哎呀……解散之後，你的公會就會被永久刪除。很多公會特權也會一起消失。你真的要解散嗎？") == 1) {
                                        if (player.hasMesos(200000)) {
                                                player.disbandGuild();
                                                player.loseMesos(200000);
                                        } else {
                                                //TODO: GMS-like line
                                                npc.say("您的楓幣不足，需要200000楓幣的手續費！");
                                        }
                                }
                                break;
                }
        }
}