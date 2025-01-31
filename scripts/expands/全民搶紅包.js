/* This is a piece of code

 * author dgms

 * global player

 * 脚本定制 技术支持 QQ 381991414

 */
var 任務簡介 = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#"
var Gift = "#fUI/UIWindow2/crossHunterUI/reward/button/normal/0#";
var 空心圓圈2 = "#fUI/UIWindow2/bohabManager/dot/2/dot#";


let str = "\r\n#b#fs17##e親愛的#r" + player.getName() + "#k,#b歡迎來到#r圓夢谷#k!\r\n#b";
str += "#L1#" + Gift + "#l\r\n"
if (player.isGm()) {
	str += "#L2##d[管理員選項]#r";
}

let selected = npc.askMenu(str);
if (selected == 1) {
	//搶禮包
	while (true) {
		let sql = "SELECT jl.* FROM	dgms_lucky jl WHERE jl.max > jl.now AND jl.id NOT IN ( SELECT luckyId FROM dgms_lucky_log WHERE account = '" + getAccountName() + "')";
		let push = player.customSqlResult(sql);
		if (push.size() == 0) {
			npc.say("#b暫無可搶禮包！(不會顯示已搶禮包)\r\n#r如果管理員通知發放禮包，點擊確定後繼續搶禮包！");
			break;
		} else {
			str = "#b請選擇禮包(不會顯示已搶禮包):\r\n";
			for (let i = 0; i < push.size(); i++) {
				let signle = push.get(i);
				str += "#L" + i + "# #r禮包 發放日期:" + signle.get("date").toString().substring(0, 19) + "#l\r\n";
			}
			selected = npc.askMenu(str);
			let luckId = push.get(selected).get("id");

			sql = "select * from dgms_lucky where id = '" + push.get(selected).get("id") + "' and max > now";
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
						typeTxt = signle.get("num") + "樂豆點";
						player.modifyCashShopCurrency(1, parseInt(signle.get("num").toString()));
						break;
					case 3:
						typeTxt = signle.get("num") + "楓葉點數";
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
				player.customSqlUpdate("update dgms_lucky set now = now + 1 where id = '" + luckId + "';");
				player.customSqlInsert("INSERT INTO `dgms_lucky_log` (`account`, `luckyId`,`date`) VALUES ('" + getAccountName() + "','" + luckId + "',now())");

				npc.broadcastPlayerNotice(39, "【圓夢谷】" + " : " + "玩家 " + player.getName() + " 領取了管理員發放的" + typeTxt + "")
				npc.say("#b搶到啦！#r獲取:" + typeTxt);
			} else {
				npc.say("#b該禮包已被搶完！#r趕緊搶下一個禮包吧！");
			}
		}
	}
} else {
	//發放禮包
	while (true) {
		str = "請輸入發放類型 1=餘額 2=樂豆點 3=楓葉點數 4=楓幣 物品代碼=物品";
		let type = npc.askNumber(str, "1", 1, 9999999);
		let typeTxt = 0;
		switch (type) {
			case 1:
				typeTxt = "餘額";
				break;
			case 2:
				typeTxt = "樂豆點";
				break;
			case 3:
				typeTxt = "楓葉點數";
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
		str = "請輸入發放" + typeTxt + "的每一份數量（每個人可以獲得多少）";
		let num = npc.askNumber(str, "1", 1, 999999999);
		str = "請輸入發放" + typeTxt + "的份數（多少人可以獲得）";
		let max = npc.askNumber(str, "1", 1, 9999999);
		player.customSqlInsert("INSERT INTO `dgms_lucky` (`type`, `num`,`max`,`now`,`date`) VALUES ('" + type + "', '" + num + "','" + max + "','0',now())");
		npc.broadcastPlayerNotice(39, "『圓夢谷』" + " : " + "管理員 " + player.getName() + " 開啟了限量搶活動。趕緊抓緊時間搶吧。")
		npc.say("發放成功！");
		break;
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