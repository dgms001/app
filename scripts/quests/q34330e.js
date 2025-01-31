/*     
 *
 *  功能：[拉克蘭]噩夢時間塔4層
 *

 */
/*npc.sayNext("嗯…夢境正在減弱。", 3003209);
npc.sayNext("你難道不害怕嗎？閉嘴，快走吧！我還想活命呢。", 3003209);
npc.sayNext("你先收下這個吧。說不定我什麼時候會重新變成清道夫了。", 3003209);
npc.sayNext("這是我變成清道夫時發現的，我一直把它帶在身上。看來那時我還保留了意識。不知道它能不能幫到你。", 3003209);
npc.sayNext("話說，防毒面具最終還是沒有來，看來他受到的衝擊很大。", 3003209);
npc.sayNext("不過，你不用太擔心。他肯定會恢復的。", 3003209);
npc.sayNext("#ho# 你………", 3003209);
npc.sayNextS("我要擊退路西德。", false);
npc.sayNext("我不想阻攔你，#ho#，希望你能贏。為了你，還有，為了我們。", 3003209);*/
if (player.getFreeSlots(1) < 1) {
    player.dropAlertNotice("裝備欄滿了。");
} else {
    player.startQuest(39366, 0); //完成任務檢查
    npc.completeQuest();
}