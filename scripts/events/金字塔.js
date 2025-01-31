let EXIT_MAP = 310010010;
let PHASE_1 = 322041000;
let PHASE_2 = 322042000;
let PHASE_3 = 322043000;
let PHASE_4 = 322044000;
let DEATH_COUNT = 10;

let BOSS_LOG = "金字塔";
let LOG = "金字塔";
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
    event.setVariable("summoned", "0");
    event.setVariable("victory", "0");
    endTime = new Date().getTime() + 30 * 60 * 1000;
    event.setVariable("endTime", endTime);
    event.startTimer("kick", 30 * 60 * 1000);
    event.setVariable("members", members);
    for (let i = 0; i < members.length; i++) {
        if (members[i].getEventValue(BOSS_LOG) >= 3111) {
            members[i].changeMap(EXIT_MAP);
            members[i].showSystemMessage("【金字塔】當日次數已用完");
        }
        members[i].setEvent(event);
        members[i].addEventValue(BOSS_LOG + "總次數", 1, 999);
        members[i].setDeathCount(DEATH_COUNT);
    }
}

function spawnboss() {
    //8644011 巨大怪物
    boss = map_4.makeMob(9800197);
    boss.setForcedMobStat(350, 1000); //傷害歸1
    boss.changeBaseHp(50000000000000 * (1 + lvhp * 0.35)); //基準50兆 持續傷基準10e
    map_4.spawnMob(boss, 377, 95);
    event.setVariable("stage1_dummy", boss);
    lvhp++;

}
function spawnall() { //spawnall()

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
    if (mob.getMapId() == map_1.getId() || mob.getMapId() == map_2.getId() || mob.getMapId() == map_3.getId()) {
        Drop = Math.floor(Math.random() * 80);
        if (Drop <= 45) {
            mob.dropItem(4001325); //通關道具
        }
        if (Drop > 45 && Drop <= 75) {
            mob.dropItem(4031455); //強化道具
        }
        //下面是裝備掉落
        if (Drop > 75 && Drop <= 76) {
            mob.dropItem(1002430); //裝備帽子
        }
        if (Drop > 76 && Drop <= 77) {
            mob.dropItem(1022228); //眼飾
        }
        if (Drop > 77 && Drop <= 78) {
            mob.dropItem(1012325); //臉飾
        }
    }

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
        map_4.blowWeatherEffectNotice("金字塔【"+(summoned-1)+"】出現大型怪物！！！", 106, 5000);
        //map.broadcastEventNotice("出現大型怪物,請注意防守！！！");
        event.setVariable("summoned", summoned+1);
        for (let i = 0; i < members.length; i++) {

        members[i].gainItem(4021032,3);
        members[i].gainItem(4001887,3);
        members[i].gainItem(5062009,1);
        //members[i].gainItem(5062017,1);
        members[i].showSystemMessage("【金字塔】Wave[ "+(summoned-1)+" ]");
        }
        lvhp++;
        }else if (parseInt(event.getVariable("summoned")) > 101) {
        summoned = parseInt(event.getVariable("summoned"));
        for (let i = 0; i < members.length; i++) {
        members[i].showSystemMessage("【金字塔】Wave[ "+(summoned-1)+" ]");
        members[i].showSystemMessage("【金字塔】結束");
        members[i].showSystemMessage("【金字塔】結束");
        members[i].showSystemMessage("【金字塔】結束");
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

    var mobIds = [9800197]//設定的怪物場上只同代碼只能1隻 因為腳本擊殺後 只有killMonster(怪物代碼) 整場的同代馬都會死亡
    if (mobIds.indexOf(mob.getDataId()) != -1) {
        /*定義裝備欄位 是否為指定裝備*/
        eq = 0; //裝備正確數量定義
        eqlv = 0; //設定強化+?以上 判斷
        equip1 = player.getInventorySlot(-1, -1); //1002430 帽子
        equip2 = player.getInventorySlot(-1, -3); //1022228 臉飾
        equip3 = player.getInventorySlot(-1, -2); //1012325 眼飾

        if (equip1 != null) {
            if (equip1.getDataId() == 1002430) {
                str = equip1.getTitle();
                if (str != "") {
                    equip1 = str.substring(0, 3); //獲取抬頭 強化+
                    //str = str.substring(3, str.length()); // 加多少
                    str = str.substring(3, 5); // 加多少
                    if (equip1 == "強化+") {
                        if (str >= eqlv) {
                            eq += parseInt(str);
                        }
                    }
                }
            }
        }
        if (equip2 != null) {
            if (equip2.getDataId() == 1022228) {
                str = equip2.getTitle();
                if (str != "") {
                    equip2 = str.substring(0, 3); //獲取抬頭 強化+
                    //str = str.substring(3, str.length()); // 獲取加多少
                    str = str.substring(3, 5); // 加多少
                    if (equip2 == "強化+") {
                        if (str >= eqlv) { //>=n n以上
                            eq += parseInt(str);
                        }
                    }
                }
            }
        }
        if (equip3 != null) {
            if (equip3.getDataId() == 1012325) {
                str = equip3.getTitle();
                if (str != "") {
                    equip3 = str.substring(0, 3); //獲取抬頭 強化+
                    //str = str.substring(3, str.length()); // 獲取加多少
                    str = str.substring(3, 5); // 加多少
                    if (equip3 == "強化+") {
                        if (str >= eqlv) { //>=n n以上
                            eq += parseInt(str);
                        }
                    }
                }
            }
        }

        /*結束 - 每次攻擊都會判定*/
        player.setStaticScreenMessage(0, "真實傷害 : " + (8000000000 * eq) + "", false); //顯示傷害
        //player.showHint("真實傷害\r\n" + (5000000000 * eq) / 100000000 + "億", 100, 255);//顯示傷害
        let boss = event.getVariable("stage1_dummy");
        boss.hurt(5000000000 * eq); //對怪物造成的傷害 基準 5000000000
        //if (!boss.isAlive()) { //
        if (event.getMap(PHASE_4).getEventMobCount() == 0) { //
            event.getMap(PHASE_4).killMobByDataId(mob.getDataId());
            event.setVariable("stage1_dummy", "0");
            if (parseInt(event.getVariable("summoned")) < 30) {
                summoned = parseInt(event.getVariable("summoned"));
                for (let i = 0; i < members.length; i++) {
                    boomEq(members[i]); //爆裝用
                    if (summoned == 1) {
                        members[i].gainItem(4009338, 1);
                        members[i].addEventValue(BOSS_LOG);
                    } else if (summoned == 2) {
                        members[i].gainItem(4009338, 1);
                    } else if (summoned == 3) {
                        members[i].gainItem(4009338, 1);
                    } else if (summoned == 4) {
                        members[i].gainItem(4009338, 1);
                    } else if (summoned == 5) {
                        members[i].gainItem(4009338, 1);
                    } else if (summoned == 6) {
                        members[i].gainItem(4009338, 1);
                    } else if (summoned == 7) {
                        members[i].gainItem(4009338, 1);
                    } else if (summoned == 8) {
                        members[i].gainItem(4009338, 1);
                    } else if (summoned == 9) {
                        members[i].gainItem(4009338, 1);
                    } else if (summoned == 10) {
                        members[i].gainItem(4009338, 1);
                    } else if (summoned == 11) {
                        members[i].gainItem(4009338, 1);
                    } else if (summoned == 12) {
                        members[i].gainItem(4009338, 1);
                    } else if (summoned == 13) {
                        members[i].gainItem(4009338, 1);
                    } else if (summoned == 14) {
                        members[i].gainItem(4009338, 1);
                    } else if (summoned == 15) {
                        members[i].gainItem(4009338, 1);
                    } else if (summoned == 16) {
                        members[i].gainItem(4009338, 1);
                    } else if (summoned == 17) {
                        members[i].gainItem(4009338, 1);
                    } else if (summoned == 18) {
                        members[i].gainItem(4009338, 1);
                    } else if (summoned == 19) {
                        members[i].gainItem(4009338, 1);
                    } else if (summoned == 20) {
                        members[i].gainItem(4009338, 1);
                    } else if (summoned == 21) {
                        members[i].gainItem(4009338, 1);
                    } else if (summoned == 22) {
                        members[i].gainItem(4009338, 1);
                    } else if (summoned == 23) {
                        members[i].gainItem(4009338, 1);
                    } else if (summoned == 24) {
                        members[i].gainItem(4009338, 1);
                    } else if (summoned == 25) {
                        members[i].gainItem(4009338, 1);
                    } else if (summoned == 26) {
                        members[i].gainItem(4009338, 1);
                    } else if (summoned == 27) {
                        members[i].gainItem(4009338, 1);
                    } else if (summoned == 28) {
                        members[i].gainItem(4009338, 1);
                    } else if (summoned == 29) {
                        members[i].gainItem(4009338, 1);
                    } else if (summoned == 30) {
                        members[i].gainItem(4009338, 10);
                        members[i].showSystemMessage("【金字塔】關卡 [ " + (summoned) + " ] 完成,五秒後傳送出去");
                        members[i].offStaticScreenMessage();
                        event.setVariable("victory", "1");
                        event.stopTimer("kick");
                        event.startTimer("kick", 5 * 1000);
                    }
                }
                map_4.clearMobs();
                //delaerkna();
                //insaerkna(members[0].getId(), summoned, 0, 0, 0, members.length);
                map_4.blowWeatherEffectNotice("當前關卡:  " + (summoned + 1) + " ", 195, 2000);
                event.setVariable("summoned", summoned + 1);
                spawnboss();
                //spawnall();
            }
        }
    }
}
function boomEq(player) { //每件裝備獨立計算boom機率 若該次boomEq(玩家[i])觸發將不會再炸第二件
    eqlv = 0;
    rr = Array(0, 10, 15, 20, 25, 30, 40, 50, 60, 70, 90); //最高9%爆裝 最低1%
    equip1 = player.getInventorySlot(-1, -1); //1002430 帽子
    equip2 = player.getInventorySlot(-1, -3); //1022228 臉飾
    equip3 = player.getInventorySlot(-1, -2); //1012325 眼飾

    boomon = true;

    boom = Math.floor(Math.random() * 1000);
    if (equip1 != null && boomon) {
        if (equip1.getDataId() == 1002430) {
            str = equip1.getTitle();
            if (str != "") {
                equip1 = str.substring(0, 3); //獲取抬頭 強化+
                str = str.substring(3, 4); // 加多少
                if (equip1 == "強化+") {
                    if (boom < rr[str]) {
                        player.equip(-1, 1352281);
                        //player.showSystemMessage("炸裝");
                        event.broadcastPlayerNotice(3, "【金字塔】玩家 [ " + player.getName() + " ]的炎魔頭盔碎裂,快來恭喜Ta吧");

                        boomon = false;
                    }
                }
            }
        }
    }

    boom = Math.floor(Math.random() * 1000);
    if (equip2 != null && boomon) {
        if (equip2.getDataId() == 1022228) {
            str = equip2.getTitle();
            if (str != "") {
                equip2 = str.substring(0, 3); //獲取抬頭 強化+
                str = str.substring(3, 4); // 獲取加多少
                if (equip2 == "強化+") {
                    if (boom < rr[str]) {
                        player.equip(-3, 1352281);
                        //player.showSystemMessage("炸裝2");
                        event.broadcastPlayerNotice(1, "【金字塔】玩家 [ " + player.getName() + " ]的獨眼巨人眼睛碎裂,快來恭喜Ta吧");
                        boomon = false;
                    }
                }
            }
        }
    }
    boom = Math.floor(Math.random() * 1000);
    if (equip3 != null && boomon) {
        if (equip3.getDataId() == 1012325) {
            str = equip3.getTitle();
            if (str != "") {
                equip3 = str.substring(0, 3); //獲取抬頭 強化+
                str = str.substring(3, 4); // 獲取加多少
                if (equip3 == "強化+") {
                    if (boom < rr[str]) {
                        player.equip(-2, 1352281);
                        //player.showSystemMessage("炸裝3");
                        event.broadcastPlayerNotice(1, "【金字塔】玩家 [ " + player.getName() + " ]的楓葉臉飾碎裂,快來恭喜Ta吧");
                        boomon = false;
                    }
                }
            }
        }
    }

}

function playerPickupItem(player, map, itemId) {
    if (itemId == 4001325) {
        var count = player.getAmountOfItem(4001325);
        map.scriptProgressMessage("" + player.getName() + " 收集通關物品 " + count + " 個");
    }
    if (itemId == 4031455) {
        var count = player.getAmountOfItem(4031455);
        map.scriptProgressMessage("" + player.getName() + " 收集強化物品 " + count + " 個");
    }
}

function removePlayer(playerId, changeMap) {
    for (let i = 0; i < members.length; i++) {
        if (members[i].getId() == playerId) {
            members[i].setEvent(null);
            members[i].offStaticScreenMessage();
            members[i].loseItem(4001325);
            members[i].loseItem(4031455);
            if (changeMap)
                members[i].changeMap(EXIT_MAP, "st00");
            members.splice(i, 1);
            break;
        }
    }
    if (members.length <= 0) {
        event.destroyEvent();
    }
}

function playerDisconnected(player) {
    removePlayer(player.getId(), false);
}

function playerChangedMap(player, destination) {
    switch (destination.getId()) {
        case PHASE_1:
        case PHASE_2:
        case PHASE_3:
        case PHASE_4:
            if (destination.getId() == PHASE_4) {
                if (parseInt(event.getVariable("summoned")) == 0) {
                    player.loseItem(4001325);
                    //spawnall();
                    spawnboss();
                    map_4.blowWeatherEffectNotice("你行不行啊細狗", 200, 5000);
                    event.setVariable("summoned", "1");
                }
            }
            player.showTimer((endTime - new Date().getTime()) / 1000);
            player.showDeathCount();
            break;
        default:
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
    for (let i = 0; i < members.length; i++) {
        if (event.getVariable("victory") == 1) {
            members[i].loseItem(4001325);
            members[i].loseItem(4031455);
            members[i].showProgressMessageFont("完全通關,真棒!!!", 0, 30, 16, 5); //MSG,字體,大小,顏色,時間?
        } else {
            members[i].loseItem(4001325);
            members[i].loseItem(4031455);
            members[i].showProgressMessageFont("時間到,傳送出去!", 0, 30, 16, 5); //MSG,字體,大小,顏色,時間?

        }
        members[i].setEvent(null);
        members[i].changeMap(EXIT_MAP);
        members[i].offStaticScreenMessage();
    }
    //delaerkna();
    //insaerkna(members[0].getId(), summoned, 0, 0, 0, members.length);
    event.destroyEvent();
}

function timerExpired(key) {
    switch (key) {
        case "kick":
            kick();
            break;
        case "spawnall0":
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
