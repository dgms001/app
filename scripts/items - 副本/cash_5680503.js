var status = -1
var txt;
/*------------------------------------------------------------*/
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var f2 = "#fUI/CashShop/CSBeauty/hairColor/Enable/2#"
var f3 = "#fUI/CashShop/CSBeauty/hairColor/Enable/3#"
var f4 = "#fUI/CashShop/CSBeauty/hairColor/Enable/4#"
var f5 = "#fUI/CashShop/CSBeauty/hairColor/Enable/5#"
var itemList = [
	// 物品id & 中獎概率越大越好出 & 數量1 & 0為不提示1提示 & 是否為大獎
	//小獎


	Array(4002003, 7500, 1, 0),//捲軸之力
	Array(4002003, 6000, 2, 0),//捲軸之力
	Array(4002003, 4500, 3, 0),//捲軸之力


	Array(2470000, 7000, 1, 0),//黃金槌子
	Array(5062009, 7000, 1, 0),//紅色方塊
	Array(5062017, 7000, 1, 0),//閃耀方塊
	Array(5062020, 5500, 1, 0),//閃炫方塊
	Array(5062500, 3500, 1, 0),//附加方塊
	Array(2472000, 1500, 1, 0),//白金槌子


	Array(4002003, 7500, 1, 0),//捲軸之力
	Array(4002003, 6000, 2, 0),//捲軸之力
	Array(4002003, 4500, 3, 0),//捲軸之力


	Array(2470000, 7000, 1, 0),//黃金槌子
	Array(5062009, 7000, 1, 0),//紅色方塊
	Array(5062017, 7000, 1, 0),//閃耀方塊
	Array(5062020, 5500, 1, 0),//閃炫方塊
	Array(5062500, 3500, 1, 0),//附加方塊
	Array(2472000, 1500, 1, 0),//白金槌子


	Array(4002003, 7500, 1, 0),//捲軸之力
	Array(4002003, 6000, 2, 0),//捲軸之力
	Array(4002003, 4500, 3, 0),//捲軸之力


	Array(2470000, 7000, 1, 0),//黃金槌子
	Array(5062009, 7000, 1, 0),//紅色方塊
	Array(5062017, 7000, 1, 0),//閃耀方塊
	Array(5062020, 5500, 1, 0),//閃炫方塊
	Array(5062500, 3500, 1, 0),//附加方塊
	Array(2472000, 1500, 1, 0),//白金槌子

	Array(2470000, 7000, 1, 0),//黃金槌子
	Array(5062009, 7000, 1, 0),//紅色方塊
	Array(5062017, 7000, 1, 0),//閃耀方塊
	Array(5062020, 5500, 1, 0),//閃炫方塊
	Array(5062500, 3500, 1, 0),//附加方塊
	Array(2472000, 1500, 1, 0),//白金槌子
];

var Jackpot1 = [ //大獎第1期  // 機率需陣列 越大越排前
	Array(1113211, 10, 1, 1, ""),//天上的氣息
	Array(1113220, 5000, 1, 1, ""),//幽暗戒指
	Array(1122296, 5000, 1, 1, ""),//死神的項鍊

];
var Jackpot2 = [ //大獎第1期  // 機率需陣列 越大越排前
	Array(1114402, 10, 1, 1, ""),//愛爾達斯
	Array(1114401, 5000, 1, 1, ""),//苦行戒指
	Array(1012174, 5000, 1, 1, ""),//鬼娃恰吉的傷口


];
var Jackpot3 = [ //大獎第1期  // 機率需陣列 越大越排前
	Array(1033000, 10, 1, 1, ""),//露希妲耳環
	Array(1114400, 5000, 1, 1, ""),//燒
	Array(1032219, 5000, 1, 1, ""),//神話耳環
];

var Jackpot4 = [ //大獎第1期  // 機率需陣列 越大越排前

	Array(1032261, 10, 1, 1, ""),//內面耀光
	Array(1182136, 5000, 1, 1, ""),//MX-131
	Array(1113132, 5000, 1, 1, ""),//森之守護者
];

var Jackpot5 = [ //大獎第1期  // 機率需陣列 越大越排前
	Array(1182158, 10, 1, 1, ""),//黑翼勳章
	Array(1112956, 5000, 1, 1, ""),//新星戒指
	Array(1113083, 5000, 1, 1, ""),//骷顱頭戒指
];

var Jackpot6 = [ //大獎第1期  // 機率需陣列 越大越排前
	Array(1202161, 150, 1, 1, ""),//
	Array(1202162, 150, 1, 1, ""),//
	Array(1202163, 150, 1, 1, ""),//
	Array(1202164, 150, 1, 1, ""),//
];

var Jackpot7 = [ //大獎第1期  // 機率需陣列 越大越排前
	Array(1053427, 100, 1, 1, ""),//
	Array(1053704, 100, 1, 1, ""),//
	Array(1005349, 100, 1, 1, ""),//
	Array(1005782, 100, 1, 1, ""),//
	Array(1082736, 100, 1, 1, ""),//
	Array(1702618, 100, 1, 1, ""),//

];

轉蛋所需物品 = 5680503;
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
	var itemsl = 5680503;
	txt = "Welcome to the special trip              " + a38 + "\r\n";

	txt += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n"

	txt += "#fs11##b";
	txt += "#r說明:#b需要1顆#v" + 轉蛋所需物品 + "#,當前擁有#v" + itemsl + "#:[#r #c" + itemsl + "##b ]個\r\n\r\n";
	txt += "玩家請務必留意身上空間是否充足,\r\n\r\n";
	txt += "      今日已抽獎次數:" + player.getEventValue("黃金蘋果概率") + "次 今日大獎次數:[#r" + player.getEventValue("黃金蘋果大獎") + "#b]次\r\n\r\n";



	txt += "\t\t#L1#" + f2 + "點我抽獎#l#L2#" + f3 + "查看當期大獎#l\r\n\r\n";

	//txt += "\t\t\t#L4#" + f2 + "大獎強化#l    #L5#" + f3 + "大獎分解#l\r\n\r\n#L3#" + f4 + "查看內容物#l";

	let selection = npc.askMenu(txt, 9330114);
	var Jackpotchance;
	var chance;
	var finalitem;
	var finalchance;
	var random;
	var item;
	switch (selection) {
		case 4:
			player.runScript("蘋果大獎強化");
			break;
		case 5:
			player.runScript("蘋果大獎分解");
			break;
		case 1:
			while (true) {
				let TEST;
				if (player.getEventValue("黃金蘋果概率") > 200 && player.getEventValue("黃金蘋果概率") < 300) {
					Jackpotchance = Math.floor(Math.random() * 3500);//獎池總機率
				} else if (player.getEventValue("黃金蘋果概率") > 300 && player.getEventValue("黃金蘋果概率") < 400) {
					Jackpotchance = Math.floor(Math.random() * 1500);//獎池總機率
				} else if (player.getEventValue("黃金蘋果概率") > 400 && player.getEventValue("黃金蘋果概率") < 500) {
					Jackpotchance = Math.floor(getMinAndMax(1, 100));//獎池總機率
				} else if (player.getEventValue("黃金蘋果概率") > 500 && player.getEventValue("黃金蘋果概率") < 5000) {
					Jackpotchance = Math.floor(getMinAndMax(60, 65));//獎池總機率
				} else {
					Jackpotchance = Math.floor(Math.random() * 5000);//獎池總機率
				}





				if (player.hasItem(轉蛋所需物品, 1) < 1) {
					npc.say("#fs14##b玩家持有的#v" + 轉蛋所需物品 + "#不足");
				} else if (player.getFreeSlots(1) < 1 || player.getFreeSlots(2) < 1 || player.getFreeSlots(4) < 1 || player.getFreeSlots(5) < 1) {
					npc.say("#fs14##b身上背包空間不足。");
				} else {
					if (Jackpotchance == 60) {//開啟轉蛋機 計算機率 並進入大獎獎池 100=1%
						if (true) { //第1期
							chance = Math.floor(Math.random() * 100);
							finalitem = Array();
							if (week == 1) {
								for (var i = 0; i < Jackpot1.length; i++) {
									if (Jackpot1[i][1] >= chance) {
										finalitem.push(Jackpot1[i]);
									}
								}
							} else if (week == 2) {
								for (var i = 0; i < Jackpot2.length; i++) {
									if (Jackpot2[i][1] >= chance) {
										finalitem.push(Jackpot2[i]);
									}
								}
							} else if (week == 3) {
								for (var i = 0; i < Jackpot3.length; i++) {
									if (Jackpot3[i][1] >= chance) {
										finalitem.push(Jackpot3[i]);
									}
								}
							} else if (week == 4) {
								for (var i = 0; i < Jackpot4.length; i++) {
									if (Jackpot4[i][1] >= chance) {
										finalitem.push(Jackpot4[i]);
									}
								}
							} else if (week == 5) {
								for (var i = 0; i < Jackpot5.length; i++) {
									if (Jackpot5[i][1] >= chance) {
										finalitem.push(Jackpot5[i]);
									}
								}
							} else if (week == 6) {
								for (var i = 0; i < Jackpot6.length; i++) {
									if (Jackpot6[i][1] >= chance) {
										finalitem.push(Jackpot6[i]);
									}
								}
							} else if (week == 0) {
								for (var i = 0; i < Jackpot7.length; i++) {
									if (Jackpot7[i][1] >= chance) {
										finalitem.push(Jackpot7[i]);
									}
								}
							}

							random = new java.util.Random();
							finalchance = random.nextInt(finalitem.length);

							if (finalitem.length != 0) {
								if (week == 1) {
									if (player.getEventValue("黃金蘋果大獎") < 3) {
										itemId1 = Jackpot1[finalchance][0];
										quantity1 = Jackpot1[finalchance][2];
										player.gainItem(itemId1, quantity1);
										player.addEventValue("黃金蘋果大獎", 1, 1);
										npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "獲得魔法馬車第一期大獎!抽獎次數:" + player.getEventValue("黃金蘋果概率") + "");
										player.resetEventValue("黃金蘋果概率");
									} else {
										player.gainItem(4002003, 30);
										npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "次數已用盡,轉換成捲軸之力!");
										player.resetEventValue("黃金蘋果概率");
									}

								}
								if (week == 2) {
									if (player.getEventValue("黃金蘋果大獎") < 3) {
										itemId2 = Jackpot2[finalchance][0];
										quantity2 = Jackpot2[finalchance][2];
										player.gainItem(itemId2, quantity2);
										player.addEventValue("黃金蘋果大獎", 1, 1);
										npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "獲得魔法馬車第二期大獎! 抽獎次數:" + player.getEventValue("黃金蘋果概率") + "");
										player.resetEventValue("黃金蘋果概率");
									} else {
										player.gainItem(4002003, 30);
										npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "次數已用盡,轉換成捲軸之力!");
										player.resetEventValue("黃金蘋果概率");
									}

								}
								if (week == 3) {
									if (player.getEventValue("黃金蘋果大獎") < 3) {
										itemId3 = Jackpot3[finalchance][0];
										quantity3 = Jackpot3[finalchance][2];
										player.gainItem(itemId3, quantity3);
										player.addEventValue("黃金蘋果大獎", 1, 1);
										npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "獲得魔法馬車第三期大獎!抽獎次數:" + player.getEventValue("黃金蘋果概率") + "");
										player.resetEventValue("黃金蘋果概率");
									} else {
										player.gainItem(4002003, 30);
										npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "次數已用盡,轉換成捲軸之力!");
										player.resetEventValue("黃金蘋果概率");
									}

								}
								if (week == 4) {
									if (player.getEventValue("黃金蘋果大獎") < 3) {
										itemId4 = Jackpot4[finalchance][0];
										quantity4 = Jackpot4[finalchance][2];
										player.gainItem(itemId4, quantity4);
										player.addEventValue("黃金蘋果大獎", 1, 1);
										npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "獲得魔法馬車第四期大獎!抽獎次數:" + player.getEventValue("黃金蘋果概率") + "");
										player.resetEventValue("黃金蘋果概率");
									} else {
										player.gainItem(4002003, 30);
										npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "次數已用盡,轉換成捲軸之力!");
										player.resetEventValue("黃金蘋果概率");
									}

								}
								if (week == 5) {
									if (player.getEventValue("黃金蘋果大獎") < 3) {
										itemId5 = Jackpot5[finalchance][0];
										quantity5 = Jackpot5[finalchance][2];
										player.gainItem(itemId5, quantity5);
										player.addEventValue("黃金蘋果大獎", 1, 1);
										npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "獲得魔法馬車第五期大獎!抽獎次數:" + player.getEventValue("黃金蘋果概率") + "");
										player.resetEventValue("黃金蘋果概率");
									} else {
										player.gainItem(4002003, 30);
										npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "次數已用盡,轉換成捲軸之力!");
										player.resetEventValue("黃金蘋果概率");
									}

								}
								if (week == 6) {
									if (player.getEventValue("黃金蘋果大獎") < 3) {
										itemId6 = Jackpot6[finalchance][0];
										quantity6 = Jackpot6[finalchance][2];
										player.gainItem(itemId6, quantity6);
										player.addEventValue("黃金蘋果大獎", 1, 1);
										npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "獲得魔法馬車第六期大獎!抽獎次數:" + player.getEventValue("黃金蘋果概率") + "");
										player.resetEventValue("黃金蘋果概率");
									} else {
										player.gainItem(4002003, 30);
										npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "次數已用盡,轉換成捲軸之力!");
										player.resetEventValue("黃金蘋果概率");
									}

								}
								if (week == 0) {
									if (player.getEventValue("黃金蘋果大獎") < 3) {
										itemId7 = Jackpot7[finalchance][0];
										quantity7 = Jackpot7[finalchance][2];
										npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "獲得魔法馬車第七期大獎!抽獎次數:" + player.getEventValue("黃金蘋果概率") + "");
										if (player.hasItem(1143159, 1)) {
											finalchance = random.nextInt(finalitem.length - 1);    //勳章放最後-1要扣除最後一個道具這個道具
											itemId7 = Jackpot7[finalchance][0];
											player.gainItem(itemId7, quantity7);
											player.addEventValue("黃金蘋果大獎", 1, 1);
											player.resetEventValue("黃金蘋果概率");
										} else {
											player.gainItem(itemId7, quantity7);
											player.addEventValue("黃金蘋果大獎", 1, 1);
											player.resetEventValue("黃金蘋果概率");
										}
									} else {
										player.gainItem(4002003, 30);
										npc.broadcastPlayerNotice(37, "玩家" + player.getName() + "次數已用盡,轉換成捲軸之力!");
										player.resetEventValue("黃金蘋果概率");
									}

								}
								player.addEventValue("黃金蘋果大獎", 1, 1);
								player.loseItem(轉蛋所需物品, 1);
							}
						} else {
							npc.broadcastNotice("出現異常，請通知管理員~!");
						}
						break;
					} else {
						chance = Math.floor(Math.random() * 10000);
						finalitem = Array();
						for (var i = 0; i < itemList.length; i++) {
							if (itemList[i][1] >= chance) {
								finalitem.push(itemList[i]);
							}
						}
						if (finalitem.length != 0) {

							random = new java.util.Random();
							finalchance = random.nextInt(finalitem.length);
							itemId = finalitem[finalchance][0];
							quantity = finalitem[finalchance][2];
							if (item != -1) {
								player.gainItem(itemId, quantity);
								//player.gainItem(2630612, 1);
								player.loseItem(轉蛋所需物品, 1);
								player.addEventValue("黃金蘋果概率", 1, 1000);
								npc.say("你獲得了 #b#t" + itemId + "##k " + quantity + "個。");
							} else {
								npc.say("請你確認在背包的裝備，消耗，其他窗口中是否有一格以上的空間。");
							}
						} else {
							player.loseItem(轉蛋所需物品, 1);
							npc.say("今天的運氣太差了，什麼都沒有");
						}
					}
				}
			}
			break;

		case 2:
			var txt = "";
			txt += "#fs16##e#r蘋果大獎如下\r\n";
			if (week == 1) {
				txt += "#fs16##e#r\r\n";
				for (var i = 0; i < Jackpot1.length; i++) {
					txt += "#fs14##i" + Jackpot1[i] + "##b#z" + Jackpot1[i] + "#\r\n"

				}
			}
			if (week == 2) {
				txt += "#fs16##e#r\r\n#n";
				for (var i = 0; i < Jackpot2.length; i++) {
					txt += "#fs14##i" + Jackpot2[i] + "##b#z" + Jackpot2[i] + "#\r\n"

				}
			}
			if (week == 3) {
				txt += "#fs16##e#r\r\n#n";
				for (var i = 0; i < Jackpot3.length; i++) {
					txt += "#fs14##i" + Jackpot3[i] + "##b#z" + Jackpot3[i] + "#\r\n"

				}
			}
			if (week == 4) {
				txt += "#fs16##e#r\r\n#n";
				for (var i = 0; i < Jackpot4.length; i++) {
					txt += "#fs14##i" + Jackpot4[i] + "##b#z" + Jackpot4[i] + "#\r\n"

				}
			}
			if (week == 5) {
				txt += "#fs16##e#r\r\n#n";
				for (var i = 0; i < Jackpot5.length; i++) {
					txt += "#fs14##i" + Jackpot5[i] + "##b#z" + Jackpot5[i] + "#\r\n"

				}
			}
			if (week == 6) {
				txt += "#fs16##e#r\r\n#n";
				for (var i = 0; i < Jackpot6.length; i++) {
					txt += "#fs14##i" + Jackpot6[i] + "##b#z" + Jackpot6[i] + "#\r\n"

				}
			}
			if (week == 0) {
				txt += "#fs16##e#r\r\n#n";
				for (var i = 0; i < Jackpot7.length; i++) {
					txt += "#fs14##i" + Jackpot7[i] + "##b#z" + Jackpot7[i] + "#\r\n"

				}
			}

			selection = npc.askMenu(txt, 9062459);
			break;
		case 3:
			var txt = "";
			txt += "#fs17##e#b機台物品如下\r\n";
			txt += "#fs16##g#v4002003#";
			txt += "#fs16##g#v2470000#";
			txt += "#fs16##g#v2472000#";
			txt += "#fs16##g#v5062009#";
			txt += "#fs16##g#v5062017#";
			txt += "#fs16##g#v5062020#";
			txt += "#fs16##g#v5062500#";
			selection = npc.askMenu(txt, 9062459);
			break;
	}
}
function getMinAndMax(minVal, maxVal) {//隨機 最大值 最小值
	return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}