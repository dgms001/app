/* This is a piece of code

 * author dgms

 * global player

 * 脚本定制 技术支持 QQ 381991414
  
 * 限定賬號ID紅包類
 
 */
var 任務簡介 = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#"
var Gift = "#fUI/UIWindow2/crossHunterUI/reward/button/normal/0#";
var 空心圓圈2 = "";

while (true) {
	let sql = "SELECT jl.* FROM	dgms_server jl WHERE jl.max > jl.now AND jl.id NOT IN ( SELECT luckyId FROM dgms_server_log WHERE account = '" + getAccountName() + "')";
	let push = player.customSqlResult(sql);
	if (push.size() == 0) {
		npc.say("#b暫無可搶紅包！(不會顯示已搶紅包)\r\n#r如果管理員通知發放紅包，點擊確定後繼續搶紅包！");
		break;
	} else {
		str = "#rGM發放禮物領取:\r\n";
		for (let i = 0; i < push.size(); i++) {
			let signle = push.get(i);
			if (signle.get("nameid") == player.getAccountId()) {
				str += "#L" + i + "# #b你有一份禮物\t\t\t[#r待領取#b]#l\r\n";//:" + signle.get("date") + "

			}
		}

		selected = npc.askMenuA(str);
		let luckId = push.get(selected).get("id");

		sql = "select * from dgms_server where id = '" + push.get(selected).get("id") + "' and max > now";
		push = player.customSqlResult(sql);
		if (push.size() > 0) {
			let signle = push.get(0);
			let type = parseInt(signle.get("type").toString());
			let typeTxt = "";
			switch (type) {
				case 1:
					typeTxt = signle.get("num") + "餘額";
					gainHyPay(parseInt(signle.get("num").toString()));
					break;
				case 2:
					typeTxt = signle.get("num") + "樂豆";
					player.modifyCashShopCurrency(1, parseInt(signle.get("num").toString()));
					break;
				case 3:
					typeTxt = signle.get("num") + "樂豆";
					player.modifyCashShopCurrency(2, parseInt(signle.get("num").toString()));
					break;
				case 4:
					typeTxt = signle.get("num") + "楓幣";
					player.gainMesos(parseInt(signle.get("num").toString()))
					break;
				default:
					typeTxt = "『" + player.makeItemWithId(type).getItemName() + "』x " + signle.get("num");
					player.gainItem(type, parseInt(signle.get("num").toString()))
					break;
			}

			//存數據庫
			player.customSqlUpdate("update dgms_server set now = now + 1 where id = '" + luckId + "';");
			player.customSqlInsert("INSERT INTO `dgms_server_log` (`account`, `luckyId`,`date`) VALUES ('" + getAccountName() + "','" + luckId + "',now())");

			//npc.broadcastPlayerNotice(39,"【獎勵】" + " : " + "玩家 "+player.getName()+" 領取了管理員發放的"+typeTxt+"")
			npc.askMenuA("#b\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t\t#fs16##e#r領到啦:" + typeTxt);
		} else {
			npc.say("#b該紅包已被搶完！#r趕緊搶下一個紅包吧！");
		}
	}
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