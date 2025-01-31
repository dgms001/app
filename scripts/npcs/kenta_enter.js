/**
 *
 * Admits players into Kenta party quest.
 *
 *
 */

//let minPlayers = 1;
//let maxPlayers = 6;
//let minLevel = 160;
//let maxLevel = 275;
//let maxenter = 5;
//let PQLog = "kenta";
//
//let sel = npc.askMenu("#e<組隊任務：陷入危險的坎特>#n\r\n\r\n不好了！！坎特好像陷入危險了。他說要親自去調查海洋生物的異常行動，可是出去後就沒回來，肯定是出事了。我得把坎特找回來。請你幫幫忙！ \r\n\r\n#b#L0#我去找坎特。#l\r\n#L1#我想要#t1022175#。#k\r\n#b#L2#請詳細地說說是怎麼回事吧。#l\r\n#L3#我想知道今天的剩餘挑戰次數。#l");
//switch (sel) {
//        case 0:
//                if (map.getId() == 910002000) {
//                        npc.sayNext("謝謝，請和我一起去危海岔路吧！");
//                        npc.rememberMap("RETURN_MAP");
//                        player.changeMap(923040000, 0);
//                } else if (party == null || player.getId() != party.getLeader()) {
//                        npc.say("水下世界的動物們突然變得殘暴起來。因為太危險，所以我沒辦法回去。要想進去的話，必須讓你們的隊長來和我說話。");
//                } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
//                        npc.say("旅行者你所在的組隊非#r" + minPlayers + "人#k以上組隊，所以無法入場。只有#r" + minLevel + "#k級以上的#r" + minPlayers + "人#k以上組隊隊員才能入場，請確認好之後再跟我對話吧。!");//旅行者你所在的組隊非2人以上組隊，所以無法入場。只有160級以上的2人以上組隊隊員才能入場，請確認好之後再跟我對話吧。
//                } else if (party.getMembersCount(map.getId(), minLevel, maxLevel) < minPlayers) {
//                        npc.say("旅行者你或你的組隊隊員中有角色沒能達到#r" + minLevel + "#k級。只有#r" + minLevel + "#k級以上的#r" + minPlayers + "人#k以上組隊隊員才能進入這裡，請確認好之後再跟我對話吧。");
//                } else if (party.getMembersCount(map.getId(), 1, 300) < party.getMembersCount()) {
//                        npc.say("好像你有隊員在其他地方，請把隊員都召集到這裡！");
//                } else if (!party.isAllMembersAllowedPQ(PQLog, maxenter)) {
//                        npc.say("你隊員#r#e" + party.getNotAllowedMember(PQLog, maxenter) + "#n#k今日次數已經達到上限了。");
//                } else if (npc.makeEvent("kenta", true, party) == null) {
//                        npc.say("已經有隊伍在進行了,請換其他頻道嘗試。");
//                }
//                break;
//        case 1:
//                npc.sayNext("看樣子你對#i1022175:# #t1022175#挺感興趣……#t1022175#是坎特為那些協助自己進行海洋生物調查的人準備的謝禮。如果你蒐集來研究所需的#b10個#t4001535##k，我就給你。你找到坎特後，和他一起消滅皮亞奴斯，就可以獲得#t4001535#。蒐集10個比較吃力的話，用#b5個#t4001535##k也可以交換到寵物裝備卷軸，請你去幫助坎特吧。");
//                npc.sayNext("現在不是進行那種研究的時候。坎特一直沒有聯絡，一定是遇到了什麼危險！請你找到他，幫幫他！");
//                break;
//        case 2:
//                npc.sayNext("坎特覺得光用冒險家他們蒐集到的樣本進行研究還不夠，說要直接去對海洋生物的異常行為進行調查，之後去了危海。他出去之後就一直沒有聯絡，也沒有回來。一定是出了什麼事。");
//                npc.sayNext("請你去找到坎特！一定要小心。那裡很危險。我能拜託你幾件事嗎？\r\n\r\n1. 在去尋找坎特的路上如果遇到了危險的海洋生物，請你把它們消滅掉。\r\n2. 坎特出去很久了，準備的氧氣可能不夠。請你幫他蒐集一些空氣玲。\r\n3. 發現坎特之後，請你保護他，不要讓凶暴的海洋生物傷害他。\r\n4. 坎特如果想繼續進行調查，請你幫助他完成調查，安全地回到這裡。");
//                break;
//        case 3:
//                let pqtry = maxenter - player.getPQLog(PQLog);
//                npc.say("今天剩餘挑戰次數是#r" + pqtry + "次#k.");
//                break;
//}
//
player.runScript("坎特入口")