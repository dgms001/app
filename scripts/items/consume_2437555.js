//4是其他欄 3是裝飾欄
var nowca = java.util.Calendar.getInstance();//取時間
var nowday = nowca.get(java.util.Calendar.DATE);//獲取日
var NowFormat = parseInt(endmonthDate());//獲取該月日(字符)轉換成(數值int)

var needitem = 2437555;
var item = Array(
	Array(5060048, 100),
	Array(4009411, 10),//永恆的雪花
	Array(4032053, 10000),//水晶
	Array(5062020, 200),
	Array(5062500, 200),
	Array(2433575, 50)//榮耀


);

推文次數 = player.getEventValue("推文次數");
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
	} else if (推文次數 < 20) {
		npc.say("#fs14##b你推文次數還未達到20次哦!");
	} else if (player.getEventValue("確診者禮包") >= 1) {
		npc.say("#fs14##b你怎麼會有兩包可以領取...你重複確診嗎...請聯繫gm!!");
	} else {
		for (let i = 1; i < item.length; i++) {
			player.gainItem(item[i][0], item[i][1]);
		}
		player.loseItem(needitem, 1);
		npc.broadcastNotice("玩家" + player.getName() + "確診,領取確診禮包!");
		player.addEventValue("確診者禮包", 1, 1000);
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







