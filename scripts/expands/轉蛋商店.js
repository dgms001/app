var status = -1
var txt;
/*------------------------------------------------------------*/
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var f2 = "#fUI/CashShop/CSBeauty/hairColor/Enable/2#"
var f3 = "#fUI/CashShop/CSBeauty/hairColor/Enable/3#"
var f4 = "#fUI/CashShop/CSBeauty/hairColor/Enable/4#"
var f5 = "#fUI/CashShop/CSBeauty/hairColor/Enable/5#"
var GC3 = "#fEffect/CharacterEff/1082700/1/0#"; //"+z+"//小選項用
var items = Array(
	Array(5680500, 600000, 1, "楓點商店-轉蛋專區[黃金蘋果]"),
	//Array(5060048, 20000, 1, "楓點商店-轉蛋專區[黃金蘋果]"),
	Array(5680500, 3000, 1, "楓點商店-轉蛋專區[艾比米修斯箱子]"),
	Array(5680503, 2000, 1, "楓點商店-轉蛋專區[魔法馬車]"),
	Array(2434711, 3000, 1, "楓點商店-轉蛋專區[玩具抽獎]"),
	Array(2028178, 2000, 1, "楓點商店-轉蛋專區[拼圖箱]"),
	Array(3090006, 10000, 1, "楓點商店-轉蛋專區[拼圖盒子3X4]"),
	Array(5537000, 1000, 1, "楓點商店-轉蛋專區[萌獸卡牌包]")
);

txt = "#b#fs21#你好！在這裡可以選擇你想要購買的物品,點選圖片檢視價格購買\r\n\r\n#b";//

txt += "#fs16##b";
for (var i = 1; i < items.length; i++) {
	txt += "#L" + i + "##b#e#v" + items[i][0] + "##k#z" + items[i][0] + "##b\r\n     價格#r[" + items[i][1] + "] #b楓點#n\r\n";
}
let selection = npc.askMenuA(txt, 9062453);
i = selection;
selection = npc.askNumber("#r警#g告：#b請注意揹包空位夠不夠，請注意(有些物品是1個物品佔1個格子哦)!\r\n#r警#g告：#b如果空位不夠，購買的物品將消失，不給與任何賠償!\r\n\r\n購買道具為：#v" + items[i][0] + "# #z" + items[i][0] + "##k\r\n請輸入購買個數：", 1, 1, 999);

if (i) {
	GS = selection;
	QSS = GS * items[i][1];
	if (player.getCashShopCurrency(2) < QSS) {
		npc.say("#fs16##b#e楓葉點數不足，無法購買");
	} else if (player.getFreeSlots(5) >= 1) {
		player.showSystemMessage("消耗 [ " + (QSS) + " ] 楓點");
		player.modifyCashShopCurrency(2, -QSS);
		player.gainItem(items[i][0], items[i][2] * GS);
		//player.addAccountEventValue(items[i][3],GS);
		npc.say("#fs16##b#e購買成功");
		player.runScript("轉蛋商店");
	} else {
		npc.say("#fs16##b#e欄位保留1格以上再購買");
	}
}//if (player.getFreeSlots(5) >= 10) {