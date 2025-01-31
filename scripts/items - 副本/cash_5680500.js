var status = -1
var txt;
/*------------------------------------------------------------*/
var ltz45 = "#fMap/MapHelper.img/weather/starPlanet2/5#";
var ltz47 = "#fMap/MapHelper.img/weather/starPlanet/4#";
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var f2 = "#fUI/CashShop/CSBeauty/hairColor/Enable/2#"
var f3 = "#fUI/CashShop/CSBeauty/hairColor/Enable/3#"
var f4 = "#fUI/CashShop/CSBeauty/hairColor/Enable/4#"
var f5 = "#fUI/CashShop/CSBeauty/hairColor/Enable/5#"
var GC3 = "#fEffect/CharacterEff/1082700/1/0#"; //"+z+"//小選項用
var itemList = [


	Array(2613012, 8000, 1),
	Array(2613013, 8000, 1),
	Array(2612019, 8000, 1),
	Array(2612020, 8000, 1),
	Array(2616000, 8000, 1),
	Array(2616001, 8000, 1),
	Array(2615005, 8000, 1),
	Array(2615006, 8000, 1),
	Array(2048812, 8000, 1),
	Array(2048813, 8000, 1),

	Array(2613048, 5000, 1),
	Array(2613049, 5000, 1),
	Array(2612055, 5000, 1),
	Array(2612056, 5000, 1),
	Array(2616059, 5000, 1),
	Array(2616060, 5000, 1),
	Array(2615029, 5000, 1),
	Array(2615030, 5000, 1),
	Array(2048815, 5000, 1),
	Array(2048816, 5000, 1),

	Array(2613062, 1500, 1),
	Array(2613063, 1500, 1),
	Array(2612074, 1500, 1),
	Array(2612075, 1500, 1),
	Array(2616072, 1500, 1),
	Array(2616073, 1500, 1),
	Array(2615041, 1500, 1),
	Array(2615042, 1500, 1),
	Array(2048819, 1500, 1),
	Array(2048820, 1500, 1),



];


//Jackpotchance 大獎機率是這個
var Jackpot1 = [ //榮耀
	Array(2613070, 250, 1),
	Array(2613071, 250, 1),
	Array(2612082, 250, 1),
	Array(2612083, 250, 1),
	Array(2616218, 250, 1),
	Array(2616219, 250, 1),
	Array(2615054, 250, 1),
	Array(2615055, 250, 1),
	Array(2048830, 250, 1),
	Array(2048831, 250, 1),

];
var Jackpot2 = [ //究極B
	Array(2613068, 500, 1),
	Array(2613069, 500, 1),
	Array(2612080, 500, 1),
	Array(2612081, 500, 1),
	Array(2616216, 500, 1),
	Array(2616217, 500, 1),
	Array(2615051, 500, 1),
	Array(2615052, 500, 1),
	Array(2048825, 500, 1),
	Array(2048826, 500, 1),
];

var zx24 = "#fMap/MapHelper.img/weather/nightMarket/5#";
var qq1 = "#fUI/EventShop/adventureShop/GradeBuyer/0#"
var qq2 = "#fUI/EventShop/adventureShop/GradeBuyer/1#"
var qq3 = "#fUI/EventShop/adventureShop/GradeBuyer/2#"
var qq4 = "#fUI/EventShop/adventureShop/GradeBuyer/3#"
var qq5 = "#fUI/EventShop/adventureShop/GradeBuyer/4#"
var qq6 = "#fUI/EventShop/adventureShop/GradeBuyer/5#"
轉蛋所需物品 = 5680500;
date = new Date();
let week = date.getDay();
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();
var timeStamp = java.lang.System.currentTimeMillis();
var min = 3; //一分鐘 這裡自己改時間
var time = parseInt(min - (((timeStamp - parseInt(player.getQuestRecordEx(100000002))) / 1000)));
if (time > 0) {
	//player.showProgressMessageFont("你按太快了哦," + time + "秒後才能開啟!", 3, 30, 4, 10 * 1000);
} else {
	player.updateQuestRecordEx(100000002, timeStamp);


	//txt = "\r\n";
	var itemsl = 5680500;
txt = "Welcome to the special trip              " + a38 + "\r\n";

txt += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n"


	//txt += "\t\t   #e#fs20##r#v"+轉蛋所需物品+"##z"+轉蛋所需物品+"#\r\n#n";
	//txt += ""+zx24+zx24+zx24+zx24+zx24+zx24+zx24+zx24+zx24+zx24+zx24+"\r\n";
	txt += "";
	txt += "";

	txt += "#fs11##b";
    txt += "#r說明:#b需要1顆#v" + 轉蛋所需物品 + "#,當前擁有#v" + itemsl + "#:[#r #c" + itemsl + "##b ]個\r\n\r\n";     
	txt += "玩家請務必留意身上空間是否充足,\r\n\r\n";
	
	txt += "\t\t  #b今日榮耀次數#r" + player.getEventValue("艾比榮耀") + "/#d10 #b今日B卷次數:#r" + player.getEventValue("艾比究極") + "/#d30\r\n\r\n";
	txt += "\t\t#L1#" + f2 + "點我抽獎#l      #L2#" + f3 + "查看內容物#l\r\n\r\n";
	//txt += "\t\t#L2#查看本期大獎#l";

	txt += "";

	let selection = npc.askMenu(txt, 9330112);

	switch (selection) {
		case 2:
			npc.say("#fs14##b獎品如下:\r\n#v2613070##v2613071##v2612082##v2612083##v2616218##v2616219##v2615054##v2615055##v2048830##v2048831#\r\n#v2613068##v2613069##v2612080##v2612081##v2616216##v2616217##v2615051##v2615052##v2048825##v2048826##v2613062##v2613063##v2612074##v2612075##v2616072##v2616073##v2615041##v2615042##v2048819##v2048820##v2613048##v2613049##v2612055##v2612056##v2616059##v2616060##v2615029##v2615030##v2048815##v2048816##v2613012##v2613013##v2612019##v2612020##v2616000##v2616001##v2615005##v2615006##v2048812##v2048813#");
			break;

		case 1:
			while (true) {
				Jackpotchance = Math.floor(Math.random() * 10000);//獎池總機率
				if (player.hasItem(轉蛋所需物品, 1) < 1) {
					npc.say("#fs17##e#b玩家持有的#v" + 轉蛋所需物品 + "#不足");
				} else if (player.getFreeSlots(1) < 1 || player.getFreeSlots(2) < 1 || player.getFreeSlots(3) < 1 || player.getFreeSlots(4) < 1 || player.getFreeSlots(5) < 1) {
					npc.say("#fs17##e#b身上背包空間不足。");
				} else {
					if (Jackpotchance <= 250) {
						if (player.getEventValue("艾比榮耀") < 10) {
							finalitem = Array();
							for (var i = 0; i < Jackpot1.length; i++) {
								finalitem.push(Jackpot1[i]);
							}
							random = new java.util.Random();
							finalchance = random.nextInt(finalitem.length);
							itemId = finalitem[finalchance][0];
							quantity = finalitem[finalchance][2];
							player.gainItem(itemId, quantity);
							player.addEventValue("艾比榮耀", 1, 1);
							// player.showSystemMessage("艾比榮耀"+player.getEventValue("艾比榮耀")+"次");
							player.loseItem(轉蛋所需物品, 1);
							npc.say("你獲得了 #b#t" + itemId + "##k " + quantity + "個。");
						} else {
							itemId = 2631487;
							quantity = 1;
							player.gainItem(itemId, quantity);
							player.loseItem(轉蛋所需物品, 1);
							npc.say("榮耀捲次數已滿,你獲得了 #b#t" + itemId + "##k " + quantity + "個。");
						}

					} else if (Jackpotchance <= 500) {
						if (player.getEventValue("艾比究極") < 30) {
							finalitem = Array();
							for (var i = 0; i < Jackpot2.length; i++) {
								finalitem.push(Jackpot2[i]);
							}
							random = new java.util.Random();
							finalchance = random.nextInt(finalitem.length);
							itemId = finalitem[finalchance][0];
							quantity = finalitem[finalchance][2];
							player.gainItem(itemId, quantity);
							player.addEventValue("艾比究極", 1, 1);
							// player.showSystemMessage("艾比究極");
							player.loseItem(轉蛋所需物品, 1);
							npc.say("你獲得了 #b#t" + itemId + "##k " + quantity + "個。");
						} else {
							itemId = 2631487;
							quantity = 1;
							player.gainItem(itemId, quantity);
							player.loseItem(轉蛋所需物品, 1);
							npc.say("究極捲次數已滿,你獲得了 #b#t" + itemId + "##k " + quantity + "個。");
						}

					} else {
						chance = Math.floor(Math.random() * 10000);
						finalitem = Array();
						for (var i = 0; i < itemList.length; i++) {
							if (itemList[i][1] >= chance) {
								finalitem.push(itemList[i]);
							}
						}
						if (finalitem.length != 0) {
							var item;
							random = new java.util.Random();
							finalchance = random.nextInt(finalitem.length);
							itemId = finalitem[finalchance][0];
							quantity = finalitem[finalchance][2];
							if (item != -1) {
								player.gainItem(itemId, quantity);
								//player.gainItem(2630612,1);
								player.loseItem(轉蛋所需物品, 1);
								npc.say("你獲得了 #b#t" + itemId + "##k " + quantity + "個。");
							} else {
								npc.say("請你確認在背包的裝備，消耗，其他窗口中是否有一格以上的空間。");
							}
						} else {
							player.loseItem(轉蛋所需物品, 1);
							npc.say("今天的運氣太差了，什麼都沒有= =");
						}
					}

				}
			}
			break;
	}
}
