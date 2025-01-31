//裝備制作 by dgms
var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var a3 = "#fEffect/ItemEff/1070069/effect/walk1/2#"
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var weaponId = null;
//可以制作的東西
var weaponList = Array(
	1152174,
	1152176,
	1152177,
	1152178,
	1152179,
	1102794,
	1102795,
	1102796,
	1102797,
	1102775,
	1082640,
	1082639,
	1082638,
	1082637,
	1082636,
	1073030,
	1073032,
	1073033,
	1073034,
	1073035,
	1052882,
	1052887,
	1052888,
	1052889,
	1052890,
	1004422,
	1004423,
	1004424,
	1004425,
	1004426

);
//需要的材料
var needItemList = Array(
	//id 數量 說明(可空)
	//Array(4310300, 10, " [Boss掉落]"), 
	Array(4310299, 75, " [Boss掉落,材料製作]"),
	//Array(4034888, 40, " [Boss掉落]"),
	//Array(4034887, 40, " [Boss掉落]"),
	//Array(4034886, 40, " [Boss掉落]"),
	//Array(4033247, 2400, " [怪物掉落]"),
	//Array(4001713, 2400, " [怪物掉落]"),
	//Array(4001839, 10000, " [怪物掉落]"),
	//Array(2614000, 4500, " [Boss掉落,怪物掉落,在線獎勵]"),
	//Array(4009411, 5, " [在線獎勵]")	
);
var
	selStr = "Welcome to the special trip              " + a38 + "\r\n";

selStr += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n"

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