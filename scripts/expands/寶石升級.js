//裝備制作 by dgms
var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var a3 = "#fEffect/ItemEff/1070069/effect/walk1/2#"

var zx24 = "#fMap/MapHelper.img/weather/nightMarket/5#";


var weaponId = null;
//可以制作的東西
var weaponList = Array(
	//id 數量 說明(可空)
	Array(1202161, 1, 1202295, 1),
	Array(1202164, 1, 1202296, 1),
	Array(1202162, 1, 1202297, 1),
	Array(1202163, 1, 1202298, 1)
);
var item;

//需要的材料
var needItemList = Array(
	//id 數量 說明(可空)
	Array(4034124, 25, ""),
	Array(4032053, 500, ""),
	Array(4021032, 100, ""),
	Array(4021036, 50, "")
);
var selStr = "\t\t \t   #e#fs20##r圖騰升級\r\n#n";
selStr += "" + zx24 + zx24 + zx24 + zx24 + zx24 + zx24 + zx24 + zx24 + zx24 + zx24 + zx24 + "\r\n";
selStr += "\r\n";
selStr += "#fs14##b";
for (var key in weaponList) {
	item = weaponList[key];
	selStr += "#r#L" + key + "# #b#v" + item[0] + "##z" + item[0] + "# -> #v" + item[2] + "##z" + item[2] + "# #r\r\n";
}
weaponId = npc.askMenu(selStr);

var text = "- #e#d#z" + weaponList[weaponId][2] + "# 需要的材料：#n#k\r\n\r\n#b";

currentItemQuantity = player.getAmountOfItem(weaponList[weaponId][0]);
color = "#g";
if (currentItemQuantity < weaponList[weaponId][1])
	color = "#r";
text += "#v" + weaponList[weaponId][0] + "#  ";

text += color + currentItemQuantity + " / " + weaponList[weaponId][1] + " 個#b\r\n";
for (var key in needItemList) {
	text += "#v" + needItemList[key][0] + "#" + needItemList[key][2] + "  ";
	currentItemQuantity = player.getAmountOfItem(needItemList[key][0]);
	color = "#b";
	if (currentItemQuantity < needItemList[key][1])
		color = "#r";
	text += color + currentItemQuantity + " / " + needItemList[key][1] + " 個#b\r\n";
}
text += "#k\r\n請輸入想要升級的數量.#k";
var number = npc.askNumber(text, 0, 0, player.getAmountOfItem(weaponList[weaponId][0]));
var flag = true;
for (var key in needItemList) {
	var itemId = needItemList[key][0];
	var itemQuantity = needItemList[key][1];
	if (!player.hasItem(weaponList[weaponId][0], weaponList[weaponId][1] * number)) {
		flag = false;
		break;
	}
	if (!player.hasItem(itemId, itemQuantity * number)) {
		flag = false;
		break;
	}
}


if (flag) {
	if (player.getFreeSlots(1) < number || player.getFreeSlots(2) < 1 || player.getFreeSlots(3) < 1 || player.getFreeSlots(4) < 1 || player.getFreeSlots(5) < 1) {
		npc.say("空間不足，請整理後重新製作！");
	} else {
		player.loseItem(weaponList[weaponId][0], weaponList[weaponId][1] * number)
		for (var key in needItemList) {
			var itemId = needItemList[key][0];
			var itemQuantity = needItemList[key][1];
			player.loseItem(itemId, itemQuantity * number);
		}

		//機率 成功
		oknumber = 0;
		for (var i = 0; i < number; i++) {
			send = Math.floor(Math.random() * 10000);
			if (send < 1000) {
				oknumber++;
			}
		}

		player.gainItem(weaponList[weaponId][2], weaponList[weaponId][3] * oknumber);
		npc.say("恭喜您成功升級獲得了#z" + weaponList[weaponId][2] + "# x " + oknumber + ". \r\n\r\n#z" + weaponList[weaponId][0] + "# x " + (number - oknumber) + " 失敗消失");
	}
} else {
	npc.say("材料不足，無法完成製作！");
}