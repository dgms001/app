var needList = Array(
	Array(4033732,2),


);

var selStr = "#fs21##e#r幫你升級到#v1052722##z1052722#\r\n";
selStr += "#fs16##e#r只要你給我以下材料:#l\r\n";
for(var i = 0; i < needList.length; i++) {
	selStr += "\r\n#v" + needList[i][0] + "#x" + needList[i][1];
}
//selStr += "#e#r,我可以幫您升級到#v1052721##z1052721#\r\n\r\n";
selStr += "\r\n請把#v1052721#放在裝備欄的第一格。";
let selection = npc.askYesNo(selStr);
if(selection == 1) {
	var item = player.getInventorySlot(1, 1);
	if(item == null) {
		npc.say("請把#v1052721#放在裝備欄的第一格。");
	} else if(item.getDataId() != 1052721) {
		npc.say("請把#v1052721#放在裝備欄的第一格。");
	} else {
		var flag = 1;
		for(var i = 0; i < needList.length; i++) {
			if(!player.hasItem(needList[i][0], needList[i][1]))
				flag = 0
		}
		if(flag == 1) {
			

			var toDrop = player.makeItemWithId(1052722);


			


			player.loseInvSlot(1, 1); //移除物品欄第一格的物品
			player.gainItem(toDrop)
			for(var i = 0; i < needList.length; i++) {
				player.loseItem(needList[i][0],needList[i][1]);
			}
			

			npc.broadcastPlayerNotice(7, "[滅龍製作] : 恭喜 " + player.getName() + " 製作出   ★★★首領鬥劍士騎士盔甲★★★" );
			npc.say("成功製作。");
			
		} else {
			npc.say("你的材料不夠哦,請檢查一下！");
		}
	}

}