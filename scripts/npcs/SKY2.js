//OX問答 by dgms qq:381991414
//SKY3   OX獎勵
var str = "#eGM獲得奇怪事件用#n\r\n\r\n"
str +="一種可以賦予腳色大量噴道具的事件"
str +=""
var event = npc.getEvent("SKY2");
if(map.getId() == 180000010){
	if(event == null){
		npc.sayS(str+"\r\n#r暫未開啟活動#n");
		if(player.isGm()){
			var YN = npc.askYesNo("是否開啟活動？")
			if(YN == 1){
				if (npc.makeEvent("SKY2", true, player) == null) {
					npc.sayS("已經開始了");
					
					player.changeMap(940511900);
				}
				//npc.broadcastNoticeWithoutPrefix("進場方式 副本-百鬼夜行");//開啟報名之後 會廣播
			}
		}
	}else{
		
		var canPut = event.getVariable("canPut");
		if(canPut == "1"){
			var playersName = "";
			var players = event.getVariable("players");
			var playerL = players.length;
			for(var i = 0; i<playerL ;i++){
				try{
					playersName +="\r\n"+ players[i].getId() + "."+players[i].getName()+"  "
				}catch(e){
					players.splice(i,1);
				}
			}
			str +="\r\n"+playersName+"\r\n#L0#報名(目前報名總數:"+playerL+")#l"
			var selected = npc.askMenuS(str);
			if(selected == 0){
				var players = event.getVariable("players");
				var index = -1;
				for(var i = 0; i<players.length ;i++){
					if(players[i].getId()  == player.getId()){
						index = i;
						break;
					}
				}
				if(index == -1){
					players.push(player);
					event.setVariable(player.getName()+"mobCount",0);//分數
					//event.setVariable(player.getName()+"Reward",0);//分數
					//event.setVariable(player.getName()+"Kill",0);//錯誤次數
					npc.sayS("報名成功");
				}else{
					npc.sayS("已經報名過了！請等待！")
				}
			}
		}else{
			npc.sayS("時間已過,請等待下一場")
			if(player.isGm()){
				var text = npc.askText("請輸入卡死的(事件腳本名)：","",1,30);
		var event = npc.getEvent(text);
		if(event == null){
			npc.say("事件不存在或者沒有再進行中");
		}else{
			event.destroyEvent();
			npc.say("強制結束成功!");
		}
			}
		}
	}
}else{
	npc.say("冒險家，將為你傳送！")
	player.changeMap(180000010);
}
