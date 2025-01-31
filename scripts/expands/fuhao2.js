var needList = Array(
	Array(4001618, 30),
	Array(4000000, 3000),
	Array(4000016, 3000),
	Array(4021016, 50),
	Array(4000124, 50),
	Array(4000313, 60),
	Array(1190401, 1),
	Array(4033356, 20)
);

var selStr = "#e#r只要你給我以下材料:#l\r\n";
for(var i = 0; i < needList.length; i++) {
	selStr += "#v" + needList[i][0] + "#x" + needList[i][1];
}
selStr += "#e#r,我可以幫您升級到#v1190402##z1190401#\r\n\r\n";
selStr += "請把#v1190401#放在裝備欄的第一格。";
let selection = npc.askYesNo(selStr);
if(selection == 1) {
	var item = player.getInventorySlot(1, 1);
	if(item == null) {
		npc.say("請把#v1190401#放在裝備欄的第一格。");
	} else if(item.getDataId() != 1190401) {
		npc.say("請把#v1190401#放在裝備欄的第一格。");
	} else {
		var flag = 1;
		for(var i = 0; i < needList.length; i++) {
			if(!player.hasItem(needList[i][0], needList[i][1]))
				flag = 0
		}
		if(flag == 1) {
			

			var toDrop = player.makeItemWithId(1190402);

			//設置潛能等級
			toDrop.setState(item.getState(false),false);
			toDrop.setState(item.getState(true),true);
			//設置潛能
			toDrop.setPotential1(item.getPotential1());
			toDrop.setPotential2(item.getPotential2());
			toDrop.setPotential3(item.getPotential3());
			toDrop.setPotential4(item.getPotential4());
			toDrop.setPotential5(item.getPotential5());
			toDrop.setPotential6(item.getPotential6());
			

			toDrop.setStr(20); //裝備力量
			toDrop.setDex(20); //裝備敏捷
			toDrop.setInt(20); //裝備智力
			toDrop.setLuk(20); //裝備運氣
			toDrop.setPad(20); //魔法攻擊
			toDrop.setMad(20); //物理攻擊 
			toDrop.setTitle("B等級BOSS");
			player.loseInvSlot(1, 1); //移除物品欄第一格的物品
			player.gainItem(toDrop)
			for(var i = 0; i < needList.length; i++) {
				player.loseItem(needList[i][0],needList[i][1]);
			}
			
			player.gainMesos();
			
			player.gainItem(2340000,30);       //zhufu 
			player.gainItem(4001839,3000);     //xingxing
			player.gainItem(5220040,20);       //zhuandan
			player.gainItem(2049116,30);       //強混
			player.gainItem(2049604,3);        //還原
			player.gainItem(5062503,30);       //附加記憶
			
			npc.say("成功升級到B等級BOSS競技場徽章。");
			npc.broadcastGachaponMsgEx( "[符號升級] : 恭喜 " + player.getName() + " 升級到<B等級BOSS競技場徽章>獲得全屬性+20的符號證明.",toDrop);
		} else {
			npc.say("你的材料不夠哦,請檢查一下！");
		}
	}

}