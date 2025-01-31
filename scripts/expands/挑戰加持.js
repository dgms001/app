
var needList=Array(
	Array(4310020,1000),
	Array(4032053,18888),
	Array(4001872,20),
);
var selStr =  "#fs21##e#r製作挑戰：加持持續時間#s80000570#。\r\n";
    selStr +="#fs16##e#b需要以下材料:#l\r\n";
for(var i = 0; i < needList.length; i++) {
	selStr += "\r\n#v" + needList[i][0] + "#x" + needList[i][1];
}
let selection = npc.askYesNo(selStr);
if(selection == 1) {
	if(!player.hasItem(4310020,1000)){
		 npc.say("材料不足。");
	}else if(!player.hasItem(4032053,9999)){
		 npc.say("材料不足。");
	}else if(!player.hasItem(4001872,20)){
		 npc.say("材料不足。");
	}else{
			player.setSkillLevel(80000570, 4, 4, false);
		
			
			//設置潛能等級
			player.loseItem(4310020,1000);
			player.loseItem(4032053,18888);
            player.loseItem(4001872,20);

			npc.broadcastPlayerNotice(7, "[技能製作] : 恭喜 " + player.getName() + " 製作挑戰：加持持續時間" );
            npc.askMenuA("成功製作。");
			//npc.say("成功升級到C等級BOSS競技場徽章。");
			
			//npc.broadcastGachaponMsgEx( "[符號升級] : 恭喜 " + player.getName() + " 製作出<C等級BOSS競技場徽章>獲得全屬性+10的符號證明.",toDrop);
		}
}