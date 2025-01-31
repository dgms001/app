/*
 * AuroMS MapleStory server emulator written in Java
 * Copyright (C) 2018 dgms
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/* global npc, player, map */



var XC01 = "#fUI/NameTag.img/medal/175/w#";// - BURNING(左)
var XC02 = "#fUI/NameTag.img/medal/175/c#";// - BURNING(中)
var XC03 = "#fUI/NameTag.img/medal/175/e#";// - BURNING(右)


let BossName = "戰國無雙";

let selStr = "\t\t\t        #fs24##b#e#fc0xFFCC13AB#【" + bossname + "】\r\n";
selStr += "" + XC01;
for (var i = 0; i <= 240; i++) {
	selStr += XC02;
};
selStr += XC03 + "#b#n#fs15#"
//selStr += "\r\n#k200級以上300級以下的玩家可以使用\r\n隊伍人數 : 1 , 入場5次 .\r\n#b";
selStr += "#e#fs20#\t\t\t\t#L0#無雙進場#l\r\n\t\t\t\t#L1#強化圖騰#l\r\n\t\t\t\t#L2#兌換圖騰#l\r\n";
//selStr += "#L12#強化#v1142922#勳章#l";

let sel = npc.askMenuA(selStr, true);//9071004
switch (sel) {
	case 0:
		player.runScript("戰國無雙進場");
		break;
	case 1:
		player.runScript("戰國圖騰強化");
		break;
	case 2:
		player.runScript("戰國無雙兌換");
		break;
}
