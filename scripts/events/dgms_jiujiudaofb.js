/**
 * dgms_jiujiudaofb
 *
 * @author
 */

let EXIT_MAP = 450002023; //exit
let START_MAP = 921171200; //副本地圖
let time = 10 * 60 * 1000; //總時間
let PQLog = "jiujiudaofb"; //日誌記錄

let party;
let members;
let endTime;
let map;

let nowPercent = 50; //初始進度
let nowCount = 0; //當前是第幾個食譜了
let downPercentTime = 10 * 1000; //多少時間自動掉1%進度，進度掉為0則失敗

let nowFood;
//食譜配置
var foods = new Array(
    //食譜名字 完成後獲得進度 所需材料
    Array("食譜1", 70,
        //材料ID 材料數量 材料名
        Array(2435860, 20, "清爽爪子/清淡鬃毛"),
        Array(2435856, 20, "甜甜蹄子/甜味蹄"),),
    Array("食譜2", 70,
        //材料ID 材料數量 材料名
        Array(2435867, 20, "軟綿綿背殼/柔嫩背殼"),
        Array(2435859, 20, "酸甜皮/酸味皮"),
        Array(2435863, 20, "麻糬腳掌/勁道腳掌"),),
    Array("食譜3", 70,
        Array(2435868, 20, "滑溜羽毛/光滑羽毛"),
        Array(2435864, 20, "硬梆梆腳蹼/硬實鰭"),
        Array(2435860, 20, "清爽爪子/清淡鬃毛")),
    Array("食譜4", 70,
        Array(2435871, 20, "有嚼勁的指甲/有嚼勁的指甲"),
        Array(2435859, 20, "酸甜皮/酸味皮"),
        Array(2435860, 20, "清爽爪子/清淡鬃毛")),
    Array("食譜5", 70,
        Array(2435870, 20, "QQ指甲/QQ指甲"),
        Array(2435864, 20, "硬梆梆腳蹼/硬實鰭"),
        Array(2435859, 20, "酸甜皮/酸味皮")),
    Array("食譜6", 70,
        Array(2435869, 20, "黏黏羽毛/黏黏羽毛"),
        Array(2435862, 20, "軟綿綿腳掌/軟綿綿腳掌"),
        Array(2435860, 20, "清爽爪子/清淡鬃毛")),
    Array("食譜7", 70,
        Array(2435868, 20, "滑溜羽毛/光滑羽毛"),
        Array(2435864, 20, "硬梆梆腳蹼/硬實鰭"),
        Array(2435860, 20, "清爽爪子/清淡鬃毛")),
    Array("食譜8", 70,
        Array(2435865, 20, "滑溜羽毛/光滑羽毛"),
        Array(2435866, 20, "乾巴巴的貝殼/乾巴巴的貝殼"),
        Array(2435860, 20, "酸酸的腳蹼/酸酸的腳蹼")),
    Array("食譜9", 70,
        Array(2435868, 20, "滑溜羽毛/光滑羽毛"),
        Array(2435861, 20, "腥辣爪子/腥辣爪子"),
        Array(2435862, 20, "軟綿綿腳掌/軟綿綿腳掌")),
    Array("食譜10", 70,
        Array(2435858, 20, "油膩膩皮/油膩膩皮"),
        Array(2435864, 20, "硬梆梆腳蹼/硬實鰭"),
        Array(2435857, 20, "火辣提子/火辣提子")),);
//把所有的食材材料ID都在這裡寫一遍，避免副本刪除掉其他東西
var items = [2435856, 2435857, 2435858, 2435859, 2435860, 2435861, 2435862, 2435863, 2435864, 2435865, 2435866, 2435867, 2435868, 2435869, 2435870, 2435871, 2435872]

//記錄當前提交了的食材數量
var submitFoods = {};
//記錄每個玩家當前撿了什麽
var playerOnItems = {};

function init(attachment) {
    party = attachment;
    members = party.getLocalMembers();
    event.setVariable("members", members);
    map = event.getMap(START_MAP);
    map.clearMobs();
    event.startTimer("kick", time);
    endTime = new Date().getTime() + time;
    party.changeMap(START_MAP);
    for (let i = 0; i < members.length; i++) {
        members[i].setEvent(event);
        members[i].addPQLog(PQLog);
        members[i].completeQuest(3102, 0);
    }
    map.showTimer(time / 1000);
    map.blowWeatherEffectNotice("3秒後開始！", 147, 9000);
    event.startTimer("start", 3000);
    event.startTimer("jishu", 3000);
    sendMsg("3秒後開始！")
}

function removePlayer(playerId, changeMap) {
    if (party.getLeader() == playerId) {
        for (let i = 0; i < members.length; i++) {
            members[i].setEvent(null);
            if (changeMap || members[i].getId() != playerId)
                members[i].changeMap(EXIT_MAP);
        }
        event.destroyEvent();
    } else {
        for (let i = 0; i < members.length; i++) {
            if (members[i].getId() == playerId) {
                members[i].setEvent(null);
                if (changeMap)
                    members[i].changeMap(EXIT_MAP);
                members.splice(i, 1);
                break;
            }
        }
    }
}

//開始
function start() {
    sendMsg("<飢餓的武藤>副本正式開始！")
    sendMsg("<飢餓的武藤>副本正式開始！")
    sendMsg("<飢餓的武藤>副本正式開始！")
    map.blowWeatherEffectNotice("開始！", 147, 9000);
    event.startTimer("downPercent", downPercentTime);
    event.startTimer("jishu", 1000);

    next();
}

//下一關
function next() {
    nowCount++;
    getFoodMenu();
}

//獲取菜單
function getFoodMenu() {

    var rand = Math.floor(Math.random() * foods.length);
    nowFood = foods[rand];

    submitFoods = {};
    event.setVariable("submitFoods", submitFoods);

    sendMsg("當前需要完成的食譜: <" + nowFood[0] + ">");
    sendMsg("完成後將增加進度: <" + nowFood[1] + ">");
    sendMsg("需要食材：");
    for (var i = 2; i < nowFood.length; i++) {
        sendMsg(nowFood[i][2] + " x " + nowFood[i][1]);
    }
    sendMsg("註意：每個人身上只能存在一種食材。");
    event.setVariable("nowFood", nowFood);

}

//自動掉進度
function downPercent() {
    sendMsg("古拉正在吞噬食材。。。副本進度-1。。。" + "當前進度 " + nowPercent + "%")
    sendMsg("當前副本時間:" + (time - (endTime - new Date().getTime())) / 1000 + "秒, 600後自動傳出")
    nowPercent = nowPercent - 1;
    if (nowPercent == 0) {
        //失敗
        sendMsg("古拉將食材吞噬完了。。。副本失敗。。。3秒後退出副本。。。");
        event.stopTimers();
        event.startTimer("kick", 3000);
    }
    event.startTimer("downPercent", downPercentTime);
}

function sendMsg(msg) {
    for (let i = 0; i < members.length; i++) {
        members[i].scriptProgressMessage(msg);
        members[i].showSystemMessage(msg);
    }
}

//食譜成功
function successFood() {
    sendMsg("本次食譜已完成！恭喜你們！進度加快" + nowFood[1] + "%!")
    nowPercent += nowFood[1];
    if (nowPercent >= 100) {

        //使用時間 秒
        var passTime = (time - (endTime - new Date().getTime())) / 1000;

        //這裡可以根據通關時間來給與獎勵 秒數
        if (passTime < 250) {
            gainRandomItem();
        } else {
            gainRandomItem();
        }

        sendMsg("恭喜你們完成了<飢餓的武藤>！3秒後將自動退出副本！共花費" + passTime + "秒通關")
        event.stopTimers();
        event.startTimer("kick", 3000);
    } else {
        next();
    }
}

function gainRandomItem() {
    for (let i = 0; i < members.length; i++) {
        if (members[i].getEventValue("" + PQLog + "") > 0) {
            members[i].showSystemMessage("次數不足,自動退場");
        } else {
            members[i].addEventValue(PQLog);
            members[i].gainItem(2634522, 1);
        }
    }
}

function mobDied(mob) {
    //怪物死亡邏輯
}

//撿東西邏輯
function playerPickupItem(player, map, itemId) {
    if (items.indexOf(itemId) != -1) {
        player.loseItem(itemId);
        if (!playerOnItems[player.getName()]) {
            playerOnItems[player.getName()] = {
                "itemId": -1,
                "itemName": 0
            };
        }
        var itemName = player.makeItemWithId(itemId).getItemName();
        player.scriptProgressMessage("撿到了" + itemName);
        player.showSystemMessage("撿到了" + itemName);
        if (playerOnItems[player.getName()].itemId == itemId) {
            playerOnItems[player.getName()].itemNum = playerOnItems[player.getName()].itemNum + 1;
        } else {
            playerOnItems[player.getName()].itemId = itemId;
            playerOnItems[player.getName()].itemNum = 1;
        }
        player.addPopupSay(3003151, 1000, "目前你手上的食材是:" + itemName + "。數量：" + playerOnItems[player.getName()].itemNum, "");
        event.setVariable("playerOnItems", playerOnItems);
    }

}

function playerDisconnected(player) {
    removePlayer(player.getId(), false);
}

function playerChangedMap(player, destination) {
    if (destination.getId() != START_MAP)
        removePlayer(player.getId(), false);
}

function partyMemberDischarged(party, player) {
    removePlayer(player.getId(), false);
}

function timerExpired(key) {
    switch (key) {
        case "kick":
            removePlayer(party.getLeader(), true);
            break;
        case "start":
            start();
            break;
        case "successFood":
            successFood();
            break;
        case "next":
            next();
            break;
        case "downPercent":
            downPercent();
            break;
    }
}

function deinit() {
    for (let i = 0; i < members.length; i++)
        members[i].setEvent(null);
}
