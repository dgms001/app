//世界boss event by dgms qq:381991414

var eim;
var cal;
var map_2;
var endMap  =  103000000;//打完BOSS，傳送的地圖
var startMap = 103000000;//BOSS所在的地圖
var falseEndMap = 103000000;//不通關地圖
let endTime;
let mob7;

function init(attachment) {
	
    event.setVariable("state","0");
	event.setVariable("stage","500");
	event.setVariable("Count1","0");
	event.setVariable("Count2","0");
	event.setVariable("Count3","0");
	event.setVariable("check","0");
	 scheduleNew();
	 //newopen();
}

function scheduleNew() {
    event.setVariable("state","0");
	//event.setVariable("stage","0");
	event.setVariable("check","0");
	date = new Date();
    sec = date.getSeconds();
    let week = date.getDay();
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
		/*if(hour<1){
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
		}*/
		event.startTimer("newopen",10*60*1000);
}
function newopen() {
    if (parseInt(event.getVariable("state")) == 0) {
		//event.setVariable("state","1");//
		Count1 = Math.floor(Math.random() * 8);//骰0-8
		Count2 = Math.floor(Math.random() * 8);
		Count3 = Math.floor(Math.random() * 8);
		event.setVariable("Count1",Count1+1);//1-9
		event.setVariable("Count2",Count2+1);
		event.setVariable("Count3",Count3+1);
		if(Count1 != Count2 && Count1 != Count3 && Count2 != Count3){
			event.setVariable("state","1");//
			//event.broadcastWeatherEffectNotice(134,"【金楓樂透】開始骰",100);
			event.startTimer("scheduledTimeout",1*1000);
		}else{
			endTime = new Date().getTime() + 2 * 1000;
			event.setVariable("endTime", endTime);
			event.startTimer("newopen",1*1000);
		}
		//map_2 = event.getMap(startMap);
		//map_2.reset();
		//map_2.showTimer(10*60);
		
		//event.broadcastNoticeWithoutPrefix("【測試運行】state 0 |||通知"+Count1+""+Count2+""+Count3+"");//購買時間
		}
}

function scheduledTimeout() {
    //事件實例計時完畢
	stage = parseInt(event.getVariable("stage"));
    if (parseInt(event.getVariable("state")) == 1) {//數字全部不同轉至1 兌獎
        //進行檢測實例人數
	//if(event.getChannel() == 1){
		    event.broadcastNoticeWithoutPrefix("【金楓樂透】 [ "+(stage+1)+" ] [ "+(stage+1)+" ]期，成功開獎抓緊時間至頻道1兌獎");//購買時間
			event.setVariable("state","2");//
			//stage = parseInt(event.getVariable("stage"));
			event.setVariable("stage",stage+1);
			endTime = new Date().getTime() + 5*60 * 1000;
			//設定結束時間
			event.setVariable("endTime", endTime);
			event.startTimer("scheduledTimeout",5*60*1000);
			//event.setVariable("stage","1");
			//map_2.showTimer(10*60);
			//kick();
			
			//event.startTimer("check", 60 * 1000);
			//event.setVariable("check","0");
			//event.getMap(startMap).blowWeatherEffectNotice("【測試運行】", 102, 5000);
	//}
    } else {
		kickfalse();
		event.broadcastNoticeWithoutPrefix("【金楓樂透】 [ "+stage+" ] [ "+stage+" ] 期 兌獎結束，開放下一期樂透至頻道1購買");
    }
}

function check(){
	var MobCount = event.getVariable("check");
		if(MobCount==20){
			//SapwnMonster();
			kick();
		}
		checkCount = parseInt(event.getVariable("check"));
		event.setVariable("check",checkCount+1);
		event.startTimer("check", 60 * 1000);
}
/*
function SapwnMonster() {
	var stages = parseInt(event.getVariable("stage"));
					switch(stages)
					{
						case 1:
							mob7 = map_2.makeMob(9101078);//bossid
							//mob7.changeBaseHp(10300000000000);//hpmax
							map_2.spawnMob(mob7,22, 352);//x y
							bosshp = 45000000000000;
							bossX = map_2.getPlayerCount();
							bossY = 3;
							bossZ = (bossX*bossY/(bossX+bossY));
							mob7.changeBaseHp(bosshp*bossZ+bosshp);//hpmax
							event.getMap(startMap).blowWeatherEffectNotice("第一階段!！", 102, 5000);
							event.setVariable("stage",2);//不想要"stage",2   2改3 就是單boss
						break;	
					
						case 2:
					        mob7 = map_2.makeMob(9101078);//bossid
							//mob7.changeBaseHp(10300000000000);//hpmax
							map_2.spawnMob(mob7,22, 352);//x y
							bosshp = 250000000000000;
							bossX = map_2.getPlayerCount();
							bossY = 3;
							bossZ = (bossX*bossY/(bossX+bossY));
							mob7.changeBaseHp(bosshp*bossZ+bosshp);//hpmax
							event.getMap(startMap).blowWeatherEffectNotice("第二階段!！", 101, 5000);
							event.setVariable("stage",3);
							
							break;
						case 3:
							kick();
							//player.showSystemMessage("測試顯示");
							//player.runScript("世界王獎勵");
							break;
					}
}*/
function kick() {
		//map_2.clearMobs();
		event.stopTimer("scheduledTimeout");
		event.stopTimer("check");
		event.setVariable("state","0");//
		//event.setVariable("stage","0");
		//map_2.transferPlayers(endMap); 
		scheduleNew();    
}

function kickfalse() {
		//map_2.clearMobs();
		event.stopTimer("scheduledTimeout");
		event.stopTimer("check");
		event.setVariable("state","0");//
		//event.setVariable("stage","0");
		//map_2.transferPlayers(falseEndMap); 
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
		case "kick":
			kick();
			break;
		case "check":
			check();
			break;
    }
}



