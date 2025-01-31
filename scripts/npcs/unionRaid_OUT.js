var event = npc.getEvent("Event_TeamFB");
var map_2 = event.getMap(921172100); 

if(map.getId() == 921172201){
	if(new Date().getTime()>event.getVariable("endTime")){
		player.changeMap(100000000);
		player.gainItem(4000016,1); 
	} else {
		map_2.showTimer((event.getVariable("endTime") - new Date().getTime())/1000 );
		player.changeMap(921172100);
	}	
} else if(map.getId() == 921172200){
	player.changeMap(100000000);
	player.gainItem(4000000,1);
}