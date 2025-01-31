var event = portal.getEvent("CWKPQ");
if (event != null) {
    if (parseInt(event.getVariable("glpq4")) != 5) {
        player.dropMessage(1, "門戶還沒有開啟。");
        portal.abortWarp();
    } else {
        player.changeMap(610030500, 0);
    }
}
