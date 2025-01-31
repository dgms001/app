let event = reactor.getEvent("guild_quest");
if (event != null) {
    if (event.getVariable("allReward") == "1") {
        player.runScript("家族任務箱子獎勵")
    }
}