
var accounts_id_ERROR = Array(//列入關注名單 
	2287,2285,2289,2310,2753
	);
	
	
		var sql = "SELECT	a.character_id,	a.map,	a.channel, a.accounts_id FROM	(accounts	INNER JOIN zz_q100904s_log  AS a ON accounts.id = a.accounts_id) INNER JOIN characters ON accounts.id = characters.accounts_id WHERE	accounts.loggedin = 3 	AND accounts.clientkey = characters.clientkey			AND a.map NOT BETWEEN 871000000 AND 871100030    AND a.map <> 103000000 AND a.map <> 103000000 AND a.map <> 100000001 AND a.map <> 100000002 AND a.map <> 100000003 AND a.map <> 100000200 AND a.map <> 749050400 AND a.map <> 925020001 AND a.map <> 951000000 AND a.map <> 200000202 AND a.map <> 101050000 AND a.map <> 103000004 AND a.map <> 220000000 AND a.map <> 410000300 AND a.map <> 875000020 AND a.map <> 104000000 AND a.map <> 105000000 AND a.map <> 910048100 AND a.map <> 273000000 AND a.map <> 224000000 AND a.map <> 103000000 AND a.map <> 450001350 AND a.map <> 200000200 AND a.map <> 802000000 AND a.map <> 993000600 AND a.map <> 230000002 AND a.map <> 104000002 AND a.map <> 120000100 AND a.map <> 103000000 AND a.map <> 865000000 AND a.map <> 240000000 AND a.map <> 230000000 AND a.map <> 230000001 AND a.map <> 400000000 AND a.map <> 410004001 AND a.map <> 925020000 AND a.map <> 450003100 AND a.map <> 103041000 AND a.map <> 450003000 AND a.map <> 450002000 AND a.map <> 450001000 AND a.map <> 101000000 AND a.map <> 200000301 AND a.map <> 450006130 AND a.map <> 270000000 AND a.map <> 140000000 AND a.map <> 221000000 AND a.map <> 402000000 AND a.map <> 811000999 AND a.map <> 450011320 AND a.map <> 101082000 AND a.map <> 104000004 AND a.map <> 450007040 AND a.map <> 101081300 AND a.map <> 330001900 AND a.map <> 160070000 AND a.map <> 450005100 AND a.map <> 450016000 AND a.map <> 260000000 AND a.map <> 101084000 AND a.map <> 875000000 AND a.map <> 913030000 AND a.map <> 410004002 AND a.map <> 102000000 ORDER BY	characters.id ASC";//只看野圖活動
// var sql = "SELECT	a.character_id,	a.map,	a.channel, a.accounts_id FROM	(accounts	INNER JOIN zz_q100904s_log  AS a ON accounts.id = a.accounts_id) INNER JOIN characters ON accounts.id = characters.accounts_id WHERE	accounts.loggedin = 3 	AND accounts.clientkey = characters.clientkey	ORDER BY	characters.id ASC";//全地圖觀察
//SELECT	characters.id,	characters.map FROM	accounts	INNER JOIN characters ON accounts.id = characters.accounts_id WHERE	accounts.loggedin = 3 	舊版
//SELECT	zz_q100904s_log.character_id,	zz_q100904s_log.map,	zz_q100904s_log.channel FROM	(accounts	INNER JOIN zz_q100904s_log ON accounts.id = zz_q100904s_log.accounts_id) INNER JOIN characters ON accounts.id = characters.accounts_id WHERE	accounts.loggedin = 3 	
//zz_q100904s_log(character_id,quantity,map,channel,time)

var resultList = player.customSqlResult(sql);
var txt = "\t\t#e#fs16#【在線玩家】人數"+online()+"#k#n\r\n\r\n#fs14#";
txt += "頻道無法檢測，只有在地圖打很久怪物有存檔才可飛\r\n";
txt += "不會飛當前新地圖(是角色前次存檔地圖)\r\n";
txt += "#b   ID  地圖  [分流] #r角 色 名 稱  #b\r\n";
accounts_id = false;
for (var i = 0; i < resultList.size(); i++) {
	var rank = i + 1;
	var result = resultList.get(i);
	if (result == null) {
		break;
	}
	for (var j=0; j < accounts_id_ERROR.length; j++) {
		if(result.get("accounts_id") == accounts_id_ERROR[j]){ 
			txt += "#e#r ";
			accounts_id = true;
		}
	}
	// txt += "#L"+result.get("map")+"#"+result.get("character_id") + " ";
	txt += "#b#L"+result.get("character_id") +"#"+result.get("character_id") + " ";
	numbers = (""+result.get("character_id")+"");
	for (var j = 5 - numbers.length; j > 0; j--) {
		txt += " ";
	}
	txt += " "+result.get("map")+" ";
	
	txt += "[ "+result.get("channel")+" ] ";
	
	numbers = (""+getNAME(result.get("id"))+"");
	for (var j = 6 - numbers.length; j > 0; j--) {
		// txt += " ";
	}
	
	if(accounts_id){ 
		txt += "#r ";
		accounts_id = false;
	}
	
	txt += result.get("accounts_id") + " #n#r";
	
	txt += getNAME(result.get("character_id")) + "  ";
	
	
	txt += "#l\r\n";
	// player.showSystemMessage(result.get("map")+ getNAME(result.get("id")) +"");
}


let sel = npc.askMenuS(txt, true);
	// player.changeMap​(sel);
	var charInfo = getq100904s(sel);
	player.changeMapAndChannel(charInfo.map,charInfo.channel);
	player.showSystemMessage("傳送至 "+charInfo.map+" , 分流 "+charInfo.channel+" 角色: "+getNAME(charInfo.id));




function getNAME(ID) { //拿來排名顯示名稱的
    var sql = "select name from characters where id = '"+ID+"' ";
    var result = player.customSqlResult(sql);
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("name");
        }
    } else {
        return 0;
    }

}

function getGM() { //gm資料庫 防寫入排名跟累積
    var sql = "select gm from characters where id = ?";
    var result = player.customSqlResult(sql,player.getId() );
    if (result.size() > 0) {
        if (result.get(0) != null) {
            return result.get(0).get("gm");
        }
    } else {
        return 0;
    }

}

function online() {
    var i = -1;
    var sql = "SELECT Count(accounts.loggedin) FROM accounts WHERE accounts.loggedin = 3";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        var name = result.get("Count(accounts.loggedin)");
    }

    return name;
}


function getq100904s(getId) {//獲取資料表 至 JS讀取用
    var sql = "SELECT quantity,map,channel,character_id,accounts_id FROM zz_q100904s_log WHERE character_id = " + getId + "";
    var resultList = player.customSqlResult(sql);
    var charInfo = {};
    for (var i = 0; i < resultList.size(); i++) {
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        charInfo.quantity = result.get("quantity");
        charInfo.map = result.get("map");
        charInfo.channel = result.get("channel");
        charInfo.id = result.get("character_id");
        charInfo.accounts_id = result.get("accounts_id");
    }
    return charInfo;
}