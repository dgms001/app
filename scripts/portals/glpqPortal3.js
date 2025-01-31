var event = portal.getEvent("CWKPQ");
if (event != null) {
    if (parseInt(event.getVariable("pass_number")) != 5 && !player.isGm()) {
        player.dropMessage(1, "還沒有5個冒險家透過,請5個冒險家透過後才會開啟此門。");
        portal.abortWarp();
    } else {
        player.changeMap(610030400, 0);
    }
}
