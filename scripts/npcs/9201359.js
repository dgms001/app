/**
 * 幾裡
 
 * 進自由自動泡點說明:
 請在你傳送到自由的腳本處 加上以下代碼
 
		var event= npc.getEvent("JILI_PD");
		if(event != null){
			var players = event.getVariable("players");
			var playersName = event.getVariable("playersName");
			var index = -1;
			for(var i = 0; i<playersName.length ;i++){
				if(playersName[i]  == player.getName()){
					index = i;
					break;
				}
			}
			if(index == -1){
				playersName.push(player.getName());
				players.push(player);
				event.setVariable("players", players);
				event.setVariable("playersName", playersName);
				player.showSystemMessage("[市場泡點]:  成功加入泡點");
			}
		}
 
**/


if(player.getChannel() == 1){
	
	var event= npc.getEvent("JILI_PDT");
	if(event != null){
		
		var players = event.getVariable("players");
		var playersName = "";
		var playerL = players.length;
		for(var i = 0; i<playerL ;i++){
			try{
				playersName = players[i].getId() + "."+players[i].getName()+"  "
			}catch(e){
				players.splice(i,1);
			}
		}
		
		var sss = "#b1.從外面傳送回#r1X櫻花村#K,#b自動開啟泡點，每分鐘可以獲得點券#K\r\n";
		sss += "#b2.掉線/換頻道/換地圖/進商城/進拍賣 會關閉泡點\r\n";
		sss += "#b3.如果上線就在1X櫻花村 需要手動開啟\r\n";
		
		
		sss += "#d當前泡點人員:\r\n"+playersName
		
		let selected = npc.askMenu(sss+"\r\n#L0##b開啟泡點#l#L1#關閉泡點#l");
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
				npc.say("加入泡點");
			}else{
				npc.say("已在泡點")
			}
		
		}else{
			var players = event.getVariable("players");
			var index = -1;
			for(var i = 0; i<players.length ;i++){
				if(players[i].getId()  == player.getId()){
					index = i;
					break;
				}
			}
			if(index == -1){
				npc.say("未開啟泡點");
			}else{
				players.splice(i,1);
				npc.say("關閉泡點")
			}
		}
	}
	
}else{
	npc.say("泡點功能暫時只能在1X櫻花村哦")
}