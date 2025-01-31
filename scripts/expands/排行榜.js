/* global cm */

var status = -1;
var tz13 = "#fEffect/ItemEff/1070069/effect/walk1/2#"; //藍星
var tz11 = "#fMap/MapHelper.img/weather/starPlanet2/5#"; //彩心
var a3 = "#fEffect/ItemEff/1070069/effect/walk1/2#";
var text = "#fs24##e#r      " + tz13 + " #fc0xFFFF4EFF#【排 行 榜】" + tz13 + "    #b\r\n#fs18#";
text += "\t\t\t#L2#" + tz11 + "全服充值排行榜" + tz11 + "#l\r\n\r\n";
text += "\t\t\t#L0#" + tz11 + "世界等級排行榜" + tz11 + "#l\r\n\r\n";
text += "\t\t\t#L4#" + tz11 + "世界富豪排行榜" + tz11 + "#l\r\n\r\n";
text += "\t\t\t#L5#" + tz11 + "種植高手排行榜" + tz11 + "#l\r\n\r\n";
//text += "\t\t\t#L6#" + tz11 + "破功高手排行榜" + tz11 + "#l\r\n\r\n";
text += "\t\t\t#L7#" + tz11 + "B O S S 排行榜" + tz11 + "#l\r\n\r\n";
let selection = npc.askMenuA(text,true);
if (selection == 0) {
    //等級排行
    var sql = "select name,level,gender from characters where gm<=0 order by level desc, exp desc limit 30;";
    var resultList = player.customSqlResult(sql);
    var text = "\t\t  #e#r#fs24##fc0xFFFF4EFF#"+a3+"【等級排行】"+a3+"#k#n\r\n\r\n#fs18#";
    text += "\t\t     #b#e名次    #n#e#g等級#n\t#e#r名稱#n\t #e #n\r\n";
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
        text += "\t\t\t   #b" + rank + "\t  #g";
        // 填充名字空格

        for (var j = 18 - result.get("name").length; j > 0; j--) {
            text += "";
        }
        text += result.get("level") + "#r\t  ";

        text += result.get("name") + "\t";
        text += "\r\n";
    }
    npc.askMenuA(text,true);

} else if (selection == 4) {
    //財富排行
    var sql = "select name,money,gender from characters where gm<=0 order by money desc, exp desc limit 20;";
    var resultList = player.customSqlResult(sql);
    var text = "\t\t  #e#r#fs24##fc0xFFFF4EFF#"+a3+"【財富排行】"+a3+"#k#n\r\n\r\n#fs18#";
    text += "\t\t     #b#e名次    #n#e#g金錢#n   #e#r名稱#n\t #e #n\r\n";
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
        text += "\t\t\t   #b" + rank + "\t  #g";
        // 填充名字空格
        
		text += " #g" + parseInt(result.get("money") / 104000000) + "億   #r";
		text += result.get("name");
        var name = result.get("name").toString();

        
        text += "\r\n";
    }
    npc.askMenuA(text,true);

} else if (selection == 2) {
    //財富排行
    var sql = "select accname,leiji from hypay where accountid <>25  order by leiji desc limit 50;";
    var resultList = player.customSqlResult(sql);
    var text = "\t\t\t\t#e#d★ 充值總排行 ★#k#n\r\n\r\n";
    text += "\t#e名次#n\t#e玩家昵稱#n\t\t\t#e充值金額#n\t\t #e #n\r\n";
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
        text += "\t " + rank + "\t\t ";
        // 填充名字空格
        text += result.get("accname");
        var name = result.get("accname").toString();
        for (var j = 18 - name.length; j > 0; j--) {
            text += " ";
        }
        text += "\t " + parseInt(result.get("leiji"));
        text += "\r\n";
    }
    npc.askMenuA(text,true);

} else if (selection == 5) {
    //花園
    var sql = "select g.`level` level,c.`name` name from zcustom_garden as g ,characters as c where g.charid=c.id order by g.`level` desc limit 6";
    var resultList = player.customSqlResult(sql);
    var text = "\t\t  #e#r#fs24##fc0xFFFF4EFF#"+a3+"【種植排行】"+a3+"#k#n\r\n\r\n#fs18#";
    text += "\t\t   #b#e名次    #n#e#g花園等級#n     #e#r名稱#n\t #e #n\r\n";
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
        text += "  \t\t#b     " + rank + "\t#g";
        // 填充名字空格
		text += "\t   " + result.get("level").toString();
        text += "\t\t #r"+RuinString(" ", 5, result.get("name").toString());
        
        
		
		
        text += "\r\n";
    }
    npc.askMenuA(text,true);

} else if (selection == 6) {
    txt = "";
    var Ranking = player.customSqlResult("SELECT ii.limitBreak, ii.itemid, c.name FROM inventory i, inventory_equip ii, characters c WHERE (c.gm <= 0 AND c.id = i.owner_id AND ii.id = i.id AND limitBreak > 0 AND i.position = -11) ORDER BY limitBreak DESC LIMIT 0, 10;");
    txt += "\t#e#r排名\t\t玩家名字\t\t 頭銜\t\t  圖鑑#k#n\r\n";
    for (i = 0; i < Ranking.size(); i++) {
        Signle = Ranking.get(i);
        txt += "#b\t " + (i + 1) + "\t\t ";
        txt += RuinString(" ", 14, Signle.get("name").toString());
        txt += RuinString(" ", 14, (parseFloat(Signle.get("limitBreak") / 104000000).toFixed(2)+"億").toString());
        txt += "#i" + Signle.get("itemid") + "#";
        txt += "\r\n";
	}
   npc.say(txt);
    } else if (selection == 7) {
		player.runScript("BOSS排行榜");
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


function getpayLog(){
	var sql = "insert into hypay(accountid,name) values("+player.getAccountId()+",'"+player.getName()+"')";
	player.customSqlInsert(sql);
}
//getpayLog();//第一次插入sql
