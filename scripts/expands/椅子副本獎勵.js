if (player.getEventValue("椅子副本簡易") >= 100) {
} else {
	let tt = party.getMembersCount(map.getId(), 1, 300);
	if (tt >= 3) {
		partycount = 1.5;
	} else {
		partycount = 1;
	}
	player.dropMessage(6, "隊伍人數 " + tt + " , 加成 " + partycount + "倍");
	player.showSystemMessage("恭喜玩家獲得領取椅子副本全員獎勵!!");
	player.showSystemMessage("圓夢經驗增加20*" + partycount + ",家族貢獻增加50*" + partycount + "點");
	player.gainItem(2436711, 2 * partycount);
	player.gainItem(4001456, 10 * partycount);
	//player.changeMap(104000000);
	addvalue(20 * partycount);
	player.gainGuildCommitment(50 * partycount);//家族貢獻度
	player.addEventValue("椅子副本獎勵", 1, 1000);
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