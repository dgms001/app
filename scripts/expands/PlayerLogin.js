date = new Date();
let week = date.getDay();
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();
/*
if (hour >= 21 && player.getEventValue("每日顯示次數") < 3) {
	player.addEventValue("每日顯示次數");
	player.showProgressMessageFont("今日神秘商店位置:[" + getvalue(32) + "]分流:8", 8, 40, 7, 30 * 1000);//MSG,字體,大小,顏色,毫秒後消失(也可設定0)
}*/

player.setSkillLevel(80001089, 1, 1, false);//補學騎寵飛行技能


if (player.getPQLog("斗燃") == 0) {
	player.startBurn(1, 250, 15);
	player.addPQLog("斗燃", 1, 300);
}
Addzlog_Account();

function Addzlog_Account() {
	var sql = "insert into zlog_accounts(accounts_id,accounts_name,ip,macs) values('" + player.getAccountId() + "','" + player.getName() + "','" + getaccountsIp() + "','" + getaccountsMac() + "')";
	player.customSqlInsert(sql);
}
function getaccountsIp() {
	var sql = "select recentip from accounts where id = ? ";
	var result = player.customSqlResult(sql, player.getAccountId());
	if (result.size() > 0) {
		if (result.get(0) != null) {
			return result.get(0).get("recentip");
		}
	} else {
		return 0;
	}

}
function getaccountsMac() {
	var sql = "select recentmacs from accounts where id = ? ";
	var result = player.customSqlResult(sql, player.getAccountId());
	if (result.size() > 0) {
		if (result.get(0) != null) {
			return result.get(0).get("recentmacs");
		}
	} else {
		return 0;
	}

}
function getvalue(NAME) {
	var sql = "select AllName from dgms_worldshop where ID = ? ";
	var result = player.customSqlResult(sql, "" + NAME + "");
	if (result.size() > 0) {
		if (result.get(0) != null) {
			return result.get(0).get("AllName");
		}
	} else {
		return 0;
	}

}