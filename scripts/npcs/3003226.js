/*  
 *  
 *  功能：[拉克蘭]慶典正酣之都 任務對話
 *  
 *
 */

if (player.isQuestStarted(34300)) {
    npc.sayNext("飛舞的煙花，流淌的河水，我好開心。");
    var data = player.getIntQuestRecordEx(34300, "NpcSpeech");
    player.updateQuestRecordEx(34300, "NpcSpeech", "30032262/" + data);
} else {
    npc.say("飛舞的煙花，流淌的河水，我好開心。");
}

