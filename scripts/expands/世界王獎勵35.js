date = new Date();
let hour = date.getHours();
if (player.getEventValue(hour) > 0) {
    npc.askMenuS("每個時段只能領取一次獎勵");
} else if (player.getEventValue("世界BOSS獲得獎勵") >= 3) {
    player.showSystemMessage("世界王獎勵已達上限次數3次");
} else {
    player.addEventValue("世界BOSS獲得獎勵");
    player.addEventValue(hour);

    player.gainItem(4032053, 3000);//楓葉
    player.gainItem(4001848, 2);//定居金
    player.gainItem(5064502, 3);//歐皇
    player.gainItem(2433047, 3);
    npc.broadcastPlayerNotice(3, "[烈焰戰狼] 玩家  " + player.getName() + "  擊殺世界BOSS,獲得更多道具!!! ");

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