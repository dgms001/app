var sql = "SELECT id,Score  FROM zz_guild_sky ORDER BY Score DESC";
var resultList = player.customSqlResult(sql);
var result = resultList.get(0);
if (getNAME(result.get("id")) == getNAME(player.getGuildId())) {
	WIN();
} else {
	LOSE();
}

function WIN() {
	if (player.getEventValue("攻城WIN方") == 0) {
		player.addEventValue("攻城WIN方", 1, 1);
		player.showTopScreenEffect("Map/Effect.img/SportsDay/EndMessage/Win");
		player.gainItem(2631501, 1);//工會WIN禮包
		player.gainGuildCommitment(15);
	} else {

	}

}

function LOSE() {
	if (player.getEventValue("攻城LOSE方") == 0) {
		player.addEventValue("攻城LOSE方", 1, 1);
		player.showTopScreenEffect("Map/Effect.img/SportsDay/EndMessage/Lose");
		player.gainItem(4032053, 500);//10W 楓點
		player.gainGuildCommitment(10);
	} else {
	}

}
function getNAME(ID) { //轉成中文
	var sql = "select name from guilds where id = '" + ID + "' ";
	var result = player.customSqlResult(sql);
	if (result.size() > 0) {
		if (result.get(0) != null) {
			return result.get(0).get("name");
		}
	} else {
		return 0;
	}

}
