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
 * Boss: Siwu_Chaos
 * @author dgms
 */

let EXIT_MAP = 350060300;

let FIELD_1 = 350060700;
let FIELD_2 = 350060800;
let FIELD_3 = 350060900;

let DEATH_COUNT = 5;

//let BOSS_LOG = "Siwu_Chaos";
let BOSS_LOG = "boss_siwu_chaos";
let party;
let members;
let endTime;

let start;
let totalTime = 0;
let bossHp = 4000000000000 + 4000000000000 + 7000000000000;
var bossid = "史烏[困難]";
let killPlayer = 0;

var tupoTotal = 0;
var bossname = "史烏[困難]";
let map;
let end;
let fightTime = 30 * 60 * 1000;//每一輪時間






function init(attachment) {
        party = attachment;

        let map_1 = event.getMap(FIELD_1);
        let map_2 = event.getMap(FIELD_2);
        let map_3 = event.getMap(FIELD_3);
        map = event.getMap(FIELD_3);

        map_1.reset();
        map_2.reset();
        map_3.reset();
        start = new Date().getTime();//移植
        party.changeMap(FIELD_1, "st00");
        members = party.getLocalMembers();
        map_1.showTimer(30 * 60);
        event.startTimer("kick", fightTime);
        endTime = new Date().getTime() + 30 * 60 * 1000;
        //map.showTimer(fightTime/1000);
        map_3.setIndividualDrop(true);
        event.setVariable("members", members);
        event.startTimer("summon_obtacle1", 4000);
        for (let i = 0; i < members.length; i++) {
                if (members[i].getLevel() < 250) {
                        members[i].changeMap(EXIT_MAP);
                        members[i].showSystemMessage("等級不足退場");
                }
                if (members[i].getEventValue(BOSS_LOG) > 0) {
                        members[i].changeMap(EXIT_MAP);
                        members[i].showSystemMessage("該賬號已經進入過了,請明天再來");
                }
                members[i].setEvent(event);

                members[i].setDeathCount(DEATH_COUNT);
                members[i].modifyMoonlightValue(-100);
                //判斷傷害初始化
                event.setVariable(members[i].getName() + "傷害", 0);
        }





}

//記錄傷害
function mobHit(player, mob, damage) {//移植 mobid 改 boss
        var mobIds = [8950100, 8950101, 8950102]
        if (mobIds.indexOf(mob.getDataId()) != -1) {
                //記錄傷害
                //player.dropMessage(1,"記錄本次傷害！"+damage);
                var playerAllDamage = parseFloat(event.getVariable(player.getName() + "傷害"));
                event.setVariable(player.getName() + "傷害", (playerAllDamage + damage))
                //player.dropMessage(1,"玩家："+player.getName()+" 目前傷害為:"+Math.floor((playerAllDamage+damage))+"");
                //最後一擊處理
                var datotal = 0;
                //做傷害排名
                for (let i = 0; i < members.length; i++) {
                        //獲取傷害
                        var da = parseFloat(event.getVariable(members[i].getName() + "傷害"));
                        datotal += da;

                }
                if (datotal >= bossHp) {
                        //擊殺
                        killPlayer = player.getId();
                        //player.dropMessage(1,"玩家："+player.getName()+" 進行了最後一擊:  傷害為"+Math.floor((playerAllDamage+damage))/102000000+" E");
                }

        }
}


function mobDied(mob) {
        switch (mob.getDataId()) {
                case 8950100:
                        let map_1 = event.getMap(FIELD_1);
                        map_1.clearMobs();
                        event.setVariable("boss1", true);
                        event.stopTimer("summon_obtacle1");
                        event.startTimer("To_Stage_2", 6700);
                        break;
                case 8950101:
                        event.setVariable("boss2", true);
                        event.stopTimer("summon_obtacle2");
                        event.startTimer("To_Stage_3", 4700);
                        break;
                case 8950102:
                        /*
                        var itemList = [
                                //1卷軸
                                Array(1, 2048819, 25000, 30000),
                                Array(1, 2048820, 25000, 30000),
                                Array(1, 2612074, 25000, 30000),
                                Array(1, 2612075, 25000, 30000),
                                Array(1, 2613062, 25000, 30000),
                                Array(1, 2613063, 25000, 30000),
                                Array(1, 2615041, 25000, 30000),
                                Array(1, 2615042, 25000, 30000),
                                Array(1, 2616072, 25000, 30000),
                                Array(1, 2616073, 25000, 30000),
                                //2專屬
                                Array(2, 1012632, 1500),

                                //3武防
                                Array(3, 1004422, 3000),
                                Array(3, 1004423, 3000),
                                Array(3, 1004424, 3000),
                                Array(3, 1004425, 3000),
                                Array(3, 1004426, 3000),
                                Array(3, 1073030, 3000),
                                Array(3, 1073032, 3000),
                                Array(3, 1073033, 3000),
                                Array(3, 1073034, 3000),
                                Array(3, 1073035, 3000),
                                Array(3, 1082636, 3000),
                                Array(3, 1082637, 3000),
                                Array(3, 1082638, 3000),
                                Array(3, 1082639, 3000),
                                Array(3, 1082640, 3000),
                                Array(3, 1102775, 3000),
                                Array(3, 1102794, 3000),
                                Array(3, 1102795, 3000),
                                Array(3, 1102796, 3000),
                                Array(3, 1102797, 3000),
                                Array(3, 1152174, 3000),
                                Array(3, 1152176, 3000),
                                Array(3, 1152177, 3000),
                                Array(3, 1152178, 3000),
                                Array(3, 1152179, 3000),

                                //4家具
                                //Array(4,2672072,300),
                                Array(4, 2672054, 300),
                                Array(4, 2672055, 300),
                                Array(4, 2672057, 300),
                                Array(4, 2672058, 300),
                                Array(4, 2672059, 300),
                                Array(4, 2672060, 300),
                                Array(4, 2672061, 300),
                                Array(4, 2672094, 300),
                        ];
                        for (var a = 0; a < 2; a++) {
                        for (var i = 0; i < itemList.length; i++) {
                                var DROPS1 = Math.floor(Math.random() * 100000);//
                                var DROPS2 = Math.floor(Math.random() * 100000);//
                                if (itemList[i][0] == 1) {
                                        if (itemList[i][2] >= DROPS1) {
                                                mob.dropItem(itemList[i][1]);

                                                if (itemList[i][3] >= DROPS2) {
                                                        mob.dropItem(itemList[i][1]);
                                                }
                                        }


                                } else if (itemList[i][0] == 2) {
                                        if (itemList[i][2] >= DROPS1) {
                                                event.broadcastPlayerNotice(7, "隊長 " + members[0].getName() + "  : 擊殺 " + bossid + " 時，掉落了專屬裝備！");
                                                mob.dropItem(itemList[i][1]);
                                        }


                                } else if (itemList[i][0] == 3) {
                                        if (itemList[i][2] >= DROPS1) {

                                                mob.dropItem(itemList[i][1]);
                                        }
                                } else if (itemList[i][0] == 4) {
                                        if (itemList[i][2] >= DROPS1) {

                                                event.broadcastPlayerNotice(7, "隊長 " + members[0].getName() + "  : 擊殺 " + bossid + " 時，掉落了專屬家具！");
                                                mob.dropItem(itemList[i][1]);
                                        }
                                }
                        }
                }
                        event.setVariable("boss3", true);
                        event.stopTimer("summon_obtacle3");*/
                        reward();

                        break;
        }
}

function reward() {

        //通關
        endTime = new Date().getTime();
        totalTime = (endTime - start) / 1000;
        //停止倒計時踢出
        event.stopTimer("kick");
        //30秒後踢出
        event.startTimer("kick", 8 * 1000);
        map.showTimer(8);
        var damList = [];
        var datotal = 0;
        //做傷害排名
        for (let i = 0; i < members.length; i++) {
                //冒泡排序

                //獲取傷害
                var da = parseFloat(event.getVariable(members[i].getName() + "傷害"));
                datotal += da;
                var arr = new Array(da, members[i]);
                damList.push(arr);
        }
        //拿到數組進行排序
        var temp;
        for (var i = 0; i < damList.length; i++) {
                //j是數組的最後一個角標
                for (var j = damList.length - 1; j > i; j--) {

                        if (damList[j][0] > damList[j - 1][0]) {
                                //從後往前進行比較，小數往前，一輪之後最小數就在最前面了
                                temp = damList[j - 1];
                                damList[j - 1] = damList[j];
                                damList[j] = temp;
                        }
                }
        }

        //damList此時為從大到小排序
        //event.broadcastPlayerNotice(7, "[傷害排名] 總傷害 " + parseFloat(datotal) + " ");
        var killId = 0;
        for (var i = 0; i < damList.length; i++) {

                var player = damList[i][1];
                //排名獎勵
                if (i == 0) { //第一名
                        if (party.getMembersCount() > 1) {
                                player.addPQLog("BOSS里程", 1, 3000);
                                var sql = "insert into dgms_bossinfo(bossName, playersName, `time`) values('" + bossid + "','" + player.getName() + "','" + totalTime + "')";
                                player.customSqlInsert(sql);
                                mm = Math.floor(parseFloat(totalTime) / 60);
                                ss = Math.floor(parseFloat(totalTime) % 60);
                                //event.broadcastPlayerNotice(2, "[" + bossid + "] 玩家 " + player.getName() + "統領隊伍的通關時間  " + mm + " 分 " + ss + " 秒 ");
                        } else {
                                var sql = "insert into dgms_bossinfo(bossName, playersName, `time`) values('" + bossid + "','" + player.getName() + "','" + totalTime + "')";
                                player.customSqlInsert(sql);
                                mm = Math.floor(parseFloat(totalTime) / 60);
                                ss = Math.floor(parseFloat(totalTime) % 60);
                                //event.broadcastPlayerNotice(2, "[" + bossid + "] 玩家 " + player.getName() + "統領隊伍的通關時間  " + mm + " 分 " + ss + " 秒 ");

                        }
                } else if (i == 1) { //第二名

                } else if (i == 2) { //第三名

                }
                if (killPlayer == player.getId()) { //擊殺者獎勵
                        killId = i;

                }
                //player.runScript("史烏獎勵[困難]");
                //event.broadcastPlayerNotice(7, "[傷害排名] 排名:" + (i + 1) + "  玩家：" + player.getName() + "  傷害 ：" + damList[i][0] + "  傷害占比 : " + parseFloat(damList[i][0] / datotal) * 100 + " %");
						player.addPQLog(BOSS_LOG);
        player.addEventValue(BOSS_LOG);
        }
        var player = damList[killId][1];
        //event.broadcastPlayerNotice(7, "[擊殺獎勵]通關時間: " + totalTime + " 秒 擊殺 玩家：" + damList[killId][1].getName() + "  傷害 ：" + damList[killId][0] + "  傷害占比 : " + parseFloat(damList[killId][0] / datotal) * 100 + " %");
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
}

function playerChangedMap(player, destination) {
        switch (destination.getId()) {
                case FIELD_1:
                case FIELD_2:
                case FIELD_3:
                        player.showTimer((endTime - new Date().getTime()) / 1000);
                        player.showDeathCount();
                        break;
                default:
                        //player died and respawned or clicked Nella to leave PQ
                        //changeMap is false so player doesn't get re-warped to exit map
                        removePlayer(player.getId(), false);
        }
}

function partyMemberDischarged(party, player) {
        if (party.getLeader() == player.getId()) {
                kick();
        } else {
                removePlayer(player.getId(), true);
        }
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
                        event.stopTimer("summon_obtacle1");
                        event.stopTimer("summon_obtacle2");
                        event.stopTimer("summon_obtacle3");
                        kick();
                        break;
                case "To_Stage_2":
                        party.changeMap(FIELD_2, "st00");
                        break;
                case "To_Stage_3":
                        party.changeMap(FIELD_3, "st00");
                        break;
                case "summon_obtacle1":
                        event.startTimer("summon_obtacle1", 4000);
                        let map_1 = event.getMap(FIELD_1);
                        map_1.createObtacleAtom(0, 3, 0x30, 0x33, -500, -16);
                        break;
                case "summon_obtacle2":
                        event.startTimer("summon_obtacle2", 4000);
                        let map_2 = event.getMap(FIELD_2);
                        map_2.createObtacleAtom(0, 3, 0x30, 0x33, -500, -16);
                        break;
                case "summon_obtacle3":
                        event.startTimer("summon_obtacle3", 4000);
                        let map_3 = event.getMap(FIELD_3);
                        map_3.createObtacleAtom(0, 3, 0x30, 0x33, -500, -16);
                        break;
        }
}

function deinit() {
        event.getMap(FIELD_1).endFieldEvent();
        event.getMap(FIELD_2).endFieldEvent();
        event.getMap(FIELD_3).endFieldEvent();
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(null);
                members[i].setDeathCount(-1);
        }
}



/*
let EXIT_MAP = 350060300;
let FIELD_1 = 350060400;
let FIELD_2 = 350060500;
let FIELD_3 = 350060600;
let DEATH_COUNT = 3;

let BOSS_LOG = "史烏[普通]";
let party;
let members;
let endTime;

let start;
let totalTime=0;
let bossHp = 1000+200+300;
var bossid ="史烏[普通]";
let killPlayer=0;

function init(attachment) {
        party = attachment;
        let map_1 = event.getMap(FIELD_1);
        let map_2 = event.getMap(FIELD_2);
        let map_3 = event.getMap(FIELD_3);
        
        map_1.reset();
        map_2.reset();
        map_3.reset();
                start=new Date().getTime();

        party.changeMap(FIELD_1, "st00");
        members = party.getLocalMembers();

        map_1.showTimer(30 * 60);

        event.startTimer("kick", 30 * 60 * 1000);
        endTime = new Date().getTime() + 30 * 60 * 1000;

        event.setVariable("members", members);
        event.startTimer("summon_obtacle1", 4000);
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(event);
                members[i].addPQLog(BOSS_LOG);
                members[i].setDeathCount(DEATH_COUNT);
                                //判斷傷害初始化
                                event.setVariable(members[i].getName()+"傷害",0);
        }
}

//記錄傷害
function mobHit(player, mob, damage) {
        var mobIds = [8950100,8950101,8950102]
        if(mobIds.indexOf(mob.getDataId()) != -1){
                //記錄傷害
                player.dropMessage(1,"你打的是三個階段中的一個BOSS，記錄本次傷害！"+damage);
                var playerAllDamage = parseFloat(event.getVariable(player.getName()+"傷害"));
                event.setVariable(player.getName()+"傷害",(playerAllDamage+damage))
                player.dropMessage(1,"玩家："+player.getName()+" 目前傷害為:"+Math.floor((playerAllDamage+damage))+"");
                //最後一擊處理
                var datotal=0;
                //做傷害排名
                for (let i = 0; i < members.length; i++) {
                    //獲取傷害
                        var da=parseFloat(event.getVariable(members[i].getName()+"傷害"));
                        datotal+=da;

                }
                if(datotal>=bossHp){
                        //擊殺
                        killPlayer=player.getId();
                        player.dropMessage(1,"玩家："+player.getName()+" 進行了最後一擊:  傷害為"+Math.floor((playerAllDamage+damage))/102000000+" E");
                }
	
        }
}

function mobDied(mob) {
        switch (mob.getDataId()) {
                case 8950100:
                        let map_1 = event.getMap(FIELD_1);
                        map_1.clearMobs();
                        event.setVariable("boss1", true);
                        event.stopTimer("summon_obtacle1");
                        event.startTimer("To_Stage_2", 6700);
                        break;
                case 8950101:
                        event.setVariable("boss2", true);
                        event.stopTimer("summon_obtacle2");
                        event.startTimer("To_Stage_3", 4700);
                        break;
                case 8950102:
                        event.setVariable("boss3", true);
                        event.stopTimer("summon_obtacle3");
                                        	
                                                reward();
                                        	
                        break;
        }
}

function reward(){
        //通關
        endTime=new Date().getTime();
        totalTime=(endTime-start)/1000;
        //停止倒計時踢出
        event.stopTimer ("kick");
        //30秒後踢出
        event.startTimer("kick", 30*1000);
        var damList=[];
        var datotal=0;
        //做傷害排名
        for (let i = 0; i < members.length; i++) {
                //冒泡排序
                //獲取傷害
                var da=parseFloat(event.getVariable(members[i].getName()+"傷害"));
                datotal+=da;
                var arr=new Array(da,members[i]);
                damList.push(arr);
        }
        //拿到數組進行排序
        var temp;
        for(var i = 0; i<damList.length;  i++){ 
                //j是數組的最後一個角標
                for (var j = damList.length-1; j > i; j--) {
                        if (damList[j][0] > damList[j - 1][0]) {
                                //從後往前進行比較，小數往前，一輪之後最小數就在最前面了
                                temp = damList[j - 1];
                                damList[j - 1] = damList[j];
                                damList[j] = temp;
                        }
                }
        }

        //damList此時為從大到小排序
        event.broadcastPlayerNotice(7, "[傷害排名] 總傷害 "+parseFloat(datotal)+" "   );
        var killId=0;
        for(var i = 0; i<damList.length;  i++){ 
                var player=damList[i][1];
                //排名獎勵
                if(i==0){
                        //第一名
                        var sql = "insert into dgms_bossinfo(bossName, playersName, `time`) values('"+bossid+"','"+player.getName()+"','"+totalTime+"')";
                        player.customSqlInsert(sql);

                }else if(i==1){
                        //第二名

                }else if(i==2){
                        //第三名

                }

                if(killPlayer==player.getId()){
                        //擊殺者獎勵
                        killId=i;
                	
                }

        	
                event.broadcastPlayerNotice(7, "[傷害排名] 排名:"+(i+1)+"  玩家："+player.getName()+"  傷害 ："+damList[i][0]+"  傷害占比 : "+parseFloat(damList[i][0]/datotal)*100+" %"   );
        }

        //擊殺者部分
        //擊殺獎勵
        var player=damList[killId][1];
        //+bossLOG
        event.broadcastPlayerNotice(7, "[擊殺獎勵]通關時間: "+totalTime+" 秒 擊殺 玩家："+damList[killId][1].getName()+"  傷害 ："+damList[killId][0]+"  傷害占比 : "+parseFloat(damList[killId][0]/datotal)*100+" %"   );
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
}

function playerChangedMap(player, destination) {
        //TODO: is it true that even when a non-leader clicks Nella, the entire
        //party is booted? and that GMS forces party out when only two members
        //remain alive and online?
        switch (destination.getId()) {
                case FIELD_1:
                case FIELD_2:
                case FIELD_3:
                        player.showTimer((endTime - new Date().getTime()) / 1000);
                        player.showDeathCount();
                        break;
                default:
                        //player died and respawned or clicked Nella to leave PQ
                        //changeMap is false so player doesn't get re-warped to exit map
                        removePlayer(player.getId(), false);
        }
}

function partyMemberDischarged(party, player) {
        if (party.getLeader() == player.getId()) {
                kick();
        } else {
                removePlayer(player.getId(), true);
        }
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

function timerExpired(key) {
        switch (key) {
                case "kick":
                        event.stopTimer("summon_obtacle1");
                        event.stopTimer("summon_obtacle2");
                        event.stopTimer("summon_obtacle3");
                        kick();
                        break;
                case "To_Stage_2":
                        party.changeMap(FIELD_2, "st00");
                        break;
                case "To_Stage_3":
                        party.changeMap(FIELD_3, "st00");
                        break;
                case "summon_obtacle1":
                        event.startTimer("summon_obtacle1", 4000);
                        let map_1 = event.getMap(FIELD_1);
                        map_1.createObtacleAtom(0, 3, 0x30, 0x33, -500, -16);
                        break;
                case "summon_obtacle2":
                        event.startTimer("summon_obtacle2", 4000);
                        let map_2 = event.getMap(FIELD_2);
                        map_2.createObtacleAtom(0, 3, 0x30, 0x33, -500, -16);
                        break;
                case "summon_obtacle3":
                        event.startTimer("summon_obtacle3", 4000);
                        let map_3 = event.getMap(FIELD_3);
                        map_3.createObtacleAtom(0, 3, 0x30, 0x33, -500, -16);
                        break;
        }
}

function deinit() {
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(null);
                members[i].setDeathCount(-1);
        }
}*/