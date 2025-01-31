
var sel_1 = npc.askYesNo("您確定現在要出去嗎？");
if(sel_1 == 0) {
	npc.say("那你再考慮考慮.....");
} else {
	//player.changeMap(105000000);
	player.changeMap(105000000);
}