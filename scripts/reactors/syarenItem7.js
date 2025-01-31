/**
 *
 *
 */

let event = reactor.getEvent("guild_quest");
if (event != null) {
    let will = event.getVariable("will_3");
    if (will == null) {
        reactor.dropItemsOld(0, 0, 0, 4001033, 1000000);
        event.setVariable("will_3", "o");
    }
}




