if (player.hasItem(4001815, 4)) {
    var event = reactor.getEvent("PQ_PoisonForest");
    player.loseItem(4001815, 4);
    event.setVariable(String(map.getId()), true);
    map.screenEffect("quest/party/clear");
} else {
    map.resetReactors();
    player.showSystemMessage("你必須要有四個稀釋的毒素");
}
