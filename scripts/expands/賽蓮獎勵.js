/*player.runScript("賽蓮獎勵");*/
if (player.getEventValue("賽蓮全員獎勵") >= 1) {
} else {
	/*let tt=party.getMembersCount(map.getId(), 1, 300);
	if (tt >=4){
		partycount = 1.5;
	} else {
		partycount = 1;
	}*/
	/*player.dropMessage(6,"隊伍人數 " + tt + " , 加成 " + partycount + "倍");*/
	player.addEventValue("賽蓮全員獎勵", 1, 1);
	player.gainItem(4032053, 2 * 200);
	player.gainItem(4001713, 2 * 50);
	player.gainItem(2630512, 2 * 2);
	player.gainItem(2633634, 2 * 2);
	player.gainItem(4000850, 2 * 3);
	player.gainItem(2633336, 2 * 2);//真實符文
	player.addEventValue("BOSS里程", 2, 3000);
	player.addEventValue("總BOSS里程", 2, 3000);
}
