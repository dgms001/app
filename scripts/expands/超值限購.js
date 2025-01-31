var a = 0;
var text;
var selects; //記錄玩家的選項
var buynum = 0;
var itemlist = Array(

	//Array(5074000,0, 10),



	Array(2632486, 500, 5,    "餘額幣限購1"),
	Array(5064502, 3  , 50,  "餘額幣限購2"), //皇家理髮券
	Array(2633609, 60 , 10,  "餘額幣限購3"), //皇家整容券
	Array(2635032, 25  , 50,  "餘額幣限購4"),
	Array(5064400, 1  , 50, "餘額幣限購5"),
	Array(5060068, 20    , 10, "餘額幣限購6"),
	Array(5062021, 1  , 50,  "餘額幣限購7")//五子棋



);

//if(cm.getLevel()>=250){
//	itemlist[2] = Array(5062009,0,500); //
//	itemlist[3] = Array(5062500,0,500); //
//}else if(cm.getLevel()>=240){
//	itemlist[2] = Array(5062009,0,400); //
//	itemlist[3] = Array(5062500,0,400); //
//}else if(cm.getLevel()>=230){
//	itemlist[2] = Array(5062009,0,300); //
//	itemlist[3] = Array(5062500,0,300); //
//}else if(cm.getLevel()>=220){
//	itemlist[2] = Array(5062009,0,200); //
//	itemlist[3] = Array(5062500,0,200); //
//}
text = "#fs21##e#b超值禮包\r\n#r注意:所有物品每日都有限制購買數量\r\n#r";
for (var i = 0; i < itemlist.length; i++) {
	text += "#b#L" + i + "##i" + itemlist[i] + ":##t" + itemlist[i] + "# 價格#r" + itemlist[i][1] + "#b餘額幣 每日限購#r " + (itemlist[i][2] - player.getEventValue(itemlist[i][3])) + "#b 個  \r\n";
	if (i != 0 && (i + 1) % 5 == 0) {
		text += "\r\n";
	}
}
selects = npc.askMenuA(text);
buynum = npc.askNumber("請輸入你請你輸入想要購買的數量\r\n\r\n#r1個需要" + itemlist[selects][1] + "個#r餘額幣#k", 0, 0, 999999);

var yes = npc.askYesNo("你想購買" + buynum + "個#r#i" + itemlist[selects][0] + "##k？\r\n你將使用掉" + (buynum * itemlist[selects][1]) + "餘額幣。");
if (yes == 1) {

	if (player.getLevel() < 250) {
		npc.say("250級以下不能購買");
	} else if (parseInt(player.getEventValue(itemlist[selects][3]) + buynum) > itemlist[selects][2]) {
		npc.say("您今天已經免費獲得了#i" + itemlist[selects][0] + "# " + player.getEventValue(itemlist[selects][3]) + "次.還能購買" + parseInt(itemlist[selects][2] - player.getEventValue(itemlist[selects][0])) + " 次！");
    //} else if (player.hasItem(4310143,buynum * itemlist[selects][1])) {
	} else if (player.hasItem(4009411,buynum * itemlist[selects][1])) {
		if (itemlist[selects][0] == 5062009) {
			if (player.getQuestRecordEx(9615) == 0) {
				player.updateQuestRecordEx(9615, "1");
			}
		}
		player.gainItem(itemlist[selects][0], buynum);
		player.loseItem(4009411,buynum * itemlist[selects][1]);
  
		player.addEventValue(itemlist[selects][3], buynum, 1);
		//player.addHyPay(-buynum * itemlist[selects][1]);
		npc.say("恭喜您成功購買#i" + itemlist[selects][0] + ":# #r#t" + itemlist[selects][0] + "# X " + buynum + "#k。");
	} else {
		npc.say("對不起，你沒有足夠的餘額幣。");
	}
	if (yes == 2) {
		player.changeMap(mapId);
	} else {
		player.runScript("超值限購");

	}
}
function getHyPayleiji() {
	var sql = "select leiji from hypay where accountid = ? ";
	var result = player.customSqlResult(sql, player.getAccountId());
	if (result.size() > 0) {
		if (result.get(0) != null) {
			return result.get(0).get("leiji");
		}
	} else {
		return 0;
	}

}

function addHyPay(price) {
	if (price < 0) {
		price = price * +1;
	}
	var sql = "update hypay set pay=pay+?,payused=payused+" + price + " where accountId=?";
	var result = player.customSqlUpdate(sql, price, player.getAccountId());

}

function addHyPayleji(price) {
	if (price < 0) {
		price = price * -1;
	}
	var sql = "update hypay set leiji=leiji+?,payused=payused+" + price + " where accountId=?";
	var result = player.customSqlUpdate(sql, price, player.getAccountId());

}

function getIDname() {
	var sql = "select name from accounts where id = ? ";
	var result = player.customSqlResult(sql, player.getAccountId());
	if (result.size() > 0) {
		if (result.get(0) != null) {
			return result.get(0).get("name");
		}
	} else {
		return 0;
	}

}
function getAccountName() {
	var i = -1;
	var sql = "select name,id from accounts where id=" + player.getAccountId() + " order by name limit 1;";
	var push = player.customSqlResult(sql);
	if (push.size() > 0) {
		var result = push.get(0);
		var name = result.get("name");
	}

	return name;
}

function gainHyPay(count) {
	var sql = "update hypay set pay =pay+? where accname = '" + getAccountName() + "';";
	player.customSqlUpdate(sql, count);
}
function getpayLog() {
	if (player.getEventLog("餘額幣") == 0) {
		var sql = "insert into hypay(accountid,name,accname) values('" + player.getAccountId() + "','" + player.getName() + "','" + getIDname() + "')";
		player.customSqlInsert(sql);
		player.addEventLog("餘額幣", 1, 999);
	}
}


