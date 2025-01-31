/*     
 *
 *  功能：[消亡旅途]厲諾的欺騙
 *

 */

//這裡有個更換背景音樂處理
//player.changeBGM("Bgm00/Silence");
//這裡有個地圖名稱處理

player.spawnTempNpc(3003112, -80, 210);
player.setNpcSpecialAction(3003112, "stand", 9999999, false);
//player.setNPCForceFlip(3003112, 1);
player.spawnTempNpc(3003113, 78, 210);
player.setNpcSpecialAction(3003113, "stand", 9999999, false);
//player.setNPCForceFlip(3003113, -1);
player.setInGameCurNodeEventEnd(true);
player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
player.setVansheeMode(true);
npc.setCameraZoom(0, 1950, 0, 0, 210);
player.setForcedInput(0);
npc.setDelay(2000);
npc.sayNextENoEsc("好了，就是這裡，請靜靜看著泉水。", 3003112);
player.showTrembleEffect(true, 500);//抖動效果似乎無效
npc.setCameraZoom(0, 2500, 0, 0, 210);
//紋理處理--缺失這個函式
npc.setDelay(1000);
npc.setCameraZoom(0, 1950, 0, 0, 210);
npc.sayNextENoEsc("啊... 哦... 我的頭好像要炸開來了。", 3003113);
player.setLayerBlind(true, 150, 1000);
player.changeBGM("Bgm26/DarkMage");
player.setLayerOn(1000, "0", 0, -80, -1, "Map/Effect2.img/ArcaneRiver1/past", 4, true, -1, false, 0, 0);
npc.setDelay(1000);
npc.sayNextENoEsc("...黑魔法師？神祕河的盡頭... 決定性的力量... 未來...", 3003113);
npc.sayNextENoEsc("我現在知道了。我…", 3003113);
npc.sayNextENoEsc("未來的——#ho#…正在神祕河畔的盡頭和黑魔法師進行戰鬥……並且戰敗了…", 3003113);
npc.sayNextENoEsc("由於缺乏戰勝黑魔法師的決定性力量…", 3003113);
npc.sayNextENoEsc("…第一個環節就出了錯…那就是我被阿勒瑪的部下厲諾給欺騙了！", 3003113);
npc.sayNextENoEsc("我用盡最後的力氣，一定要回到過去。就是要讓——#ho#，不要因為過去的我而做出錯誤的選擇…", 3003113);
player.setLayerOff(300, "0");
player.setLayerBlind(false, 255, 0);
//player.teleportToPos(3, 1, sh.newPoint(78, 208));
player.setForcedFlip(-1);
player.setNpcSpecialAction(3003113, "quest", 9999999, false);
npc.sayNextENoEsc("歷諾… 阿勒瑪… 對於——#ho#結局不會改變！", 3003113);
npc.sayNextENoEsc("…我不會讓你們所願的…！", 3003113);
player.setNpcSpecialAction(3003112, "smile2", 9999999, false);
npc.sayNextENoEsc("#face0#怪不得我有不好的感覺.. 你在失去記憶之前，已經被阿勒瑪吸收了所有的能量。", 3003112);
npc.sayNextENoEsc("…咳…咳…", 3003113);
player.showTrembleEffect(true, -1);//抖動效果似乎無效
npc.setCameraZoom(0, 2500, 0, 0, 210);
//紋理處理
npc.setDelay(1500);
npc.setCameraZoom(0, 1950, 0, 0, 210);
npc.sayNextENoEsc("#face0#呼呼，拋開那些沒用的想法。現在的你連你的身體都控制不了。", 3003112);
npc.sayNextENoEsc("#face0#你朋友會被阿勒瑪吸收嗎，變成很好的營養成分。而你… 現在已經沒用了。留著你也沒有什麼好處，你就消失吧。", 3003112);
npc.sayNextENoEsc("#face0#嗯…如果被別人懷疑就不好了，我要弄個假的出來…你現在喊同伴的話，好像太晚了吧。", 3003112);
player.destroyTempNpc(3003112);
player.spawnTempNpc(3003112, -80, 210);
//player.setNPCForceFlip(3003112, 1);
player.setNpcSpecialAction(3003112, "change", 1800, true);
npc.setDelay(1200);
player.showNpcEffectPlay(3003112, "Effect/Direction19.img/effect/rino/0", 600, 50, 0, true, 0, false, 0);
npc.setDelay(600);
//player.showReservedEffect("Effect/Direction19.img/effect/rino/0");
player.setNpcSpecialAction(3003112, "stand2", 9999999, true);
player.spawnTempNpc(3003132, -80, 210);
player.setNpcSpecialAction(3003132, "stand", 9999999, false);
//player.setNPCForceFlip(3003132, 1);
npc.setDelay(2000);
npc.sayNextENoEsc("#face0#走好，從現在開始我的分身將會替代你。", 3003112);
player.setLayerBlind(true, 150, 1000);
player.setLayerOn(1000, "1", 0, 0, -1, "Map/Effect2.img/ArcaneRiver1/fall2", 4, true, -1, false, 0, 0);
npc.setDelay(2000);
player.setLayerBlind(false, 255, 0);
player.changeMap(450001380, 0);
player.setLayerOff(300, "1");
player.setInGameDirectionMode(false, false, false, false);
player.setStandAloneMode(false);
player.setVansheeMode(false);
/*
npc.sayNextENoEsc("好，這邊...", 3003112);
player.setForcedInput(2);
npc.setDelay(200);
player.setForcedInput(0);
npc.setDelay(1500);
npc.sayNextENoEsc("…停下。", 3003113);
player.spawnTempNpc(3003113, -250, 176);
player.setForcedInput(1);
npc.setDelay(150);
player.setForcedInput(0);
//player.setNPCForceFlip(3003113, 1);
player.setNpcSpecialAction(3003113, "damaged", 999999, false);
npc.setCameraZoom(2000, 1000, 0, -150, 117);
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
//--切換地圖
player.setInGameDirectionMode(false, false, false, false);
player.setStandAloneMode(false);
player.changeMap(450001300, 0);
player.scriptProgressMessage("快將卡奧帶到安全的地方。");
/*player.setLayerOn(2000, "0", 0, 0, -1, "Map/Effect2.img/ArcaneRiver1/past", 4);
npc.sayNextENoEsc("未來的——#ho#…正在神祕河畔的盡頭和黑魔法師進行戰鬥……並且戰敗了…", 3003113);
player.setLayerOff(300, "0");
npc.sayNextENoEsc("由於缺乏戰勝黑魔法師的決定性力量…", 3003113);
player.setLayerOn(2000, "1", 0, 0, -1, "Map/Effect2.img/ArcaneRiver1/fall2", 4);
npc.sayNextENoEsc("…第一個環節就出了錯…那就是我被阿勒瑪的部下厲諾給欺騙了！", 3003113);
npc.sayNextENoEsc("我用盡最後的力氣，一定要回到過去。就是要讓——#ho#，不要因為過去的我而做出錯誤的選擇…", 3003113);
npc.sayNextENoEsc("歷諾… 阿勒瑪… 對於——#ho#結局不會改變！", 3003113);
player.setLayerOff(300, "1");
npc.sayNextENoEsc("歷諾… 用她的分身替代了我！", 3003113);
player.setForcedFlip(1);
player.setNpcSpecialAction(3003112, "smile", 999999, false);
npc.sayNextENoEsc("#face0#你還活著回來了…那個時候應該把你徹底剷除掉的。不過，沒關係。", 3003112);
npc.sayNextENoEsc("#face0#現在反正你們都是要死的人了…咳咳……", 3003112);
npc.sayNextENoEsc("#face0#阿勒瑪，好了，快吸收能量吧！", 3003112);
npc.setCameraZoom(1000, 1000, 0, -100, 117);
//npc.setDelay(30);		    
npc.setDelay(500);
npc.sayNextENoEsc("啊，不可以…——#ho#！", 3003113);
player.spawnTempNpc(3003144, 736, 177);
player.setNpcSpecialAction(3003144, "attack", 999999, false);
npc.setCameraMove(false, 180, 300, 177);
npc.setDelay(1000);
player.setLayerOn(2000, "2", 0, 0, -1, "Map/Effect2.img/ArcaneRiver1/arma", 4);
npc.sayNextENoEsc("——#ho#！", 3003113);
player.setNpcSpecialAction(3003113, "lying", 999999, false);
player.setLayerOff(300, "2");
npc.setDelay(500);
if (!player.isQuestStarted(34119) && player.isQuestCompleted(34118)) {
    player.startQuest(34119, 0);
}
player.destroyTempNpc(3003112);
npc.setCameraMove(true, 0, 0, 0);
player.setInGameDirectionMode(false, false, false, false);
player.setStandAloneMode(false);
player.changeMap(450001219, 0);
player.scriptProgressMessage("快將卡奧帶到安全的地方。");*/