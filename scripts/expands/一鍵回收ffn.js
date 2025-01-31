/*
裝備出售
 */
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";

var text;
var itemList = new Array();
var inventoryType;
var deleteSlot;
var deleteQuantity;
var typed = 0;
var beDeletedArr = new Array();
var beDeletedArr1 = new Array();
var beDeletedArr2 = new Array();
var beDeletedArr3 = new Array();
var beDeletedArr4 = new Array();
var listq = Array(
	5000, 7000, 10000
);

var itemlist = Array(
	1232057,
	1312153,
	1322203,
	1404016,
	1302275,
	1402196,
	1412135,
	1422140,
	1432167,
	1442223,
	1582016,
	1542063,
	1213016,
	1212063,
	1262016,
	1372177,
	1382208,
	1252015,
	1552063,
	1282015,
	1452205,
	1462193,
	1522094,
	1592018,
	1214016,
	1242060,
	1332225,
	1342082,
	1362090,
	1472214,
	1292016,
	1272015,
	1222058,
	1242061,
	1482168,
	1492179,
	1532098,
	1403016


);

var itemlist1 = Array(
	1003797,
	1003798,
	1003799,
	1003800,
	1003801,
	1042254,
	1042255,
	1042256,
	1042257,
	1042258,
	1062165,
	1062166,
	1062167,
	1062168,
	1062169
);

var chance = 0;

var itemq = 0;



var newItemList = Array();
inventoryType = 1;
var indexof = 1;
var item = null;
var text = "\t\t#e- 以下是準備回收的裝備,請核對仔細 -#n\r\n\r\n#r";
for (var j = 1; j <= 128; j++) {
	item = player.getInventorySlot(1, j);
	if (item == null) {
		continue;
	}

	if (null != itemlist && itemlist.length > 0) {
		var flag = null;
		for (var i = 0; i < itemlist.length; i++) {
			flag = true;
			if (itemlist[i] == item.getDataId()) {
				flag = false;
				break;
			}
		}
	}
	if (flag) {
		if (null != itemlist1 && itemlist1.length > 0) {
			var flag = null;
			for (var i = 0; i < itemlist1.length; i++) {
				flag = true;
				if (itemlist1[i] == item.getDataId()) {
					flag = false;
					break;
				}

			}
		}
	}



	if (item.getCUC() > 0) {
		continue;//說明強化過
	}
	if (item.getGrade() > 17) {
		continue;//說明有潛能
	}
	if (flag) {
		continue;
	}


	newItemList.push(item.getDataId());
	beDeletedArr.push(j);

}

for (var key in newItemList) {
	text += "#v" + newItemList[key] + "#";
	indexof++;
}
text += "\r\n#r#e回收操作不可逆，請確認是否要回收以上裝備？#n#k\r\n可以獲得:#v4001713# x " + newItemList.length * 5 + "個";

if (newItemList.length <= 0 || beDeletedArr.length == 0) {
	npc.say("您沒有可以回收的裝備。" + newItemList);
} else if (bag(1) < 1 || bag(2) < 1 || bag(3) < 1 || bag(4) < 1) {
	npc.say("請將裝備，消耗，其他欄空出一格空間！");
} else {
	var ys = npc.askYesNo(text);
	if (ys == 1) {
		var count = beDeletedArr.length * 5;
		var indexPosi = 0;
		for (var key in beDeletedArr) {
			if (beDeletedArr[key] > 128) {
				indexPosi = beDeletedArr[key];
			}
		}
		for (var key in beDeletedArr) {
			player.loseInvSlot(1, beDeletedArr[key]);
		}
		player.gainItem(4001713, count);
		text = "回收成功，獲得了" + count + "x#v4001713#";
		npc.say(text);
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
