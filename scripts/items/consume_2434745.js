//4是其他欄 3是裝飾欄
var nowca = java.util.Calendar.getInstance();//取時間
var nowday = nowca.get(java.util.Calendar.DATE);//獲取日
var NowFormat = parseInt(endmonthDate());//獲取該月日(字符)轉換成(數值int)

var needitem = 2434745;
var item = Array(
	Array(5060048, 100),
	Array(5060025, 100),
	Array(5060028, 50),
	Array(5062010, 200),
	Array(5062020, 100),
	Array(5062500, 100),
	Array(4032053, 2000),
	Array(2630649, 20),
	Array(4036396, 1000)

);


var text = "";


// if(player.getEventValue("圓夢贊助1500每月限制6包")<60){

if (player.getEventValue("圓夢贊助1500選擇") < 1) {
	text += "#e#fs18##v" + needitem + "##r#z" + needitem + "#獎勵如下:\r\n\r\n#n";
	text += "#fs14##d[下方三擇一][下方三擇一][下方三擇一]\r\n#b";
	text += "#L5##v2433575##z2433575#*30#r[領取]#l\r\n#b";
	text += "#L6##v5064400##z5064400#*30#r[領取]#l\r\n#b";
	text += "#L7##v2433575##z2433575#*15+#v5064400##z5064400#*15#r[領取]#l\r\n\r\n";
	text += "#b領取完畢後,在打開一次箱子!\r\n";
} else {
	text += "#e#fs18##v" + needitem + "##r#z" + needitem + "#獎勵如下:\r\n#n";
	text += "#fs14##b";
	for (let i = 1; i < item.length; i++) {
		text += "#v" + item[i][0] + "##z" + item[i][0] + "#*" + item[i][1] + "\r\n";
	}

	text += "#fs16##r";
	text += "#L1#點我領取#l";
}

text += "\r\n";



let sel = npc.askMenuS("" + text, true);

if (sel == 1) {
	if (player.getFreeSlots(2) < 10 || player.getFreeSlots(3) < 10 || player.getFreeSlots(4) < 10 || player.getFreeSlots(5) < 10) {
		npc.say("#fs14##b請先確保欄位都空10格以上!");
	} else {
		for (let i = 1; i < item.length; i++) {
			player.gainItem(item[i][0], item[i][1]);
		}
		player.loseItem(needitem, 1);
		npc.broadcastNotice("玩家開啟1500T禮包");
		player.addEventValue("圓夢贊助1500領取", 1, 1000);
		player.addEventValue("圓夢贊助1500選擇", -1, 1000);
		player.addEventValue("圓夢贊助1500每月限制6包", 1, ((NowFormat + 1) - nowday));
		npc.say("#fs14##b獲得好多東西~");
	}



} else if (sel == 5) {
	player.gainItem(2433575, 30);
	player.addEventValue("圓夢贊助1500選擇", 1, 1000);
	npc.say("#fs14##b獲得#v2433575#*30");
} else if (sel == 6) {
	player.gainItem(5064400, 30);
	player.addEventValue("圓夢贊助1500選擇", 1, 1000);
	npc.say("#fs14##b獲得#v5064400#*30");
} else if (sel == 7) {
	player.gainItem(2433575, 15);
	player.gainItem(5064400, 15);
	player.addEventValue("圓夢贊助1500選擇", 1, 1000);
	npc.say("#fs14##b獲得#v2433575#*15,#v5064400#*15");
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







