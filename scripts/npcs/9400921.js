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
if (player.isQuestStarted(64600) && data.indexOf("94009214") == -1) {
    npc.sayNextE("#face1#你回來了啊？", 9400921);
    npc.sayNextE("#face0#啊，我都激動起來了！對了，你沒有別的要邀請的朋友嗎？", 9400921);

    player.setLayerOn(900, "0", 0, -80, 12, "Effect/DirectionWz2.img/effect/myHomeTuto/4", 4, true, -1, false, 0, 0);
    npc.sayNextENoEsc("#face1#好友邀請，只要在點選我的小屋選單的#i3801393#按鍵後，輸入好友的角色名字就能邀請了。。", 9400921);
    npc.sayNextENoEsc("#face1#在#b好友名單視窗#k或者#b聊天視窗#k中右鍵點選好友的角色名字，然後點選[我的小屋邀請]按鍵也能進行邀請。", 9400921);
    player.setLayerOff(1000, "0");
    npc.sayNextE("#face1#那你下次再邀請吧。", 9400921);
    npc.sayNextE("#face1#好的，現在只要等人來就可以了。", 9400921);
    player.updateQuestRecordEx(64600, "NpcSpeech", "94009214/" + data);
    player.completeQuest(64600, 0);
}