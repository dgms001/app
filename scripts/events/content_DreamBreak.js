

/**
 * Content: Dream Break
 * @author Yukinoshita
 */

let EXIT_MAP = 921171100;
let FIELD = 921171000;

let BOSS_LOG = "DreamBreak";
let DREAM_DEEP_BASE = 500; //夢境深度初始
let DREAM_DEEP_RATE = 10; //噩夢深度變動倍率
let MOB_BASE_HP = 100000000000; //怪物基礎血量
let SLEEP_MUSICBOX_HP_RATE = 10; //噩夢音樂盒血量倍率
let MUSIC_BOX_HP = 10000000; //音樂盒血量
let DREAM_POINT_REWARD = 300; //夢境點數獎勵
let MOB_COUNT = 5; //每個房間初始怪物數量
let MAX_MOB_SIZE = 50; //怪物最大數量


let startTime = new Date().getTime();
let checkDreak_lock = false;
let blockDream = false;
let dreamDeep = DREAM_DEEP_BASE;
let mobHp = MOB_BASE_HP;
let player;
let endTime;
let stage = 1;
let clearTime = 0;
let mapPoints = [[842, -457], [805, -1963],
[3167, -237], [833, 1485], [-1351, -237]];

let time = 5 * 60 * 1000; //每個stage的時間

function init(attachment) {
    player = attachment;
    player.changeMap(FIELD);
    let map = event.getMap(FIELD);
    map.clearMobs();
    if (player.getEventValue(BOSS_LOG) > 3) {
        player.changeMap(EXIT_MAP);
        player.showSystemMessage("次數不足自動退場");
    }
    if (player.getEventValue("碎夢塔") >= 5) {
        player.gainItem(2632500, player.getEventValue("碎夢塔") / 5);
    }
    stage = player.getEventValue("碎夢塔") + 1;
    player.addEventValue(BOSS_LOG)
    player.addPQLog(BOSS_LOG)
    //event.startTimer("kick", time);
    //endTime = new Date().getTime() + time;
    event.startTimer("loadStage", 3000);
    player.setEvent(event);

}

function mobDied(mob) {
    //破壞夢境盒子 - 睡眠音樂盒 -50 噩夢深度，噩夢音樂盒+50噩夢深度
    let newMobId = mob.getDataId();
    let isNightmare = false;
    switch (mob.getDataId()) {
        case 9833070://睡眠音樂盒
        case 9833071://
        case 9833072://
        case 9833073://
        case 9833074://
            newMobId += 10;
            dreamDeep += 50;
            break;
        case 9833080://噩夢音樂盒
        case 9833081://
        case 9833082://
        case 9833083://
        case 9833084://
            isNightmare = true;
            newMobId -= 10;
            dreamDeep -= 50;
            break;
    }
    if (newMobId != mob.getDataId()) {
        if (stage > 120) {
            SLEEP_MUSICBOX_HP_RATE = 500;
        } else if (stage > 110) {
            SLEEP_MUSICBOX_HP_RATE = 400;
        } else if (stage > 100) {
            SLEEP_MUSICBOX_HP_RATE = 300;
        } else if (stage > 90) {
            SLEEP_MUSICBOX_HP_RATE = 200;
        } else if (stage > 80) {
            SLEEP_MUSICBOX_HP_RATE = 150;
        } else if (stage > 70) {
            SLEEP_MUSICBOX_HP_RATE = 100;
        } else if (stage > 60) {
            SLEEP_MUSICBOX_HP_RATE = 80;
        } else if (stage > 50) {
            SLEEP_MUSICBOX_HP_RATE = 70;
        } else if (stage > 40) {
            SLEEP_MUSICBOX_HP_RATE = 50;
        } else if (stage > 30) {
            SLEEP_MUSICBOX_HP_RATE = 30;
        } else if (stage > 20) {
            SLEEP_MUSICBOX_HP_RATE = 20;
        } else if (stage > 10) {
            SLEEP_MUSICBOX_HP_RATE = 15;
        } else {
            SLEEP_MUSICBOX_HP_RATE = 12;
        }
        let map = event.getMap(FIELD);
        newMob = map.makeMob(newMobId);//生成音樂盒
        newMob.changeBaseHp(isNightmare ? MOB_BASE_HP * SLEEP_MUSICBOX_HP_RATE : MUSIC_BOX_HP)
        newMob.setKeepAggro(true);
        newMob.disableSpawnRevives();
        map.spawnMob(newMob, mob.getMob().getPosition().x, mob.getMob().getPosition().y);
        newMob.getMob().sendSpawnData(player.getPlayer().getClient())
        newMob.getMob().setController(player.getPlayer());
    }
}

function removePlayer(changeMap) {
    player.setEvent(null);
    event.destroyEvent();
    if (changeMap) {
        player.changeMap(EXIT_MAP);
    }
}

function playerDisconnected(player) {
    //changeMap is false since all PQ maps force return the player to the exit
    //map on his next login anyway, and we don't want to deal with sending
    //change map packets to a disconnected client
    removePlayer(false);
}

function playerChangedMap(player, destination) {
    //TODO: is it true that even when a non-leader clicks Nella, the entire
    //party is booted? and that GMS forces party out when only two members
    //remain alive and online?
    switch (destination.getId()) {
        case FIELD:
            player.showDeathCount();
            break;
        default:
            //player died and respawned or clicked Nella to leave PQ
            //changeMap is false so player doesn't get re-warped to exit map
            removePlayer(false);
    }
}



function kick() {
    player.setEvent(null);
    player.changeMap(EXIT_MAP);
    event.destroyEvent();
}

function timerExpired(key) {
    switch (key) {
        case "kick":
            event.stopTimer("checkDream");
            event.stopTimer("loadStage");
            event.stopTimer("spawnMob");
            kick();
            break;
        case "loadStage":
            loadStage();
            break;
        case "checkDream":
            event.startTimer("checkDream", 3000); //註意順序
            checkDream();
            break;
        case "spawnMob":
            spawnMob();
            break;
        case "blockDream":
            if (!blockDream) {
                blockDream = true;
                event.startTimer("blockDream", 20000);
            } else {
                blockDream = false;
            }
            break;
    }
}

function deinit() {
    player.setEvent(null);
}


/*
 * 夢境階段信息載入
 * @param {type} eim
 * @returns {undefined}
 */
function loadStage() {
    let map = event.getMap(FIELD);
    player.updateQuestRecordEx(15901, "stage", stage);

    map.updateDreamBreakInfo(0x03, DREAM_DEEP_BASE, time, stage);//載入UI信息
    map.updateDreamBreakInfo(0x06, 1, time, 0);//暫停計時
    map.updateDreamBreakInfo(0x05, stage, 0, 0);//開始倒計時
    dreamDeep = DREAM_DEEP_BASE;

    player.showProgressMessageFont("通過次元縫隙，消滅位於各個房間的噩夢音樂盒！", 0x14, 0x14, 0, 0)
    //等待3秒後生成怪物
    event.startTimer("spawnMob", 3000);
}

function spawnMob() {
    let map = event.getMap(FIELD);
    map.reset();
    //隨機生成怪物 - 5個地區，隨機3個地區生成噩夢音樂盒 - 0為中央，1為上，2為下，3為左，4為右
    let rand1 = Math.floor(Math.random() * 5);//生成沈睡音樂盒地區 - 中央的那壹個必定為睡眠音樂盒
    var rand2 = rand1;
    let loop = 0;
    while (loop < 10000) {
        rand2 = Math.floor(Math.random() * 5);
        if (rand2 != rand1) {
            break;
        }
        loop++;
    }
    for (let i = 0; i < mapPoints.length; i++) {
        let point = mapPoints[i];
        let spawnMusic = 9833070 + i;//睡眠音樂盒
        let isSleep = false;
        if ((i != rand1) && (i != rand2)) {
            spawnMusic += 10;//噩夢音樂盒
            isSleep = true;
        }
        if (stage > 120) {
            SLEEP_MUSICBOX_HP_RATE = 500;
        } else if (stage > 110) {
            SLEEP_MUSICBOX_HP_RATE = 400;
        } else if (stage > 100) {
            SLEEP_MUSICBOX_HP_RATE = 300;
        } else if (stage > 90) {
            SLEEP_MUSICBOX_HP_RATE = 200;
        } else if (stage > 80) {
            SLEEP_MUSICBOX_HP_RATE = 150;
        } else if (stage > 70) {
            SLEEP_MUSICBOX_HP_RATE = 100;
        } else if (stage > 60) {
            SLEEP_MUSICBOX_HP_RATE = 80;
        } else if (stage > 50) {
            SLEEP_MUSICBOX_HP_RATE = 70;
        } else if (stage > 40) {
            SLEEP_MUSICBOX_HP_RATE = 50;
        } else if (stage > 30) {
            SLEEP_MUSICBOX_HP_RATE = 30;
        } else if (stage > 20) {
            SLEEP_MUSICBOX_HP_RATE = 20;
        } else if (stage > 10) {
            SLEEP_MUSICBOX_HP_RATE = 15;
        } else {
            SLEEP_MUSICBOX_HP_RATE = 12;
        }
        let mob = map.makeMob(spawnMusic);//生成音樂盒
        mob.changeBaseHp(isSleep ? MOB_BASE_HP * SLEEP_MUSICBOX_HP_RATE : MUSIC_BOX_HP)
        mob.setKeepAggro(true);
        mob.disableSpawnRevives();
        map.spawnMob(mob, point[0], point[1]);
        mob.getMob().sendSpawnData(player.getPlayer().getClient())
        mob.getMob().setController(player.getPlayer());

        for (let u = 0; u < MOB_COUNT; u++) {
            let mob1 = map.makeMob(9833090 + Math.floor(Math.random() * 10));
            mob1.changeBaseHp(mobHp);
            mob1.setKeepAggro(true);
            map.spawnMob(mob1, point[0] + Math.floor(Math.random() * 100) - Math.floor(Math.random() * 100), point[1]);
            mob1.getMob().sendSpawnData(player.getPlayer().getClient())
            mob1.getMob().setController(player.getPlayer());
        }
    }
    clearTime = new Date().getTime() + time;
    map.updateDreamBreakInfo(0x06, 0, time * 1000, 0);//開始計時
    map.updateDreamBreakInfo(0x04, dreamDeep, 0, 0);//載入噩夢深度
    player.teleportToPortalId(0, 9);
    //開啟檢測線程
    checkDreak_lock = false;
    event.startTimer("checkDream", 3000);
}


function checkDream() {
    if (checkDreak_lock) {
        return;
    }
    if (new Date().getTime() > clearTime) {
        kick();
        return;
    }

    //獲取當前地圖噩夢音樂盒數量
    let map = event.getMap(FIELD);
    let sleepMusic = 0;
    for (let i = 0; i < 5; i++) {
        let mob = map.getMobById(9833080 + i);
        if (mob != null) {
            sleepMusic++;
            //if (mob.getMob().getController() == null || !mob.getMob().isControllerHasAggro()) {
            mob.getMob().setKeepAggro(true);
            mob.getMob().setControllerHasAggro(true);
            if (mob.getMob().getController() == null) {
                mob.getMob().setController(player.getPlayer());
            }
            //}
        }
    }
    for (var i = 0; i < 5; i++) {
        var mob = map.getMobById(9833070 + i);
        if (mob != null) {
            //if (mob.getMob().getController() == null || !mob.getMob().isControllerHasAggro()) {
            mob.getMob().setKeepAggro(true);
            mob.getMob().setControllerHasAggro(true);
            if (mob.getMob().getController() == null) {
                mob.getMob().setController(player.getPlayer());
            }

            //}
        }
    }

    if (!blockDream) {
        //player.dropMessage(3, "深度信息更新，過去：" + dreamDeep);
        dreamDeep += DREAM_DEEP_RATE * sleepMusic - DREAM_DEEP_RATE * (5 - sleepMusic);
        dreamDeep = Math.min(1000, Math.max(0, dreamDeep));
        //player.dropMessage(3, "深度信息更新，現在：" + dreamDeep);
        map.updateDreamBreakInfo(0x04, dreamDeep, 0, 0);//載入噩夢深度
        if (dreamDeep >= 1000) {//噩夢深度達到1000以上，結束
            player.dropMessage(3, "失敗了。");
            kick();
            return;
        } else if (dreamDeep <= 0) {//噩夢深度為0，統計結果開啟下壹階段
            if (checkDreak_lock) {
                return;
            }
            checkDreak_lock = true;
            nextStage();
            event.stopTimer("checkDream");
            return;
        }
    }

    //再每壹個地點生成壹只怪物 - 先判斷當前地圖怪物總數量
    let mobsize = map.getEventMobCount();
    if (MAX_MOB_SIZE > mobsize) {
        for (let i = 0; i < mapPoints.length; i++) {
            let point = mapPoints[i];
            let mob1 = map.makeMob(9833090 + Math.floor(Math.random() * 10));
            mob1.changeBaseHp(MOB_BASE_HP);
            mob1.setKeepAggro(true);
            map.spawnMob(mob1, point[0] + Math.floor(Math.random() * 100) - Math.floor(Math.random() * 100), point[1]);
            mob1.getMob().sendSpawnData(player.getPlayer().getClient())
            mob1.getMob().setController(player.getPlayer());

        }
    }

}

function nextStage() {
    let leftTime = clearTime - new Date().getTime();
    let map = event.getMap(FIELD);
    map.updateDreamBreakInfo(0x06, 1, leftTime, 0);//暫停計時
    leftTime = (leftTime - leftTime % 1000) / 1000;//轉換成秒
    player.updateQuestRecordEx(15901, "clearTime", Math.floor((new Date().getTime() - clearTime + time) / 1000));
    let current = player.getIntQuestRecordEx(15901, "dream");
    player.updateQuestRecordEx(15901, "dream", current + DREAM_POINT_REWARD);
    player.showProgressMessageFont("夢之點數獲得" + DREAM_POINT_REWARD + "點！" + (current + DREAM_POINT_REWARD), 0x14, 0x14, 0, 0);

    //發送統計結果
    map.updateDreamBreakInfo(0x07, Math.floor((new Date().getTime() - clearTime + time) / 1000), 0, 0);//
    map.reset();
    if (!(stage % 5)) {
        player.gainItem(2632500, 1);
    }
    stage++;
    player.addEventValue("碎夢塔", 1, 3000);
    event.startTimer("loadStage", 5000);
}