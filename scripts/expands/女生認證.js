/*
 便捷功能
 */

var status;
var text;
var selstatus = -1;
var itemList = new Array();
var inventoryType;
var deleteSlot;
var deleteQuantity;
var itemid_by = 0;
var s_type = 0;
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var charId = 0;

var l1 = "#fEffect/CharacterEff/1112925/0/0#";  //藍心
var l2 = "#fEffect/CharacterEff/1112925/0/1#";  //藍心
var l3 = "#fEffect/CharacterEff/1112926/0/0#";  //粉心
var l4 = "#fEffect/CharacterEff/1112926/0/1#";  //粉心

var tz11 = "#fEffect/CharacterEff/1112930/0/3#";  //粉心



var l5 = "#fEffect/CharacterEff/1112946/0/0#";  //鉆石
var l6 = "#fEffect/CharacterEff/1112946/0/1#";  //鉆石
var l7 = "#fEffect/CharacterEff/1112946/1/0#";  //鉆石
var l8 = "#fEffect/CharacterEff/1112946/1/1#";  //鉆石
var l9 = "#fEffect/CharacterEff/1112946/2/0#";  //鉆石
var l10 = "#fEffect/CharacterEff/1112946/2/1#";  //鉆石
var l11 = "#fEffect/CharacterEff/1112946/3/0#";  //鉆石
var l12 = "#fEffect/CharacterEff/1112946/3/1#";  //鉆石
var l13 = "#fEffect/CharacterEff/1112946/4/0#";  //鉆石
var l14 = "#fEffect/CharacterEff/1112946/4/1#";  //鉆石
var l15 = "#fEffect/CharacterEff/1112946/5/0#";  //鉆石
var l16 = "#fEffect/CharacterEff/1112946/5/1#";  //鉆石


var l17 = "#fEffect/CharacterEff/1112949/1/0#";  //好看1
var l18 = "#fEffect/CharacterEff/1112949/2/0#";  //好看1
var tz20 = "#fEffect/CharacterEff/1112960/3/0#";  //好看兔子

var tz21 = "#fEffect/CharacterEff/1050312/3/0#";  //好看兔子

var tz22 = "#fEffect/CharacterEff/forceAtom/2/atom/3/parentAtom/2#";  //好看兔子

var tz23 = "#fEffect/CharacterEff/forceAtom/3/atom/3/parentAtom/0#";  //好看兔子
var jsonArray = [];
var itemList = Array();
start();
function start() {
	var text = "#r您好，您的角色id：" + player.getId() + "。\r\n如果您已經認證，請將此id告訴[GM]\r\n";
	text += "#r\t#L1#" + tz20 + "領取女生徽章#l\r\n\r\n";

	text += "#r\t#L2#" + tz20 + "[GM]認證錄入#l\r\n";
	var selection = npc.askMenu(text);
	if (selection == 1) {
		var girl = girlInfo(player.getId());
		if (null == girl.id) {
			npc.say("認證名單不存在你,如需認證請聯系管理員。");
		} else if (girl.remark != null) {
			npc.say("您已經領取過了，不能重復領取。");
		} else if (bag(1) < 1) {
			npc.say("領取失敗，消耗欄沒有一個空格。");
		} else {
			player.gainItem(2431394, 1);
			let newItem = player.makeItemWithId(1143031);
			newItem.setTitle("圓夢谷的妹妹");
			newItem.setDex(500);
			newItem.setStr(500);
			newItem.setInt(500);
			newItem.setLuk(500);
			newItem.setMad(500);
			newItem.setPad(500);
			newItem.setBossDamageR(80);//BOSS
			newItem.setIgnorePDR(80);//無視
			newItem.setDamR(80);//總傷
			newItem.setMaxHp(5000);
			newItem.setMaxMp(5000);
			player.gainItem(newItem);
			//修改狀態.
			updGirl();
			npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "成功認證女生玩家!!!!");
			npc.say("領取成功,女生徽章放在背包點獎勵中心可以看到女生福利。");
		}
	} else if (selection == 2) {
		if (player.getId() == 0 || player.isGm()) {
			var num = npc.askNumber("請輸入認證玩家的角色ID#k#n", 1, 1, 1000000);
			var girl = girlInfo(num);
			var name = getCharName(num);
			if (girl.id != null) {
				npc.say("已經錄入過該玩家。");
			} else if (name == null) {
				npc.say("這個玩家id不存在。");
			} else {
				var yn = npc.askYesNo("是否錄入id：" + num + ",角色名:" + name + "？");
				if (yn == 1) {
					addGirlInfo(num);
					npc.say("錄入成功");
				}
			}

		} else {
			npc.say("沒有資格進行錄入。");
		}
	}
}


function bag(type) {
	let bagCount = 0;
	for (var slot = 1; slot < 129; slot++) {
		let item = player.getInventorySlot(type, slot);
		if (item == null) {
			bagCount++
		}
	}
	return bagCount;
}


function updGirl() {
	var sql = "update zz_girlbadge set remark ='領取了女生徽章' where characterId = " + player.getId();
	player.customSqlUpdate(sql);
}

//
function addGirlInfo(charid) {
	var sql = "insert into zz_girlbadge(characterId,paytime,remark) values(" + charid + ",now(),null)";
	player.customSqlInsert(sql);
}


function getAccountName() {
	var sql = "select name from accounts where id = " + player.getAccountId() + " ";
	var resultList = player.customSqlResult(sql);
	var accountName = 0;
	for (var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		if (accountName == null) {
			break;
		}
		var accountName = result.get("name");
	}
	return accountName;
}



function getCharName(playerid) {
	var sql = "select name from characters where id = " + playerid + " ;";
	var name = null;
	var resultList = player.customSqlResult(sql);
	var name = null;
	if (null != resultList) {
		for (var i = 0; i < resultList.size(); i++) {
			var result = resultList.get(i);
			if (result == null) {
				break;
			}
			name = result.get("name");
			break;
		}
	}
	return name;
}


function girlInfo(playerId) {
	var sql = "select id,remark from zz_girlbadge where characterId = " + playerId + " ";
	var resultList = player.customSqlResult(sql);
	var girlInformation = {};
	if (null != resultList) {
		for (var i = 0; i < resultList.size(); i++) {
			var result = resultList.get(i);
			if (result == null) {
				break;
			}
			girlInformation.id = result.get("id");
			girlInformation.remark = result.get("remark");
			break;
		}
	}
	return girlInformation;
}

