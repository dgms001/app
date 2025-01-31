
//var ee = "#fEffect/CharacterEff/1051296/1/0#";
var ee = "";
var XC01 = "#fUI/NameTag.img/medal/175/w#";// - BURNING(左)
var XC02 = "#fUI/NameTag.img/medal/175/c#";// - BURNING(中)
var XC03 = "#fUI/NameTag.img/medal/175/e#";// - BURNING(右)

let minPlayers = 1;
let maxPlayers = 4;
let minLevel = [200];
let maxLevel = [300];
let maxenter = [500];
let BossName = ["次元入侵"];
let PQLog = ["次元入侵"];
let event = ["InvasionEvent"];
let onlyOne = true;
let itemss = 4001832;	//入場道具
let itemss2 = 5000;		//消耗數量
//let startmap = 800021112;
let startmap = 104000000;
var pointsId = 167200;
var XC01 = "#fUI/NameTag.img/medal/175/w#";// - BURNING(左)
var XC02 = "#fUI/NameTag.img/medal/175/c#";// - BURNING(中)
var XC03 = "#fUI/NameTag.img/medal/175/e#";// - BURNING(右)

// if (map.getId() == startmap) {
var json = getEventPoints(pointsId);
var points = json.points == undefined ? 0 : json.points;//目前積分
var Ranking = RankingName(points);
var text = "\t\t\t      #fs32##b#e#fc0xFFF0F90A#【" + BossName + "】\r\n"
text += "" + XC01;
for (var i = 0; i <= 240; i++) {
    text += XC02;
};
text += XC03 + "\r\n"
text += "#n#fs16##fc0xFF02FC9B#";
text += "人數限制:[" + minPlayers + "-" + maxPlayers + "]  次數限制:[無限 進場消耗#v4001832#*5000]\r\n";
text += "入場等級:[" + minLevel + "-" + maxLevel + "]\r\n";
text += "#b總計10輪,怪物會隨機掉落(#v4002000##v4002001##v4002002#),\r\n";
text += "每輪也有全員獎勵(#v4002000##v4002001##v4002002#),10圓夢經驗,30公會貢獻點\r\n";
text += "#v4002000#用來升級RED卷軸 #v4002001#用來升級X卷軸 #v4002002#用來升級V卷軸\r\n";
text += "";
text += "";
//text = "#L0#" + ee + " 進入次元入侵（狀態：#e" + "開啟" + "#n）。#l\r\n";
text += "\t\t\t\t  #fs20##g#L0##e" + ee + " 進入次元入侵#l\r\n";
//text += "#L1#" + ee + " #d利用碎片兌換次元手套。#l\r\n"
//text += "#L2#" + ee + " 聽取說明。#l\r\n"
//text += "#L4#" + ee + " #r全服玩家段位排位榜。#k#l\r\n"
//text += "#L999#" + ee + "#b 段位商店#l\r\n"
var sel = npc.askMenuA(text, true);
if (sel == 0) {
    var text = "";
    for (let i = 0; i < BossName.length; i++) {
        text += "\r\n#b#L" + i + "#申請進入#r<Boss：" + BossName[i] + ">#b#l#k";
    }
    //let sel = npc.askMenu("從楓之谷世界入侵格蘭蒂斯，次元入侵的罪魁禍首是誰呢 \r\n" + text, 9020009);
    if (party == null || player.getId() != party.getLeader()) {
        npc.sayNext("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.並且等級在" + minLevel[sel] + "~" + maxLevel[sel] + "范圍,\r\n那麼請讓你的組隊長和我對話吧!", 9020009);
    } else if (party.getNotHasItemMember(itemss, itemss2)) {
        npc.sayNext("你隊友有人#v4001832#不足#r" + itemss2 + "#k個", 9020009);
    } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
        npc.sayNext("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.!", 9020009);
    } else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
        npc.sayNext("你隊員的等級要在" + minLevel[sel] + "~" + maxLevel[sel] + "范圍!請確認!", 9020009);
    } else if (party.getMembersCount(map.getId(), 1, 300) < party.getMembersCount()) {
        npc.sayNext("好像有隊員在其他地方，請把隊員都召集到這裡！", 9020009);
    } else if (!party.isAllMembersAllowedPQ(PQLog[sel], maxenter[sel])) {
        npc.sayNext("你隊員#r#e" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]) + "#n#k次數已經達到上限了。", 9020009);
    } else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
        npc.sayNext("已經有隊伍在進行了,請更換其他頻道嘗試。", 9020009);
    }
    //npc.broadcastPlayerNotice(12,"隊長:" + player.getName() + "帶領成員進入次元入侵!");
    npc.broadcastPlayerNotice(12, "【" + BossName + "】 " + player.getName() + " 帶領成員進入！！");


} else if (sel == 1) {
    player.runScript("shoutaoduihuan");
} else if (sel == 999) {
    player.runScript("gradingShop");
} else if (sel == 4) {
    npc.say(Ranking1())
} else if (sel == 5) {
    var text = "\r\n";
    text += "#g【最強王者榮耀】 #b可領取 (全屬性100)#r#v1112941# #b\r\n";
    text += "#g【超凡大師】 #b可領取 #v2431992#[暴君交換卷]\r\n";
    text += "#r【鑽石Ⅰ】 #b可領取 #r#v2431989#[150武器]#b \r\n";
    text += "#r【鑽石Ⅱ】 #b可領取 #v2431996#[150高貴防具]#b \r\n";
    text += "#r【鑽石Ⅲ】 #b可領取 #v2431996#[150高貴防具]#b \r\n";
    text += "#r【鑽石Ⅳ】 #b可領取 #v2431996#[150高貴防具]#b \r\n";
    text += "#r【鑽石Ⅴ】 #b可領取 #v2431297#[1000萬 破功]#b \r\n";
    text += "#r【白金Ⅰ】 #b可領取 #v2048717# #bx 3  \r\n";//#r| 6001 - 6500
    text += "#r【白金Ⅱ】 #b可領取 #v2048717# #bx 2  \r\n";//#r| 5501 - 6000
    text += "#r【白金Ⅲ】 #b可領取 #v2048717# #bx 1  \r\n";//#r| 5001 - 5500
    text += "#r【白金Ⅳ】 #b可領取 #v2048717# #bx 1  \r\n";//#r| 4501 - 5000
    text += "#r【白金Ⅴ】 #b可領取 #v2048717# #bx 1  \r\n";//#r| 4001 - 4500
    text += "#r【黃金Ⅰ】 #b可領取 #v4001715# #bx 3  \r\n";//#r| 3501 - 4000
    text += "#r【黃金Ⅱ】 #b可領取 #v4001715# #bx 2  \r\n";//#r| 3201 - 3500
    text += "#r【黃金Ⅲ】 #b可領取 #v4001715# #bx 1  \r\n";//#r| 2901 - 3200
    text += "#r【黃金Ⅳ】 #b可領取 #v4001715# #bx 1  \r\n";//#r| 2601 - 2900
    text += "#r【黃金Ⅴ】 #b可領取 #v4001715# #bx 1  \r\n";//#r| 2301 - 2600
    text += "#r【白銀Ⅰ】 #b可領取 #v4001714# #bx 90 \r\n";//#r| 2001 - 2300
    text += "#r【白銀Ⅱ】 #b可領取 #v4001714# #bx 80 \r\n";//#r| 1801 - 2000
    text += "#r【白銀Ⅲ】 #b可領取 #v4001714# #bx 70 \r\n";//#r| 1601 - 1800
    text += "#r【白銀Ⅳ】 #b可領取 #v4001714# #bx 60 \r\n";//#r| 1401 - 1600
    text += "#r【白銀Ⅴ】 #b可領取 #v4001714# #bx 50 \r\n";//#r| 1201 - 1400
    text += "#r【青銅Ⅰ】 #b可領取 #v4001714# #bx 40 \r\n";//#r| 1001 - 1200
    text += "#r【青銅Ⅱ】 #b可領取 #v4001714# #bx 30 \r\n";//#r| 801 - 1000 
    text += "#r【青銅Ⅲ】 #b可領取 #v4001714# #bx 20 \r\n";//#r| 501 - 800  
    text += "#r【青銅Ⅳ】 #b可領取 #v4001714# #bx 10 \r\n";//#r| 301 - 500  
    text += "#r【青銅Ⅴ】 #b可領取 #v4001714# #bx 5  \r\n";//#r| 101 - 300  
    npc.say("- #e#d排位獎勵如下：#n#k" + text);
} else if (sel == 2) {
    //npc.say("- #e#d副本介紹#n#k\r\n#b副本開啟後勝利獲得5點積分，游戲死亡則通關失敗，失敗則扣分掉段位並退出副本。副本通關後會隨機贈送#r次元手套A、B、C、D碎片#b，碎片可以兌換次元手套等高級獎勵。副本可以1-6人組隊進入。副本每日10次。並且段位按照全服排名制全服列出。\r\n- #e#d段位介紹#n#k\r\n#r目前分別為：戰力5渣渣(0-100)、青銅(101-1200)、白銀(1201-2300)、黃金(2301-4000)、白金(4001-6500)、鑽石(6501-11000)、超凡大師(11001-15000)、最強王者榮耀(15000以上)。各分段可以領取不同的獎勵。最強王者榮耀可以獲得#b#t1112941##r一個。");
    npc.askMenuA("- #e副本介紹 -#n#k#b\r\n消耗#v4001832##r5000#b個，不限場次，1-3人\r\n#b副本開啟後每輪施放祭壇>怪物>Boss 共十波次，\r\n個人死亡3次則自動離場。\r\n每波次皆有全員獎勵,額外獲得每日#r30#b次主線任務#r10#b經驗,公會#r30#b點貢獻\r\n怪物與Boss掉落#v4002000##v4002001##v4002002#分別強化#rR X V#b卷", true);
} else if (sel == 3) {
    var Ranking = RankingReward(points)[1];//得到獎勵id
    var MissonId = pointsId + RankingReward(points)[0];//得到任務id
    var qty = RankingReward(points)[2];//得到數量
    switch (Ranking) {
        case 0:
            npc.say("對不起，目前沒有該段位可以領取。");
            break;
        default:
            if (!player.canGainItem(Ranking, qty)) {
                npc.say("請您多準備幾個背包空格");
            } else if (getEventValue(MissonId, "查總數") >= 1) {
                npc.say("每人每個段位只能領取一次。");
            } else {
                setEventValue(MissonId, 1);
                if (RankingReward(points)[0] == 27) {
                    var toDrop = player.makeItemWithId(Ranking);
                    toDrop.setStr(100); //裝備力量
                    toDrop.setDex(100); //裝備敏捷
                    toDrop.setInt(100); //裝備智力
                    toDrop.setLuk(100); //裝備運氣
                    toDrop.setPad(100); //物理攻擊
                    toDrop.setMad(100); //魔法攻擊 
                    toDrop.setTitle("[最強王者]");
                    player.gainItem(toDrop);
                    npc.broadcastNoticeWithoutPrefix("[系統公告] : 恭喜 " + player.getName() + " 獲得最強王者獎勵 ！");
                } else {
                    player.gainItem(Ranking, qty);
                }
                npc.say("恭喜你獲得了該段位的獎勵。\r\n#i" + Ranking + "# #t" + Ranking + "# x " + qty + "");
            }

            break;
    }
}

// } else {
// let ret = npc.askYesNo("#e<Boss：次元入侵>#n\r\n\r\n你想要現在就離開這裡嗎？", 9020009);
// if (ret == 1) {
// player.changeMap(startmap);
// }
// }



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

function RankingReward(points) {
    if (points >= 0 && points <= 100) {
        return Array(0, 0, 0);
    }
    if (points >= 101 && points <= 300) {
        return Array(1, 4001714, 5);
    }
    if (points >= 301 && points <= 500) {
        return Array(2, 4001714, 10);
    }
    if (points >= 501 && points <= 800) {
        return Array(3, 4001714, 20);
    }
    if (points >= 801 && points <= 1000) {
        return Array(4, 4001714, 30);
    }
    if (points >= 1001 && points <= 1200) {
        return Array(5, 4001714, 40);
    }
    if (points >= 1201 && points <= 1400) {
        return Array(6, 4001714, 50);
    }
    if (points >= 1401 && points <= 1600) {
        return Array(7, 4001714, 60);
    }
    if (points >= 1601 && points <= 1800) {
        return Array(8, 4001714, 70);
    }
    if (points >= 1801 && points <= 2000) {
        return Array(9, 4001714, 80);
    }
    if (points >= 2001 && points <= 2300) {
        return Array(10, 4001714, 90);
    }
    if (points >= 2301 && points <= 2600) {
        return Array(11, 4001715, 1);
    }
    if (points >= 2601 && points <= 2900) {
        return Array(12, 4001715, 1);
    }
    if (points >= 2901 && points <= 3200) {
        return Array(13, 4001715, 1);
    }
    if (points >= 3201 && points <= 3500) {
        return Array(14, 4001715, 2);
    }
    if (points >= 3501 && points <= 4000) {
        return Array(15, 4001715, 3);
    }
    if (points >= 4001 && points <= 4500) {
        return Array(16, 2048717, 1);
    }
    if (points >= 4501 && points <= 5000) {
        return Array(17, 2048717, 1);
    }
    if (points >= 5001 && points <= 5500) {
        return Array(18, 2048717, 1);
    }
    if (points >= 5501 && points <= 6000) {
        return Array(19, 2048717, 2);
    }
    if (points >= 6001 && points <= 6500) {
        return Array(20, 2048717, 3);
    }
    if (points >= 6501 && points <= 7000) {
        return Array(21, 2431297, 1);
    }
    if (points >= 7001 && points <= 8000) {
        return Array(22, 2431996, 1);//找不到
    }
    if (points >= 8001 && points <= 9000) {
        return Array(23, 2431996, 1);//找不到
    }
    if (points >= 9001 && points <= 10000) {
        return Array(24, 2431996, 1);//找不到
    }
    if (points >= 10001 && points <= 11000) {
        return Array(25, 2431989, 1);
    }
    if (points >= 11001 && points <= 14999) {
        return Array(26, 2431992, 1);
    }
    if (points >= 15000) {
        return Array(27, 1112941, 1);
    }
}



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

//flag = true 查總的不重置
//flag = false 查當天的
function getEventValue(event1, flag) {
    var charInfo = getCharInfo();
    var sql;
    if (flag == "查總數") {
        sql = "select sum(value) as numbe from zz_event where accounts_id = " + parseInt(charInfo.accounts_id) + " and event = '" + event1 + "' and world =" + parseInt(charInfo.world) + " ";
    } else {
        sql = "select sum(value) as numbe from zz_event where accounts_id = " + parseInt(charInfo.accounts_id) + " and event = '" + event1 + "' and world =" + parseInt(charInfo.world) + " AND DATE_FORMAT(time, '%Y-%m-%d') = DATE_FORMAT(NOW(), '%Y-%m-%d') ";
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
    var sql = "insert into zz_event(accounts_id, world, `event`,`value`,time) values(" + charInfo.accounts_id + "," + charInfo.world + ",'" + event1 + "'," + value1 + ",now())";

    player.customSqlInsert(sql);
}

function getCharInfo() {
    var sql = "select accounts_id,world from characters where id = " + player.getId() + "";
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


function state(pro) {
    switch (pro) {
        case "2":
        case "5":
        case "8":
        case "11":
            return 0;
            break;
        case "3":
        case "6":
        case "9":
        case "12":
            return 0;
            break;
        case "4":
            return 1;//證明過了一個關卡了
        case "7":
            return 2;//證明過了一個關卡了
        case "10":
            return 3;//證明過了一個關卡了
            break;
        case "13"://任務完成部分
            return 999;
            break;
    }
}

function Ranking1() {
    var sql = " SELECT * FROM eventTimes where eventid = " + pointsId + " ORDER BY points DESC LIMIT 20";
    var Text = "排名如下：(1~20名次)\r\n\r\n#d"
    var resultList = player.customSqlResult(sql);
    var endDate = null;
    for (var i = 0; i < resultList.size(); i++) {
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        Text += "#fUI/UIToolTip.img/Item/Equip/Star/Star# 名次:" + (i + 1) + "\r\n角色名:" + result.get("cName") + "\r\n段位:" + RankingName(result.get("points")) + "\r\n"
        Text += "____________________________\r\n"
    }
    return Text;
}

function getPartyBossLog(idx) {
    var idStr = "";
    for (var key in idx) {
        if (key == 0)
            idStr += idx[key];
        else
            idStr += "," + idx[key];
    }
    var sql = "SELECT max(count) as maxcount FROM pqlog where pqname = '次元入侵' and characterid in (" + idStr + ") and to_days(time) = to_days(now());";
    ////java.lang.System.out.println(sql);
    var conn = cm.getConnection();
    var pstmt = conn.prepareStatement(sql);
    bosslogSql = pstmt.executeQuery();
    if (bosslogSql.next()) {
        return bosslogSql.getString("maxcount") * 1;
    }
    bosslogSql.close();
    pstmt.close();
    //conn.close();
    return 0;
}