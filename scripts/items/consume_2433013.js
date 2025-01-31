//4是其他欄 3是裝飾欄
var nowca = java.util.Calendar.getInstance();//取時間
var nowday = nowca.get(java.util.Calendar.DATE);//獲取日
var NowFormat = parseInt(endmonthDate());//獲取該月日(字符)轉換成(數值int)

var needitem = 2433013;
var item = Array(
	Array(4009411, 10),//元寶
	Array(4009411, 200),//
	Array(2633609, 5),//元寶
	Array(4032216, 10000),//
	Array(4032053, 10000),//
	Array(5060048, 50),//
	Array(5060032, 50),//


	Array(2023744, 20),//
	Array(2023745, 20),//
	Array(5121060, 20),//
	Array(2431603, 3)//
);


var text = "";
text += "#e#fs21##r中秋禮包:\r\n#n";
text += "#fs11##b";
for (let i = 1; i < item.length; i++) {
	text += "#e#fs16##b#v" + item[i][0] + "##z" + item[i][0] + "# #r*" + item[i][1] + "\r\n";
}
text += "#fs21##r";
text += "\t\t\t\t #L1#領取福利#l";
text += "\r\n";



let sel = npc.askMenuA("" + text, true);

if (sel == 1) {
	if (player.getFreeSlots(2) < 10 || player.getFreeSlots(3) < 10 || player.getFreeSlots(4) < 10 || player.getFreeSlots(5) < 10) {
		npc.say("#fs14##b請先確保欄位都空10格以上!");
	} else if (player.getEventValue("中秋2") > 0) {
		player.loseItem(needitem);
		npc.say("#fs14##b今天已經領取過了哦!");
	} else {
		for (let i = 1; i < item.length; i++) {
			player.gainItem(item[i][0], item[i][1]);
		}
		player.loseItem(needitem, 1);
		npc.broadcastPlayerNotice(1, "[全服中秋] 玩家 " + player.getName() + "  領取了中秋!!!");
		player.addEventValue("中秋2", 1, 30);

		player.showSystemMessage("獲得禮物成功~");
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







