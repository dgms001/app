//裝備制作 by dgms
var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var a3 = "#fEffect/ItemEff/1070069/effect/walk1/2#"

var weaponId = null;
//可以制作的東西
var weaponList = 1672069;
//Array(1672069,1672069,);
//需要的材料
var needItemList = Array(
	//id 數量 說明(可空)
	Array(4001489, 100, ""),
	Array(4032053, 5000, ""),
	Array(4021032, 3000, ""),
	Array(4021036, 2000, "")
);
var text = "- #e#r#i" + weaponList + "##z" + weaponList + "#需要的材料：#n#k\r\n\r\n#b";
for (var key in needItemList) {
	text += "#v" + needItemList[key][0] + "#" + needItemList[key][2] + "  ";
	// var itemName = player.makeItemWithId(needItemList[key][0]).getItemName();
	// for(var i=0; i<=25-itemName.getBytes(	).length; i++)
	// {
	// text+=" ";
	// }
	var ItemQuantity = player.getAmountOfItem(needItemList[key][0]);
	var color = "#k";
	if (ItemQuantity < needItemList[key][1])
		color = "#r";
	text += color + ItemQuantity + "#b / " + needItemList[key][1] + " 個#b\r\n";
}
text += "#k\r\n是否製作#k";
var sel1 = npc.askYesNo(text);


if (sel1 == 1) {
	var flag = true;
	for (var key in needItemList) {
		var itemId = needItemList[key][0];
		var itemQuantity = needItemList[key][1];
		if (!player.hasItem(itemId, itemQuantity)) {
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
				player.loseItem(itemId, itemQuantity);
			}
			player.gainItem(weaponList, 1);
			npc.say("恭喜您製作了 #z" + weaponList + "#");
		}
	} else {
		npc.say("材料不足，無法製作！");
	}
} else {
	npc.say("#fs16#好吧下次再來~");
}
