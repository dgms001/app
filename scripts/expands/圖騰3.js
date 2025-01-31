var needList = Array(
	Array(4001618, 10),
	Array(4000000, 10)

);

var selStr = "#fs21##e#r我可以幫您升級到#v1202124##z1202124#\r\n\r\n";
selStr += "#fs16##e#r只要你給我以下材料:#l\r\n";
for(var i = 0; i < needList.length; i++) {
	selStr += "\r\n#v" + needList[i][0] + "#x" + needList[i][1];
}
//selStr += "#e#r,我可以幫您升級到#v1190402##z1190401#\r\n\r\n";
selStr += "\r\n請把#v1202123#放在裝備欄的第一格。";
let selection = npc.askYesNo(selStr);
if(selection == 1) {
	var item = player.getInventorySlot(1, 1);
	if(item == null) {
		npc.say("請把#v1202123#放在裝備欄的第一格。");
	} else if(item.getDataId() != 1202123) {
		npc.say("請把#v1202123#放在裝備欄的第一格。");
	} else {
		var flag = 1;
		for(var i = 0; i < needList.length; i++) {
			if(!player.hasItem(needList[i][0], needList[i][1])){
				flag = 0;
			}
				
		}
		if(flag == 1) {
			

			var toDrop = player.makeItemWithId(1202124);


			

			toDrop.setStr(50); //裝備力量
			toDrop.setDex(50); //裝備敏捷
			toDrop.setInt(50); //裝備智力
			toDrop.setLuk(50); //裝備運氣
			toDrop.setPad(50); //魔法攻擊
			toDrop.setMad(50); //物理攻擊 
			toDrop.setTitle("S等級BOSS");
			player.loseInvSlot(1, 1); //移除物品欄第一格的物品
			player.gainItem(toDrop)
			for(var i = 0; i < needList.length; i++) {
				player.loseItem(needList[i][0],needList[i][1]);
			}
			

			
			npc.broadcastPlayerNotice(7, "[圖騰升級] : 恭喜 " + player.getName() + " 製作出<S等級BOSS競技場徽章>獲得全屬性+50的圖騰 " );
			npc.say("成功升級到S等級BOSS競技場徽章。");
			
		} else {
			npc.say("你的材料不夠哦,請檢查一下！");
		}
	}

}