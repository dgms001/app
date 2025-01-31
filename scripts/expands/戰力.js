
var tt = "#fEffect/CharacterEff/1082565/0/0#";
var fenge = "#fEffect/ItemEff/1004122/effect/default/8#";

// 每個階段累計福利所需的充值數
var condition = new Array(1000, 3000, 5000, 6500, 7500, 8500, 9000, 10000);
// 累計福利內容
var reward = new Array(
    //戰力壹仟獎勵
	Array(
		Array(4001848, 2),//楓幣
		Array(4032053,2222),//楓幣
		Array(5060086,20),//楓幣
		Array(5060032,10),//楓幣
		Array(5062026,10),//楓幣
		Array(5064502,5),//楓幣
	),
	//戰力2仟獎勵
	Array(
		Array(4001848, 5),//楓幣
		Array(4032053,3333),//楓幣
		Array(5060086,30),//楓幣
		Array(5060032,20),//楓幣
		Array(5062026,20),//楓幣
		Array(5064502,10),//楓幣
	),
    //戰力3仟獎勵
	Array(
		Array(4001848, 10),//楓幣
		Array(4032053,4444),//楓幣
		Array(5060086,40),//楓幣
		Array(5060032,30),//楓幣
		Array(5062026,30),//楓幣
		Array(5064502,15),//楓幣
	),
    //戰力4仟獎勵
	Array(
		Array(4001848, 20),//楓幣
		Array(4032053,5555),//楓幣
		Array(5060086,50),//楓幣
		Array(5060032,40),//楓幣
		Array(5062026,40),//楓幣
		Array(5064502,20),//楓幣
	),
    //戰力5仟獎勵
	Array(
		Array(4001848, 30),//楓幣
		Array(4032053,6666),//楓幣
		Array(5060086,60),//楓幣
		Array(5060032,60),//楓幣
		Array(5062026,50),//楓幣
		Array(5064502,30),//楓幣
	),
    //戰力6仟獎勵
	Array(
		Array(4009411, 200),//餘額
		Array(2049389, 1),//星力
		Array(2644008, 1),//星力
		Array(2431603, 2),//星力
		Array(5062026,60),//楓幣
		Array(5064502,40),//楓幣
	),
    //戰力7仟獎勵
	Array(		
		Array(4009411, 500),//餘額
		Array(2049389, 2),//星力
		Array(2644008, 2),//星力
		Array(2431603, 3),//星力
		Array(5062026,80),//楓幣
		Array(5064502,50),//楓幣
	),
    //戰力8仟獎勵
	Array(
		Array(4009411, 1000),//餘額
		Array(2049389, 3),//星力
		Array(2644008, 3),//星力
		Array(2431603, 5),//星力
		Array(5062026,100),//楓幣
		Array(5064502,80),//楓幣
	),
);

var text;
var revenue;

revenue = player.getMapleUnionLevel();

text = "\t\t\t\t\t\t #e#fs21##r戰地中心#n \r\n\r\n";
text += "   #b#e當前戰地： #g" + revenue + " #d\r\n";

var txt = "";

for (var i = 0; i <= condition.length - 1; i++) {
	if (getEventCount("#b戰地福利" + condition[i]) == 1) {
		txt = "[#r已領取#b]";
	} else {
		if (getEventCount("#b戰地福利" + condition[i]) == 0 && revenue >= condition[i]) {
			txt = "[#b待領取#b]";
		} else if (getEventCount("#b戰地福利" + condition[i]) == 0 && revenue < condition[i]) {
			txt = "[#g未達標#b]";
		}
	}
	text += "#b#L" + i + "#" + tt + txt + " 戰地福利 #r\t\t\t" + condition[i] + "#l\r\n\r\n";
}
text += "#k";
let selection = npc.askMenuA(text);
if (selection == 999) {
	npc.say("講講價");
} else {
	text = "\t\t\t#e#r- 戰地福利" + condition[selection] + "達標獎勵 -#k#n\r\n\r\n";
	for (var i = 0; i < reward[selection].length; i++) {
		text += "\t\t#i" + reward[selection][i][0] + "# #z" + reward[selection][i][0] + "#[" + reward[selection][i][1] + "個]";
		if (reward[selection][i].length > 2) {
			text += "[#r" + reward[selection][i][2] + "#k]\r\n";
		} else {
			text += "\r\n";
		}
	}

	let sel = npc.askYesNo(text);
	if(sel == 1) {
		if(getEventCount("戰力福利" + condition[selection]) == 1) {
			npc.say("#e#r\r\n\r\n\t\t這個禮包您已經領取過了");
		} else if(revenue < condition[selection]) {
			npc.say("戰力未達到" + condition[selection]);	
		} else if(player.getFreeSlots(1) < 5 || player.getFreeSlots(2) < 5 || player.getFreeSlots(3) < 5 || player.getFreeSlots(4) < 5 || player.getFreeSlots(5) < 5) {
			npc.say("每個欄位至少要保持5個空位以上才能領取哦~");	
		} else {
			for (let i = 0; i < reward[selection].length; i++) {
				let itemId = reward[selection][i][0];
				player.gainItem(itemId, reward[selection][i][1])
			}
			setEventCount("戰力福利" + condition[selection], 0, 1);
			npc.broadcastPlayerNotice(7,"[戰地福利] 恭喜玩家 " + player.getName() + " 戰地達到 " + condition[selection] + " 點,領取了戰地福利！！！");
			npc.say("領取成功");
		}
	
	}

}


function getHyPay() {
	var sql = "select payreward from hypay where accname = ? ";

	var result = player.customSqlResult(sql, player.getAccountName());

	if (result.size() > 0) {
		if (result.get(0) != null) {
			return result.get(0).get("payreward");
		}
	} else {
		return 0;
	}

}

function getEventCount(eventName) {

	var sql = "select value,time from accounts_event where accounts_id = ? and event =? ";

	var result = player.customSqlResult(sql, player.getAccountId(), eventName);

	if (result.size() > 0) {
		if (result.get(0) != null) {
			return result.get(0).get("value");
		}
	} else {
		var sql = "insert into  accounts_event (accounts_id,world,event,type,value) values(?,?,?,?,?)";

		var result = player.customSqlInsert(sql, player.getAccountId(), player.getWorld(), eventName, 0, 0);
		return 0;
	}

}

function setEventCount(eventName, type, value) {

	var sql = "update accounts_event set type=?,value=value+? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql, type, value, player.getAccountId(), eventName);

}