/**
 * 玩具獎勵  
 **/

let now = player.getEventValue("致命海盜船副本");
let max = 1;//最大領獎次數
let tt = party.getMembersCount(map.getId(), 1, 300);
if (tt >= 3) {
    partycount = 1.5;
} else {
    partycount = 1;
}
if (max > now) {
    player.gainItem(2633634, 3 * partycount);//漆黑碎片
    player.gainItem(4034622, 3 * partycount);//250骷髏
    player.gainItem(5060048, 30 * partycount);
    player.dropMessage(6, "隊伍人數 " + tt + " , 加成 " + partycount + "倍");
    //npc.broadcastPlayerNotice(49, "【致命海盜船副本】:玩家 " + player.getName() + " 今日已成功通關任務" + (now + 1) + "次,獲得大量獎勵！");
    addvalue(100 * 2.5);
    player.gainGuildCommitment(150 * 2.5);//家族貢獻度
    player.addEventValue("致命海盜船副本", 1, 1);
    player.addEventValue("致命海盜船", 1, 1);
} else {
    player.showSystemMessage("今日已經領取了" + max + "次獎勵,無法再次領取");
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