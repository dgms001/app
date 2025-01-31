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

/* global portal, player */

/**
 *
 * @author Jackson
 */

let idx = parseInt(map.getId() % 1000 / 100);
let event = portal.getEvent();
if (event != null) {
        if (event.getVariable("Kill" + idx) != null) {
                //结算经验
                let totalEXP = parseFloat(event.getVariable("TOTAL_EXP"));
                portal.playPortalSE();
				//player.gainItem(4310020,10);
				if(party.getMembersCount()>1){
					//player.gainItem(4310020,10);
				}
                player.gainExp(50000000*party.getMembersCount());
				
				if(getEventCount("怪物公園")<10){
					setEventCount("怪物公園",1,1);
					//player.modifyCashShopCurrency(1,3000);
					//player.addPQLog("活力",50,365);
					player.dropMessage(1,"恭喜完成了所有關卡");
				}else{
					
					player.dropMessage(1,"恭喜完成了所有關卡");
				}
                //根据星期获取额外奖励
                //player.changeMap(951000000, 1);
				player.runScript("怪物公園獎勵");
        } else {
                portal.abortWarp();
                player.showSystemMessage("請先消滅所有怪物!!");
        }
} else {
        portal.abortWarp();
}
function getEventCount(eventName) {

	var sql = "select value,time from accounts_event where accounts_id = ? and event =? ";

	var result = player.customSqlResult(sql, player.getAccountId(), eventName);

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("value");
		}
	} else {
		var sql = "insert into  accounts_event (accounts_id,world,event,type,value) values(?,?,?,?,?)";

		var result = player.customSqlInsert(sql, player.getAccountId(), player.getWorld(), eventName, 0, 0);
		return 0;
	}

}

function setEventCount(eventName, type, value) {

	var sql = "update accounts_event set type=?,value=value+? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql, type, value, player.getAccountId(), eventName);

}