var itemList = Array(
 Array(4021022, 6000000, ""),
 Array(4310079, 70000000, ""),
 Array(4310238, 65000000, ""),
 Array(4000313, 30000000, ""),
 Array(4000124, 30000000, ""),
 Array(2049116, 60000000, ""),
 Array(2048704, 30000000, ""),
 Array(2048725, 50000000, ""),
 Array(2048724, 250000000, ""),
 Array(2048723, 500000000, "")
);

npc3003574();

function npc3003574() {
	 var selstr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#親愛的#r#h ##k您好，請選擇您希望購買的道具：";

        for (let i = 0; i < itemList.length; i++) {
            selstr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#z" + itemList[i][0] + "##k   #r" + itemList[i][1]  + " #k金幣#l   #r" + itemList[i][2]  + " #k" ;
        }

//1層界面

        var wenzi1 = npc.askMenu(selstr);
		var item = itemList[wenzi1];
        if (item != null) {
            selectedItem = item[0];
            selectedCost = item[1];
			selectedText = item[2];
        var wenzi2 = npc.askNumber("您想購買多少個#i" + selectedItem + ":##b#z" + selectedItem + "#"+selectedText+"#k 每個需要 #r" + selectedCost + "#k 金幣，請輸入你想購買的數量。\r\n#b最多一次性可以購買：30個。",1,1,30);  // "+parseInt(player.hasMesos()/selectedCost)+"    parseInt(player.hasMesos()/selectedCost)
        } else {
            npc.say("出現錯誤...");
        }
		var money=wenzi2*selectedCost;
		if (wenzi2 < 0) {
            npc.say("不能輸入0.或者你沒有足夠的金幣支付你要買的數量.!");
		} else if (wenzi2 > 30) {
            npc.say("一次性購買不能超過30個，.或者你沒有足夠的金幣支付你要買的數量.!");
		} else if (!player.canGainItem(selectedItem, wenzi2)){
			npc.say("購買失敗，原因：背包空格不足。");
		} else if (!player.hasMesos(money)){
			npc.say("購買失敗，你沒有" + money + " 金幣");
		} else {
			player.gainMesos(-money);
			player.gainItem(selectedItem,wenzi2);
			npc.say("恭喜您，成功購買了#z"+selectedItem+"# x "+wenzi2+" 個！。\r\n如果您想返回繼續購買，請點擊下一步~！如果您不想再購買了請結束對話。");
			npc3003574();
			}
}