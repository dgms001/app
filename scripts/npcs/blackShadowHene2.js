var event = npc.getEvent("測試副本2");


if(event != null){
	map.broadcastEventNotice("箱子被打開了！");
	//reactor.dropItems(0,0,0,[4001260,999999]);
	//map.spawnMob(9300117, 1);
} else {
	//map.broadcastEventNotice("未開啟"+event+"");
	
}

