/*  This is mada by dgms    
 *  This source is made by Funms Team
 *  
 *  功能：外星訪客
 *  
 *  @Author dgms 
 */

/* global em, java */

var MKILL_COUNT = 180;
var TIME_OUT = 60 * 1000 * 5;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, partyID) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("Visitors" + partyID);
    //var map = parseInt(id);
    for (var i = 1; i <= 5; i++) {
        eim.setProperty("S" + i, "0");
        eim.setProperty("stage" + i, "0");
    }
    eim.setProperty("Done", "0");
    eim.setProperty("total", MKILL_COUNT + "");
    eim.setProperty("killed", "0");
    eim.setInstanceMap(861000050).resetFully(eim);
    eim.setInstanceMap(861000100).resetFully(eim);
    eim.setInstanceMap(861000200).resetFully(eim);
    var map = eim.setInstanceMap(861000300);
    map.resetFully(eim);
    var mob = em.getMonster(9390110);
    //mob.setForcedMobStat(210);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(671, 31));
    eim.setInstanceMap(861000400).resetFully();
    map = eim.setInstanceMap(861000500);
    map.resetFully(eim);
    mob = em.getMonster(9390111);
    //mob.setForcedMobStat(210);
    mob.setChangeHP(9999999999);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(539, 31));
    map = eim.setInstanceMap(861000001);
    map.resetFully(eim);
    var rand = Math.random() * 1000;
    if (rand < 200) {
        //機率出現特殊怪物
        var mob = em.getMonster(9390113);
        //mob.setForcedMobStat(210);
        mob.setChangeHP(9999999999);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-295, 38));
    }
    eim.setProperty("stage", "0");
    eim.setProperty("allexp", "0");
    eim.startEventTimer(TIME_OUT); //20 mins
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    return false;
}

function scheduledTimeout(eim) {
    end(eim);
}

function changedMap(eim, player, mapid) {
    switch (mapid) {
        case 861000001:
        case 861000050:
        case 861000100:
        case 861000200:
        case 861000300:
        case 861000400:
        case 861000500:
            return;
    }
    eim.unregisterPlayer(player);
    eim.disposeIfPlayerBelow(0, 0);
}

function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobId) {
    var killed = parseInt(eim.getProperty("killed")) + 1;
    var total = parseInt(eim.getProperty("total"));
    var stage = parseInt(eim.getProperty("stage"));
    if (eim != null && !eim.getProperty("stage" + stage).equals("done")) {
        if (killed >= total) {
            var map = eim.getMapInstance(stage);
            //設置地圖不召喚怪物
            map.setSpawns(false);
            //清怪
            map.killAllMonsters(true);
            //評分
            var ss = parseInt(eim.getTimeLeft() / 1000 / 60);//毫秒
            var exp = parseInt(eim.getAverlevel() * 30000 / (5 - ss));
            var allexp = parseInt(eim.getProperty("allexp")) + exp;
            eim.setProperty("allexp", allexp + "");
            var rank = ss == 4 ? "S" : ss == 3 ? "A" : ss == 2 ? "B" : "C";

            eim.updateOneQuestInfo(17204, "S" + stage, ss == 4 ? "s" : ss == 3 ? "a" : ss == 2 ? "b" : "c");
            eim.updateOneQuestInfo(17204, "step", (stage + 1) + "");
            eim.updateOneQuestInfo(17204, "stg", stage + "");
            eim.updateOneQuestInfo(17205, "S" + stage, exp);

            eim.setProperty("stage" + stage, rank);
            map.showScreenEffect("Visitor/Rank" + rank);
            map.showScreenEffect("Dojang/clear");
        }
        eim.setProperty("killed", "" + killed);
        eim.updateVisitorKills();
    }
    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.getProperties().clear();
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}


function end(eim) {
    eim.disposeIfPlayerBelow(100, 861000000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
}

function leftParty(eim, player) {
    // If only 2 players are left, uncompletable:
    end(eim);
}
function disbandParty(eim) {
    end(eim);
}
function playerDead(eim, player) {
}

function cancelSchedule() {
}

function pickupItem(eim, player, itemID) {
}

function monsterDamaged(eim, player, mobID, damage) {
}

function monsterKilled(eim, player, mobID) {
}