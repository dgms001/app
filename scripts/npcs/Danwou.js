var message = Array(
Array(1012438,20,1,3),//	漩渦文身
Array(1022211,20,1,3),//	漩渦眼鏡
Array(1032224,20,1,3),//	漩渦耳環
Array(1122269,20,1,3),//	漩渦吊墜
Array(1132247,20,1,3),//	漩渦腰帶
Array(1152160,20,1,3),//	漩渦護肩
Array(1003976,20,1,3),//	漩渦帽子
Array(1102623,20,1,3),//	漩渦披風
Array(1082556,20,1,3),//	漩渦手套
Array(1052669,20,1,3),//	漩渦皇家外套
Array(2436471,20,1,3),//	漩渦武器
Array(2614060,40,1,3),//	突破500萬50%
Array(2614005,50,1,3),//	突破100萬100%
Array(2614067,20,1,3),//	突破1000萬100%
Array(2616074,20,1,3),//	V防御攻擊力
Array(2616075,20,1,3),//	V防御魔力
Array(2612076,20,1,3),//	V雙手攻擊
Array(2612077,20,1,3),//	V雙手魔力
Array(2613065,20,1,3),//	V單手攻擊
Array(2613064,20,1,3),//	V單手魔力
Array(1072870,20,1,3)//	漩渦鞋
)
var itemList = Array(
Array(1012438,20,1,3),//	漩渦文身
Array(1022211,20,1,3),//	漩渦眼鏡
Array(1032224,20,1,3),//	漩渦耳環
Array(1122269,20,1,3),//	漩渦吊墜
Array(1132247,20,1,3),//	漩渦腰帶
Array(1152160,20,1,3),//	漩渦護肩
Array(1003976,20,1,3),//	漩渦帽子
Array(1102623,20,1,3),//	漩渦披風
Array(1082556,20,1,3),//	漩渦手套
Array(1052669,20,1,3),//	漩渦皇家外套
Array(2436471,20,1,3),//	漩渦武器
Array(1072870,20,1,3),//	漩渦鞋
Array(2614060,40,1,3),//	突破500萬50%
Array(2614005,50,1,3),//	突破100萬100%
Array(2614067,20,1,3),//	突破1000萬100%
Array(2616074,20,1,3),//	V防御攻擊力
Array(2616075,20,1,3),//	V防御魔力
Array(2612076,20,1,3),//	V雙手攻擊
Array(2612077,20,1,3),//	V雙手魔力
Array(2613065,20,1,3),//	V單手攻擊
Array(2613064,20,1,3),//	V單手魔力
Array(2434775,200,1,3),
Array(2434776,200,1,3),
Array(2434777,200,1,3),
Array(2434778,200,1,3),
Array(2434779,200,1,3),
Array(2434780,200,1,3),
Array(1353105,500,1,3),
Array(1342095,500,1,3),
Array(1352009,500,1,3),
Array(1352109,500,1,3),
Array(1352206,500,1,3),
Array(1352216,500,1,3),
Array(1352226,500,1,3),
Array(1352276,500,1,3),
Array(1352286,500,1,3),
Array(1352296,500,1,3),
Array(1352406,500,1,3),
Array(1352506,500,1,3),
Array(1352707,500,1,3),
Array(1352815,500,1,3),
Array(1352906,500,1,3),
Array(1352916,500,1,3),
Array(1352935,500,1,3),
Array(1352945,500,1,3),
Array(1352957,500,1,3),
Array(1352967,500,1,3),
Array(1352975,500,1,3),
Array(1353006,500,1,3),
Array(1352928,500,1,3),
Array(1352236,500,1,3),
Array(1352246,500,1,3),
Array(1352256,500,1,3),
Array(1352266,500,1,3),
Array(1352606,500,1,3),
Array(1542075,500,1,3),
Array(1552075,500,1,3),
Array(1242076,500,1,3),
Array(1212077,500,1,3),
Array(1412144,500,1,3),
Array(1402204,500,1,3),
Array(1222072,500,1,3),
Array(1362099,500,1,3),
Array(1422149,500,1,3),
Array(1302285,500,1,3),
Array(1442232,500,1,3),
Array(1252058,500,1,3),
Array(1452214,500,1,3),
Array(1312162,500,1,3),
Array(1232071,500,1,3),
Array(1372186,500,1,3),
Array(1342084,500,1,3),
Array(1322213,500,1,3),
Array(1382220,500,1,3),
Array(1332235,500,1,3),
Array(1432176,500,1,3),
Array(1442232,500,1,3),
Array(1452214,500,1,3),
Array(1462202,500,1,3),
Array(1472223,500,1,3),
Array(1482177,500,1,3),
Array(1492188,500,1,3),
Array(1522103,500,1,3),
Array(1532106,500,1,3),
Array(1552084,500,1,3)

);


var yp = Array(1,2,1,3,4,3,1,2,4,5,2,3,4,5,2,4,5); //郵票

  
	if(map.getId() == 321116000){
		npc.say("不允許此地圖打開。");	
	}else{
		player.changeMap(105000000);
		
		var 破攻值 = randomFrom(50000, 100000)
		var txt = "[團隊副本]恭喜玩家:"+player.getName()+",獲得破攻值加成 : " + 破攻值 + "\r\n"
		var Equip = player.getInventorySlot(-1, -11);
		Equip.setLimitBreak(Equip.getLimitBreak() + 破攻值)
		player.updateItem(-11,Equip);
		npc.broadcastPlayerNotice(0xC,txt);
		
		var randyp = Math.floor(Math.random() * yp.length);

		var chance = Math.floor(Math.random() * 500);
			var finalitem = Array();
			for (var i = 0; i < itemList.length; i++) {
				if (itemList[i][1] >= chance) {
					finalitem.push(itemList[i]);
				}
		}

		var random = new java.util.Random();
		var finalchance = random.nextInt(finalitem.length);
		var itemId = finalitem[finalchance][0];
		for (var i = 0; i < yp[randyp]; i++) {
			player.gainItem(4001785,1);
		}
				
		var randx= Math.floor((Math.random()*3));
		var xwsj= Math.floor((Math.random()*20))+30;
		
		player.loseItem(2433706,1);
		var flag = true;
		for(var i = 0;i<message.length;i++){
			if(message[i][0]==itemId ){
				var item = player.gainGachaponItem("團隊副本箱子",itemId, 1,  3);
				flag = false;
			}
		}
		if(flag){
			player.gainItem(itemId,1);
		}
		npc.say("獎勵發放完畢，請注意查哦~~");
	}


function randomFrom(lowerValue, upperValue) {
    return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
}