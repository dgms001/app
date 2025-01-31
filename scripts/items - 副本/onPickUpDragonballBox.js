let MAC = getMac();
MAC = MAC.substring(0, MAC.indexOf("@"))
let mapA = map.getId();
if (mapA == 993001100) { //限制開啟地圖
    //player.showSystemMessage("在卡BUG頭蓋骨給你打出來 操!!");
} else if (player.getEventValue("檢測多開") == 0) {
    npc.say("由於遊戲要檢測,如果你沒有多開請把賬號ID私聊給GM\r\n#r賬號ID:" + player.getAccountId() + "\r\n如果你已經私聊夜間GMID的話請推文領取一個盒子雙季開啟在領每日,如果沒有請先去把ID給夜間GM");
} else if (getvalue() > 0) {
    player.loseItem(npc.getItemId())
    npc.say("檢測到你有多開行為,請使用賬號ID為:" + getIdLog() + "的賬號領取每日福利");
} else if (player.getFreeSlots(2) < 5 || player.getFreeSlots(3) < 5 || player.getFreeSlots(4) < 5 || player.getFreeSlots(5) < 5) {
    npc.say("#fs14##b請先確保欄位都空5格以上!");
} else {
    player.gainItem(2049323, 50);
    player.gainItem(2633336, 1);
    player.gainItem(4009454, 1500);
    player.gainItem(4032053, 400);
    player.gainItem(4000444, 6000);
    player.gainItem(4009004, 15);
    player.gainItem(4009411, 10);
    player.gainItem(5062026, 20);
    player.loseItem(npc.getItemId())
    player.addEventValue("每日福利檢測", 1, 1);
    npc.broadcastPlayerNotice(37, "玩家" + player.getName() + " 獲得了每日4檔福利,當天不領隔天箱子自動刪除");
    if (getvalue() == 0) {
        insertitems(MAC, 1);
    } else {
        updateitems(MAC, 1);
    }
}
function getMac() {
    var sql = "select email from accounts where id = ? ";
    var result = player.customSqlResult(sql, player.getAccountId());
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("email");
        }
    } else {
        return 0;
    }
}
function updateitems(name, value) {
    var sql = "update dgms_AllworldLog SET AllValue = AllValue+" + value + " where AllName = '" + name + "' AND ID = '" + player.getAccountId() + "';"; //疑問 有兩個分號;
    player.customSqlUpdate(sql);
}
function insertitems(name, value) {
    var sql = "insert into dgms_AllworldLog(AllValue,AllName,ID) values('" + value + "','" + name + "','" + player.getAccountId() + "')";
    player.customSqlInsert(sql);
}

function getvalue() {
    var sql = "select AllValue from dgms_AllworldLog where AllName = ? ";
    var result = player.customSqlResult(sql, MAC);
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("AllValue");
        }
    } else {
        return 0;
    }

}
function delvalue() {
    var sql = "delete from dgms_AllworldLog where ID='" + player.getAccountId() + "'";
    player.customSqlUpdate(sql);

}
function getIdLog() {
    var sql = "select ID from dgms_AllworldLog where AllName = ? ";
    var result = player.customSqlResult(sql, MAC);
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("ID");
        }
    } else {
        return 0;
    }

}
