/**
 *
 *
 */

var data = "";
if (player.isQuestStarted(64600)) {
    data = player.getQuestRecordEx(64600, "NpcSpeech");
}
if (data == null) {
    data = "";
}
if (player.isQuestStarted(64600) && data.indexOf("94009242") == -1) {
    npc.sayNextE("#face0#……搬家聚會？ ", 9400924);
    npc.sayNextE("#face0#你把時鐘掛起來了嗎？", 9400924);
    npc.sayNextE("#b當然了！", true);
    npc.sayNextE("#face1#……我知道了。我會準時到的。", 9400924);
    player.updateQuestRecordEx(64600, "NpcSpeech", "94009242/" + data);
}