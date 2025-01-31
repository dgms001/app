let minPlayers = 1;
let maxPlayers = 1;
let minLevel = [275];
let maxLevel = [300];
let maxenter = [999];
let BossName = ["創世忍苦"];
let PQLog = ["創世忍苦"]; //Seren
let event = ["創世忍苦"];
let onlyOne = true;
let startmap = 410000670;
//false不進行廣播 true進行進入副本廣播
let warn = true;

var XC01 = "#fUI/NameTag.img/274/w#"; // - 石靈名牌戒指(左)
var XC02 = "#fUI/NameTag.img/274/c#"; // - 石靈名牌戒指(中)
var XC03 = "#fUI/NameTag.img/274/e#"; // - 石靈名牌戒指(右)


var text = "";
text += "\t\t  #fs20##b#e#fc0xFFCC13AB#【Boss - " + bossname + "】\r\n#fs17#";
text += "" + XC01;
for (var i = 0; i <= 120; i++) {
    text += XC02;
};
text += XC03 + "\r\n";
text += "#fs18#";
text += "\t  通關獎勵(帳號限定)\r\n      [#v4032053##v4001713##v2633634##v4000850##v4034622##v4310260#]\r\n";

for (var i = 0; i < PQLog.length; i++) {
    text += "#b#L" + i + "#" + PQLog[i] + " [#r" + player.getPQLog(event[i]) + "#fc0xFFCC13AB#/#b" + maxenter[i] + "]#l";
}
text += "#b   #L999#排行榜#l";
text += "\r\n";
let sel = npc.askMenu("" + text, true);
if (sel == 999) {
    phb();
} else if (party == null || player.getId() != party.getLeader()) {
    npc.sayNext("#fs18##e#b\t  請玩家先創建隊伍\r\n\t #fs14#此副本接受#r[" + minPlayers + "-" + maxPlayers + "]#b人的隊伍\r\n\t  並且等級在#r[" + minLevel[sel] + "-" + maxLevel[sel] + "]#b之間\r\n\t   讓你的隊長和我對話吧!", true);
} else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
    npc.sayNext("#fs17##e#b你需要有一個#r" + minPlayers + "-" + maxPlayers + "#b人的隊伍.!", true);
} else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < party.getMembersCount(map.getId(), 1, 300)) {
    npc.sayNext("#fs17##e#b你隊員的等級要在#r[" + minLevel[sel] + "-" + maxLevel[sel] + "]#b之間!", true);
} else if (party.numberOfMembersInChannel() < party.getMembersCount()) {
    npc.say("#fs17##e#b好像你有隊員在其他地方,請把隊員都召集到這裡!");
} else if (!party.isAllMembersAllowedPQ(event[sel], maxenter[sel])) {
    npc.sayNext("#fs17##e#b你隊員#r[" + party.getNotAllowedMember(event[sel], maxenter[sel]) + "]#b次數已經達到上限了。", true);
} else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
    npc.sayNext("#fs17##e#b已經有隊伍在進行了,請更換其他頻道嘗試。", true);
} else {
    if (warn) {
        //npc.broadcastPlayerNotice(8, "[BOSS提示] : " + player.getName() + " 隊伍人數：" + party.getMembersCount() + " 進入了 [" + BossName + "]副本。");
    }
}
function phb() {
    var sql = "select * from (select playersName,min(`time`) as `time` from dgms_bossinfo where bossName='創世忍苦' group by playersName) t order by t.`time` ASC limit 10 "
    var resultList = player.customSqlResult(sql);
    var bossName1 = "創世忍苦";
    var str = new String(bossName1);
    var bytesCount = 0,
        n;
    for (var dd = 0, n = str.length; dd < n; dd++) {
        var c = str.charCodeAt(dd);
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
            bytesCount += 1;
        } else {
            bytesCount += 2;
        }
    }

    if (bytesCount < 14) {
        for (var ii = 0; ii < 14 - bytesCount; ii++) {
            if (ii % 2 == 0) {
                bossName1 += " ";
            } else {
                bossName1 = " " + bossName1;
            }
        }
    }

    var text = "#fs18##e#r\t   #b" + bossName1 + "#fs14#\r\n";

    for (var i = 0; i < resultList.size(); i++) {
        var result = resultList.get(i);
        var rank = i + 1;
        var m = Math.floor(parseFloat(result.get("time")) / 60);
        var s = Math.floor(parseFloat(result.get("time")) % 60);
        if (rank == 1) {
            text += "\t#r第" + rank + "名 #d耗時:" + m + "分" + s + "秒 #b玩家:" + result.get("playersName") + "\r\n"
        } else if (rank == 2) {
            text += "\t#d第" + rank + "名 #d耗時:" + m + "分" + s + "秒 #b玩家:" + result.get("playersName") + "\r\n"
        } else if (rank == 3) {
            text += "\t#g第" + rank + "名 #d耗時:" + m + "分" + s + "秒 #b玩家:" + result.get("playersName") + "\r\n"
        } else {
            text += "\t#k第" + rank + "名 #d耗時:" + m + "分" + s + "秒 #b玩家:" + result.get("playersName") + "\r\n"
        }

    }
    npc.say(text, 3003307);
}