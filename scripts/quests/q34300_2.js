/*     
 *  
 *  功能：[拉克蘭]慶典正酣之都
 *  

 */

npc.sayNext("你是從外面進來的嗎？");
npc.sayNextS("？", false);
npc.sayNext("這個地方很危險…該死，已經晚了。");
player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
player.setLayerBlind(true, 255, 1000);
player.setForcedInput(1000);
//player.setOverlapDetail(0, 500, 500, true);	
//player.removeOverlapDetail(1500);
npc.completeQuest();
player.changeMap(450003710, 0);
player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);