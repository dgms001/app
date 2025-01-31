let event = portal.getEvent();

if (event != null) {
        var stage = parseInt(event.getVariable("stage"));

        var rStat = map.getReactorStateId("g") + 1;
        var rValue = parseInt(player.getQuestRecordEx(42006, "g"));

        if (rValue > rStat) {//獲得的數字 大于當前的數字 則進行處理
                player.updateQuestRecordEx(42006, "gc", String(rValue));
                player.showAvatarOrientedRepeat("",0,0);
                //player.showAvatarOriented("Effect/OnUserEff.img/aquarisTower/success",0,0);
                player.updateQuestRecordEx(42006, "g", "0");
                map.setReactorState("g", rValue - 1, 0);
                var rc = player.getQuestRecordEx(42006, "rc");
                var gc = player.getQuestRecordEx(42006, "gc");
                var bc = player.getQuestRecordEx(42006, "bc");
                var yc = player.getQuestRecordEx(42006, "yc");
                if (rc != "0" && gc != "0" && bc != "0" && yc != "0") {
                        //完成當前階段
                        if (event.getVariable("stage" + stage) != "clear") {
                                event.setVariable("stage" + stage, "clear");
                                player.screenEffect("quest/party/clear");
                                event.getVariable("map" + stage).blowWeatherEffectNotice("你現在可以前往下一層了。", 147, 15000);
                        }
                }
        }
} else {
        player.showSystemMessage("發生未知錯誤！");
}
portal.abortWarp();