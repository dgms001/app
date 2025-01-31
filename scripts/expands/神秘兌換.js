var a = 0;
var text;
var selects; //記錄玩家的選項
var buynum = 0;
var itemlist = Array(

	Array(1212120, 50),//			
	Array(1222113, 50),//			
	Array(1232113, 50),//			
	Array(1242121, 50),//			
	Array(1242122, 50),//			
	Array(1252098, 50),//		
	Array(1404108, 50),//		
	Array(1262039, 50),//			
	Array(1302343, 50),//			
	Array(1312203, 50),//			
	Array(1322255, 50),//		
	Array(1214018, 50),//		
	Array(1332279, 50),//	
	Array(1403018, 50),//	
	Array(1342104, 50),//		
	Array(1213018, 50),//		
	Array(1362140, 50),//			
	Array(1372228, 50),//			
	Array(1382265, 50),//			
	Array(1402259, 50),//			
	Array(1412181, 50),//			
	Array(1422189, 50),//			
	Array(1432218, 50),//			
	Array(1442274, 50),//			
	Array(1452257, 50),//			
	Array(1462243, 50),//			
	Array(1472265, 50),//			
	Array(1482221, 50),//			
	Array(1492235, 50),//			
	Array(1522143, 50),//			
	Array(1532150, 50),//			
	Array(1542117, 50),//			
	Array(1552119, 50),//			
	Array(1582023, 50),//			
	Array(1272017, 50),//神秘之影鎖鏈			
	Array(1282017, 50),//神秘之影魔力手套			
	Array(1592020, 50),
	Array(1152196, 50),//			
	Array(1152197, 50),//			
	Array(1152198, 50),//			
	Array(1152199, 50),//			
	Array(1152200, 50),//			
	Array(1004808, 50),//			
	Array(1004809, 50),//			
	Array(1004810, 50),//			
	Array(1004811, 50),//			
	Array(1004812, 50),//			
	Array(1102940, 50),//			
	Array(1102941, 50),//			
	Array(1102942, 50),//			
	Array(1102943, 50),//			
	Array(1102944, 50),//			
	Array(1082695, 50),//			
	Array(1082696, 50),//			
	Array(1082697, 50),//			
	Array(1082698, 50),//			
	Array(1082699, 50),//			
	Array(1053063, 50),//	
	Array(1292018, 50),//		
	Array(1053064, 50),//			
	Array(1053065, 50),//			
	Array(1053066, 50),//			
	Array(1053067, 50),//			
	Array(1073158, 50),//			
	Array(1073159, 50),//			
	Array(1073160, 50),//			
	Array(1073161, 50),//	
	Array(1562009, 50),//	
	Array(1572009, 50),//			
	Array(1073162, 50)//			


);
var buynum = 1;

text = "#r#h0#,#e#k您可以在這裡兌換#e#r神秘裝備,#r 請選擇你想要兌換的物品 \r\n#r";
for (var i = 0; i < itemlist.length; i++) {
	var validtime = "";
	if (itemlist[i][2] != null) {
		validtime = "/ #e" + itemlist[i][2] + "天權#n";
	}
	text += "#b#L" + i + "##i" + itemlist[i] + ":##t" + itemlist[i] + "# " + validtime + " - #r" + itemlist[i][1] + "個#r#v4310218#\r\n";

}
selects = npc.askMenuA(text);

var yes = npc.askYesNo("你想購買" + buynum + "個#r#i" + itemlist[selects][0] + "##k？\r\n你將使用掉" + (buynum * itemlist[selects][1]) + "妖怪硬幣");
if (yes == 1) {
	if (!player.canGainItem(itemlist[selects][0], buynum)) {
		npc.say("背包空間不足");
	} else if (player.hasItem(4310218, buynum * itemlist[selects][1])) {
		if (itemlist[selects][2] != null) {
			var timeStamp = java.lang.System.currentTimeMillis();
			var expirationDate = timeStamp + itemlist[selects][2] * 86400 * 1000;
			let newItem = player.makeItemWithId(itemlist[selects][0]);

			newItem.setExpiration(expirationDate);
			player.gainItem(newItem);
			player.loseItem(4310218, buynum * itemlist[selects][1]);
			npc.say("購買成功了！");
		} else {
			player.gainItem(itemlist[selects][0], buynum);
			var number = buynum * itemlist[selects][1];
			player.loseItem(4310218, number);
			npc.say("恭喜您成功兌換#i" + itemlist[selects][0] + ":# #r#t" + itemlist[selects][0] + "##k。");
		}
	} else {
		npc.say("對不起，你沒有足夠的妖怪硬幣。");
	}
}


function askNumber(str, def, min, max) {
	if (cm.getQuestInfo(9601) == 1) {
		var number = npc.askNumberE(str, def, min, max);
	} else {
		var number = npc.askNumber(str, def, min, max);
	}
}


function sendNext(selStr) {
	if (cm.getQuestInfo(9601) == 1) {
		cm.sendNextE(selStr);
	} else {
		cm.sendNext(selStr);
	}
}

function asktext(selStr, min, max) {
	if (cm.getQuestInfo(9601) == 1) {
		cm.askTextE(selStr, min, max);
	} else {
		cm.askText(selStr, min, max);
	}
}

function ask(selStr) {
	if (cm.getQuestInfo(9601) == 1) {
		cm.askMenuA(selStr);
	} else {
		npc.askMenu(selStr, true);
	}
}


function sendOk(text) {
	if (cm.getQuestInfo(9601) == 1) {
		npc.sayE(text);
	} else {
		npc.say(text);
	}

}

function askYesNo(text) {
	if (cm.getQuestInfo(9601) == 1) {
		npc.askYesNoE(text);
	} else {
		npc.askYesNo(text);
	}
}