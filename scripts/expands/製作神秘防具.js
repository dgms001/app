//裝備制作 by dgms
var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var a3 = "#fEffect/ItemEff/1070069/effect/walk1/2#"

var weaponId = null;
//可以制作的東西
var weaponList = Array(
	1152196,
	1152197,
	1152198,
	1152199,
	1152200,
	1004808,
	1004809,
	1004810,
	1004811,
	1004812,
	1102940,
	1102941,
	1102942,
	1102943,
	1102944,
	1082695,
	1082696,
	1082697,
	1082698,
	1082699,
	1053063,
	1053064,
	1053065,
	1053066,
	1053067,
	1073158,
	1073159,
	1073160,
	1073161,
	1073162
);
//需要的材料
var needItemList = Array(
	//id 數量 說明(可空)
	Array(4310300, 75, " [Boss掉落,材料製作]"),
	//Array(4310299, 5, " [Boss掉落]"),	
	//Array(4034888, 35, " [Boss掉落]"),
	//Array(4034887, 35, " [Boss掉落]"),
	//Array(4034886, 35, " [Boss掉落]"),
	//Array(4033247, 2500, " [怪物掉落]"),
	//Array(4001713, 2500, " [怪物掉落]"),
	//Array(4001839, 10000, " [怪物掉落]"),
	//Array(2614000, 5000, " [Boss掉落,怪物掉落,在線獎勵]"),
	//Array(4009411, 5, " [在線獎勵]")	
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
	text += "#v" + needItemList[key][0] + "##z" + needItemList[key][0] + "#";
	/*for(var i=0; i<=25-itemName.getBytes().length; i++)
	{
		text+=" ";
	}*/
	var currentItemQuantity = player.getAmountOfItem(needItemList[key][0]);
	var color = "#g";
	if (currentItemQuantity < needItemList[key][1])
		color = "#r";
	text += color + currentItemQuantity + "/" + needItemList[key][1] + "個#b" + needItemList[key][2] + "\r\n";
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