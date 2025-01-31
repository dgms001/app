/*  This is mada by dgms    
 *  This source is made by Funms Team
 *  功能：等級送禮
 *  @Author dgms 
*/
var status = 0;
var bossid = "第三期收集總次數";
var giftLevel = Array(100, 300, 500, 800, 1000, 1300, 1500, 1800, 2000, 2300, 2500, 2800, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000, 15000, 20000, 25000, 25000, 30000, 35000, 40000, 50000);
var giftContent = Array(
	Array(
	    Array(2022531, 1),//掉寶
		Array(5060086, 10),//魔法畫框
		Array(4032053, 1000),//元寶
	),
	Array(
		Array(5060086, 20),//魔法畫框
		Array(4032053, 2000),//元寶
		Array(2022531, 1),//掉寶
	),
	Array(
		Array(5060086, 30),//魔法畫框
		Array(4032053, 2000),//元寶
		Array(2022531, 1),//掉寶
	),
	Array(
		Array(5062503, 50),//魔法畫框
		Array(4032053, 3000),//元寶
		Array(2022531, 1),//掉寶
	),
	Array(
		Array(5062503, 50),//白色附加
		Array(4032053, 5000),//元寶
		Array(2022531, 1),//掉寶
	),
	Array(
		Array(5062503, 80),//白色附加
		Array(4032053, 5000),//元寶
		Array(2022531, 1),//掉寶
	),
	Array(
		Array(5060048, 20),//蘋果
		Array(5062503, 100),//白色附加
		Array(2022531, 1),//掉寶
	),
	Array(
		Array(5060048, 20),//蘋果
		Array(2635039, 30),//V卷
		Array(2022531, 1),//掉寶
	),
	Array(
		Array(5060048, 20),//蘋果
		Array(2635039, 50),//v卷
		Array(2023721, 1),//掉寶
	),
	Array(
		Array(5060048, 30),//蘋果
		Array(2635038, 20),//B卷
		Array(2023721, 1),//掉寶
	),
	Array(
		Array(5060048, 30),//蘋果
		Array(2635038, 30),//B卷
		Array(2023721, 1),//掉寶
	),
	Array(
		Array(5060048, 30),//蘋果
		Array(2635038, 50),//B卷
		Array(2023721, 1),//掉寶
	),
	Array(
		Array(5060048, 30),//蘋果
		Array(5064502, 20),//覺醒
		Array(2023721, 1),//掉寶
	),
	Array(
		Array(5060048, 40),//蘋果
		Array(5064502, 30),//覺醒
		Array(2023721, 1),//掉寶
	),
	Array(
		Array(5060048, 40),//蘋果
		Array(5062026, 30),//結合
		Array(2023721, 1),//掉寶
	),
	Array(
		Array(5060048, 40),//蘋果
		Array(5062026, 50),//結合
		Array(2023721, 1),//掉寶
	),
	Array(
		Array(5060048, 40),//蘋果
		Array(5062026, 80),//結合
		Array(2023721, 1),//掉寶
	),
	Array(
		Array(5060048, 40),//蘋果
		Array(5062026, 100),//結合
		Array(2023721, 1),//掉寶
	),
	Array(
		Array(5060048, 50),//蘋果
		Array(5064400, 30),//恢復
		Array(2023721, 1),//掉寶
	),
	Array(
		Array(5060048, 50),//蘋果
		Array(5064400, 50),//恢復
		Array(2023721, 1),//掉寶
	),
	Array(
		Array(5060048, 50),//蘋果
		Array(5064400, 80),//恢復
		Array(2023721, 1),//掉寶
	),
	Array(
		Array(5060048, 50),//蘋果
		Array(2635032, 20),//命運
		Array(2023721, 1),//掉寶
	),
	Array(
		Array(5060048, 50),//蘋果
		Array(2635032, 30),//命運
		Array(2023721, 1),//掉寶
	),
	Array(
		Array(5060048, 50),//蘋果
		Array(2635032, 50),//命運
		Array(2023721, 1),//掉寶
	),
	Array(
		Array(2633609, 1),//重載豆
		Array(2431603, 2),//自選心
		Array(2023721, 1),//掉寶
	),
	Array(
		Array(2633609, 1),//重載豆
		Array(2431603, 3),//自選心
		Array(2023721, 1),//掉寶
	),
	Array(
		Array(2633609, 1),//重載豆
		Array(2431603, 5),//自選心
		Array(2023721, 1),//掉寶
	),
	Array(
		Array(2633609, 1),//重載豆
		Array(2644008, 2),//追加
		Array(2023721, 1),//掉寶
	),
	Array(
		Array(2633609, 1),//重載豆
		Array(2644008, 3),//追加
		Array(2023721, 1),//掉寶
	),
	Array(
		Array(2633609, 1),//重載豆
		Array(2644008, 5),//追加
		Array(2023721, 1),//掉寶
	),
	Array(
		Array(2633609, 1),//重載豆
		Array(2049389, 2),//20星
		Array(2023721, 1),//掉寶
	),
	Array(
		Array(2633609, 1),//重載豆
		Array(2049389, 3),//20星
		Array(2023721, 1),//掉寶
	),
	Array(
		Array(2633609, 1),//重載豆
		Array(2632486, 1),//贊助強化
		Array(2023721, 1),//掉寶
	),
	Array(
		Array(2633609, 1),//重載豆
		Array(2632486, 1),//贊助強化
		Array(2023721, 1),//掉寶
	),
	Array(
		Array(2633609, 1),//重載豆
		Array(2632486, 1),//贊助強化
		Array(2023721, 1)//掉寶
	),
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
txt = "#fs21##e#b全服獎勵,點擊可查看內容物\r\n";
txt += "防止小號刷獎勵[必須提交#r20#b次才可領取]\r\n";
txt += "#fs11##b";
for (var i = 0; i < giftLevel.length; i++) {
	var tips = "";

	if (player.getEventValue(bossid + (i + 1)) == 0) {
		tips = "" + "[#fs16##e#r待領取]";
	} else {
		tips = "" + "[#fs16##e#g已領取]";
	}

	txt += "#b#L" + i + "#" + tips + "#e#b全服提交#r#e" + giftLevel[i] + "#b次獎勵#l#k\r\n";
}
let giftId = npc.askMenuA(txt, true);
var txt = "\t\t\t\t\t#b#e全服提交#r" + giftLevel[giftId] + "#b次：\r\n\r\n";
gifts = giftContent[giftId];
for (var i = 0; i < gifts.length; i++) {
	var itemId = gifts[i][0];
	var getItemQuantity = gifts[i][1];
	var skillid = gifts[i][3]
	if (skillid > 100) {
		txt += "#v" + itemId + "##b#s" + skillid + "#\r\n";
	} else {
		txt += "#v" + itemId + "##b#z" + itemId + "##k #rx " + getItemQuantity + "#k\r\n";
	}
}
//txt += "\r\n#d是否現在就領取該禮包？#k";
let sel = npc.askYesNo(txt);
if (sel == 1) {
	if (getAllfrequency() < giftLevel[giftId]) {
		player.showSystemMessage("全服提交次數不足!!!");
	} else if (getfrequency() < giftLevel[giftId] / 50) {
		player.showSystemMessage("個人次數不足，個人需繳納：" + giftLevel[giftId] / 50 + "次");
	} else if (player.getFreeSlots(1) < 1 || player.getFreeSlots(2) < 1 || player.getFreeSlots(3) < 1 || player.getFreeSlots(4) < 1 || player.getFreeSlots(5) < 1) {
		npc.say("您的背包空間不足,請保證每個欄位至少1格的空間,以避免領取失敗");
	} else {
		var job = player.getJob();
		if (player.getEventValue(bossid + (giftId + 1)) == 0) {
			player.addEventValue(bossid + (giftId + 1), 1, 3000);
			for (var i = 0; i < gifts.length; i++) {
				var itemId = gifts[i][0];
				var getItemQuantity = gifts[i][1];
				if (gifts[i][3] >= 0) {
					player.setSkillLevel(gifts[i][3], 1, 1, false);
				} else {
					player.gainItem(itemId, getItemQuantity);
				}
			}
			player.showSystemMessage("恭喜您,領取成功！！");
		} else {
			player.showSystemMessage("您已經領過了,或者提交次數未達到要求,無法領取。");
		}
		player.runScript("收集掉落物獎勵");
	}
}
function getfrequency() { //獲取資料表 個人數量
	var sql = "select frequency from zz_items_sky where character_id = ? ";
	var result = player.customSqlResult(sql, player.getId());
	if (result.size() > 0) {
		if (result.get(0) != null) {
			return result.get(0).get("frequency");
		}
	} else {
		return 0;
	}

}
function getAllfrequency() { //全服收集數量   WHERE	zz_items_sky.gm <= 0 排除gm
	var sql = "SELECT sum(frequency) FROM zz_items_sky WHERE	zz_items_sky.gm <= 0";
	var result = player.customSqlResult(sql);
	if (result.size() > 0) {
		if (result.get(0) != null) {
			return result.get(0).get("sum(frequency)");
		}
	} else {
		return 0;
	}

}