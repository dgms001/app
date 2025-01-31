/**
** 點裝搜索代碼 新端腳本 幾裏315342975
**/

let needMoney = 1000; //所需楓點
let banItems = Array(
	//手動ban物品
	5000964,
	1113220, 
	1053159, 
	1112001, 
	1112918, //羈絆之翼
	1112965, //夢境蝴蝶
	1102963, //羈絆之翼
	1003843, //奇怪的狐狸面具
	1082553, //紅色十字架手套
	1032234, //藍色桃心耳環
	1012553, //咬緊牙關的面罩
	1702472, //萬聖節的命運
	1102724, //黑暗天使羽翼
	1102723, //光明天使羽翼
	2438391,
	1033000,
	1115014, //MVP對話框戒指（鑽石）
	1115102, //MVP名片戒指（鑽石）
	1115012, //MVP對話框戒指（白銀） 等級要求：0
	1115013, //MVP對話框戒指（黃金） 等級要求：0
	1115100, //MVP名片戒指（白銀） 等級要求：0
	1115101, //MVP名片戒指（黃金） 等級要求：0
	1102965, //螢火蟲之舞 等級要求：0
	1112244, //蝙蝠聊天戒指
	1004472, //餓狼傳說帽子
	1102604, //蒼穹之翼
	1112966, //靈魂密友友情戒指
	1112968, //靈魂密友友情戒指
	1102873, //永恆初心者
	1102872,//閃耀初心者
	    1113298, //精靈的戒指
    1113299, //心願的戒指
    1114317, //EXP推進戒指10%
    1112918, //I'm Back 戒指
    1112127, //Welcome Back
    1112917, //超級新人王戒指
    1114400, //燃燒之戒
    1114402, //艾爾達斯祝福戒指
    1114401, //苦行戒指
    1032261, //內面耀光
    1113228, //內面暴風
    1114000, //血盟的戒指
    1113220, //幽暗戒指
    1033000, //露希妲耳環
    1113021, //愛情加速機器
    1122210, //赫拉的鑰匙項鍊
    1115100, //MVP名牌戒指(銀)
    1115012, //MVP聊天戒指(銀)
    1115101, //MVP名牌戒指(黃金)
    1115013, //MVP聊天戒指(黃金)
    1115014, //MVP聊天戒指(鑽石)
    1115102, //MVP名牌戒指(鑽石)
    1115196, //MVP名牌戒指(Red)
    1115095, //MVP聊天戒指(Red)
    1102872, //閃亮貴族
    1102873, //永恆貴族

	5000094,
	1802082,
	1102872//閃耀初心者
);
let autoBan = true; //是否開啟自動ban物品 （帶4圍的就ban掉） true開啟 false關閉
let text = "#r#h0# 歡迎來到#e#r自選點裝商城（1000楓點一件）#n#k\r\n#b您需要輸入點裝代碼進行搜索,如果不知道點裝代碼\r\n請點擊下方的代碼查詢網站進行查詢！\r\n#1.請你確保您輸入的代碼正確無誤\r\n#2.必須是現金裝備才可以購買\r\n#b#L0#開始自選點裝#l\r\n#L1#打開代碼查詢網網①#l\r\n";
let YN = npc.askMenuA(text,9010061);
if(YN == 0){
	while(true){
		let selectText = npc.askNumber("請輸入您要搜索的點裝代碼",0, 1000000, 1999999);
		let toDrop = player.makeItemWithId(selectText);
		if(banItems.indexOf(selectText) != -1){
			npc.say("該裝備已被管理員拉入小黑屋，不可購買！",9010061);
		}else if(null == toDrop){
			npc.say("您輸入的代碼不存在，請重新輸入",9010061);
		}else{
			if(toDrop.getData().isCash()){
				if(autoBan && (toDrop.getStr() > 0 || toDrop.getDex() > 0 || toDrop.getInt() > 0 || toDrop.getLuk() > 0 || toDrop.getMad() > 0|| toDrop.getPad() > 0)){
					npc.say("#v"+selectText+"# 該裝備存在屬性,不可購買！",9010061);
				}else{
					let ss = "#b您是否想花費 #r"+needMoney+" #b楓點購買 #v"+selectText+"#";
					YN = npc.askYesNo(ss,9010061);
					if(YN == 1){
						if(player.getCashShopCurrency(2) < needMoney){
							npc.say("你沒有" + needMoney + " 楓點",9010061);	
						}else if(!player.canGainItem(selectText,1)){
							npc.say("請清理背包",9010061);	
						}else{
							player.gainItem(selectText,1);
							player.modifyCashShopCurrency(2,-needMoney);
							npc.say("購買成功!歡迎繼續選購！",9010061);
						}
					}else{
						npc.say("找錯了？那麼請繼續選購吧！",9010061);
					}
				}
			}else{
				npc.say("您輸入的不是現金裝備代碼！請重新輸入",9010061);
			}
		
		}
		
	}
}else if(YN == 1){
	player.openURL("http://www.mxdweb.com");
	//player.runScript("zxdz")
}