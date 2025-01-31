//椅子副本獎勵
/*var Item = new Array(
       4001326,4001327,4001328,4001329,4001330,4001331,4001332
    );

var rand = Math.floor(Math.random() * Item.length); */
//player.dropMessage(1, "消滅了怪物，獲取：\r\n "+player.makeItemWithId(Item[rand]).getItemName()+" x1！！");
//player.gainItem(Item[rand], 1); 


//player.dropMessage(7, "挑戰完成,獲得以下全員獎勵！！");
player.showSystemMessage("恭喜玩家獲得領取椅子副本全員獎勵!!");
player.showSystemMessage("圓夢經驗增加30,家族貢獻增加75點");
player.gainItem(2436711, 3);
player.gainItem(4001456, 15);
player.changeMap(104000000);
addvalue(30);
player.gainGuildCommitment(75);//家族貢獻度
player.addEventValue("椅子副本獎勵", 1, 1000);


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