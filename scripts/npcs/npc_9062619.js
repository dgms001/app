
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var f2 = "#fUI/CashShop/CSBeauty/hairColor/Enable/2#"
var f3 = "#fUI/CashShop/CSBeauty/hairColor/Enable/3#"
var f4 = "#fUI/CashShop/CSBeauty/hairColor/Enable/4#"
var f5 = "#fUI/CashShop/CSBeauty/hairColor/Enable/5#"
var d1 = "#fUI/UIWindow2.img/Arbeit/11#"//交易记录
var d2 = "#fUI/UIWindow2.img/Arbeit/31#"//我的出售
var d3 = "#fUI/UIWindow2.img/Arbeit/32#"//物品购买
var d4 = "#fUI/UIWindow2.img/Arbeit/33#"//物品寄售
var d5 = "#fUI/UIWindow2.img/Arbeit/7#"//返回选单
date = new Date();
let week = date.getDay();
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();
var g1 = "#fUI/UIWindow2.img/Arbeit/80#"//清理消耗
var g2 = "#fUI/UIWindow2.img/Arbeit/82#"//清理装饰
var g3 = "#fUI/UIWindow2.img/Arbeit/77#"//清理其他
var g4 = "#fUI/UIWindow2.img/Arbeit/79#"//清理特殊
var g5 = "#fUI/UIWindow2.img/Arbeit/81#"//清理装备



text = "\t\t\t\t\t#fs21##e#r現金寄售平台\r\n\r\n";
text += "\t奇數為[購買時段] - 偶數為[寄售時段]\r\n";

//text = "\t    #fs32##fc0xFFE508F3##e"+zx50+"樂豆幣拍賣所"+zx50+"\r\n#n";
//text += "" +p9+p9+p9+p9+p9+p9+p9+p9+p9+p9+p9+p9+p9+p9+p9+ "\r\n";
text += "#e#b";
//text +="\t\t#r每月一號上架清空,自行下架後在上架即可#b\r\n";
if (hour == 1 || hour == 3 || hour == 5 || hour == 7 || hour == 9 || hour == 11 || hour == 13 || hour == 15 || hour == 17 || hour == 19 || hour == 21 || hour == 23) {
	text += "\t\t  #r當前時段為[#g奇數#r]\r\n#b#fs16##e\r\n#n#e#L1#消耗欄物品#l#L7#裝飾欄物品#l#L8#其他欄物品#l#L9#特殊欄物品#l#L10#裝備欄物品#l\r\n\r\n";

}
if (hour == 0 || hour == 2 || hour == 4 || hour == 6 || hour == 8 || hour == 10 || hour == 12 || hour == 14 || hour == 16 || hour == 18 || hour == 20 || hour == 22 || hour == 24) {
	text += "\t\t   #e#r當前時段為[#g偶數#r]#b\r\n\r\n\t\t  #n#L2#物品寄售#l";
}
text += " #L4#我的出售#l\r\n\r\n";
if (player.isGm()) {
	text += "      \t\t\t#L3#交易記錄#l\r\n\r\n";
}
//text +="\t\t\t\t  #L5#提現申請#l   \r\n";
//text +="#r   玩家需注意,提領楓幣金額別超過20e,不然會有問題\r\n";
//text += "\t\t\t    #L6##r返回選單#l\r\n\r\n";
text += "";
text += "";
var sel = npc.askMenuA(text, true);
var commission = 0.2;
if (sel == 1) {
	player.runScript("new_購買消耗欄")
} else if (sel == 2) {
	var text = "#fs21##e#b請選擇你要寄售的道具類型:\r\n\r\n\r\n\r\n";
	//text+= "#d寄售特殊欄位的物品時\r\n請先至 雜項功能 >> 道具疊加\r\n\r\n";
	text += "#r#L1#消耗欄#l #L2#其他欄#l#L3#裝飾欄#l #L4#特殊欄#l #L5#裝備欄#l ";
	//
	var type = npc.askMenuA(text);
	if (type == 1) {
		player.runScript("new_寄售卷軸")//消耗欄
	} else if (type == 2) {
		player.runScript("new_寄售其他欄")//其他欄
	} else if (type == 3) {
		player.runScript("new_寄售裝飾欄")//裝飾欄
	} else if (type == 4) {
		player.runScript("new_寄售特殊欄")//特殊欄
	} else if (type == 5) {
		player.runScript("new_寄售裝備欄")//裝備欄
	}
} else if (sel == 3) {
	player.runScript("new_成交記錄")
} else if (sel == 4) {
	player.runScript("new_我的出售記錄")
} else if (sel == 5) {//可把這裡移植到領取裡面
	var number = npc.askNumber("請輸入你要提領的楓幣,\r\n您目前拍賣所的楓幣為:#r" + getRMB() + "\r\n", 1, 1, getRMB());
	if (number <= getRMB()) {
		var yes = npc.askYesNo("您是否要進行申請提領 #r" + number + "#k 楓幣。");
		if (yes == 1) {
			loseRMB(-number,);
			player.gainMesos(number);
			npc.say("楓幣增加 #r" + number + "");
		}
	} else {
		npc.say("操作出現問題.");
	}
} else if (sel == 6) {
	player.runScript("本服菜單")
} else if (sel == 7) {
	player.runScript("new_購買裝飾欄")
} else if (sel == 8) {
	player.runScript("new_購買其他欄")
} else if (sel == 9) {
	player.runScript("new_購買特殊欄")
} else if (sel == 10) {
	player.runScript("new_購買裝備欄")
}

function loseRMB(rmb, coin) {
	var myAccountName = getAccountName();
	var sql = "insert into dgms_rmb(account, rmb, paytime,remark) values('" + myAccountName + "'," + rmb + ",now(),'提現申請" + rmb + "現金為" + coin + "RMB')";
	player.customSqlInsert(sql);
}



function getRMB() {
	var sql = " select sum(rmb) rmb from dgms_rmb where    account =  '" + getAccountName() + "' ";
	var resultList = player.customSqlResult(sql);
	var coin = 0;
	if (null != resultList) {
		for (var i = 0; i < resultList.size(); i++) {
			var result = resultList.get(i);
			if (result == null) {
				break;
			}
			coin = result.get("rmb");
			break;
		}
	}
	if (coin == null) {
		coin = 0;
	}
	return coin;
}

function getAccountName() {
	var sql = "select name from accounts where id = (select accounts_id from characters where id = " + player.getId() + ");";
	var resultList = player.customSqlResult(sql);
	var accountName = 0;
	for (var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		if (result == null) {
			break;
		}
		var accountName = result.get("name");
	}
	return accountName;
}

