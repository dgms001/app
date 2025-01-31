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
var event = npc.getEvent("Dropbuff");
// if (party == null){
// npc.say("#r#fs16#開啟組隊使用該功能");
// } else {
//map.clearMobs();map.reset();
members = party.getLeader();
str = "#h0#，" + members + "，你好\r\n\r\n"
str += "#b#e活動說明:#n#k\r\n"
str += " #b 擊殺時 #k｜獲得粽子 不在掉落拾取\r\n";
// str +=" #b狀態解除#k｜通知隊伍此次功能額外掉落數量\r\n";
// str +="#b#e附加功能:#n#k\r\n 每殺100隻怪物通知您\r\n";
// str +="#r#e警告:#n#k\r\n 開組隊長賦予全隊員狀態\r\n";
str += " 轉移地圖自動移除功能。\r\n";
// str +="\r\n#b是否使用輔助功能，否則移除此事件";
str += "\r\n#b 使用次數[" + player.getEventValue("掉落物活動") + "/2]";
var ys = npc.askYesNo(str);
if (ys == 1) {
	if (party == null || player.getId() != party.getLeader()) {
		npc.sayNext("請先創建隊伍，讓你的隊長和我對話吧!", true);
	} else if (party.numberOfMembersInChannel() < party.getMembersCount()) {
		npc.say("好像你有隊員在其他地方，請把隊員都召集到這裡");
	} else {
		//player.loseItem(openitem,1);
		//npc.sayNext("那麼現在就把你傳送到等待地圖..");
		var startMap = 940511800;//BOSS出現的地圖
		//player.changeMap(startMap,0);
		//var map = event.getMap(startMap); 
		if (npc.makeEvent("Dropbuff", false, party) == null) {
			//map.showTimer((event.getVariable("endTime") - new Date().getTime())/1000 );
		}
	}
} else {
	player.setEvent(null);
	//ui();
}
// }



function ui() {//測試運行
	txxt = "#b服務器當前時間： #r" + Time + " #k\r\n\r\n#e#b開放時間：\r\n#n#k 測試開放\r\n#k 入場消耗待定\r\n";
	txxt += "#k 輔助功能測試\r\n#b";


	let sel = npc.sayS(txxt, true);
}
function gmui() {
	if (player.isGm()) {
		txxt = "\r\n是否手動開啟腳本，在1秒後";
		let ys = npc.askYesNo(txxt, true);
		if (ys == 1) {
			event.startTimer("newopen", 1000);
		} else {

		}
	}
}
