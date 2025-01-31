/**
 *    跑酷達人入口 
 **/
if (map.getId() == 911000300) {
    if (player.isGm()) {
        let YN = npc.askYesNo("是否開啟跑酷達人活動？");
        if (YN == 1) {
            if (npc.makeEvent("JILI_PKDR", false, player)) {
                updateActiveStatus("跑酷達人", 0);
                map.blowWeather(5120000, "跑酷達人活動馬上開啟，請大家等待入場NPC的出現");
                npc.broadcastPlayerNotice(10, "[全服狂歡盛宴]: <跑酷達人>活動入場倒計時2分鐘，請各位參賽選手進入頻道<1>,特色系統-全服狂歡[跑酷達人]進入，等候<次元裂縫>出現和點選進場！ ");
                npc.broadcastPlayerNotice(13, "[全服狂歡盛宴]: <跑酷達人>活動入場倒計時2分鐘，請各位參賽選手進入頻道<1>,特色系統-全服狂歡[跑酷達人]進入，等候<次元裂縫>出現和點選進場！ ");
                npc.broadcastPlayerNotice(12, "[全服狂歡盛宴]: <跑酷達人>活動入場倒計時2分鐘，請各位參賽選手進入頻道<1>,特色系統-全服狂歡[跑酷達人]進入，等候<次元裂縫>出現和點選進場！ ");
                npc.broadcastPlayerNotice(13, "[全服狂歡盛宴]: <跑酷達人>活動入場倒計時2分鐘，請各位參賽選手進入頻道<1>,特色系統-全服狂歡[跑酷達人]進入，等候<次元裂縫>出現和點選進場！ ");
                npc.broadcastPlayerNotice(10, "[全服狂歡盛宴]: <跑酷達人>活動入場倒計時2分鐘，請各位參賽選手進入頻道<1>,特色系統-全服狂歡[跑酷達人]進入，等候<次元裂縫>出現和點選進場！ ");
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
} else if (map.getId() == 911001300) {
    npc.askMenu("               #r走不通了吧？\r\n\r\n\r\n     #L100#你好，你能給我通關信物嗎？#l");
    npc.askMenu("               #r拿去吧！加油哦！\r\n\r\n\r\n     #L100#謝謝你(點選領取信物#v4001007#)#l");
    if (player.getPQLog("paokudaren1") < 1) {
        player.gainItem(4001007, 1);
        player.addPQLog("paokudaren1", 1, 1);
        npc.say("信物已經給你,加油吧!");
    } else {
        npc.say("你今日已經領取過了,快走吧不會再給你了!");
    }

}


function updateActiveStatus(name, status) {
    var sql = "update jili_active_status set status = '" + status + "' where activeName = '" + name + "';";
    player.customSqlUpdate(sql);
}