date = new Date();
let week = date.getDay();
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();
var winLog = Array(
    "不要慫,滿倉,就是幹!",
    "瀑布算個球,富貴險中求 ",
    "一幣一別墅,一幣一嫩模!",
    "不加倉,不拋售,不做波段,不聽任何消息,不被任何利空利好忽悠,為的就是練就一顆沈寂的心,此法叫做佛系炒幣!",);
var loseLog = Array(
    "一入幣圈深似海,從此節操是路人!",
    "幣圈一天,人間一年!",
    "贏了會所嫩模,輸了下海幹活",
    "韭菜、醒醒!起來接盤了!",);
var chance = Math.floor(Math.random() * 100);
var chanceS = getMinAndMax(500, 1500);
//npc.say(""+getALLmoney()+"");
var JG = (getmoney() - getPastmoney());
//BOOM();
if (minute == 0 && ifopen() == 1) {
    updateopen(1, 0);
} else if (minute == 1 && ifopen() == 0) {
    //if (hour == 1 || hour == 3	|| hour == 6 || hour == 7 || hour == 11 || hour == 12 || hour == 14 || hour == 16 || hour == 18 || hour == 20 || hour == 22  || hour == 24 ) {
    if (hour == 1 || hour == 3 || hour == 6 || hour == 7 || hour == 8 || hour == 11) {
        if (JG >= 1000 && JG <= 5999) {
            var chanceS = 0;
            updateitems(1, getALLmoney() * 0.001); //更新最新價格
            npc.broadcastPlayerNotice(37, "[圓夢幣]機構進場蕪湖起飛~");
        } else if (JG >= 6000 && JG <= 9999) {
            var chanceS = 0;
            updateitems(1, getALLmoney() * 0.002); //更新最新價格
            npc.broadcastPlayerNotice(37, "[圓夢幣]有大買手正在提高幣價,註意風險");
        } else if (JG >= 10000 && JG <= 99999) {
            var chanceS = 0;
            updateitems(1, getALLmoney() * 0.003); //更新最新價格
            npc.broadcastPlayerNotice(37, "[圓夢幣]有大買手正在提高幣價,註意風險");
        } else if (JG >= 100000) {
            var chanceS = 0;
            updateitems(1, getALLmoney() * 0.004); //更新最新價格
            npc.broadcastPlayerNotice(37, "[圓夢幣]這不閉著眼睛都能掙幣?");
        } else if (JG <= -1000 && JG >= -5999) {
            var chanceS = 0;
            updateitems(1, -getALLmoney() * 0.004); //更新最新價格
            npc.broadcastPlayerNotice(34, "[圓夢幣]有人正在做空幣架,註意風險");
        } else if (JG <= -6000 && JG >= -9999) {
            var chanceS = 0;
            updateitems(1, -getALLmoney() * 0.005); //更新最新價格
            npc.broadcastPlayerNotice(34, "[圓夢幣]有機構正在做空,大家快跑!");
        } else if (JG <= -10000 && JG >= -19999) {
            var chanceS = 0;
            updateitems(1, -getALLmoney() * 0.006); //更新最新價格
            npc.broadcastPlayerNotice(34, "[圓夢幣]有機構正在做空,大家快跑!");
        } else if (JG <= -20000) {
            var chanceS = 0;
            updateitems(1, -getALLmoney() * 0.007); //更新最新價格
            npc.broadcastPlayerNotice(34, "[圓夢幣]現在不跑越虧越慘,今天一套房明天就套牢!!!");
        }
    }
    if (chance <= 50) { //win
        var i = getMinAndMax(0, 3);
        updateitem(1, getmoney()) //更新價格到過去式
        updateitems(1, chanceS); //更新最新價格
        insertitems(getALLmoney());
        npc.broadcastPlayerNotice(37, "[圓夢幣]" + winLog[i] + "");
        updateopen(1, 1);
    } else {
        var i = getMinAndMax(0, 3);
        updateitem(1, getmoney()) //更新價格到過去式
        updateitems(1, -chanceS); //更新最新價格
        insertitems(getALLmoney());
        updateopen(1, 1);
        npc.broadcastPlayerNotice(34, "[圓夢幣]" + loseLog[i] + "");
    }
}
function updateitems(id, sl) { //更新總額度 +-
    var sql = "update dgms_usdt SET ALLmoney = ALLmoney+" + sl + " where ID = '" + id + "';"; //疑問 有兩個分號;
    player.customSqlUpdate(sql);
}

function updateitem(id, sl) { //更新歷史額度 +-
    var sql = "update dgms_usdt SET PastAllsl = '" + sl + "' where ID = '" + id + "';"; //疑問 有兩個分號;
    player.customSqlUpdate(sql);
}

function getmoney() { //獲取總幣數量
    var sql = "select Allsl from dgms_usdt where ID = ? ";
    var result = player.customSqlResult(sql, 1);
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("Allsl");
        }
    } else {
        return 0;
    }

}
function getPastmoney() { //獲取過去總幣數量
    var sql = "select PastAllsl from dgms_usdt where ID = ? ";
    var result = player.customSqlResult(sql, 1);
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("PastAllsl");
        }
    } else {
        return 0;
    }

}
function getALLmoney() { //獲取筆價
    var sql = "select ALLmoney from dgms_usdt where ID = ? ";
    var result = player.customSqlResult(sql, 1);
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("ALLmoney");
        }
    } else {
        return 0;
    }

}
function phb() {
    var sql = "select id,PastALLmoney from dgms_usdtLog where ID >0 order by ID desc, ID desc limit 10";
    var resultList = player.customSqlResult(sql);
    var text = "\t\t  #e#r#fs24##fc0xFFFF4EFF#【近期查閱】#k#n\r\n\r\n#fs18#";
    text += "     #b#e近期    #n#e#g價格#n#n\t #e #n\r\n";
    for (var i = 0; i < resultList.size(); i++) {
        var rank = i + 1;
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        if (rank == 1) {
            text += "#b";
        } else if (rank == 2) {
            text += "#b";
        } else if (rank == 3) {
            text += "#b";
        }
        text += "\t   #b" + rank + "\t  #r";
        for (var j = 18 - result.get("id").length; j > 0; j--) {
            text += "";
        }
        text += result.get("PastALLmoney") + "#r\t  ";

        //text += result.get("id") + "\t";
        text += "\r\n";
    }
    npc.askMenuS(text, true);
}
function insertitems(value) { //歷史記錄log
    //var sql = "insert into dgms_usdtLog(ID,PastALLmoney) values('" + id + "','" + value + "')";
    var sql = "insert into dgms_usdtLog(PastALLmoney) values('" + value + "')";
    player.customSqlInsert(sql);
}
function getMinAndMax(minVal, maxVal) { //隨機 最大值 最小值
    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}
function ifopen() { //判斷開啟 0為開啟
    var sql = "select ifopen from dgms_usdt where ID = ? ";
    var result = player.customSqlResult(sql, 1);
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("ifopen");
        }
    } else {
        return 0;
    }

}
function updateopen(id, ifopen) { //開啟狀態 0 開  1關
    var sql = "update dgms_usdt SET ifopen = '" + ifopen + "' where ID = '" + id + "';"; //疑問 有兩個分號;
    player.customSqlUpdate(sql);
}


/* function BOOM() {
    if (getmoney() - getPastmoney() > 80000) {
        updateitem(1, getmoney()) //更新價格到過去式
        updateitems(1, - getALLmoney() - 29999); //更新最新價格
        insertitems(getALLmoney());
        npc.broadcastPlayerNotice(34, "[圓夢幣]嚴重違規已經套死,三次後筆架歸零!!![2]");
        npc.runScript(npc.getId());
    }
} */

//npc.broadcastWeatherEffectNotice(5,"[test]我來看看這個能有多長我來看看這個能有多長我來看看這個能有多長我來看看這個能有多長我來看看這個能有多長我來看看這個這個這個這個這個!!",5000); //35[特效 1-???] 1000[1秒]
