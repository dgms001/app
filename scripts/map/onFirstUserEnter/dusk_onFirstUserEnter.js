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
 * Jinhillah
 * @author dgms
 */


let event_name;
let bossId;
let handId;
let smogId;
let hp;
switch (map.getId()) {
        case 450009400:
                event_name = "boss_dusk";
                bossId = 8644650;

                hp = 4002000000000000;
                break;
        case 450009500:
                event_name = "boss_dusk_hard";
                bossId = 8644655;

                hp = 10000000000000;
                break;
}
let event = npc.getEvent(event_name);
if (event != null && event.getVariable("boss") == null) {
        event.setVariable("boss", false);
        let boss = map.makeMob(bossId);
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

        boss.changeBaseHp(hp * partycount);
        map.spawnMob(boss, -45, -158);
		boss.setZoneDataType(1);
		map.startFieldEvent();
        map.setJinHillBossId(boss.getEntityId());
        let hand = map.makeMob(bossId);
        hand.changeBaseHp(hp * partycount);
        map.spawnMob(boss, -45, -158);
		boss.setZoneDataType(1);
		map.startFieldEvent();
        let smog = map.makeMob(bossId);
        smog.changeBaseHp(hp * partycount);
        map.spawnMob(boss, -45, -158);
		boss.setZoneDataType(1);
		map.startFieldEvent();

}