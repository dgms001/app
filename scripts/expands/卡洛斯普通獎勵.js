/*player.runScript("賽蓮獎勵");*/
if (player.getEventValue("卡洛斯普通全員獎勵") >= 1) {
} else {
	/*let tt=party.getMembersCount(map.getId(), 1, 300);
	if (tt >=4){
		partycount = 1.5;
	} else {
		partycount = 1;
	}*/
	/*player.dropMessage(6,"隊伍人數 " + tt + " , 加成 " + partycount + "倍");*/
	player.addEventValue("卡洛斯普通全員獎勵", 1, 1);
	player.gainItem(4032053, 100);
	player.gainItem(4001713, 25);
	player.gainItem(2630512, 1);
	player.gainItem(2633634, 1);
	player.gainItem(4000850, 1);
	player.gainItem(2633336, 1);//真實符文
	player.gainItem(4034622, 4);
	player.addEventValue("BOSS里程", 1, 3000);
	player.addEventValue("總BOSS里程", 1, 3000);
}
