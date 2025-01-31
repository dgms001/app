/**
 *
 *
 */

let count = 0;
var event = npc.getEvent();
if (event != null) {
    var questTData = event.getVariable("s36QuestT");
    var questT = parseInt(Math.random() * 3) + 3;//隨機生成 需要回答幾次
    if (questTData != null) {
        questT = parseInt(questTData);
    } else {
        event.setVariable("s36QuestT", String(questT));
        event.setVariable("s36phase", String(0));
    }
    var s36phase = parseInt(event.getVariable("s36phase"));
    if (s36phase < questT) {
        event.setVariable("s36Check", "");
        event.setVariable("s36Now", "0");
        event.setVariable("s36Answer", "");
        player.setInGameCurNodeEventEnd(true);
        player.setInGameDirectionMode(true, true, false, false);
        player.setInGameCurNodeEventEnd(true);
        npc.sayNextNoEsc("我將為你展示需要攻擊的怪物的組合，請看清楚，如果你忘記了或答錯了，請再次與我對話，將重新開始挑戰！準備好了就開始吧！");
        count = parseInt(Math.random() * 10) + 4;//生成需要攻擊的怪物總次數
        event.setVariable("s36Count", String(count));

        player.showWeatherEffectNotice("那麼請準備好，即將開始！", 149, 3000);
        // player.showScreenAutoLetterBox( "Map/Effect2.img/aquaris/36F_" + rand, 0);//顯示圖案

        npc.setDelay(3000);
        var now = parseInt(event.getVariable("s36Now"));
        stage36();
    } else {
        npc.say("你已經透過了我的考驗快進入下一箇階段吧！");
    }
}

function stage36() {
    if (now < count) {
        now += 1; //第幾個
        var rand = parseInt(Math.random() * 4) + 1;//第幾個圖案
        event.setVariable("s36Check", event.getVariable("s36Check") + rand);//寫入記錄
        event.setVariable("s36Now", String(now));//寫入記錄
        player.showWeatherEffectNotice("這個第" + now + "個提示！", 149, 1000);//顯示提示
        player.showScreenAutoLetterBox("Map/Effect2.img/aquaris/36F_" + rand, 0);//顯示圖案
        npc.setDelay(2000);
        stage36();
    } else {
        player.setInGameCurNodeEventEnd(true);
        player.setInGameDirectionMode(false, false, false, false);
        if (player.isGm()) {
            player.showWeatherEffectNotice("[起源之塔36層 答案] " + event.getVariable("s36Check"), 149, 15000);//顯示提示
        }
    }
}