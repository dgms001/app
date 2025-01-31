/*
 * NeroMS MapleStory server emulator written in Java
 * Copyright (C) 2020-2021  Dgms
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
 * @author Dgms
 */

if (player.getChannel() == 5 || player.getChannel() == 7) {
event = npc.getEvent("boss_blackmage_hard");
} else {
event = npc.getEvent("boss_blackmage");
}
if (event != null) {
        switch (map.getId()) {
                case 450013700:
                        player.setActionBar(39);
                        break;
        }
}