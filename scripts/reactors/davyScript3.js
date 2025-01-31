var eim = reactor.getEvent("Pirate");
if (eim != null) {
    if (eim.getVariable("stage4") == null) {
        eim.setVariable("stage4", "0");
    }
    player.loseItem(4001117, 1);
    eim.setVariable("stage4", parseInt(eim.getVariable("stage4")) + 1);
    player.dropMessage(11, "入口已被關閉!");
    if (eim.getVariable("stage4") == "4") { //all 5 done
        map.blowWeather(5120020, "所有的門都關上了。好了，現在去下一關吧。");
        map.broadcastEventNotice("所有入口已被關閉!");
    }
}


