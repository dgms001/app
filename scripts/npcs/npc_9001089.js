/**
 *
 *
 */



let sel = npc.askMenu("我是巨賈哈薩爾！你想要做什麼呢？\r\n#L1##b僱傭搬運工#k#n#l\r\n#L2##b解僱搬運工#k#n#l\r\n#L3##b升級推車#k#n#l\r\n#L4##b儲存貨幣#k#n#l\r\n");
switch (sel) {
    case 1:
        hire();
        break;
    case 2:
        fire();
        break;
    case 3:
        riding();
        break;
    case 4:
        saveCoin();
        break;
}

function hire() {
    if (getWorkerCount() < 5) {
        var text = "來！你需要哪種#b搬運工#k呢？\r\n#e#r持有貨幣：#i4034849#";
        text += getCoin();
        text += "\r\n儲存的貨幣：";
        text += getSaveCoin();
        text += " #n\r\n";
        text += "#L0##v3801023:##b#z3801023# #r#e僱傭費用：100貨幣#k#n#l\r\n";
        text += "#L1##v3801024:##b#z3801024# #r#e僱傭費用：200貨幣#k#n#l\r\n";
        text += "#L2##v3801025:##b#z3801025# #r#e僱傭費用：200貨幣#k#n#l\r\n";
        text += "#L3##v3801026:##b#z3801026# #r#e僱傭費用：300貨幣#k#n#l\r\n";
        text += "#L4##v3801027:##b#z3801027# #r#e僱傭費用：20000貨幣#k#n#l\r\n";
        text += "#L999##b我現在不需要搬運工#k#n#l\r\n";
        let hSel = npc.askMenu(text);

        if (hSel >= 0 && hSel != 999) {
            var infoId = 3801023 + hSel;
            var money = hSel == 0 ? 100 : hSel == 1 ? 200 : hSel == 2 ? 200 : hSel == 3 ? 300 : hSel == 4 ? 20000 : hSel * 100;
            let ret = npc.askYesNo("是否要使用#e#r" + money + "#k貨幣#n僱傭一箇#b#v" + infoId + ":##z" + infoId + "#");
            if (ret == 1) {
                if (player.getLevel() >=1) {
                    hireWorker(hSel);
                    npc.sayNext("好！你僱傭了一箇#b#v" + infoId + ":##z" + infoId + "#");
                } else {
                    npc.sayNext("你沒有足夠的貨幣！！");
                }
            } else {
                npc.sayNext("猶豫不決呀！那等你考慮好了再來！！");
            }
        }
    } else {
        npc.sayNext("當前已有5個搬運工了，無法再僱傭！");
    }
}


function fire() {
    if (getWorkerCount() > 0) {
        var text = "當前已經僱傭#r" + getWorkerCount() + "#k個#b搬運工#k\r\n#e#r請選擇要解僱的搬運工：#n\r\n";
        for (var i = 0; i < 5; i++) {
            var infoId = 3801023 + i;
            var data = player.getQuestRecordEx(15325, String(i));
            if (data != null) {
                var count = Number(data);
                if (count > 0) {
                    text += "#b#L" + i + "##v" + infoId + ":##z" + infoId + "# #r" + count + "#b個#l\r\n";
                }
            }
        }
        text += "#L999##b我現在不想解僱搬運工#k#n#l\r\n";
        let sel = npc.askMenu(text);
        if (sel != 999 && sel >= 0) {
            let infoId = 3801023 + sel;
            let ret = npc.askYesNo("是否要解僱一箇#b#v" + infoId + ":##z" + infoId + "#");
            if (ret == 1) {
                fireWorker(sel);
                npc.sayNext("好！你解僱了一箇#v" + infoId + ":##z" + infoId + "#");
            }
        }
    } else {
        npc.sayNext("你都還沒有僱傭搬運工呢！");
    }
}


function riding() {
    var type = 0;
    var ride = 80001950;
    var infoId = 3801028;
    var rideData = player.getQuestRecordEx(15326);
    if (rideData != null) {
        ride = ride + Number(rideData);
        type = Number(rideData);
    }
    if (ride < 80001952) {
        type += 1;
        let money = type * 500;
        var nextRide = ride + 1;
        var nextInfoId = infoId + type;
        var text = "你現在在使用#b#v" + infoId + ":##b#z" + infoId + "##k啊？\r\n你這個推車再好一點的是";
        text += "#b#v" + nextInfoId + ":##b#z" + nextInfoId + "##k，";
        text += "費用為#r#e" + money + "#k#n個貨幣,你要升級嗎？\r\n";
        text += "持有貨幣：#e#r#i4034849#";
        text += getCoin();
        text += "#n#k\r\n儲存的貨幣：#e#r";
        text += getSaveCoin();
        text += " #n#k\r\n";
        let ret = npc.askYesNo(text);
        if (ret == 1) {
            if (player.getLevel() >=1) {
                var nextRide = 80001950 + type;
                player.cancelSkillEffect(nextRide - 1);
                player.useSkillEffect(nextRide, 1, -1);
                player.updateQuestRecordEx(15326, String(type));
                updateTradeKingInfo();
                npc.sayNext("好了！你的推車已經升級成#b#v" + nextInfoId + ":##b#z" + nextInfoId + "##k!");
            } else {
                npc.sayNext("你沒有足夠的貨幣！！");
            }
        } else {
            npc.sayNext("猶豫不決呀！那等你考慮好了再來！！");
        }
    } else {
        npc.sayNext("你現在在使用#b#v" + infoId + ":##b#z" + infoId + "##k啊！已經不能再升級了！");
    }
}


function saveCoin() {
    npc.sayNext("我這裡可以幫你保管貨幣，只不過，在我這裡儲存過一次貨幣後就無法再次取走，那些貨幣只能用於在我這裡購買#b搬運工和推車#k。");
    var text = "怎麼樣，想要讓我幫忙儲存貨幣，壯大你的生意資本嗎？儲存費用為#i4034849##e#r貨幣50#n#k個\r\n";
    text += "持有貨幣：#i4034849##r#e";
    text += getCoin();
    text += "#n#k\r\n儲存的貨幣：#r#e";
    text += getSaveCoin();
    let ret = npc.askYesNo(text);
    if (ret == 1) {
        if (getCoin() >= 50) {
            player.updateQuestRecordEx(15324, "scount", String(getSaveCoin() + getCoin() - 50));
            player.updateQuestRecordEx(15324, "count", "0");
            npc.sayNext("好啦！儲存的貨幣：#e#r" + getSaveCoin() + "#n#k個！");
        } else {
            npc.sayNext("你好像沒有那麼多的貨幣可以儲存哦！");
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
