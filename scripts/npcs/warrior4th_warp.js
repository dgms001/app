/**
 *
 *
 */
if (player.getJob() == 112 || player.getJob() == 122 || player.getJob() == 132) {
    let sel = npc.askMenu("你找我有什麼事情麼? \r\n#b#L1# 關於自由轉職#l");
    if (sel == 1) {
        if (player.getPQLog("FreeChangeJob") == 0) {
            let ret = npc.askYesNo("自由轉職一天只能一次,你是否現在就要進行選擇？");
            if (ret == 1) {
                player.openUI(0xA7);
            }
        } else {
            npc.sayNext("你今天已經使用自由轉職過了.請明天再試!");
        }
    }
} else if (player.getJob() < 100 || player.getJob() > 132) {
    npc.sayNext("你為什麼想見我？我沒有你想知道的事。");
} else if (player.isQuestStarted(1451)) {
    let sel = npc.askMenu("我可以將你傳送到天鷹或火焰龍所在地, 那麼你想去 \r\n #b#L0#火焰龍森林#l\r\n #b#L1#天鷹森林#l");
    if (sel == 0) {
        if (player.hasItem(4031343, 1)) {
            npc.sayNext("你已經有#b#t4031343##k了");
        } else {
            npc.makeEvent("change_job", false, [player, 924000200]);
        }
    } else if (sel == 1) {
        if (player.hasItem(4031344, 1)) {
            npc.sayNext("你已經有#b#t4031344##k了");
        } else {
            npc.makeEvent("change_job", false, [player, 924000201]);
        }
    }
} else {
    npc.sayNext("你還不夠強大走戰士頂尖的道路。等你變得更強壯再來找我吧。");
}