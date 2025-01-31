var str = "<石頭剪刀布>\r\n請注意管理員開啟活動，並且及時報名！"
var event = npc.getEvent("event_rps");
if (map.getId() == 993030000) {
    if (event == null) {
        npc.say(str + "\r\n暫未開啟活動");
        if (player.isGm()) {
            var YN = npc.askYesNo("是否開啟石頭剪刀布活動？")
            if (YN == 1) {
                if (npc.makeEvent("event_rps", true, player) == null) {
                    npc.say("已經開始了");
                    player.changeMap(993030200);
                } else {
                    npc.broadcastPlayerNotice(13, "[全服活動-拳皇爭霸賽]: <拳皇爭霸賽>活動入場倒計時1分鐘，請點前往[頻道1]-拍賣<所有活動-拳皇爭霸>進入進行報名參與！ ");
                    npc.broadcastPlayerNotice(13, "[全服活動-拳皇爭霸賽]: <拳皇爭霸賽>活動入場倒計時1分鐘，請點前往[頻道1]-拍賣<所有活動-拳皇爭霸>進入進行報名參與！ ");
                    npc.broadcastPlayerNotice(13, "[全服活動-拳皇爭霸賽]: <拳皇爭霸賽>活動入場倒計時1分鐘，請點前往[頻道1]-拍賣<所有活動-拳皇爭霸>進入進行報名參與！ ");
                    npc.broadcastPlayerNotice(13, "[全服活動-拳皇爭霸賽]: <拳皇爭霸賽>活動入場倒計時1分鐘，請點前往[頻道1]-拍賣<所有活動-拳皇爭霸>進入進行報名參與！ ");


                }
            }
        }
    } else {
        /*
        if(player.isGm()){
            if(npc.askYesNo("是否結束掉副本(如果是GM報名，則不要結束！點‘否’就行了)？") == 1){
                event.destroyEvent();
            }
        }
        */

        var canPut = event.getVariable("canPut");
        if (canPut == "1") {
            var playersName = "";
            var players = event.getVariable("players");
            var playerL = players.length;
            for (var i = 0; i < playerL; i++) {
                try {
                    playersName += players[i].getId() + "." + players[i].getName() + "  "
                } catch (e) {
                    players.splice(i, 1);
                }
            }
            if (player.isGm()) {
                str += "報名人數:" + playerL + "\r\n" + playersName + "\r\n#L0#報名#l"
            } else {
                str += "\r\n#L0#報名#l"
            }
            var selected = npc.askMenu(str);
            if (selected == 0) {
                var players = event.getVariable("players");
                var index = -1;
                for (var i = 0; i < players.length; i++) {
                    if (players[i].getId() == player.getId()) {
                        index = i;
                        break;
                    }
                }
                if (index == -1) {
                    players.push(player);
                    event.setVariable(player.getName() + "Reward", 0);
                    player.updateQuestRecordEx(100624, "point", "0");
                    npc.say("報名成功");
                } else {
                    npc.say("已經報名過了！請等待！")
                }
            }
        } else {
            var playerReward = event.getVariable(player.getName() + "Reward");
            if (playerReward == 0) {
                var str = "人太多？沒有進去到？\r\n#L0#我就是要進去#l"
                if (npc.askMenu(str) == 0) {
                    var players = event.getVariable("players");
                    var index = -1;
                    for (var i = 0; i < players.length; i++) {
                        if (players[i].getId() == player.getId()) {
                            index = i;
                            break;
                        }
                    }
                    if (index == -1) {
                        npc.say("你沒有報名，進不去的。")
                    } else {
                        player.changeMap(993030200);
                    }

                }
            } else {
                npc.say("獎勵都領了，你進不去了")
            }
            //npc.say("報名時間已過。")
        }
    }
} else if (map.getId() == 993030100) {
    if (npc.askYesNo("是否領取獎勵？(點否回到自由)") == 1) {
        player.runScript("rps獎勵")
    } else {
        if (npc.askYesNo("確定回去了？") == 1) {
            player.changeMap(910000000)
        }
    }
} else {
    npc.say("冒險家，加油吧！")
}
