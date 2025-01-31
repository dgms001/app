/**
 *
 *
 */

let event = reactor.getEvent("guild_quest");
if (event != null) {
    let will = event.getVariable("will_4");
    if (will == null) {
        reactor.dropItemsOld(0, 0, 0, 4001034, 1000000);
        event.setVariable("will_4", "o");
    }
}




