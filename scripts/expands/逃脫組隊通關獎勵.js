/**
 * 逃脫獎勵  
 **/

let now = getEventValue("通關逃脫組隊", false);
let max = 3;//最大領獎次數
let chance = 60;//額外抽到東西的機率

if (max > now) {

    //通用獎勵
    player.gainItem(5060048, 8);
	player.gainItem(5060032, 5);
	player.gainItem(5064400, 2);
	player.gainItem(4032053, 1500);
    if ((now + 1) % 5 == 0) {
        let ran = Math.random() * 100;
        if (ran < chance) {
            //player.gainGachaponItem("[逃脫組隊]", 4001714, 1, 1);
        }
    }
    //player.changeMap(100000000);
	setEventValue("通關逃脫組隊", 1, 1);


    npc.broadcastPlayerNotice(15, "[逃脫組隊]: " + player.getName() + " 今日已成功通關逃脫組隊" + (now + 1) + "次,獲得大量獎勵！(賬號每日" + max + "次)");
} else {
    player.showSystemMessage("今日已經領取了" + max + "次獎勵,無法再次領取");
}


function getHyPay(type) {
    let sql = "select * from hypay where accname = '" + getAccountName() + "'";
    let push = player.customSqlResult(sql);
    let pay = "";
    if (push.size() > 0) {
        let result = push.get(0);
        if (type == 1) {
            pay = result.get("pay");
        } else if (type == 2) {
            pay = result.get("payUsed");
        } else if (type == 3) {
            pay = result.get("payReward");
        }
    } else {
        player.customSqlInsert("INSERT INTO `hypay` (`accname`, `name`) VALUES ('" + getAccountName() + "', '" + player.getName() + "')");
        return getHyPay(1);
    }

    return pay;
}

function getAccountName() {
    let i = -1;
    let sql = "select name,id from accounts where id=" + player.getAccountId() + " order by name limit 1;";
    let push = player.customSqlResult(sql);
    let name = "";
    if (push.size() > 0) {
        let result = push.get(0);
        name = result.get("name");
    }
    return name;
}

function gainHyPay(count) {
    let sql = "update hypay set pay =pay+? where accname = '" + getAccountName() + "';";
    player.customSqlUpdate(sql, count);
}


//flag = true 查總的不重置
//flag = false 查當天的
function getEventValue(event1, flag) {
    var charInfo = getCharInfo();
    if (flag) {
        var sql = "select sum(value) as numbe from zz_xr_event where accounts_id = " + parseInt(charInfo.accounts_id) + " and event = '" + event1 + "' and world =" + parseInt(charInfo.world) + " ";
    } else {
        var sql = "select sum(value) as numbe from zz_xr_event where accounts_id = " + parseInt(charInfo.accounts_id) + " and event = '" + event1 + "' and world =" + parseInt(charInfo.world) + " AND DATE_FORMAT(time, '%Y-%m-%d') = DATE_FORMAT(NOW(), '%Y-%m-%d') ";
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
    var sql = "insert into zz_xr_event(accounts_id, world, `event`,`value`,time) values(" + charInfo.accounts_id + "," + charInfo.world + ",'" + event1 + "'," + value1 + ",now())";
    player.customSqlInsert(sql);
}

function getCharInfo() {
    var sql = "SELECT accountid accounts_id,world FROM characters where id = " + player.getId() + "";
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
