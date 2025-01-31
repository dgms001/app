/**
 *
 *
 */

let EXIT_MAP = 103000000;//103000000
let MIN_PLAYER = 1;//最小遊戲人數
let MAX_PLAYER = 20;//最大遊戲人數
let WAIT_TIME = 1;//等待成員時間 分鐘
let DEATH_COUNT = 3;//死亡次數
var bossid = "世界BOSS";
let FIELD = 940200420;
let readyMap = 970072200;
let members;
let endTime;
let FIELDMAP;
let time = 30 * 60 * 1000;

var mobs = [9101078]
let allHp = 240000000000;//血量

var killmobs = 0;
var guildName = "名"
var rewardType = true;


function init(attachment) {
    guildId = attachment[0];
    player = attachment[1];
    guildName = attachment[2] + "的遠征隊";

    let map = event.getMap(readyMap);
    event.startTimer("checkMember", WAIT_TIME * 60 * 1000);
    endTime = new Date().getTime() + WAIT_TIME * 60 * 1000;
    members = [];

    event.setVariable("leader", player.getName());
    event.setVariable("GuildId", guildId);
    event.setVariable("guildName", guildName);

    event.setVariable("members", members);
    event.setVariable("canJoin", "1");

    members.push(player);//註冊玩家
    //event.broadcastWeatherEffectNotice(166, "[全服遠征] 活動開啟啦，請各位守護者在3分鐘內前往-自由市場-管理員進行報名參加！！！", 30000)

    player.setEvent(event);
    player.changeMap(readyMap, 0);
    FIELDMAP = event.getMap(FIELD);
}

function mobDied(mob) {
    if (mobs.indexOf(mob.getDataId()) != -1) {
        killmobs++;
        if (killmobs == 1) {

            if (mob.getDataId() == 9101078 && rewardType) {
                rewardType = false;
                event.broadcastPlayerNotice(22, "== 全服遠征-世界BOSS == BOSS已被擊敗！！！！！");
                var members = event.getVariable("members");
                FIELDMAP.blowWeather(5121051, " 恭喜你們成功擊敗火焰狼");

                //計算傷害總量
                var pallHp = 240000000000;
                for (let dd = 0; dd < members.length; dd++) {
                    try {
                        var playerAllDamage = parseFloat(event.getVariable(members[dd].getName() + "傷害"));
                        pallHp += playerAllDamage;
                    } catch (e) {

                    }
                }
                event.broadcastPlayerNotice(22, "總共傷害:" + pallHp);
                var niubiPlayer = '';
                var niubiPlayerDamage = 0;
                var niubiPlayerIsPercent = 0;
                for (let dd = 0; dd < members.length; dd++) {
                    try {

                        setEventValue(members[dd], "每日全服BOSS", 1)
                       

                        var playerAllDamage = parseFloat(event.getVariable(members[dd].getName() + "傷害"));

                        var isPercent = Math.floor((playerAllDamage * 100) / pallHp);

                        if (playerAllDamage > niubiPlayerDamage) {
                            niubiPlayerDamage = playerAllDamage;
                            niubiPlayer = members[dd].getName();
                            niubiPlayerIsPercent = isPercent;
                        }

                        if (isPercent > 100) isPercent = 100;
                        if (isPercent < 5) {
                            //小於百分之5
                            members[dd].gainItem(4310088, 2);

                        } else if (isPercent < 10) {
                            //小於百分之10
                            members[dd].gainItem(4310088, 3);
                        } else if (isPercent < 30) {
                            //小於百分之40
                            members[dd].gainItem(4310088, 6);

                        } else {
                            //40以上
                            members[dd].gainItem(4310088, 8);
                        }
						var sql = "insert into dgms_worldbossinfo(bossName, playersName, `damage`) values('" + bossid + "','" + members[dd].getName() + "','" + playerAllDamage + "')";
                        members[dd].customSqlInsert(sql);
                        members[dd].showSystemMessage("" + members[dd].getName() + "總傷害為：" + playerAllDamage);

                        members[dd].setEvent(null);
                    } catch (e) {

                    }
                }

                //隨機獎勵
                var randomMemberI = null;
                var randomMember;
                try {
                    randomMemberI = Math.floor(Math.random() * members.length);
                    randomMember = members[randomMemberI]
                    randomMember.gainItem(4310088, 1); //隨機玩家獲取獎勵
                } catch (e) {

                }

                FIELDMAP.scriptProgressMessage("攻略成功！20秒後返回！");
                FIELDMAP.broadcastEventNotice("攻略成功！20秒後返回！");
                FIELDMAP.showTimer(20*6000);
                try {
                    event.broadcastPlayerNotice(1, "== 全服遠征-世界BOSS == 最強者<" + niubiPlayer + ">造成傷害" + niubiPlayerIsPercent + "%！最後一擊玩家<" + randomMember.getName() + ">將獲得額外嘉獎");
                    event.broadcastWeatherEffectNotice(247, "== 全服遠征-世界BOSS == 最強者<" + niubiPlayer + ">造成傷害" + niubiPlayerIsPercent + "%！最後一擊玩家<" + randomMember.getName() + ">將獲得額外嘉獎", 30000)
                } catch (e) {
                    event.broadcastPlayerNotice(1, "== 全服遠征-世界BOSS == 最強者<" + niubiPlayer + ">造成傷害" + niubiPlayerIsPercent + "%！");
                    event.broadcastWeatherEffectNotice(247, "== 全服遠征-世界BOSS == 最強者<" + niubiPlayer + ">造成傷害" + niubiPlayerIsPercent + "%！", 30000)
                }

                event.startTimer("kick", 1);
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
        case readyMap:
            if ("1" != event.getVariable("canJoin")) {
                player.changeMap(EXIT_MAP);
            } else {
                player.showTimer((endTime - new Date().getTime()) / 1000);
            }
            break;
        case FIELD:
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
            event.setVariable("canJoin", "0");
            let readyMapF = event.getMap(readyMap);
            if (members.length < MIN_PLAYER) {
                readyMapF.scriptProgressMessage("由於參加BOSS人數不足5人，在場的人員將會被傳送出去。無法開啟任務");
                readyMapF.broadcastEventNotice("由於參加BOSS人數不足5人，在場的人員將會被傳送出去。無法開啟任務");
                event.startTimer("kick", 3000);
                endTime = new Date().getTime() + 3 * 1000;
                map.showTimer(3);
            } else if (members.length > MAX_PLAYER) {
                readyMapF.scriptProgressMessage("由於參加BOSS人數大於30人，在場的人員將會被傳送出去。無法開啟任務");
                readyMapF.broadcastEventNotice("由於參加BOSS人數大於30人，在場的人員將會被傳送出去。無法開啟任務");
                event.startTimer("kick", 3000);
                endTime = new Date().getTime() + 3 * 1000;
                map.showTimer(3);
            } else {

                //開打
                FIELDMAP.clearMobs();
                FIELDMAP.resetReactors();

                let boss = FIELDMAP.makeMob(9101078);
                boss.changeBaseHp(allHp);
                FIELDMAP.spawnMob(boss, 1575, 85);
                FIELDMAP.createObtacleAtom(0, 8, 40, 41, 11, 154);

                for (let i = 0; i < members.length; i++) {

                    try {
                        members[i].changeMap(FIELD);
                        members[i].setDeathCount(DEATH_COUNT);

                        event.setVariable(members[i].getName() + "傷害", 0);
                        event.setVariable(members[i].getName() + "Reward", 0);
                        setEventValue(members[i], "遠征火焰狼進入次數", 1);
                    } catch (e) {
                    }
                }

                FIELDMAP.scriptProgressMessage("BOSS正式開啟,戰勝火焰狼吧！");
                event.startTimer("kick", time);//設定整個BOSS活動時間
                endTime = new Date().getTime() + time;
                FIELDMAP.showTimer(time / 1000);
                FIELDMAP.blowWeather(5121051, "開始攻略火焰狼");

                event.broadcastPlayerNotice(22, "== 全服遠征-世界BOSS == 副本開啟");
            }
            break;
    }
}

function deinit() {
    for (let i = 0; i < members.length; i++) {
        members[i].setEvent(null);
        members[i].setDeathCount(-1);
    }
}


//記錄傷害
function mobHit(player, mob, damage) {
    if (mobs.indexOf(mob.getDataId()) != -1) {
        //BOSS才記錄傷害值
        var playerAllDamage = parseFloat(event.getVariable(player.getName() + "傷害"));
        event.setVariable(player.getName() + "傷害", (playerAllDamage + damage))
    }

    if (mobs.indexOf(mob.getDataId()) != -1) {

        var playerAllDamage = parseFloat(event.getVariable(player.getName() + "傷害"));
        if (playerAllDamage == null || playerAllDamage == undefined) {
            playerAllDamage = 0;
        }
        event.setVariable(player.getName() + "傷害", (playerAllDamage + damage))
        //player.showSystemMessage("你的傷害為：" + damage+"");
        //player.showSystemMessage("你的全部傷害為：" + playerAllDamage);
        //player.showSystemMessage("目前你的全部傷害為：" + (playerAllDamage+damage));

    }
}

//flag = true 查總的不重置
//flag = false 查當天的
function setEventValue(player1, event1, value1) {
    var charInfo = getCharInfo(player1);
    var sql = "INSERT INTO zz_xr_event(accounts_id, world, `event`,`value`,time) VALUES(" + charInfo.accounts_id + "," + charInfo.world + ",'" + event1 + "'," + value1 + ",now())";
    player1.customSqlInsert(sql);
}

function getCharInfo(player1) {
    var sql = "SELECT accountid accounts_id,world FROM characters WHERE id = " + player1.getId() + "";
    var resultList = player1.customSqlResult(sql);
    var charInfo = {};
    for (var i = 0; i < resultList.size(); i++) {
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        charInfo.accounts_id = result.get("accounts_id");
        charInfo.world = result.get("world");
    }
    return charInfo;
}

function getSSS(player, itemId, num) {
    var itemName = player.makeItemWithId(itemId).getItemName();
    var str = String(itemName);
    var bytesCount = 0;
    for (var i = 0, n = str.length; i < n; i++) {
        var c = str.charCodeAt(i);
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
            bytesCount += 1;
        } else {
            bytesCount += 2;
        }
    }
    if (bytesCount < 17) {

        for (var ii = 0; ii < 17 - bytesCount; ii++) {
            if (ii % 2 == 0) {
                itemName += " ";
            } else {
                itemName = " " + itemName;
            }
        }
    }
    return "  " + itemName + " x " + num + "  \r\n";
}