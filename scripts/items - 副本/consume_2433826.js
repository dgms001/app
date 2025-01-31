//4是其他欄 3是裝飾欄
var nowca = java.util.Calendar.getInstance();//取時間
var nowday = nowca.get(java.util.Calendar.DATE);//獲取日
var NowFormat = parseInt(endmonthDate());//獲取該月日(字符)轉換成(數值int)

var needitem = 2433826;
var item = Array(
	Array(5062017, 50),//閃耀方塊
	Array(5062017, 50),//閃耀方塊
	Array(5062020, 50),//閃炫方塊
	Array(5062500, 50),//附加方塊
	Array(4032053, 1000),//黃金楓葉
	Array(4001715, 2),//居居金1亿
	Array(5060028, 10),//潘朵拉箱子
	Array(4009454, 3000)//草元素
);


var text = "";
text += "#e#fs18#公測禮包獎勵如下:\r\n#n";
text += "#fs14##b";
for (let i = 1; i < item.length; i++) {
	text += "#v" + item[i][0] + "##z" + item[i][0] + "#*" + item[i][1] + "\r\n";
}
text += "#fs16##r";
text += "#L1#點我領取#l";
text += "\r\n";



let sel = npc.askMenuS("" + text, true);

if (sel == 1) {
	if (player.getFreeSlots(2) < 10 || player.getFreeSlots(3) < 10 || player.getFreeSlots(4) < 10 || player.getFreeSlots(5) < 10) {
		npc.say("#fs14##b請先確保欄位都空10格以上!");
	} else if (player.getEventValue("公測禮包記錄1") == 1) {
		player.loseItem(needitem);
		npc.say("#fs14##b今天已經領取過了哦 你在幹嘛呢!");
	} else {
		for (let i = 1; i < item.length; i++) {
			player.gainItem(item[i][0], item[i][1]);
		}
		player.loseItem(needitem, 1);
		npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "領取了公測禮包,感謝支持");
		player.addEventValue("公測禮包記錄", 1, 3000);
		player.addEventValue("公測禮包記錄1", 1, 1);
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







