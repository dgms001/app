let questN = player.getQuestRecordEx(200100, "questN"); //任務地圖
if (map.getId() == questN) {
    let rewards = Array(
        //物品ID 數量
        //100w
        Array(4032053, 50),
		Array(4032053, 60),
		Array(4032053, 70),
		Array(4032053, 80),
		Array(4032053, 90),
		Array(4032053, 100),
		Array(5062017, 20), //閃耀方塊
        Array(5062020, 20), //六角方塊
		Array(5062017, 20), //閃耀方塊
        Array(5062020, 20), //六角方塊
		Array(5062017, 20), //閃耀方塊
        Array(5062020, 20), //六角方塊
        Array(4001714, 5),
        Array(4001714, 6),
        Array(4001714, 7),
        Array(4001714, 8),
        //10w
        Array(4001714, 5),
        Array(4001714, 6),
        Array(4001714, 7),
        Array(4001714, 8),
        Array(4001714, 10)
    );
    var ran = Math.floor(Math.random() * rewards.length)


    player.updateQuestRecordEx(200100, "questN", "-1");
    player.gainItem(rewards[ran][0], rewards[ran][1])
    player.loseItem(2430251, 1);
player.addEventValue("尋寶任務");
    npc.say("恭喜你，尋寶成功！獲得#v" + rewards[ran][0] + "# x " + rewards[ran][1] + "");
    player.runScript("每日尋寶");
} else {
    npc.say("尋寶失敗，這不是藏匿寶藏的地圖哦!");
}