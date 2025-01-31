/*
Auto Rate
By dgms QQ:381991414
*/
date = new Date();
let day = date.getDay();

function init(attachment) {
	scheduleNew();
}

function scheduleNew() {
	event.startTimer("newopen", 1 * 10);//秒開
}


function newopen() {
	if (day == 6 || day == 0) {
		event.setRate(0, 100);//50倍經驗
		event.broadcastWeatherEffectNotice(46, "[自動假日雙倍]已開啟成功,假日自動開啟", 30000);
		event.startTimer("scheduledTimeout", 5 * 60 * 1000);//多久關閉240=4個消失後關閉
	} else {
		event.setRate(0, 50);//50倍經驗
		event.broadcastWeatherEffectNotice(42, "[自動假日雙倍] 已結束,非假日自動關閉", 30000);
		//scheduleNew();
		event.destroyEvent();
		event.startTimer("scheduledTimeout", 3 * 60 * 1000);//多久關閉240=4個消失後關閉
	}
}

function scheduledTimeout() {
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
