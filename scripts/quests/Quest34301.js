if (!"2".equals(player.getQuestRecordEx(34340, "enter"))) {
    npc.sayNextS("（好像無法經過這裡。）");
    npc.sayNextS("（還是先回去吧。）");
    player.changeMap(450003100, 0);
    player.updateQuestRecordEx(34340, "enter", "2");
}