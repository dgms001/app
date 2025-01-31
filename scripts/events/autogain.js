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
	event.addItemReward(2432452, 1, "", 1);
	event.broadcastWeatherEffectNotice(190, "[自動發送]發送了每日獎勵, 在線玩家請至左側小星星查看!!", 30000);
	event.startTimer("scheduledTimeout", 5 * 60 * 1000);//多久關閉240=4個消失後關閉

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
