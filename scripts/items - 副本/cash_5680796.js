let itemId = Array(
2631080,
2631083,2631084,2631085,
2631086,2631087,2631088,
2631089,2631195,2631196,
2631197,2631198,2631199,
2631200,2631201,2631202,
2631203,2631204,2631205,
2631206,2631207,2631208,
2631209,2631210,2631211,
2631212,2631237,2631238,
2631239,2631240,2631241,
2631242,2631243,2631244,
2631245,2631246,
2631670,2631671,2631672,
2631673,2631674,2632071,
2632072,2632073,2632074,
2632075,2632142,2632386,
2632387,2632388,2632389,
2632390,2632391,2632689,
2632690,2632691,2632692,
2632693,2632694,2632979,
2632980,2632981,2632982,
2632983,2632984,2632985,
2632986,2632988,2632989,
2633279,2633280,2633281,
2633282,2633283,2633284,
2633737,2633738,2633739,
2633740,2633741,2633742,
2634067,2634068,2634069,
2634070,2634071,2634072
);

let itemIdS = Array(//套組類
2631081,2631082,2631429,2631430,2631529,2631530,2632753,2632754
);

let itemIdE = 2631100;//欄位1

if(player.getFreeSlots(2) > 2 && player.getFreeSlots(5) > 2){
	var send = Math.floor(Math.random() * 10000);
	if (send <= 500){
		SS = Math.floor(Math.random() * itemIdS.length);
		player.scriptProgressItemMessage(itemIdS[SS],"哇嗚~是整套的貼圖!!");
		let newItem = player.makeItemWithId(itemIdS[SS]);
		player.gainItem(newItem);
		npc.broadcastGachaponMsgEx("玩家 " + player.getName() + " | 恭喜獲得 整套的貼圖 .",newItem);
		
	} else if(send <= 1000){
		player.scriptProgressItemMessage(itemIdE,"獲得聊天貼圖欄位1格擴充券");
		let newItem = player.makeItemWithId(itemIdE);
		player.gainItem(newItem);
		npc.broadcastGachaponMsgEx("玩家 " + player.getName() + " | 恭喜獲得 聊天貼圖欄位1格擴充券 .",newItem);
		
	} else if(send <= 2000){
		player.scriptProgressItemMessage(4000378,"哈哈哈~很可惜你什麼都沒拿到!");
		/*SS = Math.floor(Math.random() * itemIdS.length);
		player.scriptProgressItemMessage(itemIdS[SS],"哇嗚~是整套的貼圖!!");
		let newItem = player.makeItemWithId(itemIdS[SS]);
		player.gainItem(newItem);
		npc.broadcastGachaponMsgEx("玩家 " + player.getName() + " | 恭喜獲得 整套的貼圖 .",newItem);*/
		
	} else if(send <= 6500){
		SS = Math.floor(Math.random() * itemId.length);
		player.gainItem(itemId[SS],1);
		player.scriptProgressItemMessage(itemId[SS],"恭喜獲得貼圖");
		
	} else if(send <= 7000){
		//player.gainItem(2630293,1);
		player.scriptProgressItemMessage(2630293,"恭喜獲得LINE隨機貼圖");
		let newItem = player.makeItemWithId(2630293);
		player.gainItem(newItem);
		npc.broadcastGachaponMsgEx("玩家 " + player.getName() + " | 恭喜獲得 LINE隨機貼圖 .",newItem);
		
	} else {
		player.scriptProgressItemMessage(4000378,"哈哈哈~很可惜你什麼都沒拿到!");
		
	}
	player.loseItem(npc.getItemId(), 1);
} else {
	npc.sayS("#fs16#痾...我..的..身上...快被塞滿了OAO\r\n#r請檢查消耗欄位或特殊欄位");
}