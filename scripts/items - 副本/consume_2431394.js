//4是其他欄 3是裝飾欄
var nowca = java.util.Calendar.getInstance();//取時間
var nowday = nowca.get(java.util.Calendar.DATE);//獲取日
var NowFormat = parseInt(endmonthDate());//獲取該月日(字符)轉換成(數值int)

var needitem = 2632756;
var item = Array(
	Array(2433575, 3),//榮耀
	//Array(2633922,3),//AS防具
	Array(2049323, 40),//命運
	Array(2630512, 8),//創世結晶
	Array(4009454, 1500),//恢復卷
	Array(4032053, 400),//自選箱
	Array(4000444, 6000),//附加
	Array(4009004, 10),//AUT
	Array(4009411, 3),//ARC
	Array(5062026, 15)//閃耀方塊

);

let mapA = map.getId();
if (mapA == 993001100) { //限制開啟地圖
	//player.showSystemMessage("在卡BUG頭蓋骨給你打出來 操!!");
} else {
	text = "";
	text += "#e\t\t\t#fs18#女神認證每日福利:\r\n#n";
	text += "#fs14##b";
	for (let i = 1; i < item.length; i++) {
		text += "#v" + item[i][0] + "##z" + item[i][0] + "#*" + item[i][1] + "\r\n";
	}
	text += "#fs16##r";
	text += "#L1#點我領取#l";
	text += "\r\n";
	text += "";
	text += "";
}

let sel = npc.askMenuS("" + text, true);

if (sel == 1) {
	if (player.getEventValue("女神每日") > 0) {
		player.loseItem(needitem, 1);
		npc.say("今天已經領過了");
	} else if (player.getFreeSlots(2) < 10 || player.getFreeSlots(3) < 10 || player.getFreeSlots(4) < 10 || player.getFreeSlots(5) < 10) {
		npc.say("#fs14##b請先確保欄位都空10格以上!");
	} else {
		for (let i = 1; i < item.length; i++) {
			player.gainItem(item[i][0], item[i][1]);
		}
		player.loseItem(needitem, 1);
		npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "領取了認證女生每日福利");

		player.addEventValue("女神每日", 1, 1);

		npc.say("#fs14##b獲得好多東西~");
	}



}



function endmonthDate() {
	let date = new Date();
	let month = date.getMonth() + 1;
	let strDate = 30;
	if (month == 2) {
		strDate = "28";
	}
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
		strDate = "31";
	}
	let currentdate = strDate;
	return currentdate;
}







