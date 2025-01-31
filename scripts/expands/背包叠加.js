let item;
let itemList = Array();
let flag;
let cumulation="是否一鍵進行以下道具疊加\r\n";
for(let i = 1;i<129;i++){
	flag = false;
	item = player.getInventorySlot(5,i);
	if(item != null){
		if (item.getExpiration() < 3439728000000){
			continue;
		}
		if(Math.floor(item.getDataId() / 10000)==500){
			continue;//過濾寵物
		}
		if(itemList != null){
			for(let y = 0;y<itemList.length;y++){
				if(itemList[y][0]==item.getDataId()){
					flag = true;
				}
			}
		}
		
		if(!flag){
			
			cumulation +="#v"+item.getDataId()+"# #t"+item.getDataId()+"# x "+player.getAmountOfItem(item.getDataId())+"\r\n";
			itemList.push(Array(item.getDataId(),player.getAmountOfItem(item.getDataId())));
			//java.lang.System.out.println("xxx"+item.getDataId()+" x "+player.getAmountOfItem(item.getDataId()));
		}
	}
	
}
var ys = npc.askYesNo(cumulation);
if(ys == 1){
	
	var timeStamp = java.lang.System.currentTimeMillis();
	var time = parseInt(30 - (((timeStamp -parseInt(player.getQuestRecordEx(100000001))) / 1000)));
	if(time >=0){
		npc.say("疊加背包頻率請不要超過30秒每次,"+time+"秒後可進行下次疊加。");
	}else{
		for(let x = 0;x<itemList.length;x++){
			//java.lang.System.out.println(itemList[x][0]+"---"+itemList[x][1]);
			player.loseItem(itemList[x][0],itemList[x][1]);
			player.gainItem(itemList[x][0],itemList[x][1]);
		}
		player.updateQuestRecordEx(100000001,timeStamp);
		npc.say("疊加完成！");
	}
	
	
}