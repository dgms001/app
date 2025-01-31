var event = reactor.getEvent("PQ_PoisonForest");
if (event != null) {
    if (event.getVariable("number1") == 8) {
        reactor.dropItemsOld(0, 0, 0,
            4001816, 999999
        );
    } else {
        event.setVariable("number1", parseInt(event.getVariable("number1")) + 1);
    }
}