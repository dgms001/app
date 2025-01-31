/**
 *
 * Admits players into iceMan party quest.
 *
 *
 */

//let minPlayers = 1;
//let maxPlayers = 6;
//let minLevel = 100;
//let maxLevel = 275;
//let maxenter = 5;
//let PQLog = "iceman";
//
//let sel = npc.askMenu("#e<組隊任務：冰騎士的詛咒>#n\r\n等等，噓……！安靜！小心別被冰騎士發現。中了他的詛咒的話，就會變成和我的朋友一樣……我就單刀直入了。請你幫幫我的朋友，讓他能夠解開冰騎士的詛咒！！！\r\n#b#L0#我願意幫助你的朋友。#l\r\n#L1#我想知道到底發生了什麼事。#l\r\n#L2#我想擁有冰騎士的特殊物品。#l\r\n#L3#我想知道今天的剩餘挑戰次數。#l");
//switch (sel) {
//        case 0:
//                if (party == null || player.getId() != party.getLeader()) {
//                        npc.say("要進入這個任務之前必須先組隊. 你想現在就搜尋隊伍嗎?");
//                } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
//                        npc.say("你所在的組隊非#r" + minPlayers + "人#k以上組隊，所以無法入場。只有#r" + minLevel + "#k級以上的#r" + minPlayers + "人#k以上組隊隊員才能入場，請確認好之後再跟我對話吧。!");//旅行者你所在的組隊非2人以上組隊，所以無法入場。只有160級以上的2人以上組隊隊員才能入場，請確認好之後再跟我對話吧。
//                } else if (party.getMembersCount(map.getId(), minLevel, maxLevel) < minPlayers) {
//                        npc.say("你或你的組隊隊員中有角色沒能達到#r" + minLevel + "#k級。只有#r" + minLevel + "#k級以上的#r" + minPlayers + "人#k以上組隊隊員才能進入這裡，請確認好之後再跟我對話吧。");
//                } else if (party.getMembersCount(map.getId(), 1, 300) < party.getMembersCount()) {
//                        npc.say("好像你有隊員在其他地方，請把隊員都召集到這裡！");
//                } else if (!party.isAllMembersAllowedPQ(PQLog, maxenter)) {
//                        npc.say("你隊員#r#e" + party.getNotAllowedMember(PQLog, maxenter) + "#n#k今日次數已經達到上限了。");
//                } else if (npc.makeEvent("iceman", true, party) == null) {
//                        npc.say("已經有隊伍在進行了,請換其他頻道嘗試。");
//                }
//                break;
//        case 1:
//                npc.sayNext("我一直以為我是大人，其他的孩子都很幼稚。阿俊總是跟著我，他是個聽話的孩子。我們和往常一樣玩捉迷藏，阿俊在抓我的時候，被我嚇了一下。我覺得他很搞笑，就逗了他一下，但是……");
//                npc.sayNext("阿俊說想變得勇敢，想成為所有人認可的勇敢的人。但是他卻被冰騎士騙了，變成了那副模樣。請幫幫我的朋友阿俊！要是不快點把詛咒解開的話，阿俊可能會和冰騎士一樣，失去人類的心。");
//                break;
//        case 2:
//                let rSel = npc.askMenu("#b消滅冰騎士#k後，可以獲得#b#t4001529##k。聽說將那東西進行加工後，可以製作出特別道具。你去消滅冰騎士，解除詛咒，並帶回#t4001529#的話，我就幫你製作。\r\n#L0##i1152127:# #t1152127# - 20個#t4001529##l\r\n#L1##i1072819:# #t1072819# - 10個#t4001529##l\r\n#L2##i2041513:# #t2041513# - 10個#t4001529##l\r\n#L3##i2041514:# #t2041514# - 10個#t4001529##l");
//                var itemid;
//                var cost = 10;
//                switch (rSel) {
//                        case 0:
//                                cost = 20;
//                                itemid = 1152127;
//                                break;
//                        case 1:
//                                itemid = 1072819;
//                                break;
//                        case 2:
//                                itemid = 2041513;
//                                break;
//                        case 3:
//                                itemid = 2041514;
//                                break;
//                }
//                if (player.hasItem(4001529, cost)) {
//                        if (player.gainItem(itemid, 1)) {
//                                player.loseItem(4001529, cost);
//                        } else {
//                                npc.say("請確保揹包有足夠的空間");
//                        }
//                } else {
//                        npc.say("要想獲得#b#t" + itemid + "##k的話，需要#b" + cost + "個#t4001529##k。你確定#b#t4001529##k的數量沒錯？你可別想騙我。");
//                }
//                break;
//        case 3:
//                let pqtry = maxenter - player.getPQLog(PQLog);
//                npc.say("今天剩餘挑戰次數是#r" + pqtry + "次#k.");
//                break;
//}
//
player.runScript("冰騎士入口")