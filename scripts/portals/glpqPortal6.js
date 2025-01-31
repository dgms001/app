var event = portal.getEvent("CWKPQ");
if (event != null) {
    if (event.getVariable("glpq6") == null || !event.getVariable("glpq6").equals("3")) {

        player.dropMessage(11, "門還沒有開啟。");
        portal.abortWarp();
    } else {
        player.changeMap(610030700, 0);
    }
}
   