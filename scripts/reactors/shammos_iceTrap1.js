/**
 *
 *
 */


let event = reactor.getEvent("shammos");
if (event != null) {
    if (event.getVariable("ICE_TRAP") == null) {
        event.setVariable("ICE_TRAP", "o");
        map.blowWeather(5120035, "你們解決得還挺快的嘛。我們快去封印萊格斯吧。");
        map.setEscortStopEnd(9300275);
    }
}

