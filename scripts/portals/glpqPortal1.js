var event = portal.getEvent("CWKPQ");
if (event != null) {

    if (parseInt(event.getVariable("glpq2")) == 5) {
        party.changeMap(610030300, 0);
        map.blowWeatherEffectNotice("玩家 " + player.getName() + " 黑魔法師的力量變弱了，請到下一關卡去~！", 162, 15000);
        //pi.getEventInstance().broadcastDropMessage(11,"黑魔法師的力量變弱了，請到下一關卡去");
    } else {
        player.dropMessage(1, "要想繼續前進，必須啟用所有的祭壇。");
        portal.abortWarp();
    }
}
 
