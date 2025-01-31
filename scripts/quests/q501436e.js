if(map.getId() >= 871100000 && map.getId() <= 871100030 ){
	npc.completeQuest();//4036748
	player.addHomeDrawing([24]);
	player.addHomeDrawing([25]);
	player.addHomeDrawing([26]);
	player.scriptProgressMessage​("獲得新的小屋樣式");
} else {
	player.scriptProgressMessage​("請回到我的小屋，來完成任務。");
}
// player.scriptProgressMessage​("請回到我的小屋，來完成任務。"+map.getId());