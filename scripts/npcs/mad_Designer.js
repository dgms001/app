/**
 *    雪原跑旗入口 
 **/
if (map.getId() == 932200005) {
    if (player.isGm()) {
        let YN = npc.askYesNo("是否開啟雪原跑旗活動？");
        if (YN == 1) {
            if (npc.makeEvent("JILI_XYPQ", false, player)) {
                updateActiveStatus("雪原跑旗", 0);
                map.blowWeather(5120000, "雪原跑旗活動馬上開啟，請大家等待入場NPC的出現");
                npc.broadcastPlayerNotice(10, "[全服狂歡盛宴]: <雪原跑旗>活動入場倒計時2分鐘，請各位參賽選手進入頻道<1>,特色系統-全服狂歡[雪原跑旗]進入，等候<次元裂縫>出現和點選進場！ ");
                npc.broadcastPlayerNotice(13, "[全服狂歡盛宴]: <雪原跑旗>活動入場倒計時2分鐘，請各位參賽選手進入頻道<1>,特色系統-全服狂歡[雪原跑旗]進入，等候<次元裂縫>出現和點選進場！ ");
                npc.broadcastPlayerNotice(12, "[全服狂歡盛宴]: <雪原跑旗>活動入場倒計時2分鐘，請各位參賽選手進入頻道<1>,特色系統-全服狂歡[雪原跑旗]進入，等候<次元裂縫>出現和點選進場！ ");
                npc.broadcastPlayerNotice(13, "[全服狂歡盛宴]: <雪原跑旗>活動入場倒計時2分鐘，請各位參賽選手進入頻道<1>,特色系統-全服狂歡[雪原跑旗]進入，等候<次元裂縫>出現和點選進場！ ");
                npc.broadcastPlayerNotice(10, "[全服狂歡盛宴]: <雪原跑旗>活動入場倒計時2分鐘，請各位參賽選手進入頻道<1>,特色系統-全服狂歡[雪原跑旗]進入，等候<次元裂縫>出現和點選進場！ ");
                npc.say("開啟成功");
            } else {
                npc.say("開啟失敗");

            }
        } else {
            npc.say("想開啟再來找我");
        }
    } else {
        npc.say("#r請等待GM開啟活動，倒計時結束時將會出現入場NPC，請留意！");
    }
} else {

}


function updateActiveStatus(name, status) {
    var sql = "update jili_active_status set status = '" + status + "' where activeName = '" + name + "';";
    player.customSqlUpdate(sql);
}