//4是其他欄 3是裝飾欄
var nowca = java.util.Calendar.getInstance();//取時間
var nowday = nowca.get(java.util.Calendar.DATE);//獲取日
var NowFormat = parseInt(endmonthDate());//獲取該月日(字符)轉換成(數值int)

var needitem = 2434342;
var item = Array(
	Array(4009411, 10),//元寶
	Array(2633609, 2),//
	//Array(2023721, 5),//元寶
	Array(4032216, 1999),//
	Array(5060048, 40),//
	Array(5060086, 40)//
);


var text = "";
text += "#e#fs21##r每日福利:\r\n#n";
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
	} else if (player.getEventValue("每日獎勵") > 0) {
		player.loseItem(needitem);
		npc.say("#fs14##b今天已經領取過了哦!");
	} else {
		for (let i = 1; i < item.length; i++) {
			player.gainItem(item[i][0], item[i][1]);
		}
		player.loseItem(needitem, 1);
		npc.broadcastPlayerNotice(3, "[每日福利] 玩家 " + player.getName() + "  領取了每日福利!!!");
        player.addEventValue("每日獎勵", 1, 1);
		
		player.showSystemMessage("#fs14##b獲得禮物成功~");
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







