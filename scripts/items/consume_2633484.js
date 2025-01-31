var flag = false;
for (j = 16; j < 36; j++) {
	if (player.isQuestStarted(501400 + j)) {
		flag = true;
	}
}
for (j = 51; j < 57; j++) {
	if (player.isQuestStarted(501900 + j)) {
		flag = true;
	}
}

if (!flag) {
	player.startQuest(501423, 0);
	player.loseItem(npc.getItemId(), 1);
	player.addEventValue("精緻的洋房擴建", 1, 999);
	player.dropAlertNotice("獲得任務，請檢查任務");
} else {
	npc.say("每次只能承接一種擴建任務");
}