var potList = Array(
	Array(-1, "帽子", 0),
	Array(-2, "前額", 0),
	Array(-3, "臉飾", 0),
	Array(-4, "耳飾", 0),
	Array(-5, "衣服", 0),
	Array(-6, "短褲", 0),
	Array(-7, "鞋子", 0),
	Array(-8, "手套", 0),
	Array(-9, "披風", 0),
	Array(-29, "腰帶", 0),
	Array(-30, "肩部", 0),
	Array(-37, "符號", 0),
	Array(-36, "徽章", 0),
	Array(-26, "獎牌", 0),
	Array(-17, "吊墜", 0),
	Array(-38, "吊墜", 0),
	Array(-10, "副手", 0),
	Array(-11, "武器", 0),
	Array(-12, "戒指", 0),
	Array(-13, "戒指", 0),
	Array(-15, "戒指", 0),
	Array(-16, "戒指", 0),
	Array(-27, "戒指", 0),
	Array(-28, "戒指", 0),
	Array(-33, "口袋", 0),
	Array(-34, "機器", 0),
	Array(-35, "心臟", 0),
	Array(-5000, "圖騰", 0),
	Array(-5001, "圖騰", 0),
	Array(-5002, "圖騰", 0),
	Array(-1600, "神秘", 0),
	Array(-1601, "神秘", 0),
	Array(-1602, "神秘", 0),
	Array(-1603, "神秘", 0),
	Array(-1604, "神秘", 0),
	Array(-1605, "神秘", 0)
);
var aaaaa = "#fUI/UIWindow4/Equip/Equip/Slots/27#";


start();
function start() {
	var str ="";
	for(var i = 0;i<potList.length;i++){
		var item = player.getInventorySlot(-1,potList[i][0]);
		if(item != null){
			str += item.getId() + " ----  "+ item +"\r\n";
		}
		
	}
	
	//for(var i = 0;i<128;i++){
	//	var item = player.getInventorySlot(2,i);
	//	if(item != null){
	//		str += item.getId() + " ----  "+ item +"\r\n";
	//	}
	//	
	//}
	////java.lang.System.out.println(str);
	var selected = npc.askMenu(str);//sort+
}


 
