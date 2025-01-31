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
        case 450010100:
                event_name = "boss_jinhillah";
                bossId = 8880400;
                handId = 8880401;
                smogId = 8880402;
                hp = 125000000000000;
                break;
        case 450010300:
                event_name = "boss_jinhillah_hard";
                bossId = 8880410;
                handId = 8880411;
                smogId = 8880412;
                hp = 3000000000000000;
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
        map.spawnMob(boss, 16, 265);
        map.setJinHillBossId(boss.getEntityId());
        let hand = map.makeMob(handId);
        hand.changeBaseHp(hp * partycount);
        map.spawnMob(hand, 16, 265);
        let smog = map.makeMob(smogId);
        smog.changeBaseHp(hp * partycount);
        map.spawnMob(smog, 16, 265);

}