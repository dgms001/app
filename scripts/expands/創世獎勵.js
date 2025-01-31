if (player.getEventValue("創世獎勵LOG") > 0) {
    player.changeMap(101000000);
    npc.say("該副本一天只能領取一次獎勵喲");
} else if (player.getFreeSlots(4) < 5 || player.getFreeSlots(2) < 1) {
    npc.say("空間不足，請整理後重新制作！");
} else {
    player.gainItem(4032053, 100);
    player.gainItem(4001713, 10);
    player.gainItem(2633634, 5);
    player.gainItem(4000850, 15);
    player.gainItem(4034622, 3);
    player.gainItem(4310260, 20);
    player.addEventValue("創世獎勵LOG", 1, 1);
    player.changeMap(101000000);
    npc.say("領取成功,該副本一天只能領取一次獎勵喲");
}

