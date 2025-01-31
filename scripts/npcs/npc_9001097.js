/**
 *
 *
 */


let event = npc.getEvent();
if (event != null && player.isQuestCompleted(15351)) {
    let number = player.getIntQuestRecordEx(15325, "4");
    if (number <= 0) {
        if (getWorkerCount() < 5) {
            var text = "你好，要是你能支付我#r1000#k貨幣的話，那我可以為你服務！";
            let ret = npc.askYesNo(text);
            if (ret == 1) {
                if (modifyCoin(1000)) {
                    player.startQuest(15351, 0);
                    hireWorker(4);
                    player.useSkillEffect(80001964, 1, -1);
                    npc.say("好的！那就為你服務了！");
                } else {
                    npc.say("真可惜你沒有那麼多貨幣！！");
                }
            }
        } else {
            npc.say("當前已有5個搬運工了，無法再僱傭！");
        }
    }
}


function modifyCoin(number) {
    var rCount = number;
    if (getCoin() + getSaveCoin() >= number) {
        if (getSaveCoin() >= number) {
            rCount -= number;
            player.updateQuestRecordEx(15324, "scount", String(Math.max(0, getSaveCoin() - number)));
        } else if (number > getSaveCoin()) {
            rCount -= getSaveCoin();
            player.updateQuestRecordEx(15324, "scount", "0");
        }
        if (rCount > 0) {
            player.updateQuestRecordEx(15324, "count", String(Math.max(0, getCoin() - rCount)));
        }
        return true;
    }
    return false;
}

function getCoin() {
    var ret = 0;
    var data = player.getQuestRecordEx(15324, "count");
    if (data != null) {
        ret = Number(data);
    }
    return ret;
}

function getSaveCoin() {
    var ret = 0;
    var data = player.getQuestRecordEx(15324, "scount");
    if (data != null) {
        ret = Number(data);
    }
    return ret;
}

function getWorkerCount() {
    var ret = 0;
    for (var i = 0; i < 5; i++) {
        var data = player.getQuestRecordEx(15325, String(i));
        if (data != null) {
            ret += Number(data);
        }
    }
    return ret;
}

function hireWorker(type) {
    var data = player.getQuestRecordEx(15325, String(type));
    if (data != null) {
        var count = Number(data);
        player.updateQuestRecordEx(15325, String(type), String(Math.min(5, Math.max(0, count + 1))));
    } else {
        player.updateQuestRecordEx(15325, String(type), "1");
    }
    updateTradeKingInfo();
}

function fireWorker(type) {
    var data = player.getQuestRecordEx(15325, String(type));
    if (data != null) {
        var count = Number(data);
        player.updateQuestRecordEx(15325, String(type), String(Math.max(0, count - 1)));
        updateTradeKingInfo();
        return true;
    }
    return false;
}


function updateTradeKingInfo() {
    var data = player.getQuestRecordEx(15326);//推車
    var type = 0;
    if (data != null) {
        type = Number(data);
    }
    var maxWeight = 10 + (type * 10);
    for (let i = 0; i < 5; i++) {
        data = player.getQuestRecordEx(15325, String(i));
        if (data != null) {
            var workerNum = Number(data);
            var addWeight = getTradeKingWeightAdd(i) * workerNum;
            maxWeight += addWeight;
        }
    }
    player.updateQuestRecordEx(15324, "mWeight", String(maxWeight));
}

function getTradeKingWeightAdd(type) {
    switch (type) {
        case 0:
            return 10;
        case 1:
            return 20;
        case 2:
            return 10;
        case 3:
            return 15;
        case 4:
            return 25;
        default:
            return 10;
    }
}
