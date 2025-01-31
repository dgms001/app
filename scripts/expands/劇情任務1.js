if (npc.askYesNo("是否領取劇情任務 消亡旅途 的獎勵？一賬號一次") == 1) {

    if (getEventValue("透過消亡的旅途獎勵", true) > 0 || player.getPQLog("透過消亡的旅途獎勵") > 0) {
        npc.say("#d該賬號已經領取了此獎勵")
    } else if (player.getFreeSlots(1) < 4 || player.getFreeSlots(2) < 4 || player.getFreeSlots(3) < 4 || player.getFreeSlots(4) < 2 || player.getFreeSlots(5) < 4) {
        npc.say("包裹空間不足，請確保包裹每個欄位有至少 " + 4 + " 格空間");
    } else if (player.isQuestCompleted(34119)) {

        player.addPQLog("透過消亡的旅途獎勵", 10, 1999);
        setEventValue("透過消亡的旅途獎勵", 1);
       // player.gainItem(1113056, 1);
        player.gainItem(4310065, 10);
        player.gainItem(4310097, 10);
        player.gainItem(4001716, 1);

        npc.broadcastPlayerNotice(3, "[任務公告]：玩家" + player.getName() + "完成了【神祕河-消亡旅途】，現在他可以去特色系統-劇情繫統領取超越證明系列裝備、強化石、金幣等道具啦！");
        npc.say("#d領取成功");
    } else {
        npc.say("#d你需要完成任務  #r《消亡旅途》 #d才可以領取獎勵")
    }
}
//flag = true 查總的不重置
//flag = false 查當天的
function getEventValue(event1, flag) {
    var charInfo = getCharInfo();
    if (flag) {
        var sql = "SELECT SUM(value) AS numbe FROM zz_xr_event WHERE accounts_id = " + parseInt(charInfo.accounts_id) + " and event = '" + event1 + "' and world =" + parseInt(charInfo.world) + " ";
    } else {
        var sql = "SELECT SUM(value) AS numbe FROM zz_xr_event WHERE accounts_id = " + parseInt(charInfo.accounts_id) + " and event = '" + event1 + "' and world =" + parseInt(charInfo.world) + " AND DATE_FORMAT(time, '%Y-%m-%d') = DATE_FORMAT(NOW(), '%Y-%m-%d') ";
    }
    var resultList = player.customSqlResult(sql);
    var count = 0;
    for (var i = 0; i < resultList.size(); i++) {
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        count = result.get("numbe");
        if (count == null) {
            count = 0;
        }
    }
    return parseInt(count);
}

function setEventValue(event1, value1) {
    var charInfo = getCharInfo();
    var sql = "INSERT INTO zz_xr_event(accounts_id, world, `event`,`value`,time) VALUES(" + charInfo.accounts_id + "," + charInfo.world + ",'" + event1 + "'," + value1 + ",now())";
    player.customSqlInsert(sql);
}

function getCharInfo() {
    var sql = "SELECT accountid accounts_id,world FROM characters WHERE id = " + player.getId() + "";
    var resultList = player.customSqlResult(sql);
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