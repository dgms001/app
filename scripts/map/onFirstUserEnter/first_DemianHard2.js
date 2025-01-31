/**
 * Demian
 */

let event = npc.getEvent("boss_demian_hard");
if (event != null && event.getVariable("boss2") == null) {
	event.setVariable("boss2", false);
	let boss = map.makeMob(8880101);
	let partycount = party.getMembersCount(map.getId(), 1, 300);
	if (partycount == 3) {
		partycount = 1;
	} else if (partycount == 4) {
		partycount = 1;
	} else if (partycount == 5) {
		partycount = 1;
	} else if (partycount == 6) {
		partycount = 1;
	} else {
		partycount = 1;
	}
	boss.changeBaseHp(5250000000000 * partycount);
	map.spawnMob(boss, 828, 15);
	//map.startDemianFieldEvent(2, 8880101);
}