







var mapId= map.getId();
if(mapId>=867133900){
	player.changeMap(867135100 , 0);
}else{
	var stage=(mapId-867132000)/100;
	player.addPQLog("魔王塔",1,1);
	player.dropMessage(1,"记录以及保存，当前存档关卡为:"+(stage+1)+" 层");
	player.changeMap(mapId+100, 0);
}
