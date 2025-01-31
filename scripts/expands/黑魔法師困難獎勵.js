//player.runScript("黑魔法師獎勵");
if (player.getEventValue("黑魔法師[困難]全員獎勵") >= 1) {
} else {
	let tt = party.getMembersCount(map.getId(), 1, 300);
	if (tt >= 4) {
		partycount = 1.5;
	} else {
		partycount = 1;
	}
	//player.dropMessage(6,"隊伍人數 " + tt + " , 加成 " + partycount + "倍");
	player.addEventValue("黑魔法師[困難]全員獎勵", 1, 1);
	/*player.gainItem(4032053, 50*partycount);
	player.gainItem(4001713, 25*partycount);
	player.gainItem(2630512, 2*partycount);
	player.gainItem(2633634, 2*partycount);
	player.gainItem(4000850, 2*partycount);*/
	player.gainItem(4032053, 100);
	player.gainItem(4001713, 25);
	player.gainItem(2630512, 2);
	player.gainItem(2633634, 2);
	player.gainItem(4000850, 2);
	player.gainItem(4034622, 5);
	player.addEventValue("BOSS里程", 1, 3000);
	player.addEventValue("總BOSS里程", 1, 3000);
}
