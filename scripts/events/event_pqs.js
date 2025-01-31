/**
 * Event : 跑旗賽
 * @author dgms
 * QQ:381991414
 */

//let EXIT_MAP = 932200001;
let EVENT_FIELD = 932200100;
let REWARD_MAP = 932200002;

let EXIT_MAP = 103000000;
//let REWARD_MAP = 103000000;
let ranges_1 = [
    [0, 0, [-2756, 2558], [-2037, 2100]],

    [1, 10, [-2036, 2558], [-638, 2100]],
    [2, 10, [-639, 2678], [956, 2100]],
    [3, 20, [957, 2798], [2666, 1900]],
    //上層
    [4, 10, [1204, 1900], [2666, 1100]],
    [5, 10, [-650, 1900], [1203, 1100]],
    [6, 10, [-2036, 1900], [-651, 1100]],
    [7, 30, [-2756, 2150], [-2037, 1100]],
];
let ranges_2 = [
    [0, 0, [-1136, 2498], [2396, 1838]],

    [1, 50, [15, 1427], [2396, 1000]],
    [2, 50, [-1136, 1058], [-472, 950]],

];
let item_pos_1 = [
    [-1262, 2618], [-888, 2618], [545, 2435], [1068, 2092], [818, 2050], [2102, 2018], [2301, 1358],
    [1483, 1538], [395, 1118], [-257, 1358], [-773, 1238], [-1929, 1778], [-1377, 1778], [-2612, 1434], [-2612, 2138]
];
let item_pos_2 = [
    [-682, 2198], [-74, 2198], [34, 2498], [332, 2127], [620, 2078], [905, 2558], [1216, 2011],
    [1924, 2498], [2355, 2558], [1754, 1418], [1981, 1178], [669, 1118], [-351, 1238], [-1055, 1058], [-29, 1778]
];
let minPlayer = 0;
let members = [];
let endTime;
let lastMemberLength = 0;
let useItem = true;
let mapType = 0;
let maxLap = 3;

function init(attachment) {
    [useItem, mapType, EXIT_MAP, EVENT_FIELD, REWARD_MAP, maxLap] = attachment;
    event.setVariable("started", false);
    event.setVariable("members", members);
    event.setVariable("ranking", {});
    event.setVariable("currentRank", 0);
    event.setVariable("startTime", 0);
    event.setVariable("bestLapTime", { player: "NaN", time: 2147483647 }); //todo read from db
    event.setVariable("range", {});
    event.setVariable("score", {});
    event.setVariable("itemCount", {});
    event.setVariable("minSize", minPlayer);
    event.setVariable("useItem", useItem);
    event.setVariable("mapType", mapType);
    event.setVariable("maxLap", maxLap);
	
    let map = event.getMap(EVENT_FIELD);
    map.showTimer(1 * 60);//30分鐘等待其他玩家。
	event.broadcastWeatherEffectNotice(6,"[跑旗活動]開啟拉~請玩家至1分流,選擇萬能傳送-副本中心-旗幟爭奪入場!!",60000); //35[特效 1-???] 60000[1秒]
    //event.startTimer("destroyEvent", 30 * 60 * 1000);//30分鐘人數不滿就銷毀EVENT。
    event.startTimer("checkMembers", 1000); //1秒檢查一次加入的玩家數。
	//event.startTimer("startEvent",30 * 1000);
	event.startTimer("ready", 1*60*1000); 
    waitTime = new Date().getTime() + 1 * 60 * 1000;
    event.setVariable("waitTime", waitTime);
}

function removePlayer(playerId, changeMap) {
    for (let i = 0; i < members.length; i++) {
        if (members[i].getId() == playerId) {
            //dissociate event before changing map so playerChangedMap is
            //not called and this method is not called again by the player
            members[i].setEvent(null);
            members[i].dropMessage(1, "exit event.");
            //members[i].setActionBar(0);
            //if(event.getVariable("lockRank") != true) {
            //        event.getVariable("ranking")[members[i].getName()] = null;
            //}
            if (changeMap)
			//members[i].changeMap(EXIT_MAP, "st00");
			members[i].changeMap(REWARD_MAP, "st00");
            //collapse the members array so we don't accidentally warp
            //this member again if the leader leaves later.
            members.splice(i, 1);
            break;
        }
    }
    //if (members.length <= 0) {
    //       event.destroyEvent();
    //}

}
function playerDisconnected(player) {
    //changeMap is false since all PQ maps force return the player to the exit
    //map on his next login anyway, and we don't want to deal with sending
    //change map packets to a disconnected client
    removePlayer(player.getId(), false);
}

/**
 * 
 * @param {ScriptPlayer} player 
 * @param {ScriptField} destination 
 */
function playerChangedMap(player, destination) {
    if (destination.getId() != EVENT_FIELD) {
        removePlayer(player.getId(), false);
    } else {
        //player.dropMessage(1, "[DEBUG]:map changed to " + destination.getId() + "。");
        player.showTimer((endTime - new Date().getTime()) / 1000);
        player.setActionBar(0x16);//
        player.dropMessage(9, "請稍等，公會旗幟戰就要開始啦！");
        player.dropMessage(9, "請稍等，公會旗幟戰就要開始啦！");
        //player.dropMessage(9, "請稍等，測試就要開始啦！");
        broadcastEventNotice(9, player.getName() + "加入了公會旗幟戰！目前 " + members.length + "" + (members.length <= minPlayer?"/" + minPlayer + "":"") + "人。");
		//player.dropMessage(1, 9, player.getName() + "加入了！目前 " + members.length + "" + (members.length <= minPlayer?"/" + minPlayer + "":"") + "人。");
    }

}

function playerPickupItem(player, map, itemId) {
    player.dropMessage(6, "DEBUG:itemId:" + itemId + "picked.");
    let useCount = 1;
    let skillId = 0;
    switch (itemId) {
        case 2023295:// - 重甲防御
            skillId = 80001415;
            break;
        case 2023296:// - 超高跳
            skillId = 80001416;
            break;
        case 2023297:// - 沖鋒
            skillId = 80001417;
            break;
        case 2023298:// - 發射大炮
            skillId = 80001418;
            break;
    }
    if (skillId > 0) {
        if (event.getVariable("itemCount")[player.getId()] == null) {
            event.getVariable("itemCount")[player.getId()] = {};
        }
        player.dropMessage(3, "獲得道具" + itemId + "，過去數量" + event.getVariable("itemCount")[player.getId()][itemId] + "")
        if (event.getVariable("itemCount")[player.getId()][itemId] == null) {
            event.getVariable("itemCount")[player.getId()][itemId] = useCount;
        } else {
            event.getVariable("itemCount")[player.getId()][itemId] += useCount;
        }
        player.dropMessage(3, "獲得道具" + itemId + "，現在數量" + event.getVariable("itemCount")[player.getId()][itemId] + "")
        player.updateActionBar(0x0B, 0x16, itemId, event.getVariable("itemCount")[player.getId()][itemId]);
    }
    let rItemId = 0;
    switch (itemId) {
        case 80001415:
            rItemId = 2023295;
            break;
        case 80001416:
            rItemId = 2023296;
            break;
        case 80001417:
            rItemId = 2023297;
            break;
        case 80001418:
            rItemId = 2023298;
            break;
    }
    if (rItemId > 0) {
        if (event.getVariable("itemCount")[player.getId()] == null) {
            event.getVariable("itemCount")[player.getId()] = {};
        }
        player.dropMessage(3, "消耗道具" + rItemId + "，過去數量" + event.getVariable("itemCount")[player.getId()][rItemId] + "")
        if (event.getVariable("itemCount")[player.getId()][rItemId] == null) {
            event.getVariable("itemCount")[player.getId()][rItemId] = 0;
        } else {
            let count = event.getVariable("itemCount")[player.getId()][rItemId];
            count = Math.max(0, count - 1);
            event.getVariable("itemCount")[player.getId()][rItemId] = count;

        }
        player.dropMessage(3, "消耗道具" + rItemId + "，現在數量" + event.getVariable("itemCount")[player.getId()][rItemId] + "")
        player.updateActionBar(0x0B, 0x16, rItemId, event.getVariable("itemCount")[player.getId()][rItemId]);
    }

}

function kick() {
    for (let i = 0; i < members.length; i++) {
        //dissociate event before changing map so playerChangedMap is not
        //called and this method is not called again by the player
        members[i].setEvent(null);
        //members[i].changeMap(EXIT_MAP);
    }
    event.destroyEvent();
}

function timerExpired(key) {
    switch (key) {
        case "destroyEvent":
            event.destroyEvent();
            break;
        case "ready":
			if (event.getVariable("readyStart") == null) {
                    event.setVariable("readyStart", true);
                    broadcastEventNotice(-2, "即將開始公會旗幟戰，還有1分鐘時間等待其他玩家。");
                    broadcastEventNotice(-2, "即將開始公會旗幟戰，還有1分鐘時間等待其他玩家。");
                    //broadcastEventNotice(9, "測試，倒數。");
                    event.broadcastPlayerNotice(9, "公會旗幟戰還有1分鐘就要開始了，沒有集合的小伙伴抓緊啦。");
                    event.broadcastPlayerNotice(9, "公會旗幟戰還有1分鐘就要開始了，沒有集合的小伙伴抓緊啦。");
                    event.broadcastPlayerNotice(12, "公會旗幟戰可從副本中心進入");
                    event.broadcastPlayerNotice(12, "公會旗幟戰可從副本中心進入");
					event.broadcastWeatherEffectNotice(5,"[跑旗活動]公會旗幟戰還有1分鐘就要開始了，沒有集合的小伙伴抓緊啦!!",60000); //35[特效 1-???] 60000[1秒]
                    event.startTimer("startEvent", 60 * 1000); //最後等待1分鐘開始活動。
                    event.getMap(EVENT_FIELD).showTimer(60);
                    event.setVariable("waitTime", new Date().getTime() + 60 * 1000);
					
                }
            break;
        case "checkMembers":
            if (members.length >= minPlayer) {
               /* if (event.getVariable("readyStart") == null) {
                    event.setVariable("readyStart", true);
                    broadcastEventNotice(-2, "即將開始公會旗幟戰，還有1分鐘時間等待其他玩家。");
                    //broadcastEventNotice(9, "測試，倒數。");
                    //event.broadcastPlayerNotice(1, "[跑旗賽]還有1分鐘，跑旗賽就要開始了，沒有集合的小伙伴抓緊啦。");
                    event.startTimer("startEvent", 60 * 1000); //最後等待1分鐘開始活動。
                    event.getMap(EVENT_FIELD).showTimer(60);
                    event.setVariable("waitTime", new Date().getTime() + 60 * 1000);
					
                }*/
            } else {
                event.startTimer("checkMembers", 1000);
				
            }
            if (members.length != lastMemberLength) {
                broadcastEventNotice(-2, "正在等待其他玩家，目前 " + members.length + "/" + minPlayer + "人。");
                lastMemberLength = members.length;
                event.startTimer("checkMembers", 1000);
            }
			broadcastEventNotice(-2, "正在等待其他玩家，目前 " + members.length + "/" + minPlayer + "人。");
            break;
        case "startEvent":
            //event.getMap(EVENT_FIELD).showFieldRank(20);
            calcRank(true);
            if (useItem == 1) {
                event.startTimer("spawnDrop", 1000);
            }
            event.startTimer("calcRank", 3000);
            event.setVariable("started", true);
            event.setVariable("startTime", new Date().getTime());
            broadcastEventNotice(-2, "公會旗幟戰開始啦！");
            broadcastEventNotice(9, "公會旗幟戰開始啦！");
            broadcastEventNotice(12, "公會旗幟戰開始啦！");
			event.broadcastPlayerNotice(9, "公會旗幟戰開始啦！入場關閉！");
			event.broadcastPlayerNotice(12, "公會旗幟戰開始啦！入場關閉！");
			event.broadcastWeatherEffectNotice(6,"[跑旗活動]公會旗幟戰已經開啟,入場關閉!!",60000); //35[特效 1-???] 60000[1秒]
            //broadcastEventNotice(9, "測試開始");
			let ranking = event.getVariable("ranking");
			//let currentRank = event.getVariable("currentRank");//當前是第幾名
			for (let i = 0; i < members.length; i++) {
			if (ranking[members[i].getName()] == null) {
            ranking[members[i].getName()] = { LAP: 0, BESTLAP: 2147483647, LAPTIME: 0, PASTTIME: 0 ,RANK : 99};//初始化玩家的排名信息
			}
			}
            event.getMap(EVENT_FIELD).showTimer(8 * 60);
            event.startTimer("prepareEndEvent", 8 * 60 * 1000);
            break;
        case "prepareEndEvent":
            if (event.getVariable("prepareEndEvent") != true) {
                event.setVariable("prepareEndEvent", true);
                event.getMap(EVENT_FIELD).showTimer(60*5);
                event.startTimer("endEvent", 5* 60 * 1000);
                broadcastEventNotice(-2, "公會旗幟戰距離結束還有五分鐘，抓緊時間！");
                broadcastEventNotice(9, "公會旗幟戰距離結束還有五分鐘，抓緊時間！");
                //broadcastEventNotice(9, "測試結束還有60秒");
            }
            break;
        case "endEvent":
            //event.setVariable("lockRank", true);
            /*while (members.length != 0) {
                //members[0].changeMap(REWARD_MAP, 0);
				//members[0].changeMap(103000000, 0);
            }*/
			for (let i = 0; i < members.length; i++) {
			members[i].changeMap(REWARD_MAP);
			}
            event.setVariable("started", false);
            event.broadcastPlayerNotice(1, "公會旗幟戰已經結束");
            event.destroyEvent();
            //event.startTimer("destroyEvent", 10000);
            break;
        case "calcRank":
            calcRank(false);
            event.startTimer("calcRank", 3000);
            break;
        case "spawnDrop":
            spawnDrop();
            event.startTimer("spawnDrop", 20000);
            break;
    }
}

function calcRank(init) {
    let ls = [];
    if (!init) {
        let ranges = mapType == 0 ? ranges_1 : ranges_2;
        for (let i = 0; i < members.length; i++) {
            let chr = members[i];
            //判斷角色所在位置點 計算積分
            let pos_ = chr.getPosition();
            let pos_x = pos_.x;
            let pos_y = pos_.y;
            let range_chr_ = event.getVariable("range")[chr.getId()] == null ? 0 : event.getVariable("range")[chr.getId()];
            let add_score = 0;
            let range_new = 0;
            for (let j = range_chr_; j < ranges.length; j++) {
                if (pos_x >= ranges[j][2][0] && (pos_x <= ranges[j][3][0]) && (pos_y <= ranges[j][2][1]) && (pos_y >= ranges[j][3][1])) {
                    range_new = j;
                    break;
                } else {
                    add_score += ranges[j][1];
                }
            }
            if (range_new > range_chr_) {
                event.getVariable("range")[chr.getId()] = range_new;
                if (add_score > 0) {
                    let score_chr_ = event.getVariable("score")[chr.getId()] == null ? 0 : event.getVariable("score")[chr.getId()];
                    event.getVariable("score")[chr.getId()] = (score_chr_ + add_score);
                }
            }
            ls.push([chr.getId(), event.getVariable("score")[chr.getId()] == null ? 0 : event.getVariable("score")[chr.getId()]]);
            ls = ls.sort(descend);
        }
    } else {
        for (let i = 0; i < members.length; i++) {
            ls.push([members[i].getId(), 0]);
            event.getVariable("score")[members[i].getId()] = 0;
            event.getVariable("range")[members[i].getId()] = 0;
        }
    }

    //event.getMap(EVENT_FIELD).updateFieldRank(20, ls);
}

function spawnDrop() {
    let dropCount = 10;
    //event.clearDrops();
	
   // event.getMap(EVENT_FIELD).clearDrops();
    let droped = [];
    let dropPos = mapType == 0 ? item_pos_1 : item_pos_2;
    for (let i = 0; i < dropCount; i++) {
        let itemId = Math.floor(Math.random() * 4) + 2023295;
        let pos = dropPos[Math.floor(Math.random() * dropPos.length)]; 
        while (droped.indexOf(pos[0]) > 0) {//防止重疊
            pos = dropPos[Math.floor(Math.random() * dropPos.length)];
        }
        //event.getMap(EVENT_FIELD).spawnItemDrop(itemId, 1, pos[0], pos[1], false, true);
        event.getMap(EVENT_FIELD).spawnItemDrop(itemId, 1, pos[0], pos[1]);
        droped.push(pos[0]);
    }
    broadcastEventNotice(-1, "道具已經生成。");
}

function broadcastEventNotice(type, msg) {
    for (let i = 0; i < members.length; i++) {
        members[i].dropMessage(type, msg);
    }
}

function deinit() {
    for (let i = 0; i < members.length; i++) {
        members[i].changeMap(EXIT_MAP);
    }
}

function descend(x,y){
    return y[1] - x[1];  //按照數組的第4個值升序排列
}