/**
 *  Gatekeeper, Sharenian: Door to the Sharenian Castle (990000300)
 *
 */

let testCount = 2;

let event = npc.getEvent("guild_quest");
if (event != null) {
    let leader = event.getVariable("leader");
    let state = event.getVariable("state_s1");
    if (leader.equals(player.getName())) {
        if (state == null) {
            event.setVariable("stone_move", 0);
            event.setVariable("state_s1", "0");
            event.setVariable("gate_count", 0);
            event.setVariable("check", "");
            event.setVariable("check_idx", 0);
            event.setVariable("combo", "");
            npc.sayNext("歡迎來到第一關！\r\n在這裡我將會好好考驗你們的觀察力！看到在我身邊的石像了嗎？我會移動這些石像，當我發起命令的時候，請重複剛才石像移動的軌跡。");
        } else {
            action();
        }
    } else {
        npc.say("歡迎來到第一關！\r\n在這裡我將會好好考驗你們的觀察力！看到在我身邊的石像了嗎？我會移動這些石像，當我發起命令的時候，請重複剛才石像移動的軌跡。");
    }
} else {
    npc.say("發生未知錯誤，請離開後重新進入。");
}


function action() {
    let move = event.getVariable("stone_move");
    switch (move) {
        case 0://未移動
            let ret = npc.askYesNo("希望接下來你能透過我的挑戰，祝你好運！是否開始挑戰？");
            if (ret == 1) {
                event.setVariable("stone_move", 1);
                event.startTimer("s1_gate_check", 3500);
                map.scriptProgressMessage("石像將在3秒後進行移動，請注意觀察！");
                map.broadcastEventNotice("石像將在3秒後進行移動，請注意觀察！");
            }
            break;
        case 1://移動中
            npc.sayNext("石像已經在移動中！請注意觀察！");
            break;
        case 2://移動結束 進行檢查
            let check = event.getVariable("check");
            let combo = event.getVariable("combo");
            if (combo.equals(check)) {
                let gate_count = parseInt(event.getVariable("gate_count")) + 1;
                if (gate_count < testCount) {
                    event.setVariable("gate_count", gate_count);
                    event.setVariable("stone_move", 0);
                    event.setVariable("check", "");
                    event.setVariable("check_idx", 0);
                    event.setVariable("combo", "");
                    npc.sayNext("非常好！但是你還得完成接下來的階段。 \r\n如果你準備好的話，請再跟我談話。");
                } else {
                    event.setVariable("stone_move", 3);
                    event.setVariable("state_s1", "clear");
                    map.setReactorState("statuegate", 1, 0);
                    map.soundEffect("Party1/Clear");
                    map.screenEffect("quest/party/clear");
                    player.gainGuildCommitment(100);
                    npc.sayNext("幹得漂亮！你已經完成了我對你們的考驗，現在可以透過這個門了，請進入下一箇地圖迎接挑戰吧！");
                }
            } else {
                event.setVariable("gate_count", 0);
                event.setVariable("stone_move", 0);
                event.setVariable("check", "");
                event.setVariable("check_idx", 0);
                event.setVariable("combo", "");
                map.scriptProgressMessage("沒有透過守門人的考驗！");
                map.broadcastEventNotice("沒有透過守門人的考驗！");
                npc.sayNext("錯誤的答案！請重新和我對話繼續接受我的測試。");
            }
            break;
        case 3://完成了所有階段
            npc.sayNext("你已經完成了我對你們的考驗，請快進入下一箇地圖迎接挑戰吧！");
            break;
    }
}

