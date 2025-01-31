var event = npc.getEvent("Event_TeamFB");
var map_2 = event.getMap(280030100); 

if(map.getId() == 940204113){//沒打完
	/*if(new Date().getTime()>event.getVariable("endTime")){
		player.changeMap(105000000);
		player.gainItem(4000016,1); 
	} else {
		map_2.showTimer((event.getVariable("endTime") - new Date().getTime())/1000 );
		player.changeMap(280030100);
	}	*/
	player.gainItem(4000016,1); 
} else if(map.getId() == 940204111){//打完了
	player.changeMap(105000000);
	player.gainItem(4000000,1);
}