/* global cm */
var status = -1;
var ltz45 = "#fMap/MapHelper.img/weather/starPlanet2/5#";  //
var ltz47 = "#fMap/MapHelper.img/weather/starPlanet/4#";  //

var GC2 = "#fEffect/CharacterEff/1022223/2/0#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1112924/0/0#"; //"+z+"//小選項用
var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
var XD0 = "#fEffect/CharacterEff/1051366/0/0#";
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#"; //最上面的
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var f2 = "#fUI/CashShop/CSBeauty/hairColor/Enable/2#"
var f3 = "#fUI/CashShop/CSBeauty/hairColor/Enable/3#"
var f4 = "#fUI/CashShop/CSBeauty/hairColor/Enable/4#"
var f5 = "#fUI/CashShop/CSBeauty/hairColor/Enable/5#"

txt = "\r\n";


txt += "\t\t\t\t\t\t#L0##fs21##e#r等級排行榜#l\r\n\r\n";//#b#L5#戰鬥力排行榜#l

txt += "\t\t\t\t#L1##fs21##e#r公會排行榜#l\r\n\r\n";//#L2#人氣排行榜#l
txt += "\t\t\t\t#L2#人氣排行榜#l\r\n\r\n";
txt += "\t\t\t\t#b#L4##fs21##e#r楓幣排行榜#l\r\n\r\n";
txt += "\t\t\t\t#L3#BOSS排行榜#l\r\n\r\n";
if (player.isGm()) {
    //txt += "\t\t\t #L3#BOSS排行榜#l\r\n\r\n";
}
//txt += "\t\t\t\t #r#L10#返回選單#l\r\n\r\n";


let selection = npc.askMenuA(txt);

if (selection == 0) {
    //等級排行
    var sql = "SELECT DISTINCT characters.`name`, characters.`level` FROM accounts INNER JOIN characters ON accounts.id = characters.accountid WHERE accounts.gm <= 0 AND characters.gm <= 0 ORDER BY characters.`level` DESC, characters.exp DESC LIMIT 100";
    var resultList = player.customSqlResult(sql);
    var txt = "";
    txt += "#fs21##b#e名  次    #g等  級    #r名  稱\r\n";
    for (var i = 0; i < resultList.size(); i++) {
        var rank = i + 1;
        var result = resultList.get(i);
        if (result == null) {
            break;
        }

        if (rank == 1) {
            txt += "#b";
        } else if (rank == 2) {
            txt += "#b";
        } else if (rank == 3) {
            txt += "#b";
        }

        txt += "   #b" + rank + "\t   #g";
        // 填充名字空格
        for (var j = 18 - result.get("name").length; j > 0; j--) {
            txt += "";
        }
        txt += result.get("level") + "#r\t  ";
        txt += result.get("name") + "\t";
        txt += "\r\n";
    }
    npc.askMenuA(txt);
} else if (selection == 1) {
    //公會排行
    var sql = "SELECT characters.`name` AS leadername, guilds.`name` FROM characters, guilds WHERE guilds.leader = characters.id ORDER BY guilds.gp DESC LIMIT 10";
    var resultList = player.customSqlResult(sql);
    var txt = "";
    txt += "#fs21##b#e  排名     #g公會             #r會長\r\n";
    for (var i = 0; i < resultList.size(); i++) {
        var rank = i + 1;
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        if (rank == 1) {
            txt += "#b";
        } else if (rank == 2) {
            txt += "#b";
        } else if (rank == 3) {
            txt += "#b";
        }

        txt += "   #b" + rank + "\t    #g";
        // 填充名字空格
        for (var j = 18 - result.get("name").length; j > 0; j--) {
            txt += "";
        }
        txt += result.get("name") + "#r\t\t";
        txt += result.get("leadername") + "\t";
        txt += "\r\n";
    }
    npc.askMenuA(txt);
} else if (selection == 2) {
    //人氣排行
    var sql = "SELECT DISTINCT characters.`name`, characters.fame FROM accounts INNER JOIN characters ON accounts.id = characters.accountid WHERE accounts.gm <= 0 AND characters.gm <= 0 ORDER BY characters.fame DESC LIMIT 50";
    var resultList = player.customSqlResult(sql);

    var txt = "";

    txt += "#fs21##b#e名  次    #g人  氣    #r名  稱\r\n";
    for (var i = 0; i < resultList.size(); i++) {
        var rank = i + 1;
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        if (rank == 1) {
            txt += "#b";
        } else if (rank == 2) {
            txt += "#b";
        } else if (rank == 3) {
            txt += "#b";
        }
        txt += "   #b" + rank + "\t\t#g ";
        // 填充名字空格
        for (var j = 18 - result.get("name").length; j > 0; j--) {
            txt += "";
        }
        txt += result.get("fame") + "#r\t  ";
        txt += result.get("name") + "\t";
        txt += "\r\n";
    }
    npc.askMenuA(txt);
} else if (selection == 3) {
    player.runScript("BOSS排行榜");
} else if (selection == 4) {
    //楓幣排行
    var sql = "SELECT DISTINCT characters.`name`, characters.meso FROM accounts INNER JOIN characters ON accounts.id = characters.accountid WHERE accounts.gm <= 0 AND characters.gm <= 0 ORDER BY characters.meso DESC LIMIT 10";
    var resultList = player.customSqlResult(sql);
    var txt = "";
    txt += "\t  #fs21##b#e名 次       #g楓 幣       #r名 稱\r\n";
    for (var i = 0; i < resultList.size(); i++) {
        var rank = i + 1;
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        if (rank == 1) {
            txt += "#b";
        } else if (rank == 2) {
            txt += "#b";
        } else if (rank == 3) {
            txt += "#b";
        }
        txt += "\t   #b" + rank + "\t\t#g";
        // 填充名字空格
        txt += " #g" + parseInt(result.get("meso") / 100000000) + "億#r\t  ";
        txt += result.get("name");
        var name = result.get("name").toString();
        txt += "\r\n";
    }
    npc.askMenuA(txt);
} else if (selection == 10) {
    player.runScript("本服菜單");
}
else if (selection == 5) {
    player.runScript("戰鬥力");
}
function RuinString(A, B, C) {
    T = "";
    F = "";
    if (C.length > B) {
        T = C;
    } else {
        for (let i = 0; i < B - String(C).replace(/[\u0391-\uFFE5]/g, "aa").length; i++) {
            F = F + A;
        }
    }
    T = C + F;
    return T;
}
