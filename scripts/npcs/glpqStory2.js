var event = npc.getEvent("CWKPQ");
if (event != null) {
    if (event.getVariable("glpq6").equals("0")) {
        npc.sayNext("歡迎來到宗師議會大廳。我將是今晚的主持人……");
        npc.sayNext("今晚,我們有一箇可怕的陣容 . .啊哈哈哈……");
        npc.sayNext("讓我們受過專門訓練的怪物陪同你!");
        map.broadcastEventNotice("預備 !消滅地圖上所有的怪物!");
        for (var i = 0; i < 10; i++) {
            var boss = map.makeMob(9400594);
            map.spawnMob(boss, -1337 + (Math.random() * 1337), 276);
        }
        for (var i = 0; i < 20; i++) {
            var boss = map.makeMob(9400582);
            map.spawnMob(boss, -1337 + (Math.random() * 1337), 276);
        }
        event.setVariable("glpq6", "1");

    } else if (event.getVariable("glpq6").equals("1")) {
        if (map != null && map.getEventMobCount() == 0) {
            npc.sayNext("呃,這是什麼?你已經擊敗他們嗎?");

            npc.sayNext("嗯,不管!緋紅的主人會很高興歡迎你。");
            map.broadcastEventNotice("緋紅的主人的出現了!");

            var boss = map.makeMob(9400589);
            boss.changeBaseHp(92000059000000);
            map.spawnMob(boss, -1000, 276);

            var boss = map.makeMob(9400590);
            boss.changeBaseHp(92000059000000);
            map.spawnMob(boss, -22, 1);

            var boss = map.makeMob(9400591);
            boss.changeBaseHp(92000059000000);
            map.spawnMob(boss, -22, 276);

            var boss = map.makeMob(9400593);
            boss.changeBaseHp(92000059000000);
            map.spawnMob(boss, 496, 276);

            var boss = map.makeMob(9400592);
            boss.changeBaseHp(92000059000000);
            map.spawnMob(boss, -496, 276);

            for (var i = 0; i < 50; i++) {
                var boss = map.makeMob(9309210);
                map.spawnMob(boss, -1337 + (Math.random() * 3290), 276);
            }
            event.setVariable("glpq6", "2");

        } else {
            npc.say("地圖上還有許多怪物呢！");
        }
    } else if (event.getVariable("glpq6").equals("2")) {
        if (map.getEventMobCount() == 0) {
            npc.say("什麼?啊…這個不可能發生。你居然擊敗了他們。");
            map.screenEffect("quest/party/clear");//透過
            //cm.playFieldSound("Party1/Clear");
            map.blowWeatherEffectNotice("門已經開啟到下一箇階段了", 162, 15000);
            event.setVariable("glpq6", "3");
        } else {
            player.setHp(100000);
            player.setMp(100000);
            npc.say("已為您恢復了10萬生命值和10萬藍值，請加油對抗強大的緋紅BOSS吧！");
            //cm.updateItevent(2000005);
            //cm.sendOk("已為您恢復了10萬生命值和10萬藍值，請加油對抗強大的緋紅BOSS吧！");
            //cm.dispose();
        }
    } else {
        npc.say("請移動到下一關卡。");
    }
}

 
