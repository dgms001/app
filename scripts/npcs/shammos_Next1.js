/**
 *
 *
 */
let event = npc.getEvent("shammos");
if (event != null) {
    if (event.getVariable("water") != null) {
        if (player.getId() == party.getLeader()) {
            map.destroyTempNpc(event.getVariable("field2_npc"));
            map.setEscortStopEnd(9300275);
            map.blowWeather(5120035, "如果你們在護衛我的時候，我陷入了危險，你們必須毫不猶豫地讓我喝下萬年冰河水。那就繼續吧？");

        } else {
            npc.say("你不是隊長。讓你們隊長來和我說話。");
        }
    } else {
        npc.say("你們要喝萬年冰河水嗎？.");
    }
}

