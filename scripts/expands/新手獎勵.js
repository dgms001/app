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
let selection = npc.askYesNo("#v3994016##v3994000##v3994006##v3994006##v3994010#  #v3994025##v3994000##v3994012##v3994001##fs100##r#e圓夢谷\r\n#fs16##b歡迎你進駐，請領取你的禮物開始冒險吧");
if (selection == 1) {
    var level = player.getPQLog("新手禮包");
    if (level == 0) {
        for (var i = 0; i < 10; i++) {
            player.gainExp(550);
        }
        player.increaseTrunkCapacity(128);//倉庫欄位
        player.enableEquipSlotExt(0);//無限期吊飾擴充
        player.gainItem(2432628, 1);//本服菜單
        player.gainItem(2434228, 1);//新手套裝
		player.gainItem(2434229, 2);//改屬深淵
		player.gainItem(2000005, 500);//自選衝
		player.gainItem(2120000, 9999);//自選衝
		player.gainItem(4001714, 5);//自選衝
		player.gainItem(2434230, 3);//自選衝
        player.gainItem(5044006, 1);//傳送道具
        //player.gainItem(2450124, 3);//經驗道具
        //player.gainItem(2023128, 3);//經驗道具
        player.changeMap(50000);
        getpayLog();
        player.addPQLog("新手禮包", 1, 3000);
    } else {
        npc.say("#fs18##b#e當前角色已經領取過了。");
    }
}

function getIDname() {
    var sql = "select name from accounts where id = ? ";
    var result = player.customSqlResult(sql, player.getAccountId());
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("name");
        }
    } else {
        return 0;
    }

}
function getpayLog() {
    if (player.getEventValue("餘額") == 0) {
        var sql = "insert into hypay(accountid,name,accname) values('" + player.getAccountId() + "','" + player.getName() + "','" + getIDname() + "')";
        player.customSqlInsert(sql);
        player.addEventValue("餘額", 1, 3000);
        //npc.broadcastPlayerNotice(8, "【歡迎加入】 : 玩家【" + player.getName() + "】成功落地,成為圓夢谷新的一員");
    }
}
