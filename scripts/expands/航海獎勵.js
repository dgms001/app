/**
 * 玩具獎勵  
 **/

let now = player.getEventValue("航海獎勵");
let max = 999;//最大領獎次數
//let tt = party.getMembersCount(map.getId(), 1, 300);
let tt = party.getMembersCount();

/*if (tt >= 3) {
    partycount = 1.5;
} else {
    partycount = 1;
}*/
if (now < max) {
    player.gainItem(4033853, 5);


    npc.broadcastPlayerNotice(1, "【航海爭略】:玩家 " + player.getName() + " 今日已成功通關任務" + (now + 1) + "次,獲得大量獎勵！");

    player.addEventValue("航海獎勵", 1, 1);
    player.changeMap(100000000);
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