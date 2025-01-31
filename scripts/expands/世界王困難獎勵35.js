//player.runScript("世界王獎勵");
if (player.getEventValue("世界BOSS獲得獎勵") >= 14) {
	player.showSystemMessage("世界王獎勵已達上限次數14次");
	player.showSystemMessage("世界王獎勵已達上限次數14次");
	player.showSystemMessage("世界王獎勵已達上限次數14次");
} else {
	player.addEventValue("世界BOSS獲得獎勵", 1, 7);
	player.addEventValue("世界王困難獎勵記錄", 1, 3000);
	player.gainItem(2049323, 45 * 1.3);//高級裝備強化捲軸
	player.gainItem(4034622, 2);//250強化道具 骷髏頭
	player.gainItem(4032053, 1.3 * (250 * (Math.floor(player.getMapleUnionLevel() / 1500) + 1)));//楓葉
	player.gainItem(4001713, 1.3 * (50 * (Math.floor(player.getMapleUnionLevel() / 1500) + 1)));//定居金
	player.gainItem(4000850, 1.3 * (1 * (Math.floor(player.getMapleUnionLevel() / 3000) + 2)));//蘇打珍珠
	player.gainItem(2633634, 1.3 * (1 * (Math.floor(player.getMapleUnionLevel() / 1000) + 1)));//漆黑碎片
	player.gainItem(2633336, 1.3 * (1 * (Math.floor(player.getMapleUnionLevel() / 2000) + 1)));
	npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "獲得困難世界BOSS 35%傷害獎勵 臥槽牛逼!");


	//player.gainExp​(Math.floor(player.getMapleUnionLevel()/1000)*75000000);
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