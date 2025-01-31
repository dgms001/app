openA = false; //true樂豆 false楓點
var timesOP = java.lang.System.currentTimeMillis();
var SOP = 10; //一分鐘 這裡自己改時間
var TOP = parseInt(SOP - (((timesOP - parseInt(player.getQuestRecordEx(100000008))) / 1000)));
if (player.getPQLog("競標給時間") == 0) {
    player.addPQLog("競標給時間", 1, 1);
    player.updateQuestRecordEx(100000008, timesOP);
} else if (openA) {
    player.runScript("拍賣系統-樂豆");
} else {
    player.runScript("拍賣系統-楓點");
}
