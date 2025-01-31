/*  This is mada by dgms    
 *  This source is made by Funms Team
 *  功能：累積贊助
 *  @Author dgms 
 */
var status = 0;
var bossid = "累積贊助";
var giftLevel = Array(1000, 5000, 10000, 20000, 30000, 40000);
var giftContent = Array(
	//1000
	Array(
		Array(4032216, 2000, 0),//愛心
		Array(4032053, 500, 0),//金元寶
		Array(5060048, 10, 0),//黃金蘋果
		Array(5060068, 2, 0),//聯名
		Array(5062026, 10, 0),//結合
		Array(5062503, 10, 0),//白色附加
	),
	//5000
	Array(
		Array(4032216, 3000, 1),//愛心
		Array(4032053, 800,  1),//金元寶
		Array(5060048, 20,   1),//黃金蘋果
		Array(5060068, 3,    1),//聯名
		Array(5062026, 20,   1),//結合
		Array(5062503, 20,   1),//白色附加
	),
	//10000
	Array(
		Array(4032216, 5000, 2),//愛心
		Array(4032053, 1000, 2),//金元寶
		Array(5060048, 30,   2),//黃金蘋果
		Array(5060068, 3,    2),//聯名
		Array(5062026, 20,   2),//結合
		Array(5062503, 20,   2),//白色附加
	),
	//20000
	Array(
		Array(4032216, 7000, 3),//愛心
		Array(4032053, 1200, 3),//金元寶
		Array(5060048, 30,   3),//黃金蘋果
		Array(5060068, 4,    3),//聯名
		Array(5062026, 30,   3),//結合
		Array(5062503, 30,   3),//白色附加
	),
	//30000
	Array(
		Array(4032216, 8000, 4),//愛心
		Array(4032053, 1400, 4),//金元寶
		Array(5060048, 40,   4),//黃金蘋果
		Array(5060068, 5,    4),//聯名
		Array(5062026, 40,   4),//結合
		Array(5062503, 40,   4),//白色附加
	),

	//40000
	Array(
		Array(4032216, 9999, 5),//愛心
		Array(4032053, 1500, 5),//金元寶
		Array(5060048, 50,   5),//黃金蘋果
		Array(5060068, 5,    5),//聯名
		Array(5062026, 50,   5),//結合
		Array(5062503, 50,   5),//白色附加
	)
);
var GC2 = "#fEffect/CharacterEff/1022223/2/0#"; //藍色星星
var GC3 = "#fEffect/CharacterEff/1112924/0/0#"; //"+z+"//小選項用
var lq1 = "#fUI/UIWindow2.img/crossHunterUI/reward/button/normal/0#"
var lq2 = "#fUI/UIWindow2.img/crossHunterUI/reward/button/disabled/0#"

var GC2 = "#fEffect/CharacterEff/1022223/2/0#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1112924/0/0#"; //"+z+"//小選項用
var GC1 = "";
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
var revenue = parseInt(getHyPay(2) * 1);
txt = "#fs21##e#r累斗每日福利，當前已累積 #r" + revenue + "#fs16#\r\n";
//txt += "#fs16##b當累積達標額度,每日可領取福利#b\r\n";

for (var i = 0; i < giftLevel.length; i++) {
	var tips = "";
	if (revenue >= giftLevel[i]) {
		if (player.getEventValue(bossid + (i + 1)) == 0) {
			tips = "" + "[#fs16##r待領取]";
		} else {
			tips = "" + "[#fs16##k已領取]";
		}
	} else {
		tips = "[#fs16##e#g未滿足]#b";
	}
	txt += "#b#L" + i + "#" + tips + "#r#fs16##e#n#b累斗每日福利\t\t\t" + giftLevel[i] + "#l#k\r\n";
}
let giftId = npc.askMenuA(txt, true);

var txt = "#r#fs16##r#e" + giftLevel[giftId] + "#n#b累斗每日福利：\r\n\r\n";
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
		if (player.getEventValue(bossid + (giftId + 1)) == 0 && revenue >= giftLevel[giftId]) {
			player.addEventValue(bossid + (giftId + 1), 1, 1);
			for (var i = 0; i < gifts.length; i++) {
				var itemId = gifts[i][0];
				var getItemQuantity = gifts[i][1];
				player.gainItem(itemId, getItemQuantity);
			}
			npc.say("恭喜您,領取成功！快打開包裹看看吧！");
		} else {
			npc.say("您已經領過了該禮包或者累計未達到要求,無法領取。");
		}
		player.runScript("每日累計禮包");
	}

}
function getHyPay() {
	var sql = "select leiji from hypay where accountid = ? ";
	var result = player.customSqlResult(sql, player.getAccountId());
	if (result.size() > 0) {
		if (result.get(0) != null) {
			return result.get(0).get("leiji");
		}
	} else {
		return 0;
	}

}

