//世界boss npcs by dgms qq:381991414
/*var open = true;
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //獲得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //獲得月份
var day = ca.get(java.util.Calendar.DATE);//獲取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //獲得小時
var minute = ca.get(java.util.Calendar.MINUTE);//獲得分鐘
var second = ca.get(java.util.Calendar.SECOND); //獲得秒
var Time = year+"年";
Time += month+"月";
Time += day+"日";
Time += hour+"時";
Time += minute+"分";
Time += second+"秒";

    var event = npc.getEvent("worldboss");
    if (event == null || open == false) {
		
        npc.say("#b事件未開啟#b\r\n#k");
		event.setVariable("state","0");//開啟事件
    } else {		
		if (player.getChannel() != 1) {
                npc.say("世界BOSS只能在1頻道進行！活動開啟的時候請及時入場哦!\r\n提示：每個整點0-10分開啟入場！");
        } else if (parseInt(event.getVariable("state"))==2) {
                npc.say("活動已經開始!");
        } else if (parseInt(event.getVariable("state"))==1) {
			if(player.getAmountOfItem(4034671)>=1){//建議雜貨商店500w購買
				if (minute < 10) {
					var ys = npc.askYesNo("#h0#,你是否想要參加,世界boss副本呢?");
					if(ys == 1){
						player.loseItem(4034671,1);
						npc.sayNext("那麼現在就把你傳送到等待地圖..");
						var startMap = 993000500;//BOSS出現的地圖
						player.changeMap(startMap,0);
						var map = event.getMap(startMap); 
						map.showTimer((event.getVariable("endTime") - new Date().getTime())/1000 );
					}
			} else {
				npc.say("#b1服務器當前時間： #r" + Time +" #k\r\n\r\n#e#b副本開放時間：\r\n#n#k 全天開放 (#r偶數整點的0-10分鐘開放入場) #b\r\n#k");
				}
			} else {
				npc.say("#b您沒有門票#v"+4034671+"#哦~~無法入場");//說明入場卷購買位置 或 連接商店
			}
			
        } else {
            npc.say("#b服務器當前時間： #r" + Time +" #k\r\n\r\n#e#b副本開放時間：\r\n#n#k 全天開放 (#r偶數整點的0-10分鐘開放入場) #b\r\n#k");
		}
	}
