var setupTask;
var setupTask9;
var eim;
var map;
var minPlayers = 1;
var cal;
var map_1, map_2;
var readyMap, startMap, endMap;
let endTime;
function init(attachment) {
	scheduleNew();
}

function scheduleNew() {
	event.setVariable("state", "0")
	event.setVariable("rank", "0");
	var open = false;
	cal = java.util.Calendar.getInstance();
	hour = cal.get(java.util.Calendar.HOUR_OF_DAY);
	min = cal.get(java.util.Calendar.MINUTE);
	event.startTimer("newopen", 1 * 1);
	event.setVariable("rank", "0");

}


function newopen() {
	if (parseInt(event.getVariable("state")) == 0) {
		event.setVariable("state", 1)
		map_1 = event.getMap(readyMap);
		map_2 = event.getMap(startMap);
		endTime = new Date().getTime() + 5 * 60 * 1000;
		event.setVariable("endTime", endTime);
		map_1.showTimer(5 * 60);
		map_2.showTimer(5 * 60);
		event.startTimer("scheduledTimeout", 5 * 60 * 1000);
		//java.lang.System.out.println(" [跑旗賽] 家族跑旗活動已經在頻道1開放5分鐘，有興趣的玩家可以通過休閑娛樂-家族跑旗進入,希望大家積極參加,獎勵豐厚! ");
		event.broadcastNoticeWithoutPrefix("[跑旗賽] 家族跑旗活動已經在頻道1開放5分鐘，有興趣的玩家可以通過休閑娛樂-家族跑旗進入,希望大家積極參加,獎勵豐厚!");
		event.broadcastNoticeWithoutPrefix("[跑旗賽] 家族跑旗活動已經在頻道1開放5分鐘，有興趣的玩家可以通過休閑娛樂-家族跑旗進入,希望大家積極參加,獎勵豐厚!");
		event.broadcastNoticeWithoutPrefix("[跑旗賽] 家族跑旗活動已經在頻道1開放5分鐘，有興趣的玩家可以通過休閑娛樂-家族跑旗進入,希望大家積極參加,獎勵豐厚!");
	}
}


function scheduledTimeout() {
	//java.lang.System.out.println(" [跑旗賽] scheduledTimeout ");
	//事件實例計時完畢
	if (parseInt(event.getVariable("state")) == 1) {
		//進行檢測實例人數
		if (map_2.getPlayerCount() >= minPlayers) {
			//人數符合最小人數 開始進行傳送到下一階段
			event.setVariable("state", "2");
			map_1.screenEffect("defense/count");
			map_2.showTimer(10 * 60);
			endTime = new Date().getTime() + 30 * 60 * 1000;
			event.setVariable("endTime", endTime);
			event.startTimer("scheduledTimeout", 10 * 60 * 1000);
			event.getMap(startMap).blowWeatherEffectNotice("跑旗賽正式開始!勇敢的男人沖啊,搶妹子靠技術!!!!第一名送群主妹子！！！！", 102, 5000);
		} else {
			//人數不符合 所有玩家傳送到退出地圖
			event.getMap(startMap).blowWeatherEffectNotice("活動人數少於" + minPlayers + "人，活動將不進行！", 102, 5000);
			//不進行活動,進行下次活動計時。
			end();
		}
	} else if (parseInt(event.getVariable("state")) == 2) {
		//活動計時結束 進行獎勵 排名統計  
		event.getMap(startMap).blowWeatherEffectNotice("時間到!跑旗賽活動結束啦，請玩家在下次活動開啟前領取獎勵！否則無獎勵", 102, 5000);
		event.setVariable("state", "3");
		map_2.showTimer(60);
		event.startTimer("scheduledTimeout", 60 * 1000);
	} else if (parseInt(event.getVariable("state")) == 3) {
		end();
	} else {
		end();
	}
}


function end(eim) {

	for (var i = 1; i < 6; i++) {
		event.setVariable("rank" + i, "0")
	}
	event.setVariable("state", "0");
	event.setVariable("presons", "0");
	//開始執行新的計時
	scheduleNew();
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
