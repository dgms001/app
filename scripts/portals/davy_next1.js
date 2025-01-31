var eim = portal.getEvent("Pirate");
if (eim != null) {
    if (eim.getVariable("stage2").equals("3")) {
        party.changeMap(925100200, 0);
    } else {

        player.dropMessage(11, "請收集初級、中級、高階、海盜身份各20個,否則無法透過!");
        portal.abortWarp();
    }
} else {
    portal.abortWarp();
    player.dropMessage(11, "未執行任務或發生錯誤!!");
}

