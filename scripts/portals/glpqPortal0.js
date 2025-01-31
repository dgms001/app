var event = portal.getEvent("CWKPQ");
if (event != null) {
    if (event.getVariable("glpq1").equals("1")) {
        event.setVariable("glpq1", "2");
        // player.changeMap(map.getId(), 0);

        map.broadcastEventNotice("黑魔法師的力量變弱了，請到下一關卡去");
        map.blowWeatherEffectNotice("玩家 " + player.getName() + " 找到了隱藏在這裡的門了，快跟隨著他進去吧~！", 162, 15000);
        //} else if (event.getVariable("glpq1").equals("2")) {
        party.changeMap(610030200, 0);
    } else {
        player.dropMessage(11, "請先讓隊長給傑克對話。");
        portal.abortWarp();
    }
}
 
