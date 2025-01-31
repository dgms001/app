//次元入侵

var pointsId = 167200;
var winPoint = 20; //任務全部通過獎勵的段位點。
var p;
/*
 * 戰鬥力5的渣渣：10點
青銅Ⅴ：30點
青銅Ⅳ
青銅Ⅲ
青銅Ⅱ
黃金：80點
白金：100點
鑽石：120點
超凡大師：180點
最強王者：200點
 */

//player.runScript("戴米安獎勵[困難]");
if (player.getEventValue("次元入侵獎勵") > 300) {
} else {
    /*let tt = party.getMembersCount()
    if (tt >= 3) {
        partycount = 1.5;
    } else {
        partycount = 1;
    }*/
    //player.dropMessage(6, "隊伍人數 " + tt + " , 加成 " + partycount + "倍");
    player.gainItem(4033734,5);

    player.changeMap(100000000, 0);
	npc.broadcastPlayerNotice(1, "【次元入侵】:玩家 " + player.getName() + " 今日已成功通關任務" + (now + 1) + "次,獲得大量獎勵！");
    player.showSystemMessage("恭喜你已通關!!!!!");

}
//setEventPoints(pointsId, winPoint);//段位點
//player.changeMap(940020000, 0);


//npc.sayNext("#b段位：#r" + Ranking + "（" + points + "） #b分。\r\n完成任務獲取點數 + #r" + winPoint + "#b。現在傳送出去。");

//var points = getEventPoints(pointsId);//目前積分
//var Ranking = RankingName(points + 20);

//npc.say("- #e#d完成任務#n#k\r\n\r\n#b獲得了 #r" + winPoint + " #b段位點。\r\n目前情況：\r\n段位：#r" + Ranking + "（" + parseInt(points+parseInt(20)) + "） #b分。");

function getEventPoints(eventid) {
    var sql = " SELECT * FROM eventTimes where eventid = ? and cid = ? ";
    var json = {}
    var resultList = player.customSqlResult(sql, eventid, player.getId());
    var endDate = null;
    for (var i = 0; i < resultList.size(); i++) {
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        json.times = result.get("times");
        json.points = result.get("points");
    }
    return json;
}

function setEventPoints(eventid, points) {
    var json = getEventPoints(eventid);
    if (json.points == null) {
        var sql = "INSERT INTO eventTimes(eventid,cid,cName,points,times,date) VALUES(" + eventid + "," + player.getId() + ",'" + player.getName() + "'," + points + ",0,now())"; // 載入數據
        player.customSqlUpdate(sql);
    } else {
        var sql = "update eventTimes set points = points+" + parseInt(points) + " where eventid = ? and cid = ? ";
        player.customSqlUpdate(sql, eventid, player.getId());
    }
}

function RankingName(points) {
    if (points >= 0 && points <= 100) {
        return "戰鬥力5的渣渣";
    }
    if (points >= 101 && points <= 300) {
        return "青銅Ⅴ";
    }
    if (points >= 301 && points <= 500) {
        return "青銅Ⅳ";
    }
    if (points >= 501 && points <= 800) {
        return "青銅Ⅲ";
    }
    if (points >= 801 && points <= 1000) {
        return "青銅Ⅱ";
    }
    if (points >= 1001 && points <= 1200) {
        return "青銅Ⅰ";
    }
    if (points >= 1201 && points <= 1400) {
        return "白銀Ⅴ";
    }
    if (points >= 1401 && points <= 1600) {
        return "白銀Ⅳ";
    }
    if (points >= 1601 && points <= 1800) {
        return "白銀Ⅲ";
    }
    if (points >= 1801 && points <= 2000) {
        return "白銀Ⅱ";
    }
    if (points >= 2001 && points <= 2300) {
        return "白銀Ⅰ";
    }
    if (points >= 2301 && points <= 2600) {
        return "黃金Ⅴ";
    }
    if (points >= 2601 && points <= 2900) {
        return "黃金Ⅳ";
    }
    if (points >= 2901 && points <= 3200) {
        return "黃金Ⅲ";
    }
    if (points >= 3201 && points <= 3500) {
        return "黃金Ⅱ";
    }
    if (points >= 3501 && points <= 4000) {
        return "黃金Ⅰ";
    }
    if (points >= 4001 && points <= 4500) {
        return "白金Ⅴ";
    }
    if (points >= 4501 && points <= 5000) {
        return "白金Ⅳ";
    }
    if (points >= 5001 && points <= 5500) {
        return "白金Ⅲ";
    }
    if (points >= 5501 && points <= 6000) {
        return "白金Ⅱ";
    }
    if (points >= 6001 && points <= 6500) {
        return "白金Ⅰ";
    }
    if (points >= 6501 && points <= 7000) {
        return "鑽石Ⅴ";
    }
    if (points >= 7001 && points <= 8000) {
        return "鑽石Ⅳ";
    }
    if (points >= 8001 && points <= 9000) {
        return "鑽石Ⅲ";
    }
    if (points >= 9001 && points <= 10000) {
        return "鑽石Ⅱ";
    }
    if (points >= 10001 && points <= 11000) {
        return "鑽石Ⅰ";
    }
    if (points >= 11001 && points <= 14999) {
        return "超凡大師";
    }
    if (points >= 15000) {
        return "最強王者榮耀";
    }
}
