/**
 *
 *
 */
let event = npc.getEvent("shammos");
if (event != null) {
    if (event.getVariable("shammos_start") == null) {
        if (player.getId() == party.getLeader()) {
            let ret = npc.askYesNo("都準備好了嗎？準備好了的話，就快點跟我走吧。一定要記住，要是我死了的話，一切就都完了。你們的任務就是保護我。");
            if (ret == 1) {
                npc.sayNext("好了。走吧。跟著我。");
                event.startTimer("shammos_start", 6000);
                event.setVariable("shammos_start", true);
                map.setNpcSpecialAction(1, "start", 0, false);
            } else {
                npc.say("怎麼？還沒做好心理準備嗎？準備好了的話跟我說一聲。");
            }
        } else {
            npc.say("你不是隊長。讓你們隊長來和我說話。");
        }
    }
}

