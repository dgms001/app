start();
function start() {
	var sql = "SELECT ";
	sql += " (select name from characters b where b.id = a.characters_id) sale, ";
	sql += " (select name from characters b where b.id = a.buy_id) buy,  ";
	sql += " a.itemid,a.meso,a.iid,a.number FROM dgms_sale_history a where buy_id > 0 order by time desc,iid desc "
	//java.lang.System.out.println(sql);
	var resultList = player.customSqlResult(sql);
	var text = " #fs13##e#b道具 \t數量\t  價格\t  出售\t  購買\r\n#n";
	for (var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		if (result == null) {
			break;
		}

		text += "#r#v" + result.get("itemid") + "#\t" + result.get("number") + "\t  " + result.get("meso") + "個\t " + result.get("sale") + "\t  " + result.get("buy") + "\r\n";
	}
	npc.say(text);
}
