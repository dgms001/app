var itemlist = new Array(

	Array(5062009, 1),//紅色方塊
	Array(5062010, 1),//黑色方塊
	Array(5062017, 1),//閃耀方塊
	Array(5062020, 1),//閃炫方塊
	Array(5062500, 1),//附加方塊
	Array(5062503, 1),//白色附加方塊
	Array(5062026, 1),//結合方塊
	Array(5064502, 1),//結合方塊
	Array(5064400, 1)//恢復卡


);
var text = "#fs21##e#r請選擇你要寄售的物品#fs16#\r\n";


for (var i = 1; i < 129; i++) {
	//var item = player.getInventorySlot(2,i);
	var item = player.getInventorySlot(5, i);
	if (item == null) {
		continue;
	} else if (!isCashItem(item.getDataId())) {
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

text += "\r\n#r當前可寄售物品一覽:\r\n";
text += "#fs14##b";
for (var i = 0; i < itemlist.length; i++) {
	text += "#v" + itemlist[i][0] + "##z" + itemlist[i][0] + "#\r\n";
}

var pos = npc.askMenuA(text);
var text = "#fs14##b您將上架物品信息\r\n";
var item = player.getInventorySlot(5, pos);
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
		player.runScript("new_寄售特殊欄");
	} else {
		npc.say("#fs14##b您要上架的道具數量不足");
	}
}

function addSale(entid, itemid, meso, number, iid) {
	var sql = " insert into dgms_sale(iid,characters_id,type,sn,itemid,number,paytime,meso)VALUES(?,?,5,?,?,?,now(),?) ";
	player.customSqlInsert(sql, iid, player.getId(), entid, itemid, number, meso);
}

function addSaleHistory(entid, itemid, meso, number, iid) {
	var sql = " insert into dgms_sale_history(iid,characters_id,type,sn,itemid,number,paytime,remark,meso,status)VALUES(?,?,5,?,?,?,now(),'" + player.getName() + "上架了" + player.makeItemWithId(itemid).getItemName() + "',?,'正在出售') ";
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
