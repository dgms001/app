/*
裝備出售
 */
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";

var text;
var itemList = new Array();
var inventoryType = 1;
var deleteSlot;
var deleteQuantity;
var typed = 0;
var beDeletedArr = new Array();
var listq = Array(
	2, 5, 20
);
var itemq = 0;

var itemlist = Array(
	1212120,
	1222113,
	1232113,
	1242121,
	1242122,
	1252098,
	1262039,
	1302343,
	1312203,
	1322255,
	1332279,
	1342104,
	1362140,
	1372228,
	1382265,
	1402259,
	1412181,
	1422189,
	1432218,
	1442274,
	1452257,
	1462243,
	1472265,
	1482221,
	1492235,
	1522143,
	1532150,
	1542117,
	1552119,
	1582023,
	1272017,
	1282017,
	1592020,
	1404018,
	1213018,
	1292018,
	1214018,
	1403018
);


var itemlist140 = Array(
	1004808,
	1004809,
	1004810,
	1004811,
	1004812,
	1053063,
	1053064,
	1572009,
	1562009,
	1053065,
	1053066,
	1053067,
	1073158,
	1073159,
	1073160,
	1073161,
	1073162,
	1082695,
	1082696,
	1082697,
	1082698,
	1082699,
	1102940,
	1102941,
	1102942,
	1102943,
	1102944,
	1152197,
	1152198,
	1152199,
	1152200,
	1152196
);


var itemlist1 = Array(
	1162080,
	1162081,
	1162082,
	1162083,
	1032316,
	1132308,
	1012632,
	1022278,
	1122430,
	1113306,
	1182285,
	1190555,
	1190556,
	1190557,
	1190558,
	1190559

);

var itemlist2 = Array(
	Array(4001714, 1),
	Array(5062024, 3),
	Array(2049116, 20),
	Array(2049610, 20)
);

var itemlist3 = Array(
	Array(4001715, 10),
	Array(5062024, 1),
	Array(2430673, 1),
	Array(2049116, 4),
	Array(2049610, 4),
	Array(2048717, 40)
	//Array(2431996, 60)

);


var text = head + "#fs21##e#r我可以幫助你回收裝備，可以獲得#r回收材料,楓幣#k。\r\n";
text += "\t\t\t  #fs16##b#L2#" + icon + " 回收說明#l\r\n\r\n";
text += "#r#L1#" + icon + "[回收神秘]裝備#l  #L3#" + icon + "[回收漆黑]裝備#l #L11#" + icon + " [回收創世]裝備#l\r\n\r\n";// #L11#" + icon + " [回收創世]裝備#l



text += "#r#L6#" + icon + " 一鍵回收[深淵]#l #L7#" + icon + " 一鍵回收[航海]#l #L9#" + icon + " [回收蘋果]大獎#l\r\n\r\n";
text += "#r#L10#" + icon + " 一鍵回收[神秘]#l #L8#" + icon + " 一鍵回收[銀河]#l #L12#" + icon + " 永恆黎明[回收]#l\\r\n\r\n";

var selection = npc.askMenuA(text);
if (selection == 2) {
	sayStr();
} else if (selection == 1) {
	resolve140();
} else if (selection == 3) {
	resolve150();
} else if (selection == 4) {
	lowerChange();
} else if (selection == 5) {
	higherChange();
} else if (selection == 6) {
	player.runScript("一鍵回收ffn");
} else if (selection == 7) {
	player.runScript("一鍵回收航海");
} else if (selection == 9) {
	player.runScript("蘋果回收");
} else if (selection == 10) {
	player.runScript("一鍵回收神秘");
} else if (selection == 11) {
	player.runScript("創世分解");
} else if (selection == 12) {
	player.runScript("黎明永恆");
} else if (selection == 8) {
	player.runScript("一鍵回收銀河");
}


function higherChange() {
	var text = "#e#r#h0##k#n\r\n#r您好,回收裝備獲得的#r夏日高級回收幣#可以在我這裏兌換物品~";
	for (var i = 0; i < itemlist3.length; i++) {
		text += "#L" + i + "##i" + itemlist3[i] + ":##t" + itemlist3[i] + "# - #r" + itemlist3[i][1] + "#r個#v4023026#高級回收幣\r\n";
		if (i != 0 && (i + 1) % 5 == 0) {
			//text += "\r\n";
		}
	}
	var selects = npc.askMenu(text);
	var buynum = npc.askNumber("請輸入你請你輸入想要兌換的數量\r\n\r\n#r1個需要" + itemlist3[selects][1] + "個#r回收幣#k", 1, 1, 999999);
	var ys = npc.askYesNo("你想購買" + buynum + "個#r#i" + itemlist3[selects][0] + "##k？\r\n你將使用掉" + (buynum * itemlist3[selects][1]) + "高級回收幣。");
	if (ys == 1) {
		if (buynum >= 1000) {
			npc.say("對不起不支持一次性兌換這麼多.");
		} else if (bag(1) < 1 || bag(2) < 1 || bag(3) < 1 || bag(4) < 1) {
			npc.say("請將裝備，消耗，其他欄空出一格空間！");
		} else if (player.hasItem(4023026, buynum * itemlist3[selects][1])) {
			player.gainItem(itemlist3[selects][0], buynum);
			player.loseItem(4023026, buynum * itemlist3[selects][1]);
			npc.say("恭喜您成功購買#i" + itemlist3[selects][0] + ":# #r#t" + itemlist3[selects][0] + "##k。");
		} else {
			npc.say("對不起，你沒有足夠的回收幣。");
		}
	}
}

function lowerChange() {
	var text = "#e#r#h0##k#n\r\n#r您好,回收裝備獲得的#r低級回收幣#可以在我這裏兌換物品~";
	for (var i = 0; i < itemlist2.length; i++) {
		text += "#L" + i + "##i" + itemlist2[i] + ":##t" + itemlist2[i] + "# - #r" + itemlist2[i][1] + "#r個#v4023025#低級回收幣\r\n";
		if (i != 0 && (i + 1) % 5 == 0) {
			//text += "\r\n";
		}

	}
	var selects = npc.askMenu(text);
	var buynum = npc.askNumber("請輸入你請你輸入想要兌換的數量\r\n\r\n#r1個需要" + itemlist2[selects][1] + "個#r回收幣#k", 1, 1, 999999);
	var ys = npc.askYesNo("你想購買" + buynum + "個#r#i" + itemlist2[selects][0] + "##k？\r\n你將使用掉" + (buynum * itemlist2[selects][1]) + "低級回收幣。");
	if (ys == 1) {
		if (buynum >= 1000) {
			npc.say("對不起不支持一次性兌換這麼多.");
		} else if (bag(1) < 1 || bag(2) < 1 || bag(3) < 1 || bag(4) < 1) {
			npc.say("請將裝備，消耗，其他欄空出一格空間！");
		} else if (player.hasItem(4023025, buynum * itemlist2[selects][1])) {
			player.gainItem(itemlist2[selects][0], buynum);
			player.loseItem(4023025, buynum * itemlist2[selects][1]);
			npc.say("恭喜您成功購買#i" + itemlist2[selects][0] + ":# #r#t" + itemlist2[selects][0] + "##k。");
		} else {
			npc.say("對不起，你沒有足夠的回收幣。");
		}
	}
}

function resolve150() {
	var index_a = 0;
	var text = "\t\t\t\t\t#fs21##r#e- 請選擇要回收的裝備 -#n\r\n\r\n#r";
	var indexof = 1;
	var newItemList = Array();
	for (var j = 1; j <= 128; j++) {
		var item = player.getInventorySlot(1, j);
		if (item == null) {
			continue;
		}
		for (var i = 0; i < itemlist1.length; i++) {
			if (itemlist1[i] == item.getDataId()) {
				newItemList[j] = item.getDataId();
				break;
			}
		}
	}
	for (var key in newItemList) {
		text += "#L" + key + "##v" + newItemList[key] + "#";
		index_a++;
		if (indexof > 1 && indexof % 10 == 0) {
			text += "\r\n";
		}
		indexof++;
	}
	if (index_a <= 0) {
		npc.say("您沒有可以回收的裝備。");
	} else {
		var selection = npc.askMenuA(text);

		var item = player.getInventorySlot(parseInt(inventoryType), parseInt(selection));

		deleteSlot = selection;
		deleteQuantity = 1;
		itemq = getType(item.getDataId());
		if (bag(4) < 2) {
			npc.say("其他欄格子不足，請整理後回收。");;
		} else if (item.getAttribute() == 41) {
			npc.say("帶鎖的裝備不能進行操作。");
		} else {
			var text = "#e確定要回收#r#v" + item.getDataId() + "##z" + item.getDataId() + "# " + deleteQuantity + "個 #k嗎？\r\n#k";
			text += "力量：" + item.getStr() + "\r\n";
			text += "敏捷：" + item.getDex() + "\r\n";
			text += "智力：" + item.getInt() + "\r\n";
			text += "運氣：" + item.getLuk() + "\r\n";
			text += "物理攻擊：" + item.getPad() + "\r\n";
			text += "魔法攻擊：" + item.getMad() + "\r\n";

			var ys = npc.askYesNo(text);
			if (ys == 1) {
				player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
				if (itemq == 10) {
					player.gainItem(4023025, itemq);
					player.gainItem(4310330, itemq);
					text = "回收成功，獲得了#v4023025#" + itemq + "個\r\n獲得了#v4310330#" + itemq + "個";
				} else {
					player.gainItem(4023026, itemq);
					player.gainItem(4310330, itemq);
					text = "回收成功，獲得了#v4023026#" + itemq + "個\r\n獲得了#v4310330#" + itemq + "個";
				}
				npc.say(text);
			}
		}
	}


}

function resolve140() {
	var index_a = 0;
	var text = "\t\t\t\t\t#fs21##r#e- 請選擇要回收的裝備 -#n\r\n\r\n#r";
	var indexof = 1;
	var newItemList = Array();
	for (var j = 1; j <= 128; j++) {
		var item = player.getInventorySlot(1, j);
		if (item == null) {
			continue;
		}
		for (var i = 0; i < itemlist.length; i++) {
			if (itemlist[i] == item.getDataId()) {
				newItemList[j] = item.getDataId();
				break;
			}
		}

		for (var i = 0; i < itemlist140.length; i++) {
			if (itemlist140[i] == item.getDataId()) {
				newItemList[j] = item.getDataId();
				break;
			}
		}

	}
	for (var key in newItemList) {
		text += "#L" + key + "##v" + newItemList[key] + "#";
		index_a++;
		if (indexof > 1 && indexof % 10 == 0) {
			text += "\r\n";
		}
		indexof++;
	}
	if (index_a <= 0) {
		npc.say("您沒有可以回收的裝備。");
	} else {
		var selection = npc.askMenuA(text);


		var item = player.getInventorySlot(parseInt(inventoryType), parseInt(selection));

		deleteSlot = selection;
		deleteQuantity = 1;
		itemq = getType(item.getDataId());
		if (bag(4) < 2) {
			npc.say("其他欄格子不足，請整理後回收。");;
		} else if (item.getAttribute() == 41) {
			npc.say("帶鎖的裝備不能進行操作。");
		} else {
			var text = "#e確定要回收#r#v" + item.getDataId() + "##z" + item.getDataId() + "# " + deleteQuantity + "個 #k嗎？\r\n#k";
			text += "力量：" + item.getStr() + "\r\n";
			text += "敏捷：" + item.getDex() + "\r\n";
			text += "智力：" + item.getInt() + "\r\n";
			text += "運氣：" + item.getLuk() + "\r\n";
			text += "物理攻擊：" + item.getPad() + "\r\n";
			text += "魔法攻擊：" + item.getMad() + "\r\n";

			var ys = npc.askYesNo(text);
			if (ys == 1) {
				player.loseInvSlot(parseInt(inventoryType), parseInt(deleteSlot));
				if (itemq == 10) {
					player.gainItem(4023026, itemq);
					player.gainItem(4310218, itemq);
					text = "回收成功，獲得了#v4023026#" + itemq + "個\r\n獲得了#v4310218#" + itemq + "個";
				} else {
					player.gainItem(4023025, itemq);
					player.gainItem(4310218, itemq);
					text = "回收成功，獲得了#v4023025#" + itemq + "個\r\n獲得了#v4310218#" + itemq + "個";
				}
				npc.say(text);
			}

		}
	}
}

function sayStr() {
	var text = "#fs21##e#r回收說明#n#k：\r\n";
	text += "#fs16##b#e深淵/航海/銀河系列裝備可以進行回收獲取楓幣。\r\n\r\n";
	text += "#b神秘裝備回收獲得#r1#b個#v4023025##r1#b個#v4310218#\r\n";
	text += "#b漆黑裝備回收獲得#r1#b個#v4023026##r1#b個#v4310330#\r\n";
	text += "蘋果大獎回收獲得#r1#b個#v4036168#\r\n";
	//text += "黎明飾品回收獲得預留位置\r\n";
	//text += "永恆防具回收獲得預留位置\r\n";
	text += "未解封創世回收獲得#r1#b個#v4310107#\r\n";
	//text += "解封創世回收獲得#r1#b個#v4310260#用於兌換解封的創世\r\n";
	npc.askMenuA(text);
}

function getType(itemID) {
	var itemq = 1;
	for (var i = 0; i < itemlist.length; i++) {
		if (itemlist[i] == itemID) {
			itemq = 1;
		}
	}
	for (var i = 0; i < itemlist140.length; i++) {
		if (itemlist140[i] == itemID) {
			itemq = 1;
		}
	}

	return itemq;
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