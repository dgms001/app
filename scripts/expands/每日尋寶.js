var a8 = "#fEffect/ItemEff.img/1070069/effect/walk1/0#" //彩虹小云0-7
var a88 = "#fEffect/ItemEff.img/1070069/effect/walk1/4#" //彩虹小云0-7
var a888 = "#fEffect/ItemEff.img/1070069/effect/walk1/6#" //彩虹小云0-7
var text = "";
var questid = 200100;
var maxtimes = 10;
var playerid = 0;
var accepttimes = 0;
var questitemid = 0;
var questitemcs = 0;
var mapid = 0;
var qinfo = "";
var lastMapList = Array();
var maplist = Array(
	//#makenpc 1052010
	Array(270010111, "時間之路-凝視著的房間"),
	Array(300000000, "亞太爾營地-營地會議場"),
	Array(104000001, "維多利亞港-防具商店"),
	Array(103000003, "墮落都市-秘密據點"),
	Array(220000004, "玩具城-美髮店"),
	Array(105000000, "奇幻村"),
	Array(200000100, "天空之城-售票處"),
	Array(230000003, "水世界-動物園"),
	Array(211000001, "艾納斯島-長老公館"),
	Array(101000003, "魔法森林-圖書館"),
	Array(100000003, "弓箭手村-麗娜的家"));

playerid = player.getId();
accepttimes = maxtimes - getEventValue("尋寶任務", false);

let date = player.getQuestRecordEx(questid, "date");
//比對時間 如果資料庫記錄的不是今天的日期 則全部重新整理
if (date != getNowFormatDate()) {
	player.updateQuestRecordEx(questid, "date", getNowFormatDate());
	player.updateQuestRecordEx(questid, "questN", "-1");
}

let questN = player.getQuestRecordEx(questid, "questN"); //任務地圖
text = "" + a8 + "  " + a888 + "" + a888 + "" + a888 + " " + a88 + "#n";
text += "#b今日剩餘尋寶次數：#r" + accepttimes + "#k 次\r\n";
text += "#b我的財富，遍佈世界各地……\r\n";
text += "#r說明:#b領取任務後,購買黃金羅盤打開背包[ #r雙擊黃金羅盤 #b]\r\n"
text += "#r說明:#b尋找地圖上寶箱NPC,雙擊完成\r\n"
text += "#b隨機獎勵預覽：\r\n#v5062020:##v5062017:##v4032053:##v4001714:##r\r\n";
text += "#r#L999#尋寶任務簡介#l#k";
if (questN != -1) { // 判斷是否接取了任務
	if (player.isQuestCompleted(questid)) { // 判斷是否完成任務
		if (accepttimes <= 0) { // 判斷是否超過完成次數
			text += "您已經完成了今天的尋寶任務，請明天0點後再來吧~\r\n";
		} else {
			text += "#b#L0#接受任務#l#k";
		}
	} else {
		text += "\r\n#r#L4#放棄任務 (無法獲得任何獎勵，且會消耗一次任務次數)#l\r\n";
	}
} else if (accepttimes > 0) {
	text += "#b#L3#接受任務#l ";
} else {
	text += "\r\n\r\n您已經完成了今天的尋寶任務，請明天0點後再來吧~\r\n";
}
text += "#b#L222#購買黃金羅盤#l#k\r\n\r\n";
text += "" + a8 + "  " + a888 + "" + a888 + "" + a888 + " " + a88 + "#n\r\n\r\n";
var selected = npc.askMenu(text);
switch (selected) {
	case 999:
		text = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n\r\n#e#d什麼是尋寶任務？#n#k\r\n";
		text += "\t接受尋寶任務之後，你將會獲得一箇#b尋寶便籤#k，我會告訴你可能藏有寶藏的5個地圖，並且會儲存在尋寶便籤中，你需要找到這個#b正確的地圖#k並開啟便籤確認正確的地圖。\r\n";
		text += "#e#d什麼是黃金羅盤？#n#k\r\n";
		text += "\t使用黃金羅盤，可以幫助你直接尋找到正確的寶藏地圖。您可以透過購買獲得黃金羅盤，同時尋寶過程中有機率獲得黃金羅盤。\r\n";
		npc.say(text);
		break;
	case 222:
		var YN = npc.askYesNo("是否要花費#r1000#k楓點購買十箇黃金羅盤？");
		if (YN == 1) {
			if (player.getCashShopCurrency(2) < 1000) {
				npc.say("你沒有" + 1000 + " 楓點");
			} else {
				player.gainItem(2430030, 10);
				player.modifyCashShopCurrency(2, -1000);
				npc.say("購買成功!");
			}
		} else {
			npc.say("需要再來找我吧！");
		}
		break;
	case 3:
		//接受任務
		if (player.getLevel() < 160) {
			npc.say("等級不足160級，無法領取任務。");
		} else if (player.getFreeSlots(2) < 1) {
			npc.say("你的消耗欄格子不足，請先整理一下吧。");
		} else {
			getRandomArray();
			var questrandid = Math.floor(Math.random() * lastMapList.length);
			mapid = lastMapList[questrandid][0]// 任務地圖ID
			player.gainItem(2430251, 1);
			text = "\r\n";
			var jj = 1;
			for (var key in lastMapList) {
				player.updateQuestRecordEx(questid, "map" + jj, lastMapList[key][0]);
				//qinfo += "#b" + lastMapList[key][1] + "\r\n";
				text += "#b" + lastMapList[key][1] + "\r\n";
				jj++;
			}
			player.updateQuestRecordEx(questid, "questN", mapid);
			player.updateQuestRecordEx(questid, "mapsInfos", lastMapList);
			setEventValue("尋寶任務", 1);
			npc.say(text);
		}
		break;
	case 4:
		//放棄任務
		var YN = npc.askYesNo("是否放棄任務？");
		if (YN == 1) {
			player.updateQuestRecordEx(questid, "questN", "-1");
			player.loseItem(2430251, 1);
			npc.say("放棄成功，可以重新接取任務了！");
		} else {
			npc.say("請繼續加油");
		}
		break;
}
player.runScript("每日尋寶");

function getRandomArray() {
	if (lastMapList.length >= 5)
		return true;
	var newMapId = maplist[Math.floor(Math.random() * maplist.length)];
	for (var key in lastMapList) {
		if (lastMapList[key] == newMapId) {
			getRandomArray();
			return false;
		}
	}
	lastMapList.push(newMapId);
	getRandomArray();
}

//flag = true 查總的不重置
//flag = false 查當天的
function getEventValue(event1, flag) {
	var charInfo = getCharInfo();
	if (flag) {
		var sql = "SELECT SUM(value) AS numbe FROM zz_xr_event WHERE accounts_id = " + parseInt(charInfo.accounts_id) + " and event = '" + event1 + "' and world =" + parseInt(charInfo.world) + " ";
	} else {
		var sql = "SELECT SUM(value) AS numbe FROM zz_xr_event WHERE accounts_id = " + parseInt(charInfo.accounts_id) + " and event = '" + event1 + "' and world =" + parseInt(charInfo.world) + " AND DATE_FORMAT(time, '%Y-%m-%d') = DATE_FORMAT(NOW(), '%Y-%m-%d') ";
	}
	var resultList = player.customSqlResult(sql);
	var count = 0;
	for (var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		if (result == null) {
			break;
		}
		count = result.get("numbe");
		if (count == null) {
			count = 0;
		}
	}
	return parseInt(count);
}

function setEventValue(event1, value1) {
	var charInfo = getCharInfo();
	var sql = "INSERT INTO zz_xr_event(accounts_id, world, `event`,`value`,time) VALUES(" + charInfo.accounts_id + "," + charInfo.world + ",'" + event1 + "'," + value1 + ",now())";
	player.customSqlInsert(sql);
}

function getCharInfo() {
	var sql = "SELECT id accounts_id,world FROM characters WHERE id = " + player.getId() + "";
	var resultList = player.customSqlResult(sql);
	var charInfo = {};
	for (var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		if (result == null) {
			break;
		}
		charInfo.accounts_id = result.get("accounts_id");
		charInfo.world = result.get("world");
	}
	return charInfo;
}

function gainItemPeriod(itemid, quantity, time) {
	if (time < 1000 && time > 0) {
		time = 1000 * 60 * 60 * 24 * time;
	}
	for (var i = 0; i < quantity; i++) {
		let newItem = player.makeItemWithId(itemid);
		if (time != 0) {
			newItem.setExpiration(new Date().getTime() + time);
		}
		player.gainItem(newItem);
	}
}

//獲取當前時間，格式YYYY-MM-DD
function getNowFormatDate() {
	let date = new Date();
	let seperator1 = "";
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let strDate = date.getDate();
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	let currentdate = year + seperator1 + month + seperator1 + strDate;
	return currentdate;
}
