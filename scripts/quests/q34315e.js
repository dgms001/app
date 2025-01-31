/*      
 *  This source is made by Funqm Team
 *  
 *  功能：[拉克蘭]打碎碟子2
 *  
 *
 */

npc.sayNext("優勝者是派面具！");
npc.sayNext("在那期間食物大戰已經展開了。", 3003203);
npc.sayNext("哇！你看到了嗎？真的是吃個沒完啊！", 3003216);
npc.sayNext("輸了，我居然輸了！我一定要做一屆優勝者的！", 3003238);
npc.sayNextS("雖然打碎了盤子！但就這樣成了冠軍？", false);
npc.sayNext("甚至還不是打碎了所有盤子。", 3003203);
npc.sayNext("終於勝利了……請看著我，仰視我。嗯，我好幸福。");
npc.sayNext("不對啊？好奇怪……我原本就很幸福啊？哦哦！");
player.loseItem(4034982, 20);
npc.completeQuest();
player.setInGameCurNodeEventEnd(true);
player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
player.setLayerBlind(true, 255, 1000);
player.setForcedInput(2000);
//player.setOverlapDetail(0, 200, 200, true);
player.setForcedInput(1);
player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);
//player.setOverlapDetail(0, 200, 200, true);	
//player.removeOverlapDetail(1500);
player.changeMap(450003730, 0);

