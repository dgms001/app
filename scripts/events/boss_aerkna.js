

let EXIT_MAP = 450005400;

let PHASE_1 = 940200300;
let PHASE_2 = 940200310;
let PHASE_3 = 940200320;
let PHASE_4 = 940200330;

let DEATH_COUNT = 10;

let BOSS_LOG = "調和精靈";
//let BOSS_LOG = "調和精靈副本";
let LOG = "調和精靈";
let party;
let members;
let players;
let endTime;
var map;
let map_1;
let map_2;
let map_3;
let map_4;
let lvhp = 1;

function init(attachment) {
    party = attachment;
    party.changeMap(PHASE_1, 0);
    members = party.getLocalMembers();
    players = members[0];
    map_1 = event.getMap(PHASE_1);
    map_2 = event.getMap(PHASE_2);
    map_3 = event.getMap(PHASE_3);
    map_4 = event.getMap(PHASE_4);
    event.setVariable("killmob1", 0);
    map_1.showTimer(30 * 60);
    map_1.clearMobs();
    map_1.resetMobsSpawns();
    map_2.clearMobs();
    map_2.resetMobsSpawns();
    map_3.clearMobs();
    map_3.resetMobsSpawns();
    map_4.clearMobs();
    map_4.resetMobsSpawns();
    event.setVariable("summoned", "0");
    event.setVariable("victory", "0");
    //map_1.spawnTempNpc(3003324, 1468, -101);
    //map_1.showTimer(30 * 60);
    endTime = new Date().getTime() + 15 * 60 * 1000;
    event.setVariable("endTime", endTime);
    event.startTimer("kick", 15 * 60 * 1000);
    event.setVariable("members", members);
    for (let i = 0; i < members.length; i++) {
        if (members[i].getEventValue(BOSS_LOG) >= 1) {
            members[i].changeMap(EXIT_MAP);
            members[i].showSystemMessage("【調和精靈】當日次數已用完");
        }
        members[i].setEvent(event);
        //members[i].addEventValue(BOSS_LOG);
        members[i].addEventValue(BOSS_LOG + "總次數", 1, 999);
        // members[i].addPQLog(LOG);
        members[i].setDeathCount(DEATH_COUNT);
    }
}

function spawnboss() {

    //map_4.broadcastEventNotice("出現大型怪物,請注意防守！！！");

    boss = map_4.makeMob(8644011);
    boss.setForcedMobStat(350, 1000); //傷害歸1
    boss.changeBaseHp(50000000000000 * (1 + lvhp * 0.35)); //基準50兆 持續傷基準10e
    map_4.spawnMob(boss, 494, 139);
    event.setVariable("stage1_dummy", boss);
    lvhp++;

}
function spawnall() { //spawnall()

    //map.broadcastEventNotice("出現大型怪物,請注意防守！！！");
    // var mob = map_4.makeMob(8644011);
    // mob.changeBaseHp(50000000000*lvhp*(lvhp*0.5));//設置改變怪物的HP量
    // map_4.spawnMob(mob, 494, 139);
    for (i = 0; i < 10; i++) {
        var mob = map_4.makeMob(8644004);
        mob.changeBaseHp(50000000000 * lvhp);
        map_4.spawnMob(mob, (-570 + i * 35), 130);
    }
    for (i = 0; i < 10; i++) {
        var mob = map_4.makeMob(9010179);
        mob.changeBaseHp(50000000000 * lvhp);
        map_4.spawnMob(mob, (500 + i * 35), -70);
    }
    for (i = 0; i < 10; i++) {
        var mob = map_4.makeMob(8644010);
        mob.changeBaseHp(50000000000 * lvhp);
        map_4.spawnMob(mob, (1310 + i * 35), -143);
    }

}

function mobDied(mob) {
    //event.setVariable("killmob1", parseInt(event.getVariable("killmob1")) + 1);
    ////java.lang.System.out.println("擊殺數："+event.getVariable("killmob1"));
    //
    //if(event.getVariable("killmob1")==20){
    //	spawnall();
    //}else if(event.getVariable("killmob1")<20){
    //	//map.broadcastEventNotice("再擊殺"+(20-event.getVariable("killmob1"))+"只怪物,將會出現大型怪物。");
    //}
    if (mob.getMapId() == map_1.getId() || mob.getMapId() == map_2.getId() || mob.getMapId() == map_3.getId()) {
        Drop = Math.floor(Math.random() * 100);
        if (Drop <= 45) {
            mob.dropItem(4001878);
        }
    }

    /*if (parseInt(event.getVariable("summoned")) != 0) {
    if(map_4.getEventMobCount() <= 10) {
    spawnall();
    }
    }*/

    if (mob.getMapId() == map_4.getId()) { //地圖4怪物死亡生怪10

        /*Drop = Math.floor(Math.random() * 10000);
        DropA = 1;
        if (Drop <= 10*DropA) {
        mob.dropItem(5062503);//白附加
        } else if (Drop <= 20*DropA) {
        mob.dropItem(5062026);//結合
        } else if (Drop <= 30*DropA) {
        mob.dropItem(5062500);//附加
        } else if (Drop <= 100*DropA) {
        mob.dropItem(5062020);
        } else if (Drop <= 200*DropA) {
        mob.dropItem(5062017);
        } else if (Drop <= 700*DropA) {
        mob.dropItem(5062010);
        } else if (Drop <= 1200*DropA) {
        mob.dropItem(5062009);
        }*/
        /*if (map_4.getEventMobCount() <= 0) {
        if (parseInt(event.getVariable("summoned")) <= 101) {
        summoned = parseInt(event.getVariable("summoned"));
        spawnall();
        map_4.blowWeatherEffectNotice("調和精靈【"+(summoned-1)+"】出現大型怪物！！！", 106, 5000);
        //map.broadcastEventNotice("出現大型怪物,請注意防守！！！");
        event.setVariable("summoned", summoned+1);
        for (let i = 0; i < members.length; i++) {

        members[i].gainItem(4021032,3);
        members[i].gainItem(4032053,3);
        members[i].gainItem(5062009,1);
        //members[i].gainItem(5062017,1);
        members[i].showSystemMessage("【調和精靈】Wave[ "+(summoned-1)+" ]");
        }
        lvhp++;
        }else if (parseInt(event.getVariable("summoned")) > 101) {
        summoned = parseInt(event.getVariable("summoned"));
        for (let i = 0; i < members.length; i++) {
        members[i].showSystemMessage("【調和精靈】Wave[ "+(summoned-1)+" ]");
        members[i].showSystemMessage("【調和精靈】結束");
        members[i].showSystemMessage("【調和精靈】結束");
        members[i].showSystemMessage("【調和精靈】結束");
        }
        }
        }*/
    }

}

function mobHit(player, mob, damage) {
    player.offStaticScreenMessage();
    switch (mob.getDataId()) { //小怪
        case 0:
            //player.dropMessage(1,"玩家："+player.getName()+" 對菇菇傷害");
            break;
        default:
            break;
    }

    var mobIds = [8644011]//設定的怪物場上只同代碼只能1隻 因為腳本擊殺後 只有killMonster(怪物代碼) 整場的同代馬都會死亡
    if (mobIds.indexOf(mob.getDataId()) != -1) {

        /*定義裝備欄位 是否為指定裝備*/
        eq = 0; //裝備正確數量定義

        eqlv = 0; //設定強化+?以上 判斷
        equip1 = player.getInventorySlot(-1, -2); //1012164 臉
        equip2 = player.getInventorySlot(-1, -4); //1032205 耳環
        equip3 = player.getInventorySlot(-1, -12); //1113132 戒指
        equip4 = player.getInventorySlot(-1, -13);
        equip5 = player.getInventorySlot(-1, -15); //1112956 戒指
        equip6 = player.getInventorySlot(-1, -16); //1113083 戒指

        equip7 = player.getInventorySlot(-1, -17); //1122296 項鍊
        equip8 = player.getInventorySlot(-1, -36);

        if (equip1 != null) {
            if (equip1.getDataId() == 1012174) {
                str = equip1.getTitle();
                if (str != "") {
                    equip1 = str.substring(0, 3); //獲取抬頭 強化+
                    str = str.substring(3, 4); // 加多少
                    if (equip1 == "強化+") {
                        if (str >= eqlv) {
                            eq += parseInt(str);
                        }
                    }
                }
            }
        }
        if (equip2 != null) {
            if (equip2.getDataId() == 1032219) {
                str = equip2.getTitle();
                if (str != "") {
                    equip2 = str.substring(0, 3); //獲取抬頭 強化+
                    str = str.substring(3, 4); // 獲取加多少
                    if (equip2 == "強化+") {
                        if (str >= eqlv) { //>=n n以上
                            eq += parseInt(str);
                        }
                    }
                }
            }
        }
        if (equip3 != null) {
            if (equip3.getDataId() == 1113132 || equip3.getDataId() == 1112956 || equip3.getDataId() == 1113083) {
                str = equip3.getTitle();
                if (str != "") {
                    equip3 = str.substring(0, 3); //獲取抬頭 強化+
                    str = str.substring(3, 4); // 獲取加多少
                    if (equip3 == "強化+") {
                        if (str >= eqlv) { //>=n n以上
                            eq += parseInt(str);
                        }
                    }
                }
            }
        }
        if (equip4 != null) {
            if (equip4.getDataId() == 1113132 || equip4.getDataId() == 1112956 || equip4.getDataId() == 1113083) {
                str = equip4.getTitle();
                if (str != "") {
                    equip4 = str.substring(0, 3); //獲取抬頭 強化+
                    str = str.substring(3, 4); // 獲取加多少
                    if (equip4 == "強化+") {
                        if (str >= eqlv) { //>=n n以上
                            eq += parseInt(str);
                        }
                    }
                }
            }
        }
        if (equip5 != null) {
            if (equip5.getDataId() == 1113132 || equip5.getDataId() == 1112956 || equip5.getDataId() == 1113083) {
                str = equip5.getTitle();
                if (str != "") {
                    equip5 = str.substring(0, 3); //獲取抬頭 強化+
                    str = str.substring(3, 4); // 獲取加多少
                    if (equip5 == "強化+") {
                        if (str >= eqlv) { //>=n n以上
                            eq += parseInt(str);
                        }
                    }
                }
            }
        }
        if (equip6 != null) {
            if (equip6.getDataId() == 1113132 || equip6.getDataId() == 1112956 || equip6.getDataId() == 1113083) {
                str = equip6.getTitle();
                if (str != "") {
                    equip6 = str.substring(0, 3); //獲取抬頭 強化+
                    str = str.substring(3, 4); // 獲取加多少
                    if (equip6 == "強化+") {
                        if (str >= eqlv) { //>=n n以上
                            eq += parseInt(str);
                        }
                    }
                }
            }
        }
        if (equip7 != null) {
            if (equip7.getDataId() == 1122296) {
                str = equip7.getTitle();
                if (str != "") {
                    equip7 = str.substring(0, 3); //獲取抬頭 強化+
                    str = str.substring(3, 4); // 獲取加多少
                    if (equip7 == "強化+") {
                        if (str >= eqlv) { //>=n n以上
                            eq += parseInt(str);
                        }
                    }
                }
            }
        }
        if (equip8 != null) {
            if (equip8.getDataId() == 1122296) {
                str = equip8.getTitle();
                if (str != "") {
                    equip8 = str.substring(0, 3); //獲取抬頭 強化+
                    str = str.substring(3, 4); // 獲取加多少
                    if (equip8 == "強化+") {
                        if (str >= eqlv) { //>=n n以上
                            eq += parseInt(str);
                        }
                    }
                }
            }
        }
        /*結束 - 每次攻擊都會判定*/

        player.setStaticScreenMessage(0, "當前傷害強度 : " + eq + "", false); //int? , "key" ,布林值

        let boss = event.getVariable("stage1_dummy");
        boss.hurt((0 + (5000000000 * eq)), false); //對怪物造成的傷害 基準 5000000000
        //	50000000000000
        if (!boss.isAlive()) { //
            event.getMap(PHASE_4).killMonster(mob.getDataId());
            event.setVariable("stage1_dummy", "0");

            if (parseInt(event.getVariable("summoned")) < 6) {
                summoned = parseInt(event.getVariable("summoned"));

                //map.broadcastEventNotice("出現大型怪物,請注意防守！！！");
                for (let i = 0; i < members.length; i++) {
                    boomEq(members[i]); //爆裝用
                    if (summoned == 1) {
                        //player.dropMessage(6, "隊伍人數 " + tt + " , 加成 " + partycount + "倍");
                        members[i].gainItem(4001489, 3);
                        members[i].addEventValue(BOSS_LOG);
                    } else if (summoned == 2) {
                        //player.dropMessage(6, "隊伍人數 " + tt + " , 加成 " + partycount + "倍");
                        members[i].gainItem(2633336, 1);
                    } else if (summoned == 3) {
                        //player.dropMessage(6, "隊伍人數 " + tt + " , 加成 " + partycount + "倍");
                        members[i].gainItem(4001489, 3);
                    } else if (summoned == 4) {
                        //player.dropMessage(6, "隊伍人數 " + tt + " , 加成 " + partycount + "倍");
                        members[i].gainItem(2633336, 1);
                    } else if (summoned == 5) {
                        //player.dropMessage(6, "隊伍人數 " + tt + " , 加成 " + partycount + "倍");
                        members[i].gainItem(4001489, 3);
                    }

                    members[i].showSystemMessage("【調和精靈】Wave [ " + (summoned) + " ] 完成");
                    //members[i].showSystemMessage("【調和精靈】Wave[ "+(summoned+1)+" ]開始");
                }
                map_4.clearMobs();
                delaerkna();
                insaerkna(members[0].getId(), summoned, 0, 0, 0, members.length);
                map_4.blowWeatherEffectNotice("當前 Wave 【 " + (summoned + 1) + " 】", 234, 2000);
                event.setVariable("summoned", summoned + 1);
                spawnboss();
                spawnall();
            } else if (parseInt(event.getVariable("summoned")) == 6) {
                summoned = parseInt(event.getVariable("summoned"));
                for (let i = 0; i < members.length; i++) {
                    members[i].gainItem(2633336, 1);
                    members[i].showSystemMessage("【調和精靈】Wave [ " + (summoned) + " ] 完成");
                    members[i].showSystemMessage("【調和精靈】結束");
                    members[i].showSystemMessage("【調和精靈】在5秒後離場");
                    members[i].offStaticScreenMessage();
                }

                event.setVariable("victory", "1");
                event.stopTimer("kick");
                event.startTimer("kick", 8 * 1000);
            }

        }
    }

}
function boomEq(player) { //每件裝備獨立計算boom機率 若該次boomEq(玩家[i])觸發將不會再炸第二件
    eqlv = 0;
    rr = Array(0, 20, 40, 80, 150, 300); //boom <= rr[str]
    equip1 = player.getInventorySlot(-1, -2); //1012164 臉
    equip2 = player.getInventorySlot(-1, -4); //1032205 耳環
    equip3 = player.getInventorySlot(-1, -12); //1113132 戒指
    equip4 = player.getInventorySlot(-1, -13);
    equip5 = player.getInventorySlot(-1, -15); //1112956 戒指
    equip6 = player.getInventorySlot(-1, -16); //1113083 戒指
    equip7 = player.getInventorySlot(-1, -17); //1122296 項鍊
    equip8 = player.getInventorySlot(-1, -36);

    boomon = true;

    boom = Math.floor(Math.random() * 10000);
    if (equip1 != null && boomon) {
        if (equip1.getDataId() == 1012174) {
            str = equip1.getTitle();
            if (str != "") {
                equip1 = str.substring(0, 3); //獲取抬頭 強化+
                str = str.substring(3, 4); // 加多少
                if (equip1 == "強化+") {
                    if (boom < rr[str]) {
                        player.equip(-2, 1092003);
                        // player.showSystemMessage("炸裝1");
                        event.broadcastPlayerNotice(1, "【調和精靈】裝備損壞通知 : 玩家 [ " + player.getName() + " ] ");
                        boomon = false;
                    }
                }
            }
        }
    }

    boom = Math.floor(Math.random() * 10000);
    if (equip2 != null && boomon) {
        if (equip2.getDataId() == 1032219) {
            str = equip2.getTitle();
            if (str != "") {
                equip2 = str.substring(0, 3); //獲取抬頭 強化+
                str = str.substring(3, 4); // 獲取加多少
                if (equip2 == "強化+") {
                    if (boom < rr[str]) {
                        player.equip(-4, 1092003);
                        // player.showSystemMessage("炸裝2");
                        event.broadcastPlayerNotice(1, "【調和精靈】裝備損壞通知 : 玩家 [ " + player.getName() + " ] ");
                        boomon = false;
                    }
                }
            }
        }
    }
    boom = Math.floor(Math.random() * 10000);
    if (equip3 != null && boomon) {
        if (equip3.getDataId() == 1113132 || equip3.getDataId() == 1112956 || equip3.getDataId() == 1113083) {
            str = equip3.getTitle();
            if (str != "") {
                equip3 = str.substring(0, 3); //獲取抬頭 強化+
                str = str.substring(3, 4); // 獲取加多少
                if (equip3 == "強化+") {
                    if (boom < rr[str]) {
                        player.equip(-12, 1092003);
                        // player.showSystemMessage("炸裝3");
                        event.broadcastPlayerNotice(1, "【調和精靈】裝備損壞通知 : 玩家 [ " + player.getName() + " ] ");
                        boomon = false;
                    }
                }
            }
        }
    }
    boom = Math.floor(Math.random() * 10000);
    if (equip4 != null && boomon) {
        if (equip4.getDataId() == 1113132 || equip4.getDataId() == 1112956 || equip4.getDataId() == 1113083) {
            str = equip4.getTitle();
            if (str != "") {
                equip4 = str.substring(0, 3); //獲取抬頭 強化+
                str = str.substring(3, 4); // 獲取加多少
                if (equip4 == "強化+") {
                    if (boom < rr[str]) {
                        player.equip(-13, 1092003);
                        // player.showSystemMessage("炸裝4");
                        event.broadcastPlayerNotice(1, "【調和精靈】裝備損壞通知 : 玩家 [ " + player.getName() + " ] ");
                        boomon = false;
                    }
                }
            }
        }
    }
    boom = Math.floor(Math.random() * 10000);
    if (equip5 != null && boomon) {
        if (equip5.getDataId() == 1113132 || equip5.getDataId() == 1112956 || equip5.getDataId() == 1113083) {
            str = equip5.getTitle();
            if (str != "") {
                equip5 = str.substring(0, 3); //獲取抬頭 強化+
                str = str.substring(3, 4); // 獲取加多少
                if (equip5 == "強化+") {
                    if (boom < rr[str]) {
                        player.equip(-15, 1092003);
                        // player.showSystemMessage("炸裝5");
                        event.broadcastPlayerNotice(1, "【調和精靈】裝備損壞通知 : 玩家 [ " + player.getName() + " ] ");
                        boomon = false;
                    }
                }
            }
        }
    }
    boom = Math.floor(Math.random() * 10000);
    if (equip6 != null && boomon) {
        if (equip6.getDataId() == 1113132 || equip6.getDataId() == 1112956 || equip6.getDataId() == 1113083) {
            str = equip6.getTitle();
            if (str != "") {
                equip6 = str.substring(0, 3); //獲取抬頭 強化+
                str = str.substring(3, 4); // 獲取加多少
                if (equip6 == "強化+") {
                    if (boom < rr[str]) {
                        player.equip(-16, 1092003);
                        // player.showSystemMessage("炸裝6");
                        event.broadcastPlayerNotice(1, "【調和精靈】裝備損壞通知 : 玩家 [ " + player.getName() + " ] ");
                        boomon = false;
                    }
                }
            }
        }
    }
    boom = Math.floor(Math.random() * 10000);
    if (equip7 != null && boomon) {
        if (equip7.getDataId() == 1122296) {
            str = equip7.getTitle();
            if (str != "") {
                equip7 = str.substring(0, 3); //獲取抬頭 強化+
                str = str.substring(3, 4); // 獲取加多少
                if (equip7 == "強化+") {
                    if (boom < rr[str]) {
                        player.equip(-17, 1092003);
                        // player.showSystemMessage("炸裝7");
                        event.broadcastPlayerNotice(1, "【調和精靈】裝備損壞通知 : 玩家 [ " + player.getName() + " ] ");
                        boomon = false;
                    }
                }
            }
        }
    }
    boom = Math.floor(Math.random() * 10000);
    if (equip8 != null && boomon) {
        if (equip8.getDataId() == 1122296) {
            str = equip8.getTitle();
            if (str != "") {
                equip8 = str.substring(0, 3); //獲取抬頭 強化+
                str = str.substring(3, 4); // 獲取加多少
                if (equip8 == "強化+") {
                    if (boom < rr[str]) {
                        player.equip(-36, 1092003);
                        // player.showSystemMessage("炸裝8");
                        event.broadcastPlayerNotice(1, "【調和精靈】裝備損壞通知 : 玩家 [ " + player.getName() + " ] ");
                        boomon = false;
                    }
                }
            }
        }
    }

}

function playerPickupItem(player, map, itemId) {
    if (itemId == 4001878) {
        var count = player.getAmountOfItem(4001878);
        map.scriptProgressMessage("" + player.getName() + " 收集了 " + count + " 個");
    }
}

function removePlayer(playerId, changeMap) {
    for (let i = 0; i < members.length; i++) {
        if (members[i].getId() == playerId) {
            //dissociate event before changing map so playerChangedMap is
            //not called and this method is not called again by the player
            members[i].setEvent(null);
            members[i].offStaticScreenMessage();
            members[i].loseItem(4001878);
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
        case PHASE_1:
        case PHASE_2:
        case PHASE_3:
        case PHASE_4:
            if (destination.getId() == PHASE_4) {
                if (parseInt(event.getVariable("summoned")) == 0) {
                    player.loseItem(4001878);
                    spawnall();
                    spawnboss();
                    map_4.blowWeatherEffectNotice("勇敢的冒險家，請你阻止我....(調和精靈最後話語...)", 234, 1000);
                    event.setVariable("summoned", "1");
                }
            }

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
    summoned = parseInt(event.getVariable("summoned"));
    //event.broadcastPlayerNotice(7,"【調和精靈】恭喜完成了["+(summoned)+"]，再接再厲");
    for (let i = 0; i < members.length; i++) {
        //dissociate event before changing map so playerChangedMap is not
        //called and this method is not called again by the player
        if (event.getVariable("victory") == 1) {
            members[i].showProgressMessageFont("完全通關", 0, 30, 16, 5); //MSG,字體,大小,顏色,時間?
        } else {
            members[i].showProgressMessageFont("時間到了", 0, 30, 16, 5); //MSG,字體,大小,顏色,時間?

        }
        members[i].setEvent(null);
        members[i].changeMap(EXIT_MAP);
        members[i].offStaticScreenMessage();
    }
    //summoned += -1;
    delaerkna();
    insaerkna(members[0].getId(), summoned, 0, 0, 0, members.length);
    event.destroyEvent();
}

function timerExpired(key) {
    //java.lang.System.out.println(key);
    switch (key) {
        case "kick":
            //event.stopTimer("summon_obtacle");
            kick();
            break;
        /*case "summon_obtacle":
        event.setVariable("state", parseInt(event.getVariable("state")) + 1);
        spawn10mob();
        break;*/
        case "spawnall0":
            //event.stopTimer("summon_obtacle");
            spawnall();
            break;
    }
}

function deinit() {
    event.getMap(PHASE_1).endFieldEvent();
    event.getMap(PHASE_2).endFieldEvent();
    event.getMap(PHASE_3).endFieldEvent();
    event.getMap(PHASE_4).endFieldEvent();
    for (let i = 0; i < members.length; i++) {
        members[i].setEvent(null);
        members[i].setDeathCount(-1);
        members[i].offStaticScreenMessage();
    }
}

function delaerkna() {
    var sql = "delete from zz_aerkna where character_id=" + players.getId() + " and starttime  = DATE_FORMAT( now(),'%y-%m-%d') and worldid =0 ";
    players.customSqlUpdate(sql);
}

function insaerkna(Id, Wave, time, limit, sn, members) {
    var sql = "insert INTO zz_aerkna(character_id,wave,time,starttime,limitbreak,sn,worldid,members)VALUE(" + Id + "," + Wave + "," + time + ",now(),'" + limit + "','" + sn + "',0,'" + members + "')";
    players.customSqlInsert(sql);
}
