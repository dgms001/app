var bossid = "堅持六十秒";
var totalTime = player.getEventValue("是男人就堅持60秒秒數");
if (player.getEventValue("是男人就堅持60秒獎勵次數") > 3) {
    var sql = "insert into dgms_bossinfo(bossName, playersName, `time`) values('" + bossid + "','" + player.getName() + "','" + totalTime + "')";
    player.customSqlInsert(sql);
    player.resetEventValue("是男人就堅持60秒秒數")
    player.completeQuest(29900, 0);
    player.completeQuest(29901, 0);
    player.completeQuest(29902, 0);
    player.completeQuest(29903, 0);
    npc.say("今天獎勵次數已經超過3次,請明天再來吧");
} else if (player.getEventValue("是男人就堅持60秒秒數") >= 30 && player.getEventValue("是男人就堅持60秒秒數") < 40) {
    var sql = "insert into dgms_bossinfo(bossName, playersName, `time`) values('" + bossid + "','" + player.getName() + "','" + totalTime + "')";
    player.customSqlInsert(sql);
    player.addEventValue("是男人就堅持60秒獎勵次數", 1, 1);
    player.resetEventValue("是男人就堅持60秒秒數")
    player.gainItem(2633634, 3); //漆黑碎片
    player.gainItem(5060048, 30);
    player.gainItem(5062503, 10);
    addvalue(100);
    npc.say("時間30秒內,獲得額外道具!");
    player.completeQuest(29900, 0);
    player.completeQuest(29901, 0);
    player.completeQuest(29902, 0);
    player.completeQuest(29903, 0);
    player.runScript("堅持60秒");
} else if (player.getEventValue("是男人就堅持60秒秒數") >= 40 && player.getEventValue("是男人就堅持60秒秒數") < 50) {
    var sql = "insert into dgms_bossinfo(bossName, playersName, `time`) values('" + bossid + "','" + player.getName() + "','" + totalTime + "')";
    player.customSqlInsert(sql);
    player.addEventValue("是男人就堅持60秒獎勵次數", 1, 1);
    player.resetEventValue("是男人就堅持60秒秒數")
    player.gainGuildCommitment(150); //家族貢獻度
    player.gainItem(2633634, 4); //漆黑碎片
    player.gainItem(4034622, 1); //250骷髏
    player.gainItem(5060048, 30);
    player.gainItem(5062503, 20);
    addvalue(200);
    player.gainGuildCommitment(249); //家族貢獻度 
    player.completeQuest(29900, 0);
    player.completeQuest(29901, 0);
    player.completeQuest(29902, 0);
    player.completeQuest(29903, 0);
    npc.say("時間20秒內,獲得額外道具!");
    player.runScript("堅持60秒");
} else if (player.getEventValue("是男人就堅持60秒秒數") >= 50 && player.getEventValue("是男人就堅持60秒秒數") < 80) {
    var sql = "insert into dgms_bossinfo(bossName, playersName, `time`) values('" + bossid + "','" + player.getName() + "','" + totalTime + "')";
    player.customSqlInsert(sql);
    player.addEventValue("是男人就堅持60秒獎勵次數", 1, 1);
    player.resetEventValue("是男人就堅持60秒秒數")
    player.gainItem(2633634, 5); //漆黑碎片
    player.gainItem(4034622, 2); //250骷髏
    player.gainItem(5060048, 30);
    player.gainItem(5062503, 30);
    addvalue(300);
    player.gainGuildCommitment(350); //家族貢獻度 
    player.completeQuest(29900, 0);
    player.completeQuest(29901, 0);
    player.completeQuest(29902, 0);
    player.completeQuest(29903, 0);
    npc.say("時間10秒內,獲得額外道具!");
    player.runScript("堅持60秒");
} else {
    var sql = "insert into dgms_bossinfo(bossName, playersName, `time`) values('" + bossid + "','" + player.getName() + "','" + totalTime + "')";
    player.customSqlInsert(sql);
    player.resetEventValue("是男人就堅持60秒秒數")
    player.completeQuest(29900, 0);
    player.completeQuest(29901, 0);
    player.completeQuest(29902, 0);
    player.completeQuest(29903, 0);
    npc.say("無獎勵,但獎勵次數也不會減少,繼續努力吧");
    player.runScript("堅持60秒");
}
function addvalue(level) { //給予經驗值
    var sql = "update dgms_zhanling set value=value+? where name=?";
    player.customSqlUpdate(sql, level, "" + getAccountName() + "");

}

function getAccountName() {
    var sql = "select name from characters where id=  " + player.getId() + " ";
    var resultList = player.customSqlResult(sql);
    var accountName = 0;
    for (var i = 0; i < resultList.size(); i++) {
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        accountName = result.get("name");
    }
    return accountName;
}
