/* This is a piece of code

 * author dgms

 * global player

 * 脚本定制 技术支持 QQ 381991414
  
 * 限定賬號ID紅包類
 
 */


while (true) {
	str = "請輸入玩家帳號ID";
	let nameid = npc.askNumber(str, "1", 1, 99999);
	str = "請輸入發放類型 1=餘額 2=樂豆 3=楓點 4=楓幣 物品代碼=物品";
	let type = npc.askNumber(str, "1", 1, 9999999);
	let typeTxt = 0;
	switch (type) {
		case 1:
			typeTxt = "餘額";
			break;
		case 2:
			typeTxt = "樂豆";
			break;
		case 3:
			typeTxt = "楓點";
			break;
		case 4:
			typeTxt = "楓幣";
			break;
		default:
			let items = player.makeItemWithId(type);
			if (items == null) {
				npc.say("物品代碼不存在 請重新輸入！");
				continue;
			}
			typeTxt = "#v" + type + "# #z" + type + "#"
			break;
	}

	str = "請輸入發放" + typeTxt + "的數量";
	let num = npc.askNumber(str, "1", 1, 9999999);
	player.customSqlInsert("INSERT INTO `dgms_server` (`nameid`,`type`, `num`,`max`,`now`,`date`) VALUES ('" + nameid + "','" + type + "', '" + num + "','1','0',now())");
	//npc.broadcastPlayerNotice(39,"『泡泡谷獎勵』" + " : " + "哇塞，管理員 " + player.getName() + " 發送了獎勵。")
	npc.say("發放成功！");
	break;
}





function getHyPay(type) {
	var sql = "select * from hypay where accname = '" + getAccountName() + "'";
	var push = player.customSqlResult(sql);
	if (push.size() > 0) {
		var result = push.get(0);
		if (type == 1) {
			var pay = result.get("pay");
		} else if (type == 2) {
			var pay = result.get("payUsed");
		} else if (type == 3) {
			var pay = result.get("payReward");
		}
	} else {
		player.customSqlInsert("INSERT INTO `hypay` (`accname`, `name`) VALUES ('" + getAccountName() + "', '" + player.getName() + "')");
		return getHyPay(1);
	}

	return pay;
}
function getAccountName() {
	var i = -1;
	var sql = "select name,id from accounts where id=" + player.getAccountId() + " order by name limit 1;";
	var push = player.customSqlResult(sql);
	if (push.size() > 0) {
		var result = push.get(0);
		var name = result.get("name");
	}

	return name;
}


function gainHyPay(count) {
	var sql = "update hypay set pay =pay+? where accname = '" + getAccountName() + "';";
	player.customSqlUpdate(sql, count);
}