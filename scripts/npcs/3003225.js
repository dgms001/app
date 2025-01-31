/*  
 *  
 *  功能：[拉克蘭]慶典正酣之都 任務對話
 *  
 *
 */

if (player.isQuestStarted(34300)) {
    npc.sayNext("幸福啊！好性福！");
    player.updateQuestRecordEx(34300, "NpcSpeech", "30032251/");
} else {
    npc.say("幸福啊！好性福！");
}

