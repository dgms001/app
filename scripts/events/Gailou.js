//蓋樓event by dgms qq:381991414
//搶樓活動
/*
var cal;
var endTime;
var hour;
var min;

function init(attachment) {
	//if(event.getChannel() == 1){
    scheduleNew();
	//}
}

function scheduleNew() {
    event.setVariable("state", "false");
    event.setVariable("endEvent", "true");
    event.setVariable("check", "0");
    event.setVariable("maxCheck", "9999");
	cal = java.util.Calendar.getInstance();
    hour = cal.get(java.util.Calendar.HOUR_OF_DAY);
    min = cal.get(java.util.Calendar.MINUTE);
		if(hour<1){
			event.startTimer("newopen",(((1-1)-hour)*60 + (60-min))*60*1000);
		} else if(hour<2){
			event.startTimer("newopen",(((2-1)-hour)*60 + (60-min))*60*1000);
		} else if(hour<3){
			event.startTimer("newopen",(((3-1)-hour)*60 + (60-min))*60*1000);
		} else if(hour<4){
			event.startTimer("newopen",(((4-1)-hour)*60 + (60-min))*60*1000);
		} else if(hour<5){
			event.startTimer("newopen",(((5-1)-hour)*60 + (60-min))*60*1000);
		} else if(hour<6){
			event.startTimer("newopen",(((6-1)-hour)*60 + (60-min))*60*1000);
		} else if(hour<7){
			event.startTimer("newopen",(((7-1)-hour)*60 + (60-min))*60*1000);
		} else if(hour<8){
			event.startTimer("newopen",(((8-1)-hour)*60 + (60-min))*60*1000);
		} else if(hour<9){
			event.startTimer("newopen",(((9-1)-hour)*60 + (60-min))*60*1000);
		} else if(hour<10){
			event.startTimer("newopen",(((10-1)-hour)*60 + (60-min))*60*1000);
		} else if(hour<11){
			event.startTimer("newopen",(((11-1)-hour)*60 + (60-min))*60*1000);
		} else if(hour<12){
			event.startTimer("newopen",(((12-1)-hour)*60 + (60-min))*60*1000);
		} else if(hour<13){
			event.startTimer("newopen",(((13-1)-hour)*60 + (60-min))*60*1000);
		} else if(hour<14){
			event.startTimer("newopen",(((14-1)-hour)*60 + (60-min))*60*1000);
		} else if(hour<15){
			event.startTimer("newopen",(((15-1)-hour)*60 + (60-min))*60*1000);
		} else if(hour<16){
			event.startTimer("newopen",(((16-1)-hour)*60 + (60-min))*60*1000);
		} else if(hour<17){
			event.startTimer("newopen",(((17-1)-hour)*60 + (60-min))*60*1000);
		} else if(hour<18){
			event.startTimer("newopen",(((18-1)-hour)*60 + (60-min))*60*1000);
		} else if(hour<19){
			event.startTimer("newopen",(((19-1)-hour)*60 + (60-min))*60*1000);
		} else if(hour<20){
			event.startTimer("newopen",(((20-1)-hour)*60 + (60-min))*60*1000);
		} else if(hour<21){
			event.startTimer("newopen",(((21-1)-hour)*60 + (60-min))*60*1000);
		} else if(hour<22){
			event.startTimer("newopen",(((22-1)-hour)*60 + (60-min))*60*1000);
		} else if(hour<23){
			event.startTimer("newopen",(((23-1)-hour)*60 + (60-min))*60*1000);
		} else if(hour<24){
			event.startTimer("newopen",(((24-1)-hour)*60 + (60-min))*60*1000);

		}
}

function newopen() {
    event.setVariable("state", "true");
    event.setVariable("endEvent", "false");
    event.setVariable("check", 0);
	event.setVariable("maxCheck", getMaxCheck(Math.floor(Math.random() * 2)));
    event.startTimer("scheduledTimeout", 10 * 60 * 1000);
	event.broadcastWeatherEffectNotice(135,"【蓋樓】",10000);
}

function scheduledTimeout() {
	event.broadcastNoticeWithoutPrefix("[搶樓活動] 下次活動將在50分鐘後開啟，希望大家積極參加。");
    scheduleNew();
}

function getMaxCheck(type) {
	
   switch (type) {
   case 0:
       return 5;//333
   case 1:
       return 10;//444
   case 2:
       return 15;//555
   }
   //return rand(200,400);
   return rand(1,20);
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
*/