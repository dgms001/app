var tz13 = "#fEffect/CharacterEff/1112925/0/0#";  //藍星
var tz11 = "#fEffect/CharacterEff/1112904/0/0#";  //彩心
var eff1 = "#fEffect/CharacterEff/1112924/0/0#";
var eff2 = "#fEffect/CharacterEff/1112925/0/0#";
var a0 = "#fEffect/CharacterEff/1112926/0/0#";//紅色
var a1 = "#fEffect/CharacterEff/1112924/0/0#";//黃色
var a2 = "#fEffect/CharacterEff/1112925/0/0#";//藍色
var a3 = "#fEffect/CharacterEff/1112924/0/1#";//白色空心
var a4 = "#fEffect/CharacterEff/1112925/0/1#";//藍色空心
var a5 = "#fEffect/CharacterEff/1112926/0/1#";//紅色空心
var b1 = "#fItem/Pet/5000485.img/stand0/0#";//
var b2 = "#fItem/Pet/5000415.img/stand0/0#";//
var b3 = "#fItem/Pet/5000490.img/stand0/0#";//
var b4 = "#fItem/Pet/5000491.img/stand0/0#";//
var b5 = "#fItem/Pet/5000492.img/stand0/0#";//
var b6 = "#fItem/Pet/5000494.img/stand0/0#";//
var b7 = "#fItem/Pet/5000469.img/stand0/0#";//
var b8 = "#fItem/Pet/5000484.img/stand0/0#";//
var eff1 = "#fEffect/CharacterEff/1112924/0/0#";
let title = "";

var str = "武陵排行";
str += "\r\n#L100#介紹#l"
str += "\r\n#L101#獎勵#l"
str += "\r\n#L0#全職業排行#l"
//str += "\r\n#L1#新手排行#l"
str += "\r\n#L2#戰士排行#l"
str += "\r\n#L3#魔法師排行#l"
str += "\r\n#L4#弓箭手排行#l"
str += "\r\n#L5#飛俠排行#l"
str += "\r\n#L6#海盜排行#l"

var sel = npc.askMenu(str);
if (sel == 100) {
    npc.say("1")
} else if (sel == 101) {
    player.runScript("全服福利wl")
} else {

    var sql = "SELECT `time` AS `value`,IFNULL(charactername,'') AS `name`,IFNULL(job,'')  AS job FROM zz_dojang";

    if (sel != 0) {
        sql += " where jobtype = " + sel + " "
    }

    sql += " order by `time` asc limit 20"

    var resultList = player.customSqlResult(sql);
    var text = "#fs19##e#k" + b1 + b2 + b3 + b7 + b4 + b5 + b8 + b6 + "\r\n\t\t" + title + "         #fs12#\r\n";
    text += "#b#e   名次#n\t#e玩家暱稱#n         #e時間\t 職業 #n\r\n";

    for (var i = 0; i < resultList.size(); i++) {
        var rank = i + 1;
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        if (rank == 1) {
            text += "#r";
        } else if (rank == 2) {
            text += "#g";
        } else if (rank == 3) {
            text += "#b";
        }
        text += "\t " + rank + "\t\t";

        // 填充名字空格
        var name = result.get("name").toString() + "";
        text += name;

        for (var j = 20 - getByteLen(name); j > 0; j--) {
            text += " ";
        }
        let value = parseInt(result.get("value"));
        if (parseInt(value) < 0) {
            text = text.substring(0, text.length - 1)
        }
        text += value;
        for (var j = 4 - getByteLen(value + ""); j > 0; j--) {
            text += " ";
        }

        text += result.get("job");

        text += "\r\n";
    }
    npc.say(text, 2091011);
}

function getByteLen(val) {
    var str = String(val);
    var bytesCount = 0;
    for (var i = 0, n = str.length; i < n; i++) {
        var c = str.charCodeAt(i);
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
            bytesCount += 1;
        } else {
            bytesCount += 2;
        }
    }
    return bytesCount;
}