//次元入侵獎勵
/*var Item = new Array(
       4001326,4001327,4001328,4001329,4001330,4001331,4001332
    );

var rand = Math.floor(Math.random() * Item.length); */
//player.dropMessage(1, "消滅了怪物，獲取：\r\n "+player.makeItemWithId(Item[rand]).getItemName()+" x1！！");
//player.gainItem(Item[rand], 1); 


if (player.getEventValue("次元入侵獎勵") >= 300) {
    player.dropMessage(7, "今日次元入侵已領取30次,今日在無主線任務經驗及家族貢獻點!");
} else if (player.getEventValue("次元入侵獎勵") < 30) {
    //player.dropMessage(7, "消滅怪物獲得全員獎勵,並獲得10點主線任務經驗,30點家族貢獻點!");
    //addvalue(10);
    player.addEventValue("次元入侵獎勵", 1, 1);
    player.gainGuildCommitment(30);//家族貢獻度
} else {

}
let tt = party.getMembersCount(map.getId(), 1, 300);
if (tt >= 3) {
    partycount = 1.5;
} else {
    partycount = 1;
}
//player.dropMessage(7, "挑戰完成,獲得以下全員獎勵！！");
//player.gainItem(4002000, 20 * partycount);
//player.gainItem(4002001, 10 * partycount);
//player.dropMessage(6, "隊伍人數 " + tt + " , 加成 " + partycount + "倍");



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