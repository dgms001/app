var eim = portal.getEvent("Pirate");
if (eim.getVariable("stage4") != null && eim.getVariable("stage4") == "4") {
    party.changeMap(925100500, 0);
} else {
    portal.abortWarp();
    player.dropMessage(11, "請關閉所有入口,否則無法透過!");
}

