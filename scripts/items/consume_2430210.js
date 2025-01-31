//4是其他欄 3是裝飾欄
var nowca = java.util.Calendar.getInstance();//取時間
var nowday = nowca.get(java.util.Calendar.DATE);//獲取日
var NowFormat = parseInt(endmonthDate());//獲取該月日(字符)轉換成(數值int)

var needitem = 2430210;
var item = Array(
	Array(2433575, 3),//榮耀
	//Array(2633922,3),//AS防具
	Array(4009411, 20),//命運
	Array(4310237, 1)//創世結晶


);

let mapA = map.getId();
if (mapA == 993001100) { //限制開啟地圖
	//player.showSystemMessage("在卡BUG頭蓋骨給你打出來 操!!");
} else {
	text = "";
	text += "#e#r\t\t\t#fs18#祝:大家新年快樂:\r\n#n";
	text += "#fs14##b";
	for (let i = 1; i < item.length; i++) {
		text += "#v" + item[i][0] + "##z" + item[i][0] + "#*" + item[i][1] + "\r\n";
	}
	text += "#fs16##r";
	text += "#v1002720#全屬性100\r\n";
	text += "#v1082101#全屬性100\r\n";
	text += "\t\t\t#L1#點我領取#l";
	text += "\r\n";
	text += "";
	text += "";
}

let sel = npc.askMenuS("" + text, true);

if (sel == 1) {
	if (player.getEventValue("新年賀禮") > 0) {
		player.loseItem(needitem, 1);
		npc.say("今天已經領過了");
	} else if (player.getFreeSlots(2) < 10 || player.getFreeSlots(3) < 10 || player.getFreeSlots(4) < 10 || player.getFreeSlots(5) < 10) {
		npc.say("#fs14##b請先確保欄位都空10格以上!");
	} else {
		for (let i = 1; i < item.length; i++) {
			player.gainItem(item[i][0], item[i][1]);
		}

		player.loseItem(needitem, 1);
		let newItem = player.makeItemWithId(1002720);
		newItem.setTitle("2023新年賀禮");
		newItem.setDex(100);
		newItem.setStr(100);
		newItem.setInt(100);
		newItem.setLuk(100);
		newItem.setMad(100);
		newItem.setPad(100);
		player.gainItem(newItem);
		newItem = player.makeItemWithId(1082101);
		newItem.setTitle("2023新年賀禮");
		newItem.setDex(100);
		newItem.setStr(100);
		newItem.setInt(100);
		newItem.setLuk(100);
		newItem.setMad(100);
		newItem.setPad(100);
		player.gainItem(newItem);
		npc.broadcastPlayerNotice(37, "2023新年快樂  " + player.getName() + " 多啦跟皮卡祝您:新年快樂,闔家幸福安康");
		player.loseItem(2430210, 1);


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







