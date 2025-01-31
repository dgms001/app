/**
 *
 *
 */

let event = portal.getEvent("kenta");
if (event != null) {
    if (event.getVariable("kenta_batattack")) {
        map.setReactorState("lever", 1, 10);
    }
}
portal.abortWarp();