
var toDrop =player.getInventorySlot(1,1);

txt = "#fs14##b玩家你好,這邊提供強制白剪服務\r\n";
txt += "\r\n"; 
if(toDrop != null){
	
	itemid = player.getInventorySlot(1, 1).getDataId();
	txt += "#b當前道具為#v"+itemid+"#\r\n";
} else {
	txt += "#r裝備欄位第一格未放置道具\r\n";
}
txt += "#r\r\n";
  
txt += "#b#L0#【點我強制白剪】#l";  
txt += "";  

let selection = npc.askMenu(txt);

switch (selection) {
		case 0:
			toDrop.setAttribute(1080);
			player.updateItem(1,toDrop);
			player.loseItem(2432905,1);
			npc.say("#b#v"+itemid+"##z"+itemid+"##k已變成可交易1次。");
			break;
}