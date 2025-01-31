var needList = Array(
	Array(4000034,400),
	Array(4000763,400),
	Array(4000004,400),
	Array(4000016,400),
	Array(1202122,1),
	Array(4000002,400)

);

var selStr = "#fs21##e#r我可以幫您升級到#v1202123##z1202123#\r\n\r\n";
selStr += "#fs16##e#r只要你給我以下材料:#l\r\n";
for(var i = 0; i < needList.length; i++) {
	selStr += "\r\n#v" + needList[i][0] + "#x" + needList[i][1];
}
//selStr += "#e#r,我可以幫您升級到#v1202122##z1190401#\r\n\r\n";
selStr += "\r\n請把#v1202122#放在裝備欄的第一格。";
let selection = npc.askYesNo(selStr);
if(selection == 1) {
	var item = player.getInventorySlot(1, 1);
	if(item == null) {
		npc.say("請把#v1202122#放在裝備欄的第一格。");
	} else if(item.getDataId() != 1202122) {
		npc.say("請把#v1202122#放在裝備欄的第一格。");
	} else {
		var flag = 1;
		for(var i = 0; i < needList.length; i++) {
			if(!player.hasItem(needList[i][0], needList[i][1])){
				flag = 0;
			}
				
		}
		if(flag == 1) {
			

			var toDrop = player.makeItemWithId(1202123);

			

			toDrop.setStr(35); //裝備力量
			toDrop.setDex(35); //裝備敏捷
			toDrop.setInt(35); //裝備智力
			toDrop.setLuk(35); //裝備運氣
			toDrop.setPad(35); //魔法攻擊
			toDrop.setMad(35); //物理攻擊 
			toDrop.setTitle("A等級BOSS");
			player.loseInvSlot(1, 1); //移除物品欄第一格的物品
			player.gainItem(toDrop)
			for(var i = 0; i < needList.length; i++) {
				player.loseItem(needList[i][0],needList[i][1]);
			}
			

			npc.broadcastPlayerNotice(7, "[圖騰升級] : 恭喜 " + player.getName() + " 製作出<A等級BOSS競技場徽章>獲得全屬性+35的圖騰 " );
			npc.say("成功升級到A等級BOSS競技場徽章。");
			
			//npc.broadcastGachaponMsgEx( "[符號升級] : 恭喜 " + player.getName() + " 升級到<B等級BOSS競技場徽章>獲得全屬性+20的符號證明.",toDrop);
		} else {
			npc.say("你的材料不夠哦,請檢查一下！");
		}
	}

}