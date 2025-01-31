/*
 * NeroMS MapleStory server emulator written in Java
 * Copyright (C) 2017-2018  Jackson
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
 * @author Jackson
 */


if (npc.getEvent("boss_blackmage") != null) {
        event = npc.getEvent("boss_blackmage");
        onemobhp = 100000000000000;
        twomovbhp = 100000000000000;
        threemobhp = 100000000000000;
        fourmobhp = 100000000000000;

} else {
        event = npc.getEvent("boss_blackmage_hard");
        onemobhp = 800000000000000;
        twomovbhp = 800000000000000;
        threemobhp = 800000000000000;
        fourmobhp = 800000000000000;
}
if (event != null) {
        switch (map.getId()) {
                case 450013100:
                        if (event.getVariable("boss1") == null) {
                                event.setVariable("boss1", false);
                                let dummy = map.makeMob(8880505);// 创造&破坏骑士
                                let knight1 = map.makeMob(8880500);//创世之光明剑灵
                                knight1.changeBaseHp(onemobhp);
                                map.spawnMob(knight1, -883, 84);

                                let knight2 = map.makeMob(8880501);//破坏之黑暗剑灵
                                knight2.changeBaseHp(onemobhp);
                                map.spawnMob(knight2, 924, 84);

                                dummy.setDummyBossGroups(knight1, knight2);
                                dummy.changeBaseHp(onemobhp);
                                map.spawnMob(dummy, 0, 84);


                                let boss = map.makeMob(8880512);
                                map.spawnMob(boss, 0, 84);

                                map.startBMEvent();
                        }
                        break;
                case 450013300:
                        if (event.getVariable("boss2") == null && event.getVariable("boss1")) {
                                event.setVariable("boss2", false);
                                let boss = map.makeMob(8880502);
                                boss.changeBaseHp(twomovbhp);
                                map.spawnMob(boss, 0, 87);

                                let mob1 = map.makeMob(8880512);
                                map.spawnMob(mob1, 0, 87);
                                let mob2 = map.makeMob(8880516);
                                map.spawnMob(mob2, 0, 87);
                                map.startBMEvent();
                        }
                        break;
                case 450013500:
                        if (event.getVariable("boss3") == null && event.getVariable("boss2")) {
                                event.setVariable("boss3", false);
                                let boss = map.makeMob(8880503);
                                boss.changeBaseHp(threemobhp);
                                map.spawnMob(boss, 0, 84);
                                boss.setZoneDataType(1);

                                let mob1 = map.makeMob(8880512);
                                map.spawnMob(mob1, 0, 84);

                                map.startBMEvent();
                        }
                        break;
                case 450013700:
                        if (event.getVariable("boss4") == null && event.getVariable("boss3")) {
                                event.setVariable("boss4", false);
                                let boss = map.makeMob(8880504);
                                boss.changeBaseHp(fourmobhp);
                                map.spawnMob(boss, 0, 218);

                                let mob1 = map.makeMob(8880512);
                                map.spawnMob(mob1, 0, 218);
                                map.startBMEvent();
                        }
                        break;
                case 450013750:
                        if (event.getVariable("boss4")) {
                                event.setVariable("boss5", false);
                                let boss = map.makeMob(8880518);//创世之卵才是最后可以爆物的怪物 
                                map.spawnMob(boss, 0, 217);
                        }
                        break;

        }
}