/*  
 *  
 *  功能：[拉克蘭]慶典正酣之都 任務對話
 *  
 *
 */

if (player.isQuestStarted(34300)) {
    npc.sayNext("吃吧，吃，哈哈哈。你和我，還有大家，一起享受著慶典吧！");
    npc.sayNextS("這個地方的人好奇怪……所有的人都帶著面具。", false);
    var data = player.getQuestRecordEx(34300, "NpcSpeech");
    player.updateQuestRecordEx(34300, "NpcSpeech", "30032273/" + data);
    player.startQuest(34300, "1");
} else {
    npc.say("吃吧，吃，哈哈哈。你和我，還有大家，一起享受著慶典吧！");
}	

