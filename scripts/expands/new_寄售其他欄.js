var itemlist = new Array(
	//需要上架的物品放入 禁止上架裝備
	//Array(2049116,1),//强化混沌

	//跑環
	Array(4000232, 1),
	Array(4000233, 1),
	Array(4000234, 1),
	Array(4000034, 1),
	Array(2633609, 1),
	Array(4310107, 1),
	Array(4310260, 1),
	Array(4000002, 1),
	Array(4000763, 1),
	Array(4032053, 1),
	Array(4032216, 1),
	Array(4000004, 1),
	Array(4000016, 1),
	Array(4000000, 1),
	Array(4310020, 1),
	Array(4000114, 1),
	Array(4000622, 1),
	Array(4000095, 1),
	Array(4310288, 1),
	Array(4000112, 1),
	Array(4000672, 1),
	Array(4000039, 1),
	Array(4000013, 1),
	Array(4000758, 1),
	Array(4000753, 1),
	Array(4000010, 1),
	Array(4000006, 1),
	Array(4000033, 1),
	Array(4000023, 1),
	Array(4000012, 1),
	Array(4000003, 1),
	Array(4000265, 1),
	Array(4000230, 1),
	Array(4000238, 1),
	Array(4000159, 1),
	Array(4000182, 1),
	Array(4000167, 1),
	Array(4000153, 1),
	Array(4000052, 1),
	Array(4000057, 1),
	Array(4000053, 1),
	Array(4000054, 1),
	Array(4000069, 1),
	Array(4000095, 1),
	Array(4000127, 1),
	Array(4000099, 1),
	Array(4000106, 1),
	Array(4000112, 1),
	Array(4000646, 1),
	Array(4000647, 1),
	Array(4000648, 1),
	Array(4000643, 1),
	Array(4000831, 1),
	Array(4000829, 1),
	Array(4000826, 1),
	Array(4000832, 1),
	Array(4000834, 1),
	Array(4000836, 1),
	Array(4000651, 1),
	Array(4000652, 1),
	Array(4000653, 1),
	Array(4000654, 1),
	Array(4000655, 1),
	//其他類目
	Array(4310020, 1),//怪物公園幣
	Array(4310086, 1),//自由轉職幣

	Array(4009411, 1),// 圓夢餘額幣
	Array(4009411, 1)// 餘額幣
	//全服委託物品

);

var text = "#fs21##e#r請選擇你要寄售的物品#fs16#\r\n";
for (var i = 1; i < 129; i++) {
	//var item = player.getInventorySlot(2,i);
	var item = player.getInventorySlot(4, i);
	if (item == null) {
		continue;
	} else if (isCashItem(item.getDataId())) {
		continue;
	} else {
		var flag = false;
		for (var j = 0; j < itemlist.length; j++) {
			if (itemlist[j][0] == item.getDataId()) {
				flag = true;
				break;
			}
		}
		if (!flag) {
			continue;
		} else {
			text += "#L" + i + "# #v" + item.getDataId() + "##t" + item.getDataId() + "##l\r\n";
		}
	}
}

text += "\r\n#fs21##e#r當前可寄售物品一覽:\r\n";
text += "#fs14##b";
for (var i = 0; i < itemlist.length; i++) {
	text += "#v" + itemlist[i][0] + "##z" + itemlist[i][0] + "#\r\n";
}

var pos = npc.askMenuA(text);
var text = "#fs14##b您將上架物品信息\r\n";
var item = player.getInventorySlot(4, pos);
text += "#v" + item.getDataId() + "##z" + item.getDataId() + "#\r\n";
text += "當前持有數量:[#r#c" + item.getDataId() + "##b]\r\n";
var number = npc.askNumber(text + "請輸入您要寄售的數量", 1, 1, 5000);
var meso = npc.askNumber("#fs14##b#v" + item.getDataId() + "##z" + item.getDataId() + "#[#r" + number + "#b]個\r\n請輸入您出售的#r總價#b(單位為#v4009411#)#b\r\n", 1, 1, 200000);
var yes = npc.askYesNo("#fs14##b您確定要上架#v" + item.getDataId() + "##z" + item.getDataId() + "#[#r" + number + "#b]個\r\n總價格#r" + meso + "#b個#v4009411#嗎?");
if (yes == 1) {
	//將道具信息插入寄售裡
	var entid = getEntId(item);
	if (player.hasItem(item.getDataId(), number)) {
		var iid = getKeyId();
		addSale(entid, item.getDataId(), meso, number, iid);//
		addSaleHistory(entid, item.getDataId(), meso, number, iid);//記錄歷史流水
		player.loseItem(item.getDataId(), number);
		npc.say("#fs14##b上架成功");
		player.runScript("new_寄售其他欄");
	} else {
		npc.say("#fs14##b您要上架的道具數量不足");
	}
}

function addSale(entid, itemid, meso, number, iid) {
	var sql = " insert into dgms_sale(iid,characters_id,type,sn,itemid,number,paytime,meso)VALUES(?,?,4,?,?,?,now(),?) ";
	player.customSqlInsert(sql, iid, player.getId(), entid, itemid, number, meso);
}

function addSaleHistory(entid, itemid, meso, number, iid) {
	var sql = " insert into dgms_sale_history(iid,characters_id,type,sn,itemid,number,paytime,remark,meso,status)VALUES(?,?,4,?,?,?,now(),'" + player.getName() + "上架了" + player.makeItemWithId(itemid).getItemName() + "',?,'正在出售') ";
	player.customSqlInsert(sql, iid, player.getId(), entid, itemid, number, meso);
}

function getKeyId() {
	var sql = " SELECT (CASE WHEN max(iid) IS NULL THEN 1 ELSE max(iid) end ) id FROM dgms_sale_history LIMIT 1 ";
	var resultList = player.customSqlResult(sql);

	for (var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		if (result == null) {
			break;
		}
		return parseInt(result.get("id")) + 1;
	}
	return 1;
}

function hasEquip(entid) {
	var sql = "SELECT itemid from inventoryitems_equip a where a.id = ? ";
	var resultList = player.customSqlResult(sql, entid);
	var itemid = -1;
	for (var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		if (result == null) {
			break;
		}
		itemid = result.get("itemid");
	}
	return itemid;
}

function getEntId(item) {
	return item.toString().indexOf("EntId");
}

function isCashItem(itemid) {
	return player.makeItemWithId(itemid).getSN() > -1;
}
