if (player.getInventorySlot(2,1) == null){
	npc.say("請確認消耗欄位第一格為你要使用的表情組",true);
}else{
player.runScript("Emoticon");
}