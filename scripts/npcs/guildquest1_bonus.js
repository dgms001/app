/**
 *  Gatekeeper, Sharenian: Door to the Sharenian Castle (990000600)
 *
 *
 */
let event = npc.getEvent("guild_quest");
if (event != null) {
    let boss = event.getVariable("boss");
    let leader = event.getVariable("leader");
    if (leader.equals(player.getName())) {
        if (boss == null) {
            event.setVariable("boss", "o");
            npc.say("這裡是最後的挑戰了！ 打敗黑暗領主之後給我#t4001024#！");
        } else if ("clear".equals(boss)) {
            if (event.getVariable("allReward") != "1") {
                npc.say("恭喜你們打敗黑暗領主!!點選確定即可領取獎勵!!(所有人員都可領取，並且傳送到獎勵地圖)");
                event.setVariable("allReward", "1");
                let members = event.getVariable("members");
                for (let i = 0; i < members.length; i++) {
                    members[i].changeMap(990001000);
                    members[i].runScript("家族任務獎勵");
                }
                var rewardTime = 5 * 60 * 1000;//5分鐘限制獎勵時間
                let map = event.getMap(990001000);
                map.scriptProgressMessage("傳送到獎勵地圖，你有5分鐘時間");
                map.broadcastEventNotice("傳送到獎勵地圖，你有5分鐘時間");
                event.startTimer("kick", rewardTime);
            } else {
                npc.say("恭喜你們打敗黑暗領主!!!!你已經領取了獎勵！！點選確定返回組隊大廳");
                player.changeMap(100030301);
            }
        } else if (player.hasItem(4001024, 1)) {
            event.setVariable("boss", "clear");
            player.loseItem(4001024);
            map.soundEffect("Party1/Clear");
            map.screenEffect("quest/party/clear");
            //player.gainGuildCommitment(500);
            npc.say("恭喜你們打敗黑暗領主!!");
        } else {
            npc.say("還在幹什麼？快點打敗黑暗領主之後，然後把#t4001024#交給我！");
        }

    } else {
        if ("clear".equals(boss)) {
            npc.say("讓你們隊長來找我！");
        } else {
            npc.say("這裡是最後的挑戰了！ 打敗黑暗領主之後,收集到#t4001024#，併發起人交給我！");
        }
    }
}
