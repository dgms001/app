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
if (player.isQuestStarted(64600) && data.indexOf("94009233") == -1) {
    npc.sayNextE("#face0#啊啊，我聽艾爾賓說了你搬家的事情。呵呵。那個桌子可是我做的。看起來是不是像值300萬金幣？雖然因為是練習用的作品，不能出售…… ", 9400923);
    npc.sayNextE("#face0#總之，待會兒去就行了吧？凱尼斯大叔還沒來，我會轉告他的。", 9400923);
    player.updateQuestRecordEx(64600, "NpcSpeech", "94009233/" + data);
}