/* global cm */

var status = -1;
var tz13 = "#fEffect/CharacterEff/1112925/0/0#"; //藍星
var tz11 = "#fEffect/CharacterEff/1112904/0/0#"; //彩心

var text = "#e#b         ┏   " + tz13 + "《榜上有名》" + tz13 + "   ┓ #r\r\n";
text += "\t\t\t#L2#" + tz11 + "全服充值排行榜" + tz11 + "#l\r\n\r\n";
text += "\t\t\t#L0#" + tz11 + "世界等級排行榜" + tz11 + "#l\r\n\r\n";
text += "\t\t\t#L4#" + tz11 + "世界富豪排行榜" + tz11 + "#l\r\n\r\n";
text += "\t\t\t#L5#" + tz11 + "種植高手排行榜" + tz11 + "#l\r\n\r\n";
text += "\r\n#e#b         ┗                      ┛\r\n";
let selection =npc.askMenuS(text);
if(selection == 0) {
	//等級排行
	var sql = "select name,level,gender from characters where gm<=0 order by level desc, exp desc limit 1800;";
	var resultList = player.customSqlResult(sql);
	var text = "\t\t\t\t#e#d★ 個人等級排行 ★#k#n\r\n\r\n";
	text += "\t#e名次#n\t#e玩家昵稱#n\t\t\t#e等級#n\t\t #e #n\r\n";
	for(var i = 0; i < resultList.size(); i++) {
		var rank = i + 1;
		var result = resultList.get(i);
		if(result == null) {
			break;
		}
		if(rank == 1) {
			text += "#r";
		} else if(rank == 2) {
			text += "#g";
		} else if(rank == 3) {
			text += "#b";
		}
		text += "\t " + rank + "\t\t ";
		// 填充名字空格
		text += result.get("name");
		for(var j = 18 - result.get("name").length; j > 0; j--) {
			text += " ";
		}
		text += "\t " + result.get("level");
		text += "\r\n";
	}
	npc.say(text);

}else if(selection == 4) {
	//財富排行
	var sql = "select name,meso,gender from characters where gm<=0 order by meso desc, exp desc limit 1500;";
	var resultList = player.customSqlResult(sql);
	var text = "\t\t\t\t#e#d★ 個人財富排行 ★#k#n\r\n\r\n";
	text += "\t#e名次#n\t#e玩家昵稱#n\t\t\t#e金幣#n\t\t #e #n\r\n";
	for(var i = 0; i < resultList.size(); i++) {
		var rank = i + 1;
		var result = resultList.get(i);
		if(result == null) {
			break;
		}
		if(rank == 1) {
			text += "#r";
		} else if(rank == 2) {
			text += "#g";
		} else if(rank == 3) {
			text += "#b";
		}
		text += "\t " + rank + "\t\t ";
		// 填充名字空格
		text += result.get("name");
		for(var j = 18 - result.get("name").length; j > 0; j--) {
			text += " ";
		}
		text += "\t " + (result.get("meso") / 104000000) + "億";
		text += "\r\n";
	}
	npc.say(text);

} else if(selection == 2) {
	//財富排行
	var sql = "select name,leiji from hypay where accountid <>25  order by leiji desc limit 588;";
	var resultList = player.customSqlResult(sql);
	var text = "\t\t\t\t#e#d★ 充值總排行 ★#k#n\r\n\r\n";
	text += "\t#e名次#n\t#e玩家昵稱#n\t\t\t#e充值金額#n\t\t #e #n\r\n";
	for(var i = 0; i < resultList.size(); i++) {
		var rank = i + 1;
		var result = resultList.get(i);
		if(result == null) {
			break;
		}
		if(rank == 1) {
			text += "#r";
		} else if(rank == 2) {
			text += "#g";
		} else if(rank == 3) {
			text += "#b";
		}
		text += "\t " + rank + "\t\t ";
		// 填充名字空格
		text += result.get("name");
		var name =result.get("name").toString();
		for(var j = 18 - name.length; j > 0; j--) {
			text += " ";
		}
		text += "\t " + parseInt(result.get("leiji")*0.5);
		text += "\r\n";
	}
	npc.say(text);

} else if(selection == 5) {
	//花園
	var sql = "select g.`level` level,c.`name` name from zcustom_garden as g ,characters as c where g.charid=c.id order by g.`level` desc limit 500";
	var resultList = player.customSqlResult(sql);
	var text = "\t\t\t\t#e#d★ 種植高手排行 ★#k#n\r\n\r\n";
	text += "\t#e名次#n\t#e玩家昵稱#n\t\t\t#e花園等級#n\t\t #e #n\r\n";
	for(var i = 0; i < resultList.size(); i++) {
		var rank = i + 1;
		var result = resultList.get(i);
		if(result == null) {
			break;
		}
		if(rank == 1) {
			text += "#r";
		} else if(rank == 2) {
			text += "#g";
		} else if(rank == 3) {
			text += "#b";
		}
		text += "\t " + rank + "\t\t ";
		// 填充名字空格
		text += result.get("name");
		for(var j = 18 - result.get("name").length; j > 0; j--) {
			text += " ";
		}
		text += "\t " + result.get("level");
		text += "\r\n";
	}
	npc.say(text);

} 