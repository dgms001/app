/**
 *
 *
 */

let event = reactor.getEvent("guild_quest");
if (event != null) {
    let will = event.getVariable("will_2");
    if (will == null) {
        reactor.dropItemsOld(0, 0, 0, 4001032, 1000000);
        event.setVariable("will_2", "o");
    }
}



