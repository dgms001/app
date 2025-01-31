





var txt = "#fs16##e#b親愛的#r " + player.getName() + " #b 你好：\r\n\r\n";
txt += "#b以下是您的賬戶信息:#k#n\r\n";

txt += "#b帳號ID:#r[ " + player.getAccountId() + " ]\r\n\r\n";
txt += "#b在線時長：#r" + player.getOnlineTime() + " 分鐘\r\n\r\n";
//txt += "#b當前擁有樂豆：#r" + player.getCashShopCurrency(1) + "\r\n";
txt += "#b楓點：#r" + player.getCashShopCurrency(2) + "\r\n\r\n";


txt += "#b餘額:#r" + getHyPay() + "#k\r\n\r\n";
txt+="#b餘額幣:#r#c4009411# 個\r\n\r\n";
txt += "#b已累積：#r" + getLeiji() + "\r\n\r\n";
//	txt+="#k當前擁有突破積分：#b" + getCash() + "\r\n";
//	txt+="#k當前擁有活力：#b" + player.getPQLog("活力") + "\r\n";


//if (player.getOnlineTime() > 500) {
	//txt += "#r友情提示：你的在線時間過長，請注意休息愛護自己哦！  ";
//}
player.addPopupSay(9001223,6000,txt,"");
//npc.askMenu(txt, true);

function getHyPay() {
	var sql = "select pay from hypay where accountid = ? ";
	var result = player.customSqlResult(sql, player.getAccountId());
	if (result.size() > 0) {
		if (result.get(0) != null) {
			return result.get(0).get("pay");
		}
	} else {
		return 0;
	}

}
function getLeiji() {
	var sql = "select leiji from hypay where accountid = ? ";
	var result = player.customSqlResult(sql, player.getAccountId());
	if (result.size() > 0) {
		if (result.get(0) != null) {
			return result.get(0).get("leiji");
		}
	} else {
		return 0;
	}

}

function getCash() {
	var sql = "select paihangbang2 from hypay where accountid = ? ";
	var result = player.customSqlResult(sql, player.getAccountId());
	if (result.size() > 0) {
		if (result.get(0) != null) {
			return parseInt(result.get(0).get("paihangbang2") * 0.5);
		}
	} else {
		return 0;
	}

}


function getCash1() {
	var sql = "select cash from hypay where accountid = ? ";
	var result = player.customSqlResult(sql, player.getAccountId());
	if (result.size() > 0) {
		if (result.get(0) != null) {
			return parseInt(result.get(0).get("cash") * 1);
		}
	} else {
		return 0;
	}

}