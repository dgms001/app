start();
function start(){
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (map.getId() == 104000000) {
		npc.say("您已經在回到了櫻花村了。");
	}else{
	// npc.makeEvent("paodian", true, [player, 104000000]);
	player.changeMap(104000000,1);
	}
}
