/*    
 *  
 *  功能：[拉克蘭]誰是“清醒者”？2
 *  

 */

npc.sayNext("“清醒著”是誰？");
let selection = npc.askMenu("你說什麼？\r\n\r\n#b#L0#美女面具#l\r\n#b#L1#紳士貓面具#l\r\n#b#L2#蝦蝦面具#l");
if (selection == 0) {
    npc.say("你肯定看錯了！");
} else if (selection == 1) {
    npc.say("嗯，你肯定看錯了！");
} else {
    npc.say("原來如此。和蝦蝦面具對話，試著說服他吧。");
    npc.startQuest();
}

