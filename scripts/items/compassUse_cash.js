var questid = 200100;
let questN = player.getQuestRecordEx(questid, "questN"); //任務地圖
if (questN == null || questN == -1) {
    npc.say("你還沒有接任務，無法使用");
    
} else {
    player.changeMap(questN);
    player.loseItem(2430030, 1)
    npc.say("已將你指引到藏寶之地");
}