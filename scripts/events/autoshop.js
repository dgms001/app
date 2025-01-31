//event by dgms qq:381991414
//限購商店活動

var cal;
var endTime;
var hour;
var min;
let mapId;
let mapX;
let mapY;
let mapname;
function init(attachment) {
	scheduleNew();
}

function scheduleNew() {
	event.startTimer("newopen", 1 * 10);//秒開
}


function newopen() {
	var gailv = rand(0, 12);
	if (gailv == 0) {
		mapId = 103020400;
		mapX = 2257;
		mapY = 198;
		mapname = "龍神出現在一分流墮落都市地鐵內";
	} else if (gailv == 1) {
		mapId = 100000101;
		mapX = 61;
		mapY = 139;
		mapname = "龍神出現在一分流弓手村公某個商店內";
	} else if (gailv == 2) {
		mapId = 101072100;
		mapX = 48;
		mapY = 298;
		mapname = "龍神出現在一分流妖精學院裡面";
	} else if (gailv == 3) {
		mapId = 102000003;
		mapX = -132;
		mapY = 191;
		mapname = "龍神出現在一分流勇士之村某個聖地內";
	} else if (gailv == 4) {
		mapId = 101020400;
		mapX = -129;
		mapY = -1251;
		mapname = "龍神出現在一分流魔法師協會";
	} else if (gailv == 5) {
		mapId = 104020100;
		mapX = -70;
		mapY = -1168;
		mapname = "龍神出現在六條岔道的碼頭附近";
	} else if (gailv == 6) {
		mapId = 104000000;
		mapX = 2373;
		mapY = -313;
		mapname = "龍神出現在一分流維多利亞港";
	} else if (gailv == 7) {
		mapId = 160070000;
		mapX = 874;
		mapY = -34;
		mapname = "龍神出現在一分流拉姆溫泉附近";
	} else if (gailv == 8) {
		mapId = 101000003;
		mapX = -167;
		mapY = 184;
		mapname = "龍神出現在一分流魔法森林某個聖地內";
	} else if (gailv == 9) {
		mapId = 120000301;
		mapX = -66;
		mapY = 377;
		mapname = "龍神出現在一分流鯨魚號附近";

	} else if (gailv == 10) {
		mapId = 101050010;
		mapX = -437;
		mapY = -44;
		mapname = "龍神出現在一分流精靈之林某個空間內";
	} else if (gailv == 11) {
		mapId = 100051020;
		mapX = 124;
		mapY = -64;
		mapname = "龍神出現在一分流帕爾坦";
	} else if (gailv == 12) {
		mapId = 106030200;
		mapX = 658;
		mapY = 22;
		mapname = "龍神出現在一分流菇菇城堡附近";
	}
	let map_1 = event.getMap(mapId);
	map_1.spawnTempNpc(9310460, mapX, mapY);
	event.startTimer("scheduledTimeout", 10 * 60 * 1000);//多久關閉240=4個消失後關閉
	event.broadcastWeatherEffectNotice(148, "偉大的" + mapname + "", 240000);//提示2分鐘
	event.broadcastPlayerNotice(2, "[神龍提示]  偉大的" + mapname + " ");
	event.broadcastPlayerNotice(2, "[神龍提示]  偉大的" + mapname + " ");
	event.broadcastPlayerNotice(2, "[神龍提示]  偉大的" + mapname + " ");
	//updatename(mapname, 32);
}

function scheduledTimeout() {
	let map_1 = event.getMap(103020400);
	let map_2 = event.getMap(100000200);
	let map_3 = event.getMap(101072100);
	let map_4 = event.getMap(102000003);
	let map_5 = event.getMap(101020400);
	let map_6 = event.getMap(104020100);
	let map_7 = event.getMap(104000000);
	let map_8 = event.getMap(160070000);
	let map_9 = event.getMap(101000003);
	let map_10 = event.getMap(120000301);//繼續
	let map_11 = event.getMap(101050010);
	let map_12 = event.getMap(100051020);
	let map_13 = event.getMap(106030200);
	map_1.reset();
	map_2.reset();
	map_3.reset();
	map_4.reset();
	map_5.reset();
	map_6.reset();
	map_7.reset();
	map_8.reset();
	map_9.reset();
	map_10.reset();
	map_11.reset();
	map_12.reset();
	map_13.reset();
	event.broadcastWeatherEffectNotice(150, "神龍已離開,冒險家們請下次在來!", 240000);//提示一分鐘
	event.broadcastPlayerNotice(2, "[神龍提示]  神龍已離開,冒險家們請下次在來! ");
	event.broadcastPlayerNotice(2, "[神龍提示]  神龍已離開,冒險家們請下次在來! ");
	event.broadcastPlayerNotice(2, "[神龍提示]  神龍已離開,冒險家們請下次在來! ");
	//updatename("暫未開啟", 32);
	event.destroyEvent();
}



function timerExpired(key) {
	switch (key) {
		case "scheduledTimeout":
			scheduledTimeout();
			break;
		case "newopen":
			newopen();
			break;
	}
}

function rand(lbound, ubound) {
	return Math.floor(Math.random() * (ubound - lbound)) + lbound;
}
function updatename(name, ID) {
	var sql = "update dgms_worldshop SET AllName = '" + name + "' where ID = '" + ID + "';"; //疑問 有兩個分號;
	event.customSqlUpdate(sql);
}