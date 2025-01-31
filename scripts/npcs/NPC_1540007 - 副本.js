/*
	內容：個人排行榜
*/

 

 
		var text = "#e請選擇要查詢的榜單：#r\r\n";  
		text += "\t\t\t#L1#本周充值排行榜#l\r\n";
		text += "\t\t\t#L2#玩家等級排行榜#l\r\n";
		text += "\t\t\t#L4#人氣寶貝排行榜#l\r\n";
		text += "\t\t\t#L5#十大家族排行榜#l\r\n";
		var selection = npc.askMenu(text);
	 
		if(selection == 1){
			//本周充值
			player.runScript("new_tradesort");
		}else if(selection == 2){
			//玩家等級
			var text ="\r\n#L1#關閉#l";
			npc.askMenu(charLevel()+text);
		}else if(selection == 4){
			//人氣排行
			var text ="\r\n#L1#關閉#l";
			npc.askMenu(charPopularity()+text);
		}else if(selection == 5){
			//家族排行
			var text ="\r\n#L1#關閉#l";
			npc.askMenu(charGuild()+text);
			 
		}
			 

function charLevel(){
		 var sql = "select a.* from characters a ,accounts b where a.gm =0    and a.accounts_id=b.id ORDER BY `level` DESC limit 50 ";
		 var resultList = player.customSqlResult(sql);
		 var text = "\t\t\t\t#e#r★ 個人等級排行 ★#k#n\r\n\r\n";
			text += "\t#e名次#n\t#e玩家昵稱#n\t\t\t#e等級#n\t\t #n\r\n";
		 for (var i = 0; i < resultList.size(); i++) {
				var result = resultList.get(i);
		    if (result == null) {
		        break;
		    }
		    text+="\t"+(i+1)+"\t\t\t"
				text += result.get("name");
				for (var j = 16 - result.get("name").getBytes().length; j > 0 ; j--) {
					text += " ";
				}
				text+=result.get("level")+"\t\t";
				text+="\r\n";
		 }
		 return text;
}

function charPopularity(){
			var sql = "";
			sql +="select a.`name`,a.popularity from characters a,accounts b where a.gm =0  and a.accounts_id=b.id ORDER BY a.popularity desc  limit 50 ";                                                                                     
		 var resultList = player.customSqlResult(sql);
		 var text = "\t\t\t\t#e#r★ 人氣值排行 ★#k#n\r\n\r\n";
			text += "\t#e名次#n\t#e玩家昵稱#n\t\t\t#e人氣#n\t\t #n\r\n";
		 for (var i = 0; i < resultList.size(); i++) {
				var result = resultList.get(i);
		    if (result == null) {
		        break;
		    }
		    text+="\t"+(i+1)+"\t\t\t"
				text += result.get("name");
				for (var j = 16 - result.get("name").getBytes().length; j > 0 ; j--) {
					text += " ";
				}
				text+=result.get("popularity")+"\t\t";
				text+="\r\n";
		 }
		 return text;
}


function charGuild(){
		
			var sql =" select c.`name`,a.`name` guildName,a.gp from guilds a ,guilds_members b,characters c where a.id = b.guilds_id and b.grade = 1 and b.characters_id = c.id   GROUP BY guildName ORDER BY a.gp desc  ";                                                                                     
			var resultList = player.customSqlResult(sql);
			var text = "\t\t\t\t#e#r★ 家族排行根據GP數量排行 ★#k#n\r\n\r\n";
				text += "\t#e名次#n\t#e家族名#n\t\t\t#e族長#n\t\t\t#eGP#n\t\t #n\r\n";
			 for (var i = 0; i < resultList.size(); i++) {
					var result = resultList.get(i);
				if (result == null) {
					break;
				}
				text+="\t"+(i+1)+"\t\t"
					text += result.get("guildName");
					for (var j = 16 - result.get("guildName").getBytes().length; j > 0 ; j--) {
						text += " ";
					}
					text += result.get("name");
					for (var j = 16 - result.get("name").getBytes().length; j > 0 ; j--) {
						text += " ";
					}
					text+=result.get("gp")+"\t\t";
					text+="\r\n";
			 }
		 return text;
}
 