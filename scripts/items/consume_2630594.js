//裝備制作 by dgms
var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var a3 = "#fEffect/ItemEff/1070069/effect/walk1/2#"

var weaponId = null;
//可以制作的東西
var weaponList = Array(
	1099018,
	1352013,
	1352213,
	1352209,
	1352219,
	1352229,
	1352239,
	1352249,
	1352259,
	1352269,
	1352279,
	1352289,
	1352299,
	1352410,
	1352510,
	1352610,
	1352711,
	1352819,
	1352909,
	1352919,
	1352948,
	1352978,
	1353010,
	1353405,
	1552133,
	1354017,
	1354007,
	1353807,
	1353606,
	1353505,
	1353306,
	1352933,
	1353105,
	1098006,
	1353205,
	1352867,
	1353707,
	1354027,

	1352831, 1352981, 1353900, 1352990, 1352938, 1352113,

	//1352276,1352807,1352928,1352957,1352967,1352935,1352109,

	1342095

);
//需要的材料
var needItemList = Array(
	//id 數量 說明(可空)
	Array(2630594, 200, "")
);
let mapA = map.getId();
if (mapA == 993001100) { //限制開啟地圖
	//player.showSystemMessage("在卡BUG頭蓋骨給你打出來 操!!");
} else {
	selStr = "";
	selStr += "#fs##e#d親愛的玩家，請自選你要的裝備!!#n#k\r\n";
	for (var key in weaponList) {
		var item = weaponList[key];
		selStr += "#r#L" + key + "#自選#b#v" + item + "##z" + item + "#\r\n";
	}
}
weaponId = npc.askMenu(selStr);
var text = "#e#v" + weaponList[weaponId] + "##b#fs18##e#z" + weaponList[weaponId] + "##d需要的材料：#n#k\r\n\r\n#b";
for (var key in needItemList) {
	var itemName = player.makeItemWithId(needItemList[key][0]).getItemName();
	text += "#v" + needItemList[key][0] + "# #fs14##b#z" + needItemList[key][0] + "#" + needItemList[key][2] + "";
	for (var i = 0; i <= 15 - itemName.getBytes().length; i++) {
		text += " ";
	}
	var currentItemQuantity = player.getAmountOfItem(needItemList[key][0]);
	var color = "#b#fs14#";
	if (currentItemQuantity < needItemList[key][1])
		color = "#r";
	text += color + currentItemQuantity + "/" + needItemList[key][1] + " 個#b\r\n";
}
text += "\r\n請輸入兌換數量";
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
		npc.say("#fs18##b#e空間不足，請整理後重新制作！");
	} else {
		for (var key in needItemList) {
			var itemId = needItemList[key][0];
			var itemQuantity = needItemList[key][1];
			player.loseItem(itemId, itemQuantity * number);
		}
		player.gainItem(weaponList[weaponId], number);
		npc.say("#fs18##b#e恭喜您兌換了#r#v" + weaponList[weaponId] + "##z" + weaponList[weaponId] + "# #bx " + number + ". ");
	}
} else {
	npc.say("#fs18##b#e材料不足，無法完成制作！");
}