







var mapId= map.getId();
if(mapId>=867133900){
	player.changeMap(867135100 , 0);
}else{
	var stage=(mapId-867132000)/100;
	player.addPQLog("魔王塔",1,1);
	player.dropMessage(1,"记录以及保存，当前存档关卡为:"+(stage+1)+" 层");
	//npc.broadcastWeatherEffectNotice(37,"[魔王塔活动]： 玩家 " + player.getName() + " 在魔王塔爬到"+(stage+1)+"楼啦，点击活动副本进行传送哦~~各位玩家快来参与吧", 10000);
	//npc.broadcastNotice("[魔王塔活动]： 玩家 " + player.getName() + " 在魔王塔爬到"+(stage+1)+"楼啦，点击活动副本进行传送哦~~各位玩家快来参与吧");
	player.changeMap(mapId+100, 0);
}
