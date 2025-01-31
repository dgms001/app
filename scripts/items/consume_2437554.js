//4是其他欄 3是裝飾欄
var nowca = java.util.Calendar.getInstance();//取時間
var nowday = nowca.get(java.util.Calendar.DATE);//獲取日
var NowFormat = parseInt(endmonthDate());//獲取該月日(字符)轉換成(數值int)

var needitem = 2437554;
var item = Array(
	Array(5060048, 100),
	Array(4009411, 5),//永恆的雪花
	Array(4000850, 100),//蘇打珍珠
	Array(2633634, 100),//漆黑碎片
	Array(4032053, 5000),//水晶
	Array(4036396, 250),//會員積分卡
	Array(5060028, 100),//潘朵拉
	Array(2630649, 50),//自選b
	Array(5062020, 100),
	Array(5062500, 100),
	Array(2630127, 1)

);


var text = "";


// if(player.getEventValue("圓夢贊助1500每月限制6包")<60){

text += "#e#fs18##v" + needitem + "##r#z" + needitem + "#獎勵如下:\r\n\r\n#n#e#b";
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
	} else if (player.getEventValue("圓夢物資包") >= 1) {
		npc.say("#fs14##b你怎麼會有兩包可以領取...出局!!");
	} else {
		for (let i = 1; i < item.length; i++) {
			player.gainItem(item[i][0], item[i][1]);
		}
		player.loseItem(needitem, 1);
		npc.broadcastNotice("玩家開啟圓夢物資包");
		player.addEventValue("圓夢物資包", 1, 1000);
		npc.say("#fs14##b獲得好多東西~");
	}



}
/*}else{
	// npc.broadcastNotice("開啟禮包，發現疑似違規行為");
			player.loseItem(needitem,1);
	player.addEventValue("圓夢贊助1500違規紀錄", 1,1000);
	npc.say("#fs14##b圓夢贊助1500每月限制6包");
}*/


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







