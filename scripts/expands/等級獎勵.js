/*  This is mada by dgms    
 *  This source is made by Funms Team
 *  功能：等級送禮
 *  @Author dgms 
 */
//10, 100, 150, 200, 210, 220, 230, 240, 250, 260, 275 ,275, 280, 285, 290, 295, 300
var status = 0;
var bossid = "等級獎勵15";
var giftLevel = Array(100, 150, 200, 220, 240, 250, 260, 270, 280, 290, 300);
var giftContent = Array(//力量.敏捷.致力.幸運.生命.魔力.物攻.魔攻.B傷.無視傷.總傷.星力,專屬輪迴用
	//100
	Array(

		Array(4001714, 2, 1),//定居金100萬楓幣
		Array(2472000, 10, 1),//白槌
		Array(4001832, 500, 1),//咒文的痕跡
		Array(2001505, 100, 1),//超級藥水
		Array(2023380, 5, 1),//經驗2倍
		Array(2630512, 20, 1),//ARC自選
		Array(2635034, 3, 1),//X卷
		Array(5062017, 20, 1),//閃耀方塊
		Array(5062500, 20, 1),//附加方塊
		Array(3700512, 1, 1),//聯盟的英雄
		Array(1142250, 1, 1, 20, 20, 20, 20, 100, 100, 20, 20, 0, 0, 0, 5)//改屬勳章




	),
	//150
	Array(
		Array(4001714, 4, 2),//定居金100萬楓幣
		Array(2472000, 10, 2),//白槌
		Array(4001832, 500, 2),//咒文的痕跡
		Array(2001505, 200, 2),//超級藥水
		Array(2023380, 5, 2),//經驗2倍
		Array(2630512, 30, 2),//ARC自選
		Array(5062020, 20, 2),//閃炫方塊
		Array(5062009, 20, 2),//紅色方塊
		Array(2635034, 5, 2),//X卷
		Array(2644024, 1, 2)//15星力

	),

	//200
	Array(
		Array(2591610, 2, 3),//重量之魂
		Array(2590012, 2, 3),//150靈魂卷軸
		Array(2472000, 20, 3),//白槌
		Array(4001714, 6, 3),//定居金100萬楓幣
		Array(4001832, 500, 3),//咒文的痕跡
		Array(2001505, 300, 3),//超級藥水
		Array(2023380, 5, 3),//經驗2倍
		Array(2630512, 30, 3),//ARC自選
		Array(2635034, 10, 3),//X卷
		Array(5062017, 20, 3),//閃耀方塊
		Array(5062500, 20, 3),//附加方塊
		Array(2644024, 1, 3),//15星力
		Array(1142577, 1, 3, 50, 50, 50, 50, 800, 800, 25, 25, 0, 0, 0, 0)//精靈的英雄 勳章
	),
	//220
	Array(

		Array(1190544, 1, 4),//覺醒的記憶徽章
		Array(2472000, 20, 4),//白槌
		Array(2023380, 5, 4),//經驗2倍
		Array(4001714, 8, 4),//定居金100萬楓幣
		Array(4001832, 500, 4),//咒文的痕跡
		Array(2630512, 40, 4),//ARC自選
		Array(2001505, 400, 4),//超級藥水
		Array(2635039, 3, 4),//V卷
		Array(5062020, 30, 4),//閃炫方塊
		Array(5062009, 30, 4),//紅色方塊
		Array(2049385, 1, 4),//16星力
		Array(5121104, 2, 4)//經驗天氣
	),

	//240
	Array(
		Array(2023380, 5, 5),//經驗2倍
		Array(2472000, 20, 5),//白槌
		Array(4001714, 10, 5),//定居金100萬楓幣
		Array(4001832, 500, 5),//咒文的痕跡
		Array(2630512, 40, 5),//ARC自選
		Array(2001505, 400, 5),//超級藥水
		Array(2635039, 5, 5),//V卷
		Array(5062017, 40, 5),//閃耀方塊
		Array(5062500, 40, 5),//附加方塊
		Array(2049385, 1, 5),//16星力
		Array(5121104, 2, 5) //經驗天氣

	),

	//250
	Array(
		Array(3700513, 1, 6),//聯盟的傳說
		Array(2472000, 30, 6),//白槌
		Array(2023380, 5, 6),//經驗2倍
		Array(4001714, 15, 6),//定居金100萬楓幣
		Array(4001832, 500, 6),//咒文的痕跡
		Array(2633336, 30, 6),//AUT自選
		Array(2001505, 500, 6),//超級藥水
		Array(2635039, 10, 6),//V卷
		Array(5062020, 50, 6),//閃炫方塊
		Array(5062009, 50, 6),//紅色方塊
		Array(2049386, 1, 6),//17星力
		Array(5121104, 5, 6),//經驗天氣
		Array(1142906, 1, 6, 100, 100, 100, 100, 1500, 1500, 50, 50, 0, 0, 0, 0)//精靈之王 勳章
	),

	//260
	Array(
		Array(2023380, 5, 7),//經驗2倍
		Array(2472000, 30, 7),//白槌
		Array(4001715, 1, 7),//定居金一億
		Array(4001832, 500, 7),//咒文的痕跡
		Array(2633336, 30, 7),//AUT自選
		Array(2001505, 500, 7),//超級藥水
		Array(2635038, 3, 7),//B卷
		Array(5062026, 20, 7),//結合方塊
		Array(5062503, 20, 7),//白色附加方塊
		Array(2049386, 1, 7),//17星力
		Array(5121104, 5, 7) //經驗天氣
	),



	//270
	Array(
		Array(2023380, 5, 8),//經驗2倍
		Array(2472000, 40, 8),//白槌
		Array(4001715, 1, 8),//定居金一億
		Array(4001832, 500, 8),//咒文的痕跡
		Array(2633336, 40, 8),//AUT自選
		Array(2001505, 500, 8),//超級藥水
		Array(2635038, 5, 8),//B卷
		Array(5062026, 20, 8),//結合方塊
		Array(5062503, 20, 8),//白色附加方塊
		Array(2049387, 1, 8),//18星力
		Array(5121104, 10, 8),//經驗天氣
		Array(2644008, 1, 8),//追加星力100%
		Array(1142084, 1, 8, 150, 150, 150, 150, 2500, 2500, 75, 75, 0, 0, 0, 0)//永不放棄的挑戰者勳章
	),

	//280
	Array(
		Array(2023380, 5, 9),//經驗2倍
		Array(2472000, 50, 9),//白槌
		Array(4001715, 2, 9),//定居金一億
		Array(4001832, 500, 9),//咒文的痕跡
		Array(2633336, 50, 9),//AUT自選
		Array(2001505, 500, 9),//超級藥水
		Array(2635038, 10, 9),//B卷
		Array(5062026, 30, 9),//結合方塊
		Array(5062503, 30, 9),//白色附加方塊
		Array(2049387, 1, 9),//18星力
		Array(5121104, 10, 9),//經驗天氣
		Array(2644008, 1, 9)//追加星力100%
	),


	//290
	Array(
		Array(2023380, 5, 10),//經驗2倍
		Array(2472000, 50, 10),//白槌
		Array(4001715, 3, 10),//定居金一億
		Array(4001832, 500, 10),//咒文的痕跡
		Array(2633336, 50, 10),//AUT自選
		Array(2001505, 500, 10),//超級藥水
		Array(2635037, 20, 10),//榮耀捲軸
		Array(5064400, 20, 10),//恢復卡
		Array(5062026, 40, 10),//結合方塊
		Array(5062503, 40, 10),//白色附加方塊
		Array(2049388, 2, 10),//19星力
		Array(5121104, 20, 10),//經驗天氣
		Array(2644008, 1, 10)//追加星力100%

	),

	//300
	Array(
		Array(3700514, 1, 11),//聯盟的神話
		Array(2472000, 100, 11),//白槌
		Array(4001715, 5, 11),//定居金一億
		Array(4001832, 1000, 11),//咒文的痕跡
		Array(2633336, 100, 11),//AUT自選
		Array(2001505, 500, 11),//超級藥水
		Array(2635037, 20, 11),//榮耀捲軸
		Array(5064400, 20, 11),//恢復卡
		Array(5062026, 50, 11),//結合方塊
		Array(5062503, 50, 11),//白色附加方塊
		Array(2049389, 2, 11),//20星力
		Array(2644008, 1, 11),//追加星力100%
		Array(1143012, 1, 11, 200, 200, 200, 200, 5000, 5000, 200, 200, 50, 50, 50, 0)//頂點的王者
	),

	//275
	Array(

		Array(2644008, 1, 11),//追加星力100%
		Array(1713000, 3, 11),//真實符文：賽爾尼溫
		Array(1713001, 3, 11),//真實符文：阿爾克斯
		Array(1713002, 3, 11),//真實符文：賽爾尼溫
		Array(2450175, 10, 11),//經驗2倍
		Array(4001715, 1, 11),//【定居金1億】	
		Array(2644029, 1, 11),//20星力強化捲
		Array(2472000, 10, 11),//白槌
		Array(4001715, 3, 11),//【定居金1億】
		Array(2450175, 5, 11),//經驗2倍
		Array(5062026, 50, 11),//結合方塊
		Array(5062020, 50, 11)//閃炫方塊	


	),

	//280
	Array(
		Array(2644008, 1, 12),//追加星力100%
		Array(1713000, 3, 12),//真實符文：賽爾尼溫
		Array(1713001, 3, 12),//真實符文：阿爾克斯
		Array(1713002, 3, 12),//真實符文：賽爾尼溫
		Array(2450175, 10, 12),//經驗2倍
		Array(4001715, 1, 12),//【定居金1億】	
		Array(2644029, 1, 12),//20星力強化捲
		Array(2472000, 10, 12),//白槌
		Array(4001715, 3, 12),//【定居金1億】
		Array(2450175, 5, 12),//經驗2倍
		Array(5062026, 50, 12),//結合方塊
		Array(5062020, 50, 12),//閃炫方塊	
		Array(1142363, 1, 12, 150, 150, 150, 150, 5000, 5000, 150, 150, 50, 50, 50, 0)//頂點的王者


	),

	//290
	Array(
		Array(2644008, 1, 13),//追加星力100%
		Array(1713000, 3, 12),//真實符文：賽爾尼溫
		Array(1713001, 3, 13),//真實符文：阿爾克斯
		Array(1713002, 3, 13),//真實符文：賽爾尼溫

		Array(2450175, 10, 13),//經驗2倍
		Array(4001715, 1, 13),//【定居金1億】	
		Array(2644029, 1, 13),//20星力強化捲
		Array(2472000, 10, 13),//白槌
		Array(4001715, 3, 13),//【定居金1億】
		Array(2450175, 5, 13),//經驗2倍
		Array(5062026, 50, 13),//結合方塊
		Array(5062020, 50, 13)//閃炫方塊	

	),

	//300
	Array(
		Array(1713000, 4, 14),//真實符文：賽爾尼溫
		Array(1713001, 4, 14),//真實符文：阿爾克斯
		Array(1713002, 4, 14),//真實符文：阿爾克斯
		Array(3018244, 1, 14),//什麼事情都沒做椅子
		Array(5062026, 100, 14),//結合方塊
		Array(5062020, 150, 14),//閃炫方塊	
		Array(5062503, 50, 14),//白色附加方塊
		Array(2644008, 2, 14),//追加星力100	
		Array(4001715, 5, 14),//【定居金1億】
		Array(5121104, 10, 14),//經驗天氣
		Array(1142371, 1, 14, 200, 200, 200, 200, 5000, 5000, 200, 200, 50, 50, 50, 0)//頂點的王者

	),

	//295
	Array(
		Array(2450175, 10, 15)//經驗2倍

	),

	//300
	Array(
		Array(1713000, 3, 16),//真實符文：賽爾尼溫
		Array(1713001, 3, 16),//真實符文：阿爾克斯
		Array(3018244, 1, 16),//什麼事情都沒做椅子
		Array(5062026, 100, 16),//結合方塊
		Array(5062020, 150, 16),//閃炫方塊	
		Array(5062503, 50, 16),//白色附加方塊
		Array(2644008, 2, 16),//追加星力100	
		Array(4001715, 5, 16),//【定居金1億】
		Array(5121104, 10, 16),//經驗天氣
		Array(1143012, 1, 16, 300, 300, 300, 300, 5000, 5000, 300, 300, 50, 50, 50, 0)//頂點的王者

	)
);
var GC2 = "#fEffect/CharacterEff/1022223/2/0#"; //藍色星星
var GC3 = "#fEffect/CharacterEff/1112924/0/0#"; //"+z+"//小選項用
var lq1 = "#fUI/UIWindow2.img/crossHunterUI/reward/button/normal/0#"
var lq2 = "#fUI/UIWindow2.img/crossHunterUI/reward/button/disabled/0#"

var GC2 = "#fEffect/CharacterEff/1022223/2/0#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1112924/0/0#"; //"+z+"//小選項用
var GC1 = "";
//var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
var XD0 = "#fEffect/CharacterEff/1051366/0/0#";
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#"; //最上面的

var p9 = "#fMap/MapHelper.img/weather/knitsWithWarmWinter/8#";
var zx50 = "#fMap/MapHelper.img/weather/lovelypartybear/7#";
var qq1 = "#fUI/EventShop/adventureShop/GradeBuyer/0#"
var qq2 = "#fUI/EventShop/adventureShop/GradeBuyer/1#"
var qq3 = "#fUI/EventShop/adventureShop/GradeBuyer/2#"
var qq4 = "#fUI/EventShop/adventureShop/GradeBuyer/3#"
var qq5 = "#fUI/EventShop/adventureShop/GradeBuyer/4#"
var qq6 = "#fUI/EventShop/adventureShop/GradeBuyer/5#"
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔


var giftId = -1;
var giftToken = Array();
var gifts = null;
var txt = "";
//txt += ""+GC1+GC1+GC1+GC1+"\r\n";

txt = "#fs21##e#r你好,這裡是等級禮包#fs16#\r\n";




//txt = "\t      #fs32##fc0xFFE508F3##e"+zx50+"等級獎勵"+zx50+"\r\n#n";
//txt += "" +p9+p9+p9+p9+p9+p9+p9+p9+p9+p9+p9+p9+p9+p9+p9+ "\r\n";
txt += "#fs11##b";

for (var i = 0; i < giftLevel.length; i++) {
	var tips = "";
	if (player.getLevel() >= giftLevel[i]) {
		if (player.getPQLog(bossid + (i + 1)) == 0) {
			tips = "" + "[#fs16##e#r待領取]";
		} else {
			tips = "" + "[#fs16##e#k已領取]";
		}
	} else {
		tips = "#r(等級不足)#b";
	}
	txt += "#fs16##e#b#L" + i + "#" + tips + "#r#fs16##e#b等級禮包\t\t\t#r" + giftLevel[i] + "#l#k\r\n";
}
let giftId = npc.askMenuA(txt, true);

var txt = "#r#fs16##r#e" + giftLevel[giftId] + "#n#b級禮包內容：\r\n\r\n";
gifts = giftContent[giftId];
for (var i = 0; i < gifts.length; i++) {
	var itemId = gifts[i][0];
	var getItemQuantity = gifts[i][1];
	txt += "#v" + itemId + "##b#z" + itemId + "##k #rx " + getItemQuantity + "#k\r\n";
}
txt += "\r\n#d是否現在就領取該禮包？#k";
let sel = npc.askYesNo(txt);


if (sel == 1) {

	if (player.getFreeSlots(1) < 8 || player.getFreeSlots(2) < 8 || player.getFreeSlots(3) < 8 || player.getFreeSlots(4) < 8 || player.getFreeSlots(5) < 8) {
		npc.say("您的背包空間不足,請保證每個欄位至少8格的空間,以避免領取失敗。");
	} else {
		var job = player.getJob();
		if (player.getPQLog(bossid + (giftId + 1)) == 0 && player.getLevel() >= giftLevel[giftId]) {
			player.addPQLog(bossid + (giftId + 1), 1, 365);
			for (var i = 0; i < gifts.length; i++) {
				var itemId = gifts[i][0];
				var getItemQuantity = gifts[i][1];
				if (gifts[i][3] >= 0) {
					let newItem = player.makeItemWithId(itemId);
					newItem.setStr(gifts[i][3]);
					newItem.setDex(gifts[i][4]);
					newItem.setInt(gifts[i][5]);
					newItem.setLuk(gifts[i][6]);
					newItem.setMaxHp(gifts[i][7]);
					newItem.setMaxMp(gifts[i][8]);
					newItem.setPad(gifts[i][9]);
					newItem.setMad(gifts[i][10]);
					newItem.setBossDamageR(gifts[i][11]);
					newItem.setIgnorePDR(gifts[i][12]);
					newItem.setDamR(gifts[i][13]);
					newItem.setCHUC(gifts[i][14]);
					if (gifts[i][15] == 100) {
						newItem.setTitle("1階段");
					}
					player.gainItem(newItem);
				} else {
					player.gainItem(itemId, getItemQuantity);
				}
			}
			npc.say("恭喜您,領取成功！快打開包裹看看吧1！");
		} else {
			npc.say("您已經領過了該禮包或者等級未達到要求,無法領取。");
		}
		player.runScript("等級獎勵");
	}

}


