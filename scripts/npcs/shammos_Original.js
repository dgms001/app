/**
 *
 * Admits players into Kenta party quest.
 *
 *
 */

//let minPlayers = 1;
//let maxPlayers = 6;
//let minLevel = 170;
//let maxLevel = 275;
//let maxenter = 5;
//let PQLog = "shammos";
//
//let sel = npc.askMenu("#e<組隊任務：侏儒怪皇帝的復活>#n\r\n你們來了啊，#b#h0##k。你們找我有什麼事？呵呵呵#b\r\n#L0#我想去阻止侏儒怪皇帝萊格斯的復活。#l\r\n#L1#我想聽取說明。#l\r\n#L2#我想領取道具。#l\r\n#L3#我想知道剩餘的挑戰次數。#l");
//switch (sel) {
//        case 0:
//                if (map.getId() == 910002000) {
//                        npc.sayNext("我們還是到安靜的地方再談吧，跟我來。");
//                        npc.rememberMap("RETURN_MAP");
//                        player.changeMap(211000002, 0);
//                } else if (party == null || player.getId() != party.getLeader()) {
//                        npc.say("要進入這個任務之前必須先組隊. 你想現在就搜尋隊伍嗎?");
//                } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
//                        npc.say("你所在的組隊非#r" + minPlayers + "人#k以上組隊，所以無法入場。只有#r" + minLevel + "#k級以上的#r" + minPlayers + "人#k以上組隊隊員才能入場，請確認好之後再跟我對話吧。!");//旅行者你所在的組隊非2人以上組隊，所以無法入場。只有160級以上的2人以上組隊隊員才能入場，請確認好之後再跟我對話吧。
//                } else if (party.getMembersCount(map.getId(), minLevel, maxLevel) < minPlayers) {
//                        npc.say("你或你的組隊隊員中有角色沒能達到#r" + minLevel + "#k級。只有#r" + minLevel + "#k級以上的#r" + minPlayers + "人#k以上組隊隊員才能進入這裡，請確認好之後再跟我對話吧。");
//                } else if (party.getMembersCount(map.getId(), 1, 300) < party.getMembersCount()) {
//                        npc.say("好像你有隊員在其他地方，請把隊員都召集到這裡！");
//                } else if (!party.isAllMembersAllowedPQ(PQLog, maxenter)) {
//                        npc.say("你隊員#r#e" + party.getNotAllowedMember(PQLog, maxenter) + "#n#k今日次數已經達到上限了。");
//                } else {
//                        npc.sayNextNoEsc("好吧，我再來說一遍你們的任務。我們現在需要阻止侏儒怪皇帝萊格斯的復活。去的路上，萊格斯的部下會攻擊你。你們的任務是#b保護我，讓我安全到達封印萊格斯的地方#k。");
//                        npc.sayNextNoEsc("我本來不相信人類，但你們是例外。我已經記住了你們所有的人，你們必須全部過去才行。如果沒有全部過去的話，我是不會跟你們走的。好了～讓我們透過這邊的祕密通道，到冰封峽谷去吧。");
//                        if (npc.makeEvent("shammos", true, party) == null) {
//                                npc.say("已經有隊伍在進行了,請換其他頻道嘗試。");
//                        }
//                }
//                break;
//        case 1:
//                npc.sayNext("距離侏儒怪皇帝#r#o9300281##k復活沒剩多少時間了。封印#r#o9300281##k的封印石的力量似乎正在逐漸減弱。只能前往#r#o9300281##k被封印的#b#m921120500##k去阻止他復活……如果你需要的話，我會把你帶到那裡去。但是，你要保護我，直到我安全離開那裡。\r\n - #e等級#n : 150以上#r( 推薦等級 : 150 ~ 200 )#k \r\n - #e限定時間#n : 20分鐘\r\n - #e參加人數#n : 2~6名r\r\n - #e獲得道具#n :\r\n#i1032102:# #t1032102#\r\n#i1032103:# #t1032103#\r\n#i1032104:# #t1032104#\r\n#i1902048:# #t1902048#");
//                break;
//        case 2:
//                let rSel = npc.askMenu("你想要獲得什麼道具？我想要獲得#b\r\n#L0##i1032102:# #t1032102#。我想要獲得#l\r\n#L1##i1032103:# #t1032103#。我想要獲得#l\r\n#L2##i1032104:# #t1032104#。我想要獲得#l\r\n#L3##i1902048:# #t1902048#。#l");
//                var itemid;
//                var cost = 5;
//                switch (rSel) {
//                        case 0:
//                                itemid = 1032102;
//                                break;
//                        case 1:
//                                itemid = 1032103;
//                                break;
//                        case 2:
//                                itemid = 1032104;
//                                break;
//                        case 3:
//                                cost = 10;
//                                itemid = 1902048;
//                                break;
//                }
//                if (player.hasItem(4001530, cost)) {
//                        if (player.gainItem(itemid, 1)) {
//                                player.loseItem(4001530, cost);
//                        } else {
//                                npc.say("請確保揹包有足夠的空間");
//                        }
//                } else {
//                        npc.say("要想獲得#b#t" + itemid + "##k的話，需要#b" + cost + "個#t4001530##k。你快去蒐集吧。消滅萊格斯後，就可以弄到。");
//                }
//                break;
//        case 3:
//                let pqtry = maxenter - player.getPQLog(PQLog);
//                npc.say("今天剩餘挑戰次數是#r" + pqtry + "次#k.");
//                break;
//}
//
player.runScript("邪魔斯入口")