/**
 *
 *
 */


let event = reactor.getEvent("kenta");
if (event != null) {
    checkNearby(event, sh.newPoint(-403, 257), "cave1");
    checkNearby(event, sh.newPoint(-639, 959), "cave2");
    checkNearby(event, sh.newPoint(107, 1776), "cave3");
    checkNearby(event, sh.newPoint(535, 1065), "cave4");
    var vv = 0;
    for (i = 1; i < 4; i++) {
        if (event.getVariable("cave" + i).equals("3")) {
            vv++;
        }
    }
    if (vv >= 2) {
        map.setNoSpawn(true);
        map.blowWeather(5120052, "我在探索的時候發現了一箇洞窟。在怪物們再次出現之前，我們先去那裡吧。");
        map.setEscortStopEnd(9300460);
    }
}


function checkNearby(event, pos, cave) {
    if (player.checkNearby(pos)) {
        let value = parseInt(event.getVariable(cave)) + 1;
        if (value <= 3) {
            event.setVariable(cave, String(value));
            map.setPublicShareStateValue(3, cave, value);
        }
    }
}
