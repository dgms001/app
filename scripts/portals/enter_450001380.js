/*     
 *
 *  功能：[消亡旅途]厲諾的欺騙
 *

 */
//這裡有個更換背景音樂處理
if (!"1".equals(player.getQuestRecordEx(34119))) {
    player.changeBGM("Bgm00/Silence");
    player.spawnTempNpc(3003112, 185, 176);
    player.setNpcSpecialAction(3003112, "stand", 999999, false);
    player.setInGameCurNodeEventEnd(true);
    player.setStandAloneMode(true);
    player.setInGameDirectionMode(true, false, false, false);
    npc.setCameraZoom(0, 1650, 0, 75, 176);
    player.setForcedInput(0);
    npc.setDelay(2000);
    npc.sayNextENoEsc("現在只要從這裡出去就是出口了！幸好這裡沒有泥沼怪攔路。", 3003112);
    npc.sayNextENoEsc("好，這邊...", 3003112);
    player.setForcedInput(2);
    npc.setDelay(200);
    player.setForcedInput(0);
    npc.setDelay(1500);
    npc.sayNextENoEsc("…停下。", 3003113);
    player.spawnTempNpc(3003113, -250, 176);
    //player.setNPCForceFlip(3003113, 1);
    player.setNpcSpecialAction(3003113, "damaged", 999999, false);
    player.setForcedInput(1);
    npc.setDelay(150);
    player.setForcedInput(0);
    npc.setCameraZoom(2000, 1000, 0, -200, 117);
    npc.setDelay(1000);
    player.setForcedFlip(-1);
    npc.setDelay(1000);
    //--這裡有一箇紋理處理
    npc.setCameraZoom(0, 1650, 0, -50, 177);
    npc.setDelay(1000);
    npc.sayNextENoEsc("#ho#，相信我，這是陷阱，不能跟著厲諾走。", 3003113);
    npc.setCameraMove(false, 50, 0, 355);
    npc.sayNextENoEsc("找回記憶的泉水…我在那裡找我了我失去的記憶，以及厲諾有關的一切事情。", 3003113);
    npc.sayNextENoEsc("我終於知道為什麼我一直想找回記憶。", 3003113);
    npc.setDelay(500);
    player.updateQuestRecordEx(34119, "1");
    player.changeMap(450001300, 0);
    player.setInGameDirectionMode(false, false, false, false);
    player.setStandAloneMode(false);
} else {
    player.spawnTempNpc(3003112, 185, 176);
    player.setNpcSpecialAction(3003112, "smile2", 999999, false);
    player.spawnTempNpc(3003113, -250, 176);
    //player.setNPCForceFlip(3003113, 1);
    player.setNpcSpecialAction(3003113, "damaged", 999999, false);
    player.setInGameCurNodeEventEnd(true);
    player.setStandAloneMode(true);
    player.setInGameDirectionMode(true, false, false, false);
    npc.setCameraZoom(0, 2000, 0, -50, 177);
    npc.setDelay(1000);
    npc.sayNextENoEsc("#face0#你還活著回來了…那個時候應該把你徹底剷除掉的。不過，沒關係。", 3003112);
    npc.sayNextENoEsc("#face0#現在反正你們都是要死的人了…咳咳……", 3003112);
    npc.sayNextENoEsc("#face0#阿勒瑪，好了，快吸收能量吧！", 3003112);
    player.spawnTempNpc(3003144, 736, 177);
    npc.setCameraZoom(1500, 975, 0, -50, 90);
    npc.setDelay(1500);
    npc.sayNextENoEsc("啊，不可以…——#ho#！", 3003113);
    npc.setCameraMove(false, 180, 300, 177);
    npc.setDelay(2000);
    player.setNpcSpecialAction(3003144, "attack", 0, false);
    npc.setDelay(1000);
    player.setLayerOn(500, "11", 0, 0, -1, "Map/Effect2.img/BlackOut", 4, true, -1, false, 0, 0);
    npc.setDelay(500);
    player.setLayerOn(500, "2", 0, -80, -1, "Map/Effect2.img/ArcaneRiver1/arma", 4, true, -1, false, 0, 0);
    npc.setDelay(3000);
    npc.sayNextENoEsc("——#ho#！", 3003113);
    player.setNpcSpecialAction(3003113, "lying", 999999, false);
    npc.setDelay(1000);
    player.setLayerOff(300, "11");
    player.setLayerOff(300, "2");
    player.destroyTempNpc(3003112);
    player.destroyTempNpc(3003113);
    player.destroyTempNpc(3003144);
    player.changeMap(450001219, 0);
    if (!player.isQuestCompleted(34119) && player.isQuestCompleted(34118)) {
        player.startQuest(34119, 0);
    }
    npc.setCameraMove(true, 0, 0, 0);
    player.setInGameDirectionMode(false, false, false, false);
    player.setStandAloneMode(false);
}