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
 * Sparkling Crystal (NPC 1061010)
 * Warps player out of the other dimension.
 *
 * @author dgms (content from Vana r3171)
 */
//993014000

/*
var status = -1
var txt;
/*------------------------------------------------------------*/
/*var ltz45 = "#fMap/MapHelper.img/weather/starPlanet2/5#";
var ltz47 = "#fMap/MapHelper.img/weather/starPlanet/4#";
var GC1 = "#fEffect/CharacterEff/1050312/0/0#"; //最上面的亮粉
var GC2 = "#fUI/UIMiniGame/starPlanetRPS/heart#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1082700/1/0#"; //"+z+"//小選項用
//var GC2 = "#fEffect/ItemEff/1070069/effect/walk1/2#"

txt = "";
txt += "#fs72##e#b";
txt += "  #L1#刷刷裝備#l\r\n ";
txt += "#L2#裝備屬性瀏覽#l";
txt += "";

let selection = npc.askMenuA(txt, true);

switch (selection) {
    case 1:
        player.runScript("刷裝備");
        break;
     case 2:
        player.runScript("裝備屬性瀏覽");
        break; 
}*/



let selection = npc.askYesNo("#fs18##b#e親愛的玩家您好，歡迎來到圓夢谷，\r\n準備好展開冒險了嗎?");
if (selection == 1) {
    level = player.getLevel();
    if (level <= 10) {
        player.changeLevel(10);
        player.gainEquipInventorySlots(96); //裝備欄位
        player.gainUseInventorySlots(96); //消耗欄位
        player.gainEtcInventorySlots(96); //其他欄位
        player.gainSetupInventorySlots(96); //裝飾欄位
        //player.gainCashInventorySlots(96);//特殊欄位
        player.gainItem(2435226, 1);
        player.gainItem(5044006, 1);
        player.loseItem(2000013, 100);
        player.loseItem(2000014, 100);
        player.changeMap(867157500);
    } else {
        npc.say("#fs18##b#e出現異常，請回報管理員。");
    }
}