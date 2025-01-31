/* 金幣商店 - 洗能力
Array(2702001,1,2000,""),
Array(2702001,10,20000,""),
 */

var itemList = Array(

	Array(2431553, 1, 104000000, "8億"),//FFN	
	Array(1152154, 1, 50000000, "5千萬"),//FFN	
	Array(1113055, 1, 300000000, "3億"),//FFN		
	Array(1032200, 1, 300000000, "3億"),//FFN		
	
	Array(1113072, 1, 50000000, "5千萬"),//FFN	
	Array(1113073, 1, 104000000, "1億"),//FFN		
	Array(1113074, 1, 500000000, "5億"),//FFN		
	Array(1113075, 1, 1500000000, "15億"),//FFN

	Array(1132243, 1, 50000000, "5千萬"),//FFN	
	Array(1132244, 1, 104000000, "1億"),//FFN		
	Array(1132245, 1, 500000000, "5億"),//FFN		
	Array(1132246, 1, 1500000000, "15億"),//FFN	

	Array(1122264, 1, 50000000, "5千萬"),//FFN	
	Array(1122265, 1, 104000000, "1億"),//FFN		
	Array(1122266, 1, 500000000, "5億"),//FFN		
	Array(1122267, 1, 1500000000, "15億"),//FFN	

	Array(1032220, 1, 50000000, "5千萬"),//FFN	
	Array(1032221, 1, 104000000, "1億"),//FFN		
	Array(1032222, 1, 500000000, "5億"),//FFN		
	Array(1032223, 1, 1500000000, "15億"),//FFN		
	
	Array(2432341, 1, 1040000000, "10億"),//FFN
	Array(2431938, 1, 2000000000, "20億"),	
	Array(2432069, 1, 2500000000, "25億")
);
var selectedItem = -1;
var selequantity = -1;
var selectedCost = -1;
var epp1 = "#fEffect/ItemEff.img/2022109/1#"; //彩光
var epp2 = "#fEffect/ItemEff.img/2022109/2#"; //彩光
var selStr = "       \r\n請選擇您希望購買的道具：";
for(var i = 0; i < itemList.length; i++) {
	selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k x " + itemList[i][1] + "  #r" + itemList[i][2] + "#k金幣 #r " + itemList[i][3] + "#l";
}
let selection = npc.askMenuS(selStr);

var item = itemList[selection];

	selectedItem = item[0];
	selequantity = item[1];
	selectedCost = item[2];

	let sel = npc.askNumberS("你選擇的商品為#b#v" + selectedItem + "#售價為：" + selectedCost + "金幣/個\r\n請輸入你購買的數量", 1, 1, 1);
	//cm.askYesNo("您是否購買#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 需要 #r" + selectedCost + "#k 金幣？");


if(player.hasMesos(sel * selectedCost)) {
	if(player.canGainItem(selectedItem, sel)) {
		
		player.gainItem(selectedItem, sel*1);
		
			player.loseMesos((selectedCost * sel));
			npc.say("恭喜您成功購買#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + sel + ") 。");
		
		
	} else {
		npc.say("購買失敗，請您確認在背包所有欄位窗口中是否有一格以上的空間。");
	}
} else {
	npc.say("您沒有那麼多金幣。\r\n\r\n購買#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 需要 #r" + selectedCost + "#k 金幣。");
}