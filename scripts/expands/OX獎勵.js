//OX問答 by dgms qq:381991414
var reward = new Array(

	//Array(答對數量, 物品ID,"說明")   4310071
	Array(30, 4009411, 500, "餘額幣"),
	Array(29, 4009411, 400, "餘額幣"),
	Array(28, 4009411, 300, "餘額幣"),
	Array(27, 5060048, 200, "黃金蘋果"),
	Array(26, 5060048, 150, "黃金蘋果"),
	Array(25, 5060048, 100, "黃金蘋果"),
	Array(24, 5060048, 100, "黃金蘋果"),
	Array(23, 5060048, 100, "黃金蘋果"),
	Array(22, 5060048, 100, "黃金蘋果"),
	Array(21, 5060048, 100, "黃金蘋果"),
	Array(20, 5060048, 100, "黃金蘋果"),
	Array(19, 5060048, 80, "黃金蘋果"),
	Array(18, 5060048, 80, "黃金蘋果"),
	Array(17, 5060048, 80, "黃金蘋果"),
	Array(16, 5060048, 80, "黃金蘋果"),
	Array(15, 5060048, 80, "黃金蘋果"),
	Array(14, 5060048, 50, "黃金蘋果"),
	Array(13, 5060048, 50, "黃金蘋果"),
	Array(12, 5060048, 50, "黃金蘋果"),
	Array(11, 5060048, 50, "黃金蘋果"),
	Array(10, 5060048, 50, "黃金蘋果"),
	Array(9, 5060048, 30, "黃金蘋果"),
	Array(8, 5060048, 30, "黃金蘋果"),
	Array(7, 5060048, 30, "黃金蘋果"),
	Array(6, 5060048, 30, "黃金蘋果"),
	Array(5, 5060048, 30, "黃金蘋果"),
	Array(4, 5060048, 10, "黃金蘋果"),
	Array(3, 5060048, 10, "黃金蘋果"),
	Array(2, 5060048, 10, "黃金蘋果"),
	Array(1, 5060048, 10, "黃金蘋果"),
	Array(0, 5060048, 10, "黃金蘋果")

)




var event = npc.getEvent("event_OX");
if (event != null) {

	var playerReward = event.getVariable(player.getName() + "Reward");
	var playerGrade = event.getVariable(player.getName() + "Grade");
	if (playerReward == 0) {
		player.changeMap(910048200);
		event.setVariable(player.getName() + "Reward", 1);
		var item = null;
		for (var i = 0; i < reward.length; i++) {
			if (reward[i][0] == playerGrade) {
				item = reward[i];
				break;
			}
		}


		player.gainItem(item[1], playerGrade);
		player.gainItem(4032053, playerGrade * 20);
		player.gainItem(4001832, playerGrade * 200);
		// player.gainItem(4000348,playerGrade*200);//母親節道具
		//player.gainItem(4000516,playerGrade*300);
		player.gainItem(2023741, 5);
		player.gainItem(2023742, 5);
		player.gainItem(2023743, 5);
		player.gainItem(2023744, 5);
		player.addEventValue("OX已領取", 1, 1)
		npc.say("#fs15##b獎勵給你啦，您的分數為" + playerGrade + "分，\r\n獲得物品：#v" + item[1] + "##r#z" + item[1] + "# #bx " + playerGrade + "\r\n");
		npc.broadcastPlayerNotice(43, "玩家" + player.getName() + "參與OX活動獲得OX硬幣及黃金楓葉!");

	} else {
		npc.say("你領取過獎勵了，分數" + playerGrade);
	}

} else {
	npc.say("who are you?" + event)
}
