
var text = "";
if (player.getEventValue("首次直播獎勵") < 1) {
	text += "#e#fs18##v2430066##r首次直播禮包獎勵如下:\r\n#n";
	text += "#fs13##b";
	text += "#v1142499##z1142499#*1\r\n";
	text += "#v4009411##z4009411#*5\r\n";
	text += "#v4032053##z4032053#*1000\r\n";
	text += "#v5062500##z5062500#*50\r\n";
	text += "#v5064400##z5064400#*10\r\n";
	text += "#v4009411##z4009411#*20\r\n\r\n";

} else {
	text += "#e#fs18##v2430066##r後續直播禮包獎勵如下:\r\n#n";
	text += "#fs13##b";
	text += "#v4009411##z4009411#*3\r\n";
	text += "#v4032053##z4032053#*1000\r\n";
	text += "#v5062500##z5062500#*30\r\n";
	text += "#v5064400##z5064400#*5\r\n";
	text += "#v4009411##z4009411#*5\r\n\r\n";

}
text += "#e#d#fs16##L0#點我領取#l";
let sel = npc.askMenu("" + text, true);
if (sel >= 0) {
	if (player.getFreeSlots(2) < 3 || player.getFreeSlots(5) < 5 || player.getFreeSlots(3) < 5) {
		npc.say("#fs18##b#e消耗欄位及其他欄位及特殊欄位不足。");
	} else {
		if (player.getEventValue("首次直播獎勵") < 1) {
			let newItem = player.makeItemWithId(1142499);
			newItem.setStr(100);
			newItem.setDex(100);
			newItem.setInt(100);
			newItem.setLuk(100);
			newItem.setMaxHp(5000);
			newItem.setMaxMp(2500);
			newItem.setPad(100);
			newItem.setMad(100);
			newItem.setBossDamageR(10);
			newItem.setIgnorePDR(10);
			newItem.setDamR(10);
			player.gainItem(newItem);
			//player.gainItem(1142499,1),//
			player.gainItem(4009411, 5),//
				player.gainItem(4032053, 1000),//
				player.gainItem(5062500, 50),//
				player.gainItem(5064400, 10),//
				player.gainItem(4009411, 20),//
				player.loseItem(2430066, 1);
			player.addEventValue("首次直播獎勵", 1, 999);
			npc.broadcastNotice("帳號ID:" + player.getAccountId() + "領取首次直播獎勵");
		} else {
			player.gainItem(4009411, 3),//
				player.gainItem(4032053, 1000),//
				player.gainItem(5062500, 30),//
				player.gainItem(5064400, 5),//
				player.gainItem(4009411, 5),//
				player.loseItem(2430066, 1);
			player.addEventValue("後續直播獎勵", 1, 999);
			npc.broadcastNotice("帳號ID:" + player.getAccountId() + "領取直播獎勵");
		}


	}
}


/*

if(player.getEventValue("首次直播獎勵")<=0){



		var text = "#e#fs18##v2430066##r首次直播禮包獎勵如下:\r\n#n";
		text += "#fs13##b";
		text += "#v1142499##z1142499#*1\r\n";
		text += "#v4009411##z4009411#*5\r\n";
		text += "#v4032053##z4032053#*1000\r\n";
		text += "#v5062500##z5062500#*50\r\n";
		text += "#v5064400##z5064400#*10\r\n";
		text += "#v4009411##z4009411#*20\r\n\r\n";
		text += "#e#d#fs16##L0#點我領取#l";
		let sel = npc.askMenu("" + text,true);
	if(sel >= 0){
		if(player.getFreeSlots(2) < 3 || player.getFreeSlots(5) < 5 || player.getFreeSlots(3) < 5 ){
		npc.say("#fs18##b#e消耗欄位及其他欄位及特殊欄位不足。");
		} else {
		let newItem = player.makeItemWithId(1142499);
		newItem.setStr(100);
		newItem.setDex(100);
		newItem.setInt(100);
		newItem.setLuk(100);
		newItem.setMaxHp(5000);
		newItem.setMaxMp(2500);
		newItem.setPad(100);
		newItem.setMad(100);
		newItem.setBossDamageR(10);
		newItem.setIgnorePDR(10);
		newItem.setDamR(10);
		player.gainItem(newItem);	
		//player.gainItem(1142499,1),//
		player.gainItem(4009411,5),//
		player.gainItem(4032053,1000),//
		player.gainItem(5062500,50),//
		player.gainItem(5064400,10),//
		player.gainItem(4009411,20),//
		player.loseItem(2430066,1);
		player.addEventValue("首次直播獎勵",1,999);

	}
	}
	
}else{






		var text = "#e#fs18##v2430067##r後續直播禮包獎勵如下:\r\n#n";
		text += "#fs13##b";
		text += "#v4009411##z4009411#*3\r\n";
		text += "#v4032053##z4032053#*1000\r\n";
		text += "#v5062500##z5062500#*30\r\n";
		text += "#v5064400##z5064400#*5\r\n";
		text += "#v4009411##z4009411#*5\r\n\r\n";
		text += "#e#d#fs16##L0#點我領取#l";
		let sel = npc.askMenu("" + text,true);
	if(sel >= 0){
		if(player.getFreeSlots(2) < 3 || player.getFreeSlots(5) < 5 || player.getFreeSlots(3) < 5 ){
		npc.say("#fs18##b#e消耗欄位及其他欄位及特殊欄位不足。");
		} else {
		player.gainItem(4009411,3),//
		player.gainItem(4032053,1000),//
		player.gainItem(5062500,30),//
		player.gainItem(5064400,5),//
		player.gainItem(4009411,5),//
		player.loseItem(2430067,1);

		player.addEventValue("後續直播獎勵",1,999);
	}
	}



}
*/