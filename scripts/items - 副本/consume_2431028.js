var timeStamp = java.lang.System.currentTimeMillis();
var min = 3; //一分鐘 這裡自己改時間
var time = parseInt(min - (((timeStamp - parseInt(player.getQuestRecordEx(100000002))) / 1000)));
if (time > 0) {
	//player.showProgressMessageFont("你按太快了哦," + time + "秒後才能開啟!", 3, 30, 4, 10 * 1000);
} else {
	player.updateQuestRecordEx(100000002, timeStamp);
	player.runScript("改本服菜單");
}