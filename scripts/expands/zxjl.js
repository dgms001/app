var status = -1;
var text;
var diff;
var sel;
var time;
var aaa = "#fMap/MapHelper.img/weather/starPlanet2/5#";
var aa = "#fUI/UIWindow2.img/crossHunterUI/reward/button/disabled/0#";
var bb = "#fUI/UIWindow2.img/crossHunterUI/reward/button/normal/0#";
var a3 = "#fEffect/ItemEff/1070069/effect/walk1/2#"

// 每個禮包所需的在線時間
var condition = new Array(30, 60, 120, 180, 240, 300, 360, 480, 600, 720, 900, 1020);
var reward = new Array( // 禮包編號、道具id、數量
	//30
	Array(1, 2431738, 200),//楓葉點數兌換卷
	Array(1, 4001839, 20),//星星
	Array(1, 4009411, 1),//再線硬幣
	//Array(1, 2614000, 10),//突破石1萬
	//Array(1, 2340000, 3),//祝福卷軸
	//Array(1, 2430760, 10),//星巖碎片
	Array(1, 4001832, 500),//咒語痕跡
	Array(1, 2710007, 5),//大師工匠的方塊(可交易)上S用
	//Array(1, 2710003, 10),//名匠方塊
	//Array(1, 5062009, 3),//紅色方塊
	//Array(1, 5062010, 3),//黑色方塊

	//60
	Array(2, 2431738, 200),//楓葉點數兌換卷
	Array(2, 4001839, 30),//星星
	Array(2, 4009411, 1),//再線硬幣
	//Array(2, 2614000, 15),//突破石1萬
	//Array(2, 2340000, 3),//祝福卷軸
	//Array(2, 2430760, 10),//星巖碎片
	Array(2, 4001832, 500),//咒語痕跡
	Array(2, 2710007, 5),//大師工匠的方塊(可交易)上S用
	//Array(2, 2710003, 10),//名匠方塊
	//Array(2, 5062009, 3),//紅色方塊
	//Array(2, 5062010, 3),//黑色方塊

	// 120                                    
	Array(3, 2431738, 300),//楓葉點數兌換卷
	Array(3, 4001839, 50),//星星
	Array(3, 4009411, 1),//再線硬幣
	//Array(3, 2614000, 20),//突破石1萬
	Array(3, 2340000, 3),//祝福卷軸
	Array(3, 2430760, 10),//星巖碎片
	Array(3, 4001832, 500),//咒語痕跡
	Array(3, 2710007, 10),//大師工匠的方塊(可交易)上S用
	//Array(3, 2710003, 10),//名匠方塊
	//Array(3, 5062009, 3),//紅色方塊
	//Array(3, 5062010, 3),//黑色方塊               

	// 180
	Array(4, 2431738, 300),//楓葉點數兌換卷
	Array(4, 4001839, 50),//星星
	Array(4, 4009411, 1),//再線硬幣
	//Array(4, 2614000, 25),//突破石1萬
	Array(4, 2340000, 3),//祝福卷軸
	Array(4, 2430760, 10),//星巖碎片
	Array(4, 4001832, 500),//咒語痕跡
	Array(4, 2710007, 10),//大師工匠的方塊(可交易)上S用
	//Array(4, 2710003, 10),//名匠方塊
	//Array(4, 5062009, 3),//紅色方塊
	//Array(4, 5062010, 3),//黑色方塊 

	// 240
	Array(5, 2431738, 400),//楓葉點數兌換卷
	Array(5, 4001839, 100),//星星
	Array(5, 4009411, 1),//再線硬幣
	//Array(5, 2614000, 30),//突破石1萬
	Array(5, 2340000, 5),//祝福卷軸
	Array(5, 2430760, 15),//星巖碎片
	Array(5, 4001832, 500),//咒語痕跡
	//Array(5, 2710007, 10),//大師工匠的方塊(可交易)上S用
	Array(5, 2710003, 5),//名匠方塊
	//Array(5, 5062009, 3),//紅色方塊
	//Array(5, 5062010, 3),//黑色方塊 

	//300
	Array(6, 2431738, 400),//楓葉點數兌換卷
	Array(6, 4001839, 100),//星星
	Array(6, 4009411, 1),//再線硬幣
	//Array(6, 2614000, 35),//突破石1萬
	Array(6, 2340000, 5),//祝福卷軸
	Array(6, 2430760, 15),//星巖碎片
	Array(6, 4001832, 500),//咒語痕跡
	//Array(6, 2710007, 10),//大師工匠的方塊(可交易)上S用
	Array(6, 2710003, 5),//名匠方塊
	//Array(6, 5062009, 3),//紅色方塊
	//Array(6, 5062010, 3),//黑色方塊 

	//360
	Array(7, 2431738, 450),//楓葉點數兌換卷
	Array(7, 4001839, 125),//星星
	Array(7, 4009411, 1),//再線硬幣
	//Array(7, 2614000, 40),//突破石1萬
	Array(7, 2340000, 5),//祝福卷軸
	Array(7, 2430760, 20),//星巖碎片
	Array(7, 4001832, 500),//咒語痕跡
	//Array(7, 2710007, 10),//大師工匠的方塊(可交易)上S用
	Array(7, 2710003, 10),//名匠方塊
	//Array(7, 5062009, 3),//紅色方塊
	//Array(7, 5062010, 3),//黑色方塊 		

	//480
	Array(8, 2431738, 450),//楓葉點數兌換卷
	Array(8, 4001839, 125),//星星
	Array(8, 4009411, 1),//再線硬幣
	//Array(8, 2614000, 45),//突破石1萬
	Array(8, 2340000, 5),//祝福卷軸
	Array(8, 2430760, 20),//星巖碎片
	Array(8, 4001832, 500),//咒語痕跡
	//Array(8, 2710007, 10),//大師工匠的方塊(可交易)上S用
	Array(8, 2710003, 10),//名匠方塊
	//Array(8, 5062009, 3),//紅色方塊
	//Array(8, 5062010, 3),//黑色方塊 

	//600
	Array(9, 2431738, 500),//楓葉點數兌換卷
	Array(9, 4001839, 150),//星星
	Array(9, 4009411, 1),//再線硬幣
	//Array(9, 2614000, 50),//突破石1萬
	Array(9, 2340000, 5),//祝福卷軸
	Array(9, 2430760, 20),//星巖碎片
	Array(9, 4001832, 500),//咒語痕跡
	//Array(9, 2710007, 10),//大師工匠的方塊(可交易)上S用
	Array(9, 2710003, 10),//名匠方塊
	Array(9, 5062009, 5),//紅色方塊
	//Array(9, 5062010, 3),//黑色方塊 
	//720
	Array(10, 2431738, 500),//楓葉點數兌換卷
	Array(10, 4001839, 150),//星星
	Array(10, 4009411, 1),//再線硬幣
	//Array(10, 2614000, 50),//突破石1萬
	Array(10, 2340000, 5),//祝福卷軸
	Array(10, 2430760, 20),//星巖碎片
	Array(10, 4001832, 500),//咒語痕跡
	//Array(10, 2710007, 10),//大師工匠的方塊(可交易)上S用
	Array(10, 2710003, 10),//名匠方塊
	Array(10, 5062009, 5),//紅色方塊
	//Array(10, 5062010, 3),//黑色方塊 
	//900
	Array(11, 2431738, 500),//楓葉點數兌換卷
	Array(11, 4001839, 200),//星星
	Array(11, 4009411, 1),//再線硬幣
	Array(11, 2340000, 10),//祝福卷軸
	//Array(11, 2614000, 50),//突破石1萬
	Array(11, 2430760, 20),//星巖碎片
	Array(11, 4001832, 500),//咒語痕跡
	//Array(11, 2710007, 10),//大師工匠的方塊(可交易)上S用
	Array(11, 2710003, 5),//名匠方塊
	Array(11, 5062009, 5),//紅色方塊
	Array(11, 5062010, 5),//黑色方塊 
	//1020
	Array(12, 2431738, 500),//楓葉點數兌換卷
	Array(12, 4001839, 200),//星星
	Array(12, 4009411, 1),//再線硬幣
	//Array(12, 2614000, 50),//突破石1萬
	Array(12, 2340000, 10),//祝福卷軸
	Array(12, 2430760, 20),//星巖碎片
	Array(12, 4001832, 500),//咒語痕跡
	//Array(12, 2710007, 10),//大師工匠的方塊(可交易)上S用
	Array(12, 2710003, 5),//名匠方塊
	Array(12, 5062009, 5),//紅色方塊
	Array(12, 5062010, 10),//黑色方塊
);

var time = player.getOnlineTime();
var curlevel = -1;

text = "\t\t\t  " + a3 + "#fs24##fc0xFFFF4EFF#【在線獎勵】" + a3 + "#fs18##n#l\r\n#e#b您今天在時間為： #r" + time + " #b分鐘\r\n#e提示：#e#r23 ： 50 #b至#r #e00 ： 10 #b時無法領取在線獎勵。\r\n#b請在 #e#r23：50#b 分前領取當天未領取的獎勵。以免造成損失。\r\n服務中心內還有免費點券可以領哦~\r\n\r\n";
for (var i = 1; i <= condition.length; i++) {
	text += "#b#L" + i + "#" + aaa + " 在線" + condition[i - 1] + "分鐘獎勵";
	if (player.getAccountEventValue("在線禮包" + i) > 0) {
		text += "#g[已領取]#l";
		curlevel = curlevel == -1 ? i : curlevel;
	}
	text += "#l\r\n";
}
text += "#k";
let selection = npc.askMenuA(text, true);
// 23:50 ~ 23: 59 前一天不領取的時間  00:00 ~ 00:10 第二天不領取的時間  
var date = new Date();
var hour = date.getHours();
var minute = date.getMinutes();
if ((hour == 23 && (minute >= 50 && minute <= 59)) || (hour == 0 && (minute >= 0 && minute <= 10))) {
	npc.say("#d服務器當前時間： #r" + hour + " 時 " + minute + " 分 #k\r\n\r\n#e#d提示#n#k：#r23 ： 50 #b至#r 00 ： 10 #b時無法領取在線獎勵。#k");
} else if (player.getAccountEventValue("在線禮包" + selection) > 0) {
	npc.say("這個禮包您已經領取過了");
} else {
	text = "\t\t\t\t#e#r- 在線 " + condition[selection - 1] + " 分鐘獎勵 -#k#n\r\n\r\n";

	for (var i = 0; i < reward.length; i++) {
		if (reward[i][0] == selection) {
			if (reward[i][1] == -1) {
				text += "\t\t\t#r點券:   " + reward[i][2] + "#k\r\n";
			} else {
				text += "\t\t\t#i" + reward[i][1] + "# #z" + reward[i][1] + "#[" + reward[i][2] + "個]\r\n";
			}

		}
	}
	let sel = npc.askYesNo(text);
	if (sel == 1) {
		var rewardlist = Array();
		for (var i = 0; i < reward.length; i++) {
			if (reward[i][0] == selection) {
				if (reward[i][3] == null || reward[i][3] == '')
					reward[i][3] = 0;
				rewardlist.push(new Array(reward[i][1], reward[i][2], reward[i][3]));
			}
		}
		if (time < condition[selection - 1]) {
			npc.say("在線時間不足，無法領取。");
			player.runScript("zxjl");

		} else if (!player.getFreeSlots(1) > rewardlist.length) {
			npc.say("包裹空間不足，請確保包裹每個欄位有至少 " + rewardlist.length + " 格空間");

		} else {

			player.addAccountEventValue("在線禮包" + selection, 1);
			for (var i = 0; i < rewardlist.length; i++) {
				if (rewardlist[i][0] == -1) {
					//點券
					player.modifyCashShopCurrency(1, rewardlist[i][1]);
				} else {
					//無期限道具
					player.gainItem(rewardlist[i][0], rewardlist[i][1]);
				}
			}
			npc.broadcastNotice("『在線時間獎勵』" + " : " + "玩家 " + player.getName() + " 領取了在線獎勵。");
			npc.say("領取成功！");
			player.runScript("zxjl");

		}

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