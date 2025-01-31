var event = npc.getEvent("worldboss");
if (parseInt(event.getVariable("state")) == 0) {
	//給與獎勵
	npc.say("獎勵說明1");
	//建議加個提示
	player.changeMap(105000000);
	}else{
	event.setVariable("state","0");
	//給予獎勵 和上面一樣 建議復制
	//給與獎勵
	player.changeMap(105000000);
	npc.say("獎勵說明2");
	}