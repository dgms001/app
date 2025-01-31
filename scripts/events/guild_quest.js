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

let debug = false;
let mapz = Array(0, 100, 200, 300, 301, 400, 401, 410, 420, 430, 431, 440, 500, 501, 502, 600, 610, 611, 620, 630, 631, 640, 641, 700, 800, 900, 1000, 1100, 1101);

let EXIT_MAP = 990001100;
let MIN_PLAYER = 1;//最小游戲人數
let WAIT_TIME = 1;//等待成員時間 分鐘
let members;
let endTime;

function init(attachment) {
        guildId = attachment[0];
        player = attachment[1];
        for (var i = 0; i < mapz.length; i++) {
                let map_temp = event.getMap(990000000 + mapz[i]);
                if (map_temp != null) {
                        map_temp.reset();
                }
        }

        let map = event.getMap(990000000);
        map.overridePortal("join00", "guildquest1_gate");
        map.overridePortal("st00", "guildquest1_exit");


        map = event.getMap(990000300);
        for (var i = 1; i <= 20; i++) {
                map.overrideReactor(String(i), "guildquest1_hitcombo");
        }
        map = event.getMap(990000400);
        map.overrideReactor("stonegate", "guildquest1_stonegate");

        map = event.getMap(990000430);
        map.overrideReactor("metalgate", "guildquest1_metalgate");

        map = event.getMap(990000440);
        map.overrideReactor("spear1", "guildquest1_spear");
        map.overrideReactor("spear2", "guildquest1_spear");
        map.overrideReactor("spear3", "guildquest1_spear");
        map.overrideReactor("spear4", "guildquest1_spear");
        event.setVariable("spear", 0);

        event.startTimer("checkMember", WAIT_TIME * 60 * 1000);
        endTime = new Date().getTime() + WAIT_TIME * 60 * 1000;
        members = [];

        event.setVariable("leader", player.getName());
        event.setVariable("GuildId", guildId);
        event.setVariable("canEnter", true);//設置入場NPC限制是否允許成員進入
        event.setVariable("open", false);//設置家族任務大門是否允許進入
        event.setVariable("members", members);

        members.push(player);//註冊玩家

        player.setEvent(event);
        player.changeMap(990000000, 0);

}

function mobDied(mob) {
        switch (mob.getDataId()) {

        }
}



function removePlayer(playerId, changeMap) {
        for (let i = 0; i < members.length; i++) {
                if (members[i].getId() == playerId) {
                        //dissociate event before changing map so playerChangedMap is
                        //not called and this method is not called again by the player
                        members[i].setEvent(null);
                        if (changeMap)
                                members[i].changeMap(EXIT_MAP, "st00");
                        //collapse the members array so we don't accidentally warp
                        //this member again if the leader leaves later.
                        members.splice(i, 1);
                        break;
                }
        }
        if (members.length <= 0) {
                event.destroyEvent();
        }
}

function playerDisconnected(player) {
        //changeMap is false since all PQ maps force return the player to the exit
        //map on his next login anyway, and we don't want to deal with sending
        //change map packets to a disconnected client
        removePlayer(player.getId(), false);
        let leader = event.getVariable("leader");
        if (members.length > 0 && leader.equals(player.getName())) {
                kick();
        }
}

function playerChangedMap(player, destination) {
        switch (destination.getId()) {
                case 990000000://家族對抗賽 - 遺跡挖掘現場
                case 990000100://家族對抗賽 - 守護之峽谷
                case 990000200://家族對抗賽 - 遺跡的分岔口
                case 990000300://家族對抗賽 - 圣瑞尼亞城城門
                case 990000301://家族對抗賽 - 前往圣瑞尼亞城堡的路
                case 990000400://家族對抗賽 - 騎士大廳
                case 990000401://家族對抗賽 - 中央通道
                case 990000410://家族對抗賽 - 榮耀之室
                case 990000420://家族對抗賽 - 勇猛之室
                case 990000430://家族對抗賽 - 信念之室
                case 990000431://家族對抗賽 - 承諾之室
                case 990000440://家族對抗賽 - 正義之室
                case 990000500://家族對抗賽 - 賢者噴水池
                case 990000501://家族對抗賽 - 中央宴會聽
                case 990000502://家族對抗賽 - 酒窖
                case 990000600://家族對抗賽 - 地下水路
                case 990000610://家族對抗賽 - 水路之迷宮
                case 990000611://家族對抗賽 - 迷宮之盡頭
                case 990000620://家族對抗賽 - 水路之迷宮
                case 990000630://家族對抗賽 - 水路之迷宮
                case 990000631://家族對抗賽 - 迷宮之盡頭
                case 990000640://家族對抗賽 - 水路之迷宮
                case 990000641://家族對抗賽 - 迷宮之盡頭
                case 990000700://家族對抗賽 - 錫安列三世之墓
                case 990000800://家族對抗賽 - 死亡回廊
                case 990000900://家族對抗賽 - 艾裡葛斯之王座
                case 990001000://家族對抗賽 - 錫安列三世之寶物倉庫:
                        player.showTimer((endTime - new Date().getTime()) / 1000);
                        break;
                default:
                        //player died and respawned or clicked Nella to leave PQ
                        //changeMap is false so player doesn't get re-warped to exit map
                        removePlayer(player.getId(), false);
        }
}

function partyMemberDischarged(party, player) {
}

function kick() {
        for (let i = 0; i < members.length; i++) {
                //dissociate event before changing map so playerChangedMap is not
                //called and this method is not called again by the player
                members[i].setEvent(null);
                members[i].changeMap(EXIT_MAP);
        }
        event.destroyEvent();
}

function warpToMap(map, portal) {
        for (let i = 0; i < members.length; i++) {
                members[i].changeMap(map, portal);
        }
}

function timerExpired(key) {
        switch (key) {
                case "kick":
                        kick();
                        break;
                case "checkMember":
                        event.setVariable("canEnter", false);
                        let readyMap = event.getMap(990000000);
                        if (members.length < MIN_PLAYER) {
                                readyMap.scriptProgressMessage("由于參加家族任務人數不足，在場的人員將會被傳送出去。");
                                readyMap.broadcastEventNotice("由于參加家族任務人數不足，在場的人員將會被傳送出去。");
                                event.startTimer("kick", 3000);
                                endTime = new Date().getTime() + 3 * 1000;
                                map.showTimer(3);
                        } else {
                                readyMap.scriptProgressMessage("家族任務正式開啟，大門已經開放！");
                                readyMap.broadcastEventNotice("家族任務正式開啟，大門已經開放！");
                                event.setVariable("open", true); //設置等待地圖大門開啟，允許進入
                                event.startTimer("kick", 60 * 60 * 1000);//設置整個家族任務活動時間
                                endTime = new Date().getTime() + 60 * 60 * 1000;
                                readyMap.showTimer(60 * 60);
                        }
                        break;
                case "s1_gate_check":
                        makeCombo();
                        break;
        }
}

function deinit() {
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(null);
                members[i].setDeathCount(-1);
        }
}



function makeCombo() {
        let map = event.getMap(990000300);
        let gate_count = parseInt(event.getVariable("gate_count"));
        let check_idx = parseInt(event.getVariable("check_idx")) + 1;
        if (check_idx > 3 + gate_count) {
                event.setVariable("stone_move", 2);
                map.scriptProgressMessage("石像已經移動完畢，請開始重復剛才石像移動的軌跡！");
                map.broadcastEventNotice("石像已經移動完畢，請開始重復剛才石像移動的軌跡！");
        } else {
                let check = event.getVariable("check");
                let rand = roa();
                check += rand + "|";
                if (debug) {
                        map.broadcastEventNotice("Debug:Reactor Combo:" + check + " check_idx:" + check_idx);
                }
                map.setReactorState(rand, 0);
                event.setVariable("check", check);
                event.setVariable("check_idx", check_idx);
                event.startTimer("s1_gate_check", 3500);
        }
}



function roa() {
        var combos = new Array("1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20");
        var num = Math.floor(Math.random() * combos.length); //生成隨機數num
        return combos[num];
}