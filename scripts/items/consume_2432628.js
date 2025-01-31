var timeStamp = java.lang.System.currentTimeMillis();
var min = 3; //一分鐘 這裡自己改時間
var time = parseInt(min - (((timeStamp - parseInt(player.getQuestRecordEx(100000002))) / 1000)));
let mapA = map.getId();
if (mapA == 993001100) { //限制開啟地圖
	//player.showSystemMessage("在卡BUG頭蓋骨給你打出來 操!!");
} else {
	if (time > 0) {
		//player.showProgressMessageFont("你按太快了哦," + time + "秒後才能開啟!", 3, 30, 4, 10 * 1000);
	} else {
		player.updateQuestRecordEx(100000002, timeStamp);
		player.runScript("本服菜單");
	}
}