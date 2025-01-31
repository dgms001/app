var status = 0;
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconX = "#fEffect/CharacterEff/1112905/0/1#";
var iconStar = "#fEffect/CharacterEff/1112904/2/1#";
var icon1 = "#fEffect/CharacterEff/1042176/0/0#";
var iconHR = "#fEffect/CharacterEff/1082565/0/0#"
var icon2 = "#fEffect/CharacterEff/1082565/2/0#";
var icon3 = "#fEffect/CharacterEff/1082565/4/0#";
var icon4 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var c10 = "#fEffect/ItemEff.img/1112807/0/0#" //小图标
var giftContent = Array( //後面寫禮包內容道具的時候Array的前面都有逗號  一定要找規律  逗號不能少不能多 兄弟

	Array("" + c10 + "#fs21#[#fs21##e掉寶禮包]",
		200,
			Array(
		Array(2022531, 10,"[一起吃掉增加40%掉寶]"),    
	
		Array(2023721, 20,"") 
			),// 星星
	),
	Array("" + c10 + "[經驗禮包]",
		200,
			Array(
		// 禮包2 499元
		Array(2450158, 10,"[一起吃掉增加5倍經驗倍率]"),

		Array(2023380, 10,"") 
			), 		// 
	),
	Array("" + c10 + "[勳章強化禮包]",
		200,
			Array(
		// 禮包3 999元
		
        Array(2632487, 9999,"[可以用於十次勳章強化]"),    //

			),		// 
	),
	Array("" + c10 + "[贊助強化禮包]",
		800,
			Array(
		// 禮包4 2999元
		Array(2632486, 1,"[可以用於一次贊助強化]"),  

			),		//
	),
	Array("" + c10 + "[副本重載禮包]",
		900,
			Array(
		// 禮包5 6999元
		Array(2633609, 10,"[可以用於重載副本]"), 		

			), 		//喵星許願瓶
	),
	/*Array("" + c10 + "[超值禮包6]",
		10888,
			Array(
		// 禮包6 12999元
		Array(3994421, 3,""),  		
		Array(2630627, 6,""), 
		Array(2630626, 1,""),   		
		Array(1202262, 1,""), 
		Array(1202261, 1,""),
		Array(1202260, 1,""),				//圖騰
		Array(2433028, 1,""),
		Array(2631761, 4,""),		        //X卷自選箱子
		Array(1012632, 1,""),           //獨眼巨人之眼Lv.3
		Array(1022278, 1,""),      //防暴卷軸
		Array(1132308, 1,""),       //祝福卷軸
		Array(2630875, 50,""), //大師附加神奇魔方
		Array(2435824, 20,""),     //閃炫 
		Array(2049389, 2,""),     //閃炫
		Array(2439383, 1,"被詛咒的魔道書自選"),       //祝福卷軸
		Array(1113306, 1,""), //大師附加神奇魔方
		Array(1113302, 1,""),     //閃炫
		Array(1182285, 1,""), 
		Array(2614077, 2,""),     //閃炫
		Array(2049387, 6,"") 	
			),		//七彩摩天輪椅子
	)*/
);
var giftId = -1;
var gifts = null;
var price = 999;
var 送點卷;
var column = new Array("裝備", "消耗", "設置", "其他", "商城");
var needItem=4009411;
var text = "#fs21##e#b歡迎來到圓夢谷超值禮包商城,點擊可以查看禮包內容哦!\r\n";
text += "您當前剩餘個數為：#r" + player.getAmountOfItem(needItem) + "#k #v4000463#" + "#k\r\n";
//text+="#L999##b充值鏈接#k#l\r\n\r\n";
for(var key in giftContent) {
	text += "#b#n#L" + key + "##r#e" + giftContent[key][0] + "#n#b #b  消耗  #r" + giftContent[key][1] + "#b個#v"+needItem+"##n#b#l#k\r\n";
}
let selection = npc.askMenuA(text);
if(selection ==999){
	player.runScript("充值鏈接");
}else{
	giftId = parseInt(selection);
	price = giftContent[giftId][1];
	gifts = giftContent[giftId][2];
	送點卷 = giftContent[giftId][3];
	var text = "#r#e" + giftContent[giftId][0] + "#n#b\r\n#e#r\r\n";
	for(var key in gifts) {
	var itemId = gifts[key][0];
	var itemQuantity = gifts[key][1];
		text += "#fs15##e#i" + itemId + ":##b" + (itemId == -1 ? "贈送點卷" : "#z" + itemId + "#") + "#rx " + itemQuantity + "#b" + gifts[key][2] + "#k\r\n";
	}
		text += "\r\n#b是否花費#e#r" + price + "#b#v"+needItem+"#購買該禮包？#k";
	let sel = npc.askYesNo(text);

	if(sel == 1) {

	if(!player.hasItem(needItem,price)) {
		npc.say("您的國慶幣不足，請先充值後再購買。");
		player.runScript("超值禮包");			
	} else if(player.getFreeSlots(2) < 8 || player.getFreeSlots(3) < 8 || player.getFreeSlots(4) < 8 || player.getFreeSlots(5) < 8 || player.getFreeSlots(1) < 8) {
		npc.say("每一個格子都要保證有8個空間以上哦");
		player.runScript("超值禮包");			
	} else {
		//addHyPay(price);
		player.loseItem(needItem,price);
		
		npc.broadcastNoticeWithoutPrefix("【超值禮包】玩家"+player.getName()+" 購買了"+price+"餘額禮包，獲得一系列珍貴的道具");
		for(var key in gifts) {
			var itemId = gifts[key][0];
			var itemQuantity = gifts[key][1];
			player.gainItem(itemId, itemQuantity);
		}							
		npc.say("恭喜您，購買成功！");
		player.runScript("超值禮包");			
	}

	}
}


function getHyPay() {
	var sql = "select pay from hypay where accountid = ? ";
	var result = player.customSqlResult(sql, player.getAccountId());
	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("pay");
		}
	} else {
		return 0;
	}

}

function addHyPay(price) {
	if(price<0){
		price=price*-1;
	}
	var sql = "update hypay set pay=pay-?,payused=payused+"+price+" where accountId=?";
	var result = player.customSqlUpdate(sql, price, player.getAccountId());

}