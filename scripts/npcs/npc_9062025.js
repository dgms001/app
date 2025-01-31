var a = 0;
var text;
var selects; //記錄玩家的選項
var buynum = 0;
var itemlist = Array(
Array(2431848,1),
Array(2432346,1),
Array(5010044,1),
Array(5800000,1),
Array(5700000,1),
Array(2023128,2500),
Array(5192000,50000),
Array(2470003,8000),
Array(5520001,9999),
Array(5062402,9999),
Array(5156000,9999)
);
 
					text = "#h0#,你好！在這裡可以選擇你想要購買的物品,點擊圖片購買\r\n#r";
					for (var i=0; i<itemlist.length; i++) {
						text += "\r\n#L" + i + "##i" + itemlist[i][0] + ":# #b#t" + itemlist[i][0] + "##k   #r" + itemlist[i][1] + "#k楓點#l";
					}
         selects =  npc.askMenu(text);
         
           var buynum=	npc.askNumber("請輸入你請你輸入想要購買的數量\r\n#r1個需要" + itemlist[selects][1] + "楓點", 1, 1, 10000);
         
            npc.sayNext("你想購買" + buynum + "個#r#i" + itemlist[selects][0] + "##k？\r\n你將使用掉" + (buynum * itemlist[selects][1]) + "楓點。");
		
			if(!player.canGainItem(itemlist[selects][0], buynum)){
				npc.say("背包空間不足");
			}else if (player.getCashShopCurrency(2) >= buynum * itemlist[selects][1]) {
				player.modifyCashShopCurrency(2, -buynum * itemlist[selects][1]);
				player.gainItem(itemlist[selects][0], buynum);
				npc.say("購買成功了！");
			} else {
				npc.say("對不起，你沒有足夠的楓點。");
			} 
            
