/*
 * NeroMS MapleStory server emulator written in Java
 * Copyright (C) 2017-2018  dgms
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * 
 * @author dgms
 */


let event = npc.getEvent("boss_siwu");
if (event != null && event.getVariable("boss2") == null) {
	event.setVariable("boss2", false);
	let boss = map.makeMob(8950001);
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
	boss.changeBaseHp(400000000000 * partycount);
	//boss.setMobAi();
	map.spawnMob(boss, -2, -16);
}