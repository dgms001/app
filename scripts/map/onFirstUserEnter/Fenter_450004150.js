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
 * Lucid
 * @author dgms
 */

let eventName;
let bossId;
let flowerId;
let bossHp;
switch (map.getId()) {
        case 450004150:
                eventName = "boss_lucid";
                bossId = 8880140;
                flowerId = 8880166;
                bossHp = 12000000000000;
                break;
        case 450004450:
                eventName = "boss_lucid_hard";
                bossId = 8880141;
                flowerId = 8880176;
                bossHp = 180000000000000;
                break;
}
let event = npc.getEvent(eventName);
if (event != null && event.getVariable("boss1") == null) {
        event.setVariable("boss1", false);
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

        boss.changeBaseHp(bossHp * partycount);
        map.spawnMob(boss, 1000, 48);

        let flower = map.makeMob(flowerId);
        flower.changeBaseHp(bossHp * partycount);
        map.spawnMob(flower, 1000, 48);
        map.startFieldEvent();
}