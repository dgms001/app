
txt = "#fs17##b#e玩家你好,這邊提供強制白剪服務\r\n";
txt += "使用一次,消耗楓葉點數10萬\r\n";  
txt += "#r注意:1.請將裝備放在第一個欄位\r\n";
txt += "#r2.裝備最原始狀態如果為無法交換\r\n";
txt += "#r\r\n";
  
txt += "#b#L0#【點我強制白剪】#l";  
txt += "";  

let selection = npc.askMenu(txt);

switch (selection) {
		case 0:
    if (player.getCashShopCurrency(2) < 100000) {
        npc.say("#fs16##b#e楓葉點數不足，無法使用");
		
    } else {
		var toDrop =player.getInventorySlot(1,1);
		var itemid = player.getInventorySlot(1, 1).getDataId();
        toDrop.setAttribute(0);
        player.updateItem(1,toDrop);
        player.modifyCashShopCurrency(2, -100000);
        npc.say("#fs17##b#e#v"+itemid+"##g#z"+itemid+"##b已變成可交易。");
    }		

}