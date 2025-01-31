if(map.getId() >= 871100000 && map.getId() <= 871100030 ){
	npc.completeQuest();//4036755
	player.addHomeDrawing([21]);
	player.addHomeDrawing([22]);
	player.addHomeDrawing([23]);
	player.scriptProgressMessage​("獲得新的小屋樣式");
} else {
	player.scriptProgressMessage​("請回到我的小屋，來完成任務。");
}
// player.scriptProgressMessage​("請回到我的小屋，來完成任務。"+map.getId());