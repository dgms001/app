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
if (player.isQuestStarted(64600) && data.indexOf("94009261") == -1) {
    npc.sayNextE("#face0#搬家聚會？那是什麼？", 9400926);
    npc.sayNextE("#b就是搬家後，邀請鄰居們來參觀家裡，再一起吃好吃的。特魯迪只要來玩就可以了。", true);
    npc.sayNextE("#face1#啊，特魯迪十分情願，說要去搬家聚會！", 9400926);
    player.updateQuestRecordEx(64600, "NpcSpeech", "94009261/" + data);
}