var a = 0;
var text;
var selects; //記錄玩家的選項
var buynum = 0;
var itemlist = Array(
Array(4001839,50000,3,1),//星星
//Array(5074000,500000,5,1),//白骨喇叭
Array(5064000,2000000,5,1),//防爆卷軸
Array(2340000,3000000,2,1),//祝福卷軸
//Array(5390002,10000000,2,1),
//Array(3080001,104000000,2,2),//
//Array(3080003,104000000,2,2),//
//Array(3080004,104000000,2,2),//
//Array(3080005,104000000,2,2),//
//Array(3080006,104000000,2,2),//
Array(3080014,200000000,2,2),//
Array(2048717,200000000,2,2),//火花
Array(2434775,50000000,1,1),
Array(2434776,50000000,1,1),
Array(2434777,50000000,1,1),
Array(2434778,50000000,1,1),
Array(2434779,50000000,1,1),
Array(2434780,50000000,1,1)
//Array(2434921,50000000,1,1)




					);
 
			text = "#h0#,你好！在這裡可以選擇你想要購買的物品,點擊圖片購買\r\n每周六日星星享受8折#e#k#n\r\n#r";
			for (var i=0; i<itemlist.length; i++) {
				text += "\r\n#L" + i + "##i" + itemlist[i][0] + ":# #r#t" + itemlist[i][0] + "##k   #r" + itemlist[i][1]/10000 + "#k萬 金幣#l";
				//text += "#L" + i + "##i" + itemlist[i] + ":# ";
				//if (i != 0 && (i+1) % 5 == 0) {
				//	text += "\r\n";
				//}
			}
            selects = npc.askMenu(text); 
        		
						
           
            var buynum = npc.askNumber("請輸入你請你輸入想要購買的數量\r\n#r1個需要" + itemlist[selects][1] + "金幣", 1, 1, 5000);
          	
           
          	npc.sayNext("你想購買" + buynum + "個#r#i" + itemlist[selects][0] + "##k？\r\n你將使用掉" + ((buynum * itemlist[selects][1])/10000) + "萬 金幣。");
          	
        	
        	if (player.getFreeSlots(itemlist[selects][2]) < 1) {
    				npc.say("請你確認在背包的裝備，消耗，其他窗口中是否有1格以上的空間。"); 
    		}else if(itemlist[selects][0] == 2048717 && player.getFreeSlots(itemlist[selects][2])<buynum){
				npc.say("購買多少個火花就需要多少個消耗空間!"); 
    		}else{
				var nmeso = buynum * itemlist[selects][1];
        		if (player.hasMesos(nmeso)) {
					player.gainMesos(-(nmeso));
					player.gainItem(itemlist[selects][0], buynum);
					gainMesoLog(nmeso,itemlist[selects][0]);
					npc.say("購買成功了！");
	            } else {
	                npc.say("對不起，你沒有足夠的金幣。");
	                
	            } 
			}
    					 
function weekdayC(weekday){
	switch(weekday){
		case 1:
			return "星期日";
		break;
		case 2:
			return "星期一";
		break;
		case 3:
			return "星期二";
		break;
		case 4:
			return "星期三";
		break;
		case 5:
			return "星期四";
		break;
		case 6:
			return "星期五";
		break;
		case 7:
			return "星期六";
		break;
	}
} 


function gainMesoLog(meso,typed){
	var sql = "insert into zz_meso_log(characterID, paytime, consume,meso,worldid) values("+player.getId()+",now(),'"+typed+"',"+meso+","+0+")";
	player.customSqlInsert(sql);
}
