/**
 *	無限火力 bydgms qq:381991414
 **/
var ee = "#fEffect/CharacterEff/1051296/1/0#";
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var f2 = "#fUI/CashShop/CSBeauty/hairColor/Enable/2#"
var f3 = "#fUI/CashShop/CSBeauty/hairColor/Enable/3#"
var f4 = "#fUI/CashShop/CSBeauty/hairColor/Enable/4#"
var f5 = "#fUI/CashShop/CSBeauty/hairColor/Enable/5#"
let npcModal = 9062452;
let minPlayers = 1;
let maxPlayers = 1;
let minLevel = [270];
let maxLevel = [300];
let maxenter = [3];
let BossName = ["碎夢塔"];
let PQLog = ["DreamBreak"];
let event = ["content_DreamBreak"];
let onlyOne = true;
var pointsId = 167210;
text = "Welcome to the special trip              " + a38 + "\r\n";

text += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n"
text += "#b限制人數[#r" + minPlayers + "-" + maxPlayers + "#b]  限制等級[#r" + minLevel + "-" + maxLevel + "#b]  限制次數[#r" + player.getEventValue(PQLog) + "/" + maxenter + "#b]\r\n\r\n";
text += "#fs12#血量加成*層數 最低入場等級:" + minLevel + "\r\n\r\n";
text += "#fs12#下次入場起始層數:" + player.getEventValue("碎夢塔") + "層\r\n\r\n";
text += "\t\t\t#b#L0#" + f2 + "開始挑戰#l#k";
//text += "   #b#L1#" + f3 + "排行榜#b#l#k\r\n\r\n";

let sel = npc.askMenu(text, npcModal);
if (sel == 0) {
    var json = getEventPoints(pointsId);
    var points = json.points == undefined ? 0 : json.points;
    if (party == null || player.getId() != party.getLeader()) {
        npc.say("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.並且等級在" + minLevel[sel] + "~" + maxLevel[sel] + "範圍,\r\n那麼請讓你的組隊長和我對話吧!", npcModal);
    } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
        npc.say("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.!", npcModal);
    } else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
        npc.say("你隊員的等級要在" + minLevel[sel] + "~" + maxLevel[sel] + "範圍!請確認!", npcModal);
    } else if (!party.isAllMembersAllowedPQ(PQLog[sel], maxenter[sel])) {
        npc.say("你隊員#r#e" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]) + "#n#k次數已經達到上限了。", npcModal);
    } else if (npc.makeEvent(event[sel], onlyOne, player) == null) {
        npc.say("已經有隊伍在進行了,請更換其他頻道嘗試。", npcModal);
    }
} else if (sel == 1) {
    npc.say(Ranking());
}

function Ranking() {
    var sql = " SELECT * FROM eventTimes where eventid = " + pointsId + " ORDER BY points DESC LIMIT 20";
    var Text = "排名如下：(1~20名次)\r\n\r\n#d"
    var resultList = player.customSqlResult(sql);
    var endDate = null;
    for (var i = 0; i < resultList.size(); i++) {
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        Text += "#fUI/UIToolTip.img/Item/Equip/Star/Star# " + (i + 1) + "   玩家:" + result.get("cName") + "   層數:" + result.get("points") + "\r\n"

    }
    return Text;
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