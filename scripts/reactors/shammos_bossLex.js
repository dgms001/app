/**
 *
 *
 */


let event = reactor.getEvent("shammos");
if (event != null) {
    if (event.getVariable("LEX") == null) {
        event.setVariable("LEX", "o");
        event.startTimer("summon_bossLex", 5000);
    }
}

