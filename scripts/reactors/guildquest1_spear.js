/**
 *
 *
 */

let event = reactor.getEvent("guild_quest");
if (event != null) {
    let spear = parseInt(event.getVariable("spear"));
    spear += 1;
    event.setVariable("spear", spear);
    let t_map = event.getMap(990000400);
    t_map.setReactorState("speargate", spear, 0);
    if (spear >= 4) {
        event.setVariable("state_s2", "clear");
        map.soundEffect("Party1/Clear");
        map.screenEffect("quest/party/clear");
        t_map.soundEffect("Party1/Clear");
        t_map.screenEffect("quest/party/clear");
    }
}


