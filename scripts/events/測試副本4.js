
let EXIT_MAP = 101000000;

let DEATH_COUNT = 1;

let BOSS_LOG = "城戰";
let party;
let count;
let start;
let members;
let endTime;
let Time = 10 * 60 * 1000;
let GuiidAllValue = 10000; //總分數
let player;
let GuildINT;
// var maps = 993162053;
var maps = 450001340;
var XL = [-934, 360]; //-4 3230 -487 109
var Y = [972, -1000]; //369  658 2011 109

/*
最左  最右 		3236

高	低 			709
 */

var map_1;

function init(attachment) {
    //party = attachment[0];
    // guildId = attachment[0];
    player = attachment[1];

    //members = party.getLocalMembers();
    members = [];
    guildIdss = []; //公會
    // guildIdss.push(player.getGuildId());//註冊公會
    // members.push(player);//註冊玩家


    start = new Date().getTime();
    map_1 = event.getMap(maps);
    map_1.clearMobs();
    // player.changeMap(maps, "st00");
    map_1.showTimer(Time / 1000);

    event.startTimer("kick", Time);
    // spawnMobs();
    event.setVariable("spawnMobs", 0);
    event.startTimer("EventAtom", 10 * 1000);
    event.startTimer("spawnMobs", 5 * 1000);
    event.startTimer("spawnMobBOSS", 1 * 60 * 1000);
    endTime = new Date().getTime() + Time;

    event.setVariable("guildIdss", guildIdss);
    event.setVariable("members", members);
    // for (let i = 0; i < members.length; i++) {
    // members[i].setEvent(event);
    // members[i].addEventValue(BOSS_LOG,1,1);
    // members[i].addPQLog(BOSS_LOG);
    // members[i].setDeathCount(DEATH_COUNT);
    // event.setVariable(members[i].getGuildId(), 0);

    // }
}

function makeMob(mobid, hp, x, y, map, pw) {
    var boss = map.makeMob(mobid);
    boss.setForcedMobStat(260, pw);
    boss.changeBaseHp(hp);
    map.spawnMob(boss, x, y);
}

function spawnMobs() {
    if (map_1.getEventMobCount() < 50) {
        if (event.getVariable("spawnMobs") == 0) {
            end = new Date().getTime();
            let moblevel = (end - start + 60000) / 60000; //算法为1
            for (var i = 0; i < (50 - map_1.getEventMobCount()); i++) {
                MOBX = XL[0] + Math.floor(Math.random() * XL[1]);
                MOBY = Y[0] + Math.floor(Math.random() * Y[1]);
                mobids = [9300881, 9300882, 9300883, 9300886, 9300887, 9300752, 9300753, 9300754, 9300756, 9300757, //Q 人形
                    9300599, 9300684, 9300685, 9300686, 9300687, 9300688, 9300689, 9300690, 9300702, 9300703, 9300705, 9300706]; //Q BOSS
                sendMOB = Math.floor(Math.random() * mobids.length);
                // var mob = map.makeMob(9450025);
                // //mob.setForcedMobStat(230);
                //mob.changeBaseHp(1010000000*(moblevel-1)*3);//时间*2HP
                MOBMAXHP = 5 + (moblevel * 1);
                makeMob(mobids[sendMOB], MOBMAXHP, (230 + (20 * i)), 177, map_1, 50);
                makeMob(mobids[sendMOB], MOBMAXHP, (230 - (20 * i)), 177, map_1, 50);
            }
        }
    }
}

function mobDied(player, mob) { }

function mobHit(player, mob, damage) {

    if (mob.getHp() <= 0) {
        switch (mob.getDataId()) {
            case 9303101:
            case 2300268:
            case 9833433:
            case 9303090:
                SS = 100;
                break;

            case 9300599:
            case 9300684:
            case 9300685:
            case 9300686:
            case 9300687:
            case 9300688:
            case 9300689:
            case 9300690:
            case 9300702:
            case 9300703:
            case 9300705:
            case 9300706:
            case 9300707:
                SS = 30;
                break;

            default:
                SS = 15;
                break;
        }

        for (var i = 0; i < guildIdss.length; i++) {
            // player.showSystemMessage("1");
            if (player.getGuildId() == guildIdss[i]) {
                // player.showSystemMessage("2");
                GuildINT = parseInt(event.getVariable(player.getGuildId()));
                Guild = player.getGuildId();
                event.setVariable(Guild, GuildINT + SS);
                player.showSystemMessage("公會: " + getNAME(Guild) + " 分數已累計 " + (GuildINT + SS));
                // del(Guild,1);
                // ins((GuildINT+SS),1);
                //updateGuild(GuildINT+SS,Guild,1)
                player.runScript("城戰資料庫");
                // player.showSystemMessage("公會"+player.getGuildId()+" |guildIdss: "+guildIdss[i]);
                // player.showSystemMessage("公會"+Guild+" |guildIdss: "+guildIdss[i]);

                if (event.getVariable(player.getGuildId()) >= GuiidAllValue) {
                    player.showSystemMessage("3");
                    map_1.blowWeatherEffectNotice("公會: " + getNAME(player.getGuildId()) + " 成功佔據", 0, 10 * 1000);
                    delall(0);
                    for (var j = 0; j < guildIdss.length; j++) {
                        GuildINT0 = parseInt(event.getVariable(guildIdss[j]));
                        insall(guildIdss[j], GuildINT0, 0)
                        event.setVariable(guildIdss[j], 0); //清空所有分數
                    }
                }
            }
        }
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
    /*if (members.length <= 0) {
    event.destroyEvent();
    }*/
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
        case maps:
            player.showTimer((endTime - new Date().getTime()) / 1000);
            player.showDeathCount();
            if (player.getGuildId() == 0) {
                // removePlayer(player.getId(), true);
            }
            if (members.length == 0) { //第一個近來刷新過往臨時紀錄1 0為最後勝出者
                delall(1);
            }
            player = event.getVariable("members");
            break;
        default:
            //player died and respawned or clicked Nella to leave PQ
            //changeMap is false so player doesn't get re-warped to exit map
            removePlayer(player.getId(), false);
    }
}

function partyMemberDischarged(party, player) {
    if (party.getLeader() == player.getId()) {
        // kick();
    } else {
        // removePlayer(player.getId(), true);
    }
}

function kick() {
    map_1.reset();
    Score = [];

    /*
    for (let i = 0; i < guildIdss.length; i++) {
    GuildINT = event.getVariable(guildIdss[i]);
    Score.push(getNAME(guildIdss[i]),GuildINT);
    NAME = getNAME(guildIdss[i]);
    for (let i = 0; i < members.length; i++) {
    members[i].showSystemMessage(NAME+" : "+GuildINT);
    }
    }*/

    for (let i = 0; i < members.length; i++) {
        members[i].showSystemMessage("時間到了 ");
        //dissociate event before changing map so playerChangedMap is not
        //called and this method is not called again by the player
        members[i].setEvent(null);
        members[i].changeMap(EXIT_MAP);
    }
    for (let i = 0; i < members.length; i++) {
        members[i].runScript("城戰勝利獎勵");
        members[i].showSystemMessage("領獎結束 ");
    }

    event.destroyEvent();
}

function timerExpired(key) {
    switch (key) {
        case "kick":
            kick();
            break;
        case "spawnMobBOSS":
            MOBX = XL[1];
            MOBY = Y[1];
            makeMob(2300268, 800000000000000, -486, -1316, map_1, 20);
            makeMob(9833433, 800000000000000, 179, -1316, map_1, 30);
            makeMob(9303090, 800000000000000, 179, -1676, map_1, 40);
            makeMob(9303101, 800000000000000, -486, -1676, map_1, 50);
            event.getMap(maps).blowWeatherEffectNotice("黑暗降臨顫抖吧!!無知的人類。", 265, 6000);
            player.showTopScreenEffect("Effect/HekatonEff_1001.img/lockon");
            player.showTopScreenEffect("Effect/HekatonEff_1001.img/search");
            player.showTopScreenEffect("Effect/HekatonEff_1001.img/explosion");
            player.showTopScreenEffect("Effect/HekatonEff_1001.img/ball");
            player.showTopScreenEffect("Effect/HekatonEff_1001.img/hit");
            event.startTimer("spawnMobBOSS", 1 * 60 * 1000);
            break;
        case "spawnMobs":
            spawnMobs();
            event.startTimer("spawnMobs", 5 * 1000);
            break;
        case "EventAtom":
            let map = event.getMap(maps);
            map.createObtacleAtom(0, 3, 0x30, 0x33, -758, -3076);
            map.createObtacleAtom(0, 3, 0x30, 0x33, -549, -3076);
            map.createObtacleAtom(0, 3, 0x30, 0x33, -340, -3076);
            map.createObtacleAtom(0, 3, 0x30, 0x33, -131, -3076);
            map.createObtacleAtom(0, 3, 0x30, 0x33, 78, -3076);
            map.createObtacleAtom(0, 3, 0x30, 0x33, 287, -3076);
            map.createObtacleAtom(0, 3, 0x30, 0x33, 496, -3076);

            map.createObtacleAtom(0, 3, 0x30, 0x33, -758, -1676);
            map.createObtacleAtom(0, 3, 0x30, 0x33, -549, -1676);
            map.createObtacleAtom(0, 3, 0x30, 0x33, -340, -1676);
            map.createObtacleAtom(0, 3, 0x30, 0x33, -131, -1676);
            map.createObtacleAtom(0, 3, 0x30, 0x33, 78, -1676);
            map.createObtacleAtom(0, 3, 0x30, 0x33, 287, -1676);
            map.createObtacleAtom(0, 3, 0x30, 0x33, 496, -1676);

            map.createObtacleAtom(0, 3, 0x30, 0x33, -957, 327);
            map.createObtacleAtom(0, 3, 0x30, 0x33, -748, 327);
            map.createObtacleAtom(0, 3, 0x30, 0x33, -539, 327);
            map.createObtacleAtom(0, 3, 0x30, 0x33, -330, 327);
            map.createObtacleAtom(0, 3, 0x30, 0x33, -121, 327);
            event.startTimer("EventAtom", 10 * 1000);
    }
}

function deinit() {
    for (let i = 0; i < members.length; i++) {
        members[i].setEvent(null);
        //members[i].setDeathCount(-1);
    }
}

function getNAME(ID) { //轉成中文
    var sql = "select name from guilds where id = '" + ID + "' ";
    var result = player.customSqlResult(sql);
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("name");
        }
    } else {
        return 0;
    }

}

function del(GuildId, ss) {
    var sql = "delete from zz_guild_sky where id=" + GuildId + " and ss=" + ss + "";
    player.customSqlUpdate(sql);
}

function ins(quantity, ss) {
    var sql = "insert INTO zz_guild_sky(id,Score,time,ss)VALUE(" + player.getGuildId() + "," + quantity + ",now()," + ss + ")";
    player.customSqlInsert(sql);
}

function delall(ss) {
    var sql = "delete from zz_guild_sky where ss=" + ss + "";
    player.customSqlUpdate(sql);
}

function insall(GuildId, quantity, ss) {
    var sql = "insert INTO zz_guild_sky(id,Score,time,ss)VALUE(" + GuildId + "," + quantity + ",now()," + ss + ")";
    player.customSqlInsert(sql);
}

function getguild_sky(getId) { //獲取資料表 至 JS讀取用
    var sql = "SELECT id,Score FROM zz_guild_sky WHERE id = " + getId + "";
    var resultList = player.customSqlResult(sql);
    var charInfo = {};
    for (var i = 0; i < resultList.size(); i++) {
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        charInfo.Score = result.get("Score");
        charInfo.id = result.get("id");
    }
    return charInfo;
}
