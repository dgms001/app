//4是其他欄 3是裝飾欄
var nowca = java.util.Calendar.getInstance();//取時間
var nowday = nowca.get(java.util.Calendar.DATE);//獲取日
var NowFormat = parseInt(endmonthDate());//獲取該月日(字符)轉換成(數值int)

var needitem = 2433590;
var item = Array(
	Array(5062017, 20),//閃耀方塊

	Array(4032053, 1000),//黃金楓葉
	Array(2633918, 100),//居居金1亿

	Array(5680503, 100),//潘朵拉箱子
	Array(5060048, 100)//潘朵拉箱子

);


var text = "";
text += "#e#fs18#100讚禮包:\r\n#n";
text += "#fs11##b";

for (let i = 1; i < item.length; i++) {
	text += "#v" + item[i][0] + "##z" + item[i][0] + "#*" + item[i][1] + "\r\n";
}
text += "#fs14##r";
text += "\t\t\t\t #L1#領取福利#l";
text += "\r\n";



let sel = npc.askMenuS("" + text, true);

if (sel == 1) {
	if (player.getFreeSlots(2) < 10 || player.getFreeSlots(3) < 10 || player.getFreeSlots(4) < 10 || player.getFreeSlots(5) < 10) {
		npc.say("#fs14##b請先確保欄位都空10格以上!");
	} else if (player.getEventValue("100讚") > 0) {
		player.loseItem(needitem);
		npc.say("#fs14##b今天已經領取過了哦 你在幹嘛呢!");
	} else {
		for (let i = 1; i < item.length; i++) {
			player.gainItem(item[i][0], item[i][1]);
		}
		player.addEventValue("100讚", 1, 3000);
		player.loseItem(needitem, 1);
		npc.broadcastPlayerNotice(2, "「 玩家 」  " + player.getName() + "  領取了100讚禮包,沒按讚的你的良心不會痛嗎!!!");
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







