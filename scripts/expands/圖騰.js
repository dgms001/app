
var needList=Array(
	Array(4000034,300),
	Array(4000763,300),
	Array(4000004,300),
	Array(4000016,300),
	Array(4000002,300)

);




var selStr =  "#fs21##e#r圖騰製作升級。\r\n";
//selStr += "請把#v1190400#放在裝備欄的第一格。";
    selStr +="#fs16##e#b需要以下材料:#l\r\n";
for(var i = 0; i < needList.length; i++) {
	selStr += "\r\n#v" + needList[i][0] + "#x" + needList[i][1];
}
selStr += "\r\n\r\n#e#r全屬性10,逐次升級提升屬性\r\n\r\n";

let selection = npc.askYesNo(selStr);
if(selection == 1) {


			

			var toDrop = player.makeItemWithId(1202140);
			
			//設置潛能等級


			

			toDrop.setStr(15); //裝備力量
			toDrop.setDex(15); //裝備敏捷
			toDrop.setInt(15); //裝備智力
			toDrop.setLuk(15); //裝備運氣
			toDrop.setPad(15); //魔法攻擊
			toDrop.setMad(15); //物理攻擊 
			toDrop.setTitle("C等級BOSS");

			//player.loseInvSlot(1, 1); //移除物品欄第一格的物品
			player.gainItem(toDrop);
			
			for(var i = 0; i < needList.length; i++) {
				player.loseItem(needList[i][0],needList[i][1]);
			}
			npc.broadcastPlayerNotice(7, "[圖騰升級] : 恭喜 " + player.getName() + " 製作出<C等級BOSS競技場徽章>獲得全屬性+10的圖騰 " );

			npc.say("成功升級到C等級BOSS競技場徽章。");
			
			//npc.broadcastGachaponMsgEx( "[符號升級] : 恭喜 " + player.getName() + " 製作出<C等級BOSS競技場徽章>獲得全屬性+10的符號證明.",toDrop);
		} else {
			npc.say("你的材料不夠哦,請檢查一下！");
		}