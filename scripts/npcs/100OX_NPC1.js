let WAIT_FIELD = 910048000;
let EVENT_FIELD = 910048100;
let OUT_FIELD = 910048200;
let event = npc.getEvent("event_oxquiz")

marinStart();

function marinStart() {
    switch (map.getId()) {
        case WAIT_FIELD:

            let text = "#e<OX問答 - 搶先體驗>#n\r\n目前OX問答搶先體驗中，沒有獎勵。點擊報名可以報名，30秒後和妳壹起報名的玩家將直接進入遊戲。\r\n#b"
            if (event == null) {
                text += "尚未開啟"
                if (player.isGm()) {
                    event = npc.makeEvent("event_oxquiz", true, null)
                    text += "#L0#報名參加活動#l"
                    npc.broadcastWeatherEffectNotice(121, "[OX]活動已開啟,請在十分鐘內報名,否則將視為放棄該活動", 160000);
                }
            } else {
                if (event.getVariable("Closed") == true) {
                    text += "妳來晚啦，遊戲已經開始啦。請等待裡面的人結束，或者換個頻道。"
                } else {
                    text += "#L0#報名參加活動#l"
                }
            }
            let sel = npc.askMenu(text)
            if (sel == 0) {
                if (player.getEvent() == null) {
                    var players = event.getVariable("Players");
                    players.push(player);
                    event.setVariable("Players", players);
                    player.setEvent(event);
                    player.showTimer((event.getVariable("endTime") - new Date().getTime()) / 1000);
                } else {
                    npc.say("已經報名了！")
                }
            }
            break
        case OUT_FIELD:
            if (event == null) {
                txt = "\r\n";
                var ranking = player.getGlobalVariable("OXResult");
                if (player.getEventValue("OX已參與") > 0) {
                    player.changeMap(WAIT_FIELD);
                    break;
                }
                for (var i in ranking) {
                    var max = ranking[i].length;
                    for (var n = 0; n < max; n++) {
                        if (player.getId() == ranking[i][n]['id']) {
                            if (ranking[i][n]['rewarded'] == undefined) {
                                if (ranking[i][n].right > 0) {
                                    player.gainItem(4310329, ranking[i][n].right);
                                }
                                player.addEventValue("OX已參與");
                                ranking[i][n]['rewarded'] = true;
                                txt += "恭喜.. 你本場總計答對了" + ranking[i][n].right + "題\r\n";
                                txt += "領到了 #v4310329# x " + ranking[i][n].right + "\r\n";
                            } else {
                                txt += "妳已領過了獎品\r\n";
                            }
                            break;
                        }
                    }
                }
                txt += "\r\n退出當前活動嗎\r\n";
                npc.sayNextS(txt);
                player.changeMap(WAIT_FIELD);
            } else {
                npc.say("活動還在進行，請稍後再來查看獎勵。")
            }
            break
    }


}