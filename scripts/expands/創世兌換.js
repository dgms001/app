var a = 0;
var text;
var selects; //記錄玩家的選項
var buynum = 0;
var itemlist = Array(

	Array(1302355, 1),//			
	Array(1402268, 1),//			
	Array(1312213, 1),//			
	Array(1412189, 1),//			
	Array(1213022, 1),//			
	Array(1322264, 1),//		
	Array(1592022, 1),//		
	Array(1422197, 1),//			
	Array(1432227, 1),//			
	Array(1302355, 1),//			
	Array(1442285, 1),//		
	Array(1232122, 1),//		
	Array(1382274, 1),//	
	Array(1372237, 1),//	
	Array(1452266, 1),//		
	Array(1462252, 1),//		
	Array(1403022, 1),//
	Array(1592022, 1),//			
	Array(1332289, 1),//			
	Array(1472275, 1),//			
	Array(1492245, 1),//			
	Array(1482232, 1),//			
	Array(1532157, 1),//			
	Array(1362149, 1),//			
	Array(1272040, 1),//			
	Array(1552130, 1),//			
	Array(1542128, 1),//			
	Array(1252106, 1),//			
	Array(1212129, 1),//			
	Array(1522152, 1),//			
	Array(1242139, 1),//			
	Array(1262051, 1),//			
	Array(1282040, 1),//			
	Array(1222122, 1),//			
	Array(1582044, 1)//神秘之影鎖鏈			




);
var buynum = 1;

text = "#r#h0#,#e#k您可以在這裡兌換#e#r解封的創世裝備,#r 請選擇你想要兌換的物品 \r\n#r";
for (var i = 0; i < itemlist.length; i++) {
	var validtime = "";
	if (itemlist[i][2] != null) {
		validtime = "/ #e" + itemlist[i][2] + "天權#n";
	}
	text += "#b#L" + i + "##i" + itemlist[i] + ":##t" + itemlist[i] + "# " + validtime + " - #r" + itemlist[i][1] + "個#r#v4310260#\r\n";

}
selects = npc.askMenuA(text);

var yes = npc.askYesNo("你想購買" + buynum + "個#r#i" + itemlist[selects][0] + "##k？\r\n你將使用掉" + (buynum * itemlist[selects][1]) + "創世精華");
if (yes == 1) {
	if (!player.canGainItem(itemlist[selects][0], buynum)) {
		npc.say("背包空間不足");
	} else if (player.hasItem(4310260, buynum * itemlist[selects][1])) {
		if (itemlist[selects][2] != null) {
			var timeStamp = java.lang.System.currentTimeMillis();
			var expirationDate = timeStamp + itemlist[selects][2] * 86400 * 1000;
			let newItem = player.makeItemWithId(itemlist[selects][0]);

			newItem.setExpiration(expirationDate);
			player.gainItem(newItem);
			player.loseItem(4310260, buynum * itemlist[selects][1]);
			npc.say("購買成功了！");
		} else {
			player.gainItem(itemlist[selects][0], buynum);
			var number = buynum * itemlist[selects][1];
			player.loseItem(4310260, number);
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