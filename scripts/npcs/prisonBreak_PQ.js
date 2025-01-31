/*
let items = Array(
	Array(4000000,1),
	Array(4000000,1),
	Array(4000000,1)
);
*/

let mapId = map.getId();
if(mapId == 921160700){
	if(player.hasItem(4001008,1)){
		/*
		npc.broadcastPlayerNotice(15,"【逃脫組隊】 : 恭喜玩家 " + player.getName() + " 成功挑戰逃脫副本，獲得大量獎勵 ！ ");
		player.changeMap(921160701);
		let ss = "";
		for(let i = 0;i<items.length;i++){
			player.gainItem(items[i][0],items[i][1])
			ss += "#v"+items[i][0]+"##z"+items[i][0]+"# x "+items[i][1]+"\r\n";
		}
		npc.say("#r注意：如果你是隊長，請等待隊員領取獎勵後再出去\r\n#d恭喜你獲得：\r\n"+ss);
		//getTaskCount(1,14);
		//getTaskCount(1,15);
		//getTaskCount(1,16);
		//getTaskCount(1,17);
		*/
		if (party == null || player.getId() != party.getLeader()) {
			npc.say("想領取獎勵？那麼請讓你的<隊長>拿上#v4001008#和我對話吧!");
		}else{
			let YN = npc.askYesNo("#r恭喜你成功逃出監獄，是否和你的隊員一起領取獎勵？\r\n(請確保每個隊員的包裹能放得下獎勵)\r\n");
			if(YN == 1){
				party.loseItem(4001008);
				var members = party.getLocalMembers();
				for (let dd = 0; dd < members.length; dd++) {
					members[dd].runScript("逃脫組隊通關獎勵")
					members[dd].changeMap(921160000, "sp");
					//getTaskCount(members[dd],1,14);
					//getTaskCount(members[dd],1,15);
					//getTaskCount(members[dd],1,16);
					//getTaskCount(members[dd],1,17);
				}
			}
		}
	}else{
		npc.say("#d趕緊擊敗#b看守阿尼#d逃出監獄吧！\r\n#r擊敗BOSS後<隊長>拿上#v4001008#請找我領取獎勵");
	}
}


//獲取成就次數
function getTaskCount(member,count ,taskId){
	member.showSystemMessage("【成就系統】:成就編號:"+taskId+" 完成次數+1")
	member.customSqlUpdate("update jili_task_character set taskCount = taskCount + " + parseInt(count) +" where taskId = '" + taskId + "' and characterId = '" + member.getId() +"'");
}
