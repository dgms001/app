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
/*
var itemid = 2434637;
var honor = parseInt(500);
var currentItemQuantity = player.getAmountOfItem(itemid);
var amount = currentItemQuantity
var choice = npc.askNumber("\r\n#b\t\t  #i" + itemid + ":# #z" + itemid + "#\r\n\r\n目前兌換比值：1:" + honor + " 名譽值\r\n目前可開啟的勳章總數量：#r#c" + itemid + "# #b個\r\n目前可獲取的名譽值：#r" + honor * amount + " #b名譽值\r\n\r\n請輸入要開啟的勳章數量：", 1, 1, amount);
var GS = choice;
player.modifyHonor(honor * choice);
player.loseItem(itemid, GS);
player.showSystemMessage("獲得了 " + honor * choice + " 點名譽值");
*/
/* let honor = parseInt(10000);
 player.modifyHonor(honor);
 player.showSystemMessage("獲得了" + honor + "點名聲值.");
 if (npc.getSlot() > 0) {
         player.loseItem(npc.getItemId(), npc.getSlot(), 1);
 }*/


//let honor = parseInt((950 + Math.random() * 150) * Math.random() *10);//950~1100 *0~10倍 
let honor = parseInt(10000);
player.modifyHonor(honor);
player.showSystemMessage("獲得了" + honor + "點名聲值.");
if (npc.getSlot() > 0) {
        player.loseItem(npc.getItemId(), npc.getSlot(), 1);
}
