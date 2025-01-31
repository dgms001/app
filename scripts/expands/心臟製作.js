//裝備製作 CC
var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";


var weaponId = null;
//可以製作的東西
var weaponList = [
	//戰士

	1672069,


]
//需要的材料
var needItemList = Array(
	Array(4032053, 50000),
	Array(4000686, 6666),
	Array(4000266, 6666),
	Array(4000648, 6666),
	Array(4000834, 6666),
	Array(4000164, 6666)
);

var selStr = "#d我這裡可以製作東西哦，請選擇你要製作的東西#n#k\r\n";
for (var key in weaponList) {
	var item = weaponList[key];
	selStr += "#r#L" + key + "#製作 #b#v" + item + "##z" + item + "# #r[查看詳情]\r\n";
}

weaponId = npc.askMenu(selStr);
var text = "- #e#d#z" + weaponList[weaponId] + "#需要的材料：#n#k\r\n\r\n#b";
for (var key in needItemList) {
	var itemName = player.makeItemWithId(needItemList[key][0]).getItemName();
	text += itemName + "#v" + needItemList[key][0] + "#";
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
		npc.say("空間不足，請整理後重新製作！");
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
	npc.say("材料不足，無法完成製作！");

}