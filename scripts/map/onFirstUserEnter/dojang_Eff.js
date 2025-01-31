/*  This is mada by dgms
 *  This source is made by Funms Team
 *
 *  功能：武陵道場
 *  2022432	武陵道場超級藥水
 *  @Author dgms
 */
/* global ms */

var mapID = map.getId();
var stage = parseInt(mapID % 10000 / 100);

if (stage > 1) {
    var nowMillis = java.lang.System.currentTimeMillis();
    var sTime = parseInt(player.getQuestRecordEx(7215, "sTime"));
    var left = (nowMillis - sTime) / 1000;
    var oSec = parseInt(player.getQuestRecordEx(7214));

    var sec = oSec + left;
    if (null == sTime) {
        sTime = "0";
    }
    var Qutys = Math.floor(Math.random() * 222);
    modifyQuestPoint(3887, Qutys);
    player.showSystemMessage("增加了 " + Qutys + " 道場點數，剩餘道場點數：" + getQuestPoint(3887));
    map.blowWeatherEffectNotice("上層關卡消耗時間：" + left + "秒,總計時：" + oSec + "秒,副本剩餘時間：" + ((15 * 60) - oSec) + "秒,請抓緊時間。", 111, 5000);
    player.updateQuestRecordEx(7214, sec);
    player.updateQuestRecordEx(7215, "sTime", nowMillis);
    player.updateQuestRecordEx(72811, "sec", sec);
    player.updateQuestRecordEx(38481, "Time", sec);
    player.updateQuestRecordEx(38481, "Floor", stage);
    player.updateQuestRecordEx(38491, "Time", sec);
    player.updateQuestRecordEx(38491, "Floor", stage);
    player.updateQuestRecordEx(100466, "Floor", stage);
    delDojang();
    insDojang(stage, oSec, player.getName(), player.getLevel(), player.getJob(), player.getJob());
} else {
    map.blowWeatherEffectNotice("限定時間15分鐘, 要盡早打倒怪物, 到下一層去! ", 101, 5000);
}
map.soundEffect("Dojang/start");
map.screenEffect("dojang/start/stage");
map.screenEffect("dojang/start/number/" + stage);
var event = npc.getEvent("PQ_Dojang");
if (event != null) {
    var mode = 2;
    var mobID = getMobID(mode, stage);
    var mob = map.makeMob(mobID);
    if (mob != null) {
        // eim.registerMonster(mob);
        event.setVariable("thisMap", map.getId())
        event.setVariable("Mob_" + mobID, "1");
        switch (mobID) {
            /*case 9305304: //5
            mob.changeBaseHp(50000000000);
            //mob.setReduceDamageR(70);
            break;*/
            case 9305309: //10
                mob.changeBaseHp(60000000000);
                //mob.setReduceDamageR(70);
                break;
            case 9305314: //15
                mob.changeBaseHp(70000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(90);
                break;
            case 9305319: //20
                mob.changeBaseHp(80000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(120);
                break;
            case 9305324: //25
                mob.changeBaseHp(90000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(150);
                break;
            case 9305329: //30
                mob.changeBaseHp(100000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(180);
                break;
            case 9305334: //35
                mob.changeBaseHp(100000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(190);
                break;
            case 9305339: //40
                mob.changeBaseHp(100000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(200);
                break;
            case 9305660: //41
                mob.changeBaseHp(350000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(230);
                break;
            case 9305661: //42
                mob.changeBaseHp(370000000000);
                //mob.setReduceDamageR(90);
                //mob.setForcedMobStat(230);
                break;
            case 9305662: //43層
                mob.changeBaseHp(390000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(230);
                break;
            case 9305684: //44
                mob.changeBaseHp(420000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(230);
                break;
            case 9305683: //45
                mob.changeBaseHp(800000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(230);
                break;
            case 9305691: //46
                mob.changeBaseHp(610000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(230);
                break;
            case 9305690: //47
                mob.changeBaseHp(620000000000);
                //mob.setReduceDamageR(80);
                //mob.setForcedMobStat(230);
                break;
            case 9305693: //48
                mob.changeBaseHp(630000000000);
                //mob.setReduceDamageR(80);
                //mob.setForcedMobStat(230);
                break;
            case 9305692: //49
                mob.changeBaseHp(640000000000);
                //mob.setReduceDamageR(80);
                //mob.setForcedMobStat(230);
                break;
            case 9305695: //50
                mob.changeBaseHp(850000000000);
                //mob.setReduceDamageR(80);
                //mob.setForcedMobStat(230);
                break;
            case 9305696: //51
                mob.changeBaseHp(630000000000);
                //mob.setReduceDamageR(80);
                //mob.setForcedMobStat(230);
                break;
            case 9305663: //52
                mob.changeBaseHp(735000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(230);
                break;
            case 9305664: //53
                mob.changeBaseHp(840000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(230);
                break;
            case 9305665: //54
                mob.changeBaseHp(1005000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(230);
                break;
            case 9305666: //55
                mob.changeBaseHp(1050000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(240);
                break;
            case 9305667: //56
                mob.changeBaseHp(1155000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(240);
                break;
            case 9305668: //57
                mob.changeBaseHp(1355000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(240);
                break;
            case 9305669: //58
                mob.changeBaseHp(1400000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(240);
                break;
            case 9305670: //59
                mob.changeBaseHp(1500000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(240);
                break;
            case 9305671: //60
                mob.changeBaseHp(1600000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(240);
                break;
            case 9305697: //61
                mob.changeBaseHp(1700000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(240);
                break;
            case 9305698: //62
                mob.changeBaseHp(1800000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(240);
                break;
            case 9305694: //63
                mob.changeBaseHp(2000000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(240);
                break;
            case 9305700: //64
                mob.changeBaseHp(2000000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(240);
                break;
            case 9305701: //65
                mob.changeBaseHp(2000000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(250);
                break;
            case 9305657: //66
                mob.changeBaseHp(2000000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(250);
                break;
            case 9305702: //67
                mob.changeBaseHp(2000000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(250);
                break;
            case 9305703: //68
                mob.changeBaseHp(2100000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(250);
                break;
            case 9305704: //69
                mob.changeBaseHp(2300000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(250);
                break;
            case 9305705: //70
                mob.changeBaseHp(2400000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(250);
                break;
            case 9305706: //71
                mob.changeBaseHp(2500000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(250);
                break;
            case 9305707: //72
                mob.changeBaseHp(2600000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(250);
                break;
            case 9305708: //73
                mob.changeBaseHp(3000000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(250);
                break;
            case 9305672: //74
                mob.changeBaseHp(3500000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(250);
                break;
            case 9305673: //75
                mob.changeBaseHp(3800000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(250);
                break;
            case 9305674: //76
                mob.changeBaseHp(4000000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(250);
                break;
            case 9305675: //77
                mob.changeBaseHp(4500000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(250);
                break;
            case 9305676: //78
                mob.changeBaseHp(5000000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(250);
                break;
            case 9305677: //79
                mob.changeBaseHp(5500000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(250);
                break;
            case 9305640: //80
                mob.changeBaseHp(6000000000000);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(250);
                break;
            case 9305709: //81
                mob.changeBaseHp(6500000000000 * 2);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(260);
                break;
            case 9305710: //82
                mob.changeBaseHp(7000000000000 * 2);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(260);
                break;
            case 9305711: //83
                mob.changeBaseHp(7500000000000 * 2);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(260);
                break;
            case 9305712: //84
                mob.changeBaseHp(8000000000000 * 2);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(260);
                break;
            case 9305713: //85
                mob.changeBaseHp(8500000000000 * 2);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(260);
                break;
            case 9305714: //86
                mob.changeBaseHp(9000000000000 * 2);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(260);
                break;
            case 9305715: //87
                mob.changeBaseHp(9500000000000 * 2);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(260);
                break;
            case 9305716: //88
                mob.changeBaseHp(10000000000000 * 2);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(260);
                break;
            case 9305717: //89
                mob.changeBaseHp(10500000000000 * 2);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(260);
                break;
            case 9305710: //90
                mob.changeBaseHp(11000000000000 * 2);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(260);
                break;
            case 9305719: //91
                mob.changeBaseHp(10500000000000 * 2);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(260);
                break;
            case 9305720: //92
                mob.changeBaseHp(11000000000000 * 2);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(260);
                break;
            case 9305721: //93
                mob.changeBaseHp(11500000000000 * 2);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(260);
                break;
            case 9305722: //94
                mob.changeBaseHp(12000000000000 * 2);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(260);
                break;
            case 9305723: //95
                mob.changeBaseHp(12600000000000 * 2);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(260);
                break;
            case 9305724: //96
                mob.changeBaseHp(13000000000000 * 2);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(260);
                break;
            case 9305725: //97
                mob.changeBaseHp(13500000000000 * 2);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(260);
                break;
            case 9305728: //98
                mob.changeBaseHp(30000000000000 * 2);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(260);
                break;
            case 9305727: //99
                mob.changeBaseHp(1);
                //mob.setReduceDamageR(70);
                //mob.setForcedMobStat(260);
                break;
        }
        map.spawnMob(mob, 286, 7);
    }
}

function getDayDojang(Floor, time, limit, sn) {
    var sql = "select * from zrank_dojang where character_id=" + player.getId() + " and logtime  = DATE_FORMAT( now(),'%y-%m-%d') and world = 0 limit 1";
    var resultList = player.customSqlResult(sql);
    var aFloor = 0;
    var atime = 0;
    for (var i = 0; i < resultList.size(); i++) {
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        aFloor = result.get("floor");
        atime = result.get("time");
        if (aFloor == null) {
            aFloor = 0;
        }
        if (atime == null) {
            atime = 0;
        }
    }

    if (Floor > aFloor) {
        delDojang();
        insDojang(0, 0, 0, 0);
    } else if (Floor == aFloor && time < atime) {
        delDojang();
        insDojang(0, 0, 0, 0);
    }

}
function delDojang() {
    var sql = "delete from zrank_dojang where characters_id = " + player.getId() + "";
    player.customSqlUpdate(sql);
}

function insDojang(Floor, time, name, level, job, jobqun) {
    var sql = "insert INTO zrank_dojang(characters_id,stage,time,logtime,characters_name,world,level,job,job_group)VALUE(" + player.getId() + "," + Floor + "," + time + ",now(),'" + name + "',0," + level + "," + job + "," + jobqun + ")";
    player.customSqlInsert(sql);
}

function getMobID(mode, stage) {
    //41層及以上 的怪物 請自行添加
    var baseMobID = 9305100;
    if (stage > 40) {
        switch (stage) {
            case 41:
                mobID = 9305660;
                break;
            case 42:
                mobID = 9305661;
                break;
            case 43:
                mobID = 9305662;
                break;
            case 44:
                mobID = 9305684;
                break;
            case 45:
                mobID = 9305683;
                break;
            case 46:
                mobID = 9305691;
                break;
            case 47:
                mobID = 9305690;
                break;
            case 48:
                mobID = 9305693;
                break;
            case 49:
                mobID = 9305692;
                break;
            case 50:
                mobID = 9305695;
                break;
            case 51:
                mobID = 9305696;
                break;
            case 52:
                mobID = 9305663;
                break;
            case 53:
                mobID = 9305664;
                break;
            case 54:
                mobID = 9305665;
                break;
            case 55:
                mobID = 9305666;
                break;
            case 56:
                mobID = 9305667;
                break;
            case 57:
                mobID = 9305668;
                break;
            case 58:
                mobID = 9305669;
                break;
            case 59:
                mobID = 9305670;
                break;
            case 60:
                mobID = 9305671;
                break;
            case 61:
                mobID = 9305697;
                break;
            case 62:
                mobID = 9305698;
                break;
            case 63:
                mobID = 9305694;
                break;
            case 64:
                mobID = 9305700;
                break;
            case 65:
                mobID = 9305701;
                break;
            case 66:
                mobID = 9305657;
                break;
            case 67:
                mobID = 9305702;
                break;
            case 68:
                mobID = 9305703;
                break;
            case 69:
                mobID = 9305704;
                break;
            case 70:
                mobID = 9305705;
                break;
            case 71:
                mobID = 9305706;
                break;
            case 72:
                mobID = 9305707;
                break;
            case 73:
                mobID = 9305708;
                break;
            case 74:
                mobID = 9305672;
                break;
            case 75:
                mobID = 9305673;
                break;
            case 76:
                mobID = 9305674;
                break;
            case 77:
                mobID = 9305675;
                break;
            case 78:
                mobID = 9305676;
                break;
            case 79:
                mobID = 9305677;
                break;
            case 80:
                mobID = 9305640;
                break;
            case 81:
                mobID = 9305709;
                break;
            case 82:
                mobID = 9305710;
                break;
            case 83:
                mobID = 9305711;
                break;
            case 84:
                mobID = 9305712;
                break;
            case 85:
                mobID = 9305713;
                break;
            case 86:
                mobID = 9305714;
                break;
            case 87:
                mobID = 9305715;
                break;
            case 88:
                mobID = 9305716;
                break;
            case 89:
                mobID = 9305717;
                break;
            case 90:
                mobID = 9305718;
                break;
            case 91:
                mobID = 9305719;
                break;
            case 92:
                mobID = 9305720;
                break;
            case 93:
                mobID = 9305721;
                break;
            case 94:
                mobID = 9305722;
                break;
            case 95:
                mobID = 9305723;
                break;
            case 96:
                mobID = 9305720;
                break;
            case 97:
                mobID = 9305721;
                break;
            case 98:
                mobID = 9305727;
                break;
            case 99:
                mobID = 9305728;
                break;
            case 100:
                mobID = 9305727;
                break;

        }
    } else {
        var baseMobID = 9305100;
        var mobID = baseMobID + 100 * mode + stage * Math.pow(2, 2 - mode) - 1;
    }
    return mobID;
}
function getQuestPoint(questId) {
    return player.getIntQuestRecordEx(questId, "point");
}

function modifyQuestPoint(questId, num) {
    player.updateQuestRecordEx(questId, "point", String(getQuestPoint(questId) + num));
}
