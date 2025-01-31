let mapA = map.getId();
if (mapA >= 871100000 && mapA <= 871100009) {
	player.addHomeDrawing([8]);
	player.addHomeDrawing([9]);
	player.addHomeDrawing([10]);
	player.addEventValue("萬聖節鬼屋瓦屋擴建", 1, 3000);
	player.loseItem(npc.getItemId(), 1);
} else {
	npc.say("請到我的小屋內開啟")
}