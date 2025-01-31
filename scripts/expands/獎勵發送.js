/* This is a piece of code

 * author dgms

 * global player

 * 脚本定制 技术支持 QQ 381991414
  
 * 限定賬號ID紅包類
 
 */
var 任務簡介 = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#"
var Gift = "#fUI/UIWindow2/crossHunterUI/reward/button/normal/0#";
//var 空心圓圈2 = "#fUI/UIWindow2/bohabManager/dot/2/dot#";
var 空心圓圈2 = "";


//發放紅包
while (true) {
	str = "#fs14##b請輸入玩家帳號ID";
	let nameid = npc.askNumber(str, "1", 1, 99999);
	str = "#fs14##b請輸入發放類型:\r\n";
	str += "#r#L1#餘額#l #L2#樂豆#l #L3#楓點#l #L4#楓幣#l \r\n";
	str += "#L2435745##v2435745#卡位(2435745)#l\r\n";
	str += "#L2432040##v2432040#助力(2432040)#l\r\n";
	str += "#L2433013##v2433013#補償(2433013)#l\r\n";
	str += "#L2433014##v2433014#100讚(2433014)#l\r\n";
	str += "#L2430695##v2430695#168推文獎勵(2430695)#l\r\n";
	str += "#L10##v2430695#+#v2433014#合併發送數量1#l\r\n";




	str += "";
	let type = npc.askMenu(str);
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
		case 10:
			typeTxt = "推文懶人發送";
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
	if (typeTxt == "推文懶人發送") {

		player.customSqlInsert("INSERT INTO `dgms_server` (`nameid`,`type`, `num`,`max`,`now`,`date`) VALUES ('" + nameid + "','" + 2430695 + "', '" + num + "','1','0',now())");
		player.customSqlInsert("INSERT INTO `dgms_server` (`nameid`,`type`, `num`,`max`,`now`,`date`) VALUES ('" + nameid + "','" + 2433014 + "', '" + num + "','1','0',now())");
	} else {
		player.customSqlInsert("INSERT INTO `dgms_server` (`nameid`,`type`, `num`,`max`,`now`,`date`) VALUES ('" + nameid + "','" + type + "', '" + num + "','1','0',now())");
	}

	//npc.broadcastPlayerNotice(39,"『泡泡谷獎勵』" + " : " + "哇塞，管理員 " + player.getName() + " 發送了獎勵。")
	npc.say("發放成功！#b" + typeTxt + "#k ｜ 數量 #r" + num + " 。");
	if (type == 2436162) {
		player.showSystemMessage("發送[ 帳號 : " + nameid + " ]  FB推文｜數量 :" + num + "   成功！");
	} else if (type == 2430658) {
		player.showSystemMessage("發送[ 帳號 : " + nameid + " ] 168推文｜數量 :" + num + "   成功！");
	} else {
		player.showSystemMessage("發送[帳號 : " + nameid + " ] 成功！ " + type + "｜數量 " + num + " 。");
	}
	break;
}
player.runScript("獎勵發送");



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