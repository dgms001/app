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


player.changeBGM("BgmWz2.img/myHome_room");


if (map.getMyHomeId() == player.getAccountId()) {
	    var event = npc.getEvent("paodian");
		if(event != null){
		var players = event.getVariable("players");
			var index = -1;
			for (var i = 0; i < players.length; i++) {
				if (players[i].getId() == player.getId()) {
					index = i;
					break;
				}
			}
			if (index == -1) {
				players.push(player);
				//npc.say("加入泡點");
			} else {
				//npc.say("已經在泡點了")
			}
		}
        player.updateQuestRecordEx(500767, player.getWorldShareRecord(500767));
        player.updateQuestRecordEx(500778, player.getWorldShareRecord(500778));
        player.updateQuestRecordEx(500773, player.getWorldShareRecord(500773));
        player.updateQuestRecordEx(500763, player.getWorldShareRecord(500763));
        player.updateQuestRecordEx(501024, player.getWorldShareRecord(501024));
		
        player.updateQuestRecordEx(501465, player.getWorldShareRecord(501465));//將帳號管理人紀錄 寫入登入角色 來顯示ui介面
        player.updateQuestRecordEx(501466, player.getWorldShareRecord(501466));
        player.updateQuestRecordEx(501467, player.getWorldShareRecord(501467));
        let buy = player.getQuestRecordEx(500778, "t");
        if (buy != null) {
                player.startQuest(500778, 0);
        } else {
                player.forfeitQuest(500778);
        }
        if (player.isQuestCompleted(64601) && !player.isQuestStarted(64605) && !player.isQuestCompleted(64605)) {
                if (!player.isQuestCompleted(64602)) {
                        player.spawnTempNpc(9400924, -10, 100, 1);//7E 4C 0F 00
                        player.setNpcSpecialAction(9400924, "summon", 0, false);
                }
                if (!player.isQuestCompleted(64603)) {
                        player.spawnTempNpc(9400923, -160, 100, 0);//7C 4C 0F 00
                        player.setNpcSpecialAction(9400923, "summon", 0, false);

                }
                if (!player.isQuestCompleted(64604)) {
                        player.spawnTempNpc(9400922, -60, 100, 1);//7D 4C 0F 00
                        player.setNpcSpecialAction(9400922, "summon", 0, false);
                }
        }
        let n = player.getQuestRecordEx(500773, "askR");
        if (n != null) {
                let x = player.getIntQuestRecordEx(500767, "managerXpos");
                let y = player.getIntQuestRecordEx(500767, "managerYpos");
                player.spawnTempNpc(9400930, x, y, 1);
        }
}
