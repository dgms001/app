/*  
 *  
 *  [拉克蘭]誰是“清醒者”？
 *  
 *
 */

if (player.isQuestStarted(34307)) {
    npc.sayNext("（咳！）我很幸福，因為我可以吃的飽飽的。");
    var data = player.getQuestRecordEx(34307, "NpcSpeech");
    player.updateQuestRecordEx(34307, "NpcSpeech", "30032153/" + data);
    player.startQuest(34340, 3003229, "1");
} else {
    npc.say("（咳！）我很幸福，因為我可以吃的飽飽的。");
}