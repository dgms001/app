var a = 0;
var text;
var selects; //記錄玩家的選項
var buynum = 0;
var itemlist = Array(

	Array(1442284, 1),//			
	Array(1312212, 1),//			
	Array(1382273, 1),//			
	Array(1252105, 1),//			
	Array(1582043, 1),//			
	Array(1452265, 1),//		
	Array(1322263, 1),//		
	Array(1522151, 1),//			
	Array(1262050, 1),//			
	Array(1592021, 1),//			
	Array(1462251, 1),//		
	Array(1332288, 1),//		
	Array(1532156, 1),//	

	Array(1402267, 1),//		
	Array(1403021, 1),//		
	Array(1272039, 1),//			
	Array(1472274, 1),//			
	Array(1212128, 1),//			
	Array(1213021, 1),//			
	Array(1214021, 1),//			
	Array(1542127, 1),//			
	Array(1412188, 1),//			
	Array(1282039, 1),//			
	Array(1482231, 1),//			
	Array(1222121, 1),//			
	Array(1552129, 1),//			
	Array(1422196, 1),//			
	Array(1292021, 1),//			
	Array(1492244, 1),//			
	Array(1362148, 1),//			
	Array(1232121, 1),//			
	Array(1432226, 1),//			
	Array(1302354, 1),//			
	Array(1372236, 1),//神秘之影鎖鏈			
	Array(1242138, 1),//神秘之影魔力手套			
	Array(1242140, 1)



);
var buynum = 1;

text = "#r#h0#,#e#k您可以在這裡兌換#e#r封印的創世裝備,#r 請選擇你想要兌換的物品 \r\n#r";
for (var i = 0; i < itemlist.length; i++) {
	var validtime = "";
	if (itemlist[i][2] != null) {
		validtime = "/ #e" + itemlist[i][2] + "天權#n";
	}
	text += "#b#L" + i + "##i" + itemlist[i] + ":##t" + itemlist[i] + "# " + validtime + " - #r" + itemlist[i][1] + "個#r#v4310107#\r\n";

}
selects = npc.askMenuA(text);

var yes = npc.askYesNo("你想購買" + buynum + "個#r#i" + itemlist[selects][0] + "##k？\r\n你將使用掉" + (buynum * itemlist[selects][1]) + "八岐硬幣");
if (yes == 1) {
	if (!player.canGainItem(itemlist[selects][0], buynum)) {
		npc.say("背包空間不足");
	} else if (player.hasItem(4310107, buynum * itemlist[selects][1])) {
		if (itemlist[selects][2] != null) {
			var timeStamp = java.lang.System.currentTimeMillis();
			var expirationDate = timeStamp + itemlist[selects][2] * 86400 * 1000;
			let newItem = player.makeItemWithId(itemlist[selects][0]);

			newItem.setExpiration(expirationDate);
			player.gainItem(newItem);
			player.loseItem(4310107, buynum * itemlist[selects][1]);
			npc.say("購買成功了！");
		} else {
			player.gainItem(itemlist[selects][0], buynum);
			var number = buynum * itemlist[selects][1];
			player.loseItem(4310107, number);
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