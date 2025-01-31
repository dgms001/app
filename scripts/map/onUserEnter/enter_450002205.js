/*     
 *
 *  功能：[啾啾]循著美味而來
 *

 */
if (player.isQuestStarted(34206)) {
    player.setInGameCurNodeEventEnd(true);
    player.setStandAloneMode(true);
    player.setInGameDirectionMode(true, false, false, false);
    player.spawnTempNpc(3003160, 678, -76);
    player.setNpcSpecialAction(3003160, "summon", 0, true);

    player.spawnTempNpc(3003162, 758, -76);
    player.setNpcSpecialAction(3003162, "summon", 0, true);

    player.spawnTempNpc(3003163, 818, -76);
    player.setNpcSpecialAction(3003163, "summon", 0, true);

    player.spawnTempNpc(3003164, 878, -76);
    player.setNpcSpecialAction(3003164, "summon", 0, true);
    //player.playBGM("Bgm46/ChewChew MainTheme");
    player.setForcedInput(0);
    point = 0;
    npc.setDelay(100);
    player.setInGameCurNodeEventEnd(true);
    npc.setDelay(2000);
    npc.sayNextENoEsc("那…那個…", true);
    npc.sayNextENoEsc("#face0#什…什麼啊！是妨礙我們吃飯的#b小偷#k嗎？！！。", 3003153);
    npc.sayNextENoEsc("#face0#怎麼可能~猴姐的食物#b只有我們才能吃下去#k啊~如果你是來偷東西的~#r我不會放過你的#k...（怕不怕頭跟老三一樣...）", 3003154);
    npc.sayNextENoEsc("不是這樣的…我只是路過的旅行者而已...我聞到了美食的味道，所以想過來看看能不能蹭點吃的...", true);
    npc.sayNextENoEsc("#face0#我們的…食…物應該#b不合你口味#k…你肯定吃不下的…吧？呵呵？", 3003155);
    npc.sayNextENoEsc("不會的啦..這食物味道#b這麼香#k，怎麼可能不好吃...", true);
    npc.sayNextENoEsc("#face0#我拒絕！！！", 3003153);
    npc.sayNextENoEsc("#face3#嗶比啊~難得有客人來，你不能這麼無禮~", 3003160);
    npc.sayNextENoEsc("#face3#看你好像不是這裡的人…就像小雞們所說的，我做的食物應該#b不合你的口味#k~", 3003160);
    npc.sayNextENoEsc("就…就一口...", true);
    npc.sayNextENoEsc("#face3#嗯~你好像很餓，你先嚐嘗吧。", 3003160);
    npc.sayNextENoEsc("謝…謝謝...", true);
    player.showNpcEffectPlay(3003164, "Effect/OnUserEff.img/emotion/oh", 0, 0, -30, true, 0, false, 0);
    npc.sayNextENoEsc("啊…這...", true);
    npc.sayNextENoEsc("#face3#你瞧吧~我們和其他村民的口味完全不同。我們的食物你是吃不下去的~", 3003160);
    npc.sayNextENoEsc("你在說什麼啊？！我還是第一次吃到#b這麼好吃的食物#k！", true);
    npc.sayNextENoEsc("#face0#你撒謊！！", 3003153);
    npc.sayNextENoEsc("我沒有撒謊...這味道真的很贊！比我剛剛吃的#b頂級大廚舔舔#k做的食物要好吃太多！不，#b簡直是沒法比較嘛#k！", true);
    npc.sayNextENoEsc("#face0#你怎麼對我們說話這麼隨便？", 3003154);
    npc.sayNextENoEsc("#face3#嗶比，嗶美！你們不要這麼對待客人~不過，你認識我們#b主廚#k嗎？", 3003160);
    npc.sayNextENoEsc("嗯…其實發生了這樣的事情...", true);
    player.scriptProgressMessage("講述剛才發生的事情...");
    npc.setDelay(2000);
    npc.sayNextENoEsc("#face3#啊哈…你經歷了這樣的事啊...", 3003160);
    npc.sayNextENoEsc("#face3##b穆託#k不吃東西，這真是太糟糕了…旅行者你好像也要儘快離開這裡，前往其他地方你肯定很為難吧...", 3003160);
    npc.sayNextENoEsc("#face3#不過，你說穆託很喜歡你帶來的食物，這是真的嗎？", 3003160);
    npc.sayNextENoEsc("嗯！沒錯！雖然只有一點，但他說我的#b三明治#k很好吃！！", true);
    npc.sayNextENoEsc("#face3#你能把那個三明治給我們嚐嚐嗎？", 3003160);
    npc.sayNextENoEsc("嗯…我這裡還有一點其他村民吃剩下的....", true);
    npc.sayNextENoEsc("#face0#啊！這些足夠了~\r\n我們的小雞三兄妹在#b品嚐味道方面#k可是高手！", 3003160);
    npc.sayNextENoEsc("#face0#還有，雖然我只是#b廚房助手#k，但怎麼說我也在餐廳工作！！", 3003160);
    npc.sayNextENoEsc("#face0#好了~孩子們！我們一起嚐嚐這食物吧~", 3003160);
    npc.sayNextENoEsc("#face0#嗯…這味道真是…太棒了！", 3003153);
    npc.sayNextENoEsc("#face0#哇！除了猴姐做的食物之外，我還是第一次吃到這麼好吃的東西呢！", 3003154);
    npc.sayNextENoEsc("#face0#（轉了起來！）真好吃！", 3003155);
    npc.sayNextENoEsc("#face0#真的很好吃耶！我還是第一次嚐到這種味道！", 3003160);
    npc.sayNextENoEsc("#face3#我知道了，旅行者！你也跟我們一樣#b口味獨特#k！", 3003160);
    npc.sayNextENoEsc("嗯…我口味算不上獨特吧...", true);
    npc.sayNextENoEsc("#face3#不！覺得這種食物好吃的人，肯定是#r口味獨特#k的人！", 3003160);
    npc.sayNextENoEsc("#face0#很高興遇到你，同志。", 3003153);
    npc.sayNextENoEsc("#face3#啊哈，你看看我這腦袋。\r\n我們還沒有自我介紹吧？我叫#b猴姐#k，我在頂級大廚舔舔的廚房中擔任#b廚房助手#k。他們是小雞三兄妹，和我生活在一起。", 3003160);
    npc.sayNextENoEsc("#face3#我們四個和旅行者你一樣，#r口味獨特#k。所以，我們要跟村裡的人吃不同的食物。", 3003160);
    npc.sayNextENoEsc("#face0#為此....我…我們被…趕出來了…現在單獨生活…呵呵呵", 3003155);
    npc.sayNextENoEsc("#face3#其他村民跟我們吃#b不同的食物#k…所以覺得我們#b很奇怪#k，不想和我們生活在一起... 所以，我就帶著這些孩子到村子外面生活。", 3003160);
    npc.sayNextENoEsc("果然…村民們果然有著奇怪的味覺…！", true);
    npc.sayNextENoEsc("#face3#口味奇怪的人是#b我們#k…所以，雖然我想成為一名#b廚師#k，但只能當個#b廚房助手#k...", 3003160);
    npc.sayNextENoEsc("奇怪的人…不是你，而是其他村民…你的食物就算直接拿到#bLSLMapleStory世界#k也會有很高的人氣的！", true);
    npc.sayNextENoEsc("#face3#哈哈…雖然不知道那是什麼地方，但聽你到你這麼說，我覺得很開心。不過，我現在沒那麼悲傷了。因為有這些#b喜歡吃我做的食物的小雞們#k在我身邊~", 3003160);
    npc.sayNextENoEsc("#face0#沒錯~姐姐做的食物是最棒的！", 3003154);
    npc.sayNextENoEsc("嗯…居然就因為口味不同，而被趕出村莊...", true);
    npc.sayNextENoEsc("#face3#並不是廚師就要做出#b所有人都愛吃的#k食物啊？\r\n所有活著的生命都會肚子餓…肚子餓就要吃東西，每個人都可以選擇自己覺得#b好吃~的食物#k。", 3003160);
    npc.sayNextENoEsc("#face0#有這些孩子喜歡吃我做的食物，我就已經夠幸福了。", 3003160);
    npc.sayNextENoEsc("#face0#雖然量有點少，但是味道沒的說！", 3003153);
    npc.sayNextENoEsc("嗯…我現在終於大致瞭解情況了...穆託為什麼會喜歡我的食物，不喜歡村民們給他的食物...", true);
    npc.sayNextENoEsc("穆託肯定和我們一樣#r口味獨特#k（？）...", true);
    npc.sayNextENoEsc("你叫做猴姐？請你幫幫我！據說3天后#r古拉#k會發起進攻，在此之前，你能和我一起製作#b穆託愛吃的食物#k嗎？", true);
    npc.sayNextENoEsc("#face3#你說穆託... #b口味獨特#k，這真讓我意外... 穆託一直在吃頂級大廚舔舔做的食物啊？", 3003160);
    npc.sayNextENoEsc("不是的... 穆託確實#b口味獨特#k！從他喜歡我的食物這一點就能看出來！", true);
    npc.sayNextENoEsc("#face3#不過，我不是#b正式廚師#k…如果我擅自做料理，肯定會被#b頂級大廚舔舔#k罵的...", 3003160);
    npc.sayNextENoEsc("你是不是正式出事並不重要…如果是在我來的世界，#b猴姐#k你會成為比#b頂級大廚舔舔#k更優秀的主廚。", true);
    npc.sayNextENoEsc("還有，如果是真正的#b廚師#k沒看到穆託餓了這麼多天，肯定會為他做點食物的吧…？就算穆託#b不愛吃#k...", true);
    npc.sayNextENoEsc("#face3#...", 3003160);
    npc.sayNextENoEsc("#face3#旅行者，你說的好像沒錯...", 3003160);
    npc.sayNextENoEsc("#face3#就算穆託不喜歡我的料理…我也要試著為#b餓了好幾天的穆託#k製作食物...", 3003160);
    npc.sayNextENoEsc("#face0#沒錯！穆託那傢伙肯定也會喜歡姐姐你做的料理的！", 3003153);
    npc.sayNextENoEsc("謝謝你！猴姐！你的選擇是對的！", true);
    npc.sayNextENoEsc("#face0#不過，要做#b什麼料理#k呢？", 3003154);
    npc.sayNextENoEsc("嗯... #b三明治#k！我們就做三明治吧！反正，穆託也#b喜歡吃三明治#k。", true);
    npc.sayNextENoEsc("#face0#呵呵呵~三... 三明治... 如果做的大一些…嗯嗯…應該很好吃！", 3003155);
    npc.sayNextENoEsc("#face0#好的，那我們就試著做那個#b三明治#k吧！\r\n為了讓穆託吃飽，一定要做得#b非常~大#k才行！", 3003160);
    npc.sayNextENoEsc("#face3#小雞們對#b食物的味道#k非常敏感，所以你們快告訴我們剛剛那個三…明治和哪些材料的味道相似！", 3003160);
    npc.sayNextENoEsc("#face0#好的！", true);
    npc.sayNextENoEsc("#face0#哇~ 我們要給穆託做食物了！我真的好期待啊，姐姐！", 3003154);
    npc.sayNextENoEsc("#face0#轉轉轉轉轉（肯定很好吃！）", 3003155);
    player.destroyTempNpc(3003160);
    player.destroyTempNpc(3003162);
    player.destroyTempNpc(3003163);
    player.destroyTempNpc(3003164);
    //player.forceStartQuest(39365);
    //player.scriptProgressMessage("現在，在啾啾島打獵可以獲取神祕徽章了。");
    if (player.isQuestStarted(34206)) {
        player.startQuest(34206, 0);
        player.completeQuest(34206, 0);
        player.gainExp(280000000);
    }
    player.changeMap(450002023, 0);
    player.setInGameCurNodeEventEnd(true);
    player.setInGameDirectionMode(false, false, false, false);

} else if (player.isQuestCompleted(34215)) {
    player.setInGameCurNodeEventEnd(true);
    player.setStandAloneMode(true);
    player.setInGameDirectionMode(true, false, false, false);
    player.spawnTempNpc(3003160, 678, -76);
    player.setNpcSpecialAction(3003160, "summon", 0, false);

    player.spawnTempNpc(3003162, 758, -76);
    player.setNpcSpecialAction(3003162, "summon", 0, true);

    player.spawnTempNpc(3003163, 818, -76);
    player.setNpcSpecialAction(3003163, "summon", 0, true);

    player.spawnTempNpc(3003164, 878, -76);
    player.setNpcSpecialAction(3003164, "summon", 0, true);
    player.setForcedInput(0);
    npc.setDelay(100);
    player.setInGameCurNodeEventEnd(true);
    npc.setDelay(2000);
    npc.sayNextENoEsc("#face0#旅行者！你這麼快就蒐集到#b#z4034958##k啦！！", 3003160); //0 怒 1哭 2哭 3笑 4正常	
    npc.sayNextENoEsc("#face3#那讓我們來嚐嚐加入呲溜果後#b三明治#k的味道吧？", 3003160);
    npc.sayNextENoEsc("#face0#我…我先吃…我先吃~呵呵呵", 3003155);
    npc.sayNextENoEsc("#face0#嗯嗯...吧嗒吧嗒...", 3003155);
    //--感歎號
    npc.setCameraZoom(800, 1500, 0, 878, -76);
    player.showNpcEffectPlay(3003164, "Effect/OnUserEff.img/emotion/oh", 900, 0, 0, false, 0, false, 0);
    npc.sayNextENoEsc("#face0##fs42#！！！", 3003155);
    //player.setNPCForceFlip(3003160, 1);
    npc.setDelay(2000);
    npc.sayNextENoEsc("#face3#嗶嘟啊~你怎麼拉！", 3003160);
    npc.sayNextENoEsc("#face0#啊…這味道真的是…已經到了我無法用語言形容的…地步... 它的香味令人沉醉... 口感酥脆，同時又不缺乏嚼勁…它出動著我的味蕾，讓我有一種飄飄然的感覺…啊…！此味只應天上有，人間難得幾回嘗！", 3003155);
    //npc.setCameraZoom(800, 1000, 0, 878, -76);
    npc.sayNextENoEsc("#face0#嗶嘟啊！你恢復理智啦！", 3003154);
    npc.sayNextENoEsc("#face0#嗯嗯嗯？？什..什麼？呵呵！", 3003155);
    npc.sayNextENoEsc("#face3#希望穆託會喜歡我們做的#b三明治#k。", 3003160);
    //--震動
    player.showTrembleEffect(true, 500); //地圖震動
    player.scriptProgressMessage("大地開始震動……");
    npc.setDelay(2000);
    player.showTrembleEffect(true, 500); //地圖震動	
    npc.sayNextENoEsc("#face0#怎麼回事…！我怎麼這麼緊張！", 3003155);
    npc.sayNextENoEsc("#face0#哥哥…！看來#r古拉#k已經開始行動了！", 3003154);
    npc.setDelay(1000);
    npc.sayNextENoEsc("#face3#看來古拉已經開始攻擊了，旅行者！你快去找#b瑞昂#k長老吧！我和孩子們先帶著食物去找穆託！", 3003160);
    player.destroyTempNpc(3003160);
    player.destroyTempNpc(3003162);
    player.destroyTempNpc(3003163);
    player.destroyTempNpc(3003164);
    player.changeMap(450002023, 0);
    player.setInGameCurNodeEventEnd(true);
    player.setInGameDirectionMode(false, false, false, false);
}