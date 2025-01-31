

let mapA = map.getId();
if (mapA == 993001100) { //限制開啟地圖
    player.showSystemMessage("在卡BUG頭蓋骨給你打出來 操!!");
} else {
        text = "#e#fs21##v2431041##r#z2431041#獎勵如下:\r\n#n";
		text += "#fs16##b";
		text += "#v4032216##z4032216#*999\r\n";
		text += "#v4310252##z4310252#*5\r\n";
		text += "#v2472000##z2472000#*10\r\n";
		text += "#v5060048##z5060048#*5\r\n";
		text += "#v5062503##z5062503#*5\r\n";
		text += "#v5062010##z5062010#*5\r\n";
		text += "";
		text += "";
		text += "#e#fs16##L0#點我領取#l";
}
		let sel = npc.askMenuA("" + text,true);
    if(sel >= 0){
		if(player.getFreeSlots(2) < 3 || player.getFreeSlots(5) < 5 || player.getFreeSlots(3) < 5 ){
		npc.say("#fs18##b#e消耗欄位及其他欄位及特殊欄位不足。");
		} else {
		player.gainItem(4032216,999),
		player.gainItem(4032053,999),
		player.gainItem(4310252,5),
		player.gainItem(2472000,10),
		player.gainItem(5060048,5),
		player.gainItem(5062503,5),
		player.gainItem(5062020,5),
		player.loseItem(2431041,1);
		npc.broadcastNotice("[推文領取] 帳號ID: "+player.getAccountId()+"開啟推文箱子");
		//player.addEventLog("168推文次數",1,1000);

	}
	}


