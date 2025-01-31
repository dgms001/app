/*
 * NeroMS MapleStory server emulator written in Java
 * Copyright (C) 2017-2018  Jackson
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
 * Admits players into dragonRider party quest.
 *
 * @author Jackson
 */

let minPlayers = 1;
let maxPlayers = 6;
let minLevel = 100;
let maxLevel = 300;
let maxenter = 5;
let PQLog = "dragon_rider";
let eventName = "party_dragon_rider";
let sel = npc.askMenu("#e<組隊任務：禦龍魔>#n\r\n\r\n年輕人，你能不能幫我做件事？麻煩你去消滅攪亂神木村平靜生活的禦龍魔吧。\r\n#b#L0# 1. 我要進入天渡。（130以上/2名以上）#l\r\n#L1# 2. 我要尋找一起組隊的同伴。#l\r\n#L2# 3. 我想聽介紹。#l\r\n#L3# 4. 我想知道今天的剩餘挑戰次數。#l\r\n#L4# 5. 我想學習#r[飛翔]#b技能。#l", 9020016);
switch (sel) {
        case 0:
                if (party == null || player.getId() != party.getLeader()) {
                        npc.say("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.並且等級在" + minLevel + "~" + maxLevel + "範圍,\r\n那麼請讓你的組隊長和我對話吧!", 9020016);
                } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 275) > maxPlayers) {
                        npc.say("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.!", 9020016);
                } else if (party.getMembersCount(map.getId(), minLevel, maxLevel) < minPlayers) {
                        npc.say("你隊員的等級要在" + minLevel + "~" + maxLevel + "範圍!請確認!", 9020016);
                } else if (party.getMembersCount(map.getId(), 1, 300) < party.getMembersCount()) {
                        npc.say("好像你有隊員在其他地方，請把隊員都召集到這裡！", 9020016);
                } else if (!party.isAllMembersAllowedPQ(PQLog, maxenter)) {
                        npc.say("你隊員#r#e" + party.getNotAllowedMember(PQLog, maxenter) + "#n#k今日次數已經達到上限了。", 9020016);
                } else {
                        let skillCeck = true;
                        let members = party.getLocalMembers();
                        let name = "";
                        for (let i = 0; i < members.length; i++) {
                                let pMember = members[i];
                                let skillId = (pMember.getBeginner() * 10000) + 1026;
                                if (pMember.getSkillLevel(skillId) <= 0) {
                                        name = pMember.getName();
                                        skillCeck = false;
                                        break;
                                }
                        }
                        if (!skillCeck) {
                                npc.say("你隊員#r#e" + name + "#n#k還麼有學習[飛翔]技能。", 9020016);
                        } else if (npc.makeEvent(eventName, true, party) == null) {
                                npc.say("組隊訓練場任務裡面已經有人了，請稍等..", 9020016);
                        }
                }
                break;
        case 1:
                npc.say("請向周圍的朋友們請求組隊。使用尋找組隊(快捷鍵O)功能，可以在任何時間任何地點尋找組隊。敬請參考。", 9020016);
                break;
        case 2:
                npc.say("#e<組隊任務：禦龍魔>#n\r\n\r\n前往#b<天空之門 >#k，搞清楚#r禦龍魔#k的真實身份吧。使用#b飛翔#k技能在天空中飛翔，消滅飛龍並進行追蹤，就可以找到禦龍魔。\r\n - #e等級#n：130級以上 \r\n - #e規定時間#n：30分鐘\r\n - #e參加人員#n：3～6名\r\n - #e參加條件#n：學習飛翔技能", 9020016);
                break;
        case 3:
                let pqtry = maxenter - player.getPQLog(PQLog);
                npc.say("今天剩餘挑戰次數是#r" + pqtry + "次#k.", 9020016);
                break;
        case 4:
                let ret = npc.askYesNo("學習[飛翔]技能必須付出一定的金幣喲!大約需要:#r2000000#k,那麼你想現在就學習麼?", 9020016);
                if (ret == 1) {
                        let skillId = (player.getBeginner() * 10000) + 1026;
                        if (player.getSkillLevel(skillId) <= 0) {
                                if (player.hasMesos(2000000)) {
                                        player.loseMesos(2000000);
                                        player.setSkillLevel(skillId, 1, 1, false);
                                        npc.say("恭喜,你學習了[飛翔]技能!", 9020016);
                                } else {
                                        npc.say("您似乎沒有那麼多的金幣喲！在去努力攢錢吧！", 9020016);
                                }
                        } else {
                                npc.say("你已經獲得了[飛翔]技能了!不需要重新再學習了。");
                        }
                }
                break;
}