if(map.getId() >= 871100000 && map.getId() <= 871100030 ){
	npc.completeQuest();//4036748
	player.addHomeDrawing([27]);
	player.addHomeDrawing([28]);
	player.loseItem(4036843);
	player.scriptProgressMessage​("獲得新的小屋樣式");
} else {
	player.scriptProgressMessage​("請回到我的小屋，來完成任務。");
}