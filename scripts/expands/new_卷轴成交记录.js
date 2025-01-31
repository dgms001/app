start();
function start() {
	var sql = "SELECT ";
	sql += " (select name from characters b where b.id = a.characters_id) sale, ";
	sql += " (select name from characters b where b.id = a.buy_id) buy,  ";
	sql += " a.itemid,a.meso,a.iid,a.number FROM zz_js_sale_history a where buy_id > 0 order by iid desc "
	//java.lang.System.out.println(sql);
	var resultList = player.customSqlResult(sql);
	var text = "道具\t\t數量\t\t價格\t\t出售\t\t購買\r\n";
	for (var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		if (result == null) {
			break;
		}

		text += "#r#v" + result.get("itemid") + "# x " + result.get("number") + "\t￥" + result.get("meso") + "\t" + result.get("sale") + "\t" + result.get("buy") + "\t\r\n";
	}
	npc.say(text);
}
