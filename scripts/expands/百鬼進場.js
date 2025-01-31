//世界boss npcs by dgms qq:381991414
var open = true;
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //獲得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //獲得月份
var day = ca.get(java.util.Calendar.DATE);//獲取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //獲得小時
var minute = ca.get(java.util.Calendar.MINUTE);//獲得分鐘
var second = ca.get(java.util.Calendar.SECOND); //獲得秒
var Time = year + "年";
Time += month + "月";
Time += day + "日";
Time += hour + "時";
Time += minute + "分";
Time += second + "秒";
var openitem = 4000539;//4034671
var openItemId = 4032053;
var openItemNum = 1000;
//members = 0;
//if(player.isGm()){
var event = npc.getEvent("event_百鬼");
/*if (player.isGm()) {
			var YN = npc.askYesNo("是否開啟副本？")
			if(YN == 1){
				if (npc.makeEvent("event_百鬼", true, player) == null) {
				}
				npc.broadcastPlayerNotice(7, "【" + player.getName() + "】在頻道" + player.getChannel() + "｜開啟百鬼！請隊員們儘快入場！");
			}
	}*/
str = "百鬼夜行 測試運行\r\n";
//str += "當前:"+Time+"\r\n";
str += "玩家開場:消費" + (openItemNum / 2) + "#v" + openItemId + "# + 樂豆1000 ,開啟\r\n";
str += "報名:消費" + openItemNum + "#v" + openItemId + "#進場\r\n";
str += "獎勵:擊殺2隻王=全員1 OX幣,每隻機率掉落額外OX幣\r\n";
//if(player.isGm()){
str += "#L0#開啟撻伐#l  #L1#進場報名#l";
//}
//str += "#L2#玩家介面#l  #L3#設置結束時間#l  ";
var sel = npc.askMenu(str);
if (sel == 0) {
	if (event == null || open == false) {
		npc.say("#b百鬼事件未開啟#b\r\n#k");
		//event.setVariable("state","0");//開啟事件
		if (!player.hasItem(openItemId, (openItemNum / 2))) {
			npc.say("你沒有那麼多#v" + openItemId + "#");
		} else if (player.getCashShopCurrency(1) < 1000) {

			npc.say("你並沒有那麼多樂豆");
		} else {

			var YN = npc.askYesNo("是否開啟副本？")
			aa = openItemId;
			ss = (openItemNum / 2);
			if (YN == 1) {
				if (npc.makeEvent("event_百鬼", true, player) == null) {
				}
				player.loseItem(aa, ss);
				player.modifyCashShopCurrency(1, -1000);
				npc.broadcastPlayerNotice(7, "【百鬼夜行】玩家【" + player.getName() + "】在頻道" + player.getChannel() + "｜開啟！花費了1000樂豆！");
				//npc.broadcastPlayerNotice(7,"百鬼夜行 5分鐘報名入場時間");
				//npc.broadcastPlayerNotice(7,"趕快到 副本中心 -> 【百鬼夜行】 花費金楓"+openItemNum+"個 來進場");
				//npc.broadcastPlayerNotice(7,"測試運行");
				player.scriptProgressMessage("百鬼夜行開啟成功");
			}
		}
	} else {
		npc.say("當前頻道正在進行副本，請稍後再試。");
	}
}
if (sel == 1) {
	if (event == null) {
		npc.say("當前頻道並沒有在進行副本，請稍後再試。");
	} else {
		let canJoin = event.getVariable("canJoin");
		let members = event.getVariable("members");
		if (canJoin != 1) {
			npc.say("目前不是報名時間");
		} else if (!player.hasItem(openItemId, openItemNum)) {
			npc.say("你沒有那麼多#v" + openItemId + "#");
		} else if (members.length > 9) {
			npc.say("已達最高入場上限");
		} else {
			player.loseItem(openItemId, openItemNum);
			var startMap = 800023000;
			//npc.sayNext("那麼現在就把你傳送到等待地圖..");
			player.changeMap(startMap);
			player.setEvent(event);
			members.push(player);
			var map = event.getMap(startMap);
			map.showTimer((event.getVariable("endTime") - new Date().getTime()) / 1000);
			npc.broadcastPlayerNotice(7, "玩家 " + player.getName() + " 在[頻道-" + player.getChannel() + "]進入【百鬼夜行】 當前總人數：" + members.length + "！");

		}
	}
}
if (sel == 2) {
}
if (sel == 3) {
	//event.startTimer("scheduledTimeout",1000);
}
