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
let mapList = [800000000, 100000000, 410000200, 410000124, 100000203, 240010502, 450007040, 300000000]; //泡點運作的地圖

//普通泡點數量
function init(attachment) {
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
            var day = date.getDay();
            if (day == 0) {
                day = 7;
            }
            event.startTimer("point", frequency);
            break;
    }
}
function autoPoints(mapId) {
    let players = event.getMap(mapId).getPlayers();
    for (let i = 0; i < players.size(); i++) {
        let player = players.get(i);

        if (player.hasItem(2434727, 1)) {//VIP盒子泡點更高 
            //會員泡點
            var pdnum = Math.floor(Math.random() * 2000);
            player.modifyCashShopCurrency(2, pdnum);
            player.showSystemMessage("[會員泡點]: 獲得 " + pdnum + " 楓點！");
        } else {
            var pdnum = Math.floor(Math.random() * 2000);
            player.modifyCashShopCurrency(2, pdnum);
            player.showSystemMessage("[掛機泡點]: 你獲得 " + pdnum + " 楓點！");
        }
    }
}

