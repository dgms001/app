//player.runScript("世界王獎勵");
if (player.getEventValue("世界王獎勵") >= 5) {
	player.showSystemMessage("世界王獎勵已達上限次數5次");
	player.showSystemMessage("世界王獎勵已達上限次數5次");
	player.showSystemMessage("世界王獎勵已達上限次數5次");
} else {
	player.addEventValue("世界王獎勵", 1, 1);
	player.gainItem(4032053, 100 * (Math.floor(player.getMapleUnionLevel() / 1500) + 1));
	player.gainItem(4001713, 15 * (Math.floor(player.getMapleUnionLevel() / 1500) + 1));
	//player.gainItem(2630512, 1*(Math.floor(player.getMapleUnionLevel()/1000)+1));
	player.gainItem(2633634, 2 * (Math.floor(player.getMapleUnionLevel() / 1500)));
	player.gainItem(4000850, (Math.floor(player.getMapleUnionLevel() / 5000)));
	if (player.getLevel() >= 250) {
		player.gainItem(2633336, (Math.floor(player.getMapleUnionLevel() / 3000) + 1));
	} if (player.getLevel() >= 270) {
		player.gainItem(2633336, 1);
	} if (player.getLevel() >= 280) {
		player.gainItem(2633336, 2);
	}

	player.gainExp(Math.floor(player.getMapleUnionLevel() / 1000) * 75000000);
	addvalue(15);
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