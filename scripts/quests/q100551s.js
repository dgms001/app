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


let frequency = 60 * 1000;//泡點間隔 單位毫秒
let mapList = [100000000]; //泡點運作的地圖

var pdnum = 20;//普通泡點數量
let points = {//泡點獎勵列表。
    vip: {//每個VIP等級判斷的物品
        普通: [2430865, 1],
        尊貴會員: [2430865, 1]
    },
    reward: {//每個VIP等級的獎勵
        普通: [ // VIP等級，必須有VIP0
            [1, 20, 20, "點券"],
            [1, 20, 20, "抵用券"]
        ],
        尊貴會員: [
            [1, 40, 40, "點券"],
            [1, 20, 20, "抵用券"]
        ]
    }
}

function init(attachment) {
	event.setVariable("hour", 20);
	event.setVariable("min", 30);
    event.startTimer("point", frequency);
}

function timerExpired(key) {
    switch (key) {
        case "point":
            for (let i = 0; i < mapList.length; i++) {
                autoPoints(mapList[i]);
            }
			
			
			let players = event.getChannelPlayers();
			var date = new Date();
			var day =date.getDay();
			if(day==0){
				day=7;
			}
			var hour =date.getHours();
			var min =date.getMinutes();
			if(hour==event.getVariable("hour") && min==event.getVariable("min")){
				
				//判定周一-周六的活動開啟
				if(day==1 || day ==3 || day==5 ){
					//周1 3 5
					players.get(0).runScript("跑旗開啟");
				}else if(day==2 || day ==4 ){
					//周2 4 
					players.get(0).runScript("雪崩開啟");
				}else if(day==6 || day ==7 ){
					players.get(0).runScript("OX開啟");
				}
				
			}
			
			
            event.startTimer("point", frequency);
            break;
    }
}

function autoPoints(mapId) {
    let players = event.getMap(mapId).getPlayers();
    for (let i = 0; i < players.size(); i++) {
        let player = players.get(i);
		
        if(player.hasItem(2436363,1)){
			//會員泡點
			player.addPQLog("活力",10,365);
			player.modifyCashShopCurrency(1,pdnum*2);
			player.modifyCashShopCurrency(2,pdnum*2);
			player.showSystemMessage("[會員泡點]: 獲得 10 活力！");
			player.showSystemMessage("[會員泡點]: 獲得 "+pdnum*2+" 點券！");
			player.showSystemMessage("[會員泡點]: 獲得 "+pdnum*2+" 抵用！");
		}else{
			player.addPQLog("活力",5,365);
			player.modifyCashShopCurrency(1,pdnum);
			player.modifyCashShopCurrency(2,pdnum);
			player.showSystemMessage("[泡點]: 獲得 5 活力！");
			player.showSystemMessage("[泡點]: 獲得 "+pdnum+" 點券！");
			player.showSystemMessage("[泡點]: 獲得 "+pdnum+" 抵用！");
		}
    }
}

