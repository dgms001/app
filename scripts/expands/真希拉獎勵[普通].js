//player.runScript("真希拉獎勵[普通]");
if (player.getEventValue("真希拉普通全員獎勵") >= 1) {
} else {
	let tt = party.getMembersCount(map.getId(), 1, 300);
	if (tt >= 4) {
		partycount = 1.5;
	} else {
		partycount = 1;
	}

	player.addEventValue("真希拉普通全員獎勵", 1, 1);
	player.gainItem(4032053, 2 * 50 * partycount);
	player.gainItem(4001713, 2 * 25 * partycount);
	player.gainItem(2630512, 2 * 2 * partycount);
	player.gainItem(2633634, 2 * 2 * partycount);
	player.gainItem(4000850, 2 * 2 * partycount);
	player.addEventValue("BOSS里程", 2, 3000);
	player.addEventValue("總BOSS里程", 2, 3000);
}