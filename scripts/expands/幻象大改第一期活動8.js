
var status = -1
var txt;
/*------------------------- 表情符號 -------------------------*/
var SR1 = "#fUI/SoulUI.img/DungeonEffect/2350012/2#"; //最上面的
var SR2 = "#fUI/SoulUI.img/DungeonEffect/2350012/4#"; //最上面的
var SR3 = "#fUI/AllianceUI.img/AllianceUI/gradeIcon/5/icon#"; //最上面的
var SR4 = "#fUI/SoulUI.img/DungeonEffect/2350012/3#"; //最上面的
var SR5 = "#fEffect/EffectPL.img/Beautyroid/connect_end/0"; //區隔條
var SR6 = "#fEffect/EventEffect.img/typingDefense/balloonIcon/blind/0#"; //最上面的星星-6
var SR7 = "#fEffect/CharacterEff/1050334/1/2#"; //最上面的星星-7
var SR8 = "#fEffect/CharacterEff/1050334/1/3#"; //最上面的星星-8
var SR9 = "#fEffect/CharacterEff/1050334/2/0#"; //最上面的星星-9
var SR10 = "#fEffect/CharacterEff/1050334/2/1#"; //最上面的星星-10
var SR11 = "#fEffect/CharacterEff/1050334/2/2#"; //最上面的星星-11
var SR12 = "#fEffect/CharacterEff/1050334/2/3#"; //最上面的星星-12
var GC2 = "#fEffect/CharacterEff/1005267/4/0#"; //"+z+"//小選項用
var XD0 = "#fEffect/CharacterEff/1051366/0/0#";
var GC1 = "#fEffect/CharacterEff/1082700/2/0#";
var zx26 = "#fMap/MapHelper.img/weather/NatureTale1/5#";
var zx7 = "#fMap/MapHelper.img/weather/rose/2#";
var s0 = "#fUI/CashShop/CSBeauty/hairColor/Disable/0#"
var s1 = "#fUI/CashShop/CSBeauty/hairColor/Disable/1#"
var s2 = "#fUI/CashShop/CSBeauty/hairColor/Disable/2#"
var s3 = "#fUI/CashShop/CSBeauty/hairColor/Disable/3#"
var s4 = "#fUI/CashShop/CSBeauty/hairColor/Disable/4#"
var s5 = "#fUI/CashShop/CSBeauty/hairColor/Disable/5#"
var s6 = "#fUI/CashShop/CSBeauty/hairColor/Disable/6#"
var s7 = "#fUI/CashShop/CSBeauty/hairColor/Disable/7#"
var s8 = "#fUI/CashShop/CSBeauty/hairColor/Disable/8#"
var zx43 = "#fMap/MapHelper.img/weather/lovelypartybear/0#";

let item = 5062009;
let foritem = 30;
let needitem = 4310235;
let needcount100 = 600;
let needcount150 = 800;
let needcount200 = 1000;
let needcount220 = 1250;
let needcount230 = 1250;
let needcount240 = 1250;
let needcount250 = 1250;

//player.getLevel() addEventValue getEventValue

txt = "\r\n  " + zx26 + "#fs32##e#fc0xFFE508F3#【圓夢活動】#l" + zx26 + "\r\n#n";
txt += "#fs15##b";
if (player.getEventValue("圓夢大改第一期紅色方塊1") < 5) {
	txt += "#r[100等]:#b#v" + item + "#*" + foritem + "個 需要:[#v" + needitem + "#*" + needcount100 + "]\r\n";
}
if (player.getEventValue("圓夢大改第一期紅色方塊2") < 5) {
	txt += "#r[150等]:#b#v" + item + "#*" + foritem + "個 需要:[#v" + needitem + "#*" + needcount150 + "]\r\n";
}
if (player.getEventValue("圓夢大改第一期紅色方塊3") < 5) {
	txt += "#r[200等]:#b#v" + item + "#*" + foritem + "個 需要:[#v" + needitem + "#*" + needcount200 + "]\r\n";
}
if (player.getEventValue("圓夢大改第一期紅色方塊4") < 5) {
	txt += "#r[220等]:#b#v" + item + "#*" + foritem + "個 需要:[#v" + needitem + "#*" + needcount220 + "]\r\n";
}
if (player.getEventValue("圓夢大改第一期紅色方塊5") < 5) {
	txt += "#r[230等]:#b#v" + item + "#*" + foritem + "個 需要:[#v" + needitem + "#*" + needcount230 + "]\r\n";
}
if (player.getEventValue("圓夢大改第一期紅色方塊6") < 5) {
	txt += "#r[240等]:#b#v" + item + "#*" + foritem + "個 需要:[#v" + needitem + "#*" + needcount240 + "]\r\n";
}
if (player.getEventValue("圓夢大改第一期紅色方塊7") < 5) {
	txt += "#r[250等]:#b#v" + item + "#*" + foritem + "個 需要:[#v" + needitem + "#*" + needcount250 + "]\r\n";
}
txt += "#d";
txt += "領取時,腳本會直接執行五次\r\n";
txt += "每個獎勵領滿五次將會隱藏起來\r\n";
txt += "";
txt += "";
if (player.getEventValue("圓夢大改第一期紅色方塊1") < 5) {
	txt += "#r#L0#100等獎勵領取#l\r\n";
}
if (player.getEventValue("圓夢大改第一期紅色方塊2") < 5) {
	txt += "#r#L1#150等獎勵領取#l\r\n";
}
if (player.getEventValue("圓夢大改第一期紅色方塊3") < 5) {
	txt += "#r#L2#200等獎勵領取#l\r\n";
}
if (player.getEventValue("圓夢大改第一期紅色方塊4") < 5) {
	txt += "#r#L3#220等獎勵領取#l\r\n";
}
if (player.getEventValue("圓夢大改第一期紅色方塊5") < 5) {
	txt += "#r#L4#230等獎勵領取#l\r\n";
}
if (player.getEventValue("圓夢大改第一期紅色方塊6") < 5) {
	txt += "#r#L5#240等獎勵領取#l\r\n";
}
if (player.getEventValue("圓夢大改第一期紅色方塊7") < 5) {
	txt += "#r#L6#250等獎勵領取#l\r\n";
}

let selection = npc.askMenu(txt, true);

switch (selection) {


	case 0:

		// !player.hasItem(needitem,needcount100);
		if (player.getFreeSlots(4) < 8) {
			npc.say("#fs14##b其他欄位空間不足8格");
		} else if (player.getLevel() <= 100) {
			npc.say("#fs14##b玩家等級不足哦!");
		} else {
			if (player.getEventValue("圓夢大改第一期紅色方塊1") < 5) {
				for (var i = 0; i < 5; i++) {
					if (!player.hasItem(needitem, needcount100)) {
						npc.say("#fs14##b#v" + needitem + "##z" + needitem + "#不足");
					} else if (player.getEventValue("圓夢大改第一期紅色方塊1") < 5) {
						player.gainItem(item, foritem);
						player.loseItem(needitem, needcount100);
						player.addEventValue("圓夢大改第一期紅色方塊1", 1, 1000);
					}

				}
			}


		}

		break;

	case 1:
		if (player.getFreeSlots(4) < 8) {
			npc.say("#fs14##b其他欄位空間不足8格");
		} else if (player.getLevel() <= 150) {
			npc.say("#fs14##b玩家等級不足哦!");
		} else {
			if (player.getEventValue("圓夢大改第一期紅色方塊2") < 5) {
				for (var i = 0; i < 5; i++) {
					if (!player.hasItem(needitem, needcount150)) {
						npc.say("#fs14##b#v" + needitem + "##z" + needitem + "#不足");
					} else if (player.getEventValue("圓夢大改第一期紅色方塊2") < 5) {
						player.gainItem(item, foritem);
						player.loseItem(needitem, needcount150);
						player.addEventValue("圓夢大改第一期紅色方塊2", 1, 1000);
					}

				}
			}


		}

		break;
	case 2:
		if (player.getFreeSlots(4) < 8) {
			npc.say("#fs14##b其他欄位空間不足8格");
		} else if (player.getLevel() <= 150) {
			npc.say("#fs14##b玩家等級不足哦!");
		} else {
			if (player.getEventValue("圓夢大改第一期紅色方塊3") < 5) {
				for (var i = 0; i < 5; i++) {
					if (!player.hasItem(needitem, needcount200)) {
						npc.say("#fs14##b#v" + needitem + "##z" + needitem + "#不足");
					} else if (player.getEventValue("圓夢大改第一期紅色方塊3") < 5) {
						player.gainItem(item, foritem);
						player.loseItem(needitem, needcount200);
						player.addEventValue("圓夢大改第一期紅色方塊3", 1, 1000);
					}

				}
			}


		}

		break;
	case 3:
		if (player.getFreeSlots(4) < 8) {
			npc.say("#fs14##b其他欄位空間不足8格");
		} else if (player.getLevel() <= 150) {
			npc.say("#fs14##b玩家等級不足哦!");
		} else {
			if (player.getEventValue("圓夢大改第一期紅色方塊4") < 5) {
				for (var i = 0; i < 5; i++) {
					if (!player.hasItem(needitem, needcount220)) {
						npc.say("#fs14##b#v" + needitem + "##z" + needitem + "#不足");
					} else if (player.getEventValue("圓夢大改第一期紅色方塊4") < 5) {
						player.gainItem(item, foritem);
						player.loseItem(needitem, needcount220);
						player.addEventValue("圓夢大改第一期紅色方塊4", 1, 1000);
					}

				}
			}


		}

		break;
	case 4:
		if (player.getFreeSlots(4) < 8) {
			npc.say("#fs14##b其他欄位空間不足8格");
		} else if (player.getLevel() <= 150) {
			npc.say("#fs14##b玩家等級不足哦!");
		} else {
			if (player.getEventValue("圓夢大改第一期紅色方塊5") < 5) {
				for (var i = 0; i < 5; i++) {
					if (!player.hasItem(needitem, needcount230)) {
						npc.say("#fs14##b#v" + needitem + "##z" + needitem + "#不足");
					} else if (player.getEventValue("圓夢大改第一期紅色方塊5") < 5) {
						player.gainItem(item, foritem);
						player.loseItem(needitem, needcount230);
						player.addEventValue("圓夢大改第一期紅色方塊5", 1, 1000);
					}

				}
			}


		}

		break;
	case 5:
		if (player.getFreeSlots(4) < 8) {
			npc.say("#fs14##b其他欄位空間不足8格");
		} else if (player.getLevel() <= 150) {
			npc.say("#fs14##b玩家等級不足哦!");
		} else {
			if (player.getEventValue("圓夢大改第一期紅色方塊6") < 5) {
				for (var i = 0; i < 5; i++) {
					if (!player.hasItem(needitem, needcount240)) {
						npc.say("#fs14##b#v" + needitem + "##z" + needitem + "#不足");
					} else if (player.getEventValue("圓夢大改第一期紅色方塊6") < 5) {
						player.gainItem(item, foritem);
						player.loseItem(needitem, needcount240);
						player.addEventValue("圓夢大改第一期紅色方塊6", 1, 1000);
					}

				}
			}


		}

		break;
	case 6:
		if (player.getFreeSlots(4) < 8) {
			npc.say("#fs14##b其他欄位空間不足8格");
		} else if (player.getLevel() <= 150) {
			npc.say("#fs14##b玩家等級不足哦!");
		} else {
			if (player.getEventValue("圓夢大改第一期紅色方塊7") < 5) {
				for (var i = 0; i < 5; i++) {
					if (!player.hasItem(needitem, needcount250)) {
						npc.say("#fs14##b#v" + needitem + "##z" + needitem + "#不足");
					} else if (player.getEventValue("圓夢大改第一期紅色方塊7") < 5) {
						player.gainItem(item, foritem);
						player.loseItem(needitem, needcount250);
						player.addEventValue("圓夢大改第一期紅色方塊7", 1, 1000);
					}

				}
			}


		}

		break;


}