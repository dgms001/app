/*     
 *  
 *  功能：[啾啾島]古拉的入侵
 *  

 */

npc.sayNextENoEsc("#face3##r古拉#k…！#r古拉的進攻已經開始了#k！", 3003159);
npc.sayNextENoEsc("#face3##b頂級大廚舔舔#k!給穆託準備的食物完成了嗎？", 3003159);
npc.sayNextENoEsc("#face4#那是當然！你等著瞧吧！穆託那傢伙肯定會好吃到#b手舞足蹈#k的！", 3003168);
npc.sayNextENoEsc("#face3##b噢…！那真是太好了…！不過，那個#b小旅行者#k還沒有做好嗎..？", 3003159);
npc.sayNextENoEsc("#face5#哈哈！！那傢伙肯定被嚇的餐起來了！\r\n那個連味道都不會品嚐的傢伙，居然還想教訓我，\r\n現在終於露出本性了吧！", 3003168);
npc.sayNextENoEsc("#face3#是嗎…我們先帶著你的食物，去找穆託吧！", 3003159);
npc.sayNextENoEsc("等…等一下！！料理…！料理已經完成了…！", true);
npc.sayNextENoEsc("#face1#噢！你來啦？！", 3003159);
npc.sayNextENoEsc("嗬…嗬嗯..！我們快去找穆託吧..", true);
npc.sayNextENoEsc("#face4#什麼啊！你做好的料理在哪裡呢！難道又跟上次一樣，做的食物都不夠穆託塞牙縫的..！", 3003168);
npc.sayNextENoEsc("嗬…嗬嗯…我準備了會讓你們#b大吃一驚的食物... #k而且，我還找到了很會做料理的#b幫手#k...", true);
npc.sayNextENoEsc("#face3#哦！#b幫手#k…？這麼短的時間裡！你說的幫手是誰啊？", 3003159);
npc.sayNextENoEsc("#face5#哈哈！！你這個說謊精！在這啾啾島，沒有人比我更會做料理了！", 3003168);
npc.sayNextENoEsc("噢噢噢…！沒有時間了，我們先去找穆託吧！我已經讓我的#b幫手#k把食物拿過去了！", true);
npc.startQuest();
npc.completeQuest();
player.changeMap(450002021, 0);
player.gainExp(315000000);
