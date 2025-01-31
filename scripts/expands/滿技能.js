var typede = 0;
var GC2 = "#fEffect/CharacterEff/1022223/2/0#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1112924/0/0#"; //"+z+"//小選項用
var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
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



//txt = "\t      #fs32##fc0xFFE508F3##e"+zx50+"一鍵滿技"+zx50+"\r\n#n";
//txt += "" +p9+p9+p9+p9+p9+p9+p9+p9+p9+p9+p9+p9+p9+p9+p9+ "\r\n";
txt = "#fs21##b#e只提供一至四轉滿技能服務";
txt += "\r\n\r\r\n\r\n\r\n\t\t\t   #L898##fs16##e#r確認使用請點擊#l\r\n\r\n";
//txt += "#L9##b學習禦龍魔飛行技能 (全職業可學)#l\r\n";
//txt += "#L99##b學習ARK異人二轉技能     (ARK職業可學)#l\r\n";
//txt += "#L100##b虎影學習飛翔、筋鬥雲等技能     (筋鬥雲)#l\r\n";

let selection = npc.askMenuA(txt,true);

if(selection == 14) {
	npc.say("#fMob/1210102.img/move/0##fMob/1210102.img/move/0##bAurora - MS#fMob/1210102.img/move/0##fMob/1210102.img/move/0##k\r\n技能特效如下:\r\n#b0、龍神技能-繼承的意志特效如下:#k\r\n永久性提高魔法攻擊力10、魔法防禦力300、HP增加15%、所有屬性加10、BOSS傷害增加5% 需要支付#b500萬金幣#k才可學習。\r\n#b1、戰神技能-找回的記憶特效如下:#k\r\n永久性提高攻擊力10、物理防禦力300、移動速度10、暴擊率%5、BOSS傷害增加5%、需要支付#b500萬金幣#k才可學習。\r\n#b2、騎士團技能-女皇的呼喚特效如下:#k\r\n在2小時內物理攻擊力和魔法攻擊力同時提高4%,需要支付#b500萬金幣#k才可學習。\r\n#b3、全職業技能-聯盟的意志特效如下:#k\r\n永久性提高力量5點、敏捷5點、智力5點、運氣5點、攻擊力5點、魔法攻擊力5、需要支付#b500萬金幣#k才可學習。\r\n#b4、騎士團技能-女皇的祈禱特效如下:#k\r\n永久性提高最大PH和MP%20,需要支付#b500萬金幣#k才可學習。\r\n#b5、全職業技能-英雄之回聲特效如下:#k\r\n在40分鐘內增加物理攻擊力2%、增加魔法攻擊力2%、冷卻時間2小時、需要支付#b500萬金幣#k才可學習。\r\n#b6、全職業技能-好用的輕功特效如下:#k\r\n在200秒內移動速度提高20、跳躍力提高10、需要支付#b300金幣#k才可學習。\r\n#b7、騎士團技能-高貴精神特效如下:#k\r\n提高女皇的祝福最高等級7、需要等級#b5級以上#k才可學習。");

} else if(selection == 898) {
	if(player.getJob()==15112){
		//新職業，補被動
		player.setSkillLevel(150020079,1,1,false);
		player.setSkillLevel(151000005,20,20,false);
		player.setSkillLevel(151001004,20,20,false);
		player.setSkillLevel(150021000,20,20,false);
		player.setSkillLevel(150021005,20,20,false);
		player.setSkillLevel(150020006,20,20,false);		
	}
	player.maxSkills();
	npc.say("#b#e#fs18#已幫你完成一鍵滿技能！！");
} else if(selection == 100) {
	if(player.getJob()==16412){
		player.setSkillLevel(164001004, 1, 1, false);
		player.setSkillLevel(160001026, 1,1, false);
		player.setSkillLevel(150011030, 20,20, false);
		player.setSkillLevel(8, 1, 1, false);
		npc.say("學習成功~。");
	}else{
		npc.say("只有虎影可以在這裡學習哦");
	}

} else if(selection == 10) {
		player.runScript("改版一鍵轉職");
} else if(selection == 2) {
	if(player.getLevel() <= 50) {
		npc.say("您現在的等級條件還不能學習群寵技能,需要50級才可以學習。");
	} else {
		player.loseMesos(500000);
		if(player.getJob()==16412){
			player.setSkillLevel(8, 1, 1, false);
		}else{
			player.setSkillLevel(8, 1, 1, false);
			player.setSkillLevel(20011024, 1, 1, false);
			player.setSkillLevel(10000018, 1, 1, false);
			player.setSkillLevel(20000024, 1, 1, false);
		}
		
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	}

} else if(selection == 3) {
	if(player.getLevel() <= 45) {
		npc.say("您現在的等級條件還不能學習鍛造技能,需要45級才可以學習。");
	} else if(player.getJob() >= 100 && player.getJob() <= 512) { //冒險家	
		player.setSkillLevel(1007, 3, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 1000 && player.getJob() <= 1512) { //騎士團
		player.setSkillLevel(10001007, 3, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 2100 && player.getJob() <= 2112) { //戰神
		player.setSkillLevel(20001007, 3, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 2200 && player.getJob() <= 2218) { //龍神
		player.setSkillLevel(20011007, 3, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 3000 && player.getJob() <= 3512) { //反抗者
		player.setSkillLevel(30001007, 3, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 5100 && player.getJob() <= 5112) { //米哈爾
		player.setSkillLevel(50001007, 3, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 6100 && player.getJob() <= 6112) { //狂龍戰士
		player.setSkillLevel(60001007, 3, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 6500 && player.getJob() <= 6512) { //暴利萌天使
		player.setSkillLevel(60011007, 3, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 3600 && player.getJob() <= 3612) { //尖兵
		player.setSkillLevel(30021007, 3, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 2700 && player.getJob() <= 2712) { //夜光法師	
		player.setSkillLevel(20041007, 3, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 2300 && player.getJob() <= 2312) { //雙弩精靈
		player.setSkillLevel(20021007, 3, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 2400 && player.getJob() <= 2412) { //幻影
		player.setSkillLevel(20031007, 3, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 3100 && player.getJob() <= 3112) { // 惡魔獵手
		player.setSkillLevel(30011007, 3, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else {
		npc.say("學習此項技能中沒有符合您的職業群,您可以嘗試做官方任務獲得該技能。");
	}

} else if(selection == 4) {
	if(!player.hasMesos(500000)) {
		npc.say("由於英雄之回聲技能的特殊性需要支付#b500萬金幣#k才可以學習,您目前沒有足夠的金幣。");
	} else if(player.getLevel() <= 100) {
		npc.say("您現在的等級條件還不能學習英雄之回聲技能,需要100級才可以學習。");
	} else if(player.getJob() >= 100 && player.getJob() <= 512) { //冒險家	
		player.loseMesos(5000000);
		player.setSkillLevel(1005, 1, 1);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 1000 && player.getJob() <= 1512) { //騎士團
		player.loseMesos(5000000);
		player.setSkillLevel(10001005, 1, 1);
		player.setSkillLevel(10001215, 1, 1);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 2100 && player.getJob() <= 2112) { //戰神
		player.loseMesos(5000000);
		player.setSkillLevel(20001005, 1, 1);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 2200 && player.getJob() <= 2218) { //龍神
		player.loseMesos(5000000);
		player.setSkillLevel(20011005, 1, 1);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 3000 && player.getJob() <= 3512) { //反抗者
		player.loseMesos(5000000);
		player.setSkillLevel(30001005, 1, 1);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 5100 && player.getJob() <= 5112) { //米哈爾
		player.loseMesos(5000000);
		player.setSkillLevel(50001005, 1, 1);
		player.setSkillLevel(50001215, 1, 1);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 3600 && player.getJob() <= 3612) { //尖兵
		player.loseMesos(5000000);
		player.setSkillLevel(30021005, 1, 1);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 2700 && player.getJob() <= 2712) { //夜光法師
		player.loseMesos(5000000);
		player.setSkillLevel(20041005, 1, 1);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 2300 && player.getJob() <= 2312) { //雙弩精靈
		player.loseMesos(5000000);
		player.setSkillLevel(20021005, 1, 1);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 2400 && player.getJob() <= 2412) { //幻影
		player.loseMesos(5000000);
		player.setSkillLevel(20031005, 1, 1);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 3100 && player.getJob() <= 3112) { // 惡魔獵手
		player.loseMesos(5000000);
		player.setSkillLevel(30011005, 1, 1);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");

	} else {
		npc.say("學習此項技能中沒有符合您的職業群,您可以嘗試做官方任務獲得該技能。");
	}

} else if(selection == 5) {
	if(player.getLevel() <= 150) {
		npc.say("您現在的等級條件還不能學習匠人之魂技能,需要150級才可以學習。");
	} else if(player.getJob() >= 100 && player.getJob() <= 512) { //冒險家
		player.setSkillLevel(1003, 1, 1,false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 1000 && player.getJob() <= 1512) { //騎士團
		player.setSkillLevel(10001005, 1, 1,false);
		player.setSkillLevel(10001215, 1, 1,false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 2100 && player.getJob() <= 2112) { //戰神
		player.setSkillLevel(20001005, 1, 1,false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 2200 && player.getJob() <= 2218) { //龍神
		player.setSkillLevel(20011005, 1, 1,false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 3000 && player.getJob() <= 3512) { //反抗者
		player.setSkillLevel(30001005, 1, 1,false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 5100 && player.getJob() <= 5112) { //米哈爾
		player.setSkillLevel(50001005, 1, 1,false);
		player.setSkillLevel(50001215, 1, 1,false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 3600 && player.getJob() <= 3612) { //尖兵
		player.setSkillLevel(30021005, 1, 1,false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 2700 && player.getJob() <= 2712) { //夜光法師
		player.setSkillLevel(20041005, 1, 1,false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 2300 && player.getJob() <= 2312) { //雙弩精靈
		player.setSkillLevel(20021005, 1, 1,false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 2400 && player.getJob() <= 2412) { //幻影
		player.setSkillLevel(20031005, 1, 1,false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 3100 && player.getJob() <= 3112) { // 惡魔獵手
		player.setSkillLevel(30011005, 1, 1,false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");

	} else {
		npc.say("學習此項技能中沒有符合您的職業群,您可以嘗試做官方任務獲得該技能。");
	}

} else if(selection == 6) {
	if(!player.hasMesos(500000)) {
		npc.say("由於聯盟的意志技能的特殊性需要支付#b500萬金幣#k才可以學習.您目前沒有足夠的#b金幣#k。");
	} else if(player.getLevel() <= 150) {
		npc.say("您現在的等級條件還不能學習聯盟的意志技能,需要150級才可以學習。");
	} else if(player.getJob() >= 5100 && player.getJob() <= 5112) { //米哈爾
		player.loseMesos(5000000);
		player.setSkillLevel(50000190, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 6100 && player.getJob() <= 6112) { //狂龍戰士
		player.loseMesos(5000000);
		player.setSkillLevel(60000190, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 6500 && player.getJob() <= 6512) { //暴利萌天使
		player.loseMesos(5000000);
		player.setSkillLevel(60010190, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 3600 && player.getJob() <= 3612) { //尖兵
		player.loseMesos(5000000);
		player.setSkillLevel(30020190, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 2700 && player.getJob() <= 2712) { //夜光法師
		player.loseMesos(5000000);
		player.setSkillLevel(20040190, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 2400 && player.getJob() <= 2412) { //幻影
		player.loseMesos(5000000);
		player.setSkillLevel(20030190, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 100 && player.getJob() <= 512) { //冒險家
		player.loseMesos(5000000);
		player.setSkillLevel(190, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 1000 && player.getJob() <= 1512) { //騎士團
		player.loseMesos(5000000);
		player.setSkillLevel(10000190, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 2100 && player.getJob() <= 2112) { //戰神
		player.loseMesos(5000000);
		player.setSkillLevel(20000190, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 2200 && player.getJob() <= 2218) { //龍神
		player.loseMesos(5000000);
		player.setSkillLevel(20010190, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 3000 && player.getJob() <= 3512) { //反抗者
		player.loseMesos(5000000);
		player.setSkillLevel(30000190, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 2300 && player.getJob() <= 2312) { //雙弩精靈
		player.loseMesos(5000000);
		player.setSkillLevel(20020190, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 3100 && player.getJob() <= 3112) { // 惡魔獵手
		player.loseMesos(5000000);
		player.setSkillLevel(30010190, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");

	} else {
		npc.say("學習此項技能中沒有符合您的職業群,您可以嘗試做官方任務獲得該技能。");
	}

} else if(selection == 7) {
	if(player.getLevel() <= 5) {
		npc.say("您現在的等級條件還不能學習高貴精神技能,需要5級才可以學習。");
	} else if(player.getJob() >= 1000 && player.getJob() <= 1512) { // 騎士團
		player.setSkillLevel(10000202, 6, 1,false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else {
		npc.say("學習高貴的精神技能只有騎士團職業群才可以學習。");
	}

} else if(selection == 8) {
	if(!player.hasMesos(3000000)) {
		npc.say("由於好用的輕功技能的特殊性需要支付#b300萬金幣#k才可以學習,您目前沒有足夠的金幣。");
	} else if(player.getLevel() <= 70) {
		npc.say("您現在的等級條件還不能學習好用的輕功技能,需要70級才可以學習。");
	} else if(player.getJob() >= 100 && player.getJob() <= 512) { //冒險家
		player.loseMesos(3000000);
		player.setSkillLevel(8000, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 1000 && player.getJob() <= 1512) { //騎士團
		player.loseMesos(3000000);
		player.setSkillLevel(10008000, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 2100 && player.getJob() <= 2112) { //戰神
		player.loseMesos(3000000);
		player.setSkillLevel(20008000, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 2200 && player.getJob() <= 2218) { //龍神
		player.loseMesos(3000000);
		player.setSkillLevel(20018000, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 3000 && player.getJob() <= 3512) { //反抗者
		player.loseMesos(3000000);
		player.setSkillLevel(30008000, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 5100 && player.getJob() <= 5112) { //米哈爾
		player.loseMesos(3000000);
		player.setSkillLevel(50008000, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 6100 && player.getJob() <= 6112) { //狂龍戰士
		player.loseMesos(3000000);
		player.setSkillLevel(60008000, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 6500 && player.getJob() <= 6512) { //暴利萌天使
		player.loseMesos(3000000);
		player.setSkillLevel(60018000, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 3600 && player.getJob() <= 3612) { //尖兵
		player.loseMesos(3000000);
		player.setSkillLevel(30028000, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 2700 && player.getJob() <= 2712) { //夜光法師
		player.loseMesos(3000000);
		player.setSkillLevel(20048000, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 2300 && player.getJob() <= 2312) { //雙弩精靈
		player.loseMesos(3000000);
		player.setSkillLevel(20028000, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 2400 && player.getJob() <= 2412) { //幻影
		player.loseMesos(3000000);
		player.setSkillLevel(20038000, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 3100 && player.getJob() <= 3112) { // 惡魔獵手
		player.loseMesos(3000000);
		player.setSkillLevel(30018000, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else {
		npc.say("學習此項技能中沒有符合您的職業群,您可以嘗試做官方任務獲得該技能。");
	}

} else if(selection == 9) {
	if(!player.hasMesos(1000000)) {
		npc.say("由於飛翔技能的特殊性需要支付#b100萬金幣#k才可以學習,您目前沒有足夠的金幣。");
	} else if(player.getLevel() <= 120) {
		npc.say("您現在的等級條件還不能學習飛翔技能,需要120級才可以學習。");
	} else if(player.getJob() >= 100 && player.getJob() <= 512) { //冒險家
		player.loseMesos(1000000);
		player.setSkillLevel(1026, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 1000 && player.getJob() <= 1512) { //騎士團
		player.loseMesos(1000000);
		player.setSkillLevel(10001026, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 2100 && player.getJob() <= 2112) { //戰神
		player.loseMesos(1000000);
		player.setSkillLevel(20001026, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 2200 && player.getJob() <= 2218) { //龍神
		player.loseMesos(1000000);
		player.setSkillLevel(20011026, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 3000 && player.getJob() <= 3512) { //反抗者
		player.loseMesos(1000000);
		player.setSkillLevel(30001026, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 5100 && player.getJob() <= 5112) { //米哈爾
		player.loseMesos(1000000);
		player.setSkillLevel(50001026, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 6100 && player.getJob() <= 6112) { //狂龍戰士
		player.loseMesos(1000000);
		player.setSkillLevel(60001026, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 6500 && player.getJob() <= 6512) { //暴利萌天使
		player.loseMesos(1000000);
		player.setSkillLevel(60011026, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 3600 && player.getJob() <= 3612) { //尖兵
		player.loseMesos(1000000);
		player.setSkillLevel(30021026, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 2700 && player.getJob() <= 2712) { //夜光法師
		player.loseMesos(1000000);
		player.setSkillLevel(20041026, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 2300 && player.getJob() <= 2312) { //雙弩精靈
		player.loseMesos(1000000);
		player.setSkillLevel(20021026, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 2400 && player.getJob() <= 2412) { //幻影
		player.loseMesos(1000000);
		player.setSkillLevel(20031026, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 3100 && player.getJob() <= 3112) { // 惡魔獵手
		player.loseMesos(1000000);
		player.setSkillLevel(30011026, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	}else if(player.getJob() >= 4200 && player.getJob() <= 4212){
		player.loseMesos(1000000);
		player.setSkillLevel(40021026, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	}else if(player.getJob()>=15002 && player.getJob()<=15112){
		
		player.setSkillLevel(150021026,1,1,false);
		
		npc.say("學習成功~。");
	} else {
		npc.say("學習此項技能中沒有符合您的職業群,您可以嘗試做官方任務獲得該技能。");
	}

} else if(selection == 10) {
	if(player.getLevel() <= 100) {
		npc.say("您現在的等級條件還不能學習女皇的呼喚技能,需要100級才可以學習。");
	} else if(!player.hasMesos(500000)) {
		npc.say("由於女皇的呼喚技能的特殊性需要支付#b500萬金幣#k才可以學習,您目前沒有足夠的#b金幣#k。");
	} else if(player.getJob() >= 1000 && player.getJob() <= 1512) {
		player.loseMesos(5000000);
		player.setSkillLevel(10000074, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else {
		npc.say("學習女皇的呼喚技能只有騎士團職業群才可以學習。");
	}

} else if(selection == 11) {
	if(player.getLevel() <= 100) {
		npc.say("您現在的等級條件還不能學習女皇的祈禱技能,需要100級才可以學習。");
	} else if(!player.hasMesos(500000)) {
		npc.say("由於女皇的祈禱技能的特殊性需要支付#b500萬金幣#k才可以學習,您目前沒有足夠的金幣。");
	} else if(player.getJob() >= 1000 && player.getJob() <= 1512) { //騎士團
		player.loseMesos(5000000);
		player.setSkillLevel(10001075, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else if(player.getJob() >= 5100 && player.getJob() <= 5112) { //米哈爾
		player.loseMesos(5000000);
		player.setSkillLevel(50001075, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else {
		npc.say("學習女皇的祈禱技能只有騎士團和米哈爾職業群才可以學習。");
	}

} else if(selection == 12) {
	if(player.getLevel() <= 100) {
		npc.say("您現在的等級條件還不能學習找回的記憶技能,需要100級才可以學習。");
	} else if(!player.hasMesos(500000)) {
		npc.say("由於找回的記憶技能的特殊性需要支付#b500萬金幣#k才可以學習,您目前沒有足夠的#b彩雲幣#k。");
	} else if(player.getJob() >= 2100 && player.getJob() <= 2112) {
		player.loseMesos(5000000);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else {
		npc.say("學習找回的記憶技能只有戰神職業群才可以學習。");

	}

} else if(selection == 13) {
	if(player.getLevel() < 120) {
		npc.say("您現在的等級條件還不能學習繼承的意志技能,需要120級才可以學習。");
	} else if(!player.hasMesos(500000)) {
		npc.say("由於繼承的意志技能的特殊性需要支付#b500萬金幣#k才可以學習,您目前沒有足夠的#b彩雲幣#k。");
	} else if(player.getJob() >= 2200 && player.getJob() <= 2218) {
		player.loseMesos(5000000);
		player.setSkillLevel(20010194, 1, 1, false);
		npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
	} else {
		npc.say("學習繼承的意志技能只有龍神職業群才可以學習。");
	}

} else if(selection == 99) {
	if(player.getJob() != 15510) {
		player.scriptProgressMessage("抱歉 2轉才能學並且必須是ARK職業");

	}
	if(player.getSkillLevel(155101006) > 0) {
		player.scriptProgressMessage("抱歉 你已經學過這個技能了");

	}
	player.setSkillLevel(155101006, 1, 1, false);
	npc.say("恭喜您學習技能成功,祝您遊戲愉快。");
} else if(selection == 14) {
	if(player.getSkillLevel(80001000) > 0) {
		npc.say("您已經學習過這個技能。");
	} else {
		if(player.getJob() >= 3000) {
			npc.say("對不起！該職業暫時無法學習這個技能。");

		}
		player.setSkillLevel(80001000, 1, 1, false);
		npc.say("恭喜您學習技能成功。");
	}

} else if(selection == 15) {
	if(player.getJob() == 2700 || player.getJob() == 2710 || player.getJob() == 2711 || player.getJob() == 2712) {
		player.setSkillLevel(27000106, 5, 5, false);
		player.setSkillLevel(27001100, 20, 20, false);
		npc.say("恭喜您技能學習成功");
	} else {
		npc.say("你不屬於該職業群");
	}

}