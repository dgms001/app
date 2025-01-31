/*  
 *  
 *  功能：[拉克蘭]慶典正酣之都
 *  
 *
 */
if (!player.isQuestCompleted(34300) && !player.isQuestStarted(34300)) {
    npc.sayNextSNoEsc("神祕河畔河居然有人？？先和他們對話吧？", false);
    npc.startQuest();
    npc.sayNextNoEsc("幸福啊！好性福！", 3003225);
    player.updateQuestRecordEx(34300, "NpcSpeech", "30032251/");
    npc.sayNextNoEsc("飛舞的煙花，流淌的河水，我好開心。", 3003226);
    let data = player.getQuestRecordEx(34300, "NpcSpeech");
    player.updateQuestRecordEx(34300, "NpcSpeech", "30032262/" + data);
    npc.sayNextNoEsc("吃吧，吃，哈哈哈。你和我，還有大家，一起享受著慶典吧！", 3003227);
    npc.sayNextSNoEsc("這個地方的人好奇怪……所有的人都帶著面具。", false);
    data = player.getQuestRecordEx(34300, "NpcSpeech");
    player.updateQuestRecordEx(34300, "NpcSpeech", "30032273/" + data);
}