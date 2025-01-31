var questId = 34307;
player.startQuest(questId, 0)
if (player.isQuestStarted(questId)) {
    player.completeQuest(questId, 0);
}
if (player.isQuestStarted(34307)) {
    npc.sayNext("吃是幸福的事，不停地吃代表著無盡的幸福，我在幸福中不停的吃。那是我的幸福，無盡的幸福。", 3003228);
    player.updateQuestRecordEx(34307, "NpcSpeech", "30032281");
    npc.sayNext("舞動吧，世界。舞動吧，人生。那就是幸福，沒有煩惱和憂慮的世界，就是幸福的世界。", 3003229);
    let data = player.getQuestRecordEx(34307, "NpcSpeech");
    player.updateQuestRecordEx(34307, "NpcSpeech", "30032292/" + data);
    npc.sayNext("（咳！）我很幸福，因為我可以吃的飽飽的。", 3003215);
    data = player.getQuestRecordEx(34307, "NpcSpeech");
    player.updateQuestRecordEx(34307, "NpcSpeech", "30032153/" + data);
} else {
    npc.say("舞動吧，世界。舞動吧，人生。那就是幸福，沒有煩惱和憂慮的世界，就是幸福的世界。");
}

