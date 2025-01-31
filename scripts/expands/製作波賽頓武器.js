//裝備制作 by dgms
var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var a3 = "#fEffect/ItemEff/1070069/effect/walk1/2#"

var weaponId = null;
//可以制作的東西
var weaponList = Array(
	1592032,
	1582025,
	1552072,
	1542072,
	1532118,
	1522113,
	1492199,
	1482189,
	1472235,
	1462213,
	1452226,
	1442242,
	1432187,
	1422158,
	1412152,
	1403037,
	1403032,
	1402220,
	1382231,
	1372195,
	1362109,
	1342090,
	1332247,
	1322223,
	1312173,
	1302297,
	1292035,
	1282028,
	1272028,
	1262029,
	1252033,
	1242090,
	1232084,
	1222084,
	1214038,
	1214036,
	1213032,
	1212089

);
//需要的材料
var needItemList = Array(
	//id 數量 說明(可空)
	Array(4034888, 1, ""),
	Array(4034887, 1, ""),
	Array(4034886, 1, ""),
	Array(4033247, 1, ""),
	Array(4001713, 1, ""),
	Array(4001839, 1, ""),
	Array(2614000, 1, ""),
	Array(4009411, 1, "")
);
var selStr = "    " + a3 + "#fs20##fc0xFFFF4EFF#【製作中心】" + a3 + "#fs12##n#l\r\n";
selStr += "#d我這裡可以製作東西哦，請選擇你要製作的東西#n#k\r\n";
for (var key in weaponList) {
	var item = weaponList[key];
	selStr += "#r#L" + key + "#制作 #b#v" + item + "##z" + item + "# #r[查看詳情]\r\n";
}
weaponId = npc.askMenu(selStr);
var text = "- #e#d#z" + weaponList[weaponId] + "#需要的材料：#n#k\r\n\r\n#b";
for (var key in needItemList) {
	var itemName = player.makeItemWithId(needItemList[key][0]).getItemName();
	text += "#v" + needItemList[key][0] + "#" + needItemList[key][2] + "";
	for (var i = 0; i <= 25 - itemName.getBytes().length; i++) {
		text += " ";
	}
	var currentItemQuantity = player.getAmountOfItem(needItemList[key][0]);
	var color = "#g";
	if (currentItemQuantity < needItemList[key][1])
		color = "#r";
	text += color + currentItemQuantity + " / " + needItemList[key][1] + " 個#b\r\n";
}
text += "#k\r\n請輸入兌換數量.#k";
var number = npc.askNumber(text, 0, 0, 999);
var flag = true;
for (var key in needItemList) {
	var itemId = needItemList[key][0];
	var itemQuantity = needItemList[key][1];
	if (!player.hasItem(itemId, itemQuantity * number)) {
		flag = false;
		break;
	}
}
if (flag) {
	if (player.getFreeSlots(1) < 1 || player.getFreeSlots(2) < 1 || player.getFreeSlots(3) < 1 || player.getFreeSlots(4) < 1 || player.getFreeSlots(5) < 1) {
		npc.say("空間不足，請整理後重新制作！");
	} else {
		for (var key in needItemList) {
			var itemId = needItemList[key][0];
			var itemQuantity = needItemList[key][1];
			player.loseItem(itemId, itemQuantity * number);
		}
		player.gainItem(weaponList[weaponId], number);
		npc.say("恭喜您兌換了#z" + weaponList[weaponId] + "# x " + number + ". ");
	}
} else {
	npc.say("材料不足，無法完成制作！");
}